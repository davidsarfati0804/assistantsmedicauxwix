interface SchemaOrgProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://assistants-medicaux.com/#website',
  name: "Mesdocs Groupement d'Employeurs",
  url: 'https://assistants-medicaux.com/',
  inLanguage: 'fr-FR',
  publisher: { '@id': 'https://assistants-medicaux.com/#organization' },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'EmploymentAgency'],
  '@id': 'https://assistants-medicaux.com/#organization',
  name: "Mesdocs Groupement d'Employeurs",
  alternateName: ['Mesdocs GE', 'GE Mesdocs'],
  legalName: "MESDOCS GROUPEMENT D'EMPLOYEURS",
  url: 'https://assistants-medicaux.com/',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'SIREN',
    value: '942339052',
  },
  sameAs: ['https://annuaire-entreprises.data.gouv.fr/entreprise/mesdocs-groupement-d-employeurs-942339052'],
  mainEntityOfPage: { '@id': 'https://assistants-medicaux.com/#webpage' },
  logo: {
    '@type': 'ImageObject',
    url: 'https://assistants-medicaux.com/assets/logo.png',
    width: 1448,
    height: 1086,
  },
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
    latitude: 48.86483,
    longitude: 2.27703,
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  description: "GE Mesdocs est une association qui recrute et emploie des assistants médicaux pour leur mise à disposition auprès des médecins libéraux adhérents en France. Mesdocs assure la gestion employeur ; le médecin organise les missions dans son cabinet selon la convention de mise à disposition.",
  areaServed: 'France',
  knowsAbout: ['Assistant médical', 'Médecine libérale', 'Groupement d\'employeurs', 'Dispositif CPAM', 'Formation CQP'],
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

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, item }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item,
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string, dateModified?: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name,
        description,
        url,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://assistants-medicaux.com/#website' },
        mainEntity: { '@id': `${url}#service` },
        ...(dateModified ? { dateModified } : {}),
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name,
        description,
        url,
        provider: { '@id': 'https://assistants-medicaux.com/#organization' },
        areaServed: 'France',
        serviceType: "Accompagnement des médecins pour l'emploi d'un assistant médical",
      },
    ],
  };
}
