interface SchemaOrgProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: "Mesdocs Groupement d'Employeurs",
  alternateName: ['Mesdocs GE', 'GE Mesdocs'],
  legalName: "Mesdocs Groupement d'Employeurs (Association loi 1901)",
  url: 'https://www.assistants-medicaux.com',
  logo: 'https://www.assistants-medicaux.com/assets/logo.png',
  telephone: '+33970682220',
  email: 'contact@ge-mesdocs.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '24 rue Octave Feuillet',
    addressLocality: 'Paris',
    postalCode: '75116',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '48.8636',
    longitude: '2.2769',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  description: "Mesdocs Groupement d'Employeurs recrute et met à disposition des assistants médicaux pour les médecins libéraux. L'Assurance Maladie (CPAM) finance jusqu'à 38 000 €/an.",
  areaServed: 'France',
  knowsAbout: ['Assistant médical', 'Médecine libérale', 'Groupement d\'employeurs', 'Dispositif CPAM', 'Formation CQP'],
  sameAs: [
    'https://www.ameli.fr/medecin/exercice-liberal/vie-cabinet/aides-financieres/aide-emploi-assistants-medicaux',
  ],
};

export function faqSchema(questions: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: "Mesdocs Groupement d'Employeurs",
      url: 'https://www.assistants-medicaux.com',
    },
    areaServed: 'France',
    serviceType: 'Mise à disposition d\'assistant médical',
  };
}
