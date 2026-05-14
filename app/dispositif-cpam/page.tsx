import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import DispositifCpamContent from '@/components/sections/DispositifCpamContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema } from '@/components/seo/SchemaOrg';

const OG_IMAGE = { url: 'https://www.assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: 'Dispositif Assistant Médical CPAM – Mesdocs' };

export const metadata: Metadata = {
  title: 'Dispositif Assistant Médical CPAM – Conditions & Montants',
  description: 'Tout sur le dispositif officiel assistant médical CPAM : éligibilité, montants de l\'aide (19 000 à 38 000 €/an), durée du contrat et démarches. Expliqué simplement par Mesdocs.',
  alternates: { canonical: 'https://www.assistants-medicaux.com/dispositif-cpam' },
  openGraph: {
    title: 'Dispositif Assistant Médical CPAM – Conditions & Montants | Mesdocs',
    description: 'Éligibilité, montants, durée du contrat CPAM pour l\'assistant médical. Tout comprendre en un seul endroit.',
    url: 'https://www.assistants-medicaux.com/dispositif-cpam',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const schemas = [
  faqSchema([
    { q: 'Tous les médecins libéraux peuvent-ils bénéficier du dispositif ?', a: 'Non, certaines spécialités techniques sont exclues (radiologues, anesthésistes, anatomo-pathologistes, médecins nucléaires, stomatologues, radiothérapeutes). Les médecins en secteur 1 et 2 OPTAM sont éligibles. Le secteur 3 (non conventionné) n\'est pas éligible.' },
    { q: 'L\'aide CPAM est-elle versée directement au médecin ou à Mesdocs ?', a: 'L\'aide est versée directement au médecin signataire du contrat CPAM. Le médecin reverse ensuite la contribution à Mesdocs dans le cadre de la convention de mise à disposition.' },
    { q: 'Le médecin doit-il s\'engager sur un objectif de patientèle ?', a: 'Oui. En contrepartie de l\'aide CPAM, le médecin s\'engage à accueillir de nouveaux patients grâce au temps libéré par l\'assistant médical. L\'objectif est fixé proportionnellement à la taille de sa patientèle actuelle.' },
    { q: 'Peut-on bénéficier du dispositif avec un assistant médical à mi-temps ?', a: 'Oui. Le dispositif prévoit une option "mi-temps" (0,5 ETP) avec une aide d\'environ 19 000 €/an, et une option "temps plein" (1 ETP) à 38 000 €/an. Des options 1,5 et 2 ETP sont également possibles sous conditions.' },
    { q: 'Que se passe-t-il si l\'objectif de patientèle n\'est pas atteint ?', a: 'Des discussions sont engagées avec la CPAM lors des évaluations annuelles. L\'aide peut être modulée en fonction des résultats. Mesdocs accompagne les médecins dans le suivi pour optimiser les chances de renouvellement.' },
    { q: 'Le dispositif est-il cumulable avec d\'autres aides ?', a: 'L\'aide CPAM n\'est pas cumulable avec certaines autres aides spécifiques à l\'exercice médical. Mesdocs aide à identifier les aides compatibles lors du bilan initial.' },
  ]),
  serviceSchema(
    'Dispositif Assistant Médical CPAM',
    'Accompagnement des médecins libéraux dans le dispositif officiel CPAM de financement d\'un assistant médical (19 000 à 38 000 €/an). Mesdocs gère les démarches CPAM, le contrat et la mise à disposition.',
    'https://www.assistants-medicaux.com/dispositif-cpam'
  ),
];

export default function DispositifCpamPage() {
  return (
    <>
      <SchemaOrg schema={schemas} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_avantages.jpg"
          imageAlt="Médecin consultant les informations sur le dispositif assistant médical CPAM"
          title={<>Le Dispositif Assistant Médical CPAM<br />— Tout Comprendre</>}
          body="Conditions d'éligibilité, montants de l'aide, durée du contrat, démarches : tout ce que vous devez savoir sur le financement CPAM du dispositif assistant médical, expliqué simplement."
          ctaPrimary={{ label: 'Vérifier mon éligibilité', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir les démarches', href: '/avantages-demarches' }}
        />
        <ResumeBanner>
          Le dispositif assistant médical CPAM permet aux médecins libéraux conventionnés (secteur 1 et secteur 2 OPTAM) de recevoir une aide financière allant de 19 000 jusqu'à 38 000 €/an pour employer un assistant médical. Les médecins en secteur 3 (non conventionnés) ne sont pas éligibles. Instauré par la Convention Médicale 2024–2029, ce contrat de 5 ans est renouvelable. Mesdocs Groupement d'Employeurs accompagne les médecins dans toutes les démarches CPAM, sans que le médecin ait à gérer les obligations d'employeur.
        </ResumeBanner>
        <DispositifCpamContent />
        <CtaSection
          title={<>Vérifiez votre éligibilité<br />et démarrez en 6 semaines</>}
          buttonLabel="Prendre rendez-vous gratuit"
          buttonHref="/prendre-rendez-vous"
          subLink={{ label: 'Voir le processus de recrutement >', href: '/recrutement-assistant-medical' }}
        />
      </main>
      <Footer />
    </>
  );
}
