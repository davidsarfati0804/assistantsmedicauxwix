import Link from 'next/link';
import { Search, UserPlus, GraduationCap, ShieldCheck } from 'lucide-react';

const etapes = [
  {
    Icon: Search,
    num: '1',
    title: 'Échange initial gratuit',
    duree: 'Semaine 1',
    desc: 'Un conseiller Mesdocs analyse votre éligibilité CPAM, vos besoins et l\'organisation de votre cabinet. Nous définissons ensemble le profil idéal de votre assistant médical.',
  },
  {
    Icon: UserPlus,
    num: '2',
    title: 'Sélection et présentation des profils',
    duree: 'Semaines 2–4',
    desc: 'Mesdocs publie l\'offre, trie les candidatures, conduit les entretiens et vous présente une shortlist de 2 à 3 profils. Vous rencontrez les candidats et faites votre choix.',
  },
  {
    Icon: GraduationCap,
    num: '3',
    title: 'Intégration et formation',
    duree: 'Semaines 5–8',
    desc: 'Mesdocs signe le contrat de travail avec l\'assistant. La convention CPAM est finalisée. La formation CQP, VAE ou FAE est organisée avec nos partenaires de formation.',
  },
  {
    Icon: ShieldCheck,
    num: '4',
    title: 'Accompagnement continu sur 5 ans',
    duree: 'Sur toute la durée',
    desc: 'Mesdocs gère la paie, les congés, les absences, les évaluations semestrielles et le renouvellement du contrat CPAM. Vous vous concentrez sur vos patients.',
  },
];

const gestionMesdocs = [
  'Rédaction et signature du contrat de travail',
  'Déclarations URSSAF et charges sociales',
  'Gestion de la paie mensuelle',
  'Gestion des congés payés et absences',
  'Procédures disciplinaires ou de rupture si nécessaire',
  'Inscription et suivi de la formation CQP',
  'Relations avec l\'OPCO EP pour le financement formation',
  'Préparation et suivi du contrat CPAM',
  'Évaluations annuelles et renouvellement',
  'Recherche d\'une solution de continuité en cas d\'absence prolongée ou de départ',
];

const temoignages = [
  {
    nom: 'Dr. Zaghdoun',
    specialite: 'Médecine Générale',
    texte: 'L\'assistante prend en charge l\'accueil, le dossier patient, les constantes. Cela m\'a libéré environ 30% de mon temps. Je peux voir plus de patients sans travailler plus.',
  },
  {
    nom: 'Dr. Daoud',
    specialite: 'Gynécologie',
    texte: 'La mise en place a été rapide et sans stress. Mesdocs a géré tout l\'administratif avec la CPAM. Je n\'ai eu qu\'à choisir le profil et signer.',
  },
];

const faq = [
  {
    q: 'Puis-je rencontrer les candidats avant de choisir ?',
    a: 'Oui. Mesdocs vous présente une sélection de 2 à 3 profils correspondant à votre fiche de poste. Vous conduisez les entretiens finaux et faites le choix définitif. Nous ne vous imposons aucun candidat.',
  },
  {
    q: 'Combien de temps dure en moyenne le processus de recrutement ?',
    a: 'En moyenne 6 à 8 semaines entre votre accord et la prise de poste effective de l\'assistant. Ce délai couvre la sélection, la signature des contrats et le démarrage de la formation.',
  },
  {
    q: 'Que se passe-t-il si le profil sélectionné ne convient pas ?',
    a: 'Pendant la période d\'essai (généralement 2 mois), Mesdocs peut relancer le processus si le profil ne correspond pas à vos attentes. Vous n\'avez pas à gérer la rupture vous-même.',
  },
  {
    q: 'Qui gère la formation CQP de l\'assistant médical ?',
    a: 'Mesdocs organise la formation en partenariat avec des partenaires de formation et l\'OPCO EP. L\'assistant a 2 ans pour s\'inscrire et 3 ans pour obtenir son CQP. La VAE est possible pour les profils expérimentés, via notre partenaire VAE Formation.',
  },
  {
    q: 'Comment se déroule la période d\'essai ?',
    a: 'La période d\'essai est de 2 mois pour un CDI (renouvelable une fois). Pendant cette période, Mesdocs assure un suivi régulier pour accompagner l\'intégration et lever d\'éventuelles difficultés.',
  },
];

export default function RecrutementContent() {
  return (
    <>
      {/* Processus 4 étapes */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-3">Notre processus de recrutement en 4 étapes</h2>
          <p className="text-[16px] text-gray-500 mb-10">De votre premier contact à la prise de poste : en moyenne 6 à 8 semaines.</p>
          <div className="flex flex-col gap-6">
            {etapes.map((e) => (
              <div key={e.num} className="flex gap-6 items-start max-md:flex-col">
                <div className="shrink-0 flex flex-col items-center gap-1.5 max-md:flex-row max-md:gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#093e98] text-white flex items-center justify-center text-[18px] font-bold">
                    {e.num}
                  </div>
                  <span className="text-[12px] text-gray-400 whitespace-nowrap">{e.duree}</span>
                </div>
                <div className="bg-white border border-[#e4eaf5] rounded-2xl p-7 flex-1 shadow-[0_2px_12px_rgba(9,62,152,.05)]">
                  <div className="flex items-center gap-3 mb-3">
                    <e.Icon size={20} className="text-[#093e98]" />
                    <p className="text-[16px] font-semibold text-gray-900">{e.title}</p>
                  </div>
                  <p className="text-[15px] text-gray-600 leading-[1.7]">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que Mesdocs gère */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-4">Ce que vous n'avez jamais à gérer</h2>
          <p className="text-[16px] leading-[1.7] mb-4">Nous recrutons, salarions et mettons à disposition l&apos;assistant médical auprès de votre cabinet.</p>
          <p className="text-[16px] text-gray-500 mb-8">Mesdocs prend en charge l'intégralité des obligations employeur. Voici ce qui disparaît de votre liste de tâches :</p>
          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            {gestionMesdocs.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-[#e4eaf5] rounded-xl px-5 py-3.5 text-[14px] text-gray-700">
                <span className="text-[#093e98] font-bold mt-0.5 shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Ils nous ont fait confiance</h2>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {temoignages.map((t) => (
              <div key={t.nom} className="bg-white border border-[#e4eaf5] rounded-2xl p-7 shadow-[0_2px_12px_rgba(9,62,152,.05)]">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="text-[15px] text-gray-700 leading-[1.7] mb-5 italic">"{t.texte}"</p>
                <div>
                  <p className="text-[14px] font-semibold text-gray-900">{t.nom}</p>
                  <p className="text-[13px] text-gray-400">{t.specialite}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions fréquentes sur le recrutement</h2>
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

      {/* Maillage */}
      <section className="py-10 px-6">
        <div className="max-w-[900px] mx-auto flex flex-wrap gap-4 text-[14px]">
          <Link href="/assistants-medicaux" className="text-[#1d67cd] underline hover:text-[#093e98]">Le rôle de l'assistant médical →</Link>
          <Link href="/avantages-demarches" className="text-[#1d67cd] underline hover:text-[#093e98]">Le financement CPAM →</Link>
          <Link href="/devenir-assistant-medical" className="text-[#1d67cd] underline hover:text-[#093e98]">Vous souhaitez devenir assistant ? →</Link>
          <Link href="/prendre-rendez-vous" className="text-[#1d67cd] underline hover:text-[#093e98]">Prendre rendez-vous →</Link>
        </div>
      </section>
    </>
  );
}
