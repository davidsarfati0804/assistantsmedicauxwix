import Link from 'next/link';
import { CheckCircle, XCircle } from 'lucide-react';

const sansGe = [
  'Vous êtes employeur direct — URSSAF, bulletins de paie, contrat de travail',
  'Vous gérez les absences, congés, remplacements',
  "Vous assumez le risque juridique en cas de litige prud'homal",
  "Vous avancez le salaire avant le versement de l'aide CPAM",
];

const avecGe = [
  "Mesdocs est l'employeur — vous n'avez aucune obligation RH",
  'Mesdocs gère la paie, les charges, les congés, les remplacements',
  'Mesdocs prend en charge le risque juridique employeur',
  "Vous payez une contribution mensuelle à Mesdocs après réception de l'aide CPAM",
];

const faq = [
  {
    q: "Qu'est-ce qu'un groupement d'employeurs exactement ?",
    a: "Un groupement d'employeurs (GE) est une association loi 1901 qui embauche des salariés et les met à disposition de ses membres (les médecins adhérents). Le GE est l'employeur légal : il signe le contrat de travail, établit les fiches de paie, cotise aux organismes sociaux. Le médecin reçoit le salarié dans son cabinet sans assumer les obligations employeur.",
  },
  {
    q: "Le médecin a-t-il un lien juridique avec l'assistant médical ?",
    a: "Oui, mais sous une forme allégée : une « convention de mise à disposition » est signée entre Mesdocs et le médecin. Elle précise les horaires, les missions et la durée. En revanche, le médecin n'est pas employeur — il ne peut pas licencier l'assistant, ne gère pas les congés payés et n'est pas responsable des cotisations sociales.",
  },
  {
    q: 'Mesdocs est-il le seul GE pour les médecins libéraux en France ?',
    a: "Mesdocs Groupement d'Employeurs est spécialisé dans la mise à disposition d'assistants médicaux pour les médecins libéraux, dans le cadre du dispositif CPAM. C'est notre cœur de métier exclusif.",
  },
  {
    q: "Le GE est-il reconnu par l'Assurance Maladie ?",
    a: "Oui. Le contrat CPAM est signé entre le médecin et sa caisse primaire d'assurance maladie. La mise à disposition via un GE est explicitement prévue par la Convention Médicale 2024–2029.",
  },
  {
    q: 'Que se passe-t-il si la CPAM refuse de signer le contrat ?',
    a: "Les refus sont rares pour les médecins éligibles (secteur 1 et secteur 2 OPTAM, hors spécialités techniques exclues). Mesdocs accompagne le médecin dans la préparation du dossier CPAM pour maximiser les chances d'acceptation. En cas de refus, Mesdocs analyse les motifs avec vous.",
  },
];

export default function GeContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Le groupement d'employeurs : un employeur à votre place</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Un <strong>groupement d'employeurs (GE)</strong> est une association loi 1901 qui embauche des salariés et les met à disposition de ses membres adhérents. Dans le secteur médical, Mesdocs joue ce rôle : c'est Mesdocs qui est l'employeur de l'assistant médical, pas vous.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Ce modèle est prévu par le <strong>Code du travail (articles L. 1253-1 et suivants)</strong> et reconnu par la Convention Médicale 2024–2029. Il permet aux médecins libéraux de bénéficier d'un collaborateur salarié sans assumer les contraintes de la gestion RH.
          </p>
        </div>
      </section>

      {/* Comparaison avec/sans GE */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Avec ou sans groupement d'employeurs ?</h2>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <div className="bg-white rounded-2xl border border-[#e4eaf5] p-8">
              <p className="text-[17px] font-bold text-gray-500 mb-5">✗ Sans GE — Emploi direct</p>
              <ul className="flex flex-col gap-3">
                {sansGe.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[14px] text-gray-600 leading-[1.6]">
                    <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0f5ff] rounded-2xl border border-[#d0ddf5] p-8">
              <p className="text-[17px] font-bold text-[#093e98] mb-5">✓ Avec Mesdocs GE</p>
              <ul className="flex flex-col gap-3">
                {avecGe.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[14px] text-gray-700 leading-[1.6]">
                    <CheckCircle size={16} className="text-[#093e98] shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Comment fonctionne la mise à disposition ?</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Mesdocs recrute l'assistant médical et signe avec lui un <strong>contrat de travail CDI</strong>. Une <strong>convention de mise à disposition</strong> est ensuite signée entre Mesdocs et votre cabinet. Cette convention précise les horaires, les missions confiées et la durée de la mise à disposition.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Vous recevez l'aide CPAM directement sur votre compte. Vous reversez ensuite à Mesdocs une contribution qui couvre le salaire, les charges sociales et les frais de gestion. <strong>La 1re année, l'aide CPAM couvre généralement la totalité de cette contribution.</strong>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions sur le groupement d'employeurs</h2>
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
          <Link href="/assistants-medicaux" className="text-[#1d67cd] underline hover:text-[#093e98]">La mise à disposition en détail →</Link>
          <Link href="/dispositif-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Le financement CPAM →</Link>
          <Link href="/prendre-rendez-vous" className="text-[#1d67cd] underline hover:text-[#093e98]">Rejoindre Mesdocs →</Link>
        </div>
      </section>
    </>
  );
}
