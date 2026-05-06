'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/avantages-demarches', label: 'Avantages & Démarches' },
  { href: '/devenir-assistant-medical', label: 'Devenir Assistant Médical' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e4eaf5]">
      <div className="max-w-[1140px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[68px]">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-[20px] font-bold text-[#1161b4]">Assistants Médicaux</span>
            <span className="text-[13px] text-[#1161b4]">Mesdocs Groupement d&apos;employeurs</span>
          </Link>
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[14px] transition-colors hover:text-[#093e98] hover:underline ${
                    pathname === link.href ? 'text-[#093e98] underline' : 'text-[#1d67cd]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} color="#093e98" /> : <Menu size={22} color="#093e98" />}
          </button>
        </nav>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col bg-white border-b border-[#e4eaf5] shadow-md px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[14px] text-[#1d67cd] border-b border-[#eef2f8] last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
