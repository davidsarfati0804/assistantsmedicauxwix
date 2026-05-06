'use client';
import Image from 'next/image';
import { useState } from 'react';

const slides = [
  { text: "L'assistante prend en charge l'accueil, le dossier patient, les constantes… Cela a profondément allégé mes journées. Je n'envisage plus de travailler sans ce soutien.", author: 'Dr Zaghdoun , Généraliste' },
  { text: 'Grâce à mon assistante médicale, j\'ai pu augmenter significativement le nombre de patients que je vois chaque jour, tout en améliorant la qualité des consultations.', author: 'Dr Martin , Médecin Généraliste' },
  { text: 'Le dispositif est une vraie révolution pour notre cabinet. La gestion administrative est enfin fluide et je peux me concentrer sur ce qui compte vraiment.', author: 'Dr Leclerc , Généraliste' },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative min-h-[420px] overflow-hidden flex items-center">
      <Image src="/assets/testimonial_bg.jpg" alt="Bureau stethoscope" fill className="object-cover scale-[1.04]" style={{ filter: 'blur(2px) brightness(0.9)' }} />
      <button onClick={prev} className="absolute left-3 z-10 text-[36px] text-[#093e98] px-4 py-2 hover:opacity-70 transition-opacity">‹</button>
      <div className="relative z-10 text-center max-w-[780px] mx-auto px-6 py-[72px]">
        <div className="text-[44px] text-[#093e98] font-serif leading-none tracking-[6px] mb-2.5">&#x275D;&#x275D;</div>
        <p className="text-[22px] text-[#093e98] leading-[1.65] mb-5 max-md:text-[17px]">{slides[current].text}</p>
        <p className="text-[28px] text-[#093e98] max-md:text-[20px]">{slides[current].author}</p>
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full border-2 border-[#093e98] transition-colors ${i === current ? 'bg-[#093e98]' : 'bg-transparent'}`} />
          ))}
        </div>
      </div>
      <button onClick={next} className="absolute right-3 z-10 text-[36px] text-[#093e98] px-4 py-2 hover:opacity-70 transition-opacity">›</button>
    </section>
  );
}
