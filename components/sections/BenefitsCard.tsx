import Image from 'next/image';

const advantages = [
  {
    icon: '/assets/icone_new_temps.png',
    title: 'Alléger la charge administrative',
    desc: "L'assistant médical prend en charge les tâches périphériques pour vous permettre de vous concentrer davantage sur la consultation.",
  },
  {
    icon: '/assets/icone_new_coordination.png',
    title: 'Améliorer la coordination des soins',
    desc: "Il facilite le suivi des patients et la coordination avec les autres professionnels de santé.",
  },
  {
    icon: '/assets/icone_new_organisation.png',
    title: "Adapter l'organisation du cabinet",
    desc: "Les missions peuvent être ajustées en fonction de vos besoins, de votre activité et de votre patientèle.",
  },
  {
    icon: '/assets/icone_new_efficacite.png',
    title: "Renforcer l'efficacité globale",
    desc: "Une meilleure organisation au quotidien, un parcours patient plus fluide et un cabinet plus performant.",
  },
];

export default function BenefitsCard() {
  return (
    <section className="bg-[#f5f8ff] py-20 max-md:py-14">
      <div className="max-w-[1140px] mx-auto px-6">

        <div className="text-center mb-14 max-md:mb-10">
          <h2 className="text-[32px] font-bold text-gray-900 leading-[1.2] mb-4 max-md:text-[24px]">
            Les avantages de l&apos;emploi d&apos;un assistant médical
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.65] max-w-[660px] mx-auto max-md:text-[15px]">
            Un renfort opérationnel pour améliorer l&apos;organisation du cabinet, libérer du temps médical et fluidifier la prise en charge des patients.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {advantages.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-[#e4eaf5] shadow-[0_2px_16px_rgba(9,62,152,.06)] p-7 flex flex-col items-center text-center gap-4 hover:shadow-[0_8px_32px_rgba(9,62,152,.13)] hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <Image src={icon} alt={title} width={100} height={100} className="object-contain" />
              <div>
                <h3 className="text-[15px] font-semibold text-gray-900 leading-[1.35] mb-2.5">{title}</h3>
                <p className="text-[14px] text-gray-500 leading-[1.7]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
