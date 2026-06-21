import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import CoutReelContent from '@/components/sections/CoutReelContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';
import SchemaOrg, { faqSchema, serviceSchema, breadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: "Coût Réel d'un Assistant Médical Après Aide CPAM — Reste à Charge",
  description: "Combien coûte vraiment un assistant médical ? Formule simple : salaire brut × 1,6 = tout compris. Tableau du reste à charge année par année après aide CPAM.",
  alternates: { canonical: 'https://assistants-medicaux.com/cout-assistant-medical-aide-cpam' },
  openGraph: {
    title: "Coût Réel d'un Assistant Médical Après Aide CPAM | Mesdocs",
    description: "Salaire brut × 1,6 = coût tout compris. En 1re année, l'aide CPAM couvre l'intégralité — reste à charge nul. Tableau chiffré année par année.",
    url: 'https://assistants-medicaux.com/cout-assistant-medical-aide-cpam',
    type: 'website',
  },
};

const pageBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: "Coût réel assistant médical après aide CPAM", item: 'https://assistants-medicaux.com/cout-assistant-medical-aide-cpam' },
]);

const schemas = [
  faqSchema([
    { q: "Que couvre exactement le coefficient 1,6 ?", a: "Le coefficient 1,6 appliqué au salaire brut couvre l'intégralité du coût pour le médecin : salaire brut de l'assistant, charges patronales (URSSAF, retraite, prévoyance, mutuelle), frais de gestion Mesdocs (recrutement, établissement des fiches de paie, suivi RH, gestion des congés et remplacements). Aucun frais supplémentaire n'est facturé." },
    { q: "L'aide CPAM couvre-t-elle vraiment tout en 1re année ?", a: "Oui. L'aide CPAM en 1re année est de 38 000 €/an pour 1 ETP, soit 3 167 €/mois. Le coût tout compris avec le coefficient 1,6 est de 2 627 €/mois. Le médecin perçoit donc un surplus d'environ 540 €/mois la première année." },
    { q: "Que se passe-t-il à partir de la 3e année ?", a: "L'aide CPAM passe à 22 000 €/an (1 833 €/mois pour 1 ETP). Le reste à charge est alors d'environ 794 €/mois pour 1 ETP, à mettre en regard du temps libéré et des consultations supplémentaires rendues possibles." },
    { q: "Le calcul est-il différent pour un médecin en MSP ?", a: "Non, le coefficient 1,6 s'applique de la même façon. En MSP, chaque médecin paie 1 314 €/mois pour 0,5 ETP tout compris et perçoit sa propre aide CPAM de 1 583 €/mois la 1re année." },
  ]),
  serviceSchema(
    "Calcul du coût réel d'un assistant médical — Mesdocs",
    "Mesdocs calcule le coût net de l'assistant médical avec un coefficient 1,6 appliqué au salaire brut CQP. Tout est inclus : charges, paie, frais de gestion. Reste à charge nul en 1re année grâce à l'aide CPAM.",
    'https://assistants-medicaux.com/cout-assistant-medical-aide-cpam'
  ),
  pageBreadcrumb,
];

export default function CoutReelPage() {
  return (
    <>
      <SchemaOrg schema={schemas} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_home.jpg"
          imageAlt="Médecin libéral calculant le coût réel d'un assistant médical après aide CPAM"
          title={<>Combien Coûte Vraiment<br />un Assistant Médical ?</>}
          body="Une formule simple : salaire brut × 1,6 = coût tout compris. En 1re année, l'aide CPAM couvre l'intégralité — le reste à charge est nul."
          ctaPrimary={{ label: 'Calculer mon reste à charge', href: '/prendre-rendez-vous' }}
          ctaLight={{ label: 'Voir le dispositif CPAM', href: '/dispositif-cpam' }}
        />
        <ResumeBanner>
          Le coût d&apos;un assistant médical avec Mesdocs se calcule en une ligne : salaire brut CQP (1 642 €/mois pour 1 ETP) multiplié par le coefficient 1,6 = 2 627 €/mois tout compris — charges patronales, frais de gestion, paie, congés et remplacements inclus. En 1re année, l&apos;aide CPAM de 38 000 €/an (3 167 €/mois) dépasse ce coût : le reste à charge est nul. À partir de la 3e année, il est d&apos;environ 794 €/mois pour un temps plein.
        </ResumeBanner>
        <CoutReelContent />
        <CtaSection
          title={<>Connaissez votre reste à charge exact<br />en 20 minutes avec un conseiller</>}
          buttonLabel="Prendre rendez-vous gratuit"
          buttonHref="/prendre-rendez-vous"
          subLink={{ label: 'Comprendre le groupement d\'employeurs >', href: '/groupement-employeurs-medecin-liberal' }}
        />
      </main>
      <Footer />
    </>
  );
}
