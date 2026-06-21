import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import SpecialisteContent from '@/components/sections/SpecialisteContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema, breadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: "Assistant Médical pour Médecin Spécialiste — Éligibilité CPAM",
  description: "Pédiatre, gynécologue, cardiologue, dermatologue… Vérifiez si votre spécialité est éligible à l'aide CPAM pour un assistant médical. Liste complète et conditions.",
  alternates: { canonical: 'https://assistants-medicaux.com/assistant-medical-medecin-specialiste' },
  openGraph: {
    title: "Assistant Médical pour Médecin Spécialiste | Mesdocs",
    description: "La plupart des spécialistes cliniques sont éligibles à l'aide CPAM jusqu'à 38 000 €/an. Liste des spécialités éligibles et exclues. Conditions et démarches.",
    url: 'https://assistants-medicaux.com/assistant-medical-medecin-specialiste',
    type: 'website',
  },
};

const pageBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: 'Assistant médical médecin spécialiste', item: 'https://assistants-medicaux.com/assistant-medical-medecin-specialiste' },
]);

const schemas = [
  faqSchema([
    { q: "Tous les médecins spécialistes sont-ils éligibles au dispositif assistant médical ?", a: "Non. Les spécialités techniques sont exclues : radiologues, anesthésistes, anatomo-pathologistes, médecins nucléaires, stomatologues et radiothérapeutes. Les spécialistes cliniques (pédiatres, gynécologues, cardiologues, dermatologues, ORL, psychiatres…) sont éligibles s'ils exercent en secteur 1 ou secteur 2 OPTAM." },
    { q: "Un spécialiste doit-il remplir une condition de file active ?", a: "Oui. Le médecin doit justifier d'une file active suffisante et s'engager à augmenter le nombre de patients grâce au temps libéré. La CPAM vérifie ces critères lors de la signature du contrat. Mesdocs aide à préparer ce dossier." },
    { q: "L'assistant médical d'un spécialiste a-t-il une formation spécifique ?", a: "La formation CQP (279 heures) couvre les compétences communes à toutes les spécialités. Mesdocs organise des formations complémentaires adaptées à votre spécialité lors de l'intégration." },
    { q: "Quelle est la différence entre secteur 1, secteur 2 OPTAM et secteur 3 pour ce dispositif ?", a: "Seuls les médecins en secteur 1 et secteur 2 OPTAM sont éligibles. Le secteur 2 classique (sans OPTAM) et le secteur 3 (non conventionnés) ne permettent pas de bénéficier de l'aide CPAM pour un assistant médical." },
    { q: "Un spécialiste peut-il partager un assistant médical avec un généraliste ?", a: "Oui, en MSP ou cabinet de groupe. Chaque médecin signe son propre contrat CPAM pour sa part d'ETP. L'assistant travaille alternativement avec chaque praticien selon le planning organisé par Mesdocs." },
  ]),
  serviceSchema(
    "Assistant médical pour médecin spécialiste — Mesdocs Groupement d'Employeurs",
    "Mesdocs vérifie l'éligibilité des médecins spécialistes au dispositif CPAM et organise le recrutement et la mise à disposition d'un assistant médical adapté à leur spécialité.",
    'https://assistants-medicaux.com/assistant-medical-medecin-specialiste'
  ),
  pageBreadcrumb,
];

export default function SpecialistePage() {
  return (
    <>
      <SchemaOrg schema={schemas} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_avantages.jpg"
          imageAlt="Médecin spécialiste vérifiant son éligibilité au dispositif assistant médical CPAM"
          title={<>Assistant Médical pour<br />Médecin Spécialiste</>}
          body="Pédiatre, gynécologue, cardiologue, dermatologue… La plupart des spécialistes cliniques sont éligibles à l'aide CPAM jusqu'à 38 000 €/an. Vérifiez votre situation."
          ctaPrimary={{ label: 'Vérifier mon éligibilité', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir le dispositif CPAM', href: '/dispositif-cpam' }}
        />
        <ResumeBanner>
          Le dispositif d&apos;assistant médical financé par la CPAM n&apos;est pas réservé aux généralistes. Les spécialistes cliniques — pédiatres, gynécologues, cardiologues, ORL, dermatologues, psychiatres et de nombreuses autres spécialités — peuvent en bénéficier, sous réserve d&apos;exercer en secteur 1 ou secteur 2 OPTAM. Seules les spécialités techniques (radiologie, anesthésie…) sont exclues. L&apos;aide CPAM est identique : jusqu&apos;à 38 000 €/an la 1re année.
        </ResumeBanner>
        <SpecialisteContent />
        <CtaSection
          title={<>Votre spécialité est éligible ?<br />Étudions votre projet ensemble.</>}
          buttonLabel="Prendre rendez-vous gratuit"
          buttonHref="/prendre-rendez-vous"
          subLink={{ label: 'Voir le coût réel après aide CPAM >', href: '/cout-assistant-medical-aide-cpam' }}
        />
      </main>
      <Footer />
    </>
  );
}
