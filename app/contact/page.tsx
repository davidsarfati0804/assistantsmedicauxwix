import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import ContactForm from '@/components/sections/ContactForm';
import Link from 'next/link';
import SchemaOrg, { breadcrumbSchema } from '@/components/seo/SchemaOrg';

const contactBreadcrumb = breadcrumbSchema([
  { name: 'Accueil', item: 'https://assistants-medicaux.com/' },
  { name: 'Contact', item: 'https://assistants-medicaux.com/contact' },
]);

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: "Contacter Mesdocs Groupement d'Employeurs",
  url: 'https://assistants-medicaux.com/contact',
  description: "Contactez l'équipe Mesdocs par formulaire, téléphone ou email. Réponse sous 24h ouvrées.",
  mainEntity: {
    '@type': 'Organization',
    name: "Mesdocs Groupement d'Employeurs",
    telephone: '+33970682220',
    email: 'contact@ge-mesdocs.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '24 rue Octave Feuillet',
      addressLocality: 'Paris',
      postalCode: '75116',
      addressCountry: 'FR',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
  },
};

export const metadata: Metadata = {
  title: 'Contactez Mesdocs – Assistants Médicaux | Réponse 24h',
  description: 'Contactez l\'équipe Mesdocs par formulaire, téléphone ou email. Médecin ou candidat, notre équipe vous répond sous 24h ouvrées. Paris 75116.',
  alternates: { canonical: 'https://assistants-medicaux.com/contact' },
  openGraph: {
    title: 'Contactez Mesdocs – Assistants Médicaux | Réponse 24h',
    description: 'Formulaire, téléphone ou email : l\'équipe Mesdocs répond sous 24h ouvrées.',
    url: 'https://assistants-medicaux.com/contact',
    type: 'website',
    images: [{ url: 'https://assistants-medicaux.com/opengraph-image', width: 1200, height: 630, alt: 'Contactez Mesdocs' }],
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={[contactPageSchema, contactBreadcrumb]} />
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_avantages.jpg"
          imageAlt="Contact Mesdocs Groupement d'Employeurs"
          title="Contactez l'équipe Mesdocs"
          body="Une question sur le dispositif assistant médical ? Vous souhaitez démarrer votre projet ? Utilisez le formulaire ci-dessous ou contactez-nous directement. Réponse garantie sous 24h ouvrées."
          ctaPrimary={{ label: 'Prendre rendez-vous', href: '/prendre-rendez-vous' }}
        />
        <section className="py-16 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-[1fr_1.2fr] gap-12 items-start max-md:grid-cols-1">

              {/* Infos contact */}
              <div>
                <h2 className="text-[22px] font-semibold text-gray-900 mb-6">Nos coordonnées</h2>
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-[13px] uppercase tracking-wider text-gray-400 mb-1">Téléphone</p>
                    <a href="tel:0970682220" className="text-[17px] font-semibold text-[#093e98] hover:underline">09 70 68 22 20</a>
                  </div>
                  <div>
                    <p className="text-[13px] uppercase tracking-wider text-gray-400 mb-1">Email</p>
                    <a href="mailto:contact@ge-mesdocs.fr" className="text-[16px] text-[#093e98] hover:underline">contact@ge-mesdocs.fr</a>
                  </div>
                  <div>
                    <p className="text-[13px] uppercase tracking-wider text-gray-400 mb-1">Adresse</p>
                    <p className="text-[15px] text-gray-700 leading-[1.6]">24 rue Octave Feuillet<br />75116 Paris</p>
                  </div>
                  <div>
                    <p className="text-[13px] uppercase tracking-wider text-gray-400 mb-1">Horaires</p>
                    <p className="text-[15px] text-gray-700">Lundi – Vendredi : 9h – 18h</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#e4eaf5]">
                  <p className="text-[14px] text-gray-500 mb-3">Préférez-vous prendre directement rendez-vous ?</p>
                  <Link
                    href="/prendre-rendez-vous"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-[#093e98] text-white text-[14px] font-semibold hover:opacity-90 transition-opacity"
                  >
                    Choisir un créneau →
                  </Link>
                </div>
              </div>

              {/* Formulaire */}
              <div className="bg-white rounded-2xl border border-[#e4eaf5] shadow-[0_4px_32px_rgba(9,62,152,.08)] px-9 py-10">
                <h2 className="text-[20px] font-bold text-gray-900 mb-1.5">Envoyez-nous un message</h2>
                <p className="text-[14px] text-gray-500 mb-7">Réponse garantie sous 24h ouvrées.</p>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
