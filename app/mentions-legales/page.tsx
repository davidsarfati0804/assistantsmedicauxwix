import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site assistants-medicaux.com — Mesdocs Groupement d\'Employeurs, association loi 1901.',
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <section className="py-16 px-6">
          <div className="max-w-[820px] mx-auto">

            <h1 className="text-[36px] font-bold text-gray-900 mb-2">Mentions Légales</h1>
            <p className="text-[14px] text-gray-400 mb-12">Dernière mise à jour : 7 mai 2026</p>

            {/* Éditeur */}
            <div className="mb-10">
              <h2 className="text-[20px] font-semibold text-gray-900 mb-4 pb-2 border-b border-[#e4eaf5]">1. Éditeur du site</h2>
              <div className="text-[15px] text-gray-700 leading-[1.8] space-y-1">
                <p><strong>Raison sociale :</strong> Mesdocs Groupement d&apos;Employeurs</p>
                <p><strong>Forme juridique :</strong> Association loi du 1er juillet 1901 à but non lucratif</p>
                <p><strong>Siège social :</strong> 24 rue Octave Feuillet, 75116 Paris</p>
                <p><strong>Téléphone :</strong> <a href="tel:0970682220" className="text-[#1d67cd] hover:underline">09 70 68 22 20</a></p>
                <p><strong>Email :</strong> <a href="mailto:contact@ge-mesdocs.fr" className="text-[#1d67cd] hover:underline">contact@ge-mesdocs.fr</a></p>
                <p><strong>Directeur de la publication :</strong> Le Président de l&apos;association</p>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="mb-10">
              <h2 className="text-[20px] font-semibold text-gray-900 mb-4 pb-2 border-b border-[#e4eaf5]">2. Hébergement</h2>
              <div className="text-[15px] text-gray-700 leading-[1.8] space-y-1">
                <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
                <p><strong>Adresse :</strong> 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis</p>
                <p><strong>Site :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-[#1d67cd] hover:underline">www.netlify.com</a></p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-10">
              <h2 className="text-[20px] font-semibold text-gray-900 mb-4 pb-2 border-b border-[#e4eaf5]">3. Propriété intellectuelle</h2>
              <p className="text-[15px] text-gray-700 leading-[1.8]">
                L&apos;ensemble des contenus présents sur le site <strong>assistants-medicaux.com</strong> (textes, images, logos, icônes, visuels) est la propriété exclusive de Mesdocs Groupement d&apos;Employeurs ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-[15px] text-gray-700 leading-[1.8] mt-3">
                Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, de ces contenus par quelque moyen ou procédé que ce soit, est interdite sans autorisation écrite préalable de Mesdocs Groupement d&apos;Employeurs.
              </p>
            </div>

            {/* Données personnelles */}
            <div className="mb-10">
              <h2 className="text-[20px] font-semibold text-gray-900 mb-4 pb-2 border-b border-[#e4eaf5]">4. Données personnelles (RGPD)</h2>
              <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">
                Dans le cadre de l&apos;utilisation de ce site, Mesdocs Groupement d&apos;Employeurs est susceptible de collecter des données à caractère personnel via les formulaires de contact. Ces données sont collectées et traitées dans le respect du <strong>Règlement Général sur la Protection des Données (RGPD)</strong> — Règlement (UE) 2016/679 — et de la loi Informatique et Libertés n° 78-17 du 6 janvier 1978 modifiée.
              </p>

              <h3 className="text-[16px] font-semibold text-gray-800 mb-2">Données collectées</h3>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[1.8] mb-4">
                <li>Nom et prénom</li>
                <li>Numéro de téléphone</li>
                <li>Adresse email</li>
                <li>Nom du cabinet ou de la structure (facultatif)</li>
                <li>Ville (facultatif)</li>
                <li>Message (facultatif)</li>
              </ul>

              <h3 className="text-[16px] font-semibold text-gray-800 mb-2">Finalité du traitement</h3>
              <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">
                Les données collectées sont utilisées exclusivement pour traiter les demandes de contact et de renseignements, et pour vous recontacter dans le cadre de votre projet d&apos;assistant médical. Elles ne sont ni vendues, ni cédées à des tiers.
              </p>

              <h3 className="text-[16px] font-semibold text-gray-800 mb-2">Durée de conservation</h3>
              <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">
                Les données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter de votre dernier contact, puis supprimées ou anonymisées.
              </p>

              <h3 className="text-[16px] font-semibold text-gray-800 mb-2">Vos droits</h3>
              <p className="text-[15px] text-gray-700 leading-[1.8]">
                Conformément au RGPD, vous disposez des droits suivants sur vos données : droit d&apos;accès, de rectification, d&apos;effacement, de limitation du traitement, d&apos;opposition et de portabilité. Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@ge-mesdocs.fr" className="text-[#1d67cd] hover:underline">contact@ge-mesdocs.fr</a>. Vous pouvez également introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#1d67cd] hover:underline">CNIL</a>.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="text-[20px] font-semibold text-gray-900 mb-4 pb-2 border-b border-[#e4eaf5]">5. Cookies</h2>
              <p className="text-[15px] text-gray-700 leading-[1.8] mb-4">
                Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement, ainsi que des cookies d&apos;analyse d&apos;audience (Google Analytics) pour mesurer le trafic et améliorer les contenus. Aucun cookie publicitaire de ciblage n&apos;est déposé.
              </p>
              <p className="text-[15px] text-gray-700 leading-[1.8]">
                Conformément à la réglementation en vigueur, votre consentement est requis pour les cookies non essentiels. Vous pouvez paramétrer votre navigateur pour refuser les cookies ou être informé de leur dépôt.
              </p>
            </div>

            {/* Liens hypertextes */}
            <div className="mb-10">
              <h2 className="text-[20px] font-semibold text-gray-900 mb-4 pb-2 border-b border-[#e4eaf5]">6. Liens hypertextes</h2>
              <p className="text-[15px] text-gray-700 leading-[1.8]">
                Le site assistants-medicaux.com peut contenir des liens vers des sites tiers (ameli.fr, vae-formation.com). Mesdocs Groupement d&apos;Employeurs n&apos;est pas responsable du contenu de ces sites externes et n&apos;exerce aucun contrôle sur eux.
              </p>
            </div>

            {/* Responsabilité */}
            <div className="mb-10">
              <h2 className="text-[20px] font-semibold text-gray-900 mb-4 pb-2 border-b border-[#e4eaf5]">7. Limitation de responsabilité</h2>
              <p className="text-[15px] text-gray-700 leading-[1.8]">
                Les informations présentes sur ce site sont fournies à titre indicatif. Elles peuvent être modifiées à tout moment sans préavis. Mesdocs Groupement d&apos;Employeurs ne saurait être tenu responsable des erreurs ou omissions dans les informations diffusées, ni des dommages directs ou indirects résultant de l&apos;utilisation du site.
              </p>
              <p className="text-[15px] text-gray-700 leading-[1.8] mt-3">
                Pour toute information sur les montants et conditions du dispositif assistant médical, la source officielle est <a href="https://www.ameli.fr/medecin/exercice-liberal/vie-cabinet/aides-financieres/aide-emploi-assistants-medicaux" target="_blank" rel="noopener noreferrer" className="text-[#1d67cd] hover:underline">ameli.fr</a>.
              </p>
            </div>

            {/* Droit applicable */}
            <div className="mb-12">
              <h2 className="text-[20px] font-semibold text-gray-900 mb-4 pb-2 border-b border-[#e4eaf5]">8. Droit applicable</h2>
              <p className="text-[15px] text-gray-700 leading-[1.8]">
                Le présent site et ses mentions légales sont soumis au droit français. Tout litige relatif à l&apos;utilisation de ce site sera soumis à la compétence exclusive des tribunaux français.
              </p>
            </div>

            <div className="bg-[#f5f8ff] border border-[#e4eaf5] rounded-2xl p-6 text-center">
              <p className="text-[14px] text-gray-500 mb-3">Une question sur vos données ou sur le dispositif ?</p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-[#093e98] text-white text-[14px] font-semibold hover:opacity-90 transition-opacity">
                Nous contacter →
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
