import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import RecrutementContent from '@/components/sections/RecrutementContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { serviceSchema } from '@/components/seo/SchemaOrg';

const OG_IMAGE = { url: 'https://assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: 'Recruter un Assistant Médical – Mesdocs' };

export const metadata: Metadata = {
  title: 'Recruter un Assistant Médical – Mesdocs s\'occupe de tout',
  description: 'Confiez votre recrutement à Mesdocs : sélection des profils, contrat, formation CQP, gestion CPAM. Vous choisissez votre assistant, nous gérons tout le reste.',
  alternates: { canonical: 'https://assistants-medicaux.com/recrutement-assistant-medical' },
  openGraph: {
    title: 'Recruter un Assistant Médical – Mesdocs s\'occupe de tout',
    description: 'Sélection, contrat, formation, CPAM : Mesdocs gère votre recrutement de A à Z. Vous choisissez, on gère.',
    url: 'https://assistants-medicaux.com/recrutement-assistant-medical',
    type: 'website',
    images: [OG_IMAGE],
  },
};

const recrutementService = serviceSchema(
  'Recrutement d\'un assistant médical pour médecin libéral',
  'Mesdocs gère le recrutement de A à Z : analyse des besoins, sélection des candidats, contrat de travail, formation CQP et liaison CPAM. Délai moyen de 6 à 8 semaines.',
  'https://assistants-medicaux.com/recrutement-assistant-medical'
);

export default function RecrutementPage() {
  return (
    <>
      <SchemaOrg schema={recrutementService} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_home.jpg"
          imageAlt="Processus de recrutement d'un assistant médical avec Mesdocs"
          title={<>Recruter votre Assistant Médical<br />— Mesdocs s'occupe de tout</>}
          body="De la sélection du profil à la signature du contrat CPAM : Mesdocs gère l'intégralité du recrutement et de l'intégration de votre assistant médical. Vous choisissez, nous gérons."
          ctaPrimary={{ label: 'Démarrer mon recrutement', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir le financement', href: '/avantages-demarches' }}
        />
        <ResumeBanner>
          Mesdocs gère le recrutement de A à Z : analyse des besoins, sélection des candidats, présentation d'une shortlist, signature du contrat de travail, inscription à la formation CQP, et liaison avec la CPAM. Le médecin choisit son assistant parmi les profils sélectionnés. Le délai moyen entre le premier échange et la prise de poste est de 6 à 8 semaines.
        </ResumeBanner>
        <RecrutementContent />
        <CtaSection
          title={<>Prêt à recruter votre<br />assistant médical ?</>}
          buttonLabel="Démarrer en 20 minutes"
          buttonHref="/prendre-rendez-vous"
          subLink={{ label: 'Voir comment fonctionne la mise à disposition >', href: '/assistants-medicaux' }}
        />
      </main>
      <Footer />
    </>
  );
}
