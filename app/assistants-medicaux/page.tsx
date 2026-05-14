import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import AssistantsMedicauxContent from '@/components/sections/AssistantsMedicauxContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema } from '@/components/seo/SchemaOrg';

const OG_IMAGE = { url: 'https://assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: 'Mise à Disposition d\'un Assistant Médical – Mesdocs' };

export const metadata: Metadata = {
  title: 'Mise à Disposition d\'un Assistant Médical | Mesdocs GE',
  description: 'Mesdocs met à disposition un assistant médical formé pour votre cabinet : accueil, administratif, coordination soins. Vous n\'êtes pas l\'employeur. CPAM finance jusqu\'à 38 000 €/an.',
  alternates: { canonical: 'https://assistants-medicaux.com/assistants-medicaux' },
  openGraph: {
    title: 'Mise à Disposition d\'un Assistant Médical | Mesdocs GE',
    description: 'Mesdocs recrute et met à disposition votre assistant médical. Aucune obligation d\'employeur pour le médecin. CPAM finance jusqu\'à 38 000 €/an.',
    url: 'https://assistants-medicaux.com/assistants-medicaux',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const schemas = [
  faqSchema([
    { q: 'Quelle est la différence entre un assistant médical et une secrétaire médicale ?', a: 'L\'assistant médical peut effectuer des missions d\'appui à la consultation (prise de constantes, préparation de consultations, sous responsabilité du médecin) en plus des tâches administratives. Avec Mesdocs, le médecin n\'est pas l\'employeur : c\'est le groupement d\'employeurs qui assure toute la gestion RH.' },
    { q: 'Le médecin devient-il l\'employeur de l\'assistant médical ?', a: 'Non. Avec Mesdocs Groupement d\'Employeurs, c\'est Mesdocs qui est l\'employeur juridique. Le médecin est adhérent de l\'association : il bénéficie de l\'assistant sans aucune obligation d\'employeur (paie, contrat, URSSAF, licenciement).' },
    { q: 'Puis-je définir moi-même les missions de l\'assistant médical ?', a: 'Oui. Les missions sont définies avec vous lors du premier rendez-vous, en fonction de l\'organisation de votre cabinet, de vos pratiques et des besoins de vos patients. Chaque assistant médical est mis à disposition avec un profil de poste personnalisé.' },
    { q: 'Quelles sont les conditions pour bénéficier de la mise à disposition ?', a: 'Vous devez exercer en médecine libérale (secteur 1 ou 2 OPTAM). Le secteur 3 (non conventionné) n\'est pas éligible. Certaines spécialités techniques sont exclues (radiologues, anesthésistes, anatomo-pathologistes). Mesdocs vérifie votre éligibilité gratuitement.' },
    { q: 'Que se passe-t-il si l\'assistant médical quitte le poste ?', a: 'Mesdocs engage des démarches pour trouver une solution de continuité. Vous n\'avez pas à gérer le départ ni à relancer le recrutement vous-même. Mesdocs assure le suivi RH dans le cadre de la convention de mise à disposition.' },
  ]),
  serviceSchema(
    'Mise à disposition d\'un assistant médical pour médecin libéral',
    'Mesdocs Groupement d\'Employeurs recrute, forme et met à disposition un assistant médical dans le cabinet du médecin. Le médecin n\'est pas l\'employeur. CPAM finance jusqu\'à 38 000 €/an.',
    'https://assistants-medicaux.com/assistants-medicaux'
  ),
];

export default function AssistantsMedicauxPage() {
  return (
    <>
      <SchemaOrg schema={schemas} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_home.jpg"
          imageAlt="Médecin libéral travaillant avec son assistant médical en cabinet"
          title={<>La Mise à Disposition d'un<br />Assistant Médical pour votre Cabinet</>}
          body="Mesdocs Groupement d'Employeurs est votre intermédiaire officiel : nous sommes l'employeur, vous bénéficiez du service. Aucune obligation d'employeur pour le médecin."
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
