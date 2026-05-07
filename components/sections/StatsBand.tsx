import { Users, Banknote, CalendarCheck, ShieldCheck } from 'lucide-react';

const stats = [
  { Icon: Users, value: '7 420', label: 'médecins satisfaits', sub: 'par le dispositif national' },
  { Icon: Banknote, value: '38 000 €', label: 'de financement', sub: 'maximum la 1ʳᵉ année' },
  { Icon: CalendarCheck, value: '5 ans', label: 'de contrat', sub: 'renouvelable CPAM' },
  { Icon: ShieldCheck, value: '100%', label: 'pris en charge', sub: 'démarches & administration' },
];

export default function StatsBand() {
  return (
    <section className="relative bg-gradient-to-br from-[#04287a] via-[#093e98] to-[#1a5cc8]">

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="block w-full h-[60px] max-md:h-[36px]">
          <path d="M0,40 C300,0 900,80 1200,40 L1200,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="block w-full h-[60px] max-md:h-[36px]">
          <path d="M0,40 C300,0 900,80 1200,40 L1200,0 L0,0 Z" fill="#f5f8ff" />
        </svg>
      </div>

      <div className="relative max-w-[1140px] mx-auto px-6 py-24 max-md:py-20">
        <p className="text-center text-[12px] uppercase tracking-[0.18em] text-white/50 font-medium mb-12">
          Le dispositif en chiffres
        </p>
        <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {stats.map(({ Icon, value, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center px-6 py-8 rounded-2xl bg-white/[0.08] border border-white/[0.14] backdrop-blur-sm hover:bg-white/[0.13] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                <Icon size={20} className="text-white" />
              </div>
              <span className="text-[42px] font-bold text-white leading-none mb-2 max-md:text-[34px]">{value}</span>
              <span className="text-[14px] font-semibold text-white/90 mb-1">{label}</span>
              <span className="text-[12px] text-white/50 leading-[1.4]">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
