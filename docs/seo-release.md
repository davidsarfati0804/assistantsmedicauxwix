# Corrections SEO et mesure — 10 novembre 2026

## État

Ce document décrit les corrections et les contrôles de publication. La référence chiffrée privée, les résultats de déploiement et les exports Google restent hors dépôt. Un gain de collecte Analytics ne prouve pas un gain de trafic, de contacts qualifiés ou de ventes.

## Changements

- Choix accepter/refuser la mesure, conservation du choix six mois, retrait accessible sur toutes les pages. Le refus conserve l’accès aux formulaires. Google Tag Manager est chargé seulement après accord, sur assistants-medicaux.com, dans un build de production. Localhost et les aperçus Netlify sont exclus.
- Même conteneur GTM et même flux G-72CR5EDK0P ; une seule source de pages vues (initialisation Google et suivi automatique des changements de page existant). Les événements personnalisés passent maintenant par gtag, au lieu de rester sans destination dans dataLayer.
- Formulaires : début `form_start_custom`, `form_error` catégorisé, `generate_lead` après réponse HTTP réussie uniquement. Garde contre les doubles clics ; conservation des réponses en erreur ; exclusion de la réponse HTML de définition statique des succès.
- Analytics ne reçoit que des catégories autorisées : `form_name`, `lead_profile`, `lead_need`, `error_type`. Aucun nom, email, téléphone, cabinet, ville, secteur ou message saisi dans ces paramètres.
- Profil déclaré disponible sur les trois formulaires : médecin, structure, candidat, autre ; valeur inconnue si non renseigné. Il ne s’agit pas d’une qualification commerciale. Les définitions Netlify sont mises à jour avec les mêmes champs.
- Alertes avant validation rétablies ensuite sur instruction de l’utilisateur, qui confirme l’information des visiteurs et la validation de son dispositif par sa juriste. Elles transmettent uniquement nom, téléphone et email à Mesdocs, sans événement Analytics ni comptage comme demande envoyée. La politique de confidentialité décrit ce fonctionnement. Les demandes validées restent reçues par Netlify Forms. Voir `docs/alertes-formulaires.md`.
- Libellés et autocomplétion des champs, accord sur le traitement de la demande également présent sur RDV, annonces du succès et des erreurs ; contrastes et pied de page mobile corrigés.
- Outils Brevo internes protégés par authentification Basic, avec vérification d’origine pour les mutations ; indisponibles par défaut si `DASHBOARD_USERNAME` / `DASHBOARD_PASSWORD` ne sont pas configurés. Ne pas recopier une clé Brevo d’un autre projet pour les rendre publics.
- Pages techniques `noindex`, exclusions cohérentes des robots, sitemap conservé à 13 URLs et dates correspondant aux changements réels. Liens éditoriaux vers les pages stratégiques depuis l’accueil. L’absence d’indexation n’est pas imputée à une cause technique non démontrée et sa résolution ne peut pas être garantie.
- Formation CQP : deux ans après l’embauche ; correction des affirmations sur les gestes de soins, montants de financement explicités selon année/quotité, suppression d’une prétendue identité `sameAs` entre Mesdocs et Ameli, salaires et financements non justifiés remplacés par les règles applicables sans chiffres inventés.
- FAQ de l’accueil visible et identique aux données structurées. Retrait du balisage FAQ sur la page avantages, où ces questions n’étaient pas affichées.
- Témoignages, cinq étoiles et délais conservés après confirmation explicite de l’utilisateur. Référencement Mesdocs vérifié dans la liste Ameli : https://www.ameli.fr/node/916286 .

## Réglages GA4

Propriété : 536587553. Flux : 14831967426. L’accès Éditeur fonctionne désormais. L’événement clé `generate_lead` (une fois par événement, sans valeur monétaire par défaut) et les trois dimensions d’événement `form_name`, `lead_profile`, `lead_need` ont été créés et leur présence vérifiée par relecture de l’API, uniquement sur cette propriété.

État des réglages (vérifier leur existence avant toute nouvelle création) :

1. Vérifié : `generate_lead` est déclaré événement clé, comptage une fois par événement, sans valeur monétaire par défaut.
2. Vérifié : seules les trois dimensions d’événement nécessaires ont été créées : `form_name`, `lead_profile` et `lead_need`. Le contrôle de Metadata API a confirmé que le nom du formulaire n’est pas disponible comme dimension native dans cette propriété.
3. Au déploiement du nouveau code, désactiver les interactions automatiques des formulaires pour garder le début personnalisé comme référence ; retirer `form_submit` des événements clés et sa valeur arbitraire de 1 EUR. Conserver le suivi automatique des changements de page et des téléchargements pour éviter de dupliquer ces événements dans le site.
4. Conserver `qualify_lead` et `close_convert_lead` comme étapes distinctes à alimenter uniquement par un processus commercial vérifié. Le site ne les déclenche pas.

Si les droits restent insuffisants, ces étapes doivent rester explicitement signalées comme non réalisées.

## Vérifications locales

Vérifiés : `npm ci`, `npm run build`, `npm run lint`, `npx playwright test` (18 tests réussis). `git diff --check` et le contrôle de secrets sur les fichiers du projet ne signalent aucun problème.

Lighthouse local de l’accueil : accessibilité 100/100, contrôles SEO automatiques 100/100, performance 92/100 (LCP simulé 3,3 s). Le test local n’est pas directement comparable au test initial sur l’hébergement et ne prouve aucune amélioration des performances terrain. La vérification du déploiement réel reste nécessaire.

Les tests du navigateur utilisent le nom du domaine public avec toutes les requêtes du site redirigées vers le serveur local, toutes les soumissions simulées et les services externes interceptés : aucun faux contact ni email en production. Cas 200, 400, 500, panne réseau, réessai, double envoi, validation, fausse réponse statique 200, absence de données personnelles dans les événements, consentement et retrait, exclusion du développement, pages mobiles, redirections et accès internes.

Le test du fournisseur Google réel a été effectué avec toutes les requêtes de collecte interceptées : deux pages vues pour deux pages, un seul `generate_lead` après succès simulé, aucune valeur personnelle saisie dans les requêtes et suppression des cookies au retrait. Aucun contact ni événement de test envoyé à la production. L’ancien `form_start` automatique et notre début personnalisé sont distincts ; désactiver le premier au déploiement, comme indiqué ci-dessus.

## Lors du push demandé

- Revoir le diff, scanner les fichiers suivis et les nouveaux fichiers pour détecter les secrets ; aucun fichier d’accès ni export privé dans le commit.
- Commit et push seulement sur instruction. Relever le SHA du déploiement Netlify publié, sa date UTC et son état réel.
- Refaire les contrôles en ligne : 13 pages du sitemap, indexabilité, redirections, vraie 404, pages techniques, consentement, chargement du bon flux après accord, absence d’Analytics avant accord et après retrait, absence de doublon de pages vues.
- Vérifier dans l’API Netlify les trois formulaires et leurs champs `profil` / `rgpd`, puis le maintien de la notification email. Ne pas envoyer de formulaire fictif.
- Finaliser les réglages GA4 ci-dessus avec snapshot privé avant/après.
- Resoumettre le sitemap actualisé après sa publication. Inspecter de nouveau les pages stratégiques ; la demande d’indexation manuelle se fait dans Search Console. Ne pas utiliser l’Indexing API, qui n’est pas destinée à ces pages commerciales.
- Mettre à jour la référence privée : date réelle de publication et mesures des 14 jours précédant le changement. Comparer ensuite 14 jours avant et 14 jours après, en attendant la disponibilité des données et en signalant le changement de consentement/couverture. Aucun suivi automatique configuré.
