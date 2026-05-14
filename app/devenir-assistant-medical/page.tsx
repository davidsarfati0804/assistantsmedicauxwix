import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import DevenirContent from '@/components/sections/DevenirContent';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Devenir Assistant Médical – Postuler chez Mesdocs GE',
  description: 'Vous souhaitez devenir assistant médical ? Découvrez le métier, les formations CQP, VAE et FAE, et postulez directement auprès de Mesdocs Groupement d\'Employeurs.',
  alternates: { canonical: 'https://assistants-medicaux.com/devenir-assistant-medical' },
  openGraph: {
    title: 'Devenir Assistant Médical – Postuler chez Mesdocs GE',
    description: 'CQP, VAE, FAE, candidature : Mesdocs accompagne les candidats assistants médicaux dans leur parcours.',
    url: 'https://assistants-medicaux.com/devenir-assistant-medical',
    type: 'website',
  },
};

export default function DevenirPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_devenir.jpg"
          imageAlt="Devenir Assistant Médical"
          title={<>Vous souhaitez devenir<br />Assistant.e Médical ?</>}
          body="Découvrez en quoi consiste le rôle d'Assistant Médical, comment vous pouvez soutenir les professionnels de la santé et apprenez quelles sont les exigences et les conditions nécessaires pour le devenir, y compris les qualifications, les compétences et les attentes."
          ctaPrimary={{ label: 'En savoir plus', href: '#qui' }}
          ctaLight={{ label: 'Nous contacter', href: '#contact' }}
        />
        <DevenirContent />
        <CtaSection
          title={<>Vous êtes intéressé.e<br />et souhaitez devenir assistant.e médical ?</>}
          buttonLabel="Nous Contacter"
          buttonHref="#contact"
        />
      </main>
      <Footer />
    </>
  );
}
