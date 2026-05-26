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
  description: 'Mesdocs recrute votre assistant médical : CPAM finance jusqu\'à 38 000 €/an. Aucune obligation d\'employeur. Secteur 1 et 2 OPTAM, délai 6 à 8 semaines.',
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
  { q: "Qu'est-ce qu'un assistant médical ?", a: "Un assistant médical accompagne le médecin libéral dans son cabinet en prenant en charge trois catégories de missions : les tâches administratives (gestion des dossiers patients, prise de rendez-vous, courriers), l'appui à la consultation (accueil des patients, prise de constantes, préparation des salles) et la coordination des soins (orientation vers les spécialistes, suivi des résultats d'examens). Il est formé spécifiquement via un CQP (Certificat de Qualification Professionnelle) en 279 heures, ou par la voie de la VAE pour les professionnels déjà expérimentés. Le médecin ne devient pas son employeur : avec Mesdocs Groupement d'Employeurs, c'est Mesdocs qui gère le contrat de travail, la paie et la formation." },
  { q: "Qui finance l'assistant médical ?", a: "L'Assurance Maladie (CPAM) finance l'assistant médical à hauteur de 19 000 à 38 000 €/an selon le temps de travail de l'assistant (de 0,5 à 1 ETP). Ce financement est inscrit dans la Convention Médicale 2024–2029 et s'applique aux médecins libéraux en secteur 1 et secteur 2 OPTAM. Des options à 1,5 et 2 ETP sont également disponibles sous conditions. Le financement est dégressif sur 5 ans (la première année est la plus importante), puis renouvelable. En contrepartie, le médecin s'engage à accueillir de nouveaux patients grâce au temps libéré. Mesdocs vous aide à calculer le montant précis auquel vous avez droit selon votre situation." },
  { q: "Le médecin devient-il employeur de l'assistant médical ?", a: "Non, le médecin ne devient pas employeur. Avec Mesdocs Groupement d'Employeurs, c'est Mesdocs — association loi 1901 — qui est l'employeur juridique de l'assistant médical. Le médecin est adhérent de l'association : il bénéficie de l'assistant dans son cabinet sans aucune obligation d'employeur. Cela signifie que Mesdocs gère le contrat de travail, la fiche de paie mensuelle, les déclarations URSSAF, les congés payés, les arrêts maladie et, le cas échéant, la rupture du contrat. Le médecin ne risque aucune procédure prud'homale et n'a aucune démarche administrative liée au statut d'employeur." },
  { q: "Combien de temps faut-il pour recruter un assistant médical ?", a: "Le délai moyen entre le premier contact avec Mesdocs et la prise de poste effective de l'assistant médical est de 6 à 8 semaines. Ce délai comprend quatre étapes : l'analyse des besoins et de l'organisation du cabinet (semaine 1), la sélection et la présentation de 2 à 3 profils de candidats (semaines 2 à 4), la signature de la convention CPAM et du contrat de mise à disposition (semaines 5 à 6), et enfin l'intégration de l'assistant au cabinet avec démarrage de la formation CQP. Mesdocs coordonne l'ensemble de ces étapes sans que le médecin ait à gérer les démarches administratives." },
  { q: "Quels médecins peuvent bénéficier du dispositif assistant médical ?", a: "Les médecins libéraux conventionnés en secteur 1 et secteur 2 OPTAM sont éligibles au dispositif assistant médical. Le secteur 3 (médecins non conventionnés) est exclu du dispositif. Certaines spécialités techniques sont également exclues : radiologues, anesthésistes, anatomo-pathologistes, médecins nucléaires, stomatologues et radiothérapeutes. Les médecins généralistes, pédiatres, gynécologues, cardiologues et la majorité des spécialistes cliniques sont éligibles. Les médecins exerçant en maison de santé pluriprofessionnelle (MSP) peuvent également bénéficier du dispositif sous conditions. Mesdocs vérifie votre éligibilité gratuitement lors d'un premier entretien de 20 minutes." },
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
