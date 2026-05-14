import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import AvantagesContent from '@/components/sections/AvantagesContent';
import CtaSection from '@/components/sections/CtaSection';
import SchemaOrg, { faqSchema } from '@/components/seo/SchemaOrg';

const OG_IMAGE = { url: 'https://www.assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: 'Avantages & Financement du Dispositif Assistant Médical' };

export const metadata: Metadata = {
  title: 'Avantages & Financement du Dispositif Assistant Médical',
  description: 'Aide CPAM de 19 000 à 38 000 €/an, démarches simplifiées, accompagnement complet : découvrez tous les avantages du dispositif assistant médical avec Mesdocs.',
  alternates: { canonical: 'https://www.assistants-medicaux.com/avantages-demarches' },
  openGraph: {
    title: 'Avantages & Financement du Dispositif Assistant Médical | Mesdocs',
    description: 'CPAM finance jusqu\'à 38 000 €/an. Démarches expliquées étape par étape avec Mesdocs Groupement d\'Employeurs.',
    url: 'https://www.assistants-medicaux.com/avantages-demarches',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const avantagesFaq = faqSchema([
  { q: 'Quel est le montant de l\'aide CPAM pour un assistant médical ?', a: 'L\'aide CPAM varie de 19 000 à 38 000 €/an selon le temps de travail de l\'assistant. Pour un mi-temps (0,5 ETP), l\'aide est d\'environ 19 000 €/an la première année. Pour un temps plein (1 ETP), elle atteint 38 000 €/an la première année.' },
  { q: 'Quelles démarches faut-il effectuer pour bénéficier du dispositif ?', a: 'Les démarches comprennent : vérification de l\'éligibilité avec Mesdocs, sélection d\'un assistant médical, signature d\'une convention avec la CPAM locale, et mise en place du contrat de mise à disposition. Mesdocs accompagne le médecin à chaque étape.' },
  { q: 'Combien de temps durent les démarches avant la prise de poste ?', a: 'Le délai moyen entre le premier échange avec Mesdocs et la prise de poste de l\'assistant médical est de 6 à 8 semaines. Ce délai comprend le recrutement, la formation CQP et la signature de la convention CPAM.' },
  { q: 'L\'aide CPAM est-elle versée dès le premier mois ?', a: 'Non, l\'aide CPAM est versée après signature de la convention avec la CPAM et validation des premières étapes. Mesdocs vous accompagne dans le suivi administratif pour accélérer les délais de versement.' },
  { q: 'Le médecin doit-il gérer les formalités employeur de l\'assistant médical ?', a: 'Non. Avec Mesdocs Groupement d\'Employeurs, toutes les obligations d\'employeur (contrat de travail, paie, URSSAF, congés, formation) sont gérées par Mesdocs. Le médecin bénéficie de l\'assistant sans contrainte administrative.' },
]);

export default function AvantagesPage() {
  return (
    <>
      <SchemaOrg schema={avantagesFaq} />
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
