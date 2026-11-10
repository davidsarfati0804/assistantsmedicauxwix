import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const comparaison = [
  {
    critere: 'Formation requise',
    assistant: 'CQP Assistant Médical (279h) ou VAE',
    secretaire: 'Aucune obligatoire (BTS, titre pro…)',
  },
  {
    critere: 'Aide financière CPAM',
    assistant: '19 000 à 38 000 € en première année pour 0,5 à 1 ETP, sous conditions',
    secretaire: 'Aucune aide spécifique',
  },
  {
    critere: "Qui est l'employeur ?",
    assistant: "Le groupement d'employeurs (Mesdocs) — pas le médecin",
    secretaire: 'Le médecin ou la structure médicale',
  },
  {
    critere: 'Missions cliniques',
    assistant: 'Appui à la consultation : constantes, préparation du patient et du matériel, sous responsabilité du médecin',
    secretaire: 'Non — administratif uniquement',
  },
  {
    critere: 'Missions administratives',
    assistant: 'Oui : prise de RDV, gestion dossiers, facturation',
    secretaire: 'Oui : cœur de métier',
  },
  {
    critere: 'Partage entre médecins',
    assistant: 'Oui — possible en MSP / maison de santé',
    secretaire: 'Rare — contrat individuel',
  },
  {
    critere: "Durée d'engagement",
    assistant: 'Contrat CPAM de 5 ans (renouvelable)',
    secretaire: 'CDI ou CDD classique',
  },
];

const avantagesAM = [
  "Aide financière CPAM jusqu'à 38 000 € la première année pour 1 ETP, sous conditions",
  "Zéro gestion RH — Mesdocs est l'employeur",
  'Appui à la consultation et missions administratives',
  'Formation CQP organisée selon le profil et le dossier',
  'Partage possible entre plusieurs médecins',
];

const avantagesSM = [
  'Profils disponibles immédiatement',
  'Compétences bureautiques et téléphoniques éprouvées',
  'Embauche directe sans dispositif CPAM',
  "Idéal pour un cabinet avec peu d'actes cliniques",
];

const faq = [
  {
    q: 'Peut-on avoir à la fois un assistant médical et une secrétaire médicale ?',
    a: "Oui. Ce sont deux rôles complémentaires. L'assistant médical libère le médecin des tâches cliniques répétitives, la secrétaire médicale gère le standard téléphonique et la facturation. Dans un cabinet à fort volume, les deux profils coexistent.",
  },
  {
    q: 'La secrétaire médicale peut-elle réaliser des gestes cliniques ?',
    a: "Le secrétariat médical porte sur l’accueil et l’administratif. L’assistant médical peut aussi préparer la consultation et recueillir des constantes sous la responsabilité du médecin. Le CQP ne confère pas une qualification de professionnel de santé ni une autorisation générale de pratiquer des actes de soins.",
  },
  {
    q: "L'aide CPAM s'applique-t-elle si j'emploie une secrétaire médicale ?",
    a: "Non. Le dispositif CPAM de financement est strictement réservé au poste d'assistant médical, tel que défini par la Convention Médicale 2024–2029. Une secrétaire médicale ne donne droit à aucune aide de l'Assurance Maladie.",
  },
  {
    q: 'Quelle est la différence de salaire entre les deux profils ?',
    a: "La rémunération dépend de la qualification, de l’expérience, du temps de travail et de la convention collective applicable. Elle doit respecter les minima légaux et conventionnels. Le coût restant pour le cabinet tient aussi compte de l’aide CPAM réellement accordée et des frais de mise à disposition.",
  },
];

export default function ComparaisonContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Deux métiers distincts, deux logiques différentes</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            L&apos;<strong>assistant médical</strong> et la <strong>secrétaire médicale</strong> partagent un espace de travail commun mais n&apos;ont ni les mêmes missions, ni le même cadre légal, ni le même impact sur votre cabinet. Choisir l&apos;un ou l&apos;autre dépend de vos besoins réels — et de votre budget.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            La différence clé : l&apos;assistant médical bénéficie d&apos;un financement officiel de l&apos;Assurance Maladie (<strong>jusqu&apos;à 38 000 € la première année pour 1 ETP, sous conditions</strong>), et peut préparer la consultation sous la responsabilité du médecin, en complément des missions administratives.
          </p>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Tableau comparatif complet</h2>
          <div className="overflow-x-auto rounded-xl border border-[#e4eaf5]">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="bg-[#093e98] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Critère</th>
                  <th className="text-left px-5 py-4 font-semibold">Assistant médical</th>
                  <th className="text-left px-5 py-4 font-semibold">Secrétaire médicale</th>
                </tr>
              </thead>
              <tbody>
                {comparaison.map((row, i) => (
                  <tr key={row.critere} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f8ff]'}>
                    <td className="px-6 py-3.5 font-medium text-gray-800">{row.critere}</td>
                    <td className="px-5 py-3.5 text-gray-700">{row.assistant}</td>
                    <td className="px-5 py-3.5 text-gray-500">{row.secretaire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Avantages côte à côte */}
      <section className="py-16 px-6">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Quand choisir l&apos;un ou l&apos;autre ?</h2>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <div className="bg-[#f0f5ff] rounded-2xl border border-[#d0ddf5] p-8">
              <p className="text-[17px] font-bold text-[#093e98] mb-5">✓ Choisissez l&apos;assistant médical si…</p>
              <ul className="flex flex-col gap-3">
                {avantagesAM.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[14px] text-gray-700 leading-[1.6]">
                    <CheckCircle size={16} className="text-[#093e98] shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#e4eaf5] p-8">
              <p className="text-[17px] font-bold text-gray-600 mb-5">✓ Choisissez la secrétaire médicale si…</p>
              <ul className="flex flex-col gap-3">
                {avantagesSM.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[14px] text-gray-600 leading-[1.6]">
                    <CheckCircle size={16} className="text-gray-600 shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions fréquentes</h2>
          <div className="flex flex-col gap-5">
            {faq.map((item) => (
              <div key={item.q} className="border border-[#e4eaf5] rounded-xl p-7 bg-white">
                <p className="text-[16px] font-semibold text-gray-900 mb-3">{item.q}</p>
                <p className="text-[15px] text-gray-600 leading-[1.7]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 px-6">
        <div className="max-w-[900px] mx-auto flex flex-wrap gap-4 text-[14px]">
          <Link href="/dispositif-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Le dispositif CPAM en détail →</Link>
          <Link href="/assistants-medicaux" className="text-[#1d67cd] underline hover:text-[#093e98]">Les missions de l&apos;assistant médical →</Link>
          <Link href="/prendre-rendez-vous" className="text-[#1d67cd] underline hover:text-[#093e98]">Vérifier mon éligibilité →</Link>
        </div>
      </section>
    </>
  );
}
