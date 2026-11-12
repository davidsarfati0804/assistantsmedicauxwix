import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import AnalyticsConsent from '@/components/analytics/AnalyticsConsent';
import "./globals.css";
import SchemaOrg, { organizationSchema, websiteSchema } from '@/components/seo/SchemaOrg';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: {
    default: "Assistant Médical pour Médecins Libéraux | Mesdocs GE",
    template: "%s | Mesdocs GE",
  },
  description: "Mesdocs Groupement d'Employeurs recrute et met à disposition des assistants médicaux pour les médecins libéraux. CPAM finance jusqu'à 38 000 € la première année pour 1 ETP, sous conditions. Mesdocs assure la gestion employeur.",
  metadataBase: new URL('https://assistants-medicaux.com'),
  verification: {
    google: 'XpqdQ1qMJkMcwr2LPQM4DyLVNP5Op8e5NEUsC_nBDaQ',
  },
  openGraph: {
    siteName: "Mesdocs Groupement d'Employeurs",
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${workSans.variable}`}>
      <body className={`antialiased ${workSans.className}`}>
        <SchemaOrg schema={[organizationSchema, websiteSchema]} />
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
