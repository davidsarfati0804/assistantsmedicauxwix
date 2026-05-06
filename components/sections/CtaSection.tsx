import Link from 'next/link';

interface CtaSectionProps {
  title: React.ReactNode;
  buttonLabel: string;
  buttonHref: string;
  subLink?: { label: React.ReactNode; href: string };
}

export default function CtaSection({ title, buttonLabel, buttonHref, subLink }: CtaSectionProps) {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-[38px] font-light leading-[1.3] mb-8 max-md:text-[26px]">{title}</h1>
      <Link href={buttonHref} className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#093e98] text-[#fdfefe] text-[16px] hover:opacity-85 transition-opacity mb-5">
        {buttonLabel}
      </Link>
      {subLink && (
        <Link href={subLink.href} className="block text-[20px] text-black hover:underline mt-2">
          {subLink.label}
        </Link>
      )}
    </section>
  );
}
