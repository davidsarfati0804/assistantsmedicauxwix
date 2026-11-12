import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import GeContent from '@/components/sections/GeContent';
import { geQuestions } from '@/lib/ge-faq';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema, breadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: "Groupement d'Employeurs pour Médecin Libéral",
  description: "Mesdocs emploie votre assistant médical. Comprenez le rôle du groupement, les responsabilités du médecin et la convention de mise à disposition.",
  alternates: { canonical: 'https://assistants-medicaux.com/groupement-employeurs-medecin-liberal' },
  openGraph: {
    title: "Groupement d'Employeurs pour Médecin Libéral | Mesdocs",
    description: "Mesdocs est l'employeur de votre assistant médical. Découvrez le fonctionnement du groupement et les engagements de chacun.",
    url: 'https://assistants-medicaux.com/groupement-employeurs-medecin-liberal',
    type: 'website',
  },
};

const pageBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: "Groupement d'employeurs médecin libéral", item: 'https://assistants-medicaux.com/groupement-employeurs-medecin-liberal' },
]);

const schemas = [
  faqSchema(geQuestions),
  serviceSchema(
    "Groupement d'Employeurs pour Médecin Libéral — Mesdocs",
    "Mesdocs Groupement d'Employeurs est l'employeur légal de l'assistant médical à la place du médecin. Le médecin bénéficie du dispositif CPAM avec une gestion RH assurée par Mesdocs.",
    'https://assistants-medicaux.com/groupement-employeurs-medecin-liberal',
    '2026-11-12'
  ),
];

export default function GePage() {
  return (
    <>
      <SchemaOrg schema={[...schemas, pageBreadcrumb]} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_doctor.jpg"
          imageAlt="Médecin libéral comprenant le fonctionnement du groupement d'employeurs Mesdocs"
          title={<>Groupement d&apos;Employeurs<br />pour Médecin Libéral</>}
          body="Mesdocs est l'employeur de votre assistant médical à votre place. Vous bénéficiez du dispositif CPAM sans gérer un seul bulletin de paie."
          ctaPrimary={{ label: 'Rejoindre Mesdocs', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir le dispositif CPAM', href: '/dispositif-cpam' }}
        />
        <ResumeBanner>
          Un groupement d&apos;employeurs (GE) est une association loi 1901 qui embauche des salariés et les met à disposition de ses membres. Mesdocs Groupement d&apos;Employeurs joue ce rôle pour les médecins libéraux : c&apos;est Mesdocs qui signe le contrat de travail de l&apos;assistant médical, établit les fiches de paie et gère les charges sociales. Le médecin reçoit l&apos;aide CPAM directement et met à disposition l&apos;assistant dans son cabinet sans être employeur.
        </ResumeBanner>
        <GeContent />
        <CtaSection
          title={<>Bénéficiez du dispositif CPAM<br />sans devenir employeur</>}
          buttonLabel="Vérifier mon éligibilité"
          buttonHref="/prendre-rendez-vous"
          subLink={{ label: 'Voir le recrutement étape par étape >', href: '/recrutement-assistant-medical' }}
        />
      </main>
      <Footer />
    </>
  );
}
