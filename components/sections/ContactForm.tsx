'use client';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
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
    } catch {
      setLoading(false);
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
    <form name="contact-page" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="form-name" value="contact-page" />

      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-gray-700">Nom & Prénom <span className="text-[#e03e3e]">*</span></label>
          <input type="text" name="nom-prenom" required placeholder="Jean Dupont"
            className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-gray-700">Téléphone <span className="text-[#e03e3e]">*</span></label>
          <input type="tel" name="telephone" required placeholder="06 00 00 00 00"
            className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Email <span className="text-[#e03e3e]">*</span></label>
        <input type="email" name="email" required placeholder="jean.dupont@cabinet.fr"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Je suis</label>
        <select name="profil"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors appearance-none cursor-pointer">
          <option value="">Sélectionnez</option>
          <option value="medecin">Médecin libéral</option>
          <option value="candidat">Candidat assistant médical</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Votre besoin <span className="text-[#e03e3e]">*</span></label>
        <select name="besoin" required
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors appearance-none cursor-pointer">
          <option value="">Sélectionnez une option</option>
          <option value="recrutement">Recruter un assistant médical</option>
          <option value="information">Obtenir des informations</option>
          <option value="candidature">Déposer ma candidature</option>
          <option value="devis">Demander un devis</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-gray-700">Message</label>
        <textarea name="message" rows={4} placeholder="Décrivez votre situation ou vos questions..."
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400 resize-none" />
      </div>

      <button type="submit" disabled={loading}
        className="mt-2 w-full py-4 rounded-xl bg-[#093e98] text-white text-[15px] font-semibold hover:opacity-90 active:opacity-80 transition-opacity disabled:opacity-60">
        {loading ? 'Envoi en cours…' : 'Envoyer mon message'}
      </button>
    </form>
  );
}
