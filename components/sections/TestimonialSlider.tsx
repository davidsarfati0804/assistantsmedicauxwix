'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const slides = [
  {
    text: "L'assistante prend en charge l'accueil, le dossier patient, les constantes… Cela a profondément allégé mes journées. Je n'envisage plus de travailler sans ce soutien.",
    author: 'Dr Zaghdoun',
    specialty: 'Médecin Généraliste',
    stars: 5,
  },
  {
    text: "Le recours à un assistant formé a permis d'optimiser le déroulement de mes consultations. Gain de temps, meilleure concentration et moins de fatigue en fin de journée.",
    author: 'Dr. Daoud',
    specialty: 'Gynécologue',
    stars: 5,
  },
  {
    text: "Mon assistante gère l'administratif, accueille les familles, prépare les dossiers… Je peux me concentrer pleinement sur les soins.",
    author: 'Dr Kasende',
    specialty: 'Médecin Généraliste',
    stars: 5,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative bg-[#f5f8ff] pt-4 pb-20 max-md:pb-14">

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="block w-full h-[60px] max-md:h-[36px]">
          <path d="M0,40 C300,80 900,0 1200,40 L1200,0 L0,0 Z" fill="#04287a" />
        </svg>
      </div>

      <div className="relative max-w-[900px] mx-auto px-6 pt-14 max-md:pt-10">

        <p className="text-center text-[12px] uppercase tracking-[0.18em] text-gray-400 font-medium mb-10">
          Ils nous font confiance
        </p>

        <div className="relative bg-white rounded-2xl border border-[#e4eaf5] shadow-[0_4px_40px_rgba(9,62,152,.10)] px-14 py-12 max-md:px-7 max-md:py-9">

          {/* Quote icon */}
          <div className="flex justify-center mb-5">
            <div className="w-12 h-12 rounded-full bg-[#eef4fd] flex items-center justify-center">
              <Quote size={20} className="text-[#093e98]" />
            </div>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-5">
            {Array.from({ length: slides[current].stars }).map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-[19px] text-gray-700 leading-[1.75] text-center mb-8 max-md:text-[16px]">
            &ldquo;{slides[current].text}&rdquo;
          </p>

          <div className="flex flex-col items-center gap-1">
            <span className="text-[15px] font-bold text-[#093e98]">{slides[current].author}</span>
            <span className="text-[13px] text-gray-400">{slides[current].specialty}</span>
          </div>

          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#e4eaf5] bg-white flex items-center justify-center hover:border-[#093e98] hover:text-[#093e98] text-gray-300 transition-colors shadow-sm" aria-label="Précédent">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#e4eaf5] bg-white flex items-center justify-center hover:border-[#093e98] hover:text-[#093e98] text-gray-300 transition-colors shadow-sm" aria-label="Suivant">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-[#093e98]' : 'w-2 bg-[#cdd8ef]'}`} aria-label={`Témoignage ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
