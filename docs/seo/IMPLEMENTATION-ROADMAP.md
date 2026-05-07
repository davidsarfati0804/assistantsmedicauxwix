# Roadmap d'Implémentation SEO — Mesdocs
*Généré le 2026-05-07*

---

## Phase 1 — Fondations (Semaines 1–4)
> Objectif : site techniquement propre, toutes pages créées, redirections prêtes

### Semaine 1 — Pages manquantes

- [ ] Créer `app/assistants-medicaux/page.tsx`
- [ ] Créer `app/dispositif-cpam/page.tsx`
- [ ] Créer `app/recrutement-assistant-medical/page.tsx`
- [ ] Créer `app/contact/page.tsx` (page dédiée, en plus du footer)
- [ ] Créer `app/prendre-rendez-vous/page.tsx`
- [ ] Vérifier metadata sur toutes les pages existantes (title, description, canonical)

### Semaine 2 — SEO technique

- [ ] `next.config.ts` — redirections 301 (7 URLs Wix)
- [ ] `app/sitemap.ts` — sitemap dynamique
- [ ] `app/robots.ts` — robots.txt (allow all, disallow /api/)
- [ ] Ajouter balises `<link rel="canonical">` dans chaque layout
- [ ] Ajouter OpenGraph tags (og:title, og:description, og:image, og:url)
- [ ] Vérifier `lang="fr"` sur `<html>`

### Semaine 3 — Schema.org

- [ ] Créer composant `<SchemaOrg>` réutilisable
- [ ] Implémenter Organization + LocalBusiness sur `/`
- [ ] Implémenter FAQPage sur `/`, `/assistants-medicaux`, `/avantages-demarches`, `/dispositif-cpam`
- [ ] Implémenter Service sur `/assistants-medicaux` et `/recrutement-assistant-medical`
- [ ] Implémenter ContactPage sur `/contact`

### Semaine 4 — Tracking & vérification

- [ ] Implémenter Google Tag Manager dans `layout.tsx`
- [ ] Configurer événements GA4 (form_submit, phone_click, rdv_click)
- [ ] Vérifier Google Search Console sur assistants-medicaux.com
- [ ] Tester toutes les redirections 301 en local
- [ ] Vérifier Core Web Vitals avec Lighthouse
- [ ] Tester formulaire de contact (Netlify Forms)

---

## Phase 2 — Expansion (Semaines 5–12)
> Objectif : contenu riche sur chaque page, maillage interne solide, backlinks de base

### Contenu

- [ ] Enrichir `/dispositif-cpam` avec contenu factuel (Avenant 7, tableau officiel)
- [ ] Ajouter FAQ à chaque page (min 5 questions)
- [ ] Ajouter témoignages nominatifs (médecins réels avec spécialité + ville)
- [ ] Créer tableau comparatif assistant médical vs secrétaire
- [ ] Rédiger une page "À propos" ou intégrer dans /assistants-medicaux
- [ ] Ajouter section "Comment ça marche" illustrée sur /recrutement-assistant-medical

### Maillage interne

- [ ] Vérifier que chaque page a au moins 3 liens internes sortants
- [ ] Vérifier que toutes les pages reçoivent au moins 2 liens internes entrants
- [ ] Aucun lien mort (404) — tester avec crawler

### Backlinks de base

- [ ] Soumettre à l'annuaire ameli.fr (déjà référencé — vérifier le lien)
- [ ] Page LinkedIn Mesdocs avec lien vers assistants-medicaux.com
- [ ] Partenaire VAE Formation — lien retour
- [ ] Annuaires santé professionnels (Doctolib, Ordre des Médecins partenaires)

---

## Phase 3 — Autorité (Mois 4–6)
> Objectif : positions TOP 10 sur mots-clés principaux, trafic qualifié

### Contenu avancé

- [ ] Lancer un blog (optionnel mais recommandé) :
  - "Comment fonctionne le dispositif assistant médical en 2026 ?"
  - "Médecin libéral : combien d'heures perdez-vous en administratif ?"
  - "CQP vs VAE : quelle formation pour devenir assistant médical ?"
- [ ] Ajouter vidéos témoignages médecins
- [ ] Page résultats / cas d'usage concrets

### SEO local (si pertinent)

- [ ] Google Business Profile Mesdocs (75116 Paris)
- [ ] NAP cohérent sur toutes les pages (Nom, Adresse, Téléphone)
- [ ] Répondre aux avis Google

---

## Phase 4 — Migration DNS (Quand prêt)

> Ne basculer le DNS que lorsque TOUTES ces conditions sont réunies :

### Checklist DNS finale

- [ ] Les 8 pages principales sont créées et indexables
- [ ] Les redirections 301 sont testées et fonctionnelles
- [ ] `sitemap.xml` accessible à `assistants-medicaux.com/sitemap.xml`
- [ ] `robots.txt` accessible à `assistants-medicaux.com/robots.txt`
- [ ] Metadata complètes sur toutes les pages
- [ ] Google Tag Manager / GA4 configuré
- [ ] Google Search Console vérifié sur le nouveau domaine
- [ ] Core Web Vitals : LCP < 2,5s sur mobile
- [ ] Formulaire de contact testé et fonctionnel (Netlify)
- [ ] Aucun lien interne vers les anciennes URLs Wix
- [ ] Test 404 sur toutes les anciennes URLs → toutes redirigent

### Jour J de migration

1. Pointer le DNS vers l'hébergeur Next.js (Netlify/Vercel)
2. Vérifier HTTPS actif sur assistants-medicaux.com
3. Soumettre sitemap dans Google Search Console
4. Demander une ré-indexation des pages principales via GSC
5. Surveiller les erreurs pendant 7 jours dans GSC et GA4
6. Vérifier que Wix ne sert plus le site (désactiver ou laisser les redirections Wix pointer vers le nouveau domaine)
