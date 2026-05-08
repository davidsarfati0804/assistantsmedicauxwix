import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import DispositifCpamContent from '@/components/sections/DispositifCpamContent';
import CtaSection from '@/components/sections/CtaSection';
import ResumeBanner from '@/components/seo/ResumeBanner';

export const metadata: Metadata = {
  title: 'Dispositif Assistant Médical CPAM – Conditions & Montants',
  description: 'Tout sur le dispositif officiel assistant médical CPAM : éligibilité, montants de l\'aide (19 000 à 38 000 €/an), durée du contrat et démarches. Expliqué simplement par Mesdocs.',
  alternates: { canonical: 'https://www.assistants-medicaux.com/dispositif-cpam' },
  openGraph: {
    title: 'Dispositif Assistant Médical CPAM – Conditions & Montants | Mesdocs',
    description: 'Éligibilité, montants, durée du contrat CPAM pour l\'assistant médical. Tout comprendre en un seul endroit.',
    url: 'https://www.assistants-medicaux.com/dispositif-cpam',
    type: 'website',
  },
};

export default function DispositifCpamPage() {
  return (
    <>
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
