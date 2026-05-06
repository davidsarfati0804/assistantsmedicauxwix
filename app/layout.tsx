import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assistant médical pour médecins libéraux – recrutement & aide (jusqu'à 38 000 €/an) | Mesdocs Groupement d'employeurs",
  description: "Recrutez un assistant médical avec Mesdocs Groupement d'employeurs. Nous accompagnons les médecins libéraux : démarches CPAM, portage salarial, formation CQP et gestion administrative clé en main.",
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
        {children}
      </body>
    </html>
  );
}
