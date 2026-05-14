import Link from 'next/link';

export default function EditorialHome() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[860px] mx-auto">
        <h2 className="text-[26px] font-semibold text-gray-900 mb-5 leading-[1.3]">
          Mesdocs, votre Groupement d&apos;Employeurs pour l&apos;assistant médical
        </h2>
        <div className="text-[16px] text-gray-600 leading-[1.8] flex flex-col gap-4">
          <p>
            Depuis la mise en place de la <strong>Convention Médicale 2024–2029</strong>, les médecins libéraux en secteur 1 et secteur 2 OPTAM peuvent bénéficier d&apos;un financement de l&apos;Assurance Maladie (CPAM) allant de <strong>19 000 à 38 000 €/an</strong> pour employer un assistant médical à temps partiel ou à temps plein.
          </p>
          <p>
            Mesdocs Groupement d&apos;Employeurs simplifie cette démarche : nous recrutons, formons et mettons à disposition votre assistant médical directement dans votre cabinet. En tant que <strong>groupement d&apos;employeurs agréé</strong>, c&apos;est Mesdocs qui endosse l&apos;intégralité des obligations d&apos;employeur — contrat de travail, paie, URSSAF, congés, formation CQP. Vous bénéficiez du service sans jamais devenir employeur.
          </p>
          <p>
            Que vous exerciez en médecine générale, en pédiatrie ou dans une autre spécialité éligible, notre équipe vérifie votre éligibilité gratuitement et vous accompagne de A à Z, de la sélection du profil jusqu&apos;au renouvellement du contrat CPAM au bout de 5 ans.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8 text-[14px]">
          <Link href="/dispositif-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Le dispositif CPAM en détail →</Link>
          <Link href="/assistants-medicaux" className="text-[#1d67cd] underline hover:text-[#093e98]">La mise à disposition expliquée →</Link>
          <Link href="/recrutement-assistant-medical" className="text-[#1d67cd] underline hover:text-[#093e98]">Notre processus de recrutement →</Link>
        </div>
      </div>
    </section>
  );
}
