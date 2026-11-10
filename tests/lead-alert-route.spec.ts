import { test, expect } from '@playwright/test';
import nodemailer, { type SendMailOptions } from 'nodemailer';
import { NextRequest } from 'next/server';
import { POST } from '../app/api/lead-alert/route';

const original = nodemailer.createTransport;
const keys = ['GMAIL_SMTP_HOST', 'GMAIL_SMTP_PORT', 'GMAIL_SMTP_USER', 'GMAIL_SMTP_PASS'] as const;
let previous: Record<string, string | undefined>;
let mails: SendMailOptions[];
let fail = false;

test.beforeEach(() => {
  previous = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  Object.assign(process.env, { GMAIL_SMTP_HOST: 'smtp.example.invalid', GMAIL_SMTP_PORT: '465', GMAIL_SMTP_USER: 'test@example.invalid', GMAIL_SMTP_PASS: 'unit-test-placeholder' });
  mails = []; fail = false;
  nodemailer.createTransport = (() => ({ sendMail: async (options: SendMailOptions) => { if (fail) throw new Error('simulated'); mails.push(options); return {}; } })) as unknown as typeof original;
});
test.afterEach(() => {
  nodemailer.createTransport = original;
  for (const key of keys) { if (previous[key] === undefined) delete process.env[key]; else process.env[key] = previous[key]; }
});

function request(body: unknown, origin = 'https://assistants-medicaux.com') {
  return new NextRequest('https://assistants-medicaux.com/api/lead-alert', { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json', 'x-nf-client-connection-ip': crypto.randomUUID() }, body: JSON.stringify(body) });
}
const payload = () => ({ form_name: 'contact-page', alert_id: crypto.randomUUID(), data: { 'nom-prenom': 'Test', email: 'test@example.invalid', message: 'NE_PAS_ENVOYER', profil: 'autre' } });

test('only the three contact fields reach the fixed recipient, with no free text', async () => {
  const body = payload();
  expect((await POST(request(body))).status).toBe(200);
  expect((await POST(request(body))).status).toBe(200);
  expect(mails).toHaveLength(1);
  expect(mails[0].to).toBe('contact@ge-mesdocs.fr');
  expect(mails[0].subject).toContain('non validé');
  expect(mails[0].text).toContain('pas d’une demande envoyée');
  expect(mails[0].text).toContain('test@example.invalid');
  expect(JSON.stringify(mails)).not.toContain('NE_PAS_ENVOYER');
});

test('bad origins and malformed or empty alerts never send mail', async () => {
  expect((await POST(request(payload(), 'https://external.example'))).status).toBe(403);
  expect((await POST(request({}))).status).toBe(400);
  expect((await POST(request({ ...payload(), data: {} }))).status).toBe(400);
  expect((await POST(request({ ...payload(), form_name: '__proto__' }))).status).toBe(400);
  expect(mails).toHaveLength(0);
});

test('missing SMTP and SMTP errors are handled without reporting success', async () => {
  delete process.env.GMAIL_SMTP_PASS;
  expect((await POST(request(payload()))).status).toBe(503);
  process.env.GMAIL_SMTP_PASS = 'unit-test-placeholder'; fail = true;
  expect((await POST(request(payload()))).status).toBe(502);
  expect(mails).toHaveLength(0);
});
