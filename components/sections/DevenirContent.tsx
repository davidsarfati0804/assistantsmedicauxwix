import Image from 'next/image';
import Link from 'next/link';

const missions = [
  {
    icon: '/assets/icone_flaticon_papier.png',
    title: 'Missions de nature administrative',
    desc: "Cela peut inclure l'accueil des patients, la gestion de leurs dossiers, et l'assistance dans la mise en place de la télémédecine au sein du cabinet.",
  },
  {
    icon: '/assets/icone_flaticon_patient.png',
    title: 'Préparation et déroulement de la consultation',
    desc: "L'Assistant Médical aide les patients à s'habiller et se déshabiller, prend des constantes telles que la tension artérielle, le poids et la taille, met à jour les dossiers des patients pour les dépistages et les vaccinations, recueille des informations utiles sur les modes de vie, et prépare et aide à la réalisation d'actes techniques.",
  },
  {
    icon: '/assets/icone_new_coordination.png',
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
        <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-10 items-start max-md:grid-cols-1">
          {missions.map((m) => (
            <div key={m.title}>
              <div className="flex justify-center mb-3.5">
                <Image src={m.icon} alt={m.title} width={85} height={85} className="object-contain" />
              </div>
              <h3 className="text-[15px] font-semibold leading-[1.3] mb-3 text-center">{m.title}</h3>
              <p className="text-[15px] leading-[1.7] text-gray-700">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VAE */}
      <section className="py-[60px] px-6" id="vae">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Obtenir le CQP par la VAE</h2>
          <p className="text-[16px] leading-[1.7] mb-6">
            La <strong>Validation des Acquis de l&apos;Expérience (VAE)</strong> permet d&apos;obtenir le Certificat de Qualification Professionnelle (CQP) d&apos;Assistant Médical en faisant reconnaître les compétences acquises au cours de votre expérience professionnelle — sans avoir à suivre une formation complète en alternance.
          </p>

          <div className="bg-[#f4f8fe] rounded-2xl border border-[#e4eaf5] p-8 mb-8">
            <h3 className="text-[18px] font-semibold text-[#093e98] mb-4">Qui peut bénéficier de la VAE ?</h3>
            <ul className="flex flex-col gap-3">
              {[
                'Les aides-soignants et auxiliaires de puériculture diplômés',
                'Les infirmiers souhaitant évoluer vers un rôle d\'assistant médical',
                'Toute personne justifiant d\'au moins 1 an d\'expérience dans un domaine en lien avec le poste',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.65] text-gray-700">
                  <span className="text-[#093e98] font-bold mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#093e98] rounded-2xl p-8 flex flex-col gap-4 max-md:gap-6">
            <div className="flex items-start gap-5 max-md:flex-col">
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-white mb-2">Notre partenaire VAE Formation</h3>
                <p className="text-[15px] text-white/85 leading-[1.65]">
                  En partenariat avec <strong className="text-white">VAE Formation</strong>, Mesdocs Groupement d&apos;Employeurs vous accompagne tout au long de votre démarche VAE CQP Assistant Médical : constitution du dossier, préparation à l&apos;entretien jury, et obtention de votre certification professionnelle reconnue.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="https://vae-formation.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[#093e98] text-[14px] font-semibold hover:opacity-90 transition-opacity"
              >
                Découvrir VAE Formation →
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border border-white/50 text-white text-[14px] font-semibold hover:border-white transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
