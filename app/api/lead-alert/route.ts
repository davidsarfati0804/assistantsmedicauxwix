import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const FORM_LABELS: Record<string, string> = {
  contact: 'Formulaire de contact (footer, accueil)',
  'contact-page': 'Formulaire de contact (page /contact)',
  'rendez-vous': 'Formulaire de prise de rendez-vous',
};

const FIELD_LABELS: Record<string, string> = {
  'nom-prenom': 'Nom',
  telephone: 'Téléphone',
  email: 'Email',
};

export async function POST(req: NextRequest) {
  const { GMAIL_SMTP_HOST, GMAIL_SMTP_PORT, GMAIL_SMTP_USER, GMAIL_SMTP_PASS } = process.env;
  if (!GMAIL_SMTP_HOST || !GMAIL_SMTP_PORT || !GMAIL_SMTP_USER || !GMAIL_SMTP_PASS) {
    return NextResponse.json({ error: 'SMTP Gmail non configuré' }, { status: 500 });
  }

  let formName = 'inconnu';
  let data: Record<string, unknown> = {};
  try {
    const body = await req.json();
    if (typeof body?.form_name === 'string') formName = body.form_name;
    if (body?.data && typeof body.data === 'object') data = body.data;
  } catch {
    // corps vide ou invalide : on garde les valeurs par défaut
  }

  const label = FORM_LABELS[formName] ?? formName;
  const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

  const leadLines = Object.entries(data)
    .filter(([, v]) => typeof v === 'string' && v.trim())
    .map(([k, v]) => `${FIELD_LABELS[k] ?? k} : ${v}`);

  const leadBlock = leadLines.length
    ? `\nInfos déjà saisies :\n${leadLines.join('\n')}\n`
    : '\n(Aucune information saisie pour le moment — le visiteur vient juste de cliquer dans le formulaire.)\n';

  const transporter = nodemailer.createTransport({
    host: GMAIL_SMTP_HOST,
    port: Number(GMAIL_SMTP_PORT),
    secure: Number(GMAIL_SMTP_PORT) === 465,
    auth: { user: GMAIL_SMTP_USER, pass: GMAIL_SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Mesdocs — Alerte formulaire" <${GMAIL_SMTP_USER}>`,
      to: 'contact@ge-mesdocs.fr',
      subject: `Un visiteur remplit un formulaire — ${label}${leadLines.length ? ` (${leadLines[0]})` : ''}`,
      text: `Un visiteur est en train de remplir "${label}" sur assistants-medicaux.com, à ${now}.\nIl n'a pas encore validé — ceci est une alerte précoce, pas une confirmation de lead.\n${leadBlock}`,
    });
  } catch (err) {
    console.error('lead-alert: échec envoi email', err);
    return NextResponse.json({ error: 'Envoi échoué' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
