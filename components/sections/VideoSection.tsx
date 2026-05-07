import Image from 'next/image';
import Link from 'next/link';

export default function VideoSection() {
  return (
    <section className="bg-[#e8f0fe] py-[60px] mt-[40px]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-[55%_1fr] gap-12 items-center max-md:grid-cols-1">
          <div>
            <a href="https://www.youtube.com/watch?v=biHT2sHsLRQ" target="_blank" rel="noopener" className="relative block cursor-pointer rounded-md overflow-hidden">
              <Image src="/assets/ameli_video_thumbnail.png" alt="Dispositif Assistant Médical – Assurance Maladie" width={902} height={505} className="w-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#e03e3e] rounded-lg flex items-center justify-center text-white text-[24px]">
                ▶
              </div>
            </a>
            <div className="flex items-center gap-2 mt-3">
              <Image src="/assets/logo_ameli.png" alt="Assurance Maladie" width={90} height={26} className="object-contain h-[22px] w-auto opacity-70" />
              <span className="text-[12px] text-gray-400">— Source officielle Assurance Maladie</span>
            </div>
          </div>
          <div>
            <h2 className="text-[28px] font-light leading-[1.3] mb-5">Découvrez les avantages du dispositif d&apos;assistant médical</h2>
            <p className="text-[16px] leading-[1.65] mb-3">Nous savons que votre temps est limité, c&apos;est pourquoi nous vous proposons de visionner la video de l&apos;assurance Maladie une vidéo informative qui explique en détail comment l&apos;Assistant Médical peut transformer votre pratique médicale.</p>
            <p className="text-[16px] leading-[1.65]">
              <strong className="font-semibold">Vous souhaitez en savoir plus ?</strong><br />
              Vous trouverez des informations plus détaillées sur le dispositif en explorant les sections spécifiques de notre site tels que les{' '}
              <Link href="/avantages-demarches" className="text-[#1d67cd] underline hover:text-[#093e98]">Avantages</Link>
              {' '}et{' '}
              <Link href="/avantages-demarches#demarches" className="text-[#1d67cd] underline hover:text-[#093e98]">Démarches</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
