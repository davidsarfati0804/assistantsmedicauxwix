'use client';
import { useState } from 'react';
import { Search, Shield, UserPlus, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const reassurances = [
  { Icon: Search, text: 'Nous analysons vos besoins et votre organisation' },
  { Icon: UserPlus, text: 'Nous sélectionnons le profil idéal pour votre cabinet' },
  { Icon: Shield, text: "Nous gérons l'ensemble des démarches administratives" },
  { Icon: CheckCircle, text: "Vous bénéficiez d'un accompagnement continu" },
];

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setLoading(false);
    }
  }

  return (
    <footer id="contact" className="bg-[#f5f8ff]">
      <div className="max-w-[1140px] mx-auto px-6 py-20 max-md:py-14">
        <div className="grid grid-cols-[1fr_1.1fr] gap-16 items-start max-md:grid-cols-1 max-md:gap-10">

          {/* Left — reassurance content */}
          <div className="relative overflow-hidden bg-[#093e98] rounded-2xl px-10 py-12 text-white max-md:px-7 max-md:py-9">
            <h2 className="text-[28px] font-bold leading-[1.25] mb-3 max-md:text-[22px]">
              Échangeons sur votre projet
            </h2>
            <p className="text-[15px] text-white/80 leading-[1.65] mb-9">
              Notre équipe vous accompagne de A à Z dans le recrutement et l&apos;intégration de votre assistant médical. Remplissez le formulaire, nous vous recontactons sous 24h.
            </p>

            <ul className="flex flex-col gap-5 mb-10">
              {reassurances.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={17} className="text-white" />
                  </div>
                  <span className="text-[15px] text-white/90 leading-[1.55]">{text}</span>
                </li>
              ))}
            </ul>

            {/* Illustration transparente sur fond navy */}
            <div className="absolute bottom-0 right-0 w-[150px] pointer-events-none opacity-80 max-md:hidden">
              <Image src="/assets/illus_05_nobg.png" alt="" width={300} height={250} className="w-full object-contain object-bottom" />
            </div>

            {/* Trust strip */}
            <div className="border-t border-white/20 pt-7 flex flex-col gap-3">
              <a href="tel:0970682220" className="flex items-center gap-3 text-[14px] text-white/85 hover:text-white transition-colors">
                <Phone size={15} className="shrink-0" />
                09 70 68 22 20
              </a>
              <a href="mailto:contact@ge-mesdocs.fr" className="flex items-center gap-3 text-[14px] text-white/85 hover:text-white transition-colors">
                <Mail size={15} className="shrink-0" />
                contact@ge-mesdocs.fr
              </a>
              <div className="flex items-start gap-3 text-[14px] text-white/85">
                <MapPin size={15} className="shrink-0 mt-0.5" />
                24 rue Octave Feuillet — 75116 Paris
              </div>
            </div>
          </div>

          {/* Right — form card */}
          <div className="bg-white rounded-2xl border border-[#e4eaf5] shadow-[0_4px_32px_rgba(9,62,152,.08)] px-10 py-11 max-md:px-6 max-md:py-8">
            <h3 className="text-[20px] font-bold text-gray-900 mb-1.5">Demandez à être recontacté</h3>
            <p className="text-[14px] text-gray-500 mb-7">Réponse garantie sous 24h ouvrées.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <CheckCircle size={44} className="text-[#093e98] mb-4" />
                <p className="text-[18px] font-semibold text-gray-900 mb-2">Message bien reçu !</p>
                <p className="text-[15px] text-gray-500">Nous vous recontactons dans les 24 heures.</p>
              </div>
            ) : (
              <form name="contact" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-gray-700">Nom &amp; Prénom <span className="text-[#e03e3e]">*</span></label>
                    <input type="text" name="nom-prenom" required placeholder="Jean Dupont"
                      className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] text-gray-800 bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-gray-700">Téléphone <span className="text-[#e03e3e]">*</span></label>
                    <input type="tel" name="telephone" required placeholder="06 00 00 00 00"
                      className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] text-gray-800 bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-gray-700">Email <span className="text-[#e03e3e]">*</span></label>
                  <input type="email" name="email" required placeholder="jean.dupont@cabinet.fr"
                    className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] text-gray-800 bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
                </div>

                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-gray-700">Cabinet / Structure</label>
                    <input type="text" name="cabinet" placeholder="Cabinet médical Paris 16"
                      className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] text-gray-800 bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-gray-700">Ville</label>
                    <input type="text" name="ville" placeholder="Paris"
                      className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] text-gray-800 bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-gray-700">Votre besoin</label>
                  <select name="besoin"
                    className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] text-gray-800 bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors appearance-none cursor-pointer">
                    <option value="">Sélectionnez une option</option>
                    <option value="recrutement">Recruter un assistant médical</option>
                    <option value="information">Obtenir des informations</option>
                    <option value="devis">Demander un devis</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-gray-700">Message</label>
                  <textarea name="message" rows={3} placeholder="Décrivez votre situation ou vos questions..."
                    className="px-4 py-3 rounded-xl border border-[#e4eaf5] text-[14px] text-gray-800 bg-[#f9fbff] outline-none focus:border-[#093e98] focus:bg-white transition-colors placeholder:text-gray-400 resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="mt-2 w-full py-4 rounded-xl bg-[#093e98] text-white text-[15px] font-semibold hover:opacity-90 active:opacity-80 transition-opacity disabled:opacity-60">
                  {loading ? 'Envoi en cours…' : 'Être recontacté'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[#e4eaf5] bg-white py-5 text-center text-[13px] text-gray-400 flex flex-col items-center gap-1.5">
        <span>© {new Date().getFullYear()} Mesdocs Groupement d&apos;Employeurs — Association loi 1901 — Assistants Médicaux</span>
        <div className="flex gap-4">
          <a href="/mentions-legales" className="hover:text-[#093e98] underline transition-colors">Mentions légales</a>
          <a href="mailto:contact@ge-mesdocs.fr" className="hover:text-[#093e98] transition-colors">contact@ge-mesdocs.fr</a>
        </div>
      </div>
    </footer>
  );
}
