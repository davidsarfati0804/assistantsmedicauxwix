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
import SchemaOrg, { faqSchema, websiteSchema } from '@/components/seo/SchemaOrg';

const OG_IMAGE = { url: 'https://assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: "Mesdocs Groupement d'Employeurs – Assistants Médicaux" };

export const metadata: Metadata = {
  title: 'Assistant Médical pour Médecins Libéraux | Mesdocs GE',
  description: 'Recrutez un assistant médical avec Mesdocs : mise à disposition, gestion employeur et aide CPAM jusqu’à 38 000 € la première année pour 1 ETP, sous conditions.',
  alternates: { canonical: 'https://assistants-medicaux.com/' },
  openGraph: {
    title: 'Assistant Médical pour Médecins Libéraux | Mesdocs GE',
    description: 'Mesdocs recrute votre assistant médical et gère tout : CPAM, contrat, paie, formation. Financement jusqu\'à 38 000 € la première année pour 1 ETP, sous conditions.',
    url: 'https://assistants-medicaux.com/',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const homeQuestions = [
  { q: "Quelles sont les missions d’un assistant médical ?", a: "L’assistant médical apporte un appui administratif, prépare la consultation et participe à la coordination du parcours des patients, dans le cadre des missions confiées par le médecin." },
  { q: "Quel est le montant de l’aide CPAM ?", a: "Pour l’aide individuelle, les montants de première année sont de 19 000 € pour un mi-temps et 38 000 € pour un temps plein, sous conditions. Les montants diminuent ensuite, sauf situations particulières de patientèle. Votre CPAM confirme votre éligibilité et vos engagements." },
  { q: "Comment fonctionne un groupement d’employeurs ?", a: "Mesdocs signe le contrat de travail de l’assistant et gère la paie. Le médecin adhère au groupement et signe une convention de mise à disposition qui précise l’organisation, les missions et les engagements de chacun." },
];
const homeFaq = faqSchema(homeQuestions);

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={[websiteSchema, homeFaq]} />
      <Header />
      <main className="pt-[68px]">
        <Hero
          imageSrc="/assets/hero_home.jpg"
          imageAlt="docteur assistant médical"
          title={<>Optimisez votre pratique<br />avec l&apos;Assistant Médical</>}
          body={
            <>
              <p className="mb-2">Mesdocs Groupement d&apos;Employeurs sait à quel point votre temps de médecin est précieux.</p>
              <p>C&apos;est pourquoi le Dispositif d&apos;Assistant Médical a été créé, une solution conçue pour vous libérer des tâches administratives et vous permettre de vous concentrer sur l&apos;essentiel : les soins de vos patients.</p>
            </>
          }
          ctaPrimary={{ label: 'Vérifier mon éligibilité avec un conseiller', href: '/prendre-rendez-vous' }}
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
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[860px]">
            <h2 className="mb-7 text-2xl font-semibold">Vos questions sur l’assistant médical</h2>
            <div className="space-y-6">{homeQuestions.map(({ q, a }) => <div key={q}><h3 className="mb-2 text-lg font-semibold">{q}</h3><p className="leading-7 text-gray-700">{a}</p></div>)}</div>
          </div>
        </section>
        <TestimonialSlider />
      </main>
      <Footer />
    </>
  );
}
