import Image from 'next/image';

const missions = [
  {
    icon: '/assets/icone_documents.png',
    title: 'Missions de nature administrative',
    desc: "Cela peut inclure l'accueil des patients, la gestion de leurs dossiers, et l'assistance dans la mise en place de la télémédecine au sein du cabinet.",
  },
  {
    icon: '/assets/icone_sante.png',
    title: 'Préparation et déroulement de la consultation',
    desc: "L'Assistant Médical aide les patients à s'habiller et se déshabiller, prend des constantes telles que la tension artérielle, le poids et la taille, met à jour les dossiers des patients pour les dépistages et les vaccinations, recueille des informations utiles sur les modes de vie, et prépare et aide à la réalisation d'actes techniques.",
  },
  {
    icon: '/assets/icone_coordination2.png',
    title: "Missions d'organisation et de coordination",
    desc: "L'Assistant Médical peut jouer un rôle clé dans l'organisation de rendez-vous avec des spécialistes, d'admissions à l'hôpital, et de coordination avec d'autres professionnels de la santé, tels que les infirmières, les kinésithérapeutes, ou les sages-femmes.",
  },
];

export default function DevenirContent() {
  return (
    <>
      {/* Qui peut être AM */}
      <section className="py-14 px-6" id="qui">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Qui peut être assistant médical ?</h2>
          <p className="text-[16px] leading-[1.7]">
            La fonction d&apos;Assistant Médical est ouverte à un large éventail de profils. Elle peut être assurée par des aides-soignants, des infirmières, des secrétaires médicales, ou tout autre professionnel intéressé à suivre cette voie. La clé pour devenir un Assistant Médical est la formation, ou l&apos;engagement à suivre une formation spécifique conduite en alternance, qui est également éligible à la Validation des Acquis de Compétences (VAE). Après l&apos;embauche, les assistants médicaux ont 2 ans pour engager leur formation et 3 ans pour obtenir leur Certificat de Qualification Professionnelle (CQP) d&apos;Assistant Médical. Les infirmiers, auxiliaires de puériculture, et aides-soignants déjà diplômés peuvent obtenir une attestation de Formation d&apos;Adaptation à l&apos;Emploi (FAE) dans le domaine de l&apos;organisation et de la gestion administrative d&apos;un cabinet médical.
          </p>
        </div>
      </section>

      {/* Missions */}
      <section className="bg-[#f4f8fe] py-[60px] px-6" id="missions">
        <div className="max-w-[900px] mx-auto mb-10">
          <h2 className="text-[28px] font-light mb-5">Les missions de l&apos;assistant médical ?</h2>
          <p className="text-[16px] leading-[1.7] mb-2">Les missions de l&apos;Assistant Médical sont variées et adaptées à l&apos;organisation de chaque cabinet médical.</p>
          <p className="text-[16px] leading-[1.7] mb-2">Ces missions permettent aux médecins, qu&apos;ils soient généralistes ou spécialistes, de bénéficier d&apos;un soutien précieux.</p>
          <p className="text-[16px] leading-[1.7]">Les trois principaux types de missions sont les suivants :​</p>
        </div>
        <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-10 max-md:grid-cols-1">
          {missions.map((m) => (
            <div key={m.title} className="text-center">
              <Image src={m.icon} alt={m.title} width={85} height={85} className="object-contain mx-auto mb-3.5" />
              <h3 className="text-[15px] font-semibold leading-[1.3] mb-3.5">{m.title}</h3>
              <p className="text-[15px] leading-[1.7] text-left">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
