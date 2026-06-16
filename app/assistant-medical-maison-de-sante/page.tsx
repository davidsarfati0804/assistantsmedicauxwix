import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import MspContent from '@/components/sections/MspContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema, breadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: 'Assistant Médical en Maison de Santé — Partage entre Médecins',
  description: 'Comment partager un assistant médical entre plusieurs médecins en MSP ou cabinet de groupe ? Chaque médecin perçoit son aide CPAM. Mesdocs organise tout.',
  alternates: { canonical: 'https://assistants-medicaux.com/assistant-medical-maison-de-sante' },
  openGraph: {
    title: 'Partager un Assistant Médical en Maison de Santé | Mesdocs',
    description: 'Aide CPAM individuelle pour chaque médecin, un seul assistant partagé. Mesdocs organise la configuration MSP de A à Z.',
    url: 'https://assistants-medicaux.com/assistant-medical-maison-de-sante',
    type: 'website',
  },
};

const pageBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: 'Assistant médical en maison de santé', item: 'https://assistants-medicaux.com/assistant-medical-maison-de-sante' },
]);

const schemas = [
  faqSchema([
    { q: 'Chaque médecin de la MSP reçoit-il une aide CPAM distincte ?', a: "Oui. Chaque médecin éligible signe un contrat CPAM individuel et perçoit l'aide correspondant à son temps d'utilisation de l'assistant. Si deux médecins partagent à parts égales, chacun signe pour 0,5 ETP et perçoit ~19 000 €/an en 1re année." },
    { q: "L'assistant médical doit-il avoir une formation spécifique pour travailler en MSP ?", a: "Le CQP assistant médical couvre les compétences de base communes à toutes les spécialités (accueil patient, constantes, gestion des dossiers). Des formations complémentaires peuvent être organisées selon les spécialités présentes dans la MSP." },
    { q: 'Que se passe-t-il si un médecin quitte la MSP ?', a: "Le contrat CPAM du médecin partant est clôturé. Les autres médecins continuent à bénéficier du dispositif. Mesdocs peut réorganiser le planning de l'assistant pour les praticiens restants." },
    { q: 'Un médecin remplaçant peut-il bénéficier du dispositif ?', a: "Non. Le dispositif CPAM est réservé aux médecins installés (titulaires). Un remplaçant ne peut pas signer de contrat CPAM pour un assistant médical, mais il peut utiliser celui du médecin titulaire pendant ses remplacements." },
  ]),
  serviceSchema(
    'Assistant Médical Partagé en Maison de Santé Pluriprofessionnelle',
    "Mesdocs organise la mise à disposition d'un assistant médical partagé entre plusieurs médecins en MSP ou cabinet de groupe, avec aide CPAM individuelle pour chaque praticien.",
    'https://assistants-medicaux.com/assistant-medical-maison-de-sante'
  ),
];

export default function MspPage() {
  return (
    <>
      <SchemaOrg schema={[...schemas, pageBreadcrumb]} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_avantages.jpg"
          imageAlt="Médecins en maison de santé pluriprofessionnelle partageant un assistant médical"
          title={<>Partager un Assistant Médical<br />en Maison de Santé</>}
          body="Chaque médecin perçoit sa propre aide CPAM. Un seul assistant pour toute l'équipe. Mesdocs organise le recrutement, le planning et la gestion RH."
          ctaPrimary={{ label: 'Étudier mon projet MSP', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir le financement CPAM', href: '/dispositif-cpam' }}
        />
        <ResumeBanner>
          En maison de santé pluriprofessionnelle (MSP) ou cabinet de groupe, plusieurs médecins peuvent partager un même assistant médical via Mesdocs Groupement d'Employeurs. Chaque médecin éligible signe son propre contrat CPAM et perçoit son aide individuellement (jusqu'à 19 000 €/an pour 0,5 ETP la 1re année). Mesdocs est l'employeur unique, organise les plannings et gère l'ensemble des obligations RH.
        </ResumeBanner>
        <MspContent />
        <CtaSection
          title={<>Vous êtes en MSP ou cabinet de groupe ?<br />Étudions votre configuration ensemble.</>}
          buttonLabel="Prendre rendez-vous gratuit"
          buttonHref="/prendre-rendez-vous"
          subLink={{ label: "Comprendre le groupement d'employeurs >", href: '/groupement-employeurs-medecin-liberal' }}
        />
      </main>
      <Footer />
    </>
  );
}
