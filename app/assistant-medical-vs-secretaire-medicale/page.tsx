import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import ComparaisonContent from '@/components/sections/ComparaisonContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema, breadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: 'Assistant Médical vs Secrétaire Médicale',
  description: 'Comparatif complet assistant médical vs secrétaire médicale : missions, formation, coût, aide CPAM. Tout pour choisir le bon profil pour votre cabinet.',
  alternates: { canonical: 'https://assistants-medicaux.com/assistant-medical-vs-secretaire-medicale' },
  openGraph: {
    title: 'Assistant Médical vs Secrétaire Médicale : Quelles Différences ? | Mesdocs',
    description: 'Tableau comparatif complet : missions, formation, coût, aide CPAM. Choisissez le bon profil pour votre cabinet médical.',
    url: 'https://assistants-medicaux.com/assistant-medical-vs-secretaire-medicale',
    type: 'website',
  },
};

const pageBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: 'Assistant médical vs secrétaire médicale', item: 'https://assistants-medicaux.com/assistant-medical-vs-secretaire-medicale' },
]);

const schemas = [
  serviceSchema(
    'Assistant Médical vs Secrétaire Médicale — Comparatif Mesdocs',
    "Mesdocs compare l'assistant médical et la secrétaire médicale : missions, formation, coût et aide CPAM. L'assistant médical bénéficie d'un financement CPAM jusqu'à 38 000 € la première année pour 1 ETP, sous conditions.",
    'https://assistants-medicaux.com/assistant-medical-vs-secretaire-medicale',
    '2026-06-16'
  ),
  faqSchema([
    { q: 'Peut-on avoir à la fois un assistant médical et une secrétaire médicale ?', a: "Oui. Ce sont deux rôles complémentaires. L'assistant médical libère le médecin des tâches cliniques répétitives, la secrétaire médicale gère le standard téléphonique et la facturation. Dans un cabinet à fort volume, les deux profils coexistent." },
    { q: 'La secrétaire médicale peut-elle réaliser des gestes cliniques ?', a: "Le secrétariat médical porte sur l’accueil et l’administratif. L’assistant médical peut aussi préparer la consultation et recueillir des constantes sous la responsabilité du médecin. Le CQP ne confère pas une qualification de professionnel de santé ni une autorisation générale de pratiquer des actes de soins." },
    { q: "L'aide CPAM s'applique-t-elle si j'emploie une secrétaire médicale ?", a: "Non. Le dispositif CPAM de financement est strictement réservé au poste d'assistant médical, tel que défini par la Convention Médicale 2024–2029. Une secrétaire médicale ne donne droit à aucune aide de l'Assurance Maladie." },
    { q: 'Quelle est la différence de salaire entre les deux profils ?', a: "La rémunération dépend de la qualification, de l’expérience, du temps de travail et de la convention collective applicable. Elle doit respecter les minima légaux et conventionnels. Le coût restant pour le cabinet tient aussi compte de l’aide CPAM réellement accordée et des frais de mise à disposition." },
  ]),
];

export default function ComparaisonPage() {
  return (
    <>
      <SchemaOrg schema={[...schemas, pageBreadcrumb]} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_avantages.jpg"
          imageAlt="Médecin choisissant entre assistant médical et secrétaire médicale pour son cabinet"
          title={<>Assistant Médical vs Secrétaire Médicale :<br />Quelles Différences ?</>}
          body="Missions, formation, coût, aide CPAM : tout pour choisir le bon profil pour votre cabinet médical. Tableau comparatif complet."
          ctaPrimary={{ label: 'Vérifier mon éligibilité CPAM', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir le dispositif CPAM', href: '/dispositif-cpam' }}
        />
        <ResumeBanner>
          L’assistant médical assure des tâches administratives et prépare la consultation sous la responsabilité du médecin, et bénéficie d&apos;une aide CPAM jusqu&apos;à 38 000 € la 1re année pour 1 ETP, sous conditions. La secrétaire médicale se concentre sur l&apos;administratif uniquement, sans aide de l&apos;Assurance Maladie. Pour un médecin libéral conventionné en secteur 1 ou 2 OPTAM, le coût restant dépend du salaire, du temps de travail, des frais de mise à disposition et de l’aide réellement accordée.
        </ResumeBanner>
        <ComparaisonContent />
        <CtaSection
          title={<>Vous voulez un assistant médical<br />financé par la CPAM ?</>}
          buttonLabel="Vérifier mon éligibilité gratuitement"
          buttonHref="/prendre-rendez-vous"
          subLink={{ label: 'Voir le dispositif CPAM en détail >', href: '/dispositif-cpam' }}
        />
      </main>
      <Footer />
    </>
  );
}
