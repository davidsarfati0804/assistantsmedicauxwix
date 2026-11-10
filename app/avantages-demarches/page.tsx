import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import AvantagesContent from '@/components/sections/AvantagesContent';
import CtaSection from '@/components/sections/CtaSection';
import SchemaOrg, { breadcrumbSchema } from '@/components/seo/SchemaOrg';

const OG_IMAGE = { url: 'https://assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: 'Avantages & Financement du Dispositif Assistant Médical' };

export const metadata: Metadata = {
  title: 'Aide CPAM Assistant Médical : Montants et Démarches',
  description: 'Aide CPAM : 19 000 à 38 000 € la première année pour 0,5 à 1 ETP, sous conditions. Montants des années suivantes et démarches avec Mesdocs.',
  alternates: { canonical: 'https://assistants-medicaux.com/avantages-demarches' },
  openGraph: {
    title: 'Avantages & Financement du Dispositif Assistant Médical | Mesdocs',
    description: 'CPAM finance jusqu\'à 38 000 € la première année pour 1 ETP, sous conditions. Démarches expliquées étape par étape avec Mesdocs Groupement d\'Employeurs.',
    url: 'https://assistants-medicaux.com/avantages-demarches',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const avantagesBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: 'Avantages & Financement', item: 'https://assistants-medicaux.com/avantages-demarches' },
]);


export default function AvantagesPage() {
  return (
    <>
      <SchemaOrg schema={avantagesBreadcrumb} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_avantages.jpg"
          imageAlt="Avantages et démarches du dispositif assistant médical CPAM"
          title={<>Avantages & Financement<br />du Dispositif Assistant Médical</>}
          body="Aide CPAM de 19 000 à 38 000 € la première année pour 0,5 à 1 ETP, sous conditions, et gestion employeur assurée par Mesdocs : tout ce que vous devez savoir sur le dispositif assistant médical avec Mesdocs."
          ctaPrimary={{ label: 'En savoir plus', href: '#avantages' }}
          ctaLight={{ label: 'Nous contacter', href: '#contact' }}
        />
        <AvantagesContent />
        <CtaSection
          title={<>Vous êtes intéressé.e<br />et souhaitez recruter votre futur assistant ?</>}
          buttonLabel="Nous Contacter"
          buttonHref="#contact"
        />
      </main>
      <Footer />
    </>
  );
}
