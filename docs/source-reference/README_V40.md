## État de correction — V40 (12 octobre 2026)

La V40 est construite sur l’archive V39 récupérée depuis la pièce jointe de conversation (`file_0000000087a881f59528ecb36a60348d`) : 937 857 octets, SHA-256 `d5b66420d779fc5b3d4ad819b1eb534099d75c653c5af14d0725e7b1872f530e`. Le ZIP source a été vérifié avant extraction ; 178 entrées dont 175 pages HTML. V39 est conservée intacte et les contrôles ont été réalisés sur une copie.

La V40 est un jalon de validation fonctionnelle ciblée. Aucun tutoriel, CSS ni JavaScript applicatif n’a été modifié et aucune relecture pédagogique supplémentaire n’a été effectuée dans ce lot. Les 175 pages HTML ont été analysées sans erreur de parsing ; les 1 028 références locales, 874 occurrences externes (636 URL distinctes exactes), 7 fragments, les identifiants, les déclarations UTF-8, les 77 règles CSS et le JavaScript inline ont été contrôlés. Les 174 liens de compétences de l’index sont résolus.

Les 176 ressources locales uniques ont répondu HTTP 200. L’index et les cinq fiches projet ont été rendus dans Chromium via `set_content` à 320, 768 et 1 280 px : 18/18 rendus sans débordement horizontal ni erreur console/de page. La recherche a donné 174 cartes initiales, 2 résultats pour « PostgreSQL », 0 pour une recherche sans correspondance, puis 174 après remise à zéro. Les huit premiers arrêts clavier ont un contour de focus visible de 3 px. Avec `prefers-reduced-motion: reduce`, la page signale la préférence, le défilement est `auto` et les durées de transition/animation sont ramenées à `0.00001s`.

La navigation réelle via `page.goto()` reste bloquée par `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Les 636 URL externes ne sont pas vérifiées exhaustivement ; aucun lecteur d’écran ni audit WCAG exhaustif, serveur backend réel ou base PostgreSQL n’a été utilisé. Les résultats statiques et les rendus `set_content` ne prouvent pas la navigation inter-pages réelle. La V39 n’est pas publiée séparément : V40 la remplace comme jalon de livraison afin de ne pas publier un état documentaire obsolète. Une tentative de publication de V40 et de sept documents associés par chemin de conteneur a échoué sur les huit opérations avec `container_session_unavailable` ; aucun snapshot V40 n’a été publié. Ne pas réessayer avec `container_path` ; utiliser les `file_id` réels des pièces jointes V40 avec `source_file_ref`.

Parcours statique en français destiné à structurer l’apprentissage des compétences nécessaires au développement Full Stack. Le site contient un index navigable, une recherche locale et une page HTML par compétence, complétés par cinq projets pratiques.

## Contenu vérifié de cette version

- **24 chapitres thématiques** dans l’index.
- **169 pages de compétences** et **5 fiches de projets**, soit 174 pages dans `lessons/`.
- Un index `index.html`, une feuille de style `style.css`, ce README et le suivi `PROGRESSION_TUTORIELS.md`.
- HTML, CSS et JavaScript natifs, sans dépendance externe requise pour consulter le parcours.
- Recherche textuelle locale dans l’index, qui filtre les cartes et masque les chapitres sans résultat.

## Ouvrir le parcours

1. Extraire l’archive ZIP en conservant la structure des dossiers.
2. Ouvrir `roadmap_fullstack_2026/index.html` dans un navigateur récent.
3. Sélectionner une carte pour ouvrir la page associée. Utiliser le champ de recherche pour filtrer par titre ou description.
4. Garder `style.css` et le dossier `lessons/` à leur emplacement relatif : les liens sont calculés depuis cette structure.

Aucun serveur ni gestionnaire de paquets n’est nécessaire pour la consultation de base. Un serveur HTTP local peut toutefois être utile si des exercices ajoutés ultérieurement nécessitent des requêtes réseau, des modules JavaScript ou une API.

## Public et conventions pédagogiques

Le parcours vise une personne qui construit ou remet à niveau ses compétences Full Stack. L’ordre des chapitres fournit une progression générale ; il ne remplace pas l’évaluation des prérequis propres à chaque sujet. Les tutoriels visent à expliquer les concepts, les mécanismes, les exemples, les erreurs fréquentes, les compromis et des exercices vérifiables. Les cinq projets servent de fil conducteur pratique. Dans la version de correction actuelle V40, les spécifications des cinq projets pratiques ont été approfondies lors de la campagne de correction. Elles décrivent des exigences et des tests attendus, pas la preuve que les applications correspondantes ont été implémentées ou validées en exécution.

Les exemples restent à vérifier dans le contexte réel d’un projet avant réutilisation. Les versions, configurations et contraintes d’environnement peuvent changer. Les références documentaires sont des pistes de consultation, pas la preuve que chaque ressource a été lue intégralement ou que chaque exemple a été exécuté.

## Historique de validation et limites connues

Le suivi consigne la rédaction initiale, les lots de seconde passe et la campagne de correction. Cela ne signifie pas que chaque page a fait l’objet d’une validation fonctionnelle exhaustive. La V9 a corrigé les trois dernières pages signalées par le parseur HTML strict : `processus-threads-memoire.html`, `reseaux-tcp-ip.html` et `systeme-exploitation-fichiers.html`. Les paragraphes imbriqués et les paragraphes qui entouraient des listes ou des blocs de code ont été remis en structure valide. Dans la V10, un audit pédagogique ciblé a porté sur `securite-api-abus.html`, `securite-dependances.html`, `gestion-secrets.html`, `csrf.html` et `cors.html` : matrices de tests plus observables, portée des audits de dépendances précisée, vérification du suivi Git des fichiers de secrets, distinction renforcée entre jetons CSRF et contrôle d’origine, et validation explicite des pré-vérifications CORS. Dans la V11, cinq pages supplémentaires ont été auditées : `validation-schema.html` corrige l’affichage du générique TypeScript et documente des erreurs de validation bornées sans renvoyer les valeurs reçues ; `upload-fichiers.html` précise le traitement des formats actifs et l’isolation d’origine ; `https-headers.html` fournit une méthode de vérification GET et une matrice de contrôle ; `xss.html` ajoute des tests de non-régression par contexte ; `journalisation-incidents.html` remplace un atelier redondant par un mini-runbook opérationnel. Dans la V12, cinq pages supplémentaires ont été auditées : `rate-limiting.html` clarifie le respect de `Retry-After`, le backoff client et la confiance accordée aux en-têtes de proxy ; `migrations-sans-interruption.html` améliore l’exemple de backfill borné et la gestion des écritures concurrentes ; `sauvegardes-migrations-prod.html` rend la restauration plus sûre avec des variables source/cible séparées, des permissions de fichier restrictives et une vérification de l’archive ; `environnements-dev-test-prod.html` évite de présenter une variable secrète comme une entrée à copier dans un exemple et ajoute un contrôle d’environnement avant opération destructive ; `accessibilite.html` montre comment associer une erreur à un champ invalide.

Après correction, les 175 pages HTML ont été analysées avec `lxml` sur la V11 : aucune erreur de parseur n’a été relevée. Le contrôle local V11 a examiné 1 026 références `href`/`src` et 7 références de fragments ; aucune cible locale ou aucun fragment manquant n’a été détecté. Les contrôles complémentaires de ce lot ont confirmé l’affichage littéral du générique TypeScript, la présence des consignes de sécurité ajoutées et la cohérence des critères d’exercice. Deux extraits JavaScript de la page XSS passent `node --check`, six assertions isolées couvrant la politique d’URL passent, et l’exemple JSON de journalisation est valide. Ces contrôles ne valident pas le rendu dans un navigateur, l’accessibilité complète ni l’exécution des exemples.

Ces contrôles ne prouvent pas le bon rendu dans tous les navigateurs, la compilation ou l’exécution des exemples, la validité actuelle de toutes les sources externes ni l’accessibilité complète.

Les contrôles futurs doivent distinguer explicitement :

- **Rédaction** : le contenu existe.
- **Relecture pédagogique** : le contenu a été lu et évalué pour son utilité pédagogique.
- **Contrôle statique** : structure, chemins, liens et éléments vérifiables par script.
- **Test d’exécution** : code ou comportement effectivement exécuté dans un environnement précisé.
- **Validation navigateur** : affichage et interactions réellement vérifiés dans un navigateur.

Consulter `PROGRESSION_TUTORIELS.md` pour l’historique, les limites connues et les prochaines corrections. Ne pas interpréter un contrôle ancien comme une preuve qu’il a été répété sur toute nouvelle version.

## Jalon V35 — audit ciblé et validation d’exemples (12 octobre 2026)

Cinq pages ont été relues pour vérifier des exemples exécutables : `javascript-typescript.html`, `javascript-avance.html`, `cors.html`, `tests-unitaires.html` et `api-rest.html`. Une lacune a été reproduite dans `cors.html` : l’en-tête `Vary` n’était défini que pour les origines autorisées, et sa définition directe pouvait remplacer d’autres dimensions de cache. Le middleware appelle maintenant `res.vary("Origin")` sur toutes les réponses et ajoute les deux en-têtes de pré-vérification aux réponses `OPTIONS`, en conservant les dimensions `Vary` existantes.

Les contrôles ciblés passent : compilation TypeScript stricte et exécution des cas de garde `unknown`, test des closures et de l’annulation avec un `fetch` simulé, compilation stricte et six cas de contrat pour la remise, dix assertions de politique CORS et de variation du cache, et cinq branches de l’endpoint REST à l’aide de dépendances simulées. Ces tests isolés ne sont pas un serveur Express réel ; Vitest n’est pas installé et sa suite n’a pas été exécutée.

Les 175 pages HTML ont été analysées avec `lxml` sans diagnostic ; les 1 028 références locales, les sept fragments et les 174 liens de compétences ont été contrôlés sans cible manquante, ID dupliqué ni déclaration UTF-8 tardive. Les 176 chemins locaux uniques répondent HTTP 200 ; les 77 règles CSS ne présentent pas d’erreur de parsing et le script JavaScript inline passe `node --check`. La navigation réelle par URL demeure bloquée par `net::ERR_BLOCKED_BY_ADMINISTRATOR`. La vérification externe précédente n’a pas été répétée : les dix essais DNS de V34 avaient échoué pendant la résolution DNS, sans permettre de conclure que les URL sont cassées. Aucun lecteur d’écran, audit WCAG exhaustif ni test d’intégration réel React/Next.js/backend/PostgreSQL n’est revendiqué.

## Jalon V34 — publication V33 et vérification externe ciblée (12 octobre 2026)

La V33 a été publiée dans la bibliothèque `/Devoirs/` à partir des identifiants réels des pièces jointes de conversation. L’archive, le plan canonique et versionné, le suivi, le README, le rapport de validation et le manifeste ont été rematérialisés : les sept snapshots sont identiques octet par octet aux fichiers de référence.

Une tentative de contrôle HTTP de l’ensemble des 636 URL externes distinctes a dépassé la limite d’exécution de l’environnement sans produire de rapport final exploitable ; aucun résultat exhaustif n’est revendiqué. Dix URL représentatives du domaine OWASP Cheat Sheet ont ensuite été testées par `curl` avec une limite de cinq secondes : les dix ont échoué pendant la résolution DNS (`curl` code 28, HTTP `000`). Cela indique une restriction réseau/DNS de l’environnement et ne prouve pas que les liens sont cassés.

La V34 actualise uniquement ce README et `PROGRESSION_TUTORIELS.md`. Les tutoriels, la feuille CSS et le JavaScript applicatif restent inchangés. La navigation directe par URL reste non validée (`net::ERR_BLOCKED_BY_ADMINISTRATOR`) ; les tests navigateur antérieurs utilisent `set_content` et ne démontrent pas la navigation inter-pages. Aucun lecteur d’écran, audit WCAG exhaustif ni build d’application réelle n’est revendiqué.

## Jalon V33 — validation fonctionnelle et publication (12 octobre 2026)

La V33 a été construite à partir de V32 sans modifier les tutoriels ni le code applicatif. Les 175 pages HTML ont été analysées, 1 028 références locales recensées, 874 occurrences externes correspondant à 636 URL distinctes comptées, et aucune cible locale/fragment manquante, aucun ID dupliqué ni charset tardif n’a été détecté. Les 176 ressources locales uniques ont répondu HTTP 200 ; le rendu Chromium via `set_content` a couvert les 175 pages à 375 px et les cinq projets à trois largeurs sans débordement. La navigation réelle est restée bloquée par `net::ERR_BLOCKED_BY_ADMINISTRATOR`.

La publication de V33 est maintenant terminée : sept snapshots (archive, plan canonique/versionné, suivi, README, validation et manifeste) ont été publiés avec `source_file_ref`, rematérialisés et comparés octet par octet : 7/7 identiques. Les contrôles externes exhaustifs et les tests d’intégration applicatifs restent ouverts.

## Jalon V32 — validation fonctionnelle complémentaire (12 octobre 2026)

La V32 poursuit la validation de la copie V31 sans modifier les tutoriels ni le code applicatif. Seuls `README.md` et `PROGRESSION_TUTORIELS.md` ont été actualisés pour consigner les résultats réellement obtenus.

Les 175 pages HTML ont été analysées ; les 1 028 références locales et 7 fragments ne présentent aucune cible manquante, aucun identifiant dupliqué et aucune déclaration UTF-8 tardive. Les 174 liens de compétences de l’index pointent vers des fichiers existants. Un serveur HTTP local a servi les 176 ressources locales uniques : 176 réponses HTTP 200.

Chromium/Playwright, via HTML et CSS injectés avec `set_content`, a rendu les 175 pages à 375 px sans débordement horizontal. L’index et les cinq fiches de projet ont aussi été contrôlés à 375, 768 et 1 365 px (18 rendus sans débordement). La recherche renvoie 2 résultats pour « PostgreSQL », 0 pour une requête absente, puis 174 après remise à zéro. Les sept premiers arrêts clavier ont un contour visible de 3 px. La préférence `prefers-reduced-motion` fixe le défilement à `auto` et réduit les durées de transition et d’animation à `0.00001s`.

La navigation réelle par URL a de nouveau été tentée sur un serveur HTTP local et a échoué avec `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Un essai sur une origine simulée a été bloqué de la même façon. Les rendus `set_content` ne prouvent donc pas la navigation inter-pages. Aucun lecteur d’écran, audit WCAG exhaustif, contrôle HTTP exhaustif des sources externes ni test d’intégration backend/SQL n’a été exécuté. Le rapport `validation_v32.json` et le manifeste `manifest_v32.json` accompagnent cette archive.

## Jalon V31 — validation fonctionnelle complémentaire (12 octobre 2026)

La V31 ne modifie aucun tutoriel ni le code fonctionnel : elle consigne une nouvelle passe de validation automatisée après vérification de la synchronisation exacte des snapshots V30 dans la bibliothèque. L’archive conserve 175 pages HTML et les cinq fiches de projet.

L’analyse statique a parcouru les 175 pages, 1 028 références locales et 7 fragments ; aucune cible locale ou aucun fragment manquant, aucun identifiant dupliqué et aucune anomalie dans les contrôles d’accessibilité heuristiques exécutés. Ces contrôles ont compté 1 960 éléments interactifs et 233 contrôles de formulaire, sans nom accessible ou libellé manquant détecté, et sans référence ARIA brisée. Il s’agit d’un contrôle automatisé ciblé, pas d’une certification WCAG.

Chromium/Playwright a rendu 11 pages représentatives à 375, 768 et 1 365 pixels (33 rendus), sans débordement horizontal, exception ou erreur de page. Sur l’index, la recherche renvoie 2 liens pour « PostgreSQL », aucun pour une chaîne absente, puis 174 après remise à zéro. Les sept premiers arrêts clavier observés ont un indicateur de focus visible de 3 px. Sous `prefers-reduced-motion`, le défilement est `auto` et la durée de transition contrôlée est ramenée à `0.00001s`.

La navigation directe par URL locale a été retentée : Chromium renvoie toujours `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Aucun lecteur d’écran, audit WCAG exhaustif, contrôle HTTP de toutes les sources externes ni test d’intégration backend/SQL n’est revendiqué. Voir le plan externe V31 et `validation_v31.json` pour le détail des résultats.

## Jalon V29 — audit pédagogique ciblé (12 octobre 2026)

Cinq pages ont été relues : `cycle-requete-reponse.html`, `framework-backend.html`, `modules-responsabilites.html`, `logique-metier-validation.html` et `codes-http.html`. Trois ont été corrigées : le titre de la page de choix de framework reflète désormais son contenu comparatif incluant Spring Boot ; la page sur les modules précise qu’un `index.ts` ne constitue pas à lui seul une frontière imposée par TypeScript ; la page HTTP explicite l’en-tête `WWW-Authenticate` requis avec `401` et ajoute une section sur l’idempotence, les répétitions après délai d’attente et les clés d’idempotence applicatives. Les pages sur le cycle requête-réponse et la validation métier ont été auditées sans modification.

Les contrôles V29 sont consignés dans `PROGRESSION_TUTORIELS.md` et dans le rapport externe `validation_v29.json` : 175/175 pages HTML analysées sans exception de parsing, 1 028 références locales et 874 références HTTP/HTTPS recensées, aucune cible locale ou fragment manquant, aucun identifiant dupliqué et 175 cibles HTML dans l’index. Les cinq pages auditées conservent objectifs, exercice, critères de réussite et cinq sources HTTPS visibles concordant avec leurs commentaires documentaires. Sept assertions ciblées couvrent les corrections V29 et l’exemple JSON de Problem Details reste valide. Les exemples restent des supports pédagogiques : aucune application backend complète ni base de données réelle n’a été exécutée. La validation fonctionnelle restante — navigation réelle par URL, lecteur d’écran et vérification exhaustive des sources externes — n’est pas déclarée terminée.

## Jalon V28 — audit pédagogique ciblé (12 octobre 2026)

Cinq pages ont été relues : `debug-frontend.html`, `react-evenements-formulaires.html`, `nextjs.html`, `tests-frontend.html` et `nodejs-typescript.html`. Quatre ont reçu des précisions : le champ contrôlé React est désormais montré avec son `label` ; la page Next.js indique que `error.tsx` doit être un composant client et que `reset()` permet une nouvelle tentative ; l’exemple Testing Library initialise `userEvent` explicitement et l’exemple Playwright documente la dépendance de `page.goto` à `use.baseURL` ; le tutoriel Node.js explique que `engines` ne force pas à lui seul la version du runtime. `debug-frontend.html` a été audité sans modification nécessaire.

Les contrôles V28 sont consignés dans `PROGRESSION_TUTORIELS.md` et le rapport externe `validation_v28.json` : 175/175 pages HTML sans erreur du parseur, 1 028 références locales et 874 références externes recensées, aucune cible locale ni fragment manquant, 176 ressources locales uniques servies en HTTP 200, et cinq assertions ciblées réussies. Les cinq pages relues conservent objectifs, exercice, critères de réussite et au moins cinq sources HTTPS distinctes. Aucun test complet React, Next.js, Testing Library ou Playwright n’est revendiqué : les extraits dépendent d’un projet et de ses composants réels.

La V28 a été construite à partir de l’archive V27 de la conversation après vérification de son intégrité. L’archive de référence V27 reste conservée. La publication dans la bibliothèque est différée selon l’ordre de priorité du plan ; la dernière archive confirmée dans `/Devoirs/` reste V26.


## Jalon V27 — correction responsive et validation fonctionnelle ciblée (11 octobre 2026)

La revalidation responsive de V26 a révélé 14 pages qui débordaient horizontalement à 375 px lorsque la feuille CSS était injectée correctement : les tableaux de données et certains éléments `code` en ligne pouvaient dépasser la largeur de la leçon. `style.css` ajoute une zone de défilement horizontal pour les tableaux et autorise la coupure des longs éléments `code` en ligne hors des blocs `pre`. Les tableaux restent exposés comme tableaux dans l’arbre d’accessibilité Chromium.

**Contrôles V27 :**

- 175/175 pages HTML analysées sans erreur par `lxml` ; 178 entrées dans l’archive complète.
- 177 ressources locales uniques (pages HTML, CSS et autres ressources référencées) servies par HTTP local : 177 réponses 200, aucune erreur.
- 874 références externes HTTP/HTTPS recensées sur l’ensemble des pages ; dix sources représentatives ont été tentées en HTTPS, mais la résolution DNS a échoué dans l’environnement. Les 874 URL ne sont donc pas validées individuellement.
- Contrôle structurel d’accessibilité sur 175 pages : aucun défaut détecté dans les catégories testées (langue, titre, `h1`, identifiants dupliqués, `alt`, libellés des contrôles, noms accessibles et références ARIA).
- Rendu Chromium/Playwright via `set_content` avec le CSS local réellement injecté : 175 pages à 375 px, zéro débordement horizontal ; index et cinq pages ciblées à 375, 768 et 1 365 px, zéro débordement sur les 18 cas.
- Recherche de l’index : 2 résultats pour « PostgreSQL », 0 pour une recherche sans correspondance, 174 après remise à zéro. Focus clavier visible avec contour de 3 px. La préférence `prefers-reduced-motion: reduce` est appliquée.

**Limites :** la navigation réelle par `page.goto` vers `http://127.0.0.1`, `http://localhost` et `file://` reste bloquée par `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Le rendu `set_content` vérifie le DOM et le CSS, pas la navigation entre URL. Aucun lecteur d’écran ni audit WCAG exhaustif n’a été exécuté.

## Historique V26 — validation fonctionnelle ciblée



La validation fonctionnelle a mis en évidence deux défauts d’affichage dans les exemples TypeScript sur petit écran et une ancienne couleur de focus à contraste insuffisant sur les liens de cartes et de navigation. La feuille `style.css` corrige ces points : les blocs `pre` sont limités à la largeur disponible avec défilement horizontal interne, et les liens concernés utilisent un contour de focus `#5146e5`.

**Contrôles exécutés sur cette copie V26 :**

- 175/175 pages HTML analysées sans erreur par `lxml`.
- 1 026 références locales `href`/`src` servies par HTTP local : 1 026 réponses 200.
- 874 références externes recensées et 7 fragments contrôlés ; aucune cible locale ni aucun fragment manquant.
- Le rapport initial V26 indiquait zéro débordement. La revalidation V27 avec injection contrôlée du CSS a révélé 14 débordements à 375 px, dus à des tableaux et à du code en ligne ; ils sont corrigés par les règles CSS V27. La navigation directe reste bloquée par la politique du navigateur.
- Recherche de l’index : 2 cartes visibles pour « PostgreSQL », 0 pour une recherche sans résultat, 174 après remise à zéro. Aucun message d’erreur JavaScript ou erreur de page dans ces rendus.
- Parcours clavier du DOM injecté : le champ de recherche et une carte de compétence affichent un contour de focus de 3 px en `#5146e5`. Contraste calculé : 6,25:1 sur blanc et 5,78:1 sur `#f4f6fb`.
- Les blocs de code longs restent défilables horizontalement sans élargir le document.

**Limites :** `page.goto` vers `file://` et `http://127.0.0.1` est bloqué par `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Le rendu via `set_content` vérifie le DOM et le CSS, mais ne prouve pas la navigation réelle entre URL. La résolution DNS vers deux sources officielles testées a échoué dans l’environnement ; les 874 liens externes ne sont donc pas validés individuellement. Aucun lecteur d’écran ni audit WCAG exhaustif n’a été exécuté.

## Sources documentaires

Les pages de compétences et de projets comportent un commentaire HTML initial contenant des références, ainsi que des liens visibles. La pertinence et l’actualité de chaque référence doivent être contrôlées au moment de l’usage. Un contrôle représentatif d’URL effectué antérieurement ne constitue pas une vérification exhaustive de chaque lien.


## Jalon V12 — audit pédagogique ciblé

Cinq tutoriels supplémentaires ont été relus et corrigés. Les 175 pages HTML passent l’analyse `lxml` stricte ; 1 028 références locales et 7 fragments ont été contrôlés, sans cible manquante. Le fragment shell de restauration passe `bash -n`. Aucune base de données, application, navigateur ou source externe n’a été contacté pendant ces contrôles. L’audit pédagogique global et la validation fonctionnelle restent en cours.


## Jalon V13 — audit pédagogique ciblé

Cinq tutoriels ont été audités : `api-rest.html`, `api-pagination-filtrage.html`, `cache-http-cdn.html`, `metriques-alertes.html` et `tests-charge.html`. Les corrections renforcent les contrôles d’autorisation au niveau de la ressource, donnent un exemple PostgreSQL de pagination par curseur, distinguent `Vary` du contrôle d’accès, rendent l’alerte Prometheus plus robuste face à un dénominateur nul et vérifient le contrat JSON dans l’exemple k6. Les 175 pages passent le parseur strict `lxml` ; 1 028 références locales et 7 fragments ont été contrôlés sans cible manquante. Les extraits JavaScript vérifiés passent `node --check`. Aucun serveur, test de charge réel, Prometheus, navigateur ou HTTP externe n’a été exécuté.


## Jalon V14 — audit pédagogique ciblé

Cinq tutoriels supplémentaires ont été audités : `api-evolutives.html`, `graphql.html`, `recherche-moteurs.html`, `systemes-distribues.html` et `architecture-evenementielle.html`. Les ajouts portent sur les deux directions de compatibilité d’API, la pagination GraphQL par curseur, l’évaluation mesurable de la pertinence d’une recherche, le budget des tentatives réseau et la déduplication/outbox des événements.

Contrôles statiques V14 : 175/175 pages HTML analysées sans erreur du parseur `lxml` ; 1 028 références locales `href`/`src` et 7 références de fragments contrôlées, aucune cible manquante ; 6 assertions ciblées sur les ajouts réussies ; inventaire identique à V13 (178 entrées, dont 175 HTML) ; archive ZIP intègre. Aucun serveur GraphQL, moteur de recherche, courtier, PostgreSQL ou navigateur n’a été exécuté. Les exemples SQL, GraphQL et de politique de retry restent des exemples documentaires non exécutés.


## Jalon V15 — audit pédagogique ciblé

Cinq tutoriels ont été approfondis : `timeouts-retries-annulation.html`, `idempotence-api.html`, `webhooks.html`, `taches-asynchrones.html` et `concurrence-mises-a-jour.html`. Les corrections précisent la distinction timeout/annulation et la politique de retry, rendent concret le registre d’idempotence et sa contrainte d’unicité, traitent atomiquement la réception webhook via inbox/outbox, stabilisent l’identité des jobs et renforcent le contrôle optimiste de concurrence HTTP/SQL.

Contrôles statiques V15 : 175/175 pages HTML passent l’analyse stricte `lxml` ; 1 902 références `href`/`src` parcourues (1 028 références locales, 874 externes) ; 7 références de fragments contrôlées, aucune cible locale ou fragment manquant ; 12 assertions ciblées réussies. Aucun serveur, base de données, navigateur, file de messages ou contrôle HTTP externe n’a été exécuté. Les exemples SQL et TypeScript restent à tester dans leur environnement réel.


## Jalon V16 — audit pédagogique ciblé

Cinq tutoriels ont été revus : `sessions-jwt.html`, `oauth-oidc.html`, `isolation-transactions-verrous.html`, `transactions-metier.html` et `migrations.html`. Les ajouts précisent les attributs de cookie `__Host-`, la rotation et la détection de rejeu des refresh tokens, les validations OIDC et les tests de callback, le contrôle explicite des lignes affectées et les reprises bornées après conflit transactionnel, l’usage de montants entiers en unités mineures pour un transfert illustratif, ainsi qu’un déploiement progressif de contrainte PostgreSQL.

Contrôles statiques V16 : les 175 pages HTML ont été analysées avec `lxml` ; les références locales et les fragments ont été contrôlés ; l’archive complète a été vérifiée. Les résultats chiffrés figurent dans `PROGRESSION_TUTORIELS.md`. Aucun fournisseur d’identité, serveur applicatif, PostgreSQL, navigateur ni service externe n’a été exécuté ou interrogé pendant ce lot.


## Jalon V17 — audit pédagogique ciblé

Cinq pages supplémentaires ont été approfondies : `rbac-abac-controle-acces.html` rend les exemples d’autorisation plus défensifs et ajoute une matrice de refus ; `rotation-secrets-chiffrement.html` fournit un runbook de rotation avec preuves et conditions d’arrêt ; `migrations-livraison.html` illustre un backfill PostgreSQL borné avec traitement séparé des valeurs invalides ; `limites-securite-ia.html` formalise un contrat d’outils et des tests d’abus ; `verification-code-ia.html` explicite le contrat d’arrondi en centimes, utilise `BigInt` et ajoute des exemples de tests de frontière.

Contrôles statiques V17 : 175/175 pages HTML analysées sans erreur par `lxml` ; 1 902 références `href`/`src` parcourues (1 026 locales et 874 externes), 7 fragments contrôlés, aucune cible locale ou fragment manquant ; archive intègre avec 178 entrées dont 175 HTML, inventaire identique à V16. Les cinq pages ont passé 21 assertions ciblées. Node a exécuté 12 assertions sur les exemples d’autorisation et 10 sur le calcul de remise. L’index référence les 174 pages de `lessons/` sans cible manquante ; la recherche a passé 10 assertions sur requête trouvée, remise à zéro et absence de résultat. L’inventaire structurel de 175 pages ne relève aucun titre, `lang`, viewport ou `h1` manquant, aucun ID dupliqué, lien vide ou image sans `alt`. Le CSS contient des breakpoints responsive, une règle `prefers-reduced-motion` et des règles d’impression. Ces contrôles statiques ne remplacent pas des tests navigateur, un audit d’accessibilité complet ni l’exécution des exemples SQL dans PostgreSQL.


## Jalon V18 — audit pédagogique ciblé

Cinq tutoriels ont été revus : `react-hooks.html` transmet désormais l’identifiant de ressource à la requête et traite explicitement l’annulation ; `outils-frontend.html` aligne l’exemple de scripts sur les contrôles décrits en ajoutant la commande de test ; `index-performances.html` emploie les mêmes noms de colonnes dans l’index et les requêtes de mesure ; `typescript-react.html` échappe correctement les génériques dans le HTML afin que les types TypeScript soient affichés ; `gestion-etat.html` déclare explicitement l’union de statuts utilisée par `useState`.

Contrôles statiques V18 : 175/175 pages HTML analysées sans erreur par `lxml` ; 1 902 références parcourues, dont 1 028 locales et 874 externes ; 7 fragments contrôlés, aucune cible locale ou fragment manquant ; 12 assertions ciblées réussies ; archive complète et inventaire vérifiés. Aucune compilation d’un projet React/TypeScript, aucune exécution PostgreSQL et aucun test navigateur réel ne sont revendiqués pour ce lot.


## Jalon V19 — audit pédagogique ciblé

Cinq tutoriels ont été audités et corrigés :

- `performance-frontend.html` ajoute les seuils usuels LCP (≤ 2,5 s), INP (≤ 200 ms) et CLS (≤ 0,1), leur interprétation au 75e percentile des données de terrain et la distinction avec les mesures de laboratoire.
- `jointures-agregations.html` donne un exemple PostgreSQL complet qui distingue `WHERE` et `HAVING`, utilise un paramètre lié et demande de tester les cardinalités sans enfant, avec un enfant et avec plusieurs enfants.
- `react-composants.html` rend concret le typage des props TypeScript et l’usage d’une clé stable dans une liste ; il précise que `key` n’est pas une prop ordinaire.
- `tailwind-composants.html` ajoute un type explicite `button`, un focus visible plus lisible et distingue l’attribut natif `disabled` de `aria-disabled`.
- `normalisation.html` illustre une dépendance partielle sur une clé composée, une dépendance transitive et les limites de la clé de ligne proposée.

Contrôles statiques V19 : 175/175 pages HTML analysées sans erreur par `lxml` ; 1 902 références `href`/`src` parcourues (1 028 locales, 874 externes), aucune cible locale manquante ni aucun fragment manquant ; aucun titre, `lang`, viewport ou `h1` manquant, aucun ID dupliqué, lien vide ou image sans `alt` ; 174/174 liens de compétences de l’index pointent vers un fichier existant. Les cinq pages conservent leurs objectifs, exercice, critères de réussite et cinq liens HTTPS visibles ainsi que cinq références dans le commentaire de sources.

La recherche de l’index a passé 10 assertions Node avec un DOM simulé : résultat trouvé, recherche insensible à la casse, absence de résultat, masquage des chapitres et remise à zéro. Ce test n’est pas un test navigateur. Aucun test PostgreSQL, compilateur React/TypeScript, rendu Tailwind, navigateur réel, audit d’accessibilité complet ni contrôle HTTP externe n’a été exécuté.

## Jalon V20 — audit pédagogique ciblé

Cinq tutoriels ont été relus dans l’ordre prévu : `architecture-ordinateur.html`, `terminal-shell-bash.html`, `javascript-typescript.html`, `structures-donnees-algorithmes.html` et `complexite-algorithmique.html`. L’architecture documente désormais les mêmes cinq sources dans le commentaire initial et dans les liens visibles, distingue mieux les mesures `free`/`df`/`du` et propose un mini-lab HTTP local limité à `127.0.0.1`. Le tutoriel Bash fournit une solution complète de comptage de fichiers HTML qui préserve les noms contenant des espaces ou des retours à la ligne, contrôle l’échec de `find` et refuse l’écrasement d’un rapport. Le tutoriel TypeScript valide les champs et les valeurs de rôle avant d’affirmer le type `Utilisateur`, puis donne une matrice de cinq cas positifs/négatifs. Les pages sur les structures de données et la complexité ont été auditées ; leurs explications et garde-fous existants ont été jugés suffisants, sans réécriture artificielle.

Contrôles V20 : 175/175 pages HTML analysées sans erreur avec `lxml` en UTF-8 ; 1 028 références locales et 874 externes parcourues, sans cible locale ni fragment manquant ; 174/174 liens de compétences/projets de l’index résolus ; structure de base des 175 pages sans anomalie détectée ; cinq pages avec cinq URL documentaires cohérentes entre commentaire initial et liens visibles. Le script Bash extrait passe `bash -n` et quatre tests fonctionnels réussissent (chemins avec espaces/retour à la ligne, rapport existant, répertoire absent, arguments invalides). La garde TypeScript compile avec `tsc --strict --target ES2020` et ses cinq cas de test s’exécutent sans échec. Le mini-lab HTTP local a répondu en 200 et son corps a été vérifié. Chromium headless, piloté par Playwright, a rendu l’index et les cinq pages à 375, 768 et 1 365 px : aucun débordement horizontal ; la recherche a réussi les cas trouvé/aucun résultat/remise à zéro ; le parcours clavier a donné au champ de recherche un contour visible de 3 px ; aucune erreur JavaScript n’a été relevée dans ces rendus. Le chargement par navigation directe `page.goto` (URL locale HTTP et `file://`) a été bloqué par la politique de l’environnement (`net::ERR_BLOCKED_BY_ADMINISTRATOR`) ; les tests Chromium ont donc utilisé `set_content` avec la feuille CSS injectée. La navigation réelle par URL, l’accessibilité complète et la vérification HTTP des sources externes restent à terminer.

La prochaine étape est de poursuivre la validation fonctionnelle (navigation réelle, clavier/focus, contraste et accessibilité), puis de publier la version dans la bibliothèque. L’audit pédagogique suivant portera ensuite sur `javascript-avance.html`, `http.html`, `git.html`, `navigateur-dom-devtools.html` et `html-semantique.html` (cinq pages maximum).



## Jalon V21 — validation fonctionnelle ciblée

La validation V21 a complété le contrôle de desserte locale : un serveur HTTP temporaire a servi les 175 pages HTML et les 1 026 références locales `href`/`src` ont répondu en HTTP 200. Les fragments et chemins avaient également été contrôlés statiquement. L’audit statique de structure/accessibilité n’a pas relevé de titre, langue, viewport ou `h1` manquant, de lien/bouton sans nom accessible, de contrôle de formulaire sans libellé, d’image sans `alt`, d’identifiant dupliqué, de saut de niveau de titre, de tableau sans en-tête/légende ni de lien `_blank` sans `noopener`. L’index ne contient pas de landmark `<nav>` et 15 tutoriels ne possèdent pas de `<footer>` ; ces observations sont consignées, sans les présenter comme des échecs WCAG automatiques.

Le calcul de contraste a mis en évidence une faiblesse réelle de l’ancien anneau de focus `#a5b4fc` : 1,99:1 sur blanc et 1,84:1 sur le fond de page, insuffisant pour un indicateur non textuel à 3:1. La V21 remplace cette couleur par `#5146e5` pour l’anneau et la bordure de focus de la recherche. Le contraste mesuré est de 6,25:1 sur blanc et 5,78:1 sur le fond de page. Les 14 paires de couleurs textuelles sélectionnées dans la palette passent le seuil AA de 4,5:1 ; ce contrôle reste ciblé et ne vaut pas audit exhaustif de toutes les combinaisons rendues.

La feuille CSS contient les points de rupture à 900 px et 720 px, un état `:focus-visible`, `prefers-reduced-motion`, des règles d’impression et un défilement horizontal pour les blocs de code. La tentative de lancer Chromium headless dans l’environnement courant a expiré sans produire de DOM ; Playwright n’est pas installé dans cet environnement. La navigation réelle entre URL, le parcours clavier dans un navigateur, l’audit d’accessibilité complet et le contrôle HTTP externe des sources restent donc non validés. Aucun test PostgreSQL, React/TypeScript applicatif, Tailwind ou autre exemple métier n’a été exécuté dans ce jalon.


## Historique des corrections — V22

Cette version poursuit l’audit ciblé sur cinq pages : `javascript-avance.html`, `http.html`, `git.html`, `navigateur-dom-devtools.html` et `html-semantique.html`. Les corrections portent sur la comparaison séquentiel/concurrent avec les promesses, les directives de cache HTTP et la revalidation ETag, la reprise correcte après conflits Git en merge ou rebase, et l’association accessible entre champ de formulaire et message d’erreur. `navigateur-dom-devtools.html` a été audité sans modification, car ses procédures de diagnostic et ses précautions sur les données sensibles étaient déjà suffisamment explicites.

Les contrôles exécutés pour V22 sont consignés dans `PROGRESSION_TUTORIELS.md`. Les exemples sont vérifiés statiquement et, lorsque possible, par des tests isolés ; cela ne constitue pas une validation complète dans un navigateur ou dans une infrastructure applicative.

## Jalon V23 — audit pédagogique ciblé

Cinq pages ont été auditées : `accessibilite.html`, `css-fondamentaux.html`, `flexbox-grid.html`, `responsive-design.html` et `javascript-dom.html`. Les corrections précisent l’emplacement de `aria-expanded` sur le bouton de divulgation et son lien `aria-controls`, complètent l’ordre de la cascade CSS avec la proximité de portée, illustrent les niveaux de spécificité, distinguent `auto-fit` de `auto-fill`, bornent les animations sous `prefers-reduced-motion` et ajoutent une région de statut pour annoncer l’ajout d’une tâche sans déplacer le focus. L’exemple DOM synchronise désormais l’état accessible du bouton et la propriété `hidden` du panneau.

Contrôles V23 : les 175 pages HTML ont été analysées ; 1 026 références locales de chemin ont été contrôlées, plus 7 références de fragment, sans cible manquante ; 874 références externes ont été recensées sans vérification HTTP exhaustive. Les 174 liens de compétences/projets de l’index ont une cible existante. Les cinq pages conservent chacune cinq URL dans le commentaire de sources et cinq liens visibles. Quatre extraits JavaScript de `javascript-dom.html` passent `node --check` ; les tests isolés du panneau de divulgation passent 4 assertions et ceux du formulaire/statut passent 8 assertions. `tinycss2` analyse la feuille CSS (74 règles) et quatre extraits CSS responsive sans erreur.

Un serveur HTTP local a servi les 1 026 références de chemin : 1 026 réponses HTTP 200, aucune erreur. Chromium headless piloté par Playwright a rendu l’index et les cinq pages avec CSS injectée via `set_content` à 375, 768 et 1 365 px : 18 rendus sans débordement horizontal, aucune erreur JavaScript ; la recherche a réussi les cas résultat trouvé, aucun résultat et remise à zéro ; le premier focus clavier observé est visible avec un contour de 3 px. La navigation directe par URL reste bloquée par `net::ERR_BLOCKED_BY_ADMINISTRATOR` ; ces tests ne valident donc pas la navigation réelle entre fichiers. La tentative de publication V23 dans la bibliothèque a échoué avec `container_session_unavailable` ; le ZIP et les documents de cette version sont fournis en pièces jointes et devront être conservés via leurs `file_id` réels avec `source_file_ref`, sans nouvelle tentative par `container_path`.



## Jalon V24 — audit pédagogique ciblé

Cinq tutoriels ont été audités : `fetch-apis-navigateur.html`, `typescript-generiques.html`, `typescript-unions-intersections.html`, `typescript-types-conditionnels-mappes.html` et `typescript-utilitaires.html`. Quatre pages ont été corrigées : l’exemple Fetch montre désormais comment annuler une recherche précédente et empêcher une réponse obsolète d’écraser la plus récente ; les exemples TypeScript d’exhaustivité et de types dérivés évitent les collisions de noms lors du regroupement des extraits ; le type de création utilisateur utilise une liste positive de champs et le nom `RolePermissions` évite une collision avec le type global DOM `Permissions`. Le tutoriel sur les génériques a été audité sans modification nécessaire.

Contrôles V24 : 175/175 pages HTML analysées sans erreur ; 1 026 références locales et 7 fragments contrôlés sans cible manquante ; un serveur HTTP local a répondu 200 pour les 1 026 références locales ; 874 références externes recensées sans vérification HTTP exhaustive ; 174/174 liens de compétences/projets de l’index résolus. Les cinq pages ont chacune cinq URL documentaires dans le commentaire initial et cinq liens visibles identiques. Les six extraits JavaScript de la page Fetch passent `node --check` ; le test de réponses arrivant dans le désordre passe quatre assertions. Les exemples TypeScript combinés des pages unions, types conditionnels/mappés et utilitaires compilent en mode strict ; les neuf blocs du tutoriel sur les génériques compilent séparément. Le test négatif d’exhaustivité échoue comme attendu lorsqu’une variante non traitée est ajoutée ; le test de type confirme que `UserCreation` refuse `isAdmin`.

Ces contrôles ne remplacent pas la navigation réelle entre URL, un audit WCAG exhaustif, un lecteur d’écran, la vérification HTTP de toutes les sources ni l’exécution d’applications métier. La prochaine étape est un audit ciblé des pages TypeScript/API/SQL non encore couvertes, par lots de cinq maximum.


## Jalon V25 — audit pédagogique ciblé

Cinq tutoriels ont été relus : `typescript-unknown-never.html`, `typescript-modules-tsconfig.html`, `contrats-api-validation.html`, `api-erreurs-coherentes.html` et `plans-execution-sql.html`. Trois pages ont été corrigées : les exemples `unknown`/`never` évitent désormais une collision de noms lorsqu’ils sont réunis ; l’exemple NodeNext aligne les chemins `src/`, le `include` du `tsconfig` et l’extension `.js` attendue à l’exécution ; le gestionnaire Express crée l’identifiant de requête avant le parsing JSON et distingue un JSON mal formé (400), un corps trop volumineux (413) et une panne inattendue (500). Les pages sur les contrats d’API et les plans SQL ont été auditées sans réécriture superflue.

Contrôles V25 : les 175 pages HTML passent l’analyse stricte ; 1 028 références locales et 874 références externes ont été recensées, sans chemin local ni fragment manquant ; les 174 liens de compétences/projets de l’index sont résolus. Les exemples TypeScript `unknown`/`never` compilent ensemble en mode strict. L’exemple de modules NodeNext passe le contrôle TypeScript avec `include: ["src/**/*.ts"]`, puis le JavaScript émis s’exécute et affiche `5`. Le gestionnaire d’erreurs Express passe le contrôle de types avec des déclarations de test minimales et quatre scénarios isolés vérifient l’ordre des middlewares, les réponses 400/413/500 et la corrélation du `requestId`.

Ces résultats ne remplacent pas une exécution sur une application Express réelle, un test PostgreSQL, un audit d’accessibilité complet ou la vérification HTTP de toutes les sources externes.


## Validation fonctionnelle — V30 (12 octobre 2026)

La validation de la V29 a confirmé les interactions de l’index dans Chromium/Playwright à partir du HTML réel et de la feuille CSS intégrée au DOM : 174 cartes, deux résultats pour « PostgreSQL », zéro résultat pour une requête sans correspondance, puis 174 cartes après remise à zéro. Le parcours clavier a montré un indicateur `:focus-visible` de 3 px sur le champ de recherche et la première carte de compétence. La préférence `prefers-reduced-motion` désactive le défilement fluide et réduit la durée des transitions.

Le rendu responsive a été contrôlé sur les 175 pages HTML à 375 px, puis sur cinq pages représentatives à 375, 768 et 1 365 px : aucun débordement horizontal observé, aucune erreur console ni exception JavaScript pendant les tests injectés. Un serveur HTTP local a servi 176 ressources uniques, toutes en HTTP 200. L’analyse statique a contrôlé 1 026 références locales, 874 URL externes recensées, zéro chemin/fragment manquant, zéro ID dupliqué et 174 liens de compétences dans l’index.

Le contrôle d’encodage a aussi détecté sept pages dont le commentaire documentaire placé avant le doctype repoussait la déclaration UTF-8 au-delà de la limite de 1 024 octets (ou faisait dépasser cette limite à la balise complète). Dans ces sept pages, le commentaire a été déplacé dans le `<head>`, immédiatement après `<meta charset="utf-8">`. Les 175 déclarations UTF-8 sont maintenant complètes dans les 1 024 premiers octets. Le commentaire et les liens documentaires sont conservés.

**Limites :** `page.goto()` vers le serveur HTTP local reste bloqué par `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Les contrôles navigateur reposent donc sur `set_content` avec le HTML et le CSS réels ; ils ne valident pas la navigation entre URL. Aucun lecteur d’écran, audit WCAG exhaustif, contrôle HTTP des 874 URL externes ni test d’intégration applicatif/SQL n’a été exécuté.


## Publication V30 et suite du contrôle

L’archive V29 et ses documents de référence ont été conservés dans `/Devoirs/`. Une première V30 et ses documents ont été publiés. Les sept snapshots de cette première publication ont été rematérialisés et comparés octet par octet aux fichiers locaux de cette étape. Après l’ajout du statut final dans le README, le suivi, le plan et les rapports, la tentative de rafraîchissement a échoué avec `container_session_unavailable`. La bibliothèque contient donc une première V30 (924 784 octets, SHA-256 `38221140e83fcba2b6533ff6a0ee375844cd007b4b5eee16aaa7c26cfddfa31c`) qui ne correspond plus aux fichiers finaux de cette exécution. Les pièces jointes finales doivent être republiées avec leurs `file_id` réels via `source_file_ref` ; ne pas réessayer avec `container_path` si la session est indisponible.

Les contrôles à reprendre restent la navigation réelle entre URL (bloquée dans cet environnement), l’accessibilité avec lecteur d’écran et audit WCAG exhaustif, la vérification HTTP des liens externes et les tests d’intégration applicatifs.


## Validation fonctionnelle — V33 (12 octobre 2026)

La V33 poursuit la validation de V32 sans modifier les tutoriels, la feuille de style ni le JavaScript applicatif. Le contrôle statique a analysé 175 pages HTML, vérifié 1 028 occurrences de références locales (1 026 chemins et 2 références à fragment seul), 7 références de fragments et 874 occurrences externes correspondant à 636 URL exactes distinctes. Aucune cible locale ou de fragment manquante, aucun identifiant dupliqué, aucune déclaration UTF-8 absente ou tardive, aucune référence ARIA cassée et aucun contrôle de formulaire sans libellé n’ont été détectés par les vérifications exécutées. Les 174 liens de compétences de l’index pointent vers des cibles existantes. Les 77 règles CSS analysées ne contiennent aucune erreur de parsing et le seul script JavaScript inline passe `node --check`.

Un serveur HTTP local temporaire a répondu HTTP 200 pour les 176 chemins uniques. Chromium système via Playwright a rendu les 175 pages avec `set_content` et le CSS du projet injecté à 375 px : aucun débordement horizontal, aucune erreur console et aucune exception de page. L’index a conservé 174 cartes au départ, 2 résultats pour « PostgreSQL », 0 pour une requête sans correspondance et 174 après remise à zéro. Les cinq fiches de projet ont été rendues à 375, 768 et 1 365 px (15 cas) sans débordement. Le focus clavier observé est visible avec un contour de 3 px ; la préférence de mouvement réduit fixe le défilement à `auto`.

**Limites :** la navigation réelle par `page.goto()` vers le serveur local échoue toujours avec `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Le rendu via `set_content` ne valide pas la navigation entre URL. Les 636 URL externes ne sont pas toutes vérifiées par HTTP ; aucun lecteur d’écran, audit WCAG exhaustif, build React/Next.js réel ni test d’intégration backend/PostgreSQL n’a été exécuté.

La V32 a été publiée dans `/Devoirs/` via `source_file_ref` pendant l’exécution 33. Les sept snapshots (archive, plan canonique et versionné, suivi, README, validation et manifeste) ont été rematérialisés et comparés aux pièces jointes de conversation : 7/7 identiques octet par octet. La V33 est la version de travail courante ; sa publication et la vérification des snapshots sont l’étape suivante.


## Mise à jour V39 — publication V38 vérifiée

Le 12 octobre 2026, l’archive V38 et les dix documents associés ont été publiés dans `/Devoirs/` avec leurs identifiants de pièce jointe via `source_file_ref`. Les 11 fichiers publiés ont été rematérialisés et comparés octet par octet aux sources de conversation : 11/11 identiques. Cette mise à jour ne constitue pas une nouvelle validation des exemples applicatifs. Prochaine priorité : publier V39 via `source_file_ref`, vérifier les snapshots, puis reprendre les contrôles fonctionnels encore non validés lorsque l’environnement le permet.
