import Image from 'next/image';
import Link from 'next/link';

const advantages = [
  {
    icon: '/assets/icone_flaticon_papier.png',
    title: 'Allègement du Travail des Médecins',
    desc: "Les assistants médicaux prennent en charge des tâches administratives et de préparation des consultations, permettant aux médecins de se concentrer davantage sur les soins aux patients.",
  },
  {
    icon: '/assets/icone_flaticon_patient.png',
    title: 'Amélioration de la Coordination des Soins',
    desc: "Ils facilitent la coordination avec d'autres professionnels de santé, assurant une meilleure gestion du parcours de soins des patients.",
  },
  {
    icon: '/assets/icone_flaticon_bourse.png',
    title: 'Flexibilité et Adaptabilité',
    desc: "Les missions des assistants médicaux peuvent être personnalisées en fonction des besoins spécifiques du cabinet et des patients.",
  },
  {
    icon: '/assets/icone_flaticon_efficacite.png',
    title: "Contribution à l'efficacité globale du cabinet",
    desc: "En gérant efficacement les tâches administratives et en assistant dans le déroulement des consultations médicales, les assistants contribuent à l'amélioration globale de l'efficacité du cabinet.",
  },
];

function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="block text-[16px] text-[#1d67cd] underline py-0.5 hover:text-[#093e98]">{children}</Link>;
}

function SubTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h3 id={id} className="text-[18px] text-[#1d67cd] mt-8 mb-2.5 scroll-mt-24">{children}</h3>;
}

function BodyP({ children }: { children: React.ReactNode }) {
  return <p className="text-[16px] leading-[1.7] mb-2.5">{children}</p>;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <p className="text-[16px] leading-[1.7] mb-3">{children}</p>;
}

export default function AvantagesContent() {
  return (
    <section className="py-14 scroll-mt-[68px]" id="avantages">
      <div className="max-w-[900px] mx-auto px-6">

        {/* Table of contents */}
        <div className="bg-white border border-[#e4eaf5] rounded-lg px-8 py-7 mb-12">
          <p className="text-[16px] font-normal mb-1">Vous souhaitez en savoir plus ?</p>
          <p className="text-[16px] text-gray-700 mb-4">Trouvez des informations plus détaillées sur le dispositif en explorant les sections spécifiques suivantes :</p>
          <p className="text-[10px] uppercase tracking-wide mt-3 mb-1">LES AVANTAGES DE L&apos;EMPLOI D&apos;UN ASSISTANT MÉDICAL</p>
          <SectionLink href="#benefices">&gt; Les bénéfices de l&apos;intégration d&apos;un Assistant Médical</SectionLink>
          <SectionLink href="#organisation">&gt; Une organisation pensée pour votre cabinet</SectionLink>
          <SectionLink href="#subvention">&gt; Subvention et Objectif de Progression de la Patientèle</SectionLink>
          <p className="text-[10px] uppercase tracking-wide mt-4 mb-1">LES DÉMARCHES</p>
          <SectionLink href="#rdv">&gt; Premier Rendez-vous</SectionLink>
          <SectionLink href="#recrutement">&gt; Gestion intégrale du Recrutement et de la Formation</SectionLink>
          <SectionLink href="#financement">&gt; Financement de l&apos;Assistant Médical</SectionLink>
          <SectionLink href="#suivi">&gt; Suivi et évaluation</SectionLink>
        </div>

        {/* Avantages grid */}
        <h2 className="text-[28px] font-light mb-3.5 scroll-mt-24" id="benefices">Les Avantages de l&apos;Emploi d&apos;un Assistant Médical</h2>
        <p className="text-[18px] mb-6">L&apos;intégration d&apos;un assistant médical dans un cabinet médical offre de nombreux avantages significatifs :</p>

        <div className="grid grid-cols-4 gap-5 mb-10 text-center max-md:grid-cols-2">
          {advantages.map((a) => (
            <div key={a.title} className="flex flex-col items-center gap-2.5">
              <Image src={a.icon} alt={a.title} width={90} height={90} className="object-contain" />
              <p className="text-[15px] font-medium leading-[1.3]">{a.title}</p>
              <p className="text-[15px] leading-[1.5] text-left">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Organisation */}
        <SubTitle id="organisation">1. <span className="text-[#1d67cd]">Une organisation pensée pour votre cabinet</span></SubTitle>
        <BodyP>L&apos;emploi d&apos;un assistant médical est pensé pour s&apos;adapter à vos pratiques et à la réalité de votre patientèle :​</BodyP>
        <BodyP><strong>Personnalisation des Missions</strong><br />Chaque médecin a la liberté de définir les missions de l&apos;assistant médical, en fonction de ses pratiques et de l&apos;organisation de son cabinet.</BodyP>
        <BodyP><strong>Adaptabilité à la Taille de la Patientèle</strong><br />Les engagements pris pour accueillir de nouveaux patients sont proportionnels à la taille de la patientèle existante.</BodyP>

        {/* Subvention */}
        <SubTitle id="subvention">2. <span className="text-[#1d67cd]">Subvention et Objectif de Progression de la Patientèle</span></SubTitle>
        <BodyP>L&apos;aide à l&apos;emploi d&apos;un assistant médical comprend un système de financement et un objectif clair de progression de la patientèle :</BodyP>
        <BodyP><strong>Financement</strong><br />L&apos;aide financière varie entre 19 000 et 38 000 euros la première année et entre 11 000 et 22 000 euros à partir de la troisième année, selon le temps de travail de l&apos;assistant.</BodyP>
        <BodyP>Cette aide est renouvelable tous les cinq ans, avec une majoration possible pour les médecins ayant les plus grandes patientèles.</BodyP>
        <BodyP><strong>Renouvellement</strong></BodyP>
        <BodyP><strong>Objectif de Progression Mesurable</strong><br />L&apos;objectif de progression de la patientèle est déterminé en fonction de la taille actuelle de la patientèle du médecin.</BodyP>

        {/* Tableau des versements */}
        <div className="my-8 overflow-x-auto rounded-xl border border-[#e4eaf5] shadow-[0_2px_12px_rgba(9,62,152,.06)]">
          <table className="w-full text-[15px] border-collapse">
            <thead>
              <tr className="bg-[#093e98] text-white">
                <th className="text-left px-6 py-4 font-semibold">Récapitulatif des versements par année<br /><span className="font-normal text-white/80 text-[13px]">(pour un poste à temps plein)</span></th>
                <th className="text-right px-6 py-4 font-semibold whitespace-nowrap">Montants maximaux<br /><span className="font-normal text-white/80 text-[13px]">de l&apos;aide (euros)</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: '1re année', amount: '38 000 €' },
                { label: '2e année', amount: '28 000 €' },
                { label: '3e année et suivantes', amount: '22 000 €' },
                { label: 'Montant majoré pour les médecins situés entre P90 et P95', amount: '26 000 €' },
                { label: 'Montant fixe pour les médecins ayant une patientèle les situant en P95 et au-delà', amount: '38 000 €' },
              ].map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f8ff]'}>
                  <td className="px-6 py-3.5 text-gray-800 leading-[1.5]">{row.label}</td>
                  <td className="px-6 py-3.5 text-right font-semibold text-[#093e98] whitespace-nowrap">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Démarches */}
        <h2 className="text-[28px] font-light mt-14 mb-4 scroll-mt-24" id="demarches">Recruter un assistant médical, les démarches en détail</h2>
        <p className="text-[18px] mb-6">Conscients du rôle essentiel des assistants médicaux dans l&apos;organisation des cabinets, notre Groupement d&apos;Employeurs facilite leur intégration en prenant en charge, pour votre compte, l&apos;ensemble des aspects liés à l&apos;emploi : recrutement, gestion administrative, paie, formation et suivi.</p>

        {/* Étape 1 */}
        <SubTitle id="rdv">1. <span className="text-[#1d67cd]">Premier rendez-vous : Présentation du GE et Évaluation du besoin</span></SubTitle>
        <Bullet>• <strong>Mise à disposition de personnel :</strong> Le GE Mesdocs assure la mise à disposition du personnel en prenant en charge la gestion administrative et contractuelle des salariés pour simplifier la vie des professionnels de santé.</Bullet>
        <Bullet>• <strong>Le rôle de l&apos;adhérent :</strong> L&apos;adhérent est responsable de l&apos;organisation opérationnelle, incluant la planification du travail, et la gestion des missions.</Bullet>
        <Bullet>• <strong>Examen du profil de l&apos;assistant médical souhaité :</strong> Établissement d&apos;un profil détaillé pour le poste, incluant les compétences, les qualifications et les expériences requises. Planification de l&apos;intégration du nouvel employé, avec un accent sur l&apos;adaptation au sein de l&apos;équipe existante et la culture de la structure.</Bullet>

        {/* Étape 2 */}
        <SubTitle id="recrutement">2. <span className="text-[#1d67cd]">Gestion intégrale du Recrutement et de la Formation de l&apos;Assistant Médical</span></SubTitle>
        <Bullet>• <strong>Conformité Légale et Gestion des Ressources Humaines :</strong> Nous prenons en charge tous les aspects du recrutement de l&apos;assistant médical, y compris la conformité avec le droit du travail et la convention collective.</Bullet>
        <BodyP>Cela comprend la gestion minutieuse des contrats de travail, des périodes d&apos;essai, des éventuelles procédures de licenciement, des congés et de la grille salariale.</BodyP>
        <Bullet>• <strong>Formalités Administratives Complètes :</strong> Notre GE s&apos;occupe de toutes les formalités administratives auprès de l&apos;Urssaf et d&apos;autres entités, garantissant une gestion sans faille des déclarations, de la paie, des congés payés, des absences pour maladie ou maternité.</Bullet>
        <Bullet>• <strong>Formation et Certification Professionnelle :</strong></Bullet>
        <BodyP>Nous accompagnons la formation de l&apos;assistant médical en partenariat avec nos partenaires de formation et l&apos;OPCO EP afin de garantir l&apos;obtention du CQP dans les délais requis.</BodyP>
        <BodyP>Grâce à notre partenaire <a href="https://vae-formation.com/" target="_blank" rel="noopener" className="text-[#1d67cd] underline hover:text-[#093e98]">VAE Formation</a>, nous proposons également un accompagnement en VAE CQP Assistant Médical permettant la reconnaissance des compétences et l&apos;obtention d&apos;une certification professionnelle adaptée.</BodyP>

        {/* Étape 3 */}
        <SubTitle id="financement">3. <span className="text-[#1d67cd]">Financement de l&apos;Assistant Médical</span></SubTitle>
        <Bullet>• <strong>Financement adaptatif :</strong> Le financement, variant selon la durée d&apos;emploi de l&apos;assistant médical, est conçu pour soutenir efficacement le salaire de l&apos;assistant, qu&apos;il soit à mi-temps ou à temps plein.</Bullet>
        <Bullet>• <strong>Échelle de financement :</strong> L&apos;aide varie de 19 000 à 38 000 euros la première année, et de 11 000 à 22 000 euros dès la troisième année.</Bullet>
        <Bullet>• <strong>Renouvellement de l&apos;aide :</strong> Cette aide est renouvelable à l&apos;échéance du contrat quinquennal avec l&apos;Assurance Maladie, avec possibilité de majoration pour les médecins traitant de nombreux patients.</Bullet>

        {/* Étape 4 */}
        <SubTitle id="suivi">4. <span className="text-[#1d67cd]">Suivi et évaluation</span></SubTitle>
        <Bullet>• <strong>Évaluations semestrielles :</strong> Mise en place d&apos;un système d&apos;évaluation interne pour examiner les performances et l&apos;impact de l&apos;assistant médical sur la qualité des soins et l&apos;efficacité opérationnelle.</Bullet>
        <Bullet>• <strong>Formation continue de l&apos;assistant médical :</strong> Planification de sessions de formation régulières pour l&apos;assistant médical, en mettant l&apos;accent sur le développement des compétences et l&apos;adaptation aux évolutions du secteur de la santé.</Bullet>

      </div>
    </section>
  );
}
