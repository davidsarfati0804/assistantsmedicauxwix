import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import AvantagesContent from '@/components/sections/AvantagesContent';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Avantages & Financement du Dispositif Assistant Médical',
  description: 'Aide CPAM de 19 000 à 38 000 €/an, démarches simplifiées, accompagnement complet : découvrez tous les avantages du dispositif assistant médical avec Mesdocs.',
  alternates: { canonical: 'https://www.assistants-medicaux.com/avantages-demarches' },
  openGraph: {
    title: 'Avantages & Financement du Dispositif Assistant Médical | Mesdocs',
    description: 'CPAM finance jusqu\'à 38 000 €/an. Démarches expliquées étape par étape avec Mesdocs Groupement d\'Employeurs.',
    url: 'https://www.assistants-medicaux.com/avantages-demarches',
    type: 'website',
  },
};

export default function AvantagesPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_avantages.jpg"
          imageAlt="Avantages et Démarches"
          title="Avantages & Démarches"
          body="Toutes les informations sur le dispositif assistant médical : avantages, financement et démarches à effectuer."
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
