import { createHash } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const forms: Record<string, string> = {
  contact: 'Formulaire du pied de page',
  'contact-page': 'Formulaire de contact',
  'rendez-vous': 'Formulaire de rendez-vous',
};
const labels: Record<string, string> = { 'nom-prenom': 'Nom', telephone: 'Téléphone', email: 'Email' };
// Best-effort protection per warm instance; no raw addresses or contact details stored here.
const recent = new Map<string, number>();
const attempts = new Map<string, { count: number; expires: number }>();
const json = (body: Record<string, unknown>, status: number) => NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (!origin || ![request.nextUrl.origin, 'https://assistants-medicaux.com'].includes(origin)) return json({ error: 'Origine non autorisée' }, 403);
  if (!request.headers.get('content-type')?.startsWith('application/json')) return json({ error: 'Format non pris en charge' }, 415);
  if (Number(request.headers.get('content-length') || 0) > 4096) return json({ error: 'Requête trop volumineuse' }, 413);
  const raw = await request.text();
  if (Buffer.byteLength(raw) > 4096) return json({ error: 'Requête trop volumineuse' }, 413);
  let body;
  try { body = JSON.parse(raw); } catch { return json({ error: 'Requête invalide' }, 400); }
  if (!body || !Object.hasOwn(forms, body.form_name) || typeof body.alert_id !== 'string' || !/^[0-9a-f-]{36}$/i.test(body.alert_id) || !body.data || typeof body.data !== 'object') return json({ error: 'Requête invalide' }, 400);
  const data: Record<string, string> = {};
  for (const field of Object.keys(labels)) {
    const value = body.data[field];
    if (typeof value === 'string' && value.trim()) data[field] = value.trim().slice(0, 254).replace(/[\r\n]/g, ' ');
  }
  if (!Object.keys(data).length) return json({ error: 'Aucune coordonnée renseignée' }, 400);
  const now = Date.now();
  for (const [key, expires] of recent) if (expires <= now) recent.delete(key);
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  if (recent.has(body.alert_id)) return json({ ok: true }, 200);
  const address = request.headers.get('x-nf-client-connection-ip') || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  const key = createHash('sha256').update(address).digest('hex');
  const rate = attempts.get(key) || { count: 0, expires: now + 60_000 };
  if (rate.count >= 5 || attempts.size > 10_000 || recent.size > 10_000) return json({ error: 'Trop de requêtes' }, 429);
  rate.count++; attempts.set(key, rate);
  const { GMAIL_SMTP_HOST, GMAIL_SMTP_PORT, GMAIL_SMTP_USER, GMAIL_SMTP_PASS } = process.env;
  if (!GMAIL_SMTP_HOST || !GMAIL_SMTP_PORT || !GMAIL_SMTP_USER || !GMAIL_SMTP_PASS) return json({ error: 'Service temporairement indisponible' }, 503);
  const transporter = nodemailer.createTransport({ host: GMAIL_SMTP_HOST, port: Number(GMAIL_SMTP_PORT), secure: Number(GMAIL_SMTP_PORT) === 465, auth: { user: GMAIL_SMTP_USER, pass: GMAIL_SMTP_PASS }, connectionTimeout: 5000, socketTimeout: 8000 });
  recent.set(body.alert_id, now + 20 * 60_000);
  try {
    await transporter.sendMail({
      from: { name: 'Mesdocs — Formulaire commencé', address: GMAIL_SMTP_USER },
      to: 'contact@ge-mesdocs.fr',
      subject: `Formulaire commencé, non validé — ${forms[body.form_name]}`,
      text: `Un visiteur a commencé un formulaire sur assistants-medicaux.com puis quitté le formulaire ou l’onglet.\nFormulaire : ${forms[body.form_name]}\nDate : ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}\n\nCoordonnées déjà renseignées :\n${Object.entries(data).map(([field, value]) => `${labels[field]} : ${value}`).join('\n')}\n\nIl s’agit d’une alerte de saisie partielle, pas d’une demande envoyée ni d’un contact qualifié. Le visiteur peut encore reprendre et envoyer son formulaire.`,
    });
    return json({ ok: true }, 200);
  } catch {
    recent.delete(body.alert_id);
    console.error('lead-alert: échec du service email');
    return json({ error: 'Envoi temporairement indisponible' }, 502);
  }
}
