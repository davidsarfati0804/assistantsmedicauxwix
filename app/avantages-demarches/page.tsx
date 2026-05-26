import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import AvantagesContent from '@/components/sections/AvantagesContent';
import CtaSection from '@/components/sections/CtaSection';
import SchemaOrg, { faqSchema, breadcrumbSchema } from '@/components/seo/SchemaOrg';

const OG_IMAGE = { url: 'https://assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: 'Avantages & Financement du Dispositif Assistant Médical' };

export const metadata: Metadata = {
  title: 'Avantages & Financement Assistant Médical',
  description: 'Aide CPAM de 19 000 à 38 000 €/an, démarches simplifiées, accompagnement complet : découvrez tous les avantages du dispositif assistant médical avec Mesdocs.',
  alternates: { canonical: 'https://assistants-medicaux.com/avantages-demarches' },
  openGraph: {
    title: 'Avantages & Financement du Dispositif Assistant Médical | Mesdocs',
    description: 'CPAM finance jusqu\'à 38 000 €/an. Démarches expliquées étape par étape avec Mesdocs Groupement d\'Employeurs.',
    url: 'https://assistants-medicaux.com/avantages-demarches',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const avantagesBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: 'Avantages & Financement', item: 'https://assistants-medicaux.com/avantages-demarches' },
]);

const avantagesFaq = faqSchema([
  { q: 'Quel est le montant de l\'aide CPAM pour un assistant médical ?', a: 'L\'aide CPAM pour un assistant médical varie de 19 000 à 38 000 €/an selon le temps de travail de l\'assistant. Pour un mi-temps (0,5 ETP), l\'aide est d\'environ 19 000 €/an la première année, puis 14 000 €/an la deuxième année et 11 000 €/an à partir de la troisième année. Pour un temps plein (1 ETP), l\'aide atteint 38 000 €/an la première année, 28 000 €/an la deuxième année, et 22 000 €/an à partir de la troisième année. Des options à 1,5 et 2 ETP existent également sous conditions. Le contrat CPAM est conclu pour 5 ans, renouvelable. Ce financement est instauré par la Convention Médicale 2024–2029 et s\'applique aux médecins conventionnés en secteur 1 et secteur 2 OPTAM.' },
  { q: 'Quelles démarches faut-il effectuer pour bénéficier du dispositif ?', a: 'Le processus comprend quatre étapes principales. Premièrement, Mesdocs vérifie votre éligibilité au dispositif (secteur de conventionnement, spécialité, situation CPAM) lors d\'un premier entretien gratuit de 20 minutes. Deuxièmement, Mesdocs sélectionne et vous présente 2 à 3 profils de candidats assistants médicaux correspondant à votre fiche de poste. Troisièmement, vous signez la convention avec votre CPAM locale et le contrat de mise à disposition avec Mesdocs. Quatrièmement, votre assistant prend son poste et démarre sa formation CQP. Mesdocs gère l\'ensemble des démarches administratives, CPAM et RH à chaque étape. Le médecin n\'a pas à gérer les formalités d\'employeur.' },
  { q: 'Combien de temps durent les démarches avant la prise de poste ?', a: 'Le délai moyen entre le premier échange avec Mesdocs et la prise de poste de l\'assistant médical est de 6 à 8 semaines. Ce délai se décompose ainsi : semaine 1 pour l\'analyse des besoins et la validation de l\'éligibilité, semaines 2 à 4 pour la sélection et la présentation des profils de candidats, semaines 5 à 6 pour la signature de la convention CPAM et du contrat de mise à disposition, et enfin la prise de poste avec démarrage de la formation CQP. Ce délai peut être légèrement allongé selon la disponibilité de la CPAM locale pour la signature de la convention. Mesdocs accompagne le médecin tout au long du processus pour minimiser les délais.' },
  { q: 'L\'aide CPAM est-elle versée dès le premier mois ?', a: 'Non, l\'aide CPAM n\'est pas versée immédiatement dès la prise de poste. Elle est déclenchée après la signature officielle de la convention avec la CPAM locale et la validation administrative du dossier. En pratique, le premier versement intervient généralement dans les 2 à 3 mois suivant la prise de poste, avec un effet rétroactif à la date de signature de la convention. L\'aide est ensuite versée régulièrement, selon un calendrier défini avec la CPAM. Mesdocs assure le suivi administratif du dossier pour accélérer les délais de traitement et vous accompagne dans les relances si nécessaire.' },
  { q: 'Le médecin doit-il gérer les formalités employeur de l\'assistant médical ?', a: 'Non, le médecin n\'a aucune obligation d\'employeur. Avec Mesdocs Groupement d\'Employeurs, toutes les responsabilités liées à l\'emploi de l\'assistant médical sont portées par Mesdocs en tant qu\'employeur légal : rédaction et gestion du contrat de travail, établissement des fiches de paie mensuelles, déclarations auprès de l\'URSSAF, gestion des congés payés et des arrêts maladie, organisation de la formation CQP, et gestion des éventuelles ruptures de contrat. Le médecin adhère simplement à l\'association Mesdocs et bénéficie de l\'assistant dans son cabinet dans le cadre d\'une convention de mise à disposition. Il ne risque aucune procédure liée au droit du travail.' },
]);

export default function AvantagesPage() {
  return (
    <>
      <SchemaOrg schema={[avantagesFaq, avantagesBreadcrumb]} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_avantages.jpg"
          imageAlt="Avantages et démarches du dispositif assistant médical CPAM"
          title={<>Avantages & Financement<br />du Dispositif Assistant Médical</>}
          body="Aide CPAM de 19 000 à 38 000 €/an, démarches simplifiées, aucune obligation d'employeur : tout ce que vous devez savoir sur le dispositif assistant médical avec Mesdocs."
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
