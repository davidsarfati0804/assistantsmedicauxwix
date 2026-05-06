import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import AvantagesContent from '@/components/sections/AvantagesContent';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Avantages & Démarches | Assistants Médicaux – Mesdocs Groupement d\'employeurs',
  description: 'Découvrez avec Mesdocs les avantages du dispositif assistant médical : subventions CPAM (19 000 € à 38 000 €), démarches simples et contrat de 5 ans.',
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
