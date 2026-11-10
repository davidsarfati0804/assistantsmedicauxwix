'use client';

import { useEffect, useRef, type RefObject } from 'react';
import type { FormName } from '@/lib/gtm';

/** First-party email only: partial contact details never enter Analytics. */
export function useLeadAlertForm(formName: FormName, sending: RefObject<boolean>, completed: RefObject<boolean>) {
  const formRef = useRef<HTMLFormElement>(null);
  const sent = useRef(false);

  useEffect(() => {
    function alert() {
      if (sent.current || sending.current || completed.current || !formRef.current) return;
      const fields = new FormData(formRef.current);
      const data: Record<string, string> = {};
      for (const name of ['nom-prenom', 'telephone', 'email']) {
        const value = fields.get(name);
        if (typeof value === 'string' && value.trim()) data[name] = value.trim().slice(0, 254);
      }
      if (!Object.keys(data).length) return;
      sent.current = true;
      const payload = JSON.stringify({ form_name: formName, alert_id: crypto.randomUUID(), data });
      if (navigator.sendBeacon?.('/api/lead-alert', new Blob([payload], { type: 'application/json' }))) return;
      void fetch('/api/lead-alert', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => { sent.current = false; });
    }
    const form = formRef.current;
    function blur(event: globalThis.FocusEvent) {
      if (form?.contains(event.relatedTarget as Node)) return;
      alert();
    }
    function visibility() { if (document.visibilityState === 'hidden') alert(); }
    form?.addEventListener('focusout', blur);
    window.addEventListener('pagehide', alert);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      form?.removeEventListener('focusout', blur);
      window.removeEventListener('pagehide', alert);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [formName, sending, completed]);

  return { formRef };
}
