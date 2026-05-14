import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import BenefitsCard from '@/components/sections/BenefitsCard';
import TrustBand from '@/components/sections/TrustBand';
import VideoSection from '@/components/sections/VideoSection';
import CtaSection from '@/components/sections/CtaSection';
import StatsBand from '@/components/sections/StatsBand';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import EditorialHome from '@/components/sections/EditorialHome';
import SchemaOrg, { faqSchema } from '@/components/seo/SchemaOrg';

const OG_IMAGE = { url: 'https://assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: "Mesdocs Groupement d'Employeurs – Assistants Médicaux" };

export const metadata: Metadata = {
  title: 'Assistant Médical pour Médecins Libéraux | Mesdocs GE',
  description: 'Mesdocs Groupement d\'Employeurs recrute et met à disposition des assistants médicaux pour les médecins libéraux. CPAM finance jusqu\'à 38 000 €/an. Aucune obligation d\'employeur pour le médecin.',
  alternates: { canonical: 'https://assistants-medicaux.com/' },
  openGraph: {
    title: 'Assistant Médical pour Médecins Libéraux | Mesdocs GE',
    description: 'Mesdocs recrute votre assistant médical et gère tout : CPAM, contrat, paie, formation. Financement jusqu\'à 38 000 €/an.',
    url: 'https://assistants-medicaux.com/',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const homeFaq = faqSchema([
  { q: "Qu'est-ce qu'un assistant médical ?", a: "Un assistant médical accompagne le médecin dans son cabinet : gestion administrative, accueil des patients, préparation des consultations, prise de constantes et coordination des soins. Il est formé via un CQP (Certificat de Qualification Professionnelle) ou une VAE." },
  { q: "Qui finance l'assistant médical ?", a: "L'Assurance Maladie (CPAM) finance l'assistant médical à hauteur de 19 000 à 38 000 €/an selon le temps de travail (0,5 à 1 ETP). Ce financement est prévu par la Convention Médicale 2024–2029 pour les médecins libéraux en secteur 1 et 2 OPTAM." },
  { q: "Le médecin devient-il employeur de l'assistant médical ?", a: "Non. Avec Mesdocs Groupement d'Employeurs, c'est Mesdocs qui est l'employeur légal. Le médecin est adhérent de l'association et bénéficie de l'assistant médical sans aucune obligation d'employeur (contrat, paie, URSSAF, licenciement)." },
  { q: "Combien de temps faut-il pour recruter un assistant médical ?", a: "Le délai moyen entre le premier contact avec Mesdocs et la prise de poste est de 6 à 8 semaines. Mesdocs gère l'intégralité du processus : analyse des besoins, sélection des profils, formation CQP et signature de la convention CPAM." },
  { q: "Quels médecins peuvent bénéficier du dispositif assistant médical ?", a: "Les médecins libéraux en secteur 1 et secteur 2 OPTAM sont éligibles. Le secteur 3 (non conventionné) est exclu. Certaines spécialités techniques sont également exclues (radiologues, anesthésistes, anatomo-pathologistes). Mesdocs vérifie l'éligibilité gratuitement." },
]);

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={homeFaq} />
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
        <EditorialHome />
        <TestimonialSlider />
      </main>
      <Footer />
    </>
  );
}
