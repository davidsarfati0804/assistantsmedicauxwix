# Améliorations GEO ciblées — 12 novembre 2026

## Périmètre

Lot réduit après revue du dossier PDF : pas de refonte graphique, de nouvelle page commerciale, de tarif ni de simulateur. Aucun changement des formulaires, du consentement, des alertes ou des témoignages. Les délais déjà confirmés dans les consignes de publication existantes ne sont pas réécrits sur la base d'une supposition.

- Accueil : définition explicite de GE Mesdocs, activité, couverture France et distinction entre rôle employeur, organisation au cabinet et décision CPAM.
- Bande de confiance : présence dans la liste ameli décrite sans suggérer agrément ou garantie de l'offre.
- FAQ groupement : réponses précises sur l'existence d'autres GE, les responsabilités et la décision de la caisse. Texte visible et FAQPage alimentés par la même liste dans `lib/ge-faq.ts`.
- Identité : nom légal, SIREN et lien vers la fiche officielle de l'association dans Organization ; SIREN et SIRET distingués dans les mentions légales. Aucun rattachement à la SAS homonyme ni à un profil ambigu. Adresse existante conservée en attendant une harmonisation confirmée.
- Graphe : WebSite identifié et relié au publisher sur chaque page ; accueil relié à l'organisation ; pages de service reliées aux services et au site. Les dates éditoriales sont placées sur WebPage, pas sur Service.
- JSON-LD : échappement de `<` selon le guide Next.js installé ; contrôle de la conservation du contenu après parsing JSON.
- `llms.txt` : alias et identité vérifiée, rôles, liens canoniques et sources. Retrait du chiffre 7 420 non attribuable à Mesdocs, de l'agrément supposé, des montants ambigus, des anciens liens de coût et des qualifications/délais non documentés dans ce fichier. Aucune garantie que chaque moteur consomme ce fichier.
- Sitemap : 13 URL conservées ; date des deux pages éditoriales modifiées actualisée. Les dates des autres pages ne sont pas rafraîchies artificiellement.

## Sources vérifiées

- https://www.ameli.fr/node/916286 — liste des groupements et avertissement sur l'absence de garantie.
- https://annuaire-entreprises.data.gouv.fr/entreprise/mesdocs-groupement-d-employeurs-942339052 — identité de l'association et identifiants.
- https://schema.org/dateModified — types portant la date de révision.
- `node_modules/next/dist/docs/01-app/02-guides/json-ld.md` — rendu et échappement du JSON-LD.

## Contrôles

- Build de production et lint exécutés avec succès.
- Suite Playwright : 25 tests réussis, avec requêtes de formulaire simulées et services externes interceptés.
- Deux tests GEO ajoutés : cohérence du graphe sur les 13 URL publiques, identité unique et relations, absence de dates sur Service, FAQ identique au contenu visible et retrait des anciennes affirmations de llms.txt.
- Contrôle complémentaire de sérialisation : un contenu contenant une fermeture de balise script reste valide après parsing et aucun `<` brut n'est conservé dans le payload.
- `git diff --check` effectué.

Ces vérifications ne constituent pas une validation externe Schema.org, une preuve d'indexation ni une mesure de nouvelles citations IA.

## Publication et suivi

Changements appliqués dans le dépôt local. Aucun commit, push ou déploiement effectué dans ce lot. Les anciennes captures de l'audit ne décrivent pas la nouvelle version locale.

Après publication effective : vérifier HTML/JSON-LD/llms/sitemap en ligne, puis suivre l'indexation et répéter le benchmark sur un protocole constant. Une meilleure cohérence augmente la lisibilité de l'offre ; aucun classement ou recommandation régulière n'est garanti.
