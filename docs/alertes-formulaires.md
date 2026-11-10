# Alertes de formulaire commencé

Rétablissement demandé par l’utilisateur après confirmation que son dispositif a été vérifié par sa juriste et que les visiteurs sont informés. Cette confirmation n’est pas une certification juridique fournie par le développeur.

Les trois formulaires envoient une alerte à contact@ge-mesdocs.fr lorsque le focus quitte réellement le formulaire ou lorsque l’onglet est masqué/quitté. Les passages entre champs du même formulaire ne déclenchent rien. Une seule alerte est tentée par formulaire et par affichage, uniquement si au moins une coordonnée est renseignée. Les formulaires vides et ceux déjà envoyés avec succès ne produisent pas d’alerte. Une fermeture pendant un envoi en cours ne produit pas non plus d’alerte partielle.

Seuls les champs nom-prénom, téléphone et email sont utilisés, comme dans le mécanisme précédent. Le message libre et les autres champs ne sont pas envoyés dans l’alerte. Les données vont à l’API du site puis au service email configuré, pas à Google Analytics. Le refus des cookies Analytics ne bloque pas cette fonction opérationnelle distincte. L’alerte ne déclenche pas generate_lead ni un second événement de début de formulaire.

L’email est explicitement libellé « Formulaire commencé, non validé » : le visiteur peut encore reprendre la saisie. Il ne faut donc pas le compter comme une demande reçue, un contact qualifié ou une vente.

Protection serveur : destinataire et formulaires autorisés fixes, contrôle d’origine et de format, limite de taille, liste de trois champs, déduplication et limitation de fréquence par instance active. Ces protections en mémoire ne constituent pas une garantie de déduplication globale entre toutes les instances Netlify. Aucun contenu de formulaire ni secret SMTP n’est écrit dans les journaux applicatifs. L’envoi est best-effort : un échec ne doit jamais bloquer la saisie ou la soumission principale.

La politique de confidentialité est mise à jour pour décrire les transmissions avant validation. Aucun nouveau popup ni nouvelle case à cocher n’est ajouté.

Les tests du navigateur interceptent tous les appels d’alerte et toutes les soumissions ; les tests serveur simulent le transport email. Une vérification SMTP peut contrôler la connexion et l’authentification sans envoyer de message. Aucun faux contact ni faux email de production ne doit être créé pour valider cette fonctionnalité.
