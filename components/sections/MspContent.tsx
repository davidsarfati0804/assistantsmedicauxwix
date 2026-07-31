import Link from 'next/link';
import { CheckCircle, Users } from 'lucide-react';

const avantages = [
  'Chaque médecin signe son propre contrat CPAM et perçoit son aide individuellement',
  'Un seul salarié pour plusieurs praticiens — coût divisé entre vous',
  'Mesdocs gère la planification des horaires entre les différents médecins',
  "Le CQP de l'assistant couvre toutes les spécialités présentes dans la MSP",
  "Aucun des médecins n'est employeur — Mesdocs endosse ce rôle",
];

const exemples = [
  {
    title: '2 médecins généralistes en cabinet de groupe',
    detail: "Chacun signe un contrat CPAM à 0,5 ETP. L'assistant travaille à temps plein, partagé équitablement. Aide totale : 2 × 19 000 € = 38 000 €/an en 1re année.",
  },
  {
    title: 'MSP avec 3 spécialistes',
    detail: 'Un généraliste + un pédiatre + un gynécologue partagent un assistant médical. La CPAM peut financer le dispositif pour chaque praticien éligible séparément.',
  },
  {
    title: 'Cabinet de groupe : 1 médecin à temps plein + 1 remplaçant',
    detail: "Le médecin titulaire signe pour 1 ETP. L'assistant travaille principalement avec le titulaire, ponctuellement avec le remplaçant lors des sessions communes.",
  },
];

const etapes = [
  { num: '1', title: 'Diagnostic de votre MSP', desc: 'Mesdocs analyse la configuration de votre maison de santé : nombre de médecins, spécialités, volume de patients, planning.' },
  { num: '2', title: 'Vérification des éligibilités CPAM', desc: 'Chaque médecin est vérifié individuellement. Certains peuvent être éligibles à des majorations selon leur patientèle.' },
  { num: '3', title: "Recrutement d'un assistant polyvalent", desc: 'Mesdocs sélectionne un profil formé pour intervenir sur plusieurs types de consultations (généraliste, pédiatrie, gynéco…).' },
  { num: '4', title: 'Organisation des plannings', desc: "Mesdocs coordonne les horaires de l'assistant pour qu'il soit présent lors des consultations de chaque praticien." },
  { num: '5', title: 'Contrats CPAM pour chaque médecin', desc: 'Chaque médecin signe sa propre convention avec la CPAM. Les aides sont versées individuellement.' },
];

const faq = [
  {
    q: 'Chaque médecin de la MSP reçoit-il une aide CPAM distincte ?',
    a: "Oui. Chaque médecin éligible signe un contrat CPAM individuel et perçoit l'aide correspondant à son temps d'utilisation de l'assistant. Si deux médecins partagent à parts égales, chacun signe pour 0,5 ETP et perçoit ~19 000 €/an en 1re année.",
  },
  {
    q: "L'assistant médical doit-il avoir une formation spécifique pour travailler en MSP ?",
    a: 'Le CQP assistant médical couvre les compétences de base communes à toutes les spécialités (accueil patient, constantes, gestion des dossiers). Des formations complémentaires peuvent être organisées selon les spécialités présentes dans la MSP.',
  },
  {
    q: 'Que se passe-t-il si un médecin quitte la MSP ?',
    a: "Le contrat CPAM du médecin partant est clôturé. Les autres médecins continuent à bénéficier du dispositif. Mesdocs peut réorganiser le planning de l'assistant pour les praticiens restants.",
  },
  {
    q: 'Un médecin remplaçant peut-il bénéficier du dispositif ?',
    a: 'Non. Le dispositif CPAM est réservé aux médecins installés (titulaires). Un remplaçant ne peut pas signer de contrat CPAM pour un assistant médical, mais il peut utiliser celui du médecin titulaire pendant ses remplacements.',
  },
];

export default function MspContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Le groupement d'employeurs, conçu pour la médecine de groupe</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le modèle de <strong>groupement d'employeurs (GE)</strong> est structurellement adapté aux maisons de santé pluriprofessionnelles (MSP) et aux cabinets de groupe. Plusieurs médecins partagent un même assistant médical, chacun bénéficie de son aide CPAM individuelle, et Mesdocs gère l'ensemble des contraintes employeur.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Résultat : le coût total est divisé entre les praticiens, la charge administrative est mutualisée, et l'assistant médical développe une polyvalence précieuse pour votre équipe.
          </p>
          <div className="mt-6 flex items-center gap-4 bg-[#eef4ff] rounded-xl p-5 border border-[#cddcf8]">
            <Users size={28} className="text-[#093e98] shrink-0" />
            <p className="text-[15px] text-[#093e98] leading-[1.6]">
              <strong>Exemple :</strong> 2 médecins généralistes en cabinet de groupe = aide CPAM totale de <strong>38 000 €/an</strong> la 1re année (2 × 19 000 €), pour un assistant partagé à temps plein.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Pourquoi ce modèle fonctionne en MSP</h2>
          <ul className="flex flex-col gap-4">
            {avantages.map((a) => (
              <li key={a} className="flex items-start gap-4 bg-white rounded-xl border border-[#e4eaf5] p-5">
                <CheckCircle size={18} className="text-[#093e98] shrink-0 mt-0.5" />
                <span className="text-[15px] text-gray-700 leading-[1.6]">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Exemples concrets */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Exemples concrets de configuration</h2>
          <div className="flex flex-col gap-6">
            {exemples.map((ex) => (
              <div key={ex.title} className="rounded-2xl border border-[#e4eaf5] p-7 bg-white">
                <p className="text-[16px] font-semibold text-[#093e98] mb-2">{ex.title}</p>
                <p className="text-[15px] text-gray-600 leading-[1.7]">{ex.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Comment Mesdocs organise votre projet MSP</h2>
          <div className="flex flex-col gap-5">
            {etapes.map((e) => (
              <div key={e.num} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-[#093e98] text-white flex items-center justify-center text-[16px] font-bold shrink-0">
                  {e.num}
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-gray-900 mb-1">{e.title}</p>
                  <p className="text-[15px] text-gray-600 leading-[1.65]">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions sur le partage en MSP</h2>
          <div className="flex flex-col gap-5">
            {faq.map((item) => (
              <div key={item.q} className="border border-[#e4eaf5] rounded-xl p-7 bg-white">
                <p className="text-[16px] font-semibold text-gray-900 mb-3">{item.q}</p>
                <p className="text-[15px] text-gray-600 leading-[1.7]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-10 px-6">
        <div className="max-w-[900px] mx-auto flex flex-wrap gap-4 text-[14px]">
          <Link href="/groupement-employeurs-medecin-liberal" className="text-[#1d67cd] underline hover:text-[#093e98]">Comprendre le groupement d'employeurs →</Link>
          <Link href="/dispositif-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Le financement CPAM →</Link>
          <Link href="/aide-collective-assistant-medical" className="text-[#1d67cd] underline hover:text-[#093e98]">L'aide collective pour votre groupe →</Link>
          <Link href="/prendre-rendez-vous" className="text-[#1d67cd] underline hover:text-[#093e98]">Étudier mon projet MSP avec Mesdocs →</Link>
        </div>
      </section>
    </>
  );
}
