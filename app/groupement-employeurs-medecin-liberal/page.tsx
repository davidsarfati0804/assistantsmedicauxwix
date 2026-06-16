import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import GeContent from '@/components/sections/GeContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema, breadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: "Groupement d'Employeurs pour Médecin Libéral — Comment ça Marche",
  description: "Qu'est-ce qu'un groupement d'employeurs pour médecin libéral ? Mesdocs est l'employeur de l'assistant médical à votre place. Zéro gestion RH, aide CPAM.",
  alternates: { canonical: 'https://assistants-medicaux.com/groupement-employeurs-medecin-liberal' },
  openGraph: {
    title: "Groupement d'Employeurs pour Médecin Libéral | Mesdocs",
    description: "Mesdocs est l'employeur de votre assistant médical. Zéro obligation RH pour le médecin, aide CPAM jusqu'à 38 000 €/an.",
    url: 'https://assistants-medicaux.com/groupement-employeurs-medecin-liberal',
    type: 'website',
  },
};

const pageBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: "Groupement d'employeurs médecin libéral", item: 'https://assistants-medicaux.com/groupement-employeurs-medecin-liberal' },
]);

const schemas = [
  faqSchema([
    { q: "Qu'est-ce qu'un groupement d'employeurs exactement ?", a: "Un groupement d'employeurs (GE) est une association loi 1901 qui embauche des salariés et les met à disposition de ses membres (les médecins adhérents). Le GE est l'employeur légal : il signe le contrat de travail, établit les fiches de paie, cotise aux organismes sociaux. Le médecin reçoit le salarié dans son cabinet sans assumer les obligations employeur." },
    { q: "Le médecin a-t-il un lien juridique avec l'assistant médical ?", a: "Oui, mais sous une forme allégée : une convention de mise à disposition est signée entre Mesdocs et le médecin. Elle précise les horaires, les missions et la durée. En revanche, le médecin n'est pas employeur — il ne peut pas licencier l'assistant, ne gère pas les congés payés et n'est pas responsable des cotisations sociales." },
    { q: "Le GE est-il reconnu par l'Assurance Maladie ?", a: "Oui. Le contrat CPAM est signé entre le médecin et sa caisse primaire d'assurance maladie. La mise à disposition via un GE est explicitement prévue par la Convention Médicale 2024–2029." },
    { q: "Que se passe-t-il si la CPAM refuse de signer le contrat ?", a: "Les refus sont rares pour les médecins éligibles (secteur 1 et secteur 2 OPTAM, hors spécialités techniques exclues). Mesdocs accompagne le médecin dans la préparation du dossier CPAM pour maximiser les chances d'acceptation. En cas de refus, Mesdocs analyse les motifs avec vous." },
    { q: "Mesdocs est-il le seul GE pour les médecins libéraux en France ?", a: "Mesdocs Groupement d'Employeurs est spécialisé dans la mise à disposition d'assistants médicaux pour les médecins libéraux, dans le cadre du dispositif CPAM. C'est notre cœur de métier exclusif." },
  ]),
  serviceSchema(
    "Groupement d'Employeurs pour Médecin Libéral — Mesdocs",
    "Mesdocs Groupement d'Employeurs est l'employeur légal de l'assistant médical à la place du médecin. Le médecin bénéficie du dispositif CPAM sans aucune obligation RH.",
    'https://assistants-medicaux.com/groupement-employeurs-medecin-liberal'
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
          title={<>Groupement d'Employeurs<br />pour Médecin Libéral</>}
          body="Mesdocs est l'employeur de votre assistant médical à votre place. Vous bénéficiez du dispositif CPAM sans gérer un seul bulletin de paie."
          ctaPrimary={{ label: 'Rejoindre Mesdocs', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir le dispositif CPAM', href: '/dispositif-cpam' }}
        />
        <ResumeBanner>
          Un groupement d'employeurs (GE) est une association loi 1901 qui embauche des salariés et les met à disposition de ses membres. Mesdocs Groupement d'Employeurs joue ce rôle pour les médecins libéraux : c'est Mesdocs qui signe le contrat de travail de l'assistant médical, établit les fiches de paie et gère les charges sociales. Le médecin reçoit l'aide CPAM directement et met à disposition l'assistant dans son cabinet sans être employeur.
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
