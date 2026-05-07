import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import BenefitsCard from '@/components/sections/BenefitsCard';
import TrustBand from '@/components/sections/TrustBand';
import VideoSection from '@/components/sections/VideoSection';
import CtaSection from '@/components/sections/CtaSection';
import StatsBand from '@/components/sections/StatsBand';
import TestimonialSlider from '@/components/sections/TestimonialSlider';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <Hero
          imageSrc="/assets/hero_home.jpg"
          imageAlt="docteur assistant médical"
          title={<>Optimisez votre pratique<br />avec l&apos;Assistant Médical</>}
          body={
            <>
              <p className="mb-2">Assistants Médicaux :Mesdocs Groupement d&apos;employeurs comprend à quel point votre temps en tant que médecin est précieux.</p>
              <p>C&apos;est pourquoi le Dispositif d&apos;Assistant Médical a été créé, une solution conçue pour vous libérer des tâches administratives et vous permettre de vous concentrer sur l&apos;essentiel : les soins de vos patients.</p>
            </>
          }
          ctaPrimary={{ label: 'En savoir plus', href: '/avantages-demarches' }}
          ctaLight={{ label: 'Nous contacter', href: '#contact' }}
        />
        <BenefitsCard />
        <TrustBand />
        <VideoSection />
        <CtaSection
          title={<>Vous êtes intéressé.e<br />et souhaitez recruter votre futur assistant ?</>}
          buttonLabel="Nous Contacter"
          buttonHref="#contact"
subLink={{
            label: <>Vous souhaitez en savoir plus sur les démarches à effectuer ?<br />Plus d&apos;informations ici &gt;</>,
            href: '/avantages-demarches#demarches',
          }}
        />
        <StatsBand />
        <TestimonialSlider />
      </main>
      <Footer />
    </>
  );
}
