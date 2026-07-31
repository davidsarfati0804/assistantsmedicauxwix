import Link from 'next/link';
import { CheckCircle, ExternalLink, Users, AlertTriangle } from 'lucide-react';

const structures = [
  'Société Civile Professionnelle (SCP) — cabinets de groupe',
  'Société Civile de Moyens (SCM) — cabinets de groupe',
  'Société Interprofessionnelle de Soins Ambulatoires (SISA) — maisons de santé pluriprofessionnelles',
];

const eligibilite = [
  'Médecins généralistes uniquement, hors médecins à exercice particulier (MEP)',
  'Associés en leur nom propre au capital de la société signataire (SCP, SCM ou SISA)',
  'Conventionnés en secteur 1, ou secteur 2 avec adhésion à l\'Optam',
  'Patientèle médecin traitant moyenne du groupe ≥ 775 patients (30e percentile national, P30, au 31/12/2021)',
];

const montants = [
  { annee: '1re année', montant: '38 000 €' },
  { annee: '2e année', montant: '28 000 €' },
  { annee: '3e année et suivantes', montant: '22 000 €' },
];

const objectifs = [
  { label: 'Patientèle médecin traitant (PMT) collective', valeur: '+ 260 patients' },
  { label: 'Patientèle file active (PFA) collective', valeur: '+ 110 patients' },
];

const documents = [
  'Extrait d\'inscription au Registre National des Entreprises (RNE), daté de moins de 3 mois',
  'Copie des statuts de la société, datés et signés par tous les médecins associés',
  'Acte de nomination du ou des mandataires sociaux (si non nommés dans les statuts)',
  'Relevé d\'identité bancaire (RIB) du compte de la société, domicilié en France',
  'Copie des contrats de travail signés des assistants médicaux',
  'Bulletins d\'adhésion individuelle des médecins du groupe',
  'Agrément PAMSU des médecins concernés, ou agrément de la structure comme terrain de stage ambulatoire (si demande du bonus docteurs juniors)',
];

const etapes = [
  { num: '1', title: 'Vérification du seuil P30', desc: "Mesdocs calcule la patientèle médecin traitant moyenne du groupe et vérifie qu'elle atteint au moins 775 patients (30e percentile national)." },
  { num: '2', title: "Clôture des contrats individuels existants", desc: "Si des médecins du groupe ont déjà un contrat CPAM individuel, celui-ci doit être résilié avant la signature du contrat collectif — la résiliation à une autre date que l'anniversaire du contrat entraîne un remboursement ou versement au prorata." },
  { num: '3', title: "Choix du nombre d'ETP", desc: "Le groupe fixe le nombre d'assistants médicaux en ETP, dans la limite du nombre de médecins adhérents (sauf bonus docteurs juniors à partir de novembre 2026)." },
  { num: '4', title: 'Constitution du dossier', desc: 'Mesdocs réunit les pièces requises par la CPAM : extrait RNE, statuts signés, RIB de la société, contrats de travail des assistants, bulletins d\'adhésion individuelle.' },
  { num: '5', title: 'Recrutement et mise à disposition', desc: "Mesdocs recrute le ou les assistants médicaux (salariés du groupement d'employeurs) et les met à disposition de la société signataire, dans le respect de la convention collective des personnels des cabinets médicaux." },
  { num: '6', title: 'Signature et suivi', desc: 'Le représentant légal de la société signe le contrat de 5 ans avec la CPAM. Mesdocs suit ensuite la progression de la patientèle collective (objectif à atteindre sous 2 ans).' },
];

const faq = [
  {
    q: "Depuis quand l'aide collective est-elle en vigueur ?",
    a: "Le dispositif collectif est entré en vigueur le 25 février 2026, après validation par la commission paritaire nationale (CPN). Il s'agit d'une aide financière pérenne, et non d'une mesure temporaire.",
  },
  {
    q: "Qu'est-ce que l'aide collective à l'emploi d'assistants médicaux ?",
    a: "C'est un contrat qui permet à un groupe de médecins généralistes associés dans une même structure (cabinet de groupe ou MSP) de bénéficier ensemble de l'aide à l'emploi d'un ou plusieurs assistants médicaux, au lieu de signer chacun un contrat individuel.",
  },
  {
    q: 'Qui peut signer un contrat collectif ?',
    a: "Uniquement une société ayant une activité propre de soins dont les associés sont des professionnels de santé en leur nom propre : SCP ou SCM pour un cabinet de groupe, SISA pour une MSP. Une société d'exercice libéral (SEL) ne peut pas signer de contrat collectif.",
  },
  {
    q: "Une société civile de moyens (SCM) ou une SCP a-t-elle un numéro particulier auprès de l'Assurance Maladie ?",
    a: "Oui. Une SCM ou une SCP dispose d'un numéro AM, comme tout offreur de soins libéral conventionné. Une SISA est identifiée par un numéro Finess propre.",
  },
  {
    q: "Tous les médecins associés au capital de la société doivent-ils adhérer au contrat collectif ?",
    a: "Non. Chaque médecin qui souhaite bénéficier du renfort des assistants médicaux signe un bulletin d'adhésion individuelle annexé au contrat collectif. Un associé peut choisir de ne pas y adhérer.",
  },
  {
    q: "Quel est le seuil de patientèle pour être éligible ?",
    a: "La patientèle médecin traitant moyenne du groupe doit être égale ou supérieure à 775 patients, ce qui correspond au 30e percentile (P30) de la distribution nationale de la patientèle des médecins généralistes hors MEP, fixée au 31 décembre 2021.",
  },
  {
    q: "L'assistant médical financé par l'aide collective doit-il être titulaire du CQP ?",
    a: "Oui, sauf s'il est déjà infirmier, aide-soignant ou auxiliaire de puériculture. Dans le cas contraire, il doit obtenir le CQP Assistant Médical (RNCP n°36358) dans les 2 ans suivant son embauche, en formation en alternance avec son activité au cabinet.",
  },
  {
    q: "Combien de postes d'assistants médicaux le groupe peut-il financer ?",
    a: "Le nombre d'ETP ne peut pas dépasser le nombre de médecins adhérant au contrat collectif. À partir de novembre 2026, ce plafond peut être augmenté de 0,5 ETP par médecin ayant la qualité de maître de stage des universités (PAMSU) accueillant un docteur junior, ou de 0,5 ETP par médecin si la structure elle-même est agréée comme terrain de stage ambulatoire.",
  },
  {
    q: "Quels objectifs de patientèle le groupe doit-il atteindre, et en combien de temps ?",
    a: "Pour chaque ETP d'assistant médical financé, le groupe doit augmenter sa patientèle médecin traitant collective de 260 patients et sa patientèle file active collective de 110 patients, dans un délai de 2 ans.",
  },
  {
    q: "Que se passe-t-il si l'objectif de patientèle n'est pas atteint ?",
    a: "À partir de la 3e année, si l'objectif collectif n'est pas intégralement atteint, le montant de l'aide de la 3e année (ou des années suivantes) est proratisé. Si la patientèle totale du groupe baisse par rapport au niveau de départ, la CPAM peut résilier le contrat si aucune solution n'est trouvée — en revanche, un simple passage sous le seuil P30 en cours de contrat (par exemple après le départ d'un médecin) n'est pas, à lui seul, un motif de résiliation.",
  },
  {
    q: "Un médecin nouvellement installé dans le groupe a-t-il un objectif spécifique ?",
    a: "Oui. Un médecin installé depuis moins de 12 mois doit atteindre, après 3 ans d'adhésion au contrat collectif, le 50e percentile national (P50) de patientèle : 1 045 patients médecin traitant et 1 514 patients file active.",
  },
  {
    q: "Peut-on passer d'un contrat individuel à un contrat collectif ?",
    a: "Oui, à tout moment, mais le contrat individuel doit d'abord être résilié — le cumul n'est pas possible. Si la résiliation n'a pas lieu à la date anniversaire du contrat individuel, des règles de remboursement ou de versement au prorata s'appliquent selon l'année et la période en cours.",
  },
  {
    q: "Mesdocs peut-il rester l'employeur des assistants médicaux dans le cadre du contrat collectif ?",
    a: "Oui. L'Assurance Maladie autorise explicitement le recours à un groupement d'employeurs prestataire pour l'emploi des assistants médicaux financés par l'aide collective, à condition que leur contrat de travail relève de la convention collective des personnels des cabinets médicaux. C'est le rôle que joue Mesdocs.",
  },
  {
    q: "Que devient le contrat de travail d'un assistant médical déjà en poste si le médecin rejoint un contrat collectif ?",
    a: "Son contrat de travail est transféré vers la société signataire du contrat collectif (ou vers un groupement d'employeurs prestataire comme Mesdocs), sous réserve de l'accord de l'assistant médical, par un avenant à son contrat.",
  },
  {
    q: "Que se passe-t-il en cas de résiliation ou de fin du contrat collectif ?",
    a: "Un délai de carence de 2 ans s'applique alors à chaque médecin du groupe avant de pouvoir signer un nouveau contrat, individuel ou collectif, sauf circonstances exceptionnelles étudiées avec le directeur de la caisse.",
  },
];

export default function AideCollectiveContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Qu'est-ce que l'aide collective à l'emploi d'assistants médicaux ?</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le dispositif collectif d'aide à l'emploi d'un ou plusieurs assistants médicaux est <strong>entré en vigueur le 25 février 2026</strong>, après validation par la commission paritaire nationale (CPN). Il s'agit d'une <strong>aide financière pérenne</strong> qui permet à un groupe de médecins généralistes associés dans une même structure — cabinet de groupe ou maison de santé pluriprofessionnelle (MSP) — de bénéficier ensemble du renfort d'un ou plusieurs assistants médicaux.
          </p>
          <p className="text-[16px] leading-[1.7] mb-4">
            Ce n'est plus chaque médecin qui signe séparément avec sa CPAM : c'est la société d'exercice (SCP, SCM ou SISA) qui signe un contrat collectif unique, tandis que chaque médecin associé qui souhaite en bénéficier signe un bulletin d'adhésion individuelle annexé au contrat.
          </p>
          <a
            href="https://www.ameli.fr/hauts-de-seine/medecin/exercice-liberal/vie-cabinet/aides-financieres/aide-emploi-assistants-medicaux-dans-les-cabinets/aide-collective-emploi-assistants-medicaux/aide-collective-assistants-medicaux-groupe-medecin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-[#1d67cd] hover:text-[#093e98] underline"
          >
            Source officielle : ameli.fr <ExternalLink size={13} />
          </a>
        </div>
      </section>

      {/* Structures éligibles */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Quelles structures peuvent signer un contrat collectif ?</h2>
          <p className="text-[16px] text-gray-600 mb-6 leading-[1.7]">
            Seule une société ayant une activité propre de soins, dont les associés sont des professionnels de santé en leur nom propre, peut signer. Une société d'exercice libéral (SEL) ne peut pas signer de contrat collectif.
          </p>
          <ul className="flex flex-col gap-4">
            {structures.map((s) => (
              <li key={s} className="flex items-start gap-4 bg-white rounded-xl border border-[#e4eaf5] p-5">
                <CheckCircle size={18} className="text-[#093e98] shrink-0 mt-0.5" />
                <span className="text-[15px] text-gray-700 leading-[1.6]">{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-[13px] text-gray-500 mt-4 leading-[1.6]">
            Une SCM ou une SCP dispose d'un numéro AM, comme tout offreur de soins conventionné. Une SISA est identifiée par un numéro Finess propre. Tous les médecins du groupe doivent être associés en leur nom propre au capital de la société et nommément désignés dans le contrat.
          </p>
        </div>
      </section>

      {/* Éligibilité */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Conditions d'éligibilité du groupe</h2>
          <div className="bg-white rounded-2xl border border-[#e4eaf5] p-7">
            <ul className="flex flex-col gap-3">
              {eligibilite.map((e) => (
                <li key={e} className="flex items-start gap-3 text-[15px] text-gray-700 leading-[1.6]">
                  <CheckCircle size={16} className="text-[#093e98] shrink-0 mt-0.5" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-center gap-4 bg-[#eef4ff] rounded-xl p-5 border border-[#cddcf8]">
            <Users size={28} className="text-[#093e98] shrink-0" />
            <p className="text-[15px] text-[#093e98] leading-[1.6]">
              <strong>Contrairement au dispositif individuel</strong>, l'aide collective est réservée aux médecins <strong>généralistes</strong> (hors médecins à exercice particulier). Les spécialistes ne sont pas éligibles à ce contrat collectif.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification des assistants */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Quelle qualification pour les assistants médicaux recrutés ?</h2>
          <p className="text-[16px] leading-[1.7]">
            Comme pour le contrat individuel, les assistants médicaux financés par l'aide collective doivent être titulaires du <strong>CQP Assistant Médical (RNCP n°36358)</strong>, sauf s'ils sont déjà infirmiers, aides-soignants ou auxiliaires de puériculture. À défaut, ils doivent obtenir le CQP dans les <strong>2 ans suivant leur embauche</strong>, en formation en alternance avec leur activité au cabinet ou à la MSP.
          </p>
        </div>
      </section>

      {/* Tableau montants */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-4">Quel montant d'aide par assistant médical ?</h2>
          <p className="text-[16px] text-gray-500 mb-8">Aide financière pérenne, par assistant médical à temps plein, versée à la société signataire.</p>
          <div className="overflow-x-auto rounded-xl border border-[#e4eaf5]">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="bg-[#093e98] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Année</th>
                  <th className="text-right px-6 py-4 font-semibold whitespace-nowrap">Aide par ETP</th>
                </tr>
              </thead>
              <tbody>
                {montants.map((row, i) => (
                  <tr key={row.annee} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f8ff]'}>
                    <td className="px-6 py-3.5 font-medium text-gray-800">{row.annee}</td>
                    <td className="px-6 py-3.5 text-right text-[#093e98] font-bold">{row.montant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-gray-500 italic mt-4 leading-[1.6]">
            À partir de la 3e année, le surcroît d'activité généré par le ou les assistants médicaux permet aux médecins du groupe de contribuer ensemble au financement de leurs assistants médicaux.
          </p>
          <p className="text-[13px] text-gray-400 mt-3">Source : ameli.fr — dispositif entré en vigueur le 25 février 2026</p>
        </div>
      </section>

      {/* ETP et docteurs juniors */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Combien de postes d'assistants médicaux le groupe peut-il financer ?</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le nombre de postes en équivalent temps plein (ETP) ne peut pas dépasser le <strong>nombre de médecins du groupe adhérents</strong> au contrat collectif.
          </p>
          <div className="bg-white rounded-2xl border border-[#e4eaf5] p-7">
            <p className="text-[15px] font-semibold text-[#093e98] mb-2">Bonus « docteurs juniors » à partir de novembre 2026</p>
            <p className="text-[15px] text-gray-700 leading-[1.7] mb-3">
              Si des médecins du groupe ont la qualité de maître de stage des universités (PAMSU) et accueillent un docteur junior (étudiant en fin de 3e cycle), le plafond d'ETP peut être augmenté de <strong>0,5 ETP par médecin PAMSU</strong>. Si la structure elle-même (une MSP par exemple) est agréée comme terrain de stage ambulatoire, ce bonus de 0,5 ETP s'applique pour chaque médecin du groupe.
            </p>
            <p className="text-[14px] text-gray-500 leading-[1.6] italic">
              Exemple : un groupe de 4 médecins, dont 2 PAMSU, souhaitant le maximum de 4 assistants médicaux, peut bénéficier de 5 ETP au total (4 + 0,5 × 2).
            </p>
          </div>
        </div>
      </section>

      {/* Objectifs de patientèle */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-4">Quels objectifs de patientèle pour le groupe ?</h2>
          <p className="text-[16px] text-gray-600 mb-8 leading-[1.7]">
            Pour chaque ETP d'assistant médical financé, le groupe dispose de <strong>2 ans</strong> pour augmenter collectivement sa patientèle :
          </p>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 mb-8">
            {objectifs.map((o) => (
              <div key={o.label} className="rounded-2xl border border-[#e4eaf5] p-7 bg-white text-center">
                <p className="text-[32px] font-bold text-[#093e98] mb-2">{o.valeur}</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">{o.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-4 bg-[#fff7ed] rounded-xl p-5 border border-[#fbd9a8] mb-4">
            <AlertTriangle size={22} className="text-[#b45309] shrink-0 mt-0.5" />
            <p className="text-[14px] text-[#92400e] leading-[1.6]">
              Si l'objectif n'est pas intégralement atteint à partir de la 3e année, l'aide de cette année (et des suivantes) est <strong>proratisée</strong>. Si la patientèle totale du groupe baisse par rapport au niveau de départ, la CPAM peut résilier le contrat en l'absence de solution — en revanche, repasser sous le seuil P30 en cours de contrat (par exemple après le départ d'un médecin) n'est <strong>pas</strong> à lui seul un motif de résiliation.
            </p>
          </div>
          <p className="text-[14px] text-gray-500 leading-[1.6]">
            Cas particulier : un médecin nouvellement installé (moins de 12 mois) doit atteindre, après 3 ans d'adhésion au contrat collectif, le 50e percentile national (P50) : <strong>1 045 patients médecin traitant</strong> et <strong>1 514 patients file active</strong>. L'objectif du groupe tient compte, en le réduisant, des patients déjà gagnés par d'anciens contrats individuels des médecins avant leur adhésion au collectif.
          </p>
        </div>
      </section>

      {/* Durée et vie du contrat */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Durée et vie du contrat collectif</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            Le contrat collectif est signé par le représentant légal de la société pour <strong>5 ans, renouvelables</strong>. Chaque médecin qui souhaite en bénéficier signe un bulletin d'adhésion individuelle, annexé au contrat — un associé peut choisir de ne pas y adhérer. Les médecins signataires restent libres d'entrer ou de sortir du contrat collectif à sa date anniversaire, sans incidence sur le nombre d'ETP choisi initialement.
          </p>
          <p className="text-[16px] leading-[1.7]">
            Pour signer un contrat collectif, tout contrat individuel antérieur des médecins du groupe doit impérativement être clos au préalable — le cumul entre contrat individuel et contrat collectif n'est pas possible.
          </p>
        </div>
      </section>

      {/* Gestion administrative et GE */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-5">Qui gère les fonds, et peut-on passer par un groupement d'employeurs ?</h2>
          <p className="text-[16px] leading-[1.7] mb-4">
            La société signataire perçoit directement les fonds de l'aide sur un compte bancaire français qui lui est propre. La répartition du temps de travail des assistants et du financement entre médecins est définie par les statuts ou le règlement intérieur de la société — la CPAM n'intervient pas dans ces différends internes.
          </p>
          <div className="mt-4 flex items-center gap-4 bg-[#eef4ff] rounded-xl p-5 border border-[#cddcf8]">
            <Users size={28} className="text-[#093e98] shrink-0" />
            <p className="text-[15px] text-[#093e98] leading-[1.6]">
              <strong>Point clé :</strong> l'Assurance Maladie autorise explicitement le recours à un <strong>groupement d'employeurs prestataire</strong> pour l'emploi des assistants médicaux financés par l'aide collective, à condition que leur contrat de travail relève de la convention collective des personnels des cabinets médicaux. C'est exactement le rôle que joue Mesdocs : la société du groupe reste signataire du contrat CPAM, Mesdocs reste l'employeur légal des assistants médicaux mis à disposition.
            </p>
          </div>
          <p className="text-[14px] text-gray-500 mt-6 mb-3">Documents à réunir pour la signature :</p>
          <ul className="flex flex-col gap-2">
            {documents.map((d) => (
              <li key={d} className="flex items-start gap-3 text-[14px] text-gray-600 leading-[1.6]">
                <CheckCircle size={14} className="text-[#093e98] shrink-0 mt-1" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Etapes */}
      <section className="bg-[#f5f8ff] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-light mb-8">Comment mettre en place l'aide collective avec Mesdocs ?</h2>
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
          <h2 className="text-[28px] font-light mb-8">Questions fréquentes sur l'aide collective</h2>
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
      <section className="py-10 px-6">
        <div className="max-w-[900px] mx-auto flex flex-wrap gap-4 text-[14px]">
          <Link href="/dispositif-cpam" className="text-[#1d67cd] underline hover:text-[#093e98]">Voir le dispositif CPAM individuel →</Link>
          <Link href="/assistant-medical-maison-de-sante" className="text-[#1d67cd] underline hover:text-[#093e98]">Assistant médical en MSP →</Link>
          <Link href="/groupement-employeurs-medecin-liberal" className="text-[#1d67cd] underline hover:text-[#093e98]">Comprendre le groupement d'employeurs →</Link>
          <Link href="/prendre-rendez-vous" className="text-[#1d67cd] underline hover:text-[#093e98]">Étudier l'aide collective pour mon groupe →</Link>
        </div>
      </section>
    </>
  );
}
