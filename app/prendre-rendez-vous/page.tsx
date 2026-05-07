import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';
import RendezVousForm from '@/components/sections/RendezVousForm';
import Link from 'next/link';
import { CheckCircle, Phone, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prendre Rendez-vous avec Mesdocs – Consultation Gratuite',
  description: 'Prenez rendez-vous gratuitement avec un conseiller Mesdocs. En 20 minutes, nous analysons votre éligibilité au dispositif assistant médical CPAM. Sans engagement.',
  alternates: { canonical: 'https://www.assistants-medicaux.com/prendre-rendez-vous' },
  openGraph: {
    title: 'Prendre Rendez-vous avec Mesdocs – Consultation Gratuite',
    description: '20 minutes gratuites pour vérifier votre éligibilité au dispositif assistant médical CPAM. Sans engagement.',
    url: 'https://www.assistants-medicaux.com/prendre-rendez-vous',
    type: 'website',
  },
};

const points = [
  'Nous vérifions votre éligibilité au dispositif CPAM',
  'Nous vous expliquons le rôle de Mesdocs comme groupement d\'employeurs',
  'Nous détaillons les montants de l\'aide selon votre secteur',
  'Nous présentons le processus de recrutement étape par étape',
  'Nous répondons à toutes vos questions, sans engagement',
];

const reassurances = [
  { Icon: Clock, label: '20 minutes suffisent' },
  { Icon: Shield, label: 'Gratuit, sans engagement' },
  { Icon: Phone, label: 'Par téléphone ou visio' },
];

export default function PrendreRendezVousPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <PageHero
          imageSrc="/assets/hero_home.jpg"
          imageAlt="Médecin prenant rendez-vous avec un conseiller Mesdocs"
          title={<>Prenez Rendez-vous<br />avec un Conseiller Mesdocs</>}
          body="Une consultation gratuite de 20 minutes pour tout comprendre sur le dispositif assistant médical et vérifier votre éligibilité. Sans engagement."
          ctaPrimary={{ label: 'Nous appeler maintenant', href: 'tel:0970682220' }}
          ctaLight={{ label: 'Nous écrire', href: '/contact' }}
        />

        <section className="py-16 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-[1fr_1.1fr] gap-12 items-start max-md:grid-cols-1">

              {/* Colonne gauche */}
              <div>
                <h2 className="text-[24px] font-semibold text-gray-900 mb-6">Une consultation gratuite de 20 minutes</h2>

                <div className="flex gap-6 mb-8 max-sm:flex-col">
                  {reassurances.map(({ Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 text-[14px] text-gray-600">
                      <div className="w-9 h-9 rounded-lg bg-[#f5f8ff] border border-[#e4eaf5] flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-[#093e98]" />
                      </div>
                      {label}
                    </div>
                  ))}
                </div>

                <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Ce que nous abordons ensemble :</h3>
                <ul className="flex flex-col gap-3 mb-8">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px] text-gray-700 leading-[1.6]">
                      <CheckCircle size={17} className="text-[#093e98] shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#f5f8ff] border border-[#e4eaf5] rounded-2xl p-6">
                  <p className="text-[14px] text-gray-500 mb-2">Préférez-vous nous appeler directement ?</p>
                  <a href="tel:0970682220" className="text-[20px] font-bold text-[#093e98] hover:underline block mb-1">09 70 68 22 20</a>
                  <p className="text-[13px] text-gray-400">Lundi – Vendredi : 9h – 18h</p>
                </div>
              </div>

              {/* Colonne droite — formulaire demande de RDV */}
              <div className="bg-white rounded-2xl border border-[#e4eaf5] shadow-[0_4px_32px_rgba(9,62,152,.08)] px-9 py-10">
                <h2 className="text-[20px] font-bold text-gray-900 mb-1.5">Demandez à être rappelé</h2>
                <p className="text-[14px] text-gray-500 mb-7">Notre équipe vous contacte sous 24h ouvrées pour fixer le créneau.</p>
                <RendezVousForm />
              </div>

            </div>
          </div>
        </section>

        {/* Maillage */}
        <section className="pb-12 px-6">
          <div className="max-w-[900px] mx-auto flex flex-wrap gap-4 text-[14px]">
            <Link href="/assistants-medicaux" className="text-[#1d67cd] underline hover:text-[#093e98]">En savoir plus sur la mise à disposition →</Link>
            <Link href="/dispositif-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Le dispositif CPAM en détail →</Link>
            <Link href="/contact" className="text-[#1d67cd] underline hover:text-[#093e98]">Nous écrire →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
