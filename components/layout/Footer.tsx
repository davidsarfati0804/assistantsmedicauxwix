'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (btn) btn.disabled = true;
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      if (btn) btn.disabled = false;
    }
  }

  return (
    <footer id="contact" className="grid grid-cols-[260px_1fr] max-md:grid-cols-1">
      {/* Left */}
      <div className="bg-[#093e98] text-white px-7 py-11">
        <h2 className="text-[30px] font-light mb-5">Contactez-nous</h2>
        <p className="text-[16px] mb-1">24 rue Octave Feuillet 75116 Paris</p>
        <p className="text-[16px] mb-1">&nbsp;</p>
        <a href="tel:0970682220" className="block text-[16px] text-[#fdfefe] mb-1">09 70 68 22 20</a>
        <a href="mailto:Contact@ge-mesdocs.fr" className="block text-[16px] text-[#fdfefe]">Contact@ge-mesdocs.fr</a>
        <div className="flex gap-3 my-5">
          <a href="mailto:Contact@ge-mesdocs.fr" className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center hover:border-white transition-colors">
            <Mail size={15} />
          </a>
          <a href="tel:0970682220" className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center hover:border-white transition-colors">
            <Phone size={15} />
          </a>
          <a href="https://maps.google.com/?q=24+rue+Octave+Feuillet+75116+Paris" target="_blank" rel="noopener" className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center hover:border-white transition-colors">
            <MapPin size={15} />
          </a>
        </div>
        <p className="text-[14px] text-white/75">© 2023 par Assistants Medicaux</p>
      </div>

      {/* Right */}
      <div className="bg-[#e1eeff] px-11 py-11 max-md:px-5">
        {submitted ? (
          <p className="text-[#093e98] font-semibold">Merci pour votre envoi ! Nous vous recontactons au plus vite.</p>
        ) : (
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] text-[#093e98]">Nom &amp; Prénom *</label>
                <input type="text" name="nom-prenom" required className="px-4 py-2 rounded-full border-[1.5px] border-[#97bcc8] text-[14px] bg-[#fdfefe] outline-none focus:border-[#093e98] transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] text-[#093e98]">Email *</label>
                <input type="email" name="email" required className="px-4 py-2 rounded-full border-[1.5px] border-[#97bcc8] text-[14px] bg-[#fdfefe] outline-none focus:border-[#093e98] transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] text-[#093e98]">Profession *</label>
                <input type="text" name="profession" className="px-4 py-2 rounded-full border-[1.5px] border-[#97bcc8] text-[14px] bg-[#fdfefe] outline-none focus:border-[#093e98] transition-colors" />
              </div>
              <div className="flex items-end gap-2">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-[14px] text-[#093e98]">Téléphone *</label>
                  <input type="tel" name="telephone" className="px-4 py-2 rounded-full border-[1.5px] border-[#97bcc8] text-[14px] bg-[#fdfefe] outline-none focus:border-[#093e98] transition-colors" />
                </div>
                <button type="submit" className="w-[38px] h-[38px] rounded bg-[#093e98] text-white flex items-center justify-center flex-shrink-0 hover:opacity-85 transition-opacity">
                  &#10095;
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </footer>
  );
}
