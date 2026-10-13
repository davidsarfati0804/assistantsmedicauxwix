'use client';
import { useEffect, useRef } from 'react';

export function pushEvent(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

const LEAD_FIELDS = ['nom-prenom', 'telephone', 'email'] as const;

function extractLeadData(form: HTMLFormElement): Record<string, string> {
  const fd = new FormData(form);
  const data: Record<string, string> = {};
  for (const field of LEAD_FIELDS) {
    const value = fd.get(field);
    if (typeof value === 'string' && value.trim()) data[field] = value.trim();
  }
  return data;
}

function sendLeadAlert(formName: string, data: Record<string, string>) {
  pushEvent('form_start_custom', { form_name: formName });
  const payload = JSON.stringify({ form_name: formName, data });
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/lead-alert', new Blob([payload], { type: 'application/json' }));
  } else {
    fetch('/api/lead-alert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {
      // best-effort : un échec réseau ne doit jamais bloquer la saisie du visiteur
    });
  }
}

/**
 * Alerte "visiteur en train de remplir" avec le plus de champs possible, sans attendre
 * la validation. Se déclenche quand le focus quitte réellement le formulaire (pas juste
 * en passant d'un champ à l'autre), avec un filet de sécurité si l'onglet se ferme avant
 * ça (abandon pur) — capte alors ce qui a été saisi jusque-là via sendBeacon.
 */
export function useLeadAlertForm(formName: string) {
  const formRef = useRef<HTMLFormElement>(null);
  const sentRef = useRef(false);

  function trySend() {
    if (sentRef.current || !formRef.current) return;
    const data = extractLeadData(formRef.current);
    if (Object.keys(data).length === 0) return;
    sentRef.current = true;
    sendLeadAlert(formName, data);
  }

  useEffect(() => {
    function handleHide() {
      trySend();
    }
    function handleVisibility() {
      if (document.visibilityState === 'hidden') trySend();
    }
    window.addEventListener('pagehide', handleHide);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      window.removeEventListener('pagehide', handleHide);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onBlur(e: React.FocusEvent<HTMLFormElement>) {
    if (!formRef.current) return;
    // Ignore les passages d'un champ à l'autre à l'intérieur du même formulaire —
    // on ne veut capter qu'au moment où l'attention quitte vraiment le formulaire.
    if (formRef.current.contains(e.relatedTarget as Node)) return;
    trySend();
  }

  return { formRef, onBlur };
}
