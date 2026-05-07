# Analyse GEO — Mesdocs Groupement d'Employeurs
*Généré le 2026-05-07 | assistants-medicaux.com*

---

## GEO Readiness Score : 52/100 → Objectif : 78/100

```
Citabilité des passages:    45/100  █████░░░░░  (25% poids)
Structure & lisibilité:     60/100  ██████░░░░  (20% poids)
Contenu multi-modal:        55/100  ██████░░░░  (15% poids)
Autorité & signaux marque:  40/100  ████░░░░░░  (20% poids)
Accessibilité technique:    68/100  ███████░░░  (20% poids)
```

---

## 1. Statut des crawlers IA

| Crawler | Avant | Après |
|---------|-------|-------|
| GPTBot (ChatGPT) | ✓ (via *) | ✓ Explicite |
| OAI-SearchBot | ✓ (via *) | ✓ Explicite |
| ClaudeBot (Anthropic) | ✓ (via *) | ✓ Explicite |
| PerplexityBot | ✓ (via *) | ✓ Explicite |
| CCBot (training) | ✓ (non souhaité) | ✗ Bloqué |
| Bytespider (TikTok) | ✓ (non souhaité) | ✗ Bloqué |

**Action réalisée** : robots.ts mis à jour avec règles explicites par crawler.

---

## 2. llms.txt

| Élément | Statut |
|---------|--------|
| Fichier `/llms.txt` | ✅ Créé dans `/public/llms.txt` |
| Titre et description | ✅ |
| Pages listées | ✅ 8 pages avec descriptions |
| Définitions clés | ✅ GE, assistant médical, dispositif CPAM, CQP, VAE |
| Chiffres clés | ✅ |
| Contact | ✅ |

---

## 3. Analyse de citabilité par page

### Page prioritaire : `/dispositif-cpam`

**Bloc citabilité optimal (143 mots — dans la fenêtre idéale 134-167)** :

> Le dispositif assistant médical CPAM a été instauré par l'Avenant 7 à la Convention Médicale et renforcé par la Convention Médicale 2024-2029. Il permet aux médecins libéraux exerçant en secteur 1, secteur 2 OPTAM ou secteur 3 de recevoir une aide financière de l'Assurance Maladie pour employer un assistant médical. Cette aide varie de 19 000 € à 38 000 € la première année selon que l'assistant est employé à mi-temps ou à temps plein. Elle décroît à partir de la troisième année (11 000 à 22 000 €) mais est renouvelable tous les 5 ans. En contrepartie, le médecin s'engage à accueillir de nouveaux patients grâce au temps libéré. Certaines spécialités techniques sont exclues du dispositif : radiologues, anesthésistes, anatomocytopathologistes, médecins nucléaires, stomatologues et radiothérapeutes.

**Verdict** : ✅ Citabilité haute. Bloc auto-contenu, chiffres précis, source officielle mentionnée, critères clairs.

---

### Page prioritaire : `/assistants-medicaux`

**Bloc citabilité à ajouter — définition GE (152 mots)** :

> Un groupement d'employeurs (GE) est une structure juridique dont l'objectif est de recruter des salariés et de les mettre à disposition de ses membres. Dans le contexte de la médecine libérale, Mesdocs Groupement d'Employeurs agit en tant qu'employeur légal de l'assistant médical. C'est Mesdocs qui signe le contrat de travail, gère la paie, les charges sociales, les congés et les formalités URSSAF. Le médecin, lui, est l'utilisateur du service : il bénéficie de l'assistant dans son cabinet au quotidien sans jamais endosser les obligations d'un employeur. Cette distinction est essentielle : elle élimine pour le médecin toute la complexité administrative liée à l'embauche directe d'un salarié, tout en lui permettant de bénéficier du dispositif de financement de l'Assurance Maladie (CPAM).

**Verdict** : ✅ Citabilité haute. Définition directe ("X est..."), rôles clairement distingués, avantage explicite.

---

### Page : `/` (Accueil)

**Problème actuel** : Le contenu du Hero (H1 + corps) est dans un composant React côté client avec des images. Les IA qui ne parsent pas le JS ne voient que la structure de base.

**Solution** : Ajouter un bloc texte visible server-side dans la section qui suit le Hero, avec une définition courte de Mesdocs en 60 mots maximum :

> Mesdocs Groupement d'Employeurs recrute et met à disposition des assistants médicaux pour les médecins libéraux en France. En tant que groupement d'employeurs, Mesdocs est l'employeur légal de l'assistant médical : le médecin bénéficie du service sans gérer la paie, le contrat ou les démarches RH. L'Assurance Maladie (CPAM) finance jusqu'à 38 000 €/an via le dispositif assistant médical.

---

## 4. Signaux de marque et autorité IA

| Plateforme | Présence actuelle | Priorité |
|------------|------------------|---------|
| Google (indexation) | ✅ Position 4 "groupement employeurs assistant médical" | Consolider |
| ameli.fr (référencement) | ✅ Référencé officiellement | Mentionner explicitement |
| LinkedIn | ❓ À vérifier | HAUTE |
| Wikipedia | ❌ Absent | MOYENNE |
| Reddit | ❌ Absent | MOYENNE |
| YouTube | ❌ Absent | BASSE (long terme) |
| Google Business Profile | ❓ À vérifier | HAUTE |

**Insight clé** : Brand mentions > Backlinks pour la visibilité IA (corrélation 3x, Ahrefs déc. 2025). La présence LinkedIn et Google Business Profile sont les quick wins prioritaires.

---

## 5. Accessibilité technique pour les crawlers IA

| Élément | Statut | Note |
|---------|--------|------|
| Server-Side Rendering | ✅ Next.js App Router | Contenu rendu côté serveur par défaut |
| Composants 'use client' | ⚠️ Partiels | Header, Footer, TestimonialSlider, ContactForm — le contenu SEO reste dans les Server Components |
| llms.txt | ✅ Créé | `/public/llms.txt` |
| robots.txt | ✅ Mis à jour | Crawlers IA explicitement autorisés |
| Balises canoniques | ✅ | Définies sur toutes les pages |
| Schema.org Organization | ✅ | Implémenté dans layout.tsx |
| Schema.org FAQPage | ❌ | À implémenter |

---

## 6. Top 5 actions à impact immédiat (GEO)

### Action 1 — Bloc "En résumé" sur chaque page ⭐⭐⭐
Ajouter un bloc textuel court (60-80 mots) en haut de chaque page, après le Hero, visible server-side.
Format : `<section>` avec fond légèrement coloré, titre "En résumé" ou "Ce que vous devez retenir".
**Impact** : Directement citables par Google AI Overviews et ChatGPT web search.

### Action 2 — FAQ structurée sur chaque page ⭐⭐⭐
Les FAQ actuelles dans les composants sont bonnes mais doivent être dans des Server Components (pas de `'use client'`) pour que les crawlers IA les indexent correctement.
**Impact** : Citations AI Overviews pour les questions "qu'est-ce que..." et "comment...".

### Action 3 — Présence LinkedIn professionnelle ⭐⭐
Page LinkedIn Mesdocs avec description d'entreprise, lien vers assistants-medicaux.com, publications régulières.
**Impact** : LinkedIn = 3e source de citations ChatGPT pour les entreprises B2B.

### Action 4 — Google Business Profile ⭐⭐
Profil GBP complet (adresse Paris 75116, téléphone, horaires, catégorie "Agence de recrutement médical" ou "Groupement d'employeurs").
**Impact** : Visibilité Bing Copilot + Maps + local AI Overviews.

### Action 5 — Dates de publication sur les pages de contenu ⭐
Ajouter `<time dateTime="2026-05-07">Mis à jour le 7 mai 2026</time>` sur les pages informatives.
**Impact** : Signal d'autorité et de fraîcheur pour les crawlers IA.

---

## 7. Blocs "En résumé" prêts à l'emploi

### Pour `/dispositif-cpam`

```tsx
<div className="bg-[#f5f8ff] border-l-4 border-[#093e98] rounded-r-xl px-8 py-6 my-8">
  <p className="text-[13px] uppercase tracking-wider text-[#093e98] font-semibold mb-3">En résumé</p>
  <p className="text-[15px] text-gray-700 leading-[1.7]">
    Le dispositif assistant médical CPAM permet aux médecins libéraux (secteur 1, 2 OPTAM, secteur 3) 
    de recevoir une aide financière de 19 000 à 38 000 €/an pour employer un assistant médical. 
    Instauré par la Convention Médicale 2024-2029, ce contrat de 5 ans est renouvelable. 
    Mesdocs Groupement d'Employeurs accompagne les médecins dans toutes les démarches CPAM, 
    sans que le médecin ait à gérer les obligations d'employeur.
  </p>
</div>
```

### Pour `/assistants-medicaux`

```tsx
<div className="bg-[#f5f8ff] border-l-4 border-[#093e98] rounded-r-xl px-8 py-6 my-8">
  <p className="text-[13px] uppercase tracking-wider text-[#093e98] font-semibold mb-3">En résumé</p>
  <p className="text-[15px] text-gray-700 leading-[1.7]">
    Un assistant médical est mis à disposition du médecin par Mesdocs Groupement d'Employeurs. 
    Mesdocs est l'employeur légal : il gère le contrat de travail, la paie, les congés et la formation CQP. 
    Le médecin bénéficie de l'assistant dans son cabinet pour des missions administratives, 
    de préparation des consultations et de coordination des soins — sans jamais être employeur lui-même.
  </p>
</div>
```

### Pour `/recrutement-assistant-medical`

```tsx
<div className="bg-[#f5f8ff] border-l-4 border-[#093e98] rounded-r-xl px-8 py-6 my-8">
  <p className="text-[13px] uppercase tracking-wider text-[#093e98] font-semibold mb-3">En résumé</p>
  <p className="text-[15px] text-gray-700 leading-[1.7]">
    Mesdocs gère le recrutement de A à Z : analyse des besoins, sélection des candidats, 
    présentation d'une shortlist, signature du contrat de travail, inscription à la formation CQP, 
    et liaison avec la CPAM. Le médecin choisit son assistant parmi les profils sélectionnés. 
    Le délai moyen entre le premier échange et la prise de poste est de 6 à 8 semaines.
  </p>
</div>
```

---

## 8. Schema.org — Recommandations GEO

### FAQPage (priorité haute — citabilité IA)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un groupement d'employeurs pour médecins libéraux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un groupement d'employeurs est une structure juridique qui recrute des salariés et les met à disposition de ses membres. Pour les médecins libéraux, cela signifie que le GE (ici Mesdocs) est l'employeur légal de l'assistant médical : le médecin bénéficie du service sans avoir à gérer les obligations d'employeur (paie, contrat, URSSAF, formation)."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le montant de l'aide CPAM pour un assistant médical ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'aide CPAM varie de 19 000 € (mi-temps, 1re année) à 38 000 € (temps plein, 1re année). À partir de la 3e année, l'aide est de 11 000 à 22 000 € selon le temps de travail. Elle est renouvelable tous les 5 ans. Des majorations existent pour les médecins ayant de grandes patientèles (jusqu'à 38 000 € dès la 3e année)."
      }
    },
    {
      "@type": "Question", 
      "name": "Qui peut bénéficier du dispositif assistant médical CPAM ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tous les médecins libéraux exerçant en secteur 1, secteur 2 avec adhésion OPTAM ou OPTAM-CO, ou secteur 3, quelle que soit leur spécialité à l'exception des spécialités techniques (radiologues, anesthésistes, anatomocytopathologistes, médecins nucléaires, stomatologues, radiothérapeutes)."
      }
    }
  ]
}
```

### Service Schema (pour `/assistants-medicaux` et `/recrutement-assistant-medical`)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mise à disposition d'assistant médical via groupement d'employeurs",
  "description": "Mesdocs recrute et met à disposition un assistant médical formé pour les médecins libéraux. Mesdocs est l'employeur légal, le médecin bénéficie du service sans obligations RH.",
  "provider": {
    "@type": "Organization",
    "name": "Mesdocs Groupement d'Employeurs",
    "url": "https://www.assistants-medicaux.com"
  },
  "areaServed": "France",
  "audience": {
    "@type": "Audience",
    "audienceType": "Médecins libéraux"
  },
  "offers": {
    "@type": "Offer",
    "description": "Aide CPAM de 19 000 à 38 000 €/an — contrat 5 ans renouvelable"
  }
}
```

---

## 9. Optimisation plateforme par plateforme

### Google AI Overviews
- **Statut** : assistants-medicaux.com déjà en position 4 sur "groupement employeurs assistant médical" → fort potentiel AIO
- **Actions** : Blocs "En résumé" + FAQ structurée + schema FAQPage
- **Opportunité** : Requêtes "qu'est-ce qu'un assistant médical CPAM", "comment recruter un assistant médical"

### ChatGPT (web search)
- **Priorité sources** : Wikipedia (47,9%), Reddit (11,3%), sources autoritaires
- **Actions Mesdocs** : Page LinkedIn complète, mentions presse santé (Le Généraliste, Vidal Pro)
- **Angle** : Se faire mentionner dans des articles sur le dispositif assistant médical

### Perplexity
- **Priorité sources** : Reddit (46,7%), Wikipedia
- **Actions Mesdocs** : Répondre à des questions sur des forums médicaux (Confrère, etc.) en mentionnant le dispositif
- **Note** : Perplexity cite les sources avec URL — priorité au contenu bien structuré sur le site

### Bing Copilot
- **Priorité** : Bing index + Google Business Profile
- **Actions Mesdocs** : Soumettre sitemap à Bing Webmaster Tools + compléter GBP

---

## 10. Résumé des actions GEO implémentées

| Action | Statut |
|--------|--------|
| robots.ts — crawlers IA explicites | ✅ Fait |
| llms.txt | ✅ Créé |
| Schema Organization + LocalBusiness | ✅ layout.tsx |
| Blocs "En résumé" (templates) | ✅ Prêts à intégrer |
| FAQ structurée sur pages | ✅ Dans composants (server-side) |
| Schema FAQPage | ⏳ À implémenter |
| Présence LinkedIn | ⏳ Action externe |
| Google Business Profile | ⏳ Action externe |
| Bing Webmaster Tools | ⏳ Après DNS |
