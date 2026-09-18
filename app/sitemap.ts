import type { MetadataRoute } from 'next';

const BASE_URL = 'https://assistants-medicaux.com';

// Pages noindex volontairement exclues du sitemap (mentions-legales, politique-confidentialite) :
// un sitemap ne doit lister que des URLs indexables.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/assistants-medicaux`, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/avantages-demarches`, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/dispositif-cpam`, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/aide-collective-assistant-medical`, lastModified: '2026-07-31', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/recrutement-assistant-medical`, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/devenir-assistant-medical`, lastModified: '2026-09-18', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/groupement-employeurs-medecin-liberal`, lastModified: '2026-06-16', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/assistant-medical-vs-secretaire-medicale`, lastModified: '2026-06-16', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/assistant-medical-maison-de-sante`, lastModified: '2026-06-16', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/cout-assistant-medical-aide-cpam`, lastModified: '2026-06-21', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/assistant-medical-medecin-specialiste`, lastModified: '2026-06-21', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/contact`, lastModified: '2026-05-26', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/prendre-rendez-vous`, lastModified: '2026-05-14', changeFrequency: 'yearly', priority: 0.75 },
  ];
}
