import Link from 'next/link';
import { geQuestions } from '@/lib/ge-faq';
import { CheckCircle, XCircle } from 'lucide-react';

const sansGe = [
  'Vous êtes employeur direct — URSSAF, bulletins de paie, contrat de travail',
  'Vous gérez les absences, congés, remplacements',
  "Vous assumez le risque juridique en cas de litige prud'homal",
  "Vous avancez le salaire avant le versement de l'aide CPAM",
];

const avecGe = [
  "Mesdocs est l'employeur — Mesdocs gère la paie et le contrat de travail",
  'Mesdocs gère la paie, les charges, les congés, les remplacements',
  'Mesdocs prend en charge le risque juridique employeur',
  "Une convention précise votre contribution et les modalités de règlement",
];

export default function GeContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Le groupement d&apos;employeurs : un employeur à votre place</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Un <strong>groupement d&apos;employeurs (GE)</strong> est une association loi 1901 qui embauche des salariés et les met à disposition de ses membres adhérents. Dans le secteur médical, Mesdocs joue ce rôle : c&apos;est Mesdocs qui est l&apos;employeur de l&apos;assistant médical, pas vous.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Ce modèle est prévu par le <strong>Code du travail (articles L. 1253-1 et suivants)</strong> et reconnu par la Convention Médicale 2024–2029. Il permet aux médecins libéraux de bénéficier d&apos;un collaborateur salarié sans assumer les contraintes de la gestion RH.
          </p>
        </div>
      </section>

      {/* Comparaison avec/sans GE */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Avec ou sans groupement d&apos;employeurs ?</h2>
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
            Mesdocs recrute l&apos;assistant médical et signe avec lui un <strong>contrat de travail CDI</strong>. Une <strong>convention de mise à disposition</strong> est ensuite signée entre Mesdocs et votre cabinet. Cette convention précise les horaires, les missions confiées et la durée de la mise à disposition.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Vous recevez l&apos;aide CPAM directement sur votre compte. Vous reversez ensuite à Mesdocs une contribution qui couvre le salaire, les charges sociales et les frais de gestion. Le reste à charge est calculé selon le coût de la mise à disposition et le montant de l’aide accordée.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions sur le groupement d&apos;employeurs</h2>
          <div className="flex flex-col gap-5">
            {geQuestions.map((item) => (
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
