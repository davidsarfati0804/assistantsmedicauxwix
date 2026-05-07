import Image from 'next/image';

export default function TrustBand() {
  return (
    <section className="bg-white border-y border-[#e4eaf5] py-10">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex items-center gap-12 max-md:flex-col max-md:gap-8">

          {/* Illustration */}
          <div className="w-[180px] shrink-0 max-md:w-[140px]">
            <Image src="/assets/illus_02_nobg.png" alt="Accueil patient" width={360} height={300} className="w-full object-contain" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-start gap-5 max-md:items-center max-md:text-center">
            <p className="text-[12px] uppercase tracking-[0.15em] text-gray-400 font-medium">
              Référencé par l&apos;Assurance Maladie
            </p>
            <a href="https://www.ameli.fr" target="_blank" rel="noopener" className="opacity-85 hover:opacity-100 transition-opacity">
              <Image src="/assets/logo_ameli.png" alt="l'Assurance Maladie – ameli.fr" width={220} height={62} className="object-contain h-[52px] w-auto" />
            </a>
            <p className="text-[14px] text-gray-500 leading-[1.7] max-w-[500px]">
              Mesdocs Groupement d&apos;Employeurs est référencé sur <strong className="text-[#093e98]">ameli.fr</strong> comme organisme agréé pour l&apos;emploi d&apos;assistants médicaux dans les cabinets de médecins libéraux.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
