import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  title: React.ReactNode;
  body: React.ReactNode;
  ctaPrimary?: { label: string; href: string };
  ctaLight?: { label: string; href: string };
  height?: string;
}

export default function Hero({ imageSrc, imageAlt, title, body, ctaPrimary, ctaLight, height = 'h-[600px]' }: HeroProps) {
  return (
    <section className={`relative ${height} overflow-hidden`}>
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-center" priority />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.45) 50%, rgba(255,255,255,0) 80%)' }} />
      <div className="relative z-10 h-full flex flex-col justify-center px-12 max-w-[620px] max-md:px-6">
        <h1 className="text-[41px] font-light leading-[1.2] mb-5 max-md:text-[28px]">{title}</h1>
        <div className="text-[18px] leading-relaxed mb-7 max-w-[520px] max-md:text-[16px]">{body}</div>
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
