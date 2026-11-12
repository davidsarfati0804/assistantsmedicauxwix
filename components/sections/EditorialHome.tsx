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
            <strong>GE Mesdocs</strong>, également appelé Mesdocs Groupement d&apos;Employeurs, est une association spécialisée dans le recrutement et la mise à disposition d&apos;assistants médicaux pour les médecins libéraux en France.
          </p>
          <p>
            <strong>Mesdocs est l&apos;employeur de l&apos;assistant médical</strong> : le groupement signe le contrat de travail et assure la paie, les déclarations sociales et le suivi employeur. Le médecin adhérent organise les missions dans son cabinet, selon les règles applicables et la convention de mise à disposition.
          </p>
          <p>
            Que vous exerciez seul, en groupe ou en maison de santé, notre équipe vous accompagne dans la préparation du poste et du recrutement. Les conditions d&apos;une aide de l&apos;Assurance Maladie sont examinées avec votre CPAM, qui confirme votre éligibilité et vos engagements.
          </p>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-700">Les conditions varient selon votre organisation : consultez le <Link href="/assistant-medical-medecin-specialiste" className="text-blue-800 underline">dispositif pour les spécialistes</Link>, le <Link href="/assistant-medical-maison-de-sante" className="text-blue-800 underline">partage d’un assistant en maison de santé</Link> et le <Link href="/groupement-employeurs-medecin-liberal" className="text-blue-800 underline">fonctionnement du groupement d’employeurs</Link>. Pour une demande précise, <Link href="/contact" className="text-blue-800 underline">contactez notre équipe</Link>.</p>
        <div className="flex flex-wrap gap-4 mt-8 text-[14px]">
          <Link href="/dispositif-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Le dispositif CPAM en détail →</Link>
          <Link href="/assistants-medicaux" className="text-[#1d67cd] underline hover:text-[#093e98]">La mise à disposition expliquée →</Link>
          <Link href="/recrutement-assistant-medical" className="text-[#1d67cd] underline hover:text-[#093e98]">Notre processus de recrutement →</Link>
        </div>
      </div>
    </section>
  );
}
