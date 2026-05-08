import Link from 'next/link';
import { CheckCircle, ExternalLink } from 'lucide-react';

const eligibilite = [
  'Médecins libéraux exerçant en secteur 1',
  'Médecins en secteur 2 avec adhésion OPTAM ou OPTAM-CO',
  'Médecins généralistes et spécialistes (hors spécialités techniques)',
];

const nonEligible = [
  'Médecins en secteur 3 (non conventionnés)',
];

const exclusions = [
  'Radiologues et radiothérapeutes',
  'Anesthésistes-réanimateurs',
  'Anatomocytopathologistes',
  'Médecins nucléaires',
  'Stomatologues',
];

const montants = [
  { annee: '1re année', mitemps: '19 000 €', tempsPlein: '38 000 €', note: '' },
  { annee: '2e année', mitemps: '14 000 €', tempsPlein: '28 000 €', note: '' },
  { annee: '3e année et +', mitemps: '11 000 €', tempsPlein: '22 000 €', note: '' },
  { annee: 'Majoration (patientèle P90 à P94)', mitemps: '13 000 €', tempsPlein: '26 000 €', note: 'Médecins avec grande patientèle' },
  { annee: 'Majoration (patientèle P95 et +)', mitemps: '19 000 €', tempsPlein: '38 000 €', note: 'Médecins avec très grande patientèle' },
];

const etapes = [
  { num: '1', title: 'Prise de contact avec Mesdocs', desc: 'Mesdocs analyse votre éligibilité et vous explique le dispositif en 20 minutes. Gratuit, sans engagement.' },
  { num: '2', title: 'Recrutement de l\'assistant', desc: 'Mesdocs sélectionne les profils, vous présentez votre choix. La formation CQP est organisée.' },
  { num: '3', title: 'Signature du contrat CPAM', desc: 'Mesdocs vous accompagne dans la signature de la convention avec votre CPAM locale (caisse primaire d\'assurance maladie).' },
  { num: '4', title: 'Versement de l\'aide', desc: 'L\'aide CPAM est versée directement au médecin, en fonction du temps de travail de l\'assistant et des objectifs définis.' },
];

const faq = [
  {
    q: 'Tous les médecins libéraux peuvent-ils bénéficier du dispositif ?',
    a: 'Non, certaines spécialités techniques sont exclues (radiologues, anesthésistes, anatomo-pathologistes, médecins nucléaires, stomatologues, radiothérapeutes). Les médecins en secteur 1 et 2 OPTAM sont éligibles. Le secteur 3 (non conventionné) n\'est pas éligible. Mesdocs vérifie votre éligibilité gratuitement lors du premier entretien.',
  },
  {
    q: 'L\'aide CPAM est-elle versée directement au médecin ou à Mesdocs ?',
    a: 'L\'aide est versée directement au médecin signataire du contrat CPAM. Le médecin reverse ensuite la contribution à Mesdocs dans le cadre de la convention de mise à disposition.',
  },
  {
    q: 'Le médecin doit-il s\'engager sur un objectif de patientèle ?',
    a: 'Oui. En contrepartie de l\'aide CPAM, le médecin s\'engage à accueillir de nouveaux patients grâce au temps libéré par l\'assistant médical. L\'objectif est fixé proportionnellement à la taille de sa patientèle actuelle.',
  },
  {
    q: 'Peut-on bénéficier du dispositif avec un assistant médical à mi-temps ?',
    a: 'Oui. Le dispositif prévoit une option "mi-temps" (0,5 ETP) avec une aide proportionnellement réduite (environ 19 000 € la 1ère année) et une option "temps plein" (1 ETP) à 38 000 € la 1ère année. Des options 1,5 et 2 ETP sont également possibles sous conditions.',
  },
  {
    q: 'Que se passe-t-il si l\'objectif de patientèle n\'est pas atteint ?',
    a: 'Des discussions sont engagées avec la CPAM lors des évaluations annuelles. L\'aide peut être modulée en fonction des résultats. Mesdocs vous accompagne dans le suivi et l\'évaluation pour optimiser les chances de renouvellement.',
  },
  {
    q: 'Le dispositif est-il cumulable avec d\'autres aides ?',
    a: 'L\'aide CPAM n\'est pas cumulable avec certaines autres aides spécifiques à l\'exercice médical. Mesdocs vous aide à identifier les aides compatibles lors du bilan initial.',
  },
];

export default function DispositifCpamContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Qu'est-ce que le dispositif assistant médical CPAM ?</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le dispositif assistant médical a été instauré par l'<strong>Avenant 7 à la Convention Médicale</strong>, puis renforcé par la Convention Médicale 2024–2029. Il permet aux médecins libéraux de recruter un assistant médical avec le soutien financier de l'Assurance Maladie, afin de <strong>libérer du temps médical</strong> et améliorer l'accès aux soins.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            L'Assurance Maladie verse une aide financière directe au médecin, <strong>de 19 000 à 38 000 euros la première année</strong>, selon le temps de travail de l'assistant. En contrepartie, le médecin s'engage à accueillir de nouveaux patients.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            L&apos;aide de l&apos;Assurance Maladie est versée au médecin signataire du contrat CPAM. Dans le cadre de Mesdocs, l&apos;assistant médical est salarié par le groupement d&apos;employeurs puis mis à disposition du médecin ou de la structure selon la convention signée.
          </p>
          <a
            href="https://www.ameli.fr/medecin/exercice-liberal/vie-cabinet/aides-financieres/aide-emploi-assistants-medicaux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-[#1d67cd] hover:text-[#093e98] underline"
          >
            Source officielle : ameli.fr <ExternalLink size={13} />
          </a>
        </div>
      </section>

      {/* Éligibilité */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Qui est éligible au dispositif ?</h2>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <div className="bg-white rounded-2xl border border-[#e4eaf5] p-7">
              <p className="text-[16px] font-semibold text-[#093e98] mb-4">✓ Médecins éligibles</p>
              <ul className="flex flex-col gap-3">
                {eligibilite.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-[14px] text-gray-700 leading-[1.6]">
                    <CheckCircle size={16} className="text-[#093e98] shrink-0 mt-0.5" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#e4eaf5] p-7">
              <p className="text-[16px] font-semibold text-gray-500 mb-4">✗ Non éligibles</p>
              <ul className="flex flex-col gap-3">
                {nonEligible.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-[14px] text-gray-500 leading-[1.6]">
                    <span className="shrink-0 mt-0.5 text-gray-400">—</span>
                    {e}
                  </li>
                ))}
                <li className="mt-2 pt-3 border-t border-[#e4eaf5]">
                  <p className="text-[13px] font-medium text-gray-500 mb-2">Spécialités techniques exclues :</p>
                  <ul className="flex flex-col gap-1.5">
                    {exclusions.map((e) => (
                      <li key={e} className="flex items-start gap-2.5 text-[13px] text-gray-400 leading-[1.6]">
                        <span className="shrink-0 mt-0.5">—</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau montants */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-4">Quel montant d'aide selon votre situation ?</h2>
          <p className="text-[16px] text-gray-500 mb-8">Montants revalorisés de 5% dans le cadre de la Convention Médicale 2024.</p>
          <div className="overflow-x-auto rounded-xl border border-[#e4eaf5]">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="bg-[#093e98] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Année / Situation</th>
                  <th className="text-right px-5 py-4 font-semibold whitespace-nowrap">Mi-temps (0,5 ETP)</th>
                  <th className="text-right px-5 py-4 font-semibold whitespace-nowrap">Temps plein (1 ETP)</th>
                  <th className="text-left px-5 py-4 font-semibold max-md:hidden">Note</th>
                </tr>
              </thead>
              <tbody>
                {montants.map((row, i) => (
                  <tr key={row.annee} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f8ff]'}>
                    <td className="px-6 py-3.5 font-medium text-gray-800">{row.annee}</td>
                    <td className="px-5 py-3.5 text-right text-[#093e98] font-semibold">{row.mitemps}</td>
                    <td className="px-5 py-3.5 text-right text-[#093e98] font-bold">{row.tempsPlein}</td>
                    <td className="px-5 py-3.5 text-gray-500 text-[13px] max-md:hidden">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-gray-500 italic mt-4 leading-[1.6]">
            Les montants indiqués sont des plafonds d&apos;aide et peuvent varier selon la situation du médecin, le temps de travail de l&apos;assistant, l&apos;éligibilité et les règles applicables par l&apos;Assurance Maladie.
          </p>
          <p className="text-[13px] text-gray-400 mt-3">Source : ameli.fr — Convention médicale 2024–2029</p>
        </div>
      </section>

      {/* Durée et conditions */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Durée et conditions du contrat CPAM</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le contrat avec la CPAM est signé pour une durée de <strong>5 ans, renouvelable</strong>. Il précise les objectifs de progression de la patientèle que le médecin s'engage à atteindre grâce au temps libéré par son assistant.
          </p>
          <p className="text-[16px] leading-[1.7]">
            Des évaluations annuelles permettent de suivre les résultats et d'adapter le dispositif. En cas de renouvellement, les montants sont ajustés selon les résultats obtenus et la taille de la patientèle.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Comment s'inscrire au dispositif avec Mesdocs ?</h2>
          <div className="flex flex-col gap-5">
            {etapes.map((e) => (
              <div key={e.num} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-[#093e98] text-white flex items-center justify-center text-[16px] font-bold shrink-0">
                  {e.num}
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-gray-900 mb-1">{e.title}</p>
                  <p className="text-[15px] text-gray-600 leading-[1.65]">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions fréquentes sur le dispositif CPAM</h2>
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

      {/* Maillage interne */}
      <section className="py-10 px-6">
        <div className="max-w-[900px] mx-auto flex flex-wrap gap-4 text-[14px]">
          <Link href="/avantages-demarches" className="text-[#1d67cd] underline hover:text-[#093e98]">Voir toutes les démarches →</Link>
          <Link href="/assistants-medicaux" className="text-[#1d67cd] underline hover:text-[#093e98]">Le rôle de l'assistant médical →</Link>
          <Link href="/recrutement-assistant-medical" className="text-[#1d67cd] underline hover:text-[#093e98]">Lancer mon recrutement →</Link>
        </div>
      </section>
    </>
  );
}
