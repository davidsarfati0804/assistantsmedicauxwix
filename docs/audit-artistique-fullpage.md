# Audit Artistique Full-Page — assistants-medicaux.com (Next.js)

**Date :** 2026-05-06  
**Viewports testés :** 1440px (desktop), 390px (mobile)  
**Pages auditées :** `/` · `/avantages-demarches` · `/devenir-assistant-medical`  
**Référentiel :** UI/UX Pro Max · Design system Soft UI Evolution · Healthcare

---

## Résumé exécutif

Le site est visuellement cohérent et fonctionnel. Les principales corrections portent sur :
- L'espacement excessif entre sections (dead white space)
- L'incohérence visuelle entre le Hero principal et les PageHero des pages intérieures
- Des problèmes sémantiques mineurs (h1 mal placé dans CtaSection)
- La densité verticale de certaines sections (StatsBand, CtaSection trop hauts)

---

## PAGE 1 — Accueil (`/`)

### Section Hero
| Élément | Statut | Observation |
|---------|--------|-------------|
| Hauteur hero | ✅ | 660px, bien proportionné vs officiel |
| Titre (font-bold, 46px, 2 lignes) | ✅ | Conforme après correction |
| Paragraphes corps | ✅ | Flow naturel, max-w-[500px] adapté |
| Gradient blanc→transparent | ✅ | Couverture 70% gauche |
| Bouton principal | ✅ | px-8 py-3.5 font-semibold bleu foncé |
| Bouton secondaire | ✅ | Blanc + border-gray-200 |
| Médecins visibles à droite | ✅ | Image bien positionnée |

### Section BenefitsCard
| Élément | Statut | Observation |
|---------|--------|-------------|
| Chevauchement hero | ✅ | -mt-[20px] correct |
| 4 colonnes icônes | ✅ | Grid uniforme |
| Icônes hauteur uniforme | ✅ | h-[80px] conteneur fixe |
| Dernier item visible | ✅ | Aucune coupure |
| Titre semibold | ✅ | `font-semibold text-[22px]` |
| **Dead white space sous carte** | ❌ | `mt-[72px]` sur VideoSection crée ~112px de blanc inutile |

### Section VideoSection
| Élément | Statut | Observation |
|---------|--------|-------------|
| Fond bleu (#e8f0fe) | ✅ | Visible |
| Miniature Ameli | ✅ | Affichée correctement |
| Bouton play rouge | ✅ | Centré sur la miniature |
| Grille 55%/1fr | ✅ | Équilibrée |
| **mt-[72px]** | ❌ | **Créé un grand espace blanc avant le fond coloré → réduire à mt-[40px]** |
| Texte "Source Assurance Maladie" | ⚠️ | Trop petit (11px), barely lisible |

### Section CtaSection
| Élément | Statut | Observation |
|---------|--------|-------------|
| Titre lisible | ✅ | |
| Bouton CTA | ✅ | |
| **Balise h1 incorrecte** | ❌ | **CtaSection utilise `<h1>` au lieu de `<h2>` (erreur sémantique/SEO)** |
| **py-20 trop haut** | ⚠️ | 160px de padding total → réduire à py-16 (128px) |
| Sous-lien noir 20px | ⚠️ | Taille 20px disproportionnée pour un lien secondaire |

### Section StatsBand
| Élément | Statut | Observation |
|---------|--------|-------------|
| Fond bleu foncé #093e98 | ✅ | |
| **py-14 trop haut** | ⚠️ | 112px de padding pour une seule ligne → réduire à py-10 |
| Texte blanc font-light | ⚠️ | Font-light sur fond foncé réduit la lisibilité → préférer font-normal |

### Section TestimonialSlider
| Élément | Statut | Observation |
|---------|--------|-------------|
| Fond image floutée | ✅ | testimonial_bg.jpg chargé |
| 3 slides, pagination dots | ✅ | |
| Flèches ‹ › navigation | ✅ | |
| Texte bleu #093e98 lisible | ✅ | |
| Nom du docteur | ✅ | |

### Footer
| Élément | Statut | Observation |
|---------|--------|-------------|
| 2 colonnes (bleu foncé / clair) | ✅ | |
| Infos de contact | ✅ | |
| Formulaire 4 champs | ✅ | |
| Bouton submit | ✅ | |
| Icônes réseaux sociaux | ✅ | SVG via Lucide |

---

## PAGE 2 — Avantages & Démarches (`/avantages-demarches`)

### Section PageHero
| Élément | Statut | Observation |
|---------|--------|-------------|
| **Hauteur h-[380px]** | ❌ | **Trop court vs home (660px) — incohérent → h-[480px]** |
| **Titre font-light** | ❌ | **Incohérent avec home (font-bold) → font-bold text-[44px]** |
| **Boutons ancienne version** | ❌ | **px-6 py-2.5 sans font-semibold, secondaire en #e1eeff → uniformiser avec home** |
| **Padding px-12** | ⚠️ | **Home utilise pl-[10%] pour aligner avec l'officiel → uniformiser** |
| Image hero visible | ✅ | |
| Gradient correct | ✅ | |

### Section TOC (table des matières)
| Élément | Statut | Observation |
|---------|--------|-------------|
| Boîte blanche bordée | ✅ | |
| Liens bleus | ✅ | |
| Hiérarchie des sections | ✅ | |

### Section 4-icônes Avantages
| Élément | Statut | Observation |
|---------|--------|-------------|
| Grid 4 colonnes | ✅ | max-md:grid-cols-2 |
| Icônes 113px | ✅ | |
| Textes descriptifs | ✅ | |

### Sections contenu textuel
| Élément | Statut | Observation |
|---------|--------|-------------|
| Titres bleus #1d67cd | ✅ | |
| Paragraphes 16px / leading-1.7 | ✅ | |
| Bullets avec • | ✅ | |
| Lien VAE Formation externe | ✅ | |

### CtaSection + Footer
| Élément | Statut | Observation |
|---------|--------|-------------|
| Même problème h1/py-20 | ❌ | Partagé avec page accueil |

---

## PAGE 3 — Devenir Assistant Médical (`/devenir-assistant-medical`)

### Section PageHero
| Élément | Statut | Observation |
|---------|--------|-------------|
| **Mêmes problèmes que /avantages** | ❌ | height, font-weight, boutons, padding |
| Image stéthoscope visible | ✅ | |

### Section "Qui peut être AM ?"
| Élément | Statut | Observation |
|---------|--------|-------------|
| Titre font-light 28px | ⚠️ | Cohérent avec la page mais light vs bold sur home |
| Paragraphe long lisible | ✅ | leading-[1.7] |
| max-w-[900px] centré | ✅ | |

### Section "Les missions"
| Élément | Statut | Observation |
|---------|--------|-------------|
| Fond #f4f8fe | ✅ | |
| Grid 3 colonnes | ✅ | max-md:grid-cols-1 |
| **Alignement texte incohérent** | ⚠️ | **Div `text-center` mais `<p>` en `text-left` → choisir un seul alignement** |
| **Colonne 2 description trop longue** | ⚠️ | "Préparation et déroulement..." a 5× plus de texte que les autres colonnes → déséquilibre visuel sur desktop |
| Icônes centées | ✅ | |

### CtaSection + Footer
| Élément | Statut | Observation |
|---------|--------|-------------|
| Mêmes problèmes partagés | ❌ | |

---

## MOBILE (390px) — Tous pages

| Élément | Statut | Observation |
|---------|--------|-------------|
| Hero home — titre 28px, 3 lignes | ✅ | Lisible |
| Boutons hero mobile | ✅ | Empilés verticalement |
| BenefitsCard 2×2 | ✅ | Aucune coupure |
| VideoSection 1 colonne | ✅ | |
| Testimonials | ✅ | Fond visible |
| Footer empilé | ✅ | |
| Avantages — contenu mobile | ✅ | Lecture fluide |
| Devenir — missions 1 colonne | ✅ | Ordre logique |
| **Nav mobile hamburger** | ✅ | Fonctionne |
| **Scroll horizontal** | ✅ | Aucun |

---

## Tableau des corrections appliquées

| # | Fichier | Problème | Correction |
|---|---------|---------|------------|
| 1 | `VideoSection.tsx` | `mt-[72px]` dead space | → `mt-[40px]` |
| 2 | `PageHero.tsx` | Hauteur h-[380px] trop court | → `h-[480px]` |
| 3 | `PageHero.tsx` | Titre `font-light text-[41px]` incohérent | → `font-bold text-[44px]` |
| 4 | `PageHero.tsx` | Boutons ancienne version | → alignés sur Hero.tsx |
| 5 | `PageHero.tsx` | Padding `px-12` | → `pl-[10%] pr-6` |
| 6 | `CtaSection.tsx` | `<h1>` sémantiquement incorrect | → `<h2>` |
| 7 | `CtaSection.tsx` | `py-20` trop grand | → `py-16` |
| 8 | `CtaSection.tsx` | Sous-lien `text-[20px]` disproportionné | → `text-[16px]` |
| 9 | `StatsBand.tsx` | `py-14` + `font-light` sur fond foncé | → `py-10` + `font-normal` |
| 10 | `DevenirContent.tsx` | Mix `text-center`/`text-left` missions | → tout en `text-left` |

---

## Recommandations non appliquées (futures)

- Ajouter `cursor-pointer` explicite sur tous les éléments cliquables non-`<Link>`
- Ajouter `prefers-reduced-motion` sur les animations du slider
- Remplacer le texte "Source Assurance Maladie" en `text-[11px]` par `text-[12px]`
- Ajouter des `aria-label` sur les flèches de navigation du slider
- Considérer `font-display: swap` explicite pour Work Sans
- Ajouter un état `focus-visible` plus marqué sur les boutons pour l'accessibilité clavier
