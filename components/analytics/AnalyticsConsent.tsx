'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { analyticsAllowed, clearAnalyticsCookies, CONSENT_KEY, pushEvent, readConsent, type ConsentChoice } from '@/lib/gtm';

function applyConsent(choice: ConsentChoice | null) {
  window.mesdocsAnalyticsConsent = choice;
  window['ga-disable-G-72CR5EDK0P'] = !analyticsAllowed();
  if (choice !== 'accepted') {
    window.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    clearAnalyticsCookies();
    return;
  }
  if (!analyticsAllowed()) return;
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    // gtag requires the standard Arguments command format.
    // eslint-disable-next-line prefer-rest-params
    window.gtag = function () { window.dataLayer!.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  }
  window.gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  window.gtag('set', { page_location: location.origin + location.pathname, page_referrer: safeReferrer(), allow_google_signals: false, allow_ad_personalization_signals: false });
  if (!document.getElementById('mesdocs-google-tag')) {
    // Keep the existing published Google tag. Its initial page view and GA4's
    // history-based page views are the only page-view source (no manual duplicate).
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.id = 'mesdocs-google-tag';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TKVGWC8F';
    document.head.appendChild(script);
  }
}

function safeReferrer() {
  try { const url = new URL(document.referrer); return url.origin + url.pathname; } catch { return ''; }
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = readConsent();
    const timer = window.setTimeout(() => { setChoice(saved); setOpen(!saved); }, 0);
    applyConsent(saved);
    function storage(event: StorageEvent) {
      if (event.key === CONSENT_KEY || event.key === null) {
        const next = readConsent();
        setChoice(next); setOpen(!next); applyConsent(next);
      }
    }
    function click(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      if (target.protocol === 'tel:') pushEvent('click_telephone');
      if (target.protocol === 'mailto:') pushEvent('click_email');
      // Useful downloads are handled by GA4's existing enhanced measurement.
    }
    window.addEventListener('storage', storage);
    document.addEventListener('click', click);
    return () => { clearTimeout(timer); window.removeEventListener('storage', storage); document.removeEventListener('click', click); };
  }, []);

  useEffect(() => {
    if (analyticsAllowed()) window.gtag?.('set', { page_location: location.origin + pathname });
  }, [pathname]);

  function choose(next: ConsentChoice) {
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice: next, at: Date.now() })); } catch { /* Keep the choice in memory for this page. */ }
    setChoice(next); setOpen(false); applyConsent(next);
  }

  return (
    <>
      <div className="bg-white px-6 pb-5 text-center text-sm text-gray-700">
        <button type="button" onClick={() => setOpen(true)} className="min-h-11 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800">Gérer mes cookies</button>
        <span className="sr-only" role="status">{choice === 'accepted' ? 'Mesure d’audience acceptée.' : choice === 'refused' ? 'Mesure d’audience refusée.' : ''}</span>
      </div>
      {open && (
        <section aria-label="Choix des cookies" className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-2xl rounded-2xl border border-gray-300 bg-white p-5 text-gray-900 shadow-xl sm:p-6">
          <h2 className="text-lg font-semibold">Votre choix pour la mesure d’audience</h2>
          <p className="mt-2 text-left text-sm leading-6">Avec votre accord, Google Analytics nous aide à comprendre les visites et l’utilisation des formulaires. Les noms, emails, téléphones et messages saisis ne sont pas transmis à Analytics. Vous pouvez refuser et utiliser tous les formulaires, puis changer d’avis avec « Gérer mes cookies ».</p>
          <a href="/politique-confidentialite" className="mt-2 inline-block text-sm text-blue-800 underline">Politique de confidentialité</a>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => choose('refused')} className="min-h-11 flex-1 rounded-lg border border-blue-800 bg-white px-5 py-3 font-semibold text-blue-800">Refuser</button>
            <button type="button" onClick={() => choose('accepted')} className="min-h-11 flex-1 rounded-lg border border-blue-800 bg-white px-5 py-3 font-semibold text-blue-800">Accepter</button>
            {choice && <button type="button" onClick={() => setOpen(false)} className="min-h-11 px-3 underline">Fermer</button>}
          </div>
        </section>
      )}
    </>
  );
}
