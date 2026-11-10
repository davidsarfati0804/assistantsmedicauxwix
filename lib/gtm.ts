'use client';

export const MEASUREMENT_ID = 'G-72CR5EDK0P';
export const CONSENT_KEY = 'mesdocs-analytics-consent-v1';
const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;
export type ConsentChoice = 'accepted' | 'refused';
export type LeadProfile = 'medecin' | 'candidat' | 'structure' | 'autre' | 'inconnu';
export type LeadNeed = 'recrutement' | 'information' | 'candidature' | 'devis' | 'autre' | 'inconnu';
export type FormName = 'contact' | 'contact-page' | 'rendez-vous';
type AnalyticsEvent = 'form_start_custom' | 'form_error' | 'generate_lead' | 'click_telephone' | 'click_email' | 'file_download';
type EventParams = { form_name?: FormName; lead_profile?: LeadProfile; lead_need?: LeadNeed; error_type?: 'validation' | 'http_4xx' | 'http_5xx' | 'network' | 'unexpected_response' };

export function readConsent(): ConsentChoice | null {
  try {
    const saved = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null');
    if (saved && ['accepted', 'refused'].includes(saved.choice) && typeof saved.at === 'number' && Date.now() - saved.at >= 0 && Date.now() - saved.at < CONSENT_MAX_AGE) return saved.choice;
  } catch { /* Storage can be unavailable; default to no consent. */ }
  return null;
}

export function analyticsAllowed() {
  return process.env.NODE_ENV === 'production' && window.location.hostname === 'assistants-medicaux.com' && window.mesdocsAnalyticsConsent === 'accepted';
}

export function pushEvent(event: AnalyticsEvent, params: EventParams = {}) {
  if (!analyticsAllowed()) return;
  // Explicit allowlist: never send form values, contact details or free text.
  const safe: Record<string, string> = {};
  if (params.form_name && ['contact', 'contact-page', 'rendez-vous'].includes(params.form_name)) safe.form_name = params.form_name;
  if (params.lead_profile && ['medecin', 'candidat', 'structure', 'autre', 'inconnu'].includes(params.lead_profile)) safe.lead_profile = params.lead_profile;
  if (params.lead_need && ['recrutement', 'information', 'candidature', 'devis', 'autre', 'inconnu'].includes(params.lead_need)) safe.lead_need = params.lead_need;
  if (params.error_type && ['validation', 'http_4xx', 'http_5xx', 'network', 'unexpected_response'].includes(params.error_type)) safe.error_type = params.error_type;
  window.gtag?.('event', event, { ...safe, send_to: MEASUREMENT_ID });
}

export function clearAnalyticsCookies() {
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.trim().split('=')[0];
    if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name)) continue;
    for (const domain of ['', location.hostname, '.' + location.hostname]) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? '; Domain=' + domain : ''}${location.protocol === 'https:' ? '; Secure' : ''}`;
    }
  }
}
