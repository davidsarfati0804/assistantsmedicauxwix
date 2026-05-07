import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import SchemaOrg, { organizationSchema } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: {
    default: "Assistant Médical pour Médecins Libéraux | Mesdocs GE",
    template: "%s | Mesdocs Groupement d'Employeurs",
  },
  description: "Mesdocs Groupement d'Employeurs recrute et met à disposition des assistants médicaux pour les médecins libéraux. CPAM finance jusqu'à 38 000 €/an. Zéro contrainte employeur.",
  metadataBase: new URL('https://www.assistants-medicaux.com'),
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
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TKVGWC8F');
        `}</Script>
      </head>
      <body className="antialiased" style={{ fontFamily: "'Work Sans', Arial, sans-serif" }}>
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
