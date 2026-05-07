import type { Metadata } from "next";
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
      </head>
      <body className="antialiased" style={{ fontFamily: "'Work Sans', Arial, sans-serif" }}>
        <SchemaOrg schema={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
