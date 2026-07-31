import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import AideCollectiveContent from '@/components/sections/AideCollectiveContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema, breadcrumbSchema } from '@/components/seo/SchemaOrg';

const OG_IMAGE = { url: 'https://assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: "Aide collective à l'emploi d'assistants médicaux pour un groupe de médecins – Mesdocs" };

export const metadata: Metadata = {
  title: "Aide Collective Assistant Médical — Groupe de Médecins (CPAM)",
  description: "En vigueur depuis février 2026 : l'aide collective CPAM permet à un groupe de généralistes (SCP, SCM, SISA) de mutualiser l'emploi d'assistants médicaux. 38 000 à 22 000 €/an par ETP, seuil de 775 patients (P30), contrat de 5 ans.",
  alternates: { canonical: 'https://assistants-medicaux.com/aide-collective-assistant-medical' },
  openGraph: {
    title: "Aide Collective Assistant Médical — Groupe de Médecins | Mesdocs",
    description: "En vigueur depuis février 2026 : mutualisez l'emploi d'un assistant médical entre médecins généralistes d'un même groupe. Conditions, montants et démarches du contrat collectif CPAM.",
    url: 'https://assistants-medicaux.com/aide-collective-assistant-medical',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const pageBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: 'Aide collective assistant médical', item: 'https://assistants-medicaux.com/aide-collective-assistant-medical' },
]);

const schemas = [
  faqSchema([
    { q: "Depuis quand l'aide collective est-elle en vigueur ?", a: "Le dispositif est entré en vigueur le 25 février 2026, après validation par la commission paritaire nationale (CPN). C'est une aide financière pérenne." },
    { q: "Qu'est-ce que l'aide collective à l'emploi d'assistants médicaux ?", a: "Elle permet à un groupe de médecins généralistes (cabinet de groupe ou MSP) de mutualiser, au sein d'un seul contrat signé par leur société (SCP, SCM ou SISA), l'emploi d'assistants médicaux, les objectifs de patientèle et l'aide de l'Assurance Maladie." },
    { q: 'Qui peut signer un contrat collectif ?', a: "Seules 3 formes juridiques sont éligibles : SCP, SCM (cabinets de groupe) ou SISA (MSP). Une société d'exercice libéral (SEL) ne peut pas signer. Le représentant légal de la société signe le contrat, chaque médecin associé adhérant ensuite par bulletin individuel." },
    { q: 'Quel est le seuil de patientèle requis ?', a: "La patientèle médecin traitant moyenne du groupe doit être égale ou supérieure à 775 patients, soit le 30e percentile (P30) national au 31/12/2021." },
    { q: "Quels sont les montants de l'aide collective ?", a: "Par assistant médical en équivalent temps plein : 38 000 € la 1re année, 28 000 € la 2e année, puis 22 000 €/an à partir de la 3e année." },
    { q: 'Quels objectifs de patientèle le groupe doit-il atteindre ?', a: "Par ETP d'assistant médical financé, le groupe doit augmenter sa patientèle médecin traitant collective de 260 patients et sa patientèle file active collective de 110 patients, dans un délai de 2 ans." },
    { q: 'Quelle est la durée du contrat collectif ?', a: "5 ans, renouvelable, comme le dispositif individuel." },
    { q: "Peut-on employer les assistants médicaux via un groupement d'employeurs comme Mesdocs ?", a: "Oui, l'Assurance Maladie autorise explicitement le recours à un groupement d'employeurs prestataire, à condition que le contrat de travail relève de la convention collective des personnels des cabinets médicaux." },
  ]),
  serviceSchema(
    'Aide collective CPAM assistant médical — Groupe de médecins',
    "Mesdocs accompagne les groupes de médecins (SCP, SCM, SISA) dans la mise en place du contrat collectif CPAM d'aide à l'emploi d'assistants médicaux mutualisés.",
    'https://assistants-medicaux.com/aide-collective-assistant-medical'
  ),
];

export default function AideCollectivePage() {
  return (
    <>
      <SchemaOrg schema={[...schemas, pageBreadcrumb]} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_avantages_alt.jpg"
          imageAlt="Groupe de médecins mutualisant l'emploi d'un assistant médical grâce à l'aide collective CPAM"
          title={<>L'Aide Collective CPAM<br />pour un Groupe de Médecins</>}
          body="Cabinet de groupe ou MSP : mutualisez l'emploi d'un ou plusieurs assistants médicaux au sein d'un contrat collectif unique. Conditions, montants et démarches expliqués simplement."
          ctaPrimary={{ label: 'Étudier mon groupe', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir le dispositif individuel', href: '/dispositif-cpam' }}
        />
        <ResumeBanner>
          L'aide collective à l'emploi d'assistants médicaux est entrée en vigueur le 25 février 2026. Elle permet à un groupe de médecins généralistes conventionnés (secteur 1 ou secteur 2 OPTAM), associés en SCP, SCM ou SISA, de signer un contrat collectif unique avec leur CPAM plutôt que des contrats individuels. Condition clé : une patientèle médecin traitant moyenne du groupe d'au moins 775 patients (30e percentile national). L'aide, pérenne, est de 38 000 € la 1re année, 28 000 € la 2e, puis 22 000 €/an par assistant médical en ETP, en contrepartie d'une progression collective de patientèle à atteindre en 2 ans. L'Assurance Maladie autorise explicitement le recours à un groupement d'employeurs prestataire : Mesdocs reste l'employeur légal des assistants médicaux mutualisés et gère l'ensemble des démarches.
        </ResumeBanner>
        <AideCollectiveContent />
        <CtaSection
          title={<>Votre groupe est-il éligible<br />à l'aide collective ?</>}
          buttonLabel="Prendre rendez-vous gratuit"
          buttonHref="/prendre-rendez-vous"
          subLink={{ label: 'Voir le dispositif CPAM individuel >', href: '/dispositif-cpam' }}
        />
      </main>
      <Footer />
    </>
  );
}
