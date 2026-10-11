export function pushEvent(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function notifyLeadStart(formName: string, data: Record<string, string> = {}) {
  pushEvent('form_start_custom', { form_name: formName });
  fetch('/api/lead-alert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ form_name: formName, data }),
    keepalive: true,
  }).catch(() => {
    // L'alerte est best-effort : un échec réseau ne doit jamais bloquer la saisie du visiteur.
  });
}

const LEAD_FIELDS = ['nom-prenom', 'telephone', 'email'] as const;

export function extractLeadData(form: HTMLFormElement): Record<string, string> {
  const fd = new FormData(form);
  const data: Record<string, string> = {};
  for (const field of LEAD_FIELDS) {
    const value = fd.get(field);
    if (typeof value === 'string' && value.trim()) data[field] = value.trim();
  }
  return data;
}
