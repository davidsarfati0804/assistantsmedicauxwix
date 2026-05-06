import Image from 'next/image';

const benefits = [
  { src: '/assets/icone_temps.png', alt: 'gain de temps', lines: ['Un gain', 'de temps médical', 'précieux'] },
  { src: '/assets/icone_documents.png', alt: 'tâches administratives', lines: ['Une réduction', 'des tâches', 'administratives'] },
  { src: '/assets/icone_sante.png', alt: 'qualité des soins', lines: ["Une amélioration", "de la qualité", "des soins"] },
  { src: '/assets/icone_argent.png', alt: 'aide financière', lines: ["Une aide financière", "couvrant les charges", "de l'assistant"] },
];

export default function BenefitsCard() {
  return (
    <div className="flex justify-center px-10 -mt-[90px] relative z-10 max-md:-mt-10 max-md:px-4">
      <div className="bg-white rounded-xl shadow-[0_2px_30px_rgba(0,0,0,.12)] px-[52px] py-[44px] max-w-[920px] w-full text-center max-md:px-4 max-md:py-7">
        <h2 className="text-[24px] font-light mb-9">Les avantages de l&apos;Assistant Médical</h2>
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.alt} className="flex flex-col items-center gap-3.5">
              <Image src={b.src} alt={b.alt} width={85} height={85} className="object-contain" />
              <p className="text-[20px] leading-[1.35] max-md:text-[15px]">
                {b.lines.map((line, i) => (
                  <span key={i}>{line}{i < b.lines.length - 1 && <br />}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
