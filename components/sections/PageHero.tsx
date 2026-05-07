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
    <section className="relative h-[480px] overflow-hidden">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-top" priority />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,.92) 0%, rgba(255,255,255,.78) 36%, rgba(255,255,255,.30) 58%, rgba(255,255,255,0) 70%)' }}
      />
      <div className="relative z-10 h-full flex flex-col justify-center pl-[10%] pr-6 max-md:pl-6">
        <h1 className="text-[44px] font-bold leading-[1.15] mb-4 text-gray-900 max-md:text-[26px]">{title}</h1>
        <p className="text-[16px] leading-[1.55] mb-7 max-w-[460px] text-gray-800 max-md:text-[15px] max-md:max-w-none">{body}</p>
        <div className="flex gap-4 flex-wrap">
          {ctaPrimary && (
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#093e98] text-white text-[15px] font-semibold hover:opacity-88 transition-opacity"
            >
              {ctaPrimary.label}
            </Link>
          )}
          {ctaLight && (
            <Link
              href={ctaLight.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#093e98] text-[15px] font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
            >
              {ctaLight.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
