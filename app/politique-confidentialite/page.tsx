import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Mesdocs Groupement d\'Employeurs',
  description: 'Politique de confidentialité et traitement des données personnelles de Mesdocs Groupement d\'Employeurs, conformément au RGPD.',
  alternates: { canonical: 'https://assistants-medicaux.com/politique-confidentialite' },
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <section className="py-16 px-6">
          <div className="max-w-[860px] mx-auto">

            <h1 className="text-[32px] font-bold text-gray-900 mb-2">Politique de Confidentialité</h1>
            <p className="text-[14px] text-gray-400 mb-10">Dernière mise à jour : mai 2026</p>

            <div className="prose prose-gray max-w-none text-[16px] leading-[1.8] flex flex-col gap-8">

              <section>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3">1. Responsable du traitement</h2>
                <p>Le responsable du traitement des données personnelles collectées sur ce site est :</p>
                <p className="mt-2">
                  <strong>Mesdocs Groupement d&apos;Employeurs</strong><br />
                  Association loi 1901<br />
                  Email : <a href="mailto:contact@ge-mesdocs.fr" className="text-[#1d67cd] underline">contact@ge-mesdocs.fr</a><br />
                  Téléphone : <a href="tel:0970682220" className="text-[#1d67cd] underline">09 70 68 22 20</a>
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3">2. Données collectées</h2>
                <p>Nous collectons les données suivantes via les formulaires du site :</p>
                <ul className="list-disc pl-6 mt-2 flex flex-col gap-1.5">
                  <li>Nom et prénom</li>
                  <li>Adresse email professionnelle</li>
                  <li>Numéro de téléphone</li>
                  <li>Spécialité médicale et secteur d&apos;exercice (secteur 1, 2 ou autre)</li>
                  <li>Message libre (si formulaire de contact)</li>
                </ul>
                <p className="mt-3">Ces données sont collectées exclusivement dans le cadre de votre demande de rendez-vous ou de contact avec nos équipes.</p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3">3. Finalités du traitement</h2>
                <p>Les données collectées sont utilisées pour :</p>
                <ul className="list-disc pl-6 mt-2 flex flex-col gap-1.5">
                  <li>Vous recontacter suite à votre demande de rendez-vous ou de renseignements</li>
                  <li>Vérifier votre éligibilité au dispositif assistant médical CPAM</li>
                  <li>Vous transmettre des informations relatives à nos services</li>
                  <li>Améliorer nos services et la qualité de nos réponses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3">4. Base légale</h2>
                <p>Le traitement de vos données est fondé sur votre consentement (article 6.1.a du RGPD), que vous exprimez en soumettant un formulaire sur notre site.</p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3">5. Durée de conservation</h2>
                <p>Vos données sont conservées pendant 3 ans à compter du dernier contact, puis supprimées ou anonymisées. Si une relation contractuelle est établie, les données sont conservées conformément aux obligations légales en vigueur (10 ans pour les documents comptables).</p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3">6. Destinataires des données</h2>
                <p>Vos données sont traitées par les équipes de Mesdocs Groupement d&apos;Employeurs. Elles ne sont pas revendues à des tiers. Elles peuvent être transmises à des sous-traitants techniques (hébergement, emailing) dans le strict cadre de la prestation, sous contrat de traitement conforme au RGPD.</p>
                <p className="mt-3">Nos outils actuels : <strong>Brevo</strong> (emailing), <strong>Netlify</strong> (hébergement).</p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3">7. Vos droits</h2>
                <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 mt-2 flex flex-col gap-1.5">
                  <li><strong>Droit d&apos;accès</strong> : obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
                  <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
                  <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
                  <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données à des fins de prospection</li>
                  <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                  <li><strong>Droit de retrait du consentement</strong> : retirer votre consentement à tout moment</li>
                </ul>
                <p className="mt-3">Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@ge-mesdocs.fr" className="text-[#1d67cd] underline">contact@ge-mesdocs.fr</a></p>
                <p className="mt-2">En cas de litige, vous pouvez saisir la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#1d67cd] underline">www.cnil.fr</a></p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3">8. Cookies</h2>
                <p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n&apos;est déposé sans votre consentement préalable.</p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3">9. Modification de la politique</h2>
                <p>Mesdocs se réserve le droit de mettre à jour cette politique de confidentialité. La date de dernière mise à jour figure en haut de cette page. Nous vous invitons à la consulter régulièrement.</p>
              </section>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
