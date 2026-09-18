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

export const devenirFaqData = [
  { q: 'Quelles sont les conditions pour devenir assistant médical ?', a: 'Pour devenir assistant médical, il faut être titulaire du baccalauréat ou justifier d\'une expérience d\'au moins un an dans le secteur du secrétariat médical ou des soins. Les profils infirmiers, aides-soignants et assistants de soins peuvent accéder à une formation accélérée de 112 heures (FAE) au lieu du CQP complet. Mesdocs vérifie l\'éligibilité de chaque candidat gratuitement lors d\'un premier entretien.' },
  { q: 'Qu\'est-ce que le CQP assistant médical et combien de temps dure la formation ?', a: 'Le CQP (Certificat de Qualification Professionnelle) assistant médical est une certification reconnue au niveau 4 du RNCP. La formation se déroule en 279 heures en alternance sur une période de 6 à 12 mois. Elle couvre les missions administratives, l\'appui à la consultation et la coordination des soins. La formation est financée par l\'OPCO EP, sans coût pour le candidat ni pour le médecin. L\'assistant a 2 ans après la prise de poste pour s\'inscrire et 3 ans pour obtenir son CQP.' },
  { q: 'Puis-je devenir assistant médical par la VAE si j\'ai déjà de l\'expérience ?', a: 'Oui. La VAE (Validation des Acquis de l\'Expérience) permet d\'obtenir le CQP assistant médical sans suivre la formation complète de 279 heures, à condition de justifier d\'une expérience professionnelle significative dans le secteur médical ou administratif. Mesdocs accompagne les candidats VAE en partenariat avec VAE Formation, organisme spécialisé. Le parcours VAE dure en moyenne 12 mois et comprend la constitution du dossier et un entretien devant jury.' },
  { q: 'Quel est le salaire d\'un assistant médical ?', a: 'Le salaire d\'un assistant médical dépend de la convention collective applicable (selon la structure employeuse). À titre indicatif, un assistant médical débutant perçoit environ 1 642 € brut par mois pour un temps plein. Ce salaire peut évoluer avec l\'expérience et l\'obtention du CQP. Dans le cadre du dispositif CPAM, la subvention versée au médecin (jusqu\'à 38 000 €/an pour 1 ETP) couvre en grande partie ce coût salarial.' },
  { q: 'Comment postuler pour devenir assistant médical avec Mesdocs ?', a: 'Pour postuler, il suffit de remplir le formulaire de contact sur le site ou d\'appeler directement l\'équipe Mesdocs au 09 70 68 22 20. Mesdocs reçoit votre candidature, évalue votre profil et votre éligibilité, puis vous met en relation avec des médecins libéraux de votre zone géographique qui recherchent un assistant. Si votre profil correspond, Mesdocs organise les entretiens et prend en charge l\'ensemble du parcours d\'intégration, y compris la formation CQP.' },
];

const parcours = [
  {
    nom: 'CQP initial (voie classique)',
    public: 'Bac ou 1 an d\'expérience en secrétariat médical / soins',
    duree: '279 heures en alternance, 6 à 12 mois',
    financement: 'Pris en charge par l\'OPCO EP — aucun coût pour le candidat',
  },
  {
    nom: 'VAE (Validation des Acquis de l\'Expérience)',
    public: 'Au moins 1 an d\'expérience en lien avec le poste',
    duree: 'Environ 12 mois (dossier + entretien devant jury)',
    financement: 'Accompagnement Mesdocs en partenariat avec VAE Formation',
  },
  {
    nom: 'FAE (Formation d\'Adaptation à l\'Emploi)',
    public: 'Infirmiers, aides-soignants et auxiliaires de puériculture déjà diplômés',
    duree: '112 heures — la voie la plus rapide',
    financement: 'Prise en charge identique au CQP, aucun coût pour le candidat',
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

      {/* Salaire */}
      <section className="bg-[#f4f8fe] py-[60px] px-6" id="salaire">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Quel salaire pour un assistant médical ?</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le salaire d&apos;un assistant médical dépend de la convention collective applicable à sa structure employeuse. À titre indicatif, un assistant médical débutant perçoit environ <strong>1 642 € brut par mois</strong> pour un temps plein, un niveau qui évolue avec l&apos;expérience et l&apos;obtention du CQP.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Avec Mesdocs, vous n&apos;êtes pas employé directement par le médecin mais par le groupement d&apos;employeurs, qui gère votre contrat de travail, votre paie et vos droits sociaux (congés, arrêts maladie, cotisations) comme n&apos;importe quel employeur classique. Le financement CPAM versé au médecin (jusqu&apos;à 38 000 €/an pour 1 ETP la première année) sert justement à couvrir ce coût salarial, ce qui sécurise votre poste sur la durée du contrat — 5 ans renouvelable.
          </p>
          <p className="text-[16px] leading-[1.7]">
            Cette stabilité contractuelle distingue le poste d&apos;assistant médical d&apos;un CDD classique en cabinet médical : le financement pluriannuel de l&apos;Assurance Maladie donne au médecin une visibilité financière qui se traduit, pour vous, par une meilleure sécurité de l&apos;emploi.
          </p>
        </div>
      </section>

      {/* Comparatif des voies d'accès */}
      <section className="py-[60px] px-6" id="voies">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">CQP initial, VAE ou FAE : quelle voie choisir ?</h2>
          <p className="text-[16px] leading-[1.7] mb-8">
            Il existe trois parcours pour obtenir la qualification d&apos;assistant médical, selon votre profil de départ. Mesdocs évalue gratuitement votre situation pour vous orienter vers la voie la plus rapide.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#093e98]">
                  <th className="text-left py-3 pr-4 text-[14px] font-semibold text-[#093e98]">Voie</th>
                  <th className="text-left py-3 pr-4 text-[14px] font-semibold text-[#093e98]">Pour qui</th>
                  <th className="text-left py-3 pr-4 text-[14px] font-semibold text-[#093e98]">Durée</th>
                  <th className="text-left py-3 text-[14px] font-semibold text-[#093e98]">Financement</th>
                </tr>
              </thead>
              <tbody>
                {parcours.map((p) => (
                  <tr key={p.nom} className="border-b border-gray-200">
                    <td className="py-4 pr-4 text-[15px] font-medium align-top">{p.nom}</td>
                    <td className="py-4 pr-4 text-[14px] text-gray-700 align-top">{p.public}</td>
                    <td className="py-4 pr-4 text-[14px] text-gray-700 align-top">{p.duree}</td>
                    <td className="py-4 text-[14px] text-gray-700 align-top">{p.financement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ visible */}
      <section className="bg-[#f4f8fe] py-[60px] px-6" id="faq">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions fréquentes</h2>
          <div className="flex flex-col gap-6">
            {devenirFaqData.map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-[16px] font-semibold mb-2 text-[#093e98]">{q}</h3>
                <p className="text-[15px] leading-[1.7] text-gray-700">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
