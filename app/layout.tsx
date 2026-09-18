import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import SchemaOrg, { organizationSchema } from '@/components/seo/SchemaOrg';

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
  description: "Mesdocs Groupement d'Employeurs recrute et met à disposition des assistants médicaux pour les médecins libéraux. CPAM finance jusqu'à 38 000 €/an. Aucune obligation d'employeur pour le médecin.",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TKVGWC8F');
        `}</Script>
      </head>
      <body className={`antialiased ${workSans.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKVGWC8F"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <SchemaOrg schema={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
