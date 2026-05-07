import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import AssistantsMedicauxContent from '@/components/sections/AssistantsMedicauxContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';

export const metadata: Metadata = {
  title: 'Mise à Disposition d\'un Assistant Médical | Mesdocs GE',
  description: 'Mesdocs met à disposition un assistant médical formé pour votre cabinet : accueil, administratif, coordination soins. Vous n\'êtes pas l\'employeur. CPAM finance jusqu\'à 38 000 €/an.',
  alternates: { canonical: 'https://www.assistants-medicaux.com/assistants-medicaux' },
  openGraph: {
    title: 'Mise à Disposition d\'un Assistant Médical | Mesdocs GE',
    description: 'Mesdocs recrute et met à disposition votre assistant médical. Zéro contrainte employeur. CPAM finance jusqu\'à 38 000 €/an.',
    url: 'https://www.assistants-medicaux.com/assistants-medicaux',
    type: 'website',
  },
};

export default function AssistantsMedicauxPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_home.jpg"
          imageAlt="Médecin libéral travaillant avec son assistant médical en cabinet"
          title={<>La Mise à Disposition d'un<br />Assistant Médical pour votre Cabinet</>}
          body="Mesdocs Groupement d'Employeurs est votre intermédiaire officiel : nous sommes l'employeur, vous bénéficiez du service. Zéro contrainte administrative pour le médecin."
          ctaPrimary={{ label: 'Démarrer mon projet', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir le financement', href: '/avantages-demarches' }}
        />
        <ResumeBanner>
          Un assistant médical est mis à disposition du médecin par Mesdocs Groupement d'Employeurs. Mesdocs est l'employeur légal : il gère le contrat de travail, la paie, les congés et la formation CQP. Le médecin bénéficie de l'assistant dans son cabinet pour des missions administratives, de préparation des consultations et de coordination des soins — sans jamais être employeur lui-même.
        </ResumeBanner>
        <AssistantsMedicauxContent />
        <CtaSection
          title={<>Prêt à gagner du temps<br />avec votre assistant médical ?</>}
          buttonLabel="Prendre rendez-vous"
          buttonHref="/prendre-rendez-vous"
          subLink={{ label: 'En savoir plus sur le financement CPAM >', href: '/avantages-demarches' }}
        />
      </main>
      <Footer />
    </>
  );
}
