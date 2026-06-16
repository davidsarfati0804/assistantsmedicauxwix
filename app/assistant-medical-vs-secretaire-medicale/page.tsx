import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import ComparaisonContent from '@/components/sections/ComparaisonContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema, breadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: 'Assistant Médical vs Secrétaire Médicale : Quelles Différences ?',
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
    "Mesdocs compare l'assistant médical et la secrétaire médicale : missions, formation, coût et aide CPAM. L'assistant médical bénéficie d'un financement CPAM jusqu'à 38 000 €/an.",
    'https://assistants-medicaux.com/assistant-medical-vs-secretaire-medicale'
  ),
  faqSchema([
    { q: 'Peut-on avoir à la fois un assistant médical et une secrétaire médicale ?', a: "Oui. Ce sont deux rôles complémentaires. L'assistant médical libère le médecin des tâches cliniques répétitives, la secrétaire médicale gère le standard téléphonique et la facturation. Dans un cabinet à fort volume, les deux profils coexistent." },
    { q: 'La secrétaire médicale peut-elle réaliser des gestes cliniques ?', a: "Non. La secrétaire médicale n'est pas habilitée à effectuer des gestes cliniques (prise de constantes, électrocardiogramme, pansements). Ces actes relèvent exclusivement de l'assistant médical titulaire du CQP ou d'une auxiliaire de santé qualifiée." },
    { q: "L'aide CPAM s'applique-t-elle si j'emploie une secrétaire médicale ?", a: "Non. Le dispositif CPAM de financement est strictement réservé au poste d'assistant médical, tel que défini par la Convention Médicale 2024–2029. Une secrétaire médicale ne donne droit à aucune aide de l'Assurance Maladie." },
    { q: 'Quelle est la différence de salaire entre les deux profils ?', a: "Un assistant médical à temps plein perçoit environ 1 642 € brut/mois (niveau CQP). Une secrétaire médicale expérimentée perçoit entre 1 500 et 1 900 € brut/mois. La différence de coût pour le médecin est significative après déduction de l'aide CPAM pour l'assistant médical." },
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
          L'assistant médical peut réaliser des gestes cliniques (constantes, ECG, pansements) ET des tâches administratives, et bénéficie d'une aide CPAM jusqu'à 38 000 €/an la 1re année. La secrétaire médicale se concentre sur l'administratif uniquement, sans aide de l'Assurance Maladie. Pour un médecin libéral conventionné en secteur 1 ou 2 OPTAM, l'assistant médical est donc moins coûteux la 1re année tout en offrant un périmètre de missions plus large.
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
