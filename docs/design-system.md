# Design System — Assistants Médicaux (assistants-medicaux.com)

> Extracted via live Puppeteer/Playwright inspection of the production Wix site.
> All values are confirmed from computed styles unless noted with *(inferred)*.

---

## 1. Palette de couleurs

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `color-primary` | `#093e98` | `rgb(9, 62, 152)` | CTA primaire, stats band bg, liens actifs, bordures form, logo line 1 accent, footer left bg |
| `color-secondary` | `#1d67cd` | `rgb(29, 103, 205)` | Liens nav, bordures inputs, variation bouton |
| `color-logo` | `#1161b4` | `rgb(17, 97, 180)` | Texte logo (line 1 & 2) |
| `color-accent-light` | `#62a6ed` | `rgb(98, 166, 237)` | Texte auteur témoignage, couleur d'accentuation secondaire |
| `color-surface-light` | `#e8f3ff` | `rgb(232, 243, 255)` | Fond footer right, fond section contact/formulaire |
| `color-surface-white` | `#fdfefe` | `rgb(253, 253, 254)` | Fond page, fond bouton light (off-white), texte sur fond bleu |
| `color-surface-pure` | `#ffffff` | `rgb(255, 255, 255)` | Fond cards bénéfices, fond inputs |
| `color-text-primary` | `#000000` | `rgb(0, 0, 0)` | Corps de texte, titres |
| `color-text-muted` | `#7f7f7f` | `rgb(127, 127, 127)` | Éléments désactivés / placeholder |
| `color-border-input` | `#97bcc8` | `rgb(151, 188, 200)` | Bordure inputs pill (design spécifié) |
| `color-nav-border` | `#e4eaf5` | — | Bordure bottom navbar *(inferred from spec)* |

### Usage Sémantique
- **Brand / Action** : `#093e98`
- **Lien / Interactif** : `#1d67cd`
- **Accent doux** : `#62a6ed`
- **Surface page** : `#fdfefe`
- **Surface card** : `#ffffff`
- **Surface section claire** : `#e8f3ff`

---

## 2. Typographie

### Famille de polices

| Famille | Source | Usage |
|---|---|---|
| `Work Sans` | Google Fonts (`worksans-extralight`) | Tous les titres, corps principal |
| `proxima-n-w01-reg` | Wix CDN | Textes secondaires, UI labels (fallback `sans-serif`) |

**Import Google Fonts :**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
```

**Tailwind config :**
```js
fontFamily: {
  sans: ["'Work Sans'", 'sans-serif'],
}
```

### Échelle typographique (tailles extraites)

| Élément | Taille | Poids | Line-height | Couleur | Tailwind approx. |
|---|---|---|---|---|---|
| H1 Hero | `41px` | `400` | `49.2px` (1.2) | `#000000` | `text-[41px] font-normal leading-tight` |
| H2 Section | `30px` | `400` | `normal` | `#000000` | `text-[30px] font-normal` |
| H3 | `11px` | `400` | `14.74px` | `#000000` | `text-[11px] font-normal` |
| Stats band | `32px` | `400` | — | `#fdfefe` | `text-[32px] font-normal text-white` |
| Testimonial quote | `22px` | `400` | — | `#093e98` | `text-[22px] font-normal text-[#093e98]` |
| Testimonial auteur | `18px` | `400` | — | `#62a6ed` | `text-[18px] font-normal text-[#62a6ed]` |
| Body / paragraphe | `20px` | `400` | `28.2px` (1.41) | `#000000` | `text-[20px] font-normal leading-[1.41]` |
| Body medium | `18px` | `400` | `31.5px` (1.75) | — | `text-lg font-normal` |
| Body small | `16px` | `400` | — | — | `text-base font-normal` |
| Adresse footer | `16px` | `400` | — | `#fdfefe` | `text-base font-normal text-white` |
| Nav links | `14px` | `400` | — | `#1d67cd` | `text-sm font-normal text-[#1d67cd]` |
| Bouton label | `16px` | `400` | — | — | `text-base font-normal` |
| Logo line 1 | `20px` | `700` (bold) | — | `#1161b4` | `text-[20px] font-bold text-[#1161b4]` |
| Logo line 2 | `13px` | `400` | — | `#1161b4` | `text-[13px] font-normal text-[#1161b4]` |
| UI micro | `10px` | `400` | — | — | `text-[10px]` |

### Échelle Wix font vars (référence)

| Var Wix | Taille | Famille |
|---|---|---|
| `--font_2` | `72px / 1.25em` | Work Sans |
| `--font_3` | `50px / 1.34em` | Work Sans |
| `--font_4` | `40px / 1.35em` | Work Sans |
| `--font_5` | `28px / 1.375em` | Work Sans |
| `--font_6` | `22px / 1.41em` | Work Sans |
| `--font_7` | `20px / 1.67em` | Work Sans |
| `--font_8` | `18px / 1.75em` | Work Sans |
| `--font_9` | `15px / 1.875em` | proxima-n-w01-reg |
| `--font_10` | `14px / 1.79em` | proxima-n-w01-reg |

---

## 3. Espacement et Layout

### Conteneur

| Contexte | Largeur | Tailwind |
|---|---|---|
| Page max-width (large) | `1200px` | `max-w-[1200px] mx-auto` |
| Section intermédiaire | `1080px` | `max-w-[1080px] mx-auto` |
| Colonne étroite | `980px` | `max-w-[980px] mx-auto` |
| Form container | `635px` | `max-w-[635px]` |

### Navbar
- **Hauteur** : `68px` (spec) / `~97px` mesuré (inclut bande supérieure)
- **Position** : `fixed` / `sticky`
- **Fond** : `#ffffff` / `#fdfefe`
- **Bordure bas** : `1px solid #e4eaf5`
- **Tailwind** : `h-[68px] bg-white border-b border-[#e4eaf5] fixed top-0 left-0 right-0 z-50`

### Sections

| Section | Largeur interne | Spécificités |
|---|---|---|
| Hero | `1200px` | Image pleine largeur, overlay gradient |
| Benefits cards | `1200px` | `margin-top: -90px` pour overlap hero |
| Video / info | `1080px` | Section standard |
| Stats band | `1200px` | Fond `#093e98`, hauteur `237px` |
| Contact + Form | `1200px` | Fond `#e8f3ff`, hauteur `581px` |
| Footer | `1200px` | Deux colonnes |

### Espacements courants *(inférés)*

| Token | Valeur | Tailwind |
|---|---|---|
| Section padding Y | `60px–80px` | `py-16` à `py-20` |
| Card padding | `24px–32px` | `p-6` à `p-8` |
| Gap grid | `24px–32px` | `gap-6` à `gap-8` |
| Nav padding X | `40px` | `px-10` |

---

## 4. Composants

### 4.1 Boutons

#### Bouton Primary (CTA principal)
```
Fond     : #093e98
Texte    : #fdfefe
Radius   : 200px (pill)
Taille S : 194×41px
Taille L : 248×54px
Transition: border-color 0.4s, background-color 0.4s
```
**Tailwind :**
```
rounded-full bg-[#093e98] text-[#fdfefe] text-base font-normal
px-8 py-2.5 transition-[border-color,background-color] duration-400
hover:bg-[#fdfefe] hover:text-[#093e98] hover:border hover:border-[#093e98]
```

#### Bouton Light (CTA secondaire)
```
Fond     : #e1eeff  (≈ #e8f3ff)
Texte    : #093e98
Radius   : 200px (pill)
Taille S : 194×41px
Transition: border-color 0.4s, background-color 0.4s
```
**Tailwind :**
```
rounded-full bg-[#e8f3ff] text-[#093e98] text-base font-normal
px-8 py-2.5 transition-[border-color,background-color] duration-400
hover:bg-[#093e98] hover:text-[#fdfefe]
```

#### Bouton Submit (formulaire)
```
Fond     : #093e98
Taille   : 38×38px
Radius   : 4px (7px mesuré)
Icône    : flèche blanche (>)
```
**Tailwind :**
```
w-[38px] h-[38px] rounded bg-[#093e98] text-white flex items-center justify-center
```

### 4.2 Inputs / Formulaire

```
Radius   : 999px (pill) — spec | 0px mesuré (Wix override — à utiliser pill dans Next.js)
Bordure  : 1.5px solid #97bcc8
Hauteur  : 47px
Fond     : #ffffff
Font     : 17px, Work Sans, weight 400
Padding  : 3px 3px 3px 10px
```
**Tailwind :**
```
rounded-full border border-[#97bcc8] border-[1.5px] h-[47px] bg-white
text-[17px] font-normal px-4 py-2 outline-none
focus:border-[#093e98] focus:ring-1 focus:ring-[#093e98]
```

**Champs du formulaire de contact :**
- Nom & Prénom (text)
- Email (email)
- Profession (text)
- Téléphone (tel)
- Bouton submit `>` (38×38px, radius 4px, fond #093e98)

### 4.3 Cards — Benefits (Avantages)

```
Fond         : #ffffff
Box-shadow   : none (icône + texte simple, pas de card box)
Border-radius: non appliqué directement sur la card Wix
Layout       : icône (83–109px) + texte centré
Margin-top   : -90px (overlap sur le hero)
```
*La "card" visible est obtenue par le fond blanc de la section sur fond de l'image hero.*

#### Card Info (formulaire / CTA)
```
Fond         : #ffffff
Border-radius: 30px
Box-shadow   : rgba(0,0,0,0.18) 0px 2px 50px 5px
Taille       : 980×339px
```
**Tailwind :**
```
bg-white rounded-[30px] shadow-[0_2px_50px_5px_rgba(0,0,0,0.18)]
max-w-[980px] mx-auto
```

### 4.4 Stats Band

```
Fond     : #093e98
Texte    : #fdfefe (rgb 253,253,254)
Font-size: 32px
Hauteur  : 237px
Largeur  : 1200px
```
**Tailwind :**
```
bg-[#093e98] text-[#fdfefe] text-[32px] font-normal h-[237px] w-full
flex items-center justify-center
```

### 4.5 Témoignage

```
Texte quote  : 22px, color #093e98 (spec)
Texte auteur : 18px, color #62a6ed
Font-weight  : 400
Fond section : transparent / blanc
```
**Tailwind :**
```
// Quote
text-[22px] text-[#093e98] font-normal italic

// Auteur
text-[18px] text-[#62a6ed] font-normal
```

### 4.6 Navbar

```
Hauteur      : 68px
Fond         : #ffffff / #fdfefe
Position     : fixed top-0
Bordure bas  : 1px solid #e4eaf5
```

**Logo :**
- Line 1 : 20px, bold (700), color `#1161b4`
- Line 2 : 13px, normal (400), color `#1161b4`

**Nav links :**
- Taille : 14px
- Couleur par défaut : `#1d67cd`
- Couleur active : `#093e98` + soulignement
- Transition : `all` (Wix global transition)

**Tailwind navbar :**
```
fixed top-0 left-0 right-0 h-[68px] bg-white border-b border-[#e4eaf5] z-50
flex items-center justify-between px-10
```

### 4.7 Hero Section

```
Image fond   : photo médicale pleine largeur (1200×758px)
Overlay      : linear-gradient(90deg, rgba(255,255,255,0.72) 0%, transparent 80%)
H1           : 41px, weight 400, color #000000, line-height 49.2px
Body         : 18–20px, weight 400, color #000000
Boutons      : primary + light côte à côte
```
**Tailwind overlay :**
```
bg-gradient-to-r from-white/72 to-transparent
```

### 4.8 Footer

```
Disposition  : 2 colonnes
Col gauche   : fond #093e98, largeur ~260px, texte #fdfefe
  - Nom + adresse + téléphone + email
Col droite   : fond #e8f3ff (#e1eeff)
  - Formulaire de contact + bouton submit
Couleur texte adresse : #fdfefe, 16px
```
**Tailwind footer :**
```
// Wrapper
flex w-full

// Col gauche
bg-[#093e98] text-[#fdfefe] w-[260px] p-8

// Col droite
bg-[#e8f3ff] flex-1 p-8
```

---

## 5. Breakpoints Responsive

Le site Wix ne publie pas de media queries personnalisées (seules les préférences système sont détectées). Pour le clone Next.js, utiliser les breakpoints Tailwind standards adaptés :

| Nom | Min-width | Tailwind prefix | Usage |
|---|---|---|---|
| Mobile | `0px` | *(défaut)* | Stack vertical, nav hamburger |
| Tablet | `768px` | `md:` | 2 colonnes benefits |
| Desktop small | `1024px` | `lg:` | Layout 4 colonnes, nav horizontale |
| Desktop large | `1280px` | `xl:` | Container 1200px actif |
| Wide | `1536px` | `2xl:` | Pas de changement majeur |

**Breakpoints critiques identifiés :**
- Container passe de `100%` à `1200px` à partir de `xl:` (≥1280px)
- Navbar passe en mode mobile *(hamburger)* en dessous de `lg:` (1024px)
- Benefits cards : 4 colonnes → 2 → 1
- Footer : 2 colonnes → 1 colonne (stacked)

**Media queries préférences système (Wix)** :
- `(prefers-reduced-motion: reduce)` — désactive les transitions
- `(prefers-reduced-motion: no-preference)` — active les transitions
- `(forced-colors: active)` — mode contraste élevé

---

## 6. Animations & Transitions

| Élément | Transition | Tailwind |
|---|---|---|
| Bouton primary/light | `border-color 0.4s ease, background-color 0.4s ease` | `transition-[border-color,background-color] duration-400` |
| Liens navbar | `all` (Wix global) | `transition-all` |
| Tous les `<a>` | `all` (Wix global) | `transition-all` |
| Hover bouton | inversion fond ↔ texte | voir composants |

**Animations de scroll *(inférées depuis la structure Wix)* :**
- Apparition des cards bénéfices au scroll (fade-in + translateY)
- Pas d'animation CSS keyframe identifiée via computed styles

**Implémentation recommandée dans Next.js :**
```js
// tailwind.config.js — durée personnalisée
extend: {
  transitionDuration: {
    400: '400ms',
  },
}
```

---

## 7. Équivalents Tailwind Complets

### Couleurs à ajouter dans `tailwind.config.js`

```js
extend: {
  colors: {
    primary: {
      DEFAULT: '#093e98',
      light: '#e8f3ff',
    },
    secondary: '#1d67cd',
    logo: '#1161b4',
    accent: '#62a6ed',
    surface: {
      white: '#fdfefe',
      light: '#e8f3ff',
    },
    border: {
      input: '#97bcc8',
      nav: '#e4eaf5',
    },
  },
  fontFamily: {
    sans: ["'Work Sans'", 'sans-serif'],
  },
  fontSize: {
    'hero': ['41px', { lineHeight: '49.2px', fontWeight: '400' }],
    'stats': ['32px', { lineHeight: '1.2', fontWeight: '400' }],
    'testimonial': ['22px', { lineHeight: '1.41', fontWeight: '400' }],
  },
  borderRadius: {
    'pill': '200px',
    'card': '30px',
    'submit': '7px',
  },
  boxShadow: {
    'card': '0px 2px 50px 5px rgba(0,0,0,0.18)',
  },
  maxWidth: {
    'container': '1200px',
    'container-md': '1080px',
    'container-sm': '980px',
  },
  transitionDuration: {
    400: '400ms',
  },
  height: {
    'nav': '68px',
    'stats-band': '237px',
    'input': '47px',
    'btn-sm': '41px',
    'btn-md': '54px',
    'btn-submit': '38px',
  },
  width: {
    'btn-sm': '194px',
    'btn-md': '248px',
    'btn-submit': '38px',
    'footer-left': '260px',
  },
}
```

### Classes utilitaires prêtes à l'emploi

```js
// Composants fréquents
const tokens = {
  // Bouton primary
  btnPrimary: 'rounded-full bg-[#093e98] text-[#fdfefe] text-base font-normal px-8 h-[41px] inline-flex items-center justify-center transition-[border-color,background-color] duration-[400ms] hover:bg-[#fdfefe] hover:text-[#093e98] border border-transparent hover:border-[#093e98]',
  
  // Bouton light
  btnLight: 'rounded-full bg-[#e8f3ff] text-[#093e98] text-base font-normal px-8 h-[41px] inline-flex items-center justify-center transition-[border-color,background-color] duration-[400ms] hover:bg-[#093e98] hover:text-[#fdfefe]',
  
  // Bouton submit
  btnSubmit: 'w-[38px] h-[38px] rounded bg-[#093e98] text-white flex items-center justify-center',
  
  // Input
  input: 'rounded-full border border-[#97bcc8] border-[1.5px] h-[47px] bg-white text-[17px] font-normal px-4 w-full outline-none focus:border-[#093e98] focus:ring-1 focus:ring-[#093e98]',
  
  // Nav
  nav: 'fixed top-0 left-0 right-0 h-[68px] bg-white border-b border-[#e4eaf5] z-50 flex items-center',
  navLink: 'text-sm text-[#1d67cd] transition-all hover:text-[#093e98]',
  navLinkActive: 'text-sm text-[#093e98] underline',
  
  // Container
  container: 'max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-10',
  
  // Card info
  cardInfo: 'bg-white rounded-[30px] shadow-[0_2px_50px_5px_rgba(0,0,0,0.18)] max-w-[980px] mx-auto',
  
  // Stats band
  statsBand: 'bg-[#093e98] text-[#fdfefe] text-[32px] font-normal flex items-center justify-center py-16',
  
  // Hero overlay
  heroOverlay: 'bg-gradient-to-r from-white/75 to-transparent',
  
  // Footer left
  footerLeft: 'bg-[#093e98] text-[#fdfefe] w-[260px] p-8 flex flex-col gap-4',
  
  // Footer right
  footerRight: 'bg-[#e8f3ff] flex-1 p-8',
}
```

---

## 8. Structure de page (ordre des sections)

1. **Navbar** — fixe, 68px, fond blanc, bordure bas `#e4eaf5`
2. **Hero** — image pleine largeur + overlay gradient + H1 + 2 boutons
3. **Benefits Cards** — 4 cards icône+texte, overlap -90px sur le hero, fond blanc
4. **Video Section** — iframe / embed + texte explicatif
5. **CTA intermédiaire** — "Vous êtes intéressé.e" + 2 boutons
6. **Stats Band** — fond `#093e98`, texte blanc 32px, compteur 7420 médecins
7. **Testimonial** — citation 22px `#093e98` + auteur 18px `#62a6ed`
8. **Footer** — 2 colonnes (gauche bleu + droite bleu clair avec formulaire)

---

## 9. Assets & Icônes

- **Icônes benefits** : PNG SVG (83–109px de large), hébergés sur `static.wixstatic.com`
  - `gain-de-temps.png` → 83×99px
  - `taches-administratives.png` → 83×96px
  - `amelioration-conditions.png` → 109×96px
  - `gain-argent-subvention.png` → 73×104px
- **Hero image** : JPEG, 1200×758px, `docteur-assistant-medical-sante.jpg`
- **Logo** : texte pur (2 lignes), police Work Sans, couleur `#1161b4`

---

*Dernière extraction : 2026-05-03 — Site source : https://www.assistants-medicaux.com/*
