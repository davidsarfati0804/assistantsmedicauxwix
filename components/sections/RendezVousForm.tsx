'use client';
import { CheckCircle } from 'lucide-react';
import { useLeadForm } from '@/lib/useLeadForm';

export default function RendezVousForm() {
  const { submitted, loading, error, onSubmit, onStart, onInvalid, onChange } = useLeadForm('rendez-vous');

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-14 text-center">
        <CheckCircle size={44} className="text-[#093e98] mb-4" />
        <p className="text-[18px] font-semibold text-gray-900 mb-2">Demande bien reçue !</p>
        <p className="text-[15px] text-gray-500">Notre équipe vous rappelle sous 24h ouvrées.</p>
      </div>
    );
  }

  return (
    <form name="rendez-vous" method="POST" onSubmit={onSubmit} onFocus={onStart} onChange={onChange} onInvalidCapture={onInvalid} aria-busy={loading} className="flex flex-col gap-4">
      <input type="hidden" name="form-name" value="rendez-vous" />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="rdv-profil" className="text-[13px] font-medium text-gray-700">Je suis</label>
        <select id="rdv-profil" name="profil" className="w-full rounded-xl border border-[#e4eaf5] bg-[#f9fbff] px-4 py-3 text-sm text-gray-800 focus:outline-2 focus:outline-blue-800">
          <option value="">Sélectionnez</option>
          <option value="medecin">Médecin libéral</option>
          <option value="structure">Maison de santé / structure</option>
          <option value="candidat">Candidat assistant médical</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="rdv-nom-prenom" className="text-[13px] font-medium text-gray-700">Nom & Prénom <span className="text-[#e03e3e]">*</span></label>
        <input id="rdv-nom-prenom" autoComplete="name" type="text" name="nom-prenom" required placeholder="Dr. Jean Dupont"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors placeholder:text-gray-500" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="rdv-telephone" className="text-[13px] font-medium text-gray-700">Téléphone <span className="text-[#e03e3e]">*</span></label>
        <input id="rdv-telephone" autoComplete="tel" type="tel" name="telephone" required placeholder="06 00 00 00 00"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors placeholder:text-gray-500" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="rdv-email" className="text-[13px] font-medium text-gray-700">Email</label>
        <input id="rdv-email" autoComplete="email" type="email" name="email" placeholder="jean.dupont@cabinet.fr"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors placeholder:text-gray-500" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="rdv-secteur" className="text-[13px] font-medium text-gray-700">Secteur conventionnel</label>
        <select id="rdv-secteur" name="secteur"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors appearance-none cursor-pointer">
          <option value="">Sélectionnez</option>
          <option value="secteur-1">Secteur 1</option>
          <option value="secteur-2-optam">Secteur 2 OPTAM</option>
          <option value="secteur-2-non-optam">Secteur 2 non OPTAM</option>
          <option value="je-ne-sais-pas">Je ne sais pas</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="rdv-disponibilites" className="text-[13px] font-medium text-gray-700">Créneau de disponibilité</label>
        <select id="rdv-disponibilites" name="disponibilites"
          className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] bg-[#f9fbff] outline-none focus:border-[#093e98] focus:ring-2 focus:ring-[#093e98]/30 focus:bg-white transition-colors appearance-none cursor-pointer">
          <option value="">Sélectionnez</option>
          <option value="9h-12h">9h - 12h</option>
          <option value="12h-14h">12h - 14h</option>
          <option value="14h-17h">14h - 17h</option>
          <option value="17h-19h">17h - 19h</option>
          <option value="peu-importe">Peu importe</option>
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" name="rgpd" id="rgpd-rdv" required className="mt-1 h-4 w-4 shrink-0 accent-[#093e98]" />
        <label htmlFor="rgpd-rdv" className="text-xs leading-5 text-gray-600">J’accepte que mes données soient utilisées pour traiter ma demande, conformément à la <a href="/politique-confidentialite" className="text-blue-800 underline">politique de confidentialité</a>. *</label>
      </div>

      {error && (
        <div role="alert" className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[13px] text-red-700">
          Une erreur est survenue lors de l&apos;envoi. Vos réponses sont conservées : vous pouvez réessayer, ou nous appeler directement au 09 70 68 22 20.
        </div>
      )}

      <button type="submit" disabled={loading}
        className="mt-2 w-full py-4 rounded-xl bg-[#093e98] text-white text-[15px] font-semibold hover:opacity-90 active:opacity-80 transition-opacity disabled:opacity-60">
        {loading ? 'Envoi en cours…' : 'Demander à être rappelé'}
      </button>
      <p className="text-[12px] text-gray-600 text-center">Sans engagement · Rappel par notre équipe</p>
    </form>
  );
}
