# Mission générale

Tu es responsable de migrer/recréer le site Wix https://www.assistants-medicaux.com/ en Next.js / React / Tailwind.
Le site appartient à l'utilisateur (Mesdocs Groupement d'employeurs, contact@ge-mesdocs.fr).

## Agent 1 — Audit du site Wix
Pages : /, /avantages-demarches, /devenir-assistant-médical
Livrable : /docs/audit-site.md (arborescence, sections, textes, CTA, formulaires, images, liens)

## Agent 2 — Extraction design
Livrable : /docs/design-system.md (couleurs, polices, tailles, boutons, grille responsive)

## Agent 3 — Reproduction composants
Structure : /components/sections/* — composants React/Tailwind propres, responsive, réutilisables

## Agent 4 — Assets & médias
Livrable : /public/assets + /docs/assets-inventory.md

## Agent 5 — Responsive mobile
Breakpoints : 1440px, 1024px, 768px, 390px — Livrable : /docs/responsive-report.md

## Agent 6 — SEO & contenu
title, meta, H1/H2, alt images, sémantique — Livrable : /docs/seo-report.md

## Agent 7 — Vérification pixel-perfect
Captures avant/après dans /docs/screenshots — Livrable : /docs/pixel-perfect-report.md

## Règles techniques
- Next.js App Router + Tailwind CSS + composants séparés
- Déployable Vercel/Netlify
- agent-browser open/snapshot/screenshot pour captures

## Design system extrait
- Police : Work Sans (Google Fonts)
- Primaire : #093e98 | Secondaire : #1d67cd | Logo : #1161b4
- Btn primary : bg #093e98 texte #fdfefe radius-full
- Btn light : bg #e1eeff texte #093e98
- Hero h1 : 41px weight-400 | Overlay : blanc gradient
- Footer left bg #093e98 | Footer right bg #e1eeff
