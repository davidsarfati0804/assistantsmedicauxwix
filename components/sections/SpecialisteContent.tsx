import Link from 'next/link';
import { CheckCircle, XCircle } from 'lucide-react';

const eligibles = [
  "Médecin généraliste (secteur 1 et 2 OPTAM)",
  "Pédiatre",
  "Gynécologue médical",
  "Cardiologue",
  "Pneumologue",
  "Rhumatologue",
  "Dermatologue",
  "Endocrinologue",
  "Gastro-entérologue",
  "ORL",
  "Ophtalmologue",
  "Psychiatre et pédopsychiatre",
  "Neurologue",
  "Néphrologue",
  "Médecin interniste",
];

const exclus = [
  "Radiologue et médecin nucléaire",
  "Anesthésiste-réanimateur",
  "Anatomo-pathologiste",
  "Stomatologue",
  "Radiothérapeute oncologue",
  "Médecin exerçant en secteur 3 (non conventionné)",
];

const casTypes = [
  {
    titre: "Pédiatre en cabinet de ville",
    detail: "Un pédiatre en secteur 2 OPTAM avec 800 patients actifs est éligible. L'assistant médical prend en charge l'accueil, les courbes de croissance, les vaccinations de routine et la gestion des dossiers. Le médecin consacre 100 % de son temps aux actes cliniques.",
  },
  {
    titre: "Gynécologue médical en cabinet de groupe",
    detail: "Deux gynécologues médicales en secteur 1 partagent un assistant médical à 0,5 ETP chacune. Chacune signe son propre contrat CPAM et perçoit 19 000 €/an la 1re année. Mesdocs organise le planning commun.",
  },
  {
    titre: "Dermatologue secteur 2 OPTAM",
    detail: "Un dermatologue avec file active importante délègue la préparation des consultations, la prise de photos cliniques et le suivi des résultats d'examens. L'assistant est formé sur les spécificités de la dermatologie lors de son intégration.",
  },
];

const faq = [
  {
    q: "Tous les médecins spécialistes sont-ils éligibles au dispositif assistant médical ?",
    a: "Non. Les spécialités dites « techniques » sont exclues : radiologues, anesthésistes, anatomo-pathologistes, médecins nucléaires, stomatologues et radiothérapeutes. Les spécialistes cliniques (pédiatres, gynécologues, cardiologues, dermatologues, ORL, psychiatres, etc.) sont éligibles s'ils exercent en secteur 1 ou secteur 2 OPTAM.",
  },
  {
    q: "Un spécialiste doit-il remplir une condition de file active ?",
    a: "Oui. Le médecin doit justifier d'une file active suffisante et d'un engagement à augmenter le nombre de patients pris en charge grâce au temps libéré par l'assistant. La CPAM vérifie ces critères lors de la signature du contrat. Mesdocs vous aide à préparer ce dossier.",
  },
  {
    q: "L'assistant médical d'un spécialiste a-t-il une formation spécifique ?",
    a: "La formation de base (CQP, 279 heures) couvre les compétences communes à toutes les spécialités. Mesdocs organise des formations complémentaires adaptées à votre spécialité lors de l'intégration (protocoles spécifiques, logiciel métier, gestes de spécialité).",
  },
  {
    q: "Un spécialiste peut-il partager un assistant médical avec un généraliste ?",
    a: "Oui, en maison de santé pluriprofessionnelle (MSP) ou cabinet de groupe. Chaque médecin signe son propre contrat CPAM pour sa part d'ETP. L'assistant travaille alternativement avec chaque praticien selon le planning organisé par Mesdocs.",
  },
  {
    q: "Quelle est la différence entre secteur 1, secteur 2 OPTAM et secteur 3 pour ce dispositif ?",
    a: "Seuls les médecins en secteur 1 et secteur 2 OPTAM (anciennement secteur 2 avec option pratique tarifaire maîtrisée) sont éligibles. Le secteur 2 classique (sans OPTAM) et le secteur 3 (médecins non conventionnés) ne permettent pas de bénéficier de l'aide CPAM pour un assistant médical.",
  },
];

export default function SpecialisteContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Le dispositif CPAM s&apos;applique aussi aux spécialistes</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le dispositif d&apos;assistant médical n&apos;est pas réservé aux médecins généralistes. La plupart des <strong>spécialistes cliniques</strong> — pédiatres, gynécologues, cardiologues, dermatologues, ORL, psychiatres — peuvent recruter un assistant médical financé par la CPAM, sous réserve d&apos;exercer en secteur 1 ou secteur 2 OPTAM.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Seules les spécialités dites <strong>techniques</strong> (radiologie, anesthésie, anatomo-pathologie…) sont exclues. Pour toutes les autres, le montant de l&apos;aide est identique : <strong>jusqu&apos;à 38 000 €/an la 1re année</strong> pour 1 ETP.
          </p>
        </div>
      </section>

      {/* Éligibles / Exclus */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Spécialités éligibles et spécialités exclues</h2>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <div className="bg-[#f0f5ff] rounded-2xl border border-[#d0ddf5] p-8">
              <p className="text-[17px] font-bold text-[#093e98] mb-5">✓ Spécialités éligibles</p>
              <ul className="flex flex-col gap-3">
                {eligibles.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[14px] text-gray-700 leading-[1.6]">
                    <CheckCircle size={15} className="text-[#093e98] shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#e4eaf5] p-8">
              <p className="text-[17px] font-bold text-red-500 mb-5">✗ Spécialités exclues</p>
              <ul className="flex flex-col gap-3">
                {exclus.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[14px] text-gray-600 leading-[1.6]">
                    <XCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-gray-400 mt-6 italic">Source : Convention Médicale 2024–2029</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cas types */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Exemples de spécialistes avec un assistant médical</h2>
          <div className="flex flex-col gap-6">
            {casTypes.map((cas) => (
              <div key={cas.titre} className="rounded-2xl border border-[#e4eaf5] p-7 bg-white">
                <p className="text-[16px] font-semibold text-[#093e98] mb-2">{cas.titre}</p>
                <p className="text-[15px] text-gray-600 leading-[1.7]">{cas.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coût */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Quel est le coût pour un spécialiste ?</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le calcul est identique quelle que soit la spécialité : <strong>salaire brut de l&apos;assistant × 1,6 = coût tout compris</strong> (charges, paie, frais de gestion Mesdocs). Pour 1 ETP, cela représente <strong>2 627 €/mois</strong>.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            En 1re année, l&apos;aide CPAM de <strong>38 000 €/an</strong> (3 167 €/mois) dépasse ce coût. Le reste à charge est nul. À partir de la 3e année, il est d&apos;environ 794 €/mois pour 1 ETP.
          </p>
          <Link href="/cout-assistant-medical-aide-cpam" className="inline-flex items-center gap-2 text-[14px] text-[#1d67cd] underline hover:text-[#093e98]">
            Voir le tableau complet du reste à charge →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions des médecins spécialistes sur le dispositif CPAM</h2>
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
          <Link href="/dispositif-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Le dispositif CPAM en détail →</Link>
          <Link href="/cout-assistant-medical-aide-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Calculer le coût réel →</Link>
          <Link href="/prendre-rendez-vous" className="text-[#1d67cd] underline hover:text-[#093e98]">Vérifier mon éligibilité →</Link>
        </div>
      </section>
    </>
  );
}
