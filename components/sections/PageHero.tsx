import Image from 'next/image';
import Link from 'next/link';

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  body: React.ReactNode;
  ctaPrimary?: { label: string; href: string };
  ctaLight?: { label: string; href: string };
}

export default function PageHero({ imageSrc, imageAlt, title, body, ctaPrimary, ctaLight }: PageHeroProps) {
  return (
    <section className="relative h-[380px] overflow-hidden">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-top" priority />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,.7) 0%, rgba(255,255,255,.4) 55%, rgba(255,255,255,0) 85%)' }} />
      <div className="relative z-10 h-full flex flex-col justify-center px-12 max-w-[600px] max-md:px-6">
        <h1 className="text-[41px] font-light leading-[1.2] mb-3.5 max-md:text-[26px]">{title}</h1>
        <p className="text-[18px] leading-[1.55] mb-6 max-md:text-[15px]">{body}</p>
        <div className="flex gap-3 flex-wrap">
          {ctaPrimary && (
            <Link href={ctaPrimary.href} className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#093e98] text-[#fdfefe] text-[16px] hover:opacity-85 transition-opacity">
              {ctaPrimary.label}
            </Link>
          )}
          {ctaLight && (
            <Link href={ctaLight.href} className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#e1eeff] text-[#093e98] text-[16px] hover:opacity-85 transition-opacity">
              {ctaLight.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
