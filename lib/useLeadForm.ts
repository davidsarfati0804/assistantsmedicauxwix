'use client';

import { useRef, useState, type FormEvent } from 'react';
import { useLeadAlertForm } from '@/lib/useLeadAlertForm';
import { pushEvent, type FormName, type LeadNeed, type LeadProfile } from '@/lib/gtm';

export function useLeadForm(formName: FormName) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const sending = useRef(false);
  const completed = useRef(false);
  const { formRef } = useLeadAlertForm(formName, sending, completed);
  const started = useRef(false);
  const validationReported = useRef(false);

  function onStart() {
    if (started.current) return;
    started.current = true;
    // Separate from GA4's automatic form_start: use this event for this funnel.
    pushEvent('form_start_custom', { form_name: formName });
  }

  function onInvalid() {
    onStart();
    if (!validationReported.current) pushEvent('form_error', { form_name: formName, error_type: 'validation' });
    validationReported.current = true;
  }

  function onChange() {
    onStart();
    validationReported.current = false;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current || submitted) return;
    sending.current = true;
    onStart();
    setLoading(true);
    setError(false);
    let errorType: 'network' | 'http_4xx' | 'http_5xx' | 'unexpected_response' = 'network';
    const data = new FormData(event.currentTarget);
    try {
      const body = new URLSearchParams();
      data.forEach((value, name) => { if (typeof value === 'string') body.append(name, value); });
      const response = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) {
        errorType = response.status >= 500 ? 'http_5xx' : 'http_4xx';
        throw new Error('submission-failed');
      }
      if ((await response.text()).includes('<title>Netlify Forms Definitions</title>')) {
        errorType = 'unexpected_response';
        throw new Error('static-fallback');
      }
      // Only server-acknowledged submissions reach this branch. Never forward
      // identity, message, location, sector or other raw input to Analytics.
      const profile = String(data.get('profil') || 'inconnu');
      const need = String(data.get('besoin') || 'inconnu');
      completed.current = true;
      setSubmitted(true);
      pushEvent('generate_lead', {
        form_name: formName,
        lead_profile: (['medecin', 'candidat', 'structure', 'autre'].includes(profile) ? profile : 'inconnu') as LeadProfile,
        lead_need: (['recrutement', 'information', 'candidature', 'devis', 'autre'].includes(need) ? need : 'inconnu') as LeadNeed,
      });
    } catch {
      setError(true);
      pushEvent('form_error', { form_name: formName, error_type: errorType });
    } finally {
      sending.current = false;
      setLoading(false);
    }
  }

  return { formRef, submitted, loading, error, onSubmit, onStart, onInvalid, onChange };
}
