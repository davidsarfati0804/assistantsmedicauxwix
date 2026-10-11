'use client';
import { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { pushEvent, notifyLeadStart, extractLeadData } from '@/lib/gtm';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const startedRef = useRef(false);

  function handleFormBlur(e: React.FocusEvent<HTMLFormElement>) {
    if (startedRef.current) return;
    const data = extractLeadData(e.currentTarget);
    if (Object.keys(data).length === 0) return;
    startedRef.current = true;
    notifyLeadStart('contact-page', data);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    try {
      const res = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setSubmitted(true);
      pushEvent('form_submit', { form_name: 'contact-page' });
    } catch {
      setLoading(false);
      setError(true);
      pushEvent('form_error', { form_name: 'contact-page' });
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <CheckCircle size={44} className="text-[#093e98] mb-4" />
        <p className="text-[18px] font-semibold text-gray-900 mb-2">Message bien reçu !</p>
        <p className="text-[15px] text-gray-500">Nous vous recontactons dans les 24 heures.</p>
      </div>
    );
  }

  return (
    <form name="contact-page" method="POST" onSubmit={handleSubmit} onBlur={handleFormBlur} className="flex flex-col gap-4">
      <input type="hidden" name="form-name" value="contact-page" />

      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-gray-700">Nom & Prénom <span className="text-[#e03e3e]">*</span></label>
          <input type="text" name="nom-prenom" required placeholder="Jean Dupont"
            className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors placeholder:text-gray-400" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-gray-700">Téléphone <span className="text-[#e03e3e]">*</span></label>
          <input type="tel" name="telephone" required placeholder="06 00 00 00 00"
            className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors placeholder:text-gray-400" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Email <span className="text-[#e03e3e]">*</span></label>
        <input type="email" name="email" required placeholder="jean.dupont@cabinet.fr"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors placeholder:text-gray-400" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Je suis</label>
        <select name="profil"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors appearance-none cursor-pointer">
          <option value="">Sélectionnez</option>
          <option value="medecin">Médecin libéral</option>
          <option value="candidat">Candidat assistant médical</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Votre besoin <span className="text-[#e03e3e]">*</span></label>
        <select name="besoin" required
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors appearance-none cursor-pointer">
          <option value="">Sélectionnez une option</option>
          <option value="recrutement">Recruter un assistant médical</option>
          <option value="information">Obtenir des informations</option>
          <option value="candidature">Déposer ma candidature</option>
          <option value="devis">Demander un devis</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Créneau de disponibilité</label>
        <select name="disponibilites"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors appearance-none cursor-pointer">
          <option value="">Sélectionnez</option>
          <option value="9h-12h">9h - 12h</option>
          <option value="12h-14h">12h - 14h</option>
          <option value="14h-17h">14h - 17h</option>
          <option value="17h-19h">17h - 19h</option>
          <option value="peu-importe">Peu importe</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Message</label>
        <textarea name="message" rows={4} placeholder="Décrivez votre situation ou vos questions..."
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors placeholder:text-gray-400 resize-none" />
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" name="rgpd" id="rgpd-contact" required
          className="mt-1 w-4 h-4 accent-[#093e98] shrink-0 cursor-pointer" />
        <label htmlFor="rgpd-contact" className="text-[12px] text-gray-500 leading-[1.5]">
          J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la{' '}
          <a href="/politique-confidentialite" className="underline hover:text-[#093e98] transition-colors">politique de confidentialité</a>.{' '}
          <span className="text-[#e03e3e]">*</span>
        </label>
      </div>

      {error && (
        <div role="alert" className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[13px] text-red-700">
          Une erreur est survenue lors de l&apos;envoi. Vos réponses sont conservées : vous pouvez réessayer, ou nous contacter directement au 09 70 68 22 20.
        </div>
      )}

      <button type="submit" disabled={loading}
        className="mt-2 w-full py-4 rounded-xl bg-[#093e98] text-white text-[15px] font-semibold hover:opacity-90 active:opacity-80 transition-opacity disabled:opacity-60">
        {loading ? 'Envoi en cours…' : 'Envoyer mon message'}
      </button>
    </form>
  );
}
