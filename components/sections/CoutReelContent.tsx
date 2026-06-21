import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const inclus = [
  "Salaire brut de l'assistant médical (grille CQP)",
  "Charges patronales (URSSAF, retraite, prévoyance)",
  "Frais de gestion Mesdocs (recrutement, paie, administration RH)",
  "Gestion des congés, absences et remplacements",
  "Formation CQP et accompagnement continu",
];

const tableau = [
  { annee: "1re année", etp: "1 ETP", cout: "2 627 €", aide: "3 167 €", net: "0 € (surplus ~540 €)", highlight: true },
  { annee: "2e année",  etp: "1 ETP", cout: "2 627 €", aide: "2 333 €", net: "≈ 294 €/mois", highlight: false },
  { annee: "3e année+", etp: "1 ETP", cout: "2 627 €", aide: "1 833 €", net: "≈ 794 €/mois", highlight: false },
  { annee: "1re année", etp: "0,5 ETP", cout: "1 314 €", aide: "1 583 €", net: "0 € (surplus ~270 €)", highlight: true },
  { annee: "2e année",  etp: "0,5 ETP", cout: "1 314 €", aide: "1 167 €", net: "≈ 147 €/mois", highlight: false },
  { annee: "3e année+", etp: "0,5 ETP", cout: "1 314 €", aide: "917 €",   net: "≈ 397 €/mois", highlight: false },
];

const faq = [
  {
    q: "Que couvre exactement le coefficient 1,6 ?",
    a: "Le coefficient 1,6 appliqué au salaire brut couvre l'intégralité du coût pour le médecin : salaire brut de l'assistant, charges patronales (URSSAF, retraite, prévoyance, mutuelle), frais de gestion Mesdocs (recrutement, établissement des fiches de paie, suivi RH, gestion des congés et remplacements). Aucun frais supplémentaire n'est facturé.",
  },
  {
    q: "L'aide CPAM couvre-t-elle vraiment tout en 1re année ?",
    a: "Oui, pour la quasi-totalité des médecins éligibles. L'aide CPAM en 1re année est de 38 000 €/an pour 1 ETP, soit 3 167 €/mois. Le coût tout compris avec le coefficient 1,6 est de 2 627 €/mois. Le médecin perçoit donc un surplus d'environ 540 €/mois la première année.",
  },
  {
    q: "Que se passe-t-il à partir de la 3e année ?",
    a: "L'aide CPAM est dégressive sur 5 ans. À partir de la 3e année, elle passe à 22 000 €/an (1 833 €/mois pour 1 ETP). Le reste à charge pour le médecin est alors d'environ 794 €/mois — à mettre en regard du temps libéré et des consultations supplémentaires rendues possibles grâce à l'assistant.",
  },
  {
    q: "Le salaire de l'assistant peut-il évoluer avec l'ancienneté ?",
    a: "Oui. Le salaire brut de référence est la grille CQP assistant médical (1 642 €/mois brut pour 1 ETP). Avec l'ancienneté, ce salaire peut légèrement augmenter selon la convention collective applicable. Le coefficient 1,6 s'applique au salaire brut réel au moment du calcul.",
  },
  {
    q: "Le calcul est-il différent pour un médecin en MSP ?",
    a: "Non, le coefficient 1,6 s'applique de la même façon. En MSP, chaque médecin signe pour sa part d'ETP (exemple : 0,5 ETP chacun pour deux médecins). Chacun paie 1 314 €/mois tout compris et perçoit sa propre aide CPAM de 1 583 €/mois la 1re année.",
  },
];

export default function CoutReelContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Une formule simple : salaire brut × 1,6</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Avec Mesdocs, le coût d&apos;un assistant médical se calcule en une ligne : <strong>salaire brut de l&apos;assistant × 1,6</strong>. Ce coefficient unique couvre absolument tout — charges patronales, frais de gestion, paie, congés, remplacements. Aucune surprise, aucun frais caché.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le salaire brut de référence est <strong>1 642 €/mois pour un temps plein (1 ETP)</strong>, défini par la grille du CQP assistant médical. Le coût tout compris pour le médecin est donc de <strong>1 642 × 1,6 = 2 627 €/mois</strong>.
          </p>
          <div className="mt-6 bg-[#eef4ff] rounded-xl border border-[#cddcf8] p-6">
            <p className="text-[15px] text-[#093e98] leading-[1.7]">
              <strong>En 1re année</strong>, l&apos;aide CPAM est de <strong>38 000 €/an</strong> (soit 3 167 €/mois pour 1 ETP). Elle dépasse le coût total — le médecin ne débourse rien et perçoit même un surplus d&apos;environ 540 €/mois.
            </p>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Ce que couvre le coefficient 1,6</h2>
          <ul className="flex flex-col gap-4">
            {inclus.map((item) => (
              <li key={item} className="flex items-start gap-4 bg-white rounded-xl border border-[#e4eaf5] p-5">
                <CheckCircle size={18} className="text-[#093e98] shrink-0 mt-0.5" />
                <span className="text-[15px] text-gray-700 leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tableau coût net */}
      <section className="py-16 px-6">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[28px] font-light mb-4">Reste à charge réel après aide CPAM</h2>
          <p className="text-[16px] text-gray-500 mb-8">Ce que vous payez réellement chaque mois, aide CPAM déduite.</p>
          <div className="overflow-x-auto rounded-xl border border-[#e4eaf5]">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="bg-[#093e98] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Année</th>
                  <th className="text-left px-5 py-4 font-semibold">Temps de travail</th>
                  <th className="text-right px-5 py-4 font-semibold">Coût × 1,6</th>
                  <th className="text-right px-5 py-4 font-semibold">Aide CPAM/mois</th>
                  <th className="text-right px-5 py-4 font-semibold">Reste à charge</th>
                </tr>
              </thead>
              <tbody>
                {tableau.map((row, i) => (
                  <tr key={`${row.annee}-${row.etp}`} className={row.highlight ? 'bg-[#eef4ff]' : i % 2 === 0 ? 'bg-white' : 'bg-[#f5f8ff]'}>
                    <td className="px-6 py-3.5 font-medium text-gray-800">{row.annee}</td>
                    <td className="px-5 py-3.5 text-gray-600">{row.etp}</td>
                    <td className="px-5 py-3.5 text-right text-gray-600">{row.cout}</td>
                    <td className="px-5 py-3.5 text-right text-[#1d67cd]">{row.aide}</td>
                    <td className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-green-600' : 'text-[#093e98]'}`}>{row.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-gray-400 italic mt-4">
            Calcul basé sur salaire brut CQP 1 642 €/mois × coefficient 1,6. Aide CPAM source : Convention Médicale 2024–2029.
          </p>
        </div>
      </section>

      {/* Explication dégression */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">L&apos;aide diminue — mais votre cabinet se développe</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            L&apos;aide CPAM est dégressive sur 5 ans. C&apos;est voulu : la 1re année, elle couvre intégralement votre coût pour vous permettre de tester le dispositif sans risque financier. À partir de la 3e année, le reste à charge est d&apos;environ <strong>794 €/mois pour 1 ETP</strong>.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            En contrepartie, les médecins qui font le bilan après 3 ans constatent une augmentation significative de leur file active et de leurs revenus — le temps libéré par l&apos;assistant permet d&apos;accueillir plus de patients et de consacrer chaque consultation à l&apos;essentiel.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Questions sur le coût réel de l&apos;assistant médical</h2>
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
          <Link href="/groupement-employeurs-medecin-liberal" className="text-[#1d67cd] underline hover:text-[#093e98]">Comment fonctionne le groupement d&apos;employeurs →</Link>
          <Link href="/prendre-rendez-vous" className="text-[#1d67cd] underline hover:text-[#093e98]">Obtenir mon calcul personnalisé →</Link>
        </div>
      </section>
    </>
  );
}
