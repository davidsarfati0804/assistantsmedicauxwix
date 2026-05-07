import Link from 'next/link';
import Image from 'next/image';

interface CtaSectionProps {
  title: React.ReactNode;
  buttonLabel: string;
  buttonHref: string;
  subLink?: { label: React.ReactNode; href: string };
}

export default function CtaSection({ title, buttonLabel, buttonHref, subLink }: CtaSectionProps) {
  return (
    <section className="py-20 px-6 bg-white max-md:py-14">
      <div className="max-w-[820px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#04287a] via-[#093e98] to-[#1a5cc8] px-12 py-16 text-center max-md:px-7 max-md:py-10 shadow-[0_12px_60px_rgba(9,62,152,.28)]">

          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/[0.06] pointer-events-none" />
          <div className="absolute -bottom-20 -left-12 w-72 h-72 rounded-full bg-white/[0.05] pointer-events-none" />

          {/* Illustration fond transparent — épouse le fond navy */}
          <div className="absolute bottom-0 right-0 w-[200px] pointer-events-none max-md:hidden opacity-90">
            <Image src="/assets/illus_01_nobg.png" alt="" width={400} height={340} className="w-full object-contain object-bottom" />
          </div>

          <h2 className="relative text-[30px] font-bold text-white leading-[1.3] mb-8 max-md:text-[22px]">
            {title}
          </h2>
          <Link
            href={buttonHref}
            className="relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-[#093e98] text-[15px] font-bold hover:bg-[#eef4fd] transition-colors shadow-lg"
          >
            {buttonLabel}
          </Link>
          {subLink && (
            <Link href={subLink.href} className="relative block text-[13px] text-white/60 hover:text-white transition-colors mt-5">
              {subLink.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
