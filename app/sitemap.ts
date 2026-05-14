import type { MetadataRoute } from 'next';

const BASE_URL = 'https://assistants-medicaux.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/assistants-medicaux`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/avantages-demarches`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/dispositif-cpam`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/recrutement-assistant-medical`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/devenir-assistant-medical`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/prendre-rendez-vous`, lastModified: now, changeFrequency: 'yearly', priority: 0.75 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ];
}
