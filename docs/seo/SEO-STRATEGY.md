# Stratégie SEO — Mesdocs Groupement d'Employeurs
*Généré le 2026-05-07 | assistants-medicaux.com*

---

## 1. Portrait de l'entreprise

| Élément | Détail |
|---------|--------|
| **Nom** | Mesdocs Groupement d'Employeurs |
| **Domaine** | assistants-medicaux.com |
| **Type** | Groupement d'Employeurs (GE) |
| **Service** | Mise à disposition d'assistants médicaux pour médecins libéraux |
| **Financement** | Dispositif CPAM — aide de 19 000 à 38 000 €/an |
| **Adresse** | 24 rue Octave Feuillet — 75116 Paris |
| **Cible primaire** | Médecins libéraux (secteurs 1, 2, 3) |
| **Cible secondaire** | Candidats souhaitant devenir assistants médicaux |
| **Différenciation** | GE référencé ameli.fr, gestion administrative complète, accompagnement 5 ans |

---

## 2. Analyse concurrentielle

### Concurrents identifiés

| Concurrent | URL | Positionnement | Forces |
|------------|-----|----------------|--------|
| Devenir Assistante Médicale | devenirassistantemedicale.fr | Candidats | Design moderne, contenu riche |
| CHEM Santé | evenements.chem-sante.fr | GE médical | Notoriété régionale |
| Assistants Médicaux officiel | assistants-medicaux.fr | Informatif | Référence officielle |
| Groupama Santé | — | Financeur | Notoriété forte |
| Ameli.fr | ameli.fr/medecin | Source officielle | Autorité absolue |

### Écarts de contenu à combler

| Thème | Priorité | Manque actuel |
|-------|----------|---------------|
| Dispositif CPAM expliqué simplement | HAUTE | Pas de page dédiée |
| Processus de recrutement pas à pas | HAUTE | Information dispersée |
| Comparatif assistant vs secrétaire | MOYENNE | Absent |
| FAQ médecin | HAUTE | Insuffisante |
| Témoignages vidéo | MOYENNE | Absents |
| Blog / actualités | BASSE | Absent (phase 2) |

---

## 3. Recherche de mots-clés stratégiques

### Cluster 1 — Médecin cherche à recruter (PRIORITÉ 1)

| Mot-clé | Intention | Volume estimé | Difficulté | Page cible |
|---------|-----------|---------------|------------|------------|
| assistant médical médecin libéral | Info | 500–1 000/mois | Moyenne | / |
| recruter assistant médical | Transac. | 200–500/mois | Moyenne | /recrutement-assistant-medical |
| mise à disposition assistant médical | Info | 100–300/mois | Faible | /assistants-medicaux |
| groupement d'employeurs médecin | Info | 100–200/mois | Faible | / ou /assistants-medicaux |
| assistant médical CPAM | Info | 500–1 000/mois | Moyenne | /dispositif-cpam |

### Cluster 2 — Financement et dispositif (PRIORITÉ 2)

| Mot-clé | Intention | Volume estimé | Difficulté | Page cible |
|---------|-----------|---------------|------------|------------|
| dispositif assistant médical CPAM | Info | 200–500/mois | Moyenne | /dispositif-cpam |
| aide CPAM assistant médical | Info | 200–500/mois | Moyenne | /dispositif-cpam |
| avantages assistant médical | Info | 100–200/mois | Faible | /avantages-demarches |
| financement assistant médical | Info | 200–300/mois | Faible | /avantages-demarches |
| subvention assistant médical | Info | 100–200/mois | Faible | /avantages-demarches |

### Cluster 3 — Candidats (PRIORITÉ 3)

| Mot-clé | Intention | Volume estimé | Difficulté | Page cible |
|---------|-----------|---------------|------------|------------|
| devenir assistant médical | Info | 500–1 000/mois | Moyenne | /devenir-assistant-medical |
| formation assistant médical | Info | 300–500/mois | Moyenne | /devenir-assistant-medical |
| CQP assistant médical | Info | 100–300/mois | Faible | /devenir-assistant-medical |
| VAE assistant médical | Info | 100–200/mois | Faible | /devenir-assistant-medical |
| salaire assistant médical | Info | 300–500/mois | Faible | /devenir-assistant-medical |

---

## 4. Stratégie de contenu E-E-A-T

### Signaux d'Expérience et d'Expertise à intégrer

| Signal | Action |
|--------|--------|
| **Référencement ameli.fr** | Logo Ameli visible sur chaque page (TrustBand) |
| **Chiffres vérifiables** | 7 420 médecins, 5 ans, 38 000 €/an avec sources |
| **Témoignages nominatifs** | Prénom, spécialité, ville des médecins témoins |
| **Adresse réelle** | 75116 Paris — vérifiable sur Google Maps |
| **Numéro de téléphone** | 09 70 68 22 20 — cliquable partout |
| **Partenariats officiels** | CPAM, VAE Formation |
| **FAQ experte** | Questions précises, réponses légales/techniques |

### Plan de contenu E-E-A-T phase 1

1. **Page /dispositif-cpam** : contenu factuel sur l'Avenant 7 de la convention médicale 2023 avec références officielles
2. **Témoignages** : 3 médecins réels avec spécialité et ville
3. **Tableau de financement** : reproduire le tableau officiel CPAM avec source
4. **FAQ** : 5 à 8 questions par page principale

---

## 5. Stratégie technique

### Performance cible (Core Web Vitals)

| Métrique | Cible |
|----------|-------|
| LCP | < 2,5s |
| CLS | < 0,1 |
| INP | < 200ms |
| TTI | < 3,5s |

### Checklist technique prioritaire

- [ ] `next.config.ts` — redirections 301 complètes
- [ ] `app/sitemap.ts` — sitemap dynamique Next.js
- [ ] `app/robots.ts` — robots.txt
- [ ] Balises `canonical` sur chaque page
- [ ] `og:title`, `og:description`, `og:image` sur toutes les pages
- [ ] Schema.org : `Organization` + `LocalBusiness` + `FAQPage` + `Service`
- [ ] Images : WebP, `width`/`height` déclarés, `alt` descriptifs
- [ ] Police : `font-display: swap` (Work Sans via Google Fonts — déjà configuré)
- [ ] `lang="fr"` sur `<html>` (déjà présent)

### Schema.org à implémenter

| Page | Schemas |
|------|---------|
| / | Organization, LocalBusiness, FAQPage |
| /assistants-medicaux | Service, FAQPage |
| /avantages-demarches | FAQPage |
| /dispositif-cpam | FAQPage |
| /recrutement-assistant-medical | Service |
| /devenir-assistant-medical | EducationalOrganization (partiel), FAQPage |
| /contact | ContactPage, LocalBusiness |

---

## 6. Tracking & Analytics

### Outils à configurer avant mise en prod

| Outil | Configuration |
|-------|---------------|
| Google Analytics 4 | Implémenter via GTM ou directement dans layout.tsx |
| Google Tag Manager | Conteneur principal, événements : formulaire envoyé, CTA cliqué, appel téléphonique |
| Google Search Console | Vérifier le domaine, soumettre sitemap |
| Hotjar (optionnel) | Heatmaps page accueil + page contact |

### Événements de conversion à tracker

1. `form_submit` — tout formulaire de contact
2. `phone_click` — clic sur le numéro de téléphone
3. `rdv_click` — clic CTA "Prendre rendez-vous"
4. `cta_click` — clic sur les boutons CTA principaux
5. `video_play` — lecture de la vidéo Ameli

---

## 7. Indicateurs de performance (KPIs)

| Métrique | Baseline | 3 mois | 6 mois | 12 mois |
|----------|----------|--------|--------|---------|
| Trafic organique | 0 (nouveau domaine) | 200/mois | 800/mois | 2 500/mois |
| Positions TOP 10 | 0 | 5 | 15 | 30 |
| Positions TOP 3 | 0 | 1 | 5 | 12 |
| Pages indexées | 0 | 8 | 8 | 10+ |
| Core Web Vitals | — | LCP<2.5 | LCP<2.5 | LCP<2.5 |
| Taux de conversion formulaire | — | 2% | 3% | 4% |

---

## 8. Risques et atténuations

| Risque | Probabilité | Impact | Atténuation |
|--------|-------------|--------|-------------|
| Perte de positionnement lors de migration Wix → Next.js | HAUTE | MOYEN | Redirections 301 + sitemap soumis avant migration |
| Aucun backlink au départ | HAUTE | MOYEN | Profil ameli.fr existant, page LinkedIn, partenaires |
| Nouveau domaine = sandbox Google | HAUTE | MOYEN | Contenu riche dès le lancement, pas de migration hâtive |
| Pages Wix encore indexées après migration | MOYENNE | FORT | Redirections 301 + désindexation GSC si nécessaire |
| Duplicate content Wix/Next.js pendant transition | HAUTE | FORT | Ne pas basculer le DNS avant que Next.js soit prêt |
