import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const missions = [
  { title: 'Missions administratives', items: ['Accueil physique et téléphonique des patients', 'Gestion et mise à jour des dossiers médicaux', 'Organisation de l\'agenda et des rendez-vous', 'Mise en place de la télémédecine'] },
  { title: 'Préparation des consultations', items: ['Aide au déshabillage / rhabillage (sous responsabilité du médecin)', 'Prise des constantes (tension, poids, taille)', 'Mise à jour des dossiers de dépistage et vaccination', 'Préparation du matériel et appui organisationnel à la consultation, sous la responsabilité du médecin'] },
  { title: 'Coordination des soins', items: ['Organisation des rendez-vous spécialistes', 'Coordination avec infirmières, kinés, sages-femmes', 'Suivi du parcours de soins du patient', 'Liens avec les services hospitaliers'] },
];

const geAdvantages = [
  'Mesdocs est l\'employeur, pas vous',
  'Zéro gestion de la paie, des congés, des absences',
  'Conformité URSSAF et CPAM assurée',
  'Formation CQP entièrement gérée',
  'Recherche d\'une solution de continuité en cas d\'absence prolongée ou de départ',
  'Accompagnement continu sans durée minimale d\'engagement',
];

const comparaison = [
  { critere: 'Employeur', assistant: 'Mesdocs (GE)', secretaire: 'Le médecin lui-même' },
  { critere: 'Financement CPAM', assistant: 'Jusqu\'à 38 000 €/an', secretaire: 'Non applicable' },
  { critere: 'Formation certifiante', assistant: 'CQP, VAE ou FAE inclus', secretaire: 'À la charge du médecin' },
  { critere: 'Gestion administrative', assistant: 'Entièrement par Mesdocs', secretaire: 'Entièrement par le médecin' },
  { critere: 'Missions d\'appui à la consultation', assistant: 'Oui (constantes, préparation, sous responsabilité du médecin)', secretaire: 'Non' },
  { critere: 'Engagement', assistant: 'Adhésion à l\'association', secretaire: 'CDI classique' },
];

const faq = [
  {
    q: 'Quelle est la différence entre un assistant médical et une secrétaire médicale ?',
    a: 'L\'assistant médical, via un groupement d\'employeurs comme Mesdocs, peut effectuer des missions d\'appui à la consultation (prise de constantes, préparation de consultations, sous responsabilité du médecin) en plus des tâches administratives. La secrétaire médicale est limitée à l\'administratif. De plus, avec Mesdocs, le médecin n\'est pas l\'employeur : c\'est le GE qui assure toute la gestion RH.',
  },
  {
    q: 'Le médecin devient-il l\'employeur de l\'assistant médical ?',
    a: 'Non. Avec Mesdocs Groupement d\'Employeurs, c\'est Mesdocs qui est l\'employeur juridique de l\'assistant médical. Le médecin est adhérent de l\'association : il a accès à l\'ensemble des ressources de Mesdocs, sans aucune obligation d\'employeur (paie, contrat, URSSAF, licenciement...). Nous vous accompagnons dans les démarches CPAM et assurons la gestion employeur de l\'assistant médical.',
  },
  {
    q: 'Puis-je définir moi-même les missions de l\'assistant médical ?',
    a: 'Oui. Les missions sont définies avec vous lors du premier rendez-vous, en fonction de l\'organisation de votre cabinet, de vos pratiques et des besoins de vos patients. Chaque assistant médical est mis à disposition avec un profil de poste personnalisé.',
  },
  {
    q: 'Quelles sont les conditions pour bénéficier de la mise à disposition ?',
    a: 'Vous devez exercer en médecine libérale (secteur 1 ou 2 OPTAM). Le secteur 3 (non conventionné) n\'est pas éligible. Certaines spécialités techniques sont exclues (radiologues, anesthésistes, anatomo-pathologistes). Mesdocs vérifie votre éligibilité gratuitement lors du premier entretien.',
  },
  {
    q: 'Que se passe-t-il si l\'assistant médical quitte le poste ?',
    a: 'Mesdocs engage des démarches pour trouver une solution de continuité. Vous n\'avez pas à gérer le départ ni à relancer le recrutement vous-même. Mesdocs assure le suivi RH dans le cadre de la convention de mise à disposition.',
  },
];

export default function AssistantsMedicauxContent() {
  return (
    <>
      {/* Intro GE */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Qu'est-ce que la mise à disposition par un groupement d'employeurs ?</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Un <strong>groupement d'employeurs (GE)</strong> est une structure juridique qui recrute des salariés et les met à disposition de ses membres — ici, des médecins libéraux. <strong>Mesdocs Groupement d'Employeurs</strong>, <em>association loi 1901 à but non lucratif</em>, est l'employeur légal de l'assistant médical : c'est lui qui signe le contrat de travail, gère la paie, les congés, les formations et les démarches URSSAF.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le médecin, lui, est <strong>adhérent</strong> de l'association : en tant qu'adhérent, il a accès à l'ensemble des ressources de Mesdocs et bénéficie de l'assistant dans son cabinet au quotidien, sans jamais avoir à endosser la casquette d'employeur.
          </p>
          <div className="bg-[#f5f8ff] border border-[#e4eaf5] rounded-2xl p-8 mt-6">
            <p className="text-[17px] font-semibold text-[#093e98] mb-4">Avec Mesdocs, vous bénéficiez de :</p>
            <ul className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {geAdvantages.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[15px] text-gray-700 leading-[1.6]">
                  <CheckCircle size={17} className="text-[#093e98] shrink-0 mt-0.5" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[28px] font-light mb-3 text-center">Les missions de l'assistant médical dans votre cabinet</h2>
          <p className="text-[16px] text-gray-500 text-center mb-10">Les missions sont définies avec vous et adaptées à votre organisation.</p>
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {missions.map((m) => (
              <div key={m.title} className="bg-white rounded-2xl border border-[#e4eaf5] p-7 shadow-[0_2px_16px_rgba(9,62,152,.06)]">
                <h3 className="text-[16px] font-semibold text-[#093e98] mb-4">{m.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-700 leading-[1.6]">
                      <span className="text-[#093e98] font-bold shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Éligibilité */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Qui peut bénéficier du dispositif ?</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le dispositif assistant médical est ouvert aux <strong>médecins libéraux conventionnés</strong> exerçant en secteur 1 ou en secteur 2 avec adhésion OPTAM ou OPTAM-CO, quelle que soit leur spécialité — à l'exception des spécialités purement techniques (radiologues, anesthésistes, anatomocytopathologistes, médecins nucléaires, stomatologues, radiothérapeutes). Les médecins en secteur 3 (non conventionnés) ne sont pas éligibles.
          </p>
          <p className="text-[16px] leading-[1.7]">
            Vous exercez seul, en groupe ou en maison de santé pluriprofessionnelle ? Mesdocs accompagne toutes les configurations. La <strong>mutualisation d'un assistant médical</strong> entre plusieurs médecins est également possible grâce au statut de groupement d'employeurs.
          </p>
        </div>
      </section>

      {/* Comparaison */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8 text-center">Assistant médical vs secrétaire médicale : les différences clés</h2>
          <div className="overflow-x-auto rounded-xl border border-[#e4eaf5]">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="bg-[#093e98] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Critère</th>
                  <th className="text-left px-6 py-4 font-semibold">Assistant médical (via Mesdocs GE)</th>
                  <th className="text-left px-6 py-4 font-semibold">Secrétaire médicale directe</th>
                </tr>
              </thead>
              <tbody>
                {comparaison.map((row, i) => (
                  <tr key={row.critere} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f8ff]'}>
                    <td className="px-6 py-3.5 font-medium text-gray-800">{row.critere}</td>
                    <td className="px-6 py-3.5 text-[#093e98] font-medium">{row.assistant}</td>
                    <td className="px-6 py-3.5 text-gray-600">{row.secretaire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions fréquentes</h2>
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

      {/* Maillage interne */}
      <section className="pb-10 px-6">
        <div className="max-w-[900px] mx-auto flex flex-wrap gap-4 text-[14px]">
          <Link href="/avantages-demarches" className="text-[#1d67cd] underline hover:text-[#093e98]">Voir le financement CPAM →</Link>
          <Link href="/dispositif-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Le dispositif officiel CPAM →</Link>
          <Link href="/recrutement-assistant-medical" className="text-[#1d67cd] underline hover:text-[#093e98]">Comment se passe le recrutement ? →</Link>
        </div>
      </section>
    </>
  );
}
