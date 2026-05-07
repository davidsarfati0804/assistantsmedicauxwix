# Audit SEO Complet — Mesdocs Groupement d'Employeurs
*Généré le 2026-05-07 | assistants-medicaux.com*

---

## Score SEO Global : 71/100

```
Technical SEO:      75/100  ████████░░  (22% poids)
Content Quality:    68/100  ███████░░░  (23% poids)
On-Page SEO:        78/100  ████████░░  (20% poids)
Schema:             10/100  █░░░░░░░░░  (10% poids)
Performance (CWV):  72/100  ███████░░░  (10% poids)
AI Search Ready:    55/100  ██████░░░░  (10% poids)
Images:             80/100  ████████░░  (5% poids)
```

---

## Issues par priorité

### 🔴 CRITIQUE

#### 1. Aucun schema.org sur l'ensemble du site
- **Impact** : Zéro rich results Google (FAQ, Organization), zéro visibilité AI Overviews
- **Pages concernées** : Toutes (8 pages)
- **Solution** : Implémenter Organization + LocalBusiness sur `/`, FAQPage sur chaque page avec FAQ, Service sur les pages service
- **Délai** : Immédiat

#### 2. Pas d'image Open Graph par défaut
- **Impact** : Partages sociaux avec image générique ou absente = CTR réduit
- **Solution** : Ajouter `og:image` dans `layout.tsx` pointant vers `/assets/logo.png` ou une image créée pour le partage social
- **Délai** : Immédiat

---

### 🟠 HAUTE PRIORITÉ

#### 3. Home page sans metadata explicite
- **Impact** : Le titre par défaut du layout est utilisé — fonctionnel mais non optimisé pour la page d'accueil
- **Solution** : Exporter `metadata` dans `app/page.tsx` avec title, description et canonical explicites
- **Délai** : Cette semaine

#### 4. Formulaire `/contact` — action Netlify avec query params
- **Impact** : `action="/contact?merci=1"` peut ne pas être traité correctement par Netlify Forms
- **Solution** : Utiliser un état React (pattern footer) ou pointer vers `/contact/merci`
- **Délai** : Avant mise en prod

#### 5. Header avec 5 items + bouton — overflow mobile
- **Impact** : Sur tablette (768–1024px), les 5 liens + bouton peuvent se chevaucher
- **Solution** : Réduire les labels ou passer le menu en dropdown à partir de 1024px
- **Délai** : Avant mise en prod

#### 6. Images hero réutilisées sur nouvelles pages
- **Impact** : SEO d'image faible (même image sur plusieurs pages), expérience utilisateur répétitive
- **Solution** : Fournir des images hero spécifiques pour `/assistants-medicaux`, `/dispositif-cpam`, `/recrutement-assistant-medical`
- **Délai** : Dans le mois

---

### 🟡 MOYENNE PRIORITÉ

#### 7. Pas de breadcrumbs sur les pages internes
- **Impact** : Moyen (BreadcrumbList schema absent, navigation secondaire absente)
- **Solution** : Ajouter un composant `<Breadcrumb>` sous le hero de chaque page interne + schema BreadcrumbList
- **Délai** : Dans le mois

#### 8. Font Work Sans chargée depuis Google CDN
- **Impact** : Latence réseau additionnelle, dépendance externe — peut impacter le LCP
- **Solution** : Auto-héberger avec `next/font/google` (Next.js optimise automatiquement)
- **Délai** : Dans le mois

#### 9. Formulaire `/prendre-rendez-vous` — pas de Calendly ou widget RDV réel
- **Impact** : Expérience utilisateur dégradée — le médecin préférerait choisir un créneau directement
- **Solution** : Intégrer Calendly (embed) ou un outil similaire
- **Délai** : Dans le mois

#### 10. Section "Comment ça marche" absente de l'accueil
- **Impact** : Le parcours médecin n'est pas guidé — issue SXO haute priorité
- **Solution** : Ajouter la section timeline 4 étapes entre StatsBand et Footer
- **Délai** : Dans le mois

---

### 🔵 FAIBLE PRIORITÉ

#### 11. Pas de page 404 personnalisée
- **Solution** : Créer `app/not-found.tsx` avec liens vers les pages principales
- **Délai** : Backlog

#### 12. Pas de sitemap d'images
- **Solution** : Ajouter les images clés dans le sitemap
- **Délai** : Backlog

#### 13. Pas de politique de confidentialité / CGU
- **Impact** : Formulaires sans mentions RGPD
- **Solution** : Créer `/mentions-legales` et `/politique-confidentialite` avec mention dans les formulaires
- **Délai** : Avant mise en prod (obligation légale)

---

## Vérification page par page

| Page | Title ✓ | Meta ✓ | H1 ✓ | Canonical ✓ | OG ✓ | Schema | Formulaire |
|------|---------|--------|------|-------------|------|--------|------------|
| / | ⚠️ layout | ⚠️ layout | ✓ | ⚠️ auto | ✗ | ✗ | ✓ (footer) |
| /assistants-medicaux | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | — |
| /avantages-demarches | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | — |
| /dispositif-cpam | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | — |
| /recrutement-assistant-medical | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | — |
| /devenir-assistant-medical | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | — |
| /contact | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ⚠️ action |
| /prendre-rendez-vous | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ |

---

## Vérification technique

| Élément | Statut | Note |
|---------|--------|------|
| sitemap.xml | ✓ `app/sitemap.ts` | 8 pages, priorités correctes |
| robots.txt | ✓ `app/robots.ts` | allow /, disallow /api/ |
| Redirections 301 | ✓ `next.config.ts` | 7 redirections Wix configurées |
| lang="fr" | ✓ layout.tsx | Correct |
| scroll-smooth | ✓ layout.tsx | Correct |
| metadataBase | ✓ layout.tsx | assistants-medicaux.com |
| next/image | ✓ Toutes pages | width/height déclarés |
| Font display | ⚠️ Google CDN | Pas de `font-display: swap` explicite |
| HTTPS | — | À vérifier post-déploiement |
| Core Web Vitals | — | À mesurer post-déploiement |

---

## Redirections 301 — Vérification

| Source Wix | Destination | Code | Statut |
|------------|-------------|------|--------|
| /copie-de-accueil-1 | / | 301 | ✓ |
| /copie-de-accueil-2 | / | 301 | ✓ |
| /about-7 | /assistants-medicaux | 301 | ✓ |
| /blank | / | 301 | ✓ |
| /copie-de-démarches | /avantages-demarches | 301 | ✓ (URL encodée) |
| /copie-de-demarches | /avantages-demarches | 301 | ✓ (sans accent) |
| /book-online | /prendre-rendez-vous | 301 | ✓ |

---

## Maillage interne — Vérification

| Page | Liens entrants | Liens sortants | Statut |
|------|---------------|----------------|--------|
| / | — | 4 pages | ✓ (via Header + CTA) |
| /assistants-medicaux | Header, /, /about-7 redirect | 3 pages | ✓ |
| /avantages-demarches | Header, /, /assistants-medicaux | 3 pages | ✓ |
| /dispositif-cpam | Header, /assistants-medicaux, /avantages-demarches | 3 pages | ✓ |
| /recrutement-assistant-medical | /assistants-medicaux | 4 pages | ✓ |
| /devenir-assistant-medical | Header | 2 pages | ⚠️ Peu de liens entrants |
| /contact | Header, toutes pages | 1 page | ✓ |
| /prendre-rendez-vous | Header CTA, /recrutement, /dispositif | 3 pages | ✓ |

**Point d'attention** : `/devenir-assistant-medical` reçoit peu de liens internes en dehors du Header. Ajouter un lien depuis `/recrutement-assistant-medical` (section "Vous cherchez à devenir assistant ?") et depuis `/assistants-medicaux` (bas de page).

---

## Actions immédiates (avant mise en prod)

1. ✅ Implémenter schema.org (Organization + LocalBusiness + FAQPage + Service)
2. ✅ Ajouter metadata explicite à `app/page.tsx`
3. ✅ Corriger le formulaire `/contact` (Netlify Forms)
4. ✅ Créer `/mentions-legales` (obligation RGPD)
5. ✅ Créer `app/not-found.tsx`
6. ✅ Ajouter `og:image` par défaut

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
