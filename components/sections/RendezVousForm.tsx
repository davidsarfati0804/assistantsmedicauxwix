'use client';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function RendezVousForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    try {
      const res = await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setSubmitted(true);
      window.gtag?.('event', 'form_submit', { form_name: 'rendez-vous' });
    } catch {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <CheckCircle size={44} className="text-[#093e98] mb-4" />
        <p className="text-[18px] font-semibold text-gray-900 mb-2">Demande bien reçue !</p>
        <p className="text-[15px] text-gray-500">Nous vous rappelons dans les 24 heures ouvrées.</p>
      </div>
    );
  }

  return (
    <form name="rendez-vous" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="form-name" value="rendez-vous" />

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Nom & Prénom <span className="text-[#e03e3e]">*</span></label>
        <input type="text" name="nom-prenom" required placeholder="Dr. Jean Dupont"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Téléphone <span className="text-[#e03e3e]">*</span></label>
        <input type="tel" name="telephone" required placeholder="06 00 00 00 00"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Email</label>
        <input type="email" name="email" placeholder="jean.dupont@cabinet.fr"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Secteur conventionnel</label>
        <select name="secteur"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors appearance-none cursor-pointer">
          <option value="">Sélectionnez</option>
          <option value="secteur-1">Secteur 1</option>
          <option value="secteur-2-optam">Secteur 2 OPTAM</option>
          <option value="secteur-2-non-optam">Secteur 2 non OPTAM</option>
          <option value="je-ne-sais-pas">Je ne sais pas</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Créneau de disponibilité</label>
        <select name="disponibilites"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors appearance-none cursor-pointer">
          <option value="">Sélectionnez</option>
          <option value="9h-12h">9h - 12h</option>
          <option value="12h-14h">12h - 14h</option>
          <option value="14h-17h">14h - 17h</option>
          <option value="17h-19h">17h - 19h</option>
          <option value="peu-importe">Peu importe</option>
        </select>
      </div>

      <button type="submit" disabled={loading}
        className="mt-2 w-full py-4 rounded-xl bg-[#093e98] text-white text-[15px] font-semibold hover:opacity-90 active:opacity-80 transition-opacity disabled:opacity-60">
        {loading ? 'Envoi en cours…' : 'Demander à être rappelé'}
      </button>
      <p className="text-[12px] text-gray-400 text-center">Gratuit · Sans engagement · Réponse sous 24h</p>
    </form>
  );
}
