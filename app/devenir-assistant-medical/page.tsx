import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import DevenirContent from '@/components/sections/DevenirContent';
import CtaSection from '@/components/sections/CtaSection';
import SchemaOrg, { breadcrumbSchema, faqSchema } from '@/components/seo/SchemaOrg';

export const metadata: Metadata = {
  title: 'Devenir Assistant Médical | Mesdocs GE',
  description: 'Vous souhaitez devenir assistant médical ? Découvrez le métier, les formations CQP, VAE et FAE, et postulez directement auprès de Mesdocs Groupement d\'Employeurs.',
  alternates: { canonical: 'https://assistants-medicaux.com/devenir-assistant-medical' },
  openGraph: {
    title: 'Devenir Assistant Médical – Postuler chez Mesdocs GE',
    description: 'CQP, VAE, FAE, candidature : Mesdocs accompagne les candidats assistants médicaux dans leur parcours.',
    url: 'https://assistants-medicaux.com/devenir-assistant-medical',
    type: 'website',
  },
};

const devenirBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: 'Devenir Assistant Médical', item: 'https://assistants-medicaux.com/devenir-assistant-medical' },
]);

const devenirFaq = faqSchema([
  { q: 'Quelles sont les conditions pour devenir assistant médical ?', a: 'Pour devenir assistant médical, il faut être titulaire du baccalauréat ou justifier d\'une expérience d\'au moins un an dans le secteur du secrétariat médical ou des soins. Les profils infirmiers, aides-soignants et assistants de soins peuvent accéder à une formation accélérée de 112 heures (FAE) au lieu du CQP complet. Mesdocs vérifie l\'éligibilité de chaque candidat gratuitement lors d\'un premier entretien.' },
  { q: 'Qu\'est-ce que le CQP assistant médical et combien de temps dure la formation ?', a: 'Le CQP (Certificat de Qualification Professionnelle) assistant médical est une certification reconnue au niveau 4 du RNCP. La formation se déroule en 279 heures en alternance sur une période de 6 à 12 mois. Elle couvre les missions administratives, l\'appui à la consultation et la coordination des soins. La formation est financée par l\'OPCO EP, sans coût pour le candidat ni pour le médecin. L\'assistant a 2 ans après la prise de poste pour s\'inscrire et 3 ans pour obtenir son CQP.' },
  { q: 'Puis-je devenir assistant médical par la VAE si j\'ai déjà de l\'expérience ?', a: 'Oui. La VAE (Validation des Acquis de l\'Expérience) permet d\'obtenir le CQP assistant médical sans suivre la formation complète de 279 heures, à condition de justifier d\'une expérience professionnelle significative dans le secteur médical ou administratif. Mesdocs accompagne les candidats VAE en partenariat avec VAE Formation, organisme spécialisé. Le parcours VAE dure en moyenne 12 mois et comprend la constitution du dossier et un entretien devant jury.' },
  { q: 'Quel est le salaire d\'un assistant médical ?', a: 'Le salaire d\'un assistant médical dépend de la convention collective applicable (selon la structure employeuse). À titre indicatif, un assistant médical débutant perçoit environ 1 642 € brut par mois pour un temps plein. Ce salaire peut évoluer avec l\'expérience et l\'obtention du CQP. Dans le cadre du dispositif CPAM, la subvention versée au médecin (jusqu\'à 38 000 €/an pour 1 ETP) couvre en grande partie ce coût salarial.' },
  { q: 'Comment postuler pour devenir assistant médical avec Mesdocs ?', a: 'Pour postuler, il suffit de remplir le formulaire de contact sur le site ou d\'appeler directement l\'équipe Mesdocs au 09 70 68 22 20. Mesdocs reçoit votre candidature, évalue votre profil et votre éligibilité, puis vous met en relation avec des médecins libéraux de votre zone géographique qui recherchent un assistant. Si votre profil correspond, Mesdocs organise les entretiens et prend en charge l\'ensemble du parcours d\'intégration, y compris la formation CQP.' },
]);

export default function DevenirPage() {
  return (
    <>
      <SchemaOrg schema={[devenirFaq, devenirBreadcrumb]} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_devenir.jpg"
          imageAlt="Devenir Assistant Médical"
          title={<>Vous souhaitez devenir<br />Assistant.e Médical ?</>}
          body="Découvrez en quoi consiste le rôle d'Assistant Médical, comment vous pouvez soutenir les professionnels de la santé et apprenez quelles sont les exigences et les conditions nécessaires pour le devenir, y compris les qualifications, les compétences et les attentes."
          ctaPrimary={{ label: 'En savoir plus', href: '#qui' }}
          ctaLight={{ label: 'Nous contacter', href: '#contact' }}
        />
        <DevenirContent />
        <CtaSection
          title={<>Vous êtes intéressé.e<br />et souhaitez devenir assistant.e médical ?</>}
          buttonLabel="Nous Contacter"
          buttonHref="#contact"
        />
      </main>
      <Footer />
    </>
  );
}
