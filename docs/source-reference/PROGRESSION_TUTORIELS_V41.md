## État courant — V41, synchronisation documentaire après publication V40 (12 octobre 2026)

- **Archive d’entrée :** `Roadmap_Full_Stack_2026_V40.zip`, pièce jointe de conversation `file_0000000081f081f4966ef80014634eac`, 937 410 octets, SHA-256 `e02920b6cc1380fb76acf1adc6ef6a078aaa5fb9f878554d2b84e06bcdae883b`. Le ZIP source a passé `testzip()` ; 178 entrées dont 175 HTML. V40 est conservée intacte et V41 a été construite sur une copie.
- **Plans et suivi consultés :** plan canonique et progression V40 de la conversation, puis plan canonique et progression V40 de `/Devoirs/`. La copie de conversation est la plus récente ; elle confirme la publication V40, tandis que le plan de la bibliothèque n’avait pas encore enregistré ce résultat.
- **Publication V40 confirmée :** archive et huit documents associés dans `/Devoirs/` via `source_file_ref` ; 9/9 snapshots rematérialisés et comparés octet par octet. Le rapport `publication_v40_verification.json` confirme 0 écart.
- **Lot V41 :** mise en cohérence du README et du suivi internes avec la publication réellement confirmée. Aucun tutoriel, CSS ni JavaScript applicatif modifié ; aucune page de tutoriel relue.
- **Contrôles V41 :** ZIP source vérifié avant extraction ; l’archive de sortie conserve 178 entrées et 175 pages HTML. Seuls `README.md` et `PROGRESSION_TUTORIELS.md` diffèrent du ZIP V40. Le ZIP final et les empreintes de toutes les entrées ont été vérifiés.
- **Limites fonctionnelles héritées :** navigation directe encore bloquée par `net::ERR_BLOCKED_BY_ADMINISTRATOR` ; les 636 URL externes ne sont pas vérifiées exhaustivement ; audit lecteur d’écran/WCAG exhaustif et intégration backend/PostgreSQL réels non exécutés. Les rendus `set_content` ne prouvent pas la navigation réelle.
- **Publication V41 :** pas encore tentée. V40 reste la dernière archive publiée et confirmée dans `/Devoirs/`. La prochaine publication devra utiliser les `file_id` réels des pièces jointes V41 avec `source_file_ref`, puis vérifier les snapshots rematérialisés.

### Exécution 43 — synchronisation README/suivi après publication V40 (12 octobre 2026)

- [x] Rechercher les archives et plans dans la conversation et la bibliothèque ; retenir V40, plus récente que V38 dans `/Devoirs/`.
- [x] Matérialiser l’archive V40, le plan canonique et le suivi avec leurs `file_id` réels ; lire les versions conversation et bibliothèque.
- [x] Vérifier V40 avant extraction : SHA-256 `e02920b6cc1380fb76acf1adc6ef6a078aaa5fb9f878554d2b84e06bcdae883b`, ZIP valide, 178 entrées dont 175 HTML.
- [x] Corriger dans le README l’état obsolète affirmant que V40 n’était pas publiée ; enregistrer les 9/9 correspondances de publication confirmées.
- [x] Synchroniser le suivi à partir de la dernière pièce jointe de conversation et ajouter le journal V41 ; aucune page de tutoriel relue.
- [x] Créer l’archive complète V41 et vérifier l’inventaire, l’intégrité ZIP et les empreintes des 178 entrées.
- [ ] Publier V41 et ses documents associés via `source_file_ref`, puis rematérialiser et comparer les snapshots.
- [ ] Navigation réelle, HTTP exhaustif des 636 URL externes, audit lecteur d’écran/WCAG exhaustif et tests d’intégration backend/PostgreSQL restent non validés.

### Exécution 42 — publication et vérification V40 (12 octobre 2026)

- [x] Publier V40 et huit documents associés dans `/Devoirs/` via `source_file_ref`.
- [x] Rematérialiser les neuf snapshots et comparer leurs octets : 9/9 correspondances exactes.
- [x] Confirmer l’archive publiée : 937 410 octets, SHA-256 `e02920b6cc1380fb76acf1adc6ef6a078aaa5fb9f878554d2b84e06bcdae883b`, 178 entrées dont 175 HTML.
- [x] Mettre à jour le plan canonique publié ; la copie de progression avait conservé un état antérieur, corrigé dans V41.

### Exécution 41 — validation fonctionnelle ciblée (12 octobre 2026)

- [x] Analyser 175/175 pages HTML, références locales/externes, fragments, IDs, charset, CSS, JavaScript inline, liens de l’index et heuristiques d’accessibilité.
- [x] Tester 176 ressources locales par HTTP : 176/176 réponses 200.
- [x] Rendre l’index et les cinq fiches projet via `set_content` à trois largeurs : 18/18 rendus sans débordement horizontal ni erreur console/de page.
- [x] Tester la recherche, les huit premiers arrêts clavier et `prefers-reduced-motion`.
- [x] Retenter la navigation directe ; blocage confirmé `net::ERR_BLOCKED_BY_ADMINISTRATOR`.
- [ ] Navigation directe, HTTP externe exhaustif, audit WCAG/lecteur d’écran exhaustif et intégration backend/PostgreSQL réelle restent non validés.

### Exécution 40 — publication V38 et vérification (12 octobre 2026)

- [x] Publier V38 et dix documents associés via `source_file_ref`.
- [x] Rematérialiser les onze snapshots et comparer leurs octets : 11/11 correspondances exactes.
- [x] Vérifier l’archive publiée : 936 713 octets, 178 entrées dont 175 HTML.

---

### Exécution 39 — audit pédagogique ciblé, lot 22 (12 octobre 2026)

- [x] Rechercher les archives et le plan dans la conversation et la bibliothèque ; retenir V37, la dernière archive de correction jointe à la conversation, et lire le plan/suivi V37 ainsi que le plan/suivi V36 de la bibliothèque.
- [x] Matérialiser V37 avec son `file_id` réel ; vérifier SHA-256, intégrité ZIP et inventaire avant extraction ; travailler sur une copie distincte.
- [x] Relire exactement cinq pages : `cache-http-cdn.html`, `idempotence-api.html`, `api-pagination-filtrage.html`, `injection-dependances.html`, `architecture-modulaire.html`.
- [x] Corriger l’explication de `s-maxage`, la validation stricte du paramètre de pagination et l’ordre des ateliers/validations/sources sur les pages concernées ; laisser `injection-dependances.html` inchangée après audit.
- [x] Contrôler 175 pages HTML, liens/fragments, IDs, charset, CSS et syntaxe JS inline ; tester 176 cibles locales par HTTP.
- [x] Exécuter 10 cas Node sur le snippet réel de pagination et rendre les cinq pages auditées à trois largeurs : 15/15 cas sans débordement ni erreur de page/console.
- [x] Mettre à jour README/suivi internes et produire l’archive complète V38 avec manifeste et rapport de validation.
- [x] Tenter la publication de l’archive V38 et de dix documents associés : 11/11 opérations échouent avec `container_session_unavailable`, aucun snapshot publié.
- [ ] Publier V38 et les documents finaux via `source_file_ref` à partir des `file_id` réels des pièces jointes, puis rematérialiser et comparer les snapshots.
- [ ] Navigation réelle, lecteur d’écran/WCAG exhaustif, HTTP externe exhaustif et tests d’intégration réels restent non validés.

---

### Exécution 38 — publication V36 et approfondissement des cinq projets (12 octobre 2026)

- [x] Rechercher les archives et plans dans la conversation et la bibliothèque ; retenir la V36 jointe à la conversation comme archive corrigée la plus récente.
- [x] Matérialiser V36 depuis son `file_id` réel ; vérifier SHA-256, `testzip()` et l’inventaire avant extraction.
- [x] Lire le plan canonique, le plan versionné et le suivi ; inventorier `/Devoirs/`.
- [x] Publier l’archive V36 et huit documents associés via `source_file_ref`.
- [x] Rematérialiser les neuf snapshots publiés et les comparer aux pièces jointes : **9/9 correspondances exactes octet par octet**.
- [x] Relire exactement les cinq fiches de projet, sans relire d’autres tutoriels.
- [x] Corriger les contrats d’API, les exigences d’authentification/CSRF, les contrôles de santé, le dossier de transfert et la porte de livraison des risques.
- [x] Contrôler 175 pages HTML, liens/fragments, IDs, charset, CSS, JavaScript inline et HTTP local ; résultats consignés dans `validation_v37.json`.
- [x] Tester les cinq fiches dans Chromium à trois largeurs : 15/15 rendus sans débordement ni erreur de page/console.
- [x] Mettre à jour README et suivi internes et créer l’archive complète V37.
- [ ] Publier V37 et ses documents finaux, puis vérifier les snapshots.
- [ ] Navigation réelle, lecteur d’écran/WCAG exhaustif, HTTP externe exhaustif et intégration applicative/SQL restent non validés.


### Exécution 37 — audit pédagogique ciblé, lot 21 (12 octobre 2026)

- [x] Rechercher les archives/plans dans la conversation et la bibliothèque ; retenir V35, la plus récente archive de correction disponible.
- [x] Vérifier l’intégrité ZIP et travailler sur une copie ; conserver V35 intacte.
- [x] Lire le plan canonique, le plan versionné et le suivi ; vérifier l’historique avant de sélectionner les pages.
- [x] Relire exactement cinq tutoriels : `monolithe-microservices.html`, `scalabilite.html`, `conception-exploitation.html`, `documentation-officielle.html`, `open-source.html`.
- [x] Corriger la sémantique des sections et préciser readiness/liveness dans `conception-exploitation.html`.
- [x] Ajouter un contrôle avant l’exécution des scripts de dépôts inconnus dans `open-source.html`.
- [x] Auditer les trois autres pages sans modification.
- [x] Mettre à jour le README et le suivi internes, puis valider l’archive complète V36.
- [ ] Publier l’archive et les documents V36 finaux, puis vérifier tous les snapshots.
- [ ] Reprendre navigation réelle, lecteur d’écran/WCAG exhaustif, HTTP externe exhaustif et tests d’intégration réels lorsqu’ils seront possibles.

---

### Exécution 36 — publication et vérification de V35 (12 octobre 2026)

- [x] Récupérer et lire le plan canonique/versionné V35, le suivi V35 et le README V35 depuis les pièces jointes de conversation ; consulter `/Devoirs/` avant modification.
- [x] Publier l’archive V35 et les sept documents associés avec leurs `file_id` réels et `source_file_ref`.
- [x] Préserver le plan canonique V33 en le renommant en fichier de sauvegarde explicite ; publier le plan canonique V35 à son chemin canonique.
- [x] Rematérialiser l’archive, les deux plans, le suivi, le README, le rapport de validation, le manifeste et le rapport des tests de code ; comparer les octets.
- [x] Résultat : 8/8 snapshots identiques ; archive V35 de 933 277 octets, SHA-256 `ffe283c7e55cf2dbdcb8e6e83592ca969e70748f1fe655d1ad150ac0aae87abd`.
- [ ] Reprendre les contrôles dépendant du DNS, de la navigation directe et de services réels lorsqu’ils seront disponibles.

---

## Historique — exécution 35 avant publication

### Exécution 35 — audit ciblé et validation d’exemples (12 octobre 2026)

- [x] Rechercher archives et plans dans la conversation et la bibliothèque ; retenir V34 de la conversation comme archive corrigée la plus récente et lire le plan/suivi V34 ainsi que les versions V33 présentes dans la bibliothèque.
- [x] Vérifier V34 : 931 394 octets, SHA-256 `8faf7abd97361c3d578b390401bec01b3ae7b9839007204321e0cd1518a02620`, ZIP intègre, 178 entrées dont 175 HTML.
- [x] Limiter la relecture à cinq pages : `javascript-typescript.html`, `javascript-avance.html`, `cors.html`, `tests-unitaires.html`, `api-rest.html`.
- [x] Corriger `cors.html` : appliquer `Vary` à toutes les variantes et aux dimensions de pré-vérification sans remplacer les valeurs déjà définies.
- [x] Compiler et exécuter les exemples TypeScript de garde `unknown` ; tester closures/annulation avec `fetch` simulé ; compiler/exécuter six cas de la fonction de remise ; exécuter dix assertions CORS et cinq branches de handler REST avec dépendances simulées.
- [x] Contrôler 175/175 pages HTML, les liens locaux/fragments, le charset, les règles CSS et le JavaScript inline ; créer V35 et vérifier ZIP/inventaire/empreintes.
- [ ] Tests Vitest réels, serveur Express réel, navigation directe, lecteur d’écran/WCAG exhaustif, vérification HTTP externe exhaustive et tests d’intégration backend/PostgreSQL.
- [ ] Publier V35, le plan canonique/versionné, le suivi, le README, le rapport de validation, le manifeste et le rapport de tests via les `file_id` réels et `source_file_ref`, puis vérifier les snapshots octet par octet.

**Prochaine étape :** publier V35 à partir des pièces jointes finales lorsqu’elles disposent de leurs `file_id` réels. Maintenir comme non validés les contrôles qui nécessitent une navigation, un DNS ou des services réels indisponibles.

---

## Historique — état V34 (12 octobre 2026)

### État initial du jalon V34

- **Archive d’entrée :** V33 jointe à la conversation, `file_00000000c2388230bf2b380c1c129284`, 929 989 octets, SHA-256 `d449b37f3d68d38895786b568143e59a9caae76515dd3194325e3c1224092e4e`. ZIP vérifié ; 178 entrées dont 175 HTML ; travail effectué sur une copie.
- **Publication V33 :** sept snapshots publiés dans `/Devoirs/` avec `source_file_ref`, rematérialisés puis comparés aux pièces jointes ; 7/7 identiques octet par octet. V33 est désormais l’archive confirmée de la bibliothèque.
- **Vérification externe ciblée :** une tentative de balayage des 636 URL externes distinctes a dépassé 300 secondes et n’a pas produit de rapport final exploitable. Dix URL représentatives OWASP testées avec `curl` (GET, redirections suivies, délai maximal 5 s) ont toutes expiré pendant la résolution DNS : code `curl` 28, HTTP `000`. Ne pas en conclure que les liens sont cassés ; la connectivité DNS de l’environnement est bloquante.
- **Code du livrable :** aucun tutoriel, CSS ou JavaScript applicatif modifié. Seuls `README.md` et `PROGRESSION_TUTORIELS.md` ont changé ; aucun audit pédagogique approfondi n’a été effectué dans ce lot, donc la limite de cinq pages est respectée.
- **Contrôles hérités de V33 :** 175 pages HTML, 1 028 références locales, 7 fragments, 174 liens de compétences, 0 cible manquante, 0 ID dupliqué ; 176 ressources locales uniques en HTTP 200 ; 175 rendus à 375 px sans débordement ; cinq projets testés à 375/768/1 365 px sans débordement ; recherche/focus/mouvement réduit validés via `set_content`.
- **Limites :** navigation directe bloquée par `net::ERR_BLOCKED_BY_ADMINISTRATOR`; aucun lecteur d’écran, audit WCAG exhaustif ni build/test d’intégration React/Next.js/backend/PostgreSQL exécuté.

### Exécution 34 — publication V33 et vérification externe ciblée (12 octobre 2026)

- [x] Rechercher les archives/plan en conversation et bibliothèque ; lire le plan et le suivi V33 avant action.
- [x] Matérialiser les snapshots réels de l’archive, du plan canonique et du suivi V33.
- [x] Publier V33, les plans, le suivi, le README, la validation et le manifeste via `source_file_ref`.
- [x] Rematérialiser les sept fichiers publiés et vérifier 7/7 correspondances octet par octet.
- [x] Tenter une vérification des 636 URL externes distinctes ; la commande a dépassé 300 secondes sans rapport final exploitable, donc aucun résultat exhaustif n’est déclaré.
- [x] Tester dix URL représentatives avec `curl` ; dix expirations de résolution DNS (`curl` 28, HTTP `000`), sans conclusion sur l’état réel des URL.
- [x] Mettre à jour README/suivi et créer V34, en conservant V33 intacte.
- [ ] Reprendre le contrôle HTTP externe lorsque la résolution DNS est disponible ; lecteur d’écran/WCAG exhaustif, navigation directe et tests d’intégration applicatifs/SQL restent non réalisés.

**Prochaine étape :** poursuivre les contrôles fonctionnels restants seulement lorsqu’ils sont réalisables ; sinon conserver précisément les blocages et reprendre l’audit pédagogique ciblé par lots de cinq pages maximum, sans déclarer les tests non exécutés comme réussis.

---

## Historique — état V33 (12 octobre 2026)

- **Archive d’entrée :** V32 jointe à la conversation, `file_00000000940481fa8b8c5419ea726eaa`, 929 051 octets, SHA-256 `7f04fe02e47aa95d990274b12857aca647b66c7db2673df1961a93ee66d49f91`. ZIP vérifié avant extraction ; 178 entrées dont 175 HTML ; copie de travail distincte.
- **Plan et progression lus :** plan canonique de conversation et suivi V32 lus ; inventaire de `/Devoirs/` effectué. V32 a été publiée avec `source_file_ref` pendant cette exécution ; les sept snapshots ont été rematérialisés et comparés octet par octet : 7/7 identiques.
- **Validation statique :** 175/175 pages HTML analysées ; 1 028 occurrences de références locales (1 026 chemins et 2 références à fragment seul), 7 références de fragments, 174 liens de compétences et 874 occurrences externes (636 URL exactes distinctes). Aucun chemin/fragment manquant, ID dupliqué, charset tardif, contrôle de formulaire sans libellé ou IDREF ARIA cassé détecté. 77 règles CSS analysées sans erreur ; le script JavaScript inline passe `node --check`.
- **HTTP local :** 176 chemins de ressources uniques testés avec un serveur HTTP local temporaire ; 176/176 réponses HTTP 200.
- **Rendu navigateur :** 175 pages rendues à 375 px avec Chromium système/Playwright via `set_content` et CSS injecté ; zéro débordement, zéro erreur console et zéro exception de page. Les cinq fiches de projet ont été testées à 375/768/1 365 px : 15/15 cas sans débordement.
- **Recherche et clavier :** 174 cartes initiales ; « PostgreSQL » = 2 résultats ; requête sans correspondance = 0 ; remise à zéro = 174 cartes. Le focus observé a un contour visible de 3 px ; `prefers-reduced-motion` fixe le défilement à `auto`.
- **Navigation directe :** `page.goto()` vers le serveur local retesté avec Chromium système ; échec confirmé `net::ERR_BLOCKED_BY_ADMINISTRATOR`. La navigation inter-pages reste non validée.
- **Relecture pédagogique :** aucun tutoriel n’a été relu pour un audit éditorial ni modifié. Les fiches projets ont uniquement fait l’objet de tests de rendu ; limite de cinq tutoriels relus respectée.
- **Limites :** aucune vérification HTTP exhaustive des 636 URL externes, aucun lecteur d’écran/audit WCAG complet, aucun build réel React/Next.js ni test d’intégration backend/PostgreSQL.
- **Fichiers internes modifiés en V33 :** `README.md` et `PROGRESSION_TUTORIELS.md` uniquement.

### Exécution 33 — validation fonctionnelle complémentaire et publication V32 (12 octobre 2026)

- [x] Rechercher archives et plans dans la conversation et `/Devoirs/` ; sélectionner et matérialiser V32, la version corrigée la plus récente.
- [x] Lire le plan et le suivi avant les contrôles.
- [x] Vérifier l’intégrité de V32 : 929 051 octets, SHA-256 `7f04fe02e47aa95d990274b12857aca647b66c7db2673df1961a93ee66d49f91`, 178 entrées dont 175 HTML.
- [x] Analyser les 175 pages, références locales/fragments, IDs, charset, libellés, références ARIA, index et CSS ; vérifier la syntaxe du script inline.
- [x] Servir 176 chemins locaux uniques : 176 réponses HTTP 200.
- [x] Rendre les 175 pages à 375 px ; aucun débordement ni erreur de page/console. Tester l’index et les cinq fiches projets aux largeurs prévues.
- [x] Retenter la navigation directe ; consigner le blocage exact `net::ERR_BLOCKED_BY_ADMINISTRATOR`.
- [x] Publier V32, ses plans, le suivi, le README, le rapport et le manifeste avec `source_file_ref`. Rematérialiser et comparer les sept snapshots : 7/7 identiques.
- [x] Mettre à jour README/suivi, créer V33 et vérifier son ZIP, inventaire, manifeste et empreinte.
- [x] Publier les pièces jointes finales V33 dans `/Devoirs/` via leurs `file_id` réels et `source_file_ref` ; rematérialisation et comparaison : 7/7 snapshots identiques.
- [ ] Navigation inter-pages réelle, lecteur d’écran/WCAG exhaustif, vérification HTTP exhaustive des URL externes et tests d’intégration backend/SQL.

**Prochaine étape historique V33 :** la publication et la vérification des snapshots ont été terminées à l’exécution 34. Les vérifications externes et tests d’intégration restent ouverts ; ne pas déclarer la navigation réelle validée tant que le blocage persiste.

---

## Historique — état V32 (12 octobre 2026)

- **Archive d’entrée :** V31 jointe à la conversation, `file_00000000926081f6bd97cd3f173374f2`, 927 103 octets, SHA-256 `d90d5ea22d76ec1444eaee31e07e3db3985310d6920a883fb3709cf69e35f4b3`. ZIP vérifié avant extraction ; 178 entrées dont 175 HTML ; travail sur une copie distincte.
- **Plan et suivi lus :** plan canonique/versionné et progression V31 de la conversation examinés ; la bibliothèque contenait V30 avant synchronisation. V31 est désormais publiée dans `/Devoirs/` et les 11 snapshots (archive, plans canonique/versionné, suivi, README, validation, manifeste et rapports de contrôle) ont été rematérialisés et comparés octet par octet : 11/11 identiques.
- **Validation statique :** 175 pages HTML, 1 028 occurrences de références locales, 176 chemins de ressources uniques, 7 fragments, 174 liens de compétences et 874 occurrences de liens externes (636 URL externes exactes uniques). Aucune cible locale/fragment manquante, aucun ID dupliqué, aucune déclaration UTF-8 absente ou trop tardive, aucune erreur de parsing CSS.
- **HTTP local :** les 176 ressources locales uniques ont répondu HTTP 200.
- **Rendu responsive :** les 175 pages ont été rendues à 375 px sans débordement horizontal. L’index et les cinq fiches de projet ont été testés à 375, 768 et 1 365 px : 18/18 cas sans débordement.
- **Interactions de l’index :** 174 cartes initiales ; recherche « POSTGRESQL » = 2 résultats ; requête absente = 0 résultat et 25 chapitres masqués ; remise à zéro = 174 cartes et 25 chapitres visibles. Aucun message d’erreur console ni erreur de page pendant les rendus injectés.
- **Clavier et mouvement réduit :** les sept premiers arrêts clavier présentent un contour `:focus-visible` de 3 px, couleur `#5146e5`. Le contraste calculé de cette couleur est de 6,25:1 sur blanc et 5,78:1 sur `#f4f6fb`. Avec `prefers-reduced-motion`, `scroll-behavior` vaut `auto` et les durées contrôlées sont `0.00001s`.
- **Navigation directe :** un nouvel essai de `page.goto()` vers `http://127.0.0.1` a échoué avec `net::ERR_BLOCKED_BY_ADMINISTRATOR`; une origine simulée a également été bloquée. La navigation réelle entre URL reste non validée.
- **Relecture pédagogique :** aucun tutoriel n’a été relu pour un audit éditorial dans ce lot ; les pages de projet ont seulement été rendues pour le contrôle responsive. La limite de cinq tutoriels relus est respectée.
- **Limites :** aucun lecteur d’écran, audit WCAG exhaustif, vérification HTTP exhaustive des 636 URL externes distinctes ni test d’intégration backend/SQL n’a été exécuté. Les résultats de l’audit statique d’accessibilité V31 restent heuristiques, pas une certification.
- **Fichiers internes modifiés en V32 :** `README.md` et `PROGRESSION_TUTORIELS.md`. Aucun tutoriel, CSS ou JavaScript applicatif n’a été modifié.

### Exécution 32 — validation fonctionnelle complémentaire (12 octobre 2026)

- [x] Rechercher les archives dans la conversation et la bibliothèque ; retenir V31 de la conversation comme archive la plus récente ; lire le plan et le suivi.
- [x] Matérialiser V31 via son `file_id` réel et vérifier l’intégrité : 927 103 octets, SHA-256 `d90d5ea22d76ec1444eaee31e07e3db3985310d6920a883fb3709cf69e35f4b3`, 178 entrées dont 175 HTML.
- [x] Reprendre la publication V31 avec `source_file_ref` : 11 fichiers publiés puis rematérialisés ; 11/11 identiques octet par octet.
- [x] Revalider les références locales et servir 176/176 ressources uniques en HTTP 200 ; aucune cible manquante, aucun ID dupliqué ni déclaration UTF-8 tardive.
- [x] Rendre les 175 pages à 375 px et six pages représentatives à trois largeurs ; aucun débordement horizontal.
- [x] Tester la recherche, la remise à zéro, les sept premiers arrêts clavier et `prefers-reduced-motion`.
- [x] Retenter la navigation réelle et simulée ; consigner le blocage `net::ERR_BLOCKED_BY_ADMINISTRATOR`.
- [x] Mettre à jour README et suivi, produire V32 et vérifier le ZIP ainsi que l’inventaire.
- [ ] Navigation réelle entre URL, lecteur d’écran/WCAG exhaustif, vérification HTTP des sources externes et tests d’intégration applicatifs/SQL.

**Prochaine étape :** publier V32 et ses documents finaux après disponibilité de leurs identifiants de pièces jointes, puis reprendre les contrôles externes et applicatifs qui restent ouverts. Si la navigation reste bloquée, conserver explicitement cette limite et ne pas déclarer la validation complète.

# Suivi de rédaction et de révision — Roadmap Full Stack 2026

## Historique — état courant V31 (12 octobre 2026)

- **Archive d’entrée :** V30 jointe à la conversation, `file_00000000ae4c820c945ccd9531b18a2f`, 925 468 octets, SHA-256 `aca700c43132bd7493d55eafbd58d8d3c88b8dfa2499493a7e34d7de019902eb`. ZIP vérifié avant extraction ; 178 entrées dont 175 HTML ; travail effectué sur une copie.
- **Synchronisation V30 :** les sept snapshots V30 de `/Devoirs/` (archive, plan canonique/versionné, suivi, README, validation et manifeste) ont été remplacés via `source_file_ref`, rematérialisés puis comparés octet par octet aux pièces jointes de conversation. Les sept comparaisons sont identiques.
- **Validation V31 :** analyse statique des 175 pages, 1 028 références locales, 7 fragments et 174 liens de compétences dans l’index ; aucune cible locale/fragment manquant ni ID dupliqué. Audit heuristique de 1 960 contrôles interactifs et 233 contrôles de formulaire : aucune anomalie de nom accessible, de libellé ou de référence ARIA détectée.
- **Rendu navigateur :** 11 pages représentatives rendues à 375, 768 et 1 365 px (33 cas), sans débordement, exception ni erreur de page. Recherche de l’index : 174 cartes initiales, 2 résultats PostgreSQL, 0 résultat sans correspondance, 174 après remise à zéro. Les sept premiers arrêts clavier ont un contour de focus de 3 px ; `prefers-reduced-motion` réduit la transition à `0.00001s` et fixe le défilement à `auto`.
- **Navigation directe :** nouvel essai avec un serveur HTTP local bloqué par `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Le test `set_content` ne valide pas la navigation réelle entre URL.
- **Relecture pédagogique :** aucun lot de relecture approfondie n’a été réalisé ; une seule page a été inspectée ponctuellement pour confirmer que les cases de validation sont imbriquées dans leurs libellés. La limite de cinq pages reste respectée.
- **Limites :** pas de lecteur d’écran, d’audit WCAG exhaustif, de vérification HTTP exhaustive des URL externes ni de test d’intégration backend/SQL. Les contrôles heuristiques ne valent pas conformité complète.

### Exécution 31 — validation fonctionnelle complémentaire (12 octobre 2026)

- [x] Rechercher les archives et le plan dans la conversation et la bibliothèque ; retenir V30 de la conversation comme archive la plus récente et lire le plan ainsi que le suivi avant action.
- [x] Matérialiser V30 par son `file_id` réel et vérifier l’intégrité : 925 468 octets, SHA-256 `aca700c43132bd7493d55eafbd58d8d3c88b8dfa2499493a7e34d7de019902eb`, 178 entrées dont 175 HTML.
- [x] Synchroniser via `source_file_ref` les sept snapshots V30 existants dans `/Devoirs/` et rematérialiser chaque fichier : archive, plan canonique, plan versionné, progression, README, validation et manifeste. Les sept fichiers sont identiques octet par octet aux références de conversation.
- [x] Contrôler les 175 pages HTML, 1 028 références locales, 7 fragments, 174 liens de compétences, les identifiants et les références ARIA ; aucun défaut dans les catégories statiques vérifiées.
- [x] Auditer heuristiquement 1 960 contrôles interactifs et 233 contrôles de formulaire : aucun nom accessible ou libellé manquant détecté, aucune référence ARIA brisée.
- [x] Rendre 11 pages représentatives à 375, 768 et 1 365 px : 33/33 cas sans débordement horizontal, exception ni erreur de page.
- [x] Vérifier les interactions de l’index : 174 cartes initiales, 2 résultats pour PostgreSQL, 0 pour une recherche sans correspondance, 174 après remise à zéro ; sept arrêts clavier consécutifs avec focus visible de 3 px ; réduction de mouvement appliquée.
- [x] Retenter la navigation directe vers un serveur HTTP local ; noter le blocage réel `net::ERR_BLOCKED_BY_ADMINISTRATOR` sans déclarer la navigation validée.
- [x] Mettre à jour README et suivi internes ; produire une archive V31 complète et un rapport/manifeste externes.
- [ ] Navigation directe réelle, lecteur d’écran, audit WCAG exhaustif, vérification HTTP exhaustive des sources externes et tests d’intégration applicatifs/SQL.

**Fichiers internes modifiés pour V31 :** `README.md` et `PROGRESSION_TUTORIELS.md`. Aucun tutoriel ni fichier de code n’a été modifié.

- **Publication V31 :** le statut initialement bloqué a été résolu à l’exécution 32. L’archive, le plan canonique et versionné, le suivi, le README et cinq rapports ont été publiés via `source_file_ref`, puis rematérialisés ; les 11 fichiers sont identiques octet par octet aux pièces jointes de conversation.

## Historique — état courant V29 (12 octobre 2026)

- **Archive d’entrée :** V28 de la conversation, `file_000000003cd881f5965bbc34500e1cfb`, 921 151 octets, SHA-256 `1574e64f0aa655cb8e1e0e6a1d2246cbd30b0f6bacf3a9cbc5a28383df43dbc5`. ZIP vérifié avant extraction ; 178 entrées dont 175 HTML. La V28 reste conservée intacte.
- **Lot pédagogique V29 :** cinq pages relues : `cycle-requete-reponse.html`, `framework-backend.html`, `modules-responsabilites.html`, `logique-metier-validation.html`, `codes-http.html`.
- **Corrections V29 :** le titre de `framework-backend.html` est aligné sur son contenu ; `modules-responsabilites.html` distingue l’index conventionnel d’un véritable contrôle d’imports ; `codes-http.html` précise l’en-tête `WWW-Authenticate` des réponses 401 et explique idempotence HTTP, répétitions après timeout et clés d’idempotence applicatives. `cycle-requete-reponse.html` et `logique-metier-validation.html` ont été audités sans modification.
- **Validation :** 175/175 pages analysées sans exception de parsing ; 1 028 références locales et 874 références HTTP/HTTPS recensées ; 0 cible locale manquante, 0 fragment manquant, 0 ID dupliqué ; 175 cibles HTML dans l’index ; cinq pages avec objectifs, exercice, critères et cinq sources HTTPS visibles concordant avec le commentaire ; sept assertions ciblées réussies ; exemple JSON Problem Details valide. Les résultats détaillés sont dans `validation_v29.json` ; empreintes individuelles dans `manifest_v29.json`. L’archive V29 conserve 178 entrées dont 175 HTML et un inventaire identique à V28.
- **Limites :** aucun serveur Express/NestJS/Spring réel, base PostgreSQL, suite d’intégration backend, navigateur par navigation directe, lecteur d’écran ou audit WCAG exhaustif exécuté. Les références externes sont recensées mais ne sont pas déclarées toutes vérifiées par HTTP.
- **Publication :** au début de cette exécution, V26 est la dernière archive confirmée dans `/Devoirs/`; V28 est la dernière archive jointe à la conversation. La publication reste différée jusqu’aux étapes de validation fonctionnelle prioritaires. Utiliser les `file_id` réels et `source_file_ref`, sans `container_path` si la session est expirée.

Ce document reste la source de vérité de l’avancement éditorial et pédagogique. « 169/169 compétences » désigne un état de rédaction/relecture consigné, pas une preuve d’exécution exhaustive de chaque exemple.

### Exécution 30 — audit pédagogique ciblé, lot 19 (12 octobre 2026)

- **Base retenue :** V28, pièce jointe de conversation `file_000000003cd881f5965bbc34500e1cfb`, 921 151 octets ; SHA-256 `1574e64f0aa655cb8e1e0e6a1d2246cbd30b0f6bacf3a9cbc5a28383df43dbc5`. ZIP valide, 178 entrées dont 175 HTML ; extraction sur une copie de travail distincte.
- **Pages relues (cinq au total) :** `cycle-requete-reponse.html`, `framework-backend.html`, `modules-responsabilites.html`, `logique-metier-validation.html`, `codes-http.html`.
- **Corrections :** titre HTML de `framework-backend.html` généralisé car le contenu compare aussi Spring Boot ; ajout d’une réserve pédagogique indiquant que `index.ts` n’impose pas à lui seul une frontière d’imports ; `codes-http.html` précise l’obligation `WWW-Authenticate` avec 401 et ajoute la distinction entre méthodes idempotentes, effet d’une répétition, risque après timeout et stratégie de clé d’idempotence côté API.
- **Contrôles exécutés :** `ZipFile.testzip()` confirme l’intégrité de V28 avant extraction ; analyse des 175 pages sans exception ; 1 028 références locales et 874 externes recensées ; aucun chemin local, fragment ou ID dupliqué manquant ; 175 cibles HTML de l’index ; les cinq pages ont les quatre sections pédagogiques requises et cinq liens HTTPS visibles concordant avec les cinq URL documentaires commentées ; sept assertions ciblées réussies ; le JSON de Problem Details se parse. Le ZIP V29 a été recréé puis vérifié ; les valeurs sont dans `validation_v29.json`.
- **Pages sans modification :** `cycle-requete-reponse.html` et `logique-metier-validation.html`.
- **Prochaine étape :** reprendre la validation fonctionnelle, en commençant par les tests réalisables dans cet environnement ; conserver les blocages de navigation directe et de vérification DNS externe comme non résolus.


## État précédent — V28 (12 octobre 2026)

- **Archive d’entrée :** V27 de la conversation, `file_00000000fb3c81fab5774f874be9d5f5`, 919 789 octets, SHA-256 `a6e3e169dff64716fdb0a195aa1de67477e9014535c7a4b92f6832607c25b835`. ZIP intègre, 178 entrées dont 175 HTML ; extraction sur une copie de travail distincte.
- **Lot pédagogique V28 :** cinq pages relues, sans dépasser la limite : `debug-frontend.html`, `react-evenements-formulaires.html`, `nextjs.html`, `tests-frontend.html`, `nodejs-typescript.html`.
- **Modifications V28 :** champ contrôlé React associé à un libellé explicite ; obligation `error.tsx` en composant client dans l’App Router et rôle de `reset()` ; initialisation de `userEvent.setup()` et prérequis `use.baseURL` pour les exemples Testing Library/Playwright ; portée du champ `engines` et vérification effective de la version Node dans la CI. `debug-frontend.html` a été relu sans modification.
- **Validation structurelle :** 175 pages HTML analysées ; références locales, fragments, IDs, titres et structure des cinq pages ciblées contrôlés. Résultats détaillés dans `validation_v28.json`.
- **Limites :** aucun projet React/Next.js complet, aucune suite réelle Testing Library/Playwright, aucun serveur applicatif ou lecteur d’écran n’a été exécuté. Les 874 liens externes ne sont pas déclarés vérifiés exhaustivement ; les restrictions DNS et navigateur des lots précédents restent ouvertes.
- **Publication :** V28 est le livrable de travail courant ; V27 reste l’archive source conservée et V26 est la dernière archive confirmée dans `/Devoirs/`. La publication de V28 est différée jusqu’après l’audit pédagogique et la validation fonctionnelle prioritaire. Ne pas utiliser `container_path` si la session de conteneur est expirée ; utiliser les `file_id` réels et `source_file_ref` pour les snapshots finaux.

Ce document reste la source de vérité de l’avancement éditorial et pédagogique. La progression « 169/169 compétences » est un état de rédaction/relecture consigné, et non une preuve d’exécution exhaustive des exemples.

### Exécution 29 — audit pédagogique ciblé, lot 18 (12 octobre 2026)

- **Base retenue :** V27, pièce jointe de conversation `file_00000000fb3c81fab5774f874be9d5f5`, 919 789 octets ; SHA-256 vérifié `a6e3e169dff64716fdb0a195aa1de67477e9014535c7a4b92f6832607c25b835`. ZIP valide, 178 entrées dont 175 HTML.
- **Pages relues :** `debug-frontend.html`, `react-evenements-formulaires.html`, `nextjs.html`, `tests-frontend.html`, `nodejs-typescript.html` (cinq au total).
- **Corrections :** `react-evenements-formulaires.html` ajoute le `label` manquant à l’exemple de champ contrôlé ; `nextjs.html` précise que `error.tsx` doit être un composant client et que `reset()` sert à retenter sans exposer les détails internes ; `tests-frontend.html` montre l’initialisation `userEvent.setup()` et précise que `page.goto` utilise `use.baseURL` pour les chemins relatifs ; `nodejs-typescript.html` précise que `engines` documente la compatibilité mais n’impose pas la version du runtime. `debug-frontend.html` a été audité sans changement.
- **Contrôles exécutés :** parseur HTML strict sur 175/175 pages ; 1 028 références locales et 874 références externes recensées ; aucune cible locale ni aucun fragment manquant ; aucun ID dupliqué ; 176 chemins de ressources locales uniques servis par HTTP, tous en 200 ; 175/175 cibles HTML présentes dans l’index ; les cinq pages relues possèdent objectifs, exercice, critères de réussite et au moins cinq liens HTTPS distincts ; cinq assertions ciblées réussies ; ZIP intègre et inventaire identique (178 entrées, 175 HTML).
- **Non exécuté :** build React/Next.js, suite réelle Testing Library/Playwright, serveur métier, navigation directe par URL, lecteur d’écran, audit WCAG exhaustif, contrôle HTTP exhaustif des sources externes.
- **Fichiers modifiés :** `lessons/react-evenements-formulaires.html`, `lessons/nextjs.html`, `lessons/tests-frontend.html`, `lessons/nodejs-typescript.html`, `README.md`, `PROGRESSION_TUTORIELS.md`. Aucun autre tutoriel n’a été relu.
- **Prochaine étape :** poursuivre l’audit pédagogique par cinq pages maximum, puis reprendre la validation fonctionnelle et la publication de l’archive et des documents finaux dans la bibliothèque.


## Historique du jalon V26 (11 octobre 2026)

- **Archive d’entrée :** V25 de la conversation, `file_00000000c0c881f8b5c1070185af5f31`, 915 082 octets, SHA-256 `6ee85b29fed297d9515896e273d6e190506c2149cc9baa53dfba3d9c5ab95939`. `testzip()` réussi ; 178 entrées dont 175 HTML. La copie V25 de la bibliothèque était plus ancienne (915 008 octets, SHA-256 `7fdc1994b7160bd9a5ba1dac3a41aca0387dbfbcfa7fbc160b398506a49f41e4`) et a été identifiée comme telle.
- **Correction fonctionnelle :** `style.css` limite globalement les blocs `pre` à la largeur disponible avec défilement horizontal interne et remplace la couleur de focus périmée `#a5b4fc` des liens de cartes/navigation par `#5146e5`.
- **Inventaire et structure :** 175/175 pages HTML sans erreur `lxml` ; 1 026 références locales `href`/`src` et 7 fragments contrôlés ; 874 références externes recensées ; aucune cible locale ou fragment manquant ; 174/174 liens de compétences/projets de l’index résolus.
- **HTTP local :** 1 026/1 026 références locales répondent HTTP 200.
- **Chromium/Playwright :** rendu DOM injecté des 175 pages à 375 px sans débordement horizontal ; index et cinq pages ciblées vérifiés à 375, 768 et 1 365 px ; recherche testée (2 résultats PostgreSQL, 0 résultat pour une chaîne absente, 174 après remise à zéro) ; contour de focus clavier de 3 px en `#5146e5` sur le champ et une carte ; aucune erreur JavaScript ou de page observée.
- **Limites :** la navigation réelle par `page.goto` vers `file://` ou `http://127.0.0.1` reste bloquée par `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Le rendu `set_content` n’est pas une preuve de navigation entre URL. La résolution DNS de deux sources externes testées a échoué ; les 874 références externes ne sont pas toutes vérifiées. Aucun lecteur d’écran ni audit WCAG exhaustif.
- **Progression réconciliée :** le tableau de seconde passe marque maintenant 169/169 compétences terminées, conformément aux lots 34 à 56 déjà consignés. Cela ne vaut pas validation fonctionnelle exhaustive de chaque tutoriel.
- **Archive V26 :** jalon créé sur copie ; V25 conservée intacte comme référence de travail. Le résultat final de synchronisation bibliothèque sera consigné dans le plan de correction externe.


Ce document est la source de vérité pour l’avancement éditorial et pédagogique du projet. Il distingue la rédaction initiale de la seconde passe : une page déjà rédigée n’est pas automatiquement considérée comme approfondie, relue ou validée.

## 1. État documentaire et périmètre de la version de référence

- **Index :** 169 compétences et 5 projets référencés, plus le lien de retour vers l’index.
- **Pages sous `lessons/` :** 174 fichiers HTML, soit 169 compétences et 5 projets.
- **Rédaction initiale :** 169/169 compétences consignées comme rédigées dans l’historique.
- **Seconde passe éditoriale :** le journal des lots 34 à 56 annonce la révision des 169 compétences. Cette déclaration historique ne vaut pas validation exhaustive de chaque contenu dans la version présente.
- **Projets pratiques :** 5 pages présentes. Les cinq fiches ont été approfondies dans les exécutions 2 à 6 de la campagne de correction. Elles restent des spécifications de réalisation et ne constituent pas une preuve que les applications ont été implémentées ou fonctionnellement validées.
- **Archive de référence auditée :** `roadmap_fullstack_2026_tutoriels_final.zip`.
- **Taille :** 836 798 octets.
- **SHA-256 :** `d5b2b0eb4ac1fd578f4165d5ea2272c4fcb7053a3f4ab37b7202a9fee3cd65a3`.
- **Intégrité ZIP :** test d’intégrité réussi le 10 octobre 2026 ; 178 entrées dans l’archive.

### Limites de preuve

L’historique contient des descriptions de lots et des contrôles annoncés. Les chiffres de lots 49 à 56 doivent être lus avec leurs journaux respectifs ; les anciennes lignes de progression qui ne couvrent que les lots 34 à 48 ne peuvent pas servir seules de preuve de la seconde passe complète. Les contrôles effectués sur la copie de référence pour la campagne de correction sont consignés séparément ci-dessous. Aucun test navigateur réel ni aucune exécution exhaustive des exemples ne sont revendiqués à ce stade.

## Campagne de correction — 10 et 11 octobre 2026

### Exécution 1 — inventaire et documentation de livraison

- Archive source : `roadmap_fullstack_2026_tutoriels_final.zip` (836 798 octets ; SHA-256 indiqué ci-dessus).
- Extraction : copie de travail dédiée `roadmap_fullstack_2026_correction_v1/` ; archive source préservée.
- Inventaire : 178 entrées ZIP ; 174 pages HTML sous `lessons/`, dont 169 compétences et 5 projets ; `index.html`, `style.css`, README et suivi présents.
- Index : 175 liens HTML uniques relevés, dont le lien de retour `index.html` ; les liens vers les pages de leçon pointent vers les 174 pages attendues.
- Liens locaux de l’index : 0 chemin manquant lors du contrôle statique.
- Corrections effectuées : README réécrit pour expliquer l’ouverture locale, la recherche, le contenu réel et les limites des validations ; en-tête du suivi corrigé pour retirer la contradiction entre l’état du lot 56 et la référence au lot 54 ; limites de preuve explicitées.
- Non effectué : test navigateur réel, validation exhaustive des liens externes, exécution des exercices ou des exemples applicatifs.
- Prochaine étape historique : fiche Projet 1, puis projets 2 à 5 par lots limités. Voir les exécutions suivantes pour l’état actuel.


### Exécution 2 — Projet 1 : Site frontend

- **Fichier modifié :** `lessons/projet-1-site-frontend.html`.
- **Ajouts :** contexte utilisateur, périmètre et hors périmètre, exigences fonctionnelles/non fonctionnelles, stack et structure proposée, étapes de réalisation, critères d’acceptation mesurables, plan de tests, sécurité, accessibilité, publication, livrables et définition de terminé.
- **Sources visibles :** cinq liens, alignés sur les références du commentaire documentaire initial.
- **Limites :** les URL externes n’ont pas été recontrôlées en HTTP pendant cette exécution ; aucun rendu navigateur n’a été testé. La checklist HTML est une aide locale et ses cases ne sont pas persistantes.
- **Statut :** spécification approfondie et contrôle statique en cours ; ce projet n’est pas déclaré fonctionnellement validé tant qu’une réalisation n’a pas été testée.


### Exécution 3 — Projet 2 : API et base de données

- **Fichier principal modifié :** `lessons/projet-2-api-base-donnees.html`.
- **Documentation synchronisée :** `README.md` précisait alors que les projets 1 et 2 étaient approfondis ; cette information a été mise à jour à l’exécution 4 pour inclure le projet 3.
- **Spécification ajoutée :** périmètre/hors périmètre, contrat REST pour les routes de santé et CRUD, statuts HTTP, validation, enveloppe d’erreur, pagination, modèle PostgreSQL, migrations, architecture en couches, stack de référence, critères d’acceptation, tests unitaires/intégration, sécurité, exploitation et livrables.
- **Sources :** cinq références visibles et dans le commentaire HTML initial ; les URL n’ont pas été recontrôlées en HTTP durant cette exécution.
- **Contrôles statiques exécutés :** intégrité de l’archive d’entrée ; analyse de 1 024 liens/ressources locaux sur les 175 pages HTML, avec 0 cible locale manquante et 0 fragment HTML manquant ; présence des cinq références et des sections attendues dans la fiche modifiée ; comparaison de l’inventaire après réarchivage.
- **Limites :** aucune API n’a été implémentée ; aucun test d’application, navigateur ou appel HTTP externe n’a été exécuté. Le projet est une spécification, pas une réalisation validée.
- **Statut :** spécification approfondie ; validation fonctionnelle non revendiquée.
- **Archive produite :** `roadmap_fullstack_2026_corrections_v2.zip` ; intégrité et inventaire vérifiés après la mise à jour du suivi.
- **Prochaine étape à cette date :** Projet 3 — Application Full Stack. La fiche a été approfondie à l’exécution 4 ; poursuivre avec les projets 4 et 5.

## 2. Définitions des états

| État | Signification | Quand le cocher |
|---|---|---|
| Rédigé | Une page de tutoriel existe pour la compétence. | Après vérification de sa présence dans le projet. |
| Audité | Le tutoriel a été lu intégralement et ses lacunes sont consignées. | Après examen réel du contenu, pas sur la seule présence de sections. |
| Révisé | Le contenu a été restructuré ou enrichi, ou a été examiné puis explicitement jugé suffisamment solide. | Après intervention éditoriale/pédagogique effective et consignation. |
| Validé | Les contrôles pédagogiques et techniques requis ont été exécutés et les défauts bloquants corrigés. | Après contrôle de la page modifiée et mise à jour du suivi. |

Ces états ne sont pas interchangeables. Une page ne passe pas automatiquement à « validée » parce qu’elle est rédigée, parce que son HTML se parse ou parce que les sections attendues existent.

## 3. Objectif pédagogique de la seconde passe

Chaque tutoriel doit enseigner une compétence utilisable, et non simplement présenter un thème. L’objectif est que l’apprenant puisse **comprendre, expliquer, appliquer, diagnostiquer et justifier** les choix pertinents.

La révision doit augmenter nettement la quantité de connaissances utiles lorsque la page est superficielle. Elle doit privilégier une réécriture ciblée des passages faibles plutôt que l’ajout mécanique d’un bloc en fin de page. Il n’existe pas de nombre de mots minimum : la profondeur dépend de la compétence.

### 3.1 Exigences de contenu

- Objectifs d’apprentissage précis et prérequis réellement nécessaires.
- Concepts définis avant d’être utilisés ; explication du mécanisme, du « pourquoi » et du « comment ».
- Progression du cas simple vers les cas réalistes, les limites et les choix moins évidents.
- Exemples concrets, commentés et cohérents avec les versions/outils cités.
- Au moins un cas d’échec ou une erreur fréquente expliqué : symptôme, cause probable, diagnostic et correction.
- Compromis, limites et critères de choix lorsque plusieurs solutions sont possibles.
- Exercices adaptés à l’objectif, avec contraintes explicites et critères de réussite observables.
- Cinq références documentaires pertinentes dans le commentaire HTML initial et cinq références visibles dans la page.
- Terminologie cohérente avec le reste du parcours et liens vers les notions prérequises lorsque cela aide réellement.

### 3.2 Ce qu’il faut éviter

- Allonger artificiellement la page, répéter la même définition ou ajouter des paragraphes sans objectif pédagogique.
- Accumuler du code sans explication de ses invariants, de ses entrées/sorties ou de ses limites.
- Présenter une règle comme absolue sans préciser son contexte.
- Proposer un exercice dont la réussite peut être déclarée sans preuve observable.
- Conserver un passage faible uniquement parce que la page possède déjà toutes les sections attendues.
- Affirmer qu’un test, une vérification de source ou une exécution a eu lieu si elle n’a pas été effectuée.

## 4. Procédure obligatoire par tutoriel

1. **Repérer la page** depuis l’ordre de `index.html` et confirmer son chemin réel.
2. **Lire toute la page** avant de modifier quoi que ce soit ; ne pas se limiter au titre, aux premières sections ou à une recherche de mots-clés.
3. **Établir le diagnostic** : notions implicites, explications trop courtes, exemples insuffisants, absence de contre-exemple, erreurs négligées, exercices faibles, compromis absents ou recommandations dépassées.
4. **Définir les lacunes à corriger** et le résultat pédagogique attendu. Chaque modification doit répondre à une lacune ou à une exigence technique vérifiable.
5. **Réviser dans le contexte** : restructurer les sections concernées, enrichir les explications, commenter les exemples, traiter les limites et renforcer les exercices. Éviter les ajouts plaqués en fin de page.
6. **Contrôler l’exactitude technique** : API, comportement du langage, sécurité, versions, commandes, hypothèses et compatibilité avec les pages voisines.
7. **Vérifier les sources** : pertinence, autorité, actualité, correspondance avec les affirmations et présence dans le commentaire initial comme dans la liste visible.
8. **Exécuter les contrôles techniques adaptés** à la page et au code modifié ; distinguer les contrôles statiques des tests réellement exécutés.
9. **Évaluer la qualité pédagogique** à l’aide de la grille de la section 5.
10. **Mettre à jour le suivi** seulement après le travail et les contrôles effectifs. Consigner brièvement les modifications et les vérifications, ainsi que toute limite non levée.

## 5. Grille de validation pédagogique

Attribuer à chaque dimension une note de 0 à 3 : **0 = absent ou incorrect ; 1 = superficiel ; 2 = utile mais incomplet ; 3 = solide, précis et exploitable.** Cette grille sert à repérer les lacunes, pas à remplacer le jugement technique.

| Dimension | Question de contrôle |
|---|---|
| Exactitude | Les affirmations, exemples et recommandations sont-ils techniquement corrects et contextualisés ? |
| Compréhension | Les notions nouvelles sont-elles définies et expliquées, plutôt que simplement nommées ? |
| Progression | Le cours conduit-il des prérequis à une application plus autonome sans sauts injustifiés ? |
| Exemples | Les exemples sont-ils commentés, pertinents et assez réalistes pour rendre le mécanisme visible ? |
| Diagnostic | Les erreurs, symptômes, causes, limites et moyens de vérification sont-ils traités ? |
| Autonomie | Les exercices et critères de réussite permettent-ils à l’apprenant de vérifier son travail et de justifier ses choix ? |

Une erreur technique importante, une faille de sécurité introduite, un exemple trompeur ou une source manifestement inadéquate bloque la validation, quel que soit le total. Une note de 1 dans une dimension centrale exige une correction ou une justification explicite avant validation. Ne pas calculer un seuil moyen qui masquerait un défaut critique.

## 6. Contrôles techniques et documentaires

### Contrôles automatisables

- Intégrité de l’archive ZIP et présence des fichiers attendus.
- Structure HTML analysable pour les pages modifiées.
- Liens internes et fragments locaux ; chemins de ressources.
- Présence des cinq sources dans le commentaire initial et des cinq liens visibles.
- Présence des éléments pédagogiques attendus, comme contrôle de complétude seulement.
- Syntaxe ou tests des blocs de code lorsque l’environnement le permet ; consigner les commandes et résultats réellement obtenus.
- Absence de modification des pages hors périmètre du lot.

### Contrôles manuels indispensables

- Exactitude technique et adéquation aux versions citées.
- Qualité explicative et cohérence du chemin d’apprentissage.
- Utilité réelle des exemples, erreurs fréquentes et exercices.
- Pertinence des sources et soutien réel qu’elles apportent aux affirmations.
- Absence de divulgation de secrets, données personnelles ou pratiques dangereuses dans les exemples.

Un parseur HTML ne prouve pas qu’une page fonctionne dans un navigateur. Un lien présent ne prouve pas que sa cible répond. Un contrôle de syntaxe ne prouve pas qu’un exemple se comporte comme attendu. Indiquer précisément ce qui a été contrôlé et ce qui ne l’a pas été.

## 7. Gestion des lots et livraison

- Travailler strictement dans l’ordre des compétences affichées dans `index.html`.
- **Cible standard : 10 tutoriels par lot, sauf instruction explicite demandant un lot plus court.** Un lot peut aussi être plus petit si une vérification ou une révision de qualité l’exige ; ne jamais sacrifier la profondeur pour atteindre le nombre cible.
- Avant de commencer un lot, comparer l’index avec le registre des pages déjà revues et sélectionner les dix premières compétences encore non revues.
- Ne jamais recommencer le compteur de la seconde passe sans décision explicite et sans documenter la raison. Les lots précédents restent dans l’historique.
- Ne modifier que les pages du périmètre, le suivi et les fichiers nécessaires ; préserver le reste du site et les cinq pages de projet.
- À la fin du lot, recalculer les compteurs depuis la liste des compétences uniques et le registre des lots ; ne pas saisir un pourcentage de mémoire.
- Produire une archive ZIP complète du projet, et non un ZIP ne contenant que les fichiers modifiés.
- Contrôler l’intégrité de l’archive et comparer son contenu avec la version de départ.
- Livrer un compte rendu : numéro du lot, pages révisées, compteurs, contrôles réellement exécutés, limites restantes et lien vers l’archive.
- Toute affirmation de validation doit correspondre à un contrôle observé pendant la session courante.

## 8. Liste canonique des 169 compétences

Cette liste est extraite de l’ordre courant de `index.html`. La case de seconde passe est cochée pour les compétences 1 à 169, consignées dans les lots 34 à 56. Les cinq projets sont exclus de ce compteur.

| # | Compétence | Fichier | Rédaction initiale | Seconde passe |
|---:|---|---|---|---|
| 1 | Architecture d’un ordinateur | `architecture-ordinateur.html` | [x] | [x] |
| 2 | Processus, threads et mémoire | `processus-threads-memoire.html` | [x] | [x] |
| 3 | Système d’exploitation et système de fichiers | `systeme-exploitation-fichiers.html` | [x] | [x] |
| 4 | Réseaux : TCP/IP, ports et pare-feu | `reseaux-tcp-ip.html` | [x] | [x] |
| 5 | DNS, TLS et proxy | `dns-tls-proxy.html` | [x] | [x] |
| 6 | Terminal, shell et Bash | `terminal-shell-bash.html` | [x] | [x] |
| 7 | JavaScript puis TypeScript | `javascript-typescript.html` | [x] | [x] |
| 8 | Structures de données et algorithmes | `structures-donnees-algorithmes.html` | [x] | [x] |
| 9 | Complexité algorithmique | `complexite-algorithmique.html` | [x] | [x] |
| 10 | JavaScript avancé | `javascript-avance.html` | [x] | [x] |
| 11 | HTTP et échanges Web | `http.html` | [x] | [x] |
| 12 | Git et gestion de versions | `git.html` | [x] | [x] |
| 13 | Navigateur, DOM et DevTools | `navigateur-dom-devtools.html` | [x] | [x] |
| 14 | HTML sémantique | `html-semantique.html` | [x] | [x] |
| 15 | Accessibilité Web | `accessibilite.html` | [x] | [x] |
| 16 | CSS : cascade, spécificité et box model | `css-fondamentaux.html` | [x] | [x] |
| 17 | Flexbox et CSS Grid | `flexbox-grid.html` | [x] | [x] |
| 18 | Responsive design | `responsive-design.html` | [x] | [x] |
| 19 | JavaScript et manipulation du DOM | `javascript-dom.html` | [x] | [x] |
| 20 | Fetch et APIs du navigateur | `fetch-apis-navigateur.html` | [x] | [x] |
| 21 | Débogage frontend | `debug-frontend.html` | [x] | [x] |
| 22 | Performance frontend | `performance-frontend.html` | [x] | [x] |
| 23 | React : composants, props et state | `react-composants.html` | [x] | [x] |
| 24 | React Hooks | `react-hooks.html` | [x] | [x] |
| 25 | Événements et formulaires React | `react-evenements-formulaires.html` | [x] | [x] |
| 26 | Gestion d’état | `gestion-etat.html` | [x] | [x] |
| 27 | TypeScript avec React | `typescript-react.html` | [x] | [x] |
| 28 | Tailwind CSS et bibliothèques de composants | `tailwind-composants.html` | [x] | [x] |
| 29 | Vite, npm/pnpm, ESLint et Prettier | `outils-frontend.html` | [x] | [x] |
| 30 | Next.js | `nextjs.html` | [x] | [x] |
| 31 | Tests frontend | `tests-frontend.html` | [x] | [x] |
| 32 | Node.js et TypeScript | `nodejs-typescript.html` | [x] | [x] |
| 33 | Serveur et cycle requête/réponse | `cycle-requete-reponse.html` | [x] | [x] |
| 34 | Express, Fastify ou NestJS | `framework-backend.html` | [x] | [x] |
| 35 | Modules et séparation des responsabilités | `modules-responsabilites.html` | [x] | [x] |
| 36 | Logique métier et validation | `logique-metier-validation.html` | [x] | [x] |
| 37 | Conception d’API REST | `api-rest.html` | [x] | [x] |
| 38 | Codes HTTP et idempotence | `codes-http.html` | [x] | [x] |
| 39 | Versionnement d’API | `versionnement-api.html` | [x] | [x] |
| 40 | Documentation OpenAPI/Swagger | `openapi-swagger.html` | [x] | [x] |
| 41 | Middlewares | `middlewares.html` | [x] | [x] |
| 42 | Validation avec Zod, Joi ou Yup | `validation-schema.html` | [x] | [x] |
| 43 | Tâches asynchrones et files d’attente | `taches-asynchrones.html` | [x] | [x] |
| 44 | Redis et cache | `redis-cache.html` | [x] | [x] |
| 45 | WebSockets et Server-Sent Events | `websockets-sse.html` | [x] | [x] |
| 46 | Authentification et autorisation | `authentification-autorisation.html` | [x] | [x] |
| 47 | Sessions, tokens et JWT | `sessions-jwt.html` | [x] | [x] |
| 48 | OAuth 2.0 et OpenID Connect | `oauth-oidc.html` | [x] | [x] |
| 49 | Stockage sécurisé des mots de passe | `hachage-mots-de-passe.html` | [x] | [x] |
| 50 | SQL | `sql.html` | [x] | [x] |
| 51 | PostgreSQL | `postgresql.html` | [x] | [x] |
| 52 | Modélisation des données | `modelisation-donnees.html` | [x] | [x] |
| 53 | Clés primaires et étrangères | `cles-relations.html` | [x] | [x] |
| 54 | Normalisation et dénormalisation | `normalisation.html` | [x] | [x] |
| 55 | Jointures et agrégations SQL | `jointures-agregations.html` | [x] | [x] |
| 56 | Index et performances SQL | `index-performances.html` | [x] | [x] |
| 57 | Transactions et cohérence | `transactions.html` | [x] | [x] |
| 58 | Migrations de schéma | `migrations.html` | [x] | [x] |
| 59 | Pooling et problème N+1 | `pooling-n-plus-un.html` | [x] | [x] |
| 60 | NoSQL et MongoDB | `nosql-mongodb.html` | [x] | [x] |
| 61 | Prévention des injections SQL | `injections-sql.html` | [x] | [x] |
| 62 | Prévention des attaques XSS | `xss.html` | [x] | [x] |
| 63 | Prévention des attaques CSRF | `csrf.html` | [x] | [x] |
| 64 | Configuration de CORS | `cors.html` | [x] | [x] |
| 65 | Rate limiting | `rate-limiting.html` | [x] | [x] |
| 66 | Sécurisation des sessions et tokens | `securite-sessions-tokens.html` | [x] | [x] |
| 67 | HTTPS et en-têtes de sécurité | `https-headers.html` | [x] | [x] |
| 68 | Gestion des secrets | `gestion-secrets.html` | [x] | [x] |
| 69 | Autorisations côté serveur | `autorisations-serveur.html` | [x] | [x] |
| 70 | Données sensibles et journaux | `donnees-logs.html` | [x] | [x] |
| 71 | Sécurité des fichiers téléversés | `upload-fichiers.html` | [x] | [x] |
| 72 | Tests unitaires | `tests-unitaires.html` | [x] | [x] |
| 73 | Tests d’intégration | `tests-integration.html` | [x] | [x] |
| 74 | Tests end-to-end | `tests-e2e.html` | [x] | [x] |
| 75 | Cas limites et régressions | `cas-limites-regressions.html` | [x] | [x] |
| 76 | Débogage méthodique | `debug-methodique.html` | [x] | [x] |
| 77 | Gestion des erreurs et logs structurés | `logs-erreurs.html` | [x] | [x] |
| 78 | Linting et formatage | `lint-formatage.html` | [x] | [x] |
| 79 | Refactoring et maintenabilité | `refactoring.html` | [x] | [x] |
| 80 | Lire le code d’autres développeurs | `lecture-code.html` | [x] | [x] |
| 81 | Linux et ligne de commande | `linux-terminal.html` | [x] | [x] |
| 82 | Variables d’environnement et configuration | `environnement-config.html` | [x] | [x] |
| 83 | Docker et conteneurs | `docker.html` | [x] | [x] |
| 84 | Intégration et déploiement continus | `ci-cd.html` | [x] | [x] |
| 85 | Déployer application et base de données | `deploiement-base.html` | [x] | [x] |
| 86 | DNS, HTTPS et certificats | `dns-https-certificats.html` | [x] | [x] |
| 87 | Sauvegardes et migrations en production | `sauvegardes-migrations-prod.html` | [x] | [x] |
| 88 | Logs, métriques, alertes et health checks | `observabilite.html` | [x] | [x] |
| 89 | Fondamentaux du cloud | `cloud.html` | [x] | [x] |
| 90 | Infrastructure as code | `infrastructure-as-code.html` | [x] | [x] |
| 91 | Kubernetes | `kubernetes.html` | [x] | [x] |
| 92 | Architecture modulaire | `architecture-modulaire.html` | [x] | [x] |
| 93 | Séparation des responsabilités | `separation-responsabilites.html` | [x] | [x] |
| 94 | Patterns de conception | `design-patterns.html` | [x] | [x] |
| 95 | API évolutives et rétrocompatibles | `api-evolutives.html` | [x] | [x] |
| 96 | Cache et compromis de performance | `cache-compromis.html` | [x] | [x] |
| 97 | Monolithe ou microservices | `monolithe-microservices.html` | [x] | [x] |
| 98 | Montée en charge | `scalabilite.html` | [x] | [x] |
| 99 | Concevoir pour l’exploitation | `conception-exploitation.html` | [x] | [x] |
| 100 | Construire des projets complets | `projets-complets.html` | [x] | [x] |
| 101 | Lire la documentation officielle | `documentation-officielle.html` | [x] | [x] |
| 102 | Lire et contribuer à l’open source | `open-source.html` | [x] | [x] |
| 103 | Utiliser l’IA comme outil de développement | `usage-ia.html` | [x] | [x] |
| 104 | Expliquer les choix techniques | `choix-techniques.html` | [x] | [x] |
| 105 | Approfondissement et spécialisation | `specialisation.html` | [x] | [x] |
| 106 | Types génériques | `typescript-generiques.html` | [x] | [x] |
| 107 | Unions, intersections et narrowing | `typescript-unions-intersections.html` | [x] | [x] |
| 108 | Types conditionnels et types mappés | `typescript-types-conditionnels-mappes.html` | [x] | [x] |
| 109 | Types utilitaires : Pick, Omit, Partial et Record | `typescript-utilitaires.html` | [x] | [x] |
| 110 | Inférence, unknown et never | `typescript-unknown-never.html` | [x] | [x] |
| 111 | Modules, déclarations et tsconfig | `typescript-modules-tsconfig.html` | [x] | [x] |
| 112 | Pagination, tri et filtrage | `api-pagination-filtrage.html` | [x] | [x] |
| 113 | Contrats d’API et validation des réponses | `contrats-api-validation.html` | [x] | [x] |
| 114 | Gestion cohérente des erreurs d’API | `api-erreurs-coherentes.html` | [x] | [x] |
| 115 | Timeouts, retries et annulation | `timeouts-retries-annulation.html` | [x] | [x] |
| 116 | Idempotence des API | `idempotence-api.html` | [x] | [x] |
| 117 | Webhooks et intégrations tierces | `webhooks.html` | [x] | [x] |
| 118 | Isolation des transactions et verrous | `isolation-transactions-verrous.html` | [x] | [x] |
| 119 | Concurrence et mises à jour perdues | `concurrence-mises-a-jour.html` | [x] | [x] |
| 120 | Plans d’exécution SQL | `plans-execution-sql.html` | [x] | [x] |
| 121 | Sauvegarde et restauration | `strategie-sauvegarde-restauration.html` | [x] | [x] |
| 122 | Migrations sans interruption | `migrations-sans-interruption.html` | [x] | [x] |
| 123 | Recherche textuelle et pagination efficace | `recherche-textuelle-pagination.html` | [x] | [x] |
| 124 | Modèle de menace et analyse des risques | `modele-menace.html` | [x] | [x] |
| 125 | Contrôle d’accès par rôle et par ressource | `rbac-abac-controle-acces.html` | [x] | [x] |
| 126 | Dépendances et chaîne d’approvisionnement | `securite-dependances.html` | [x] | [x] |
| 127 | Sécurité des API et prévention des abus | `securite-api-abus.html` | [x] | [x] |
| 128 | Rotation des secrets et chiffrement | `rotation-secrets-chiffrement.html` | [x] | [x] |
| 129 | Journalisation de sécurité et incidents | `journalisation-incidents.html` | [x] | [x] |
| 130 | Ergonomie et conception d’interface | `ergonomie-interface.html` | [x] | [x] |
| 131 | États de chargement, erreur et vide | `etats-interface.html` | [x] | [x] |
| 132 | Navigation clavier et lecteurs d’écran | `navigation-clavier-lecteurs.html` | [x] | [x] |
| 133 | Contraste, sémantique et ARIA | `contraste-semantique-aria.html` | [x] | [x] |
| 134 | Core Web Vitals et performances réelles | `core-web-vitals.html` | [x] | [x] |
| 135 | Issues, tickets et critères d’acceptation | `issues-tickets-acceptation.html` | [x] | [x] |
| 136 | Pull requests et revue de code | `pull-requests-revue-code.html` | [x] | [x] |
| 137 | Stratégie Git et résolution de conflits | `branches-conflits-git.html` | [x] | [x] |
| 138 | Versionnement sémantique et changelogs | `semver-changelogs.html` | [x] | [x] |
| 139 | Documentation technique et décisions d’architecture | `documentation-decisions.html` | [x] | [x] |
| 140 | Dépendances, licences et publication de packages | `licences-publication-packages.html` | [x] | [x] |
| 141 | Routage frontend | `routage-frontend.html` | [x] | [x] |
| 142 | Gestion des données distantes | `donnees-distantes-frontend.html` | [x] | [x] |
| 143 | SSR, CSR et hydratation | `ssr-csr-hydratation.html` | [x] | [x] |
| 144 | Découpage et composition des composants | `decoupage-composants.html` | [x] | [x] |
| 145 | Injection de dépendances | `injection-dependances.html` | [x] | [x] |
| 146 | Transactions et cohérence métier | `transactions-metier.html` | [x] | [x] |
| 147 | Frontières entre modules | `frontieres-modules.html` | [x] | [x] |
| 148 | Architecture hexagonale | `architecture-hexagonale.html` | [x] | [x] |
| 149 | Profilage d’application | `profilage-application.html` | [x] | [x] |
| 150 | Cache HTTP et CDN | `cache-http-cdn.html` | [x] | [x] |
| 151 | Tests de charge | `tests-charge.html` | [x] | [x] |
| 152 | Identification des goulots d’étranglement | `goulots-etranglement.html` | [x] | [x] |
| 153 | Traces distribuées | `traces-distribuees.html` | [x] | [x] |
| 154 | Corrélation des logs | `correlation-logs.html` | [x] | [x] |
| 155 | Métriques et alertes | `metriques-alertes.html` | [x] | [x] |
| 156 | Environnements de développement, test et production | `environnements-dev-test-prod.html` | [x] | [x] |
| 157 | Rollback et stratégies de déploiement | `rollback-deploiement.html` | [x] | [x] |
| 158 | Migrations pendant la livraison | `migrations-livraison.html` | [x] | [x] |
| 159 | Recueil du besoin et spécifications | `recueil-besoin-specifications.html` | [x] | [x] |
| 160 | Découpage en tâches et estimation | `decoupage-taches-estimation.html` | [x] | [x] |
| 161 | Priorisation produit | `priorisation-produit.html` | [x] | [x] |
| 162 | Assistants de code | `assistants-code.html` | [x] | [x] |
| 163 | Vérification du code généré | `verification-code-ia.html` | [x] | [x] |
| 164 | Limites et sécurité des outils IA | `limites-securite-ia.html` | [x] | [x] |
| 165 | GraphQL | `graphql.html` | [x] | [x] |
| 166 | Moteurs de recherche | `recherche-moteurs.html` | [x] | [x] |
| 167 | Systèmes distribués | `systemes-distribues.html` | [x] | [x] |
| 168 | Architecture événementielle | `architecture-evenementielle.html` | [x] | [x] |
| 169 | Applications temps réel | `applications-temps-reel.html` | [x] | [x] |

## 9. Pages de projets — suivi séparé

Les cinq pages de projets ne font pas partie des 169 compétences et ne sont pas incluses dans les compteurs de seconde passe. Leur présence dans l’index est vérifiée séparément.

| Projet | Fichier | État de seconde passe |
|---|---|---|
| Projet 1 — Site frontend | `projet-1-site-frontend.html` | Non comptabilisé dans la seconde passe des compétences |
| Projet 2 — API et base de données | `projet-2-api-base-donnees.html` | Non comptabilisé dans la seconde passe des compétences |
| Projet 3 — Application Full Stack | `projet-3-application-fullstack.html` | Non comptabilisé dans la seconde passe des compétences |
| Projet 4 — Mise en production | `projet-4-production.html` | Non comptabilisé dans la seconde passe des compétences |
| Projet 5 — Application de niveau professionnel | `projet-5-application-professionnelle.html` | Non comptabilisé dans la seconde passe des compétences |

## 10. Historique de production

### Rédaction initiale — lots 1 à 33

L’historique ci-dessous conserve les listes de compétences enregistrées pour la rédaction initiale. Il ne constitue pas une validation de la seconde passe.

## Lot 1 — rédigé
- [x] Accessibilité Web (`accessibilite`)
- [x] Gestion cohérente des erreurs d’API (`api-erreurs-coherentes`)
- [x] API évolutives et rétrocompatibles (`api-evolutives`)
- [x] Pagination, tri et filtrage (`api-pagination-filtrage`)
- [x] Conception d’API REST (`api-rest`)

## Lot 2 — rédigé
- [x] Applications temps réel (`applications-temps-reel`)
- [x] Architecture événementielle (`architecture-evenementielle`)
- [x] Architecture hexagonale (`architecture-hexagonale`)
- [x] Architecture modulaire (`architecture-modulaire`)
- [x] Architecture d’un ordinateur (`architecture-ordinateur`)

## Lot 3 — rédigé
- [x] Assistants de code (`assistants-code`)
- [x] Authentification et autorisation (`authentification-autorisation`)
- [x] Autorisations côté serveur (`autorisations-serveur`)
- [x] Stratégie Git et résolution de conflits (`branches-conflits-git`)
- [x] Cache et compromis de performance (`cache-compromis`)

## Lot 4 — rédigé
- [x] Processus, threads et mémoire (`processus-threads-memoire`)
- [x] Système d’exploitation et système de fichiers (`systeme-exploitation-fichiers`)
- [x] Réseaux TCP/IP (`reseaux-tcp-ip`)
- [x] DNS, TLS et proxy (`dns-tls-proxy`)
- [x] Terminal, shell et Bash (`terminal-shell-bash`)

## Lot 5 — rédigé
- [x] JavaScript puis TypeScript (`javascript-typescript`)
- [x] Structures de données et algorithmes (`structures-donnees-algorithmes`)
- [x] Complexité algorithmique (`complexite-algorithmique`)
- [x] JavaScript avancé (`javascript-avance`)
- [x] HTTP et échanges Web (`http`)

## Lot 6 — rédigé
- [x] Git et gestion de versions (`git`)
- [x] Navigateur, DOM et DevTools (`navigateur-dom-devtools`)
- [x] HTML sémantique (`html-semantique`)
- [x] CSS fondamentaux (`css-fondamentaux`)
- [x] Mise en page CSS avec Flexbox et Grid (`flexbox-grid`)

## Lot 7 — rédigé
- [x] Responsive design (`responsive-design`)
- [x] Manipulation du DOM en JavaScript (`javascript-dom`)
- [x] Fetch et API navigateur (`fetch-apis-navigateur`)
- [x] Débogage frontend méthodique (`debug-frontend`)
- [x] Performance frontend (`performance-frontend`)

## Lot 8 — rédigé
- [x] React : composants, props et state (`react-composants`)
- [x] React Hooks (`react-hooks`)
- [x] React : événements et formulaires (`react-evenements-formulaires`)
- [x] Gestion de l’état dans React (`gestion-etat`)
- [x] TypeScript avec React (`typescript-react`)

## Lot 9 — rédigé
- [x] Tailwind CSS et bibliothèques de composants (`tailwind-composants`)
- [x] Vite, npm/pnpm, ESLint et Prettier (`outils-frontend`)
- [x] Next.js (`nextjs`)
- [x] Tests frontend (`tests-frontend`)
- [x] Node.js et TypeScript (`nodejs-typescript`)

## Lot 10 — rédigé
- [x] Cycle requête-réponse d’une application Web (`cycle-requete-reponse`)
- [x] Choisir et utiliser un framework backend (`framework-backend`)
- [x] Modules et responsabilités backend (`modules-responsabilites`)
- [x] Logique métier et validation des données (`logique-metier-validation`)
- [x] Codes de statut HTTP (`codes-http`)

## Lot 11 — rédigé
- [x] Versionnement d’API (`versionnement-api`)
- [x] Documentation OpenAPI/Swagger (`openapi-swagger`)
- [x] Middlewares (`middlewares`)
- [x] Validation avec Zod, Joi ou Yup (`validation-schema`)
- [x] Tâches asynchrones et files d’attente (`taches-asynchrones`)

## Lot 12 — rédigé
- [x] Redis et stratégies de cache (`redis-cache`)
- [x] WebSockets et Server-Sent Events (`websockets-sse`)
- [x] Authentification et autorisation (`authentification-autorisation`)
- [x] Sessions, cookies et JWT (`sessions-jwt`)
- [x] OAuth 2.0 et OpenID Connect (`oauth-oidc`)

## Lot 13 — rédigé
- [x] Stockage sécurisé des mots de passe (`hachage-mots-de-passe`)
- [x] SQL (`sql`)
- [x] PostgreSQL (`postgresql`)
- [x] Modélisation des données (`modelisation-donnees`)
- [x] Clés primaires et étrangères (`cles-relations`)

## Lot 14 — rédigé
- [x] Normalisation et dénormalisation (`normalisation`)
- [x] Jointures et agrégations SQL (`jointures-agregations`)
- [x] Index et performances SQL (`index-performances`)
- [x] Transactions et cohérence (`transactions`)
- [x] Migrations de schéma (`migrations`)

## Lot 15 — rédigé
- [x] Pool de connexions et problème N+1 (`pooling-n-plus-un`)
- [x] NoSQL et MongoDB (`nosql-mongodb`)
- [x] Prévention des injections SQL (`injections-sql`)
- [x] Prévention des failles XSS (`xss`)
- [x] Prévention des attaques CSRF (`csrf`)

## Lot 16 — rédigé

- [x] Configuration de CORS (`cors`)
- [x] Rate limiting (`rate-limiting`)
- [x] Sécurisation des sessions et tokens (`securite-sessions-tokens`)
- [x] HTTPS et en-têtes de sécurité (`https-headers`)
- [x] Gestion des secrets (`gestion-secrets`)

**Contrôles effectués :** pages développées avec objectifs, explications progressives, exemples, limites, erreurs fréquentes, exercices, critères de réussite et cinq références visibles. Contrôle structurel HTML, navigation et liens documentaires effectué après génération.

## Lot 17 — rédigé

- [x] Données sensibles et journaux (`donnees-logs`)
- [x] Sécurité des fichiers téléversés (`upload-fichiers`)
- [x] Tests unitaires (`tests-unitaires`)
- [x] Tests d’intégration (`tests-integration`)
- [x] Tests end-to-end (`tests-e2e`)

**Contrôles effectués :** commentaire documentaire initial, cinq liens visibles, objectifs, explications techniques, exemples, pièges, exercices et critères de réussite vérifiés ; structure HTML et navigation contrôlées.

## Lot 18 — rédigé

- [x] Cas limites et tests de régression (`cas-limites-regressions`)
- [x] Débogage méthodique (`debug-methodique`)
- [x] Gestion des erreurs et logs structurés (`logs-erreurs`)
- [x] Linting et formatage du code (`lint-formatage`)
- [x] Refactoring et maintenabilité (`refactoring`)

**Contrôles effectués :** commentaire documentaire initial, cinq liens visibles, objectifs, explications techniques, exemples, pièges, exercices et critères de réussite vérifiés ; structure HTML et navigation contrôlées.

## Lot 19 — rédigé

- [x] Lire le code d’autres développeurs (`lecture-code`)
- [x] Linux et ligne de commande (`linux-terminal`)
- [x] Variables d’environnement et configuration (`environnement-config`)
- [x] Docker et conteneurs (`docker`)
- [x] Intégration et déploiement continus (`ci-cd`)

**Contrôles effectués :** commentaire `SOURCES DOCUMENTAIRES` au début de chaque page, cinq liens documentaires visibles, objectifs, explications, exemples, erreurs et compromis, exercices et critères de réussite ; structure HTML et navigation interne vérifiées après génération. Les références sont des pistes documentaires et ne signifient pas que chaque source a été lue intégralement.

## Lot 20 — rédigé

- [x] Déployer application et base de données (`deploiement-base`)
- [x] DNS, HTTPS et certificats (`dns-https-certificats`)
- [x] Sauvegardes et migrations en production (`sauvegardes-migrations-prod`)
- [x] Logs, métriques, alertes et health checks (`observabilite`)
- [x] Fondamentaux du cloud (`cloud`)

**Contrôles effectués :** commentaire `SOURCES DOCUMENTAIRES` au début de chaque page, cinq liens documentaires visibles, objectifs, explications progressives, exemples ou procédures, erreurs et compromis, exercices et critères de réussite ; structure HTML et navigation interne vérifiées après génération. Les références sont des pistes documentaires et ne signifient pas que chaque source a été lue intégralement.

## Lot 21 — rédigé

Pages ajoutées et développées à partir de fiches de départ incomplètes :
- `infrastructure-as-code.html` — Infrastructure as code
- `kubernetes.html` — Kubernetes
- `separation-responsabilites.html` — Séparation des responsabilités
- `design-patterns.html` — Patterns de conception
- `monolithe-microservices.html` — Monolithe ou microservices

Les cinq pages comportent des objectifs, des explications progressives, des exemples ou démarches concrètes, des pièges et compromis, un exercice, des critères de réussite et cinq références documentaires visibles. Les références sont des pistes ciblées ; leur présence ne signifie pas que chaque page source a été intégralement consultée.

## Lot 22 — rédigé

Pages ajoutées et développées à partir de fiches de départ incomplètes :
- `scalabilite.html` — Montée en charge
- `conception-exploitation.html` — Concevoir pour l’exploitation
- `projets-complets.html` — Construire des projets complets
- `documentation-officielle.html` — Lire la documentation officielle
- `open-source.html` — Lire et contribuer à l’open source

Les cinq pages contiennent des objectifs, des explications progressives, des exemples ou démarches concrètes, des pièges et compromis, un exercice, des critères de réussite et cinq références documentaires visibles. Les références sont des pistes ciblées et ne signifient pas que chaque source a été lue intégralement.

## Lot 23 — rédigé

- `usage-ia.html` — Utiliser l’IA comme outil de développement.
- `choix-techniques.html` — Expliquer les choix techniques.
- `specialisation.html` — Approfondissement et spécialisation.
- `typescript-generiques.html` — TypeScript : types génériques.
- `typescript-unions-intersections.html` — TypeScript : unions, intersections et narrowing.

## Lot 24 — rédigé

- `typescript-types-conditionnels-mappes.html` — TypeScript : types conditionnels et types mappés.
- `typescript-utilitaires.html` — TypeScript : types utilitaires — Pick, Omit, Partial et Record.
- `typescript-unknown-never.html` — TypeScript : inférence, unknown et never.
- `typescript-modules-tsconfig.html` — TypeScript : modules, déclarations et tsconfig.
- `contrats-api-validation.html` — Contrats d’API et validation des réponses.

## Lot 25 — rédigé

- `timeouts-retries-annulation.html` — Timeouts, retries et annulation.
- `idempotence-api.html` — Idempotence des API.
- `webhooks.html` — Webhooks et intégrations tierces.
- `isolation-transactions-verrous.html` — Isolation des transactions et verrous.
- `concurrence-mises-a-jour.html` — Concurrence et mises à jour perdues.

## Lot 26 — rédigé

- `plans-execution-sql.html` — Plans d’exécution SQL.
- `strategie-sauvegarde-restauration.html` — Sauvegarde et restauration.
- `migrations-sans-interruption.html` — Migrations sans interruption.
- `recherche-textuelle-pagination.html` — Recherche textuelle et pagination efficace.
- `modele-menace.html` — Modèle de menace et analyse des risques.

## Lot 27 — rédigé

- `rbac-abac-controle-acces.html` — Contrôle d’accès par rôle et par ressource.
- `securite-dependances.html` — Dépendances et chaîne d’approvisionnement.
- `securite-api-abus.html` — Sécurité des API et prévention des abus.
- `rotation-secrets-chiffrement.html` — Rotation des secrets et chiffrement.
- `journalisation-incidents.html` — Journalisation de sécurité et incidents.

## Lot 28 — rédigé

- [x] Issues, tickets et critères d’acceptation — Roadmap Full Stack 2026 (`issues-tickets-acceptation`)
- [x] Pull requests et revue de code — Roadmap Full Stack 2026 (`pull-requests-revue-code`)
- [x] Versionnement sémantique et changelogs — Roadmap Full Stack 2026 (`semver-changelogs`)
- [x] Documentation technique et décisions d’architecture — Roadmap Full Stack 2026 (`documentation-decisions`)
- [x] Dépendances, licences et publication de packages — Roadmap Full Stack 2026 (`licences-publication-packages`)

**Contrôles effectués :** cinq pages enrichies avec commentaire documentaire initial, cinq références visibles, objectifs, prérequis, explications progressives, exemple, pièges, exercice, critères de réussite et navigation. Structure HTML, liens internes et archive complète vérifiés.

## Lot 29 — rédigé

- [x] Routage frontend (`routage-frontend`)
- [x] Gestion des données distantes (`donnees-distantes-frontend`)
- [x] SSR, CSR et hydratation (`ssr-csr-hydratation`)
- [x] Découpage et composition des composants (`decoupage-composants`)
- [x] Injection de dépendances (`injection-dependances`)

**Contrôles effectués :** cinq tutoriels approfondis avec objectifs, explications progressives, compromis, exercices, critères de réussite et cinq références documentaires visibles par page. Structure, navigation et liens internes contrôlés.

## Lot 30 — rédigé

- `transactions-metier.html` — Transactions et cohérence métier.
- `frontieres-modules.html` — Frontières entre modules.
- `profilage-application.html` — Profilage d’application.
- `cache-http-cdn.html` — Cache HTTP et CDN.
- `tests-charge.html` — Tests de charge.

## Lot 31 — rédigé

- `goulots-etranglement.html` — Identification des goulots d’étranglement.
- `traces-distribuees.html` — Traces distribuées.
- `correlation-logs.html` — Corrélation des logs.
- `metriques-alertes.html` — Métriques et alertes.
- `environnements-dev-test-prod.html` — Environnements de développement, test et production.

## Lot 32 — rédigé

- `rollback-deploiement.html` — Rollback et stratégies de déploiement.
- `migrations-livraison.html` — Migrations pendant la livraison.
- `recueil-besoin-specifications.html` — Recueil du besoin et spécifications.
- `decoupage-taches-estimation.html` — Découpage en tâches et estimation.
- `priorisation-produit.html` — Priorisation produit.

## Lot 33 — rédigé

- `verification-code-ia.html` — Vérification du code généré.
- `limites-securite-ia.html` — Limites et sécurité des outils IA.
- `graphql.html` — GraphQL.
- `recherche-moteurs.html` — Moteurs de recherche.
- `systemes-distribues.html` — Systèmes distribués.

### Seconde passe éditoriale et pédagogique — lots 34 à 39

## Lot 34 — seconde passe pédagogique

Pages relues dans l’ordre de `index.html` ; améliorations ajoutées directement aux tutoriels :

- `architecture-ordinateur.html` — approfondissement du diagnostic fondé sur des hypothèses, commandes de mesure et limites d’interprétation.
- `processus-threads-memoire.html` — exemple de mise à jour perdue, portée des mécanismes de synchronisation et diagnostic de fuite mémoire.
- `systeme-exploitation-fichiers.html` — procédure de diagnostic des permissions et chemins, atomicité des écritures et risques liés aux liens symboliques.
- `reseaux-tcp-ip.html` — arbre de diagnostic par couche, limites de `ping`/`curl`, cadrage des messages TCP et distinction transport/sécurité applicative.
- `dns-tls-proxy.html` — diagnostic TLS et SNI, confiance dans les en-têtes de proxy et configuration derrière un reverse proxy.

Contrôles après révision : structure HTML, liens locaux, présence du commentaire de sources, liens documentaires et présence d’exemples/exercices/critères de réussite. Cette étape constitue le début de la seconde passe ; elle ne signifie pas que les 169 tutoriels ont tous été relus.

## Lot 35 — seconde passe pédagogique

Pages relues et enrichies dans l’ordre exact de `index.html` :

- `terminal-shell-bash.html` — correction de paragraphes HTML mal imbriqués ; approfondissement sur les noms de fichiers contenant des espaces, les délimiteurs NUL, l’ordre des redirections, stdout/stderr et les limites de la substitution de processus.
- `javascript-typescript.html` — renforcement de la validation à l’exécution ; garde de type améliorée pour contrôler les champs optionnels et chaque valeur du tableau `roles`, avec procédure de contrôle et cas invalides à tester.
- `structures-donnees-algorithmes.html` — exemple d’indexation et de regroupement avec `Map`, traitement explicite des identifiants dupliqués, invariant du parcours en largeur, complexité `O(V + E)` et distinction entre atteignabilité et plus court chemin pondéré.
- `complexite-algorithmique.html` — démonstration détaillée des boucles logarithmiques et quadratiques, somme des comparaisons, distinction entre `O` et `Θ`, coûts mémoire et protocole de benchmark reproductible.
- `javascript-avance.html` — approfondissement des liaisons capturées par les closures, vérification des statuts HTTP, annulation Fetch avec `AbortController`, distinction entre annulation client et traitement serveur, choix entre `Promise.all` et `Promise.allSettled`.

**Contrôles effectués :** cinq pages conservent chacune un commentaire `SOURCES DOCUMENTAIRES` initial et cinq liens documentaires visibles ; les sections objectifs, explications, exemples, pièges/limites, exercices et critères de réussite sont présentes. La structure HTML, les liens internes des pages modifiées et la syntaxe des 27 blocs de code ont été contrôlés (`bash -n`, `tsc --strict`, `node --check` ; l’extrait TypeScript dépendant a été vérifié avec sa définition de type). Les références officielles Bash, TypeScript et MDN pertinentes ont été recoupées ; la disponibilité HTTP des 25 liens n’a pas été testée individuellement. Les autres tutoriels et les cinq pages de projet n’ont pas été modifiés.

## Lot 36 — seconde passe pédagogique (10 tutoriels)

Pages relues et enrichies dans l’ordre de `index.html` :

- `http.html` — contrat d’API, choix des statuts, reprises après coupure, idempotence et diagnostic des échanges.
- `git.html` — état des lieux avant récupération, différences entre `revert`, `reset`, `restore`, `stash` et `reflog`, contrôles après intégration.
- `navigateur-dom-devtools.html` — méthode de débogage par hypothèses, observation dans Réseau, cache, points d’arrêt et protection des données sensibles.
- `html-semantique.html` — choix entre lien et bouton, soumission de formulaire, hiérarchie des titres et limites de la validation syntaxique.
- `accessibilite.html` — protocole manuel clavier/focus/reflow, libellés de formulaire et vérification des états dynamiques.
- `css-fondamentaux.html` — diagnostic de la cascade, calcul du modèle de boîte et protocole d’inspection des styles calculés.
- `flexbox-grid.html` — tailles intrinsèques, débordements, grille auto-adaptative et cohérence entre ordre visuel et ordre DOM.
- `responsive-design.html` — tests autour des points de rupture, zoom, contenu long, orientation et préférence de réduction des mouvements.
- `javascript-dom.html` — soumission de formulaire accessible, nettoyage des entrées et délégation d’événements.
- `fetch-apis-navigateur.html` — validation minimale des données réseau, réponses sans corps, requêtes obsolètes, annulation et limites de CORS.

**Contrôles effectués :** les dix pages contiennent leurs cinq références dans le commentaire HTML initial et dans la liste visible ; les sections objectifs, explications, exemples, pièges, exercice et critères de réussite ont été contrôlées. Les liens locaux sont vérifiés sur l’ensemble du projet, ainsi que la structure HTML des pages modifiées. Les exemples ajoutés ont été relus manuellement pour cohérence et syntaxe ; aucun test d’exécution dans un navigateur réel ni vérification HTTP individuelle de toutes les références externes n’est revendiqué.



## Lot 37 — seconde passe éditoriale et pédagogique (10 tutoriels)

Pages refactorisées dans l’ordre de `index.html`. Le travail a porté sur l’organisation interne, pas sur l’ajout d’un bloc final : les sections ont été reconstruites autour d’un fil conducteur, avec notions, méthode, exemples, limites, diagnostic et validation rapprochés de leur contexte.

- `debug-frontend.html` — du symptôme reproductible à l’hypothèse, l’isolation de la couche fautive et la preuve de correction.
- `performance-frontend.html` — dimensions de performance, protocole de mesure, localisation du coût, optimisation et contrôle des effets secondaires.
- `react-composants.html` — responsabilités des composants, contrat des props, état local et partage de l’état.
- `react-hooks.html` — règles des Hooks, état rendu, synchronisation externe, nettoyage et refs.
- `react-evenements-formulaires.html` — gestionnaires, modèle des champs, validation de soumission et accessibilité.
- `gestion-etat.html` — classification des données, invariants, partage, reducers et distinction état serveur/client.
- `typescript-react.html` — contrats des props, événements, unions discriminées et validation runtime.
- `tailwind-composants.html` — classes utilitaires, responsive/états, tokens et extraction de composants.
- `outils-frontend.html` — cycle de build, dépendances reproductibles, contrôles distincts et CI.
- `nextjs.html` — routage, frontière serveur/client, données, cache et sécurité de déploiement.

**Contrôles effectués :** ordre des sections reconstruit et contrôlé ; cinq références conservées dans le commentaire HTML initial et dans la liste visible de chaque page ; présence des objectifs, explications, exemples, pièges, exercice et critères de réussite vérifiée ; liens locaux et intégrité de l’archive vérifiés. Les exemples ont été relus statiquement ; aucun test navigateur réel ni vérification HTTP individuelle de toutes les sources externes n’est revendiqué.


## Lot 38 — seconde passe éditoriale et pédagogique (10 tutoriels)

Pages refactorisées dans l’ordre de `index.html`. Le travail a réorganisé le parcours de lecture, clarifié le fil directeur et intégré les développements dans les sections concernées plutôt que de les ajouter en fin de page.

- `tests-frontend.html` — stratégie de tests par risque, choix du niveau adapté, gestion des courses temporelles et diagnostic des échecs CI.
- `nodejs-typescript.html` — cycle d’exécution serveur, distinction asynchronisme/parallélisme, compilation et validation des entrées.
- `cycle-requete-reponse.html` — suivi de bout en bout, diagnostic par couche, cohérence des données et corrélation sans données sensibles.
- `framework-backend.html` — comparaison par scénarios concrets, séparation des responsabilités et préparation à l’exploitation.
- `modules-responsabilites.html` — frontières de modules, direction des dépendances, cohésion et coût réel d’une extraction en microservice.
- `logique-metier-validation.html` — validation syntaxique, règles métier, invariants persistants et gestion des courses concurrentes.
- `api-rest.html` — conception centrée sur les ressources, sémantique HTTP, idempotence, autorisation par ressource et contrat d’API.
- `codes-http.html` — choix des statuts, distinction entre erreurs client/serveur et format d’erreur stable.
- `versionnement-api.html` — stratégies de versionnement, compatibilité des consommateurs, dépréciation et retrait contrôlé.
- `openapi-swagger.html` — schéma de contrat, distinction entre validité de la spécification et conformité de l’API, contrôle en CI.

**Contrôles effectués :** le fil conducteur a été ajouté après les objectifs, les explications pratiques ont été intégrées dans les sections conceptuelles, et l’ordre de l’exercice et des erreurs fréquentes a été harmonisé lorsque pertinent. Les cinq sources restent présentes dans le commentaire HTML initial et dans la liste visible de chaque page. Contrôles automatiques de structure HTML analysable, présence des sections pédagogiques, décompte des sources et liens locaux réalisés ; les exemples ont été relus statiquement. Aucun test navigateur réel ni vérification HTTP individuelle de toutes les sources externes n’est revendiqué.


## Lot 39 — seconde passe éditoriale et pédagogique (10 tutoriels)

Pages révisées dans l’ordre de `index.html` :

- `middlewares.html` — responsabilités du pipeline, propagation des erreurs, diagnostic reproductible et protection des journaux.
- `validation-schema.html` — exemple de schéma runtime, propriétés inconnues, séparation entre validation, règle métier et autorisation.
- `taches-asynchrones.html` — livraison répétée, idempotence, retry, file d’échec et risque de double écriture avec le pattern outbox.
- `redis-cache.html` — exemple cache-aside, invalidation et course lecture/écriture, cache stampede et comportement en panne.
- `websockets-sse.html` — protocole d’événements, reconnexion et resynchronisation, montée en charge et contrôles de sécurité.
- `authentification-autorisation.html` — contrôle d’accès à une ressource, moindre privilège, politique par ressource et matrice de tests.
- `sessions-jwt.html` — comparaison contextualisée sessions/JWT, validation des claims, cookies, CSRF, rotation et révocation.
- `oauth-oidc.html` — séquence Authorization Code + PKCE, fonctions distinctes de state/nonce, validation des jetons et erreurs de configuration.
- `hachage-mots-de-passe.html` — sélection d’un algorithme spécialisé, cycle d’inscription/connexion, migration des paramètres et tests de fuite.
- `sql.html` — requête paramétrée, ordre stable, NULL, jointures, transactions et méthode de mesure des index.

**Contrôles effectués sur ce lot :** les dix fichiers existent dans l’archive et ont été modifiés uniquement dans le périmètre du lot ; chaque page conserve ses cinq sources dans le commentaire initial et cinq liens visibles. Les sections pédagogiques, les fragments HTML et les liens locaux ont été contrôlés par script. Les exemples ont été relus statiquement. Aucun test d’exécution applicatif, navigateur réel ou vérification HTTP individuelle de toutes les sources externes n’est revendiqué.

## Lot 40 — seconde passe éditoriale et pédagogique (10 tutoriels)

Pages révisées dans l’ordre exact de `index.html` :

- `postgresql.html` — transaction de transfert avec contrôle des lignes modifiées, règles de concurrence, lecture d’un plan `EXPLAIN (ANALYZE, BUFFERS)` et objectifs de restauration RPO/RTO.
- `modelisation-donnees.html` — sémantique et nullabilité des attributs, invariants métier, matrice d’accès et distinction entre relation courante et instantané historique.
- `cles-relations.html` — choix contextualisé des actions de suppression, clés composées, vérification des doublons et rôle des index sur les colonnes référençantes.
- `normalisation.html` — dépendances fonctionnelles, anomalies de mise à jour, distinction entre donnée courante et historique, dénormalisation mesurée et réconciliation.
- `jointures-agregations.html` — granularité des lignes, démonstration du gonflement des montants, pré-agrégation et cas de test sans/en présence de relations.
- `index-performances.html` — ordre des colonnes d’index composés, paramètres représentatifs, interprétation des écarts d’estimation et protocole de mesure avant/après.
- `transactions.html` — contrôle d’un invariant stock/commande, frontière transactionnelle face aux services externes, niveaux d’isolation et reprises après erreur de sérialisation.
- `migrations.html` — déploiement expand–migrate–contract, remplissage par lots, verrous propres au SGBD et distinction entre rollback de schéma et restauration de données.
- `pooling-n-plus-un.html` — dimensionnement global du pool multi-instance, restitution des connexions, métriques d’attente et comparaison N+1/jointure/chargement groupé.
- `nosql-mongodb.html` — décision embed/reference par profil d’accès et croissance, analyse des index, validation des documents et cohérence des références.

**Contrôles effectués sur ce lot :** les dix pages ont été modifiées dans leurs sections existantes ; les cinq URLs du commentaire documentaire initial et les cinq liens visibles ont été conservés. La vérification automatique de présence des sources, des liens locaux, des sections pédagogiques, de l’analyse HTML et de l’intégrité ZIP est effectuée lors de la préparation de l’archive. Les exemples ont été relus statiquement ; aucune exécution sur un serveur PostgreSQL/MongoDB, aucun benchmark réel et aucune vérification HTTP individuelle de toutes les sources externes ne sont revendiqués.

## Lot 41 — seconde passe éditoriale et pédagogique (10 tutoriels)

Pages révisées dans l’ordre exact de `index.html` :

- `injections-sql.html` — revue des fragments SQL dynamiques, paramètres et liste blanche, tests des filtres/tri/pagination.
- `xss.html` — choix des défenses selon le contexte de rendu, validation des URL, assainissement du HTML riche et tests DOM/SSR.
- `csrf.html` — classification des endpoints mutables, jetons et origine, SameSite complémentaire, distinction CSRF/XSS/CORS.
- `cors.html` — procédure de diagnostic dans Réseau, pré-vérification OPTIONS, credentials, cache et interdiction de refléter toute origine.
- `rate-limiting.html` — choix de clés et périmètres, réponse 429, compteurs multi-instance, comportement en panne et métriques.
- `securite-sessions-tokens.html` — cycle de vie de session, régénération d’identifiant, validation stricte des JWT et révocation/rotation.
- `https-headers.html` — déploiement progressif de CSP/HSTS, vérification des réponses et plan de retour arrière.
- `gestion-secrets.html` — procédure de réponse à une fuite, révocation effective, rotation, CI et artefacts de build.
- `autorisations-serveur.html` — exemples de politique et de requête nettoyés, tests par matrice sujet/action/ressource et absence de fuite.
- `donnees-logs.html` — tests négatifs par sentinelles, schéma d’événements, injection de logs, rétention et accès.

**Contrôles effectués sur ce lot :** les dix pages ont été modifiées dans leurs sections existantes ou dans une section de vérification intégrée au fil du cours. Les cinq références documentaires du commentaire initial et les cinq liens visibles ont été conservés et contrôlés. Les liens locaux, la présence des sections pédagogiques et la structure HTML analysable sont vérifiés par script ; l’intégrité de l’archive et la comparaison du périmètre modifié sont contrôlées après empaquetage. Les exemples ont été relus statiquement ; aucun test d’intrusion, déploiement navigateur réel ni vérification HTTP individuelle de toutes les sources externes n’est revendiqué.

## Lot 42 — seconde passe éditoriale et pédagogique (5 tutoriels)

Pages révisées dans l’ordre exact de `index.html` :

- `upload-fichiers.html` — matrice risques/contrôles/tests négatifs, validation multi-signal, cycle de quarantaine et reprise idempotente du traitement.
- `tests-unitaires.html` — cas tabulaires avec Vitest, tests négatifs, diagnostic des échecs et principe des tests de mutation.
- `tests-integration.html` — vérification des invariants persistants et de l’atomicité, assertions isolées et matrice de diagnostic des pannes d’environnement.
- `tests-e2e.html` — parcours orientés résultats observables, isolation des données, contrôle réel des autorisations et collecte sûre des traces.
- `cas-limites-regressions.html` — matrice de frontières, interactions prioritaires, sémantique des dates/fuseaux et procédure de preuve d’un test de régression.

**Progression cumulée :** 75/169 compétences revues (44,4 %) ; 94 restent à revoir. Les 169 pages existent dans l’index ; les cinq pages de projet sont suivies séparément.

**Contrôles effectués sur ce lot :** structure HTML analysable, présence des sections pédagogiques, cinq URL dans chaque commentaire documentaire initial et cinq liens visibles, résolution des liens locaux depuis les cinq pages modifiées, comparaison du périmètre modifié et intégrité ZIP. Les exemples ont été relus statiquement. Aucun test navigateur réel, exécution de suite applicative, test d’intrusion ou vérification HTTP individuelle de toutes les sources externes n’est revendiqué.


## Lot 43 — seconde passe éditoriale et pédagogique (5 tutoriels)

Pages révisées dans l’ordre exact de `index.html` :

- `debug-methodique.html` — hypothèses testables, expériences discriminantes, défauts intermittents et contrôle du nombre d’essais.
- `logs-erreurs.html` — schéma d’événements exploitables, protection des données, niveaux de logs, limitation du bruit et alertes orientées impact.
- `lint-formatage.html` — scripts reproductibles, verrouillage des versions, contrôles CI en lecture seule et adoption progressive des règles.
- `refactoring.html` — transformations petites et réversibles, contrats comportementaux, mesures de maintenabilité et séparation des changements fonctionnels.
- `lecture-code.html` — preuves nécessaires avant modification, recherche des usages indirects et revue fondée sur les risques observables.

**Progression cumulée :** 80/169 compétences revues (47,3 %) ; 89 restent à revoir. Les cinq pages de projet sont suivies séparément.

**Contrôles effectués sur ce lot :** la structure HTML, les sections pédagogiques, les cinq URL documentaires dans chaque commentaire initial, les cinq liens visibles et les liens locaux des pages modifiées sont contrôlés par script. Les ajouts ont été relus statiquement. Aucun test navigateur réel, exécution de suite applicative ou vérification HTTP individuelle de toutes les sources externes n’est revendiqué.

## Lot 44 — seconde passe éditoriale et pédagogique (5 tutoriels)

Pages révisées dans l’ordre exact de `index.html` :

- `linux-terminal.html` — diagnostic reproductible, inspection de l’environnement, codes de sortie et précautions avant de manipuler les processus.
- `environnement-config.html` — contrat de configuration, validation stricte, séparation des variables publiques et des secrets, comparaison des environnements.
- `docker.html` — contexte de build, image reproductible, exécution non privilégiée, ports, logs et persistance des données.
- `ci-cd.html` — pipeline bloquante, installation déterministe, code de sortie, permissions minimales, traçabilité de l’artefact et rollback.
- `deploiement-base.html` — procédure de livraison, preuves par étape, migrations expand/contract et restauration testée.

**Progression cumulée :** 85/169 compétences revues (50,3 %) ; 84 restent à revoir. Les cinq pages de projet sont suivies séparément.

**Contrôles effectués sur ce lot :** structure HTML analysable, sections pédagogiques, cinq URL dans chaque commentaire documentaire initial et cinq liens visibles, résolution des liens locaux depuis les pages modifiées, comparaison du périmètre modifié et intégrité ZIP. Les exemples ont été relus statiquement. Aucun test navigateur réel, exécution d’une pipeline, test de déploiement réel ou vérification HTTP individuelle de toutes les sources externes n’est revendiqué.


## Lot 45 — seconde passe éditoriale et pédagogique (5 tutoriels)

Pages révisées dans l’ordre exact de `index.html` :

- `dns-https-certificats.html` — diagnostic séquentiel DNS/IPv4/IPv6/TLS/HTTP, commandes reproductibles et collecte de preuves avant modification.
- `sauvegardes-migrations-prod.html` — exercice de restauration isolé, objectifs RPO/RTO, stratégie expand–migrate–contract et critères d’arrêt.
- `observabilite.html` — corrélation logs/métriques/traces, percentiles, cardinalité des métriques, readiness/liveness et alertes actionnables.
- `cloud.html` — comparaison d’architectures à critères constants, coûts cachés, responsabilité opérationnelle et sauvegardes indépendantes.
- `infrastructure-as-code.html` — revue d’un plan destructeur, contrôle du périmètre, protection de l’état, secrets et gestion du drift.

**Progression cumulée :** 90/169 compétences revues (53,3 %) ; 79 restent à revoir. Les cinq pages de projet sont suivies séparément.

**Contrôles effectués sur ce lot :** intégrité ZIP, comparaison des entrées avec l’archive de référence, analyse HTML, présence des sections pédagogiques, cinq sources dans le commentaire initial et cinq liens visibles par page, résolution des liens locaux des pages modifiées. Les exemples ont été relus statiquement. Aucun test navigateur réel, exercice de restauration réel, déploiement cloud ou vérification HTTP individuelle de toutes les sources externes n’est revendiqué.


## Lot 46 — seconde passe éditoriale et pédagogique (5 tutoriels)

Pages révisées dans l’ordre exact de `index.html` :

- `kubernetes.html` — diagnostic guidé de l’état des workloads, événements, probes, endpoints et routage ; correction minimale et preuve de retour à la normale.
- `architecture-modulaire.html` — contrats publics, dépendances entre modules, détection des cycles et exercice de frontière Commandes/Notifications.
- `separation-responsabilites.html` — exemple de règle métier pure, orchestration des effets secondaires, transaction et refactoring progressif protégé par des tests.
- `design-patterns.html` — choix à partir du problème, comparaison d’alternatives, exemple de stratégie et limites d’une abstraction de paiement.
- `api-evolutives.html` — analyse des ruptures de compatibilité, contrats, valeurs d’énumération, dépréciation mesurable et plan de migration.

**Progression cumulée :** 95/169 compétences revues (56,2 %) ; 74 restent à revoir. Les cinq pages de projet sont suivies séparément.

**Contrôles effectués sur ce lot :** intégrité ZIP, comparaison du périmètre modifié, analyse de la structure HTML, présence des sections pédagogiques, cinq URL dans chaque commentaire documentaire initial, cinq liens visibles et résolution des liens locaux des pages modifiées. Les exemples ont été relus statiquement. Aucun test navigateur réel, cluster Kubernetes, benchmark, test d’intégration applicatif ou vérification HTTP individuelle de toutes les sources externes n’est revendiqué.


## 11. Journal des lots de seconde passe

### Lot 47 — compétences 96 à 100

Pages révisées, dans l’ordre de `index.html` :

- **96 — Cache et compromis de performance** (`lessons/cache-compromis.html`) : mesure du bénéfice, fallback, cache stampede, clés tenant-aware et exercice de décision.
- **97 — Monolithe ou microservices** (`lessons/monolithe-microservices.html`) : coûts des frontières distribuées, cohérence, extraction progressive et critères de décision.
- **98 — Montée en charge** (`lessons/scalabilite.html`) : débit/concurrence/latence, loi de Little, protocole de mesure et protection contre la surcharge.
- **99 — Concevoir pour l’exploitation** (`lessons/conception-exploitation.html`) : signaux d’observabilité, cardinalité, budgets de délai, retries et conception des alertes.
- **100 — Construire des projets complets** (`lessons/projets-complets.html`) : tranches verticales, définition de fini, livraison reproductible et preuves de portfolio.

**Contrôles effectués sur ce lot :** lecture des cinq pages avant modification ; insertion d’un approfondissement spécifique avant la partie exercice ; vérification statique des sections, liens locaux et références existantes ; intégrité de l’archive et comparaison du périmètre modifié. Les cinq URLs documentaires initiales et les listes visibles de sources ont été conservées. Aucun test navigateur, test applicatif de bout en bout ou contrôle HTTP de chaque source externe n’est revendiqué.



### Lot 48 — compétences 101 à 105

Pages révisées dans l’ordre exact de `index.html` :

- **101 — Lire la documentation officielle** (`lessons/documentation-officielle.html`) : vérification de la version réellement installée, distinction contrat/exemple/recommandation, gestion des contradictions et fiche de lecture reproductible.
- **102 — Lire et contribuer à l’open source** (`lessons/open-source.html`) : comparaison des tests avant/après, classification des échecs de CI, inspection du diff et présentation d’une PR vérifiable.
- **103 — Utiliser l’IA comme outil de développement** (`lessons/usage-ia.html`) : matrice affirmation/preuve/risque, validation des API et des régressions, traitement des entrées non fiables et limites des outils.
- **104 — Expliquer les choix techniques** (`lessons/choix-techniques.html`) : distinction contraintes/hypothèses/mesures, seuils éliminatoires, réversibilité et déclencheurs de réexamen ; déduplication des passages répétés.
- **105 — Approfondissement et spécialisation** (`lessons/specialisation.html`) : progression par preuves observables, matrice de compétences, plan d’exploration sur six semaines et critères de réorientation.

**Progression cumulée :** 105/169 compétences revues (62,1 %) ; 64 restent à revoir. Les cinq pages de projet sont suivies séparément.

**Contrôles effectués sur ce lot :** vérification de l’ordre et des chemins dans `index.html` ; lecture des cinq pages avant modification ; analyse HTML, vérification des sections pédagogiques, des cinq URLs dans chaque commentaire initial et des cinq liens visibles ; résolution des liens locaux des pages modifiées ; intégrité ZIP et comparaison du périmètre modifié. Le suivi intégré au projet a été synchronisé avec le suivi externe et mis à jour jusqu’au lot 48. Les contrôles sont statiques : aucun test navigateur réel, aucune exécution des exercices, aucune vérification HTTP individuelle de toutes les sources externes n’est revendiquée.

**Prochaine tranche :** compétences 106 à 110, dans l’ordre de `index.html`.

### Lot 49 — compétences 106 à 110

Pages révisées dans l’ordre exact de `index.html` :

- **106 — Types génériques** (`lessons/typescript-generiques.html`) : approfondissement du choix de paramètres de type, des signatures qui préservent les relations entrée-sortie, des tableaux en lecture seule et du diagnostic d’un générique inutile.
- **107 — Unions, intersections et narrowing** (`lessons/typescript-unions-intersections.html`) : atelier sur les unions discriminées, l’exhaustivité avec `never`, et la différence entre alternatives et contrats simultanés.
- **108 — Types conditionnels et types mappés** (`lessons/typescript-types-conditionnels-mappes.html`) : méthode de lecture des transformations, distribution sur les unions, tests de types et critères de lisibilité avant publication d’un utilitaire.
- **109 — Types utilitaires : Pick, Omit, Partial et Record** (`lessons/typescript-utilitaires.html`) : exemple de modèles dérivés pour une API, distinction entre champs facultatifs et règles métier, et rappel que les utilitaires ne valident pas les données à l’exécution.
- **110 — Inférence, unknown et never** (`lessons/typescript-unknown-never.html`) : validation d’une valeur externe, prédicat de type, limites des contrôles superficiels et usages distincts de `unknown` et `never`.

Chaque page conserve son contenu antérieur et reçoit un atelier guidé additionnel, avec exemple de code, analyse des choix et pièges associés. Les cinq références documentaires existantes sont conservées dans le commentaire HTML initial et la liste visible.

**Progression cumulée :** 110/169 compétences revues (65,1 %) ; 59 restent à revoir. Les cinq pages de projet sont suivies séparément.

**Contrôles effectués sur ce lot :** vérification de l’ordre et des chemins dans `index.html` ; contrôle des cinq pages avant modification ; contrôle de présence des ateliers, objectifs, exemples, pièges, exercices, critères de réussite et exactement cinq références documentaires dans le commentaire initial et la liste visible ; vérification des balises et liens locaux des pages modifiées ; comparaison du périmètre des fichiers ; vérification de l’archive ZIP complète. Contrôles statiques uniquement : aucun test navigateur réel, aucune exécution des exercices ni vérification HTTP individuelle des sources externes n’est revendiquée.

## Prévision historique (avant le lot 50)

La prévision précédente a été remplacée par les lots 50 et 51. L’état actif et le prochain lot sont consignés à la fin de ce fichier.


## Lot 50 — seconde passe, compétences 111 à 120

Dix tutoriels ont été approfondis dans l’ordre de `index.html`, conformément à la règle de dix pages par lot :

- **111 — Modules, déclarations et `tsconfig`** (`lessons/typescript-modules-tsconfig.html`) : distinction entre syntaxe, résolution des modules et runtime, configuration reproductible et validation du JavaScript compilé.
- **112 — Pagination, tri et filtrage** (`lessons/api-pagination-filtrage.html`) : paramètres bornés, tri déterministe, curseurs, requêtes paramétrées et tests de limites.
- **113 — Contrats d’API et validation des réponses** (`lessons/contrats-api-validation.html`) : validation à l’exécution, séparation des modèles d’entrée/interne/sortie et compatibilité des contrats.
- **114 — Gestion cohérente des erreurs d’API** (`lessons/api-erreurs-coherentes.html`) : format d’erreur stable, sémantique HTTP, corrélation et prévention des fuites d’informations.
- **115 — Timeouts, retries et annulation** (`lessons/timeouts-retries-annulation.html`) : budgets de temps, retries bornés, backoff avec jitter, propagation de l’annulation et sûreté des mutations.
- **116 — Idempotence des API** (`lessons/idempotence-api.html`) : portée des clés, coordination atomique, conflits de payload et reprise après panne.
- **117 — Webhooks et intégrations tierces** (`lessons/webhooks.html`) : vérification des signatures, persistance durable, déduplication et traitement asynchrone.
- **118 — Isolation des transactions et verrous** (`lessons/isolation-transactions-verrous.html`) : anomalies de concurrence, garanties propres au moteur, verrous et reprises bornées.
- **119 — Concurrence et mises à jour perdues** (`lessons/concurrence-mises-a-jour.html`) : contrôle optimiste, versions, ETag/If-Match et traitement explicite des conflits.
- **120 — Plans d’exécution SQL** (`lessons/plans-execution-sql.html`) : estimations contre lignes réelles, buffers, index et mesures comparables.

Chaque page conserve le contenu antérieur et ajoute un atelier approfondi avec objectifs opérationnels, explications, exemple, pièges, exercice et critères de réussite. Les cinq références déjà présentes sont conservées dans le commentaire HTML initial et la liste visible.

**Progression cumulée de la seconde passe : 120/169 compétences (71,0 %)** ; 49 compétences restent à réviser. Les cinq pages de projet sont suivies séparément.

**Contrôles effectués :** vérification de l’ordre et des chemins dans `index.html` ; analyse statique des dix pages modifiées ; contrôle des sections pédagogiques et des cinq références documentaires dans chaque commentaire initial et liste visible ; vérification des liens locaux des pages modifiées ; comparaison du périmètre des fichiers et test d’intégrité de l’archive ZIP. Les tests navigateur, l’exécution des exercices et la vérification HTTP de chaque source externe ne sont pas revendiqués.

**Prochaine étape à ce stade : compétences 121 à 130**, dix pages dans l’ordre de `index.html`.

### Lot 51 — compétences 121 à 130

Dix tutoriels ont été approfondis dans l’ordre des compétences non encore révisées de `index.html` :

- **121 — Sauvegarde et restauration** (`lessons/strategie-sauvegarde-restauration.html`) : objectifs RPO/RTO, cohérence des dépendances, restauration isolée, vérification applicative et runbook de reprise.
- **122 — Migrations sans interruption** (`lessons/migrations-sans-interruption.html`) : compatibilité entre versions, expand–migrate–contract, backfill idempotent, verrous et conditions d’arrêt.
- **123 — Recherche textuelle et pagination** (`lessons/recherche-textuelle-pagination.html`) : choix du modèle de recherche, pagination keyset, tri déterministe, curseurs et index justifiés par la mesure.
- **124 — Modèle de menace** (`lessons/modele-menace.html`) : actifs, frontières de confiance, scénarios causaux, priorisation et contrôles vérifiables.
- **125 — Contrôle d’accès RBAC/ABAC** (`lessons/rbac-abac-controle-acces.html`) : décisions acteur/action/ressource, moindre privilège, refus par défaut et tests inter-tenant.
- **126 — Sécurité des dépendances** (`lessons/securite-dependances.html`) : triage d’alertes, dépendances transitives, installation reproductible, lockfile et provenance.
- **127 — Sécurité des API et prévention des abus** (`lessons/securite-api-abus.html`) : autorisation par ressource, validation, limites de ressources, quotas, timeouts et sûreté des mutations.
- **128 — Rotation des secrets et chiffrement** (`lessons/rotation-secrets-chiffrement.html`) : cycle de vie, rotation avec chevauchement limité, révocation, distinction chiffrement/hachage et gestion des clés.
- **129 — Journalisation de sécurité et incidents** (`lessons/journalisation-incidents.html`) : événements structurés, protection des données, corrélation, alertes et réponse à incident.
- **130 — Ergonomie et conception d’interface** (`lessons/ergonomie-interface.html`) : tests de tâches, indicateurs d’utilisabilité, récupération après erreur, navigation clavier et hypothèses vérifiables.

Chaque page conserve son contenu précédent et reçoit un atelier spécifique avec objectifs opérationnels, explications, exemples, pièges, exercice et critères de réussite. Les cinq sources documentaires existantes sont conservées dans le commentaire HTML initial et dans la liste visible de chaque page.

**Progression cumulée de la seconde passe : 130/169 compétences (76,9 %)** ; 39 compétences restent à réviser. Les cinq pages de projet sont suivies séparément.

**Contrôles effectués :** vérification de l’ordre de l’index et du registre des lots ; contrôle statique des dix pages modifiées ; vérification des sections pédagogiques et des cinq URL documentaires dans chaque commentaire initial et liste visible ; vérification des liens locaux depuis les pages modifiées ; comparaison du périmètre modifié ; test d’intégrité de l’archive ZIP complète. Aucun test navigateur réel, exécution des exercices, test de restauration/déploiement réel ou vérification HTTP individuelle de toutes les sources externes n’est revendiqué.

**Prochaine étape : compétences 131 à 140**, dix pages dans l’ordre de `index.html` :

- [ ] 131. États de chargement, erreur et vide (`etats-interface.html`)
- [ ] 132. Navigation clavier et lecteurs d’écran (`navigation-clavier-lecteurs.html`)
- [ ] 133. Contraste, sémantique et ARIA (`contraste-semantique-aria.html`)
- [ ] 134. Core Web Vitals (`core-web-vitals.html`)
- [ ] 135. Issues, tickets et critères d’acceptation (`issues-tickets-acceptation.html`)
- [ ] 136. Pull requests et revue de code (`pull-requests-revue-code.html`)
- [ ] 137. Branches et résolution de conflits Git (`branches-conflits-git.html`)
- [ ] 138. SemVer et changelogs (`semver-changelogs.html`)
- [ ] 139. Documentation des décisions (`documentation-decisions.html`)
- [ ] 140. Licences et publication de packages (`licences-publication-packages.html`)

### Lot 52 — compétences 131 à 140

Dix tutoriels ont été approfondis dans l’ordre de `index.html`, conformément à la règle de dix pages par lot :

- **131 — États de chargement, erreur et vide** (`lessons/etats-interface.html`) : modélisation explicite des états asynchrones, distinction entre résultat vide et échec, gestion des réponses obsolètes et annonces accessibles.
- **132 — Navigation clavier et lecteurs d’écran** (`lessons/navigation-clavier-lecteurs.html`) : ordre de focus, éléments natifs, gestion du focus d’un dialogue, retour au déclencheur et annonces utiles.
- **133 — Contraste, sémantique et ARIA** (`lessons/contraste-semantique-aria.html`) : seuils de contraste, sens des éléments HTML, association des erreurs aux champs et limites d’ARIA.
- **134 — Core Web Vitals et performances réelles** (`lessons/core-web-vitals.html`) : seuils LCP/INP/CLS, distinction laboratoire/terrain, budgets et démarche de mesure avant/après.
- **135 — Issues, tickets et critères d’acceptation** (`lessons/issues-tickets-acceptation.html`) : reproduction, contexte, critères observables, sévérité/priorité et délimitation du périmètre.
- **136 — Pull requests et revue de code** (`lessons/pull-requests-revue-code.html`) : description vérifiable, qualité du diff, tests, sécurité et commentaires de revue actionnables.
- **137 — Stratégie Git et résolution de conflits** (`lessons/branches-conflits-git.html`) : différences merge/rebase, interprétation des conflits, protection du travail local et vérification après résolution.
- **138 — Versionnement sémantique et changelogs** (`lessons/semver-changelogs.html`) : compatibilité de l’API publique, règles MAJOR/MINOR/PATCH, préversions, notes orientées utilisateur et migrations.
- **139 — Documentation technique et décisions d’architecture** (`lessons/documentation-decisions.html`) : choix du format, ADR, alternatives, conséquences, statuts et réexamen des décisions.
- **140 — Dépendances, licences et publication de packages** (`lessons/licences-publication-packages.html`) : obligations des licences, inventaire des dépendances, inspection de l’archive publiée, exports et consommation dans un projet vierge.

Chaque page conserve son contenu antérieur et reçoit un atelier propre à la compétence avec objectifs opérationnels, explications substantielles, exemple de code, pièges, exercice et critères de réussite. Les cinq références documentaires existantes ont été contrôlées et conservées dans le commentaire HTML initial ainsi que dans la liste visible de chaque page.

**Progression cumulée de la seconde passe : 140/169 compétences (82,8 %) ; 29 restent à réviser.** Les cinq pages de projet sont suivies séparément.

**Contrôles effectués :** vérification de l’ordre et des chemins dans `index.html` ; contrôle statique des dix pages modifiées ; présence des objectifs, explications, exemples, pièges, exercices et critères de réussite ; contrôle de cinq URL documentaires dans chaque commentaire initial et de cinq liens dans chaque liste visible ; vérification des liens locaux depuis les pages modifiées ; comparaison des fichiers modifiés ; contrôle d’intégrité et de contenu de l’archive ZIP complète. Les tests navigateur, l’exécution des exercices et la vérification HTTP individuelle de toutes les sources externes ne sont pas revendiqués.

**Prochaine étape : compétences 141 à 150**, dix pages dans l’ordre de `index.html` : routage frontend, gestion des données distantes, SSR/CSR/hydratation, découpage des composants, injection de dépendances, transactions métier, frontières de modules, architecture hexagonale, profilage d’application, cache HTTP/CDN.

### Lot 53 — compétences 141 à 145

Cinq tutoriels ont été relus et approfondis dans l’ordre de `index.html` :

- **141 — Routage frontend** (`lessons/routage-frontend.html`) : contrat de route, table de routes, validation des paramètres, distinction 400/403/404/erreur serveur, redirections sûres, historique et tests d’accès direct.
- **142 — Gestion des données distantes** (`lessons/donnees-distantes-frontend.html`) : identité des clés de cache, séparation des données par compte/tenant, fraîcheur, invalidation après mutation, mises à jour optimistes et retries adaptés aux erreurs.
- **143 — SSR, CSR et hydratation** (`lessons/ssr-csr-hydratation.html`) : choix de stratégie selon le besoin, déterminisme du premier rendu, désaccords d’hydratation, sérialisation et frontières des données serveur/client.
- **144 — Découpage et composition des composants** (`lessons/decoupage-composants.html`) : cohésion plutôt que nombre de lignes, contrat de props, placement de l’état, composition et coût des abstractions.
- **145 — Injection de dépendances** (`lessons/injection-dependances.html`) : contrats minimaux, composition manuelle, tests déterministes, durée de vie et risques des singletons contenant un état de requête.

Chaque page conserve le contenu déjà présent et reçoit un atelier ciblé avec objectifs, explications, exemples de code, pièges, exercice et critères de réussite. Les cinq références documentaires déjà associées à chaque compétence sont présentes dans le commentaire HTML initial et dans la liste visible ; elles ont été conservées, sans prétendre que chaque source externe a été intégralement consultée lors de ce lot.

**Progression cumulée de la seconde passe : 145/169 compétences (85,8 %) ; 24 restent à réviser.** Les cinq pages de projet restent suivies séparément.

**Contrôles effectués :** lecture des cinq pages avant modification ; vérification de leur ordre et de leurs chemins dans `index.html` ; contrôle de la structure HTML après insertion ; vérification des objectifs, explications, exemples, pièges, exercices et critères de réussite ; vérification de cinq URL documentaires dans chaque commentaire initial et de cinq liens visibles ; vérification des liens locaux des cinq pages ; comparaison du périmètre modifié ; contrôle d’intégrité et du contenu de l’archive complète. Aucun test navigateur réel, exécution des exercices ou vérification HTTP individuelle de toutes les sources externes n’est revendiqué.

**Prochaine étape : compétences 146 à 150**, dans l’ordre de `index.html` : transactions métier, frontières de modules, architecture hexagonale, profilage d’application et cache HTTP/CDN.


### Lot 54 — seconde passe, compétences 146 à 150

Cinq tutoriels ont été révisés dans l’ordre exact des compétences non encore traitées dans `index.html`, conformément à la demande de lot de cinq pages :

- **146 — Transactions et cohérence métier** (`lessons/transactions-metier.html`) : invariants métier, atomicité locale, choix entre contraintes/écritures conditionnelles/verrous/isolation, outbox, idempotence et reprises bornées. Le fragment SQL est contextualisé et les contrôles de lignes affectées sont explicités.
- **147 — Frontières entre modules** (`lessons/frontieres-modules.html`) : API publique minimale, imports profonds, direction des dépendances, cycles, règles d’import automatisables, propriété des données et coût des événements asynchrones.
- **148 — Architecture hexagonale** (`lessons/architecture-hexagonale.html`) : ports définis côté application, adaptateurs, sens des dépendances, point de composition, cycle de vie et tests unitaires/intégration. Les exemples TypeScript ont été corrigés pour que les génériques soient correctement échappés dans le HTML et que les signatures soient cohérentes. Les cinq références du commentaire initial ont été alignées sur les cinq références visibles.
- **149 — Profilage d’application** (`lessons/profilage-application.html`) : protocole de mesure reproductible, interprétation des percentiles, diagnostic par famille de goulots, profils navigateur/backend/SQL et comparaison avant/après.
- **150 — Cache HTTP et CDN** (`lessons/cache-http-cdn.html`) : distinction des directives, revalidation ETag/Last-Modified, variation des représentations, confidentialité des réponses personnalisées, invalidation, cache stampede et matrice de tests.

Chaque page conserve les parties antérieures hors des sections ciblées et a été refactorisée là où les objectifs étaient génériques ou les explications pouvaient être rendues plus opératoires. Les objectifs, explications, exemples, pièges, exercices, critères de réussite et cinq sources sont présents ; les cinq sources apparaissent dans le commentaire HTML initial et dans la liste visible. Les sources sont des pistes documentaires pertinentes ; aucune lecture intégrale de chaque page externe n’est revendiquée.

**Progression cumulée de la seconde passe : 150/169 compétences (88,8 %) ; 19 restent à réviser.** Les cinq pages de projet sont suivies séparément.

**Contrôles effectués :** ordre et chemins recoupés avec `index.html` ; lecture des cinq pages avant modification ; vérification de la structure HTML, des sections pédagogiques, des cinq URL du commentaire initial et des cinq liens visibles ; vérification des liens locaux des pages modifiées ; contrôle des liens locaux de l’index ; comparaison des fichiers avant/après ; test d’intégrité de l’archive ZIP complète. Aucun test navigateur réel, aucune exécution des exercices et aucune vérification HTTP individuelle de toutes les sources externes ne sont revendiqués.

**Prochaine étape : compétences 151 à 155**, dans l’ordre de `index.html` : tests de charge, identification des goulots d’étranglement, traces distribuées, corrélation des logs, métriques et alertes.


### Lot 55 — seconde passe, compétences 151 à 160

Dix tutoriels approfondis dans l’ordre de `index.html` :

- **151 — Tests de charge** (`lessons/tests-charge.html`) : profils réalistes, paliers, percentiles, saturation et reproductibilité.
- **152 — Identification des goulots d’étranglement** (`lessons/goulots-etranglement.html`) : hypothèses falsifiables, mesures discriminantes et comparaison contrôlée.
- **153 — Traces distribuées** (`lessons/traces-distribuees.html`) : spans, propagation de contexte, échantillonnage et confidentialité.
- **154 — Corrélation des logs** (`lessons/correlation-logs.html`) : schéma structuré, identifiants de corrélation, recherche et protection des données.
- **155 — Métriques et alertes** (`lessons/metriques-alertes.html`) : SLI/SLO, budget d’erreur, alertes actionnables et runbooks.
- **156 — Environnements de développement, test et production** (`lessons/environnements-dev-test-prod.html`) : parité utile, configuration, secrets et promotion d’artefacts.
- **157 — Rollback et stratégies de déploiement** (`lessons/rollback-deploiement.html`) : canary/blue-green, seuils de décision et compatibilité des données.
- **158 — Migrations pendant la livraison** (`lessons/migrations-livraison.html`) : expand/backfill/bascule/contract, reprise et observabilité.
- **159 — Recueil du besoin et spécifications** (`lessons/recueil-besoin-specifications.html`) : découverte, périmètre, cas limites et critères d’acceptation testables.
- **160 — Découpage en tâches et estimation** (`lessons/decoupage-taches-estimation.html`) : tranches verticales, dépendances, incertitude et calibration.

Chaque page conserve son contenu antérieur et comprend un atelier approfondi avec objectifs, explications, exemples ou démarches concrètes, pièges, exercice et critères de réussite. Les cinq références documentaires du commentaire initial et les cinq liens visibles préexistants ont été conservés.

**Contrôles effectués sur le lot 55 :** vérification des dix chemins dans l’index ; contrôle de la présence des sections pédagogiques ; vérification de cinq URL documentaires dans chaque commentaire initial et de cinq liens visibles ; analyse des balises principales et des liens locaux des pages modifiées ; comparaison du périmètre modifié ; création et test d’intégrité de l’archive ZIP complète. Aucun test navigateur réel ni vérification HTTP individuelle de toutes les sources externes n’est revendiqué.

**Progression cumulée de la seconde passe : 160/169 compétences (94,7 %) ; 9 restent à réviser.** Les cinq pages de projet restent suivies séparément.

**Prochaine étape : compétences 161 à 169**, les neuf dernières compétences dans l’ordre de `index.html`.


### Lot 56 — seconde passe, compétences 161 à 169

Neuf tutoriels ont été complétés dans l’ordre de `index.html`, ce qui termine la seconde passe sur les 169 compétences :

- **161 — Priorisation produit** (`priorisation-produit.html`) : critères explicites, incertitude, contraintes et réévaluation des décisions.
- **162 — Assistants de code** (`assistants-code.html`) : cadrage du contexte, modification limitée, revue du diff et tests indépendants.
- **163 — Vérification du code généré** (`verification-code-ia.html`) : tests de cas limites, analyse statique, dépendances et provenance.
- **164 — Limites et sécurité des outils IA** (`limites-securite-ia.html`) : entrées non fiables, permissions minimales, secrets et confirmation humaine.
- **165 — GraphQL** (`graphql.html`) : schéma, problème N+1, autorisation, pagination et limites de coût.
- **166 — Moteurs de recherche** (`recherche-moteurs.html`) : pipeline d’indexation, pertinence, réconciliation et latence.
- **167 — Systèmes distribués** (`systemes-distribues.html`) : défaillances partielles, idempotence, timeouts et reprises.
- **168 — Architecture événementielle** (`architecture-evenementielle.html`) : événements métier, outbox, compatibilité de schéma et rejeu.
- **169 — Applications temps réel** (`applications-temps-reel.html`) : choix de transport, reconnexion, curseurs et resynchronisation.

**Contrôles exécutés pour ce lot :** présence des neuf fichiers, insertion du module pédagogique, conservation des cinq références initiales et des cinq liens visibles existants, parsing HTML, contrôle des liens locaux par chemins relatifs, archive ZIP complète et test d’intégrité. Les tests navigateur, l’exécution des exemples et les vérifications HTTP individuelles des sources externes ne sont pas revendiqués.

**État final : 169/169 compétences révisées (100 %), 0 restante.** Les cinq pages de projets restent suivies séparément.


### Exécution 4 — Projet 3 : Application Full Stack (11 octobre 2026)

- **Fichier modifié :** `lessons/projet-3-application-fullstack.html`.
- **Documentation synchronisée :** `README.md` et le présent suivi.
- **Spécification ajoutée :** contexte/prérequis, périmètre et exclusions, contrat API proposé, architecture frontend/backend, choix d’authentification à justifier, protection des données entre comptes, états UI, accessibilité, étapes, critères d’acceptation, tests unitaires/intégration/E2E, livrables et définition de terminé.
- **Sources visibles :** cinq références documentaires. Leurs URL n’ont pas été vérifiées en HTTP durant cette exécution.
- **Contrôles réellement exécutés :** vérification d’intégrité du ZIP d’entrée avant extraction ; inspection des fiches 2 et 3 ; après modification, contrôles statiques HTML, présence des sections attendues, cinq liens de sources, navigation vers les projets voisins, résolution des chemins locaux et fragments, inventaire et intégrité du ZIP de sortie.
- **Limites :** aucune application frontend/backend n’a été exécutée ; pas de test navigateur, d’E2E, de serveur HTTP ou de contrôle HTTP des sources externes. La fiche est une spécification, pas une preuve d’implémentation.
- **Archive produite :** `roadmap_fullstack_2026_corrections_v3.zip`.
- **Prochaine étape :** Projet 4 — Mise en production.


### Exécution 5 — Projet 4 : Mise en production (11 octobre 2026)

- **Fichier modifié :** `lessons/projet-4-production.html`.
- **Documentation synchronisée :** `README.md` et le présent suivi.
- **Spécification ajoutée :** contexte/prérequis, périmètre et exclusions, architecture cible, configuration par environnement, gestion des secrets, pipeline CI/CD, artefacts immuables, conteneurs, migrations compatibles, stratégies de déploiement et de rollback, supervision, réponse aux incidents, sauvegardes, objectifs RPO/RTO, exigences de sécurité, critères d’acceptation, plan de tests, livrables et définition de terminé.
- **Sources visibles :** six liens documentaires officiels ou de référence ; leurs URL n’ont pas été contrôlées en HTTP pendant cette exécution.
- **Contrôles réellement exécutés :** intégrité ZIP d’entrée ; parsing HTML des pages du livrable ; présence des sections et références attendues dans la fiche Projet 4 ; résolution statique des chemins locaux et fragments ; inventaire et intégrité de l’archive ZIP de sortie.
- **Limites :** aucune application n’a été déployée ; aucun pipeline CI/CD, test de rollback, restauration de sauvegarde, test navigateur ou contrôle HTTP externe n’a été exécuté. La fiche est une spécification de réalisation et de validation.
- **Archive produite :** `roadmap_fullstack_2026_corrections_v4.zip`.
- **Prochaine étape :** Projet 5 — Application de niveau professionnel.


### Exécution 6 — Projet 5 : Application de niveau professionnel (11 octobre 2026)

- **Fichier modifié :** `lessons/projet-5-application-professionnelle.html`.
- **Documentation synchronisée :** `README.md` et le présent suivi.
- **Spécification ajoutée :** contexte et prérequis, exigences fonctionnelles/non fonctionnelles, exclusions, frontières de modules, décisions d’architecture, contrats API et données, sécurité et protection des données, stratégie de tests, performance mesurée, observabilité, CI/CD, déploiement, sauvegardes/restauration, étapes, critères d’acceptation mesurables, preuves attendues, livrables et définition de terminé.
- **Sources visibles :** huit liens documentaires. Ils sont consignés comme références ; aucune vérification HTTP individuelle n’est revendiquée.
- **Contrôles réellement exécutés :** parsing statique des pages HTML ; vérification des 15 sections de la fiche Projet 5 ; comptage du contenu ; résolution statique des chemins locaux et fragments de l’ensemble du livrable ; inventaire et test d’intégrité de l’archive ZIP complète.
- **Limites :** aucune application n’a été implémentée ou lancée ; pas de test navigateur, de mesure de performance, d’exécution CI/CD, de restauration, ni de contrôle HTTP externe. La fiche reste une spécification de réalisation.
- **Archive produite :** `roadmap_fullstack_2026_corrections_v5.zip`.
- **Prochaine étape :** audit pédagogique ciblé, maximum cinq tutoriels par exécution, en commençant par les sujets critiques et les pages les plus courtes.


### Exécution 7 — Audit pédagogique ciblé, lot 1 (11 octobre 2026)

**Périmètre : cinq tutoriels maximum, choisis selon la priorité du plan et le repérage des pages courtes.** Le comptage initial a porté sur les 174 pages de `lessons/` ; les pages les plus courtes comprennent notamment `transactions.html` (environ 619 mots visibles), `index-performances.html` (614), `react-hooks.html` (601) et `typescript-react.html` (607). Le lot a privilégié les risques de sécurité et de cohérence des données plutôt que les seules pages les plus courtes.

| Fichier | Décision d’audit | Correction / constat |
|---|---|---|
| `lessons/authentification-autorisation.html` | Audité ; aucune réécriture retenue | Le tutoriel distingue identité, authentification et autorisation, traite le contrôle d’accès par ressource, le refus par défaut, les sessions/tokens et les tests inter-comptes. La couverture est jugée suffisante pour ce lot. Les sources externes n’ont pas été contrôlées en HTTP. |
| `lessons/transactions.html` | Révisé | La section de transaction a été restructurée autour d’un exemple PostgreSQL/node-postgres : verrouillage des deux comptes dans un ordre stable, contrôle de `rowCount`, débit conditionnel, commit/rollback, libération de connexion et destruction de la connexion si le rollback échoue. Les limites des effets externes et des retries sont explicitées. |
| `lessons/injections-sql.html` | Révisé | La liste blanche de tri dynamique utilise désormais une `Map` de valeurs constantes plutôt qu’un objet JavaScript ordinaire. L’explication couvre la validation d’entrée à l’exécution et des tests de clés inconnues ou hostiles (`toString`, tentative d’injection). |
| `lessons/api-erreurs-coherentes.html` | Révisé | Le middleware d’exemple crée un `requestId`, le transmet dans l’en-tête et les corps d’erreur, et journalise des métadonnées structurées sans sérialiser directement l’exception. Le bloc d’atelier dupliqué, placé après la checklist finale, a été supprimé ; ses contrôles négatifs utiles ont été intégrés à la section de tests. |
| `lessons/tests-unitaires.html` | Révisé | L’exemple `it.each` couvre explicitement un prix négatif, une remise négative et une remise supérieure à 1, au lieu de n’illustrer qu’un seul cas invalide. |

**Contrôles exécutés sur la copie V6 :** 175 fichiers HTML lus par BeautifulSoup ; 1 028 références locales contrôlées, dont 7 fragments ; aucune cible ou ancre manquante. Le bloc d’atelier tardif a disparu de la page des erreurs d’API ; la liste blanche `Map` et les cas invalides de tests sont présents dans les pages modifiées. L’archive complète comporte 178 entrées, dont 175 HTML, et son test d’intégrité ZIP est réussi.

**Limites :** aucun navigateur, compilateur TypeScript, exécuteur Vitest, serveur API ou test HTTP externe n’a été lancé. L’audit de cinq pages ne vaut pas audit des 169 tutoriels. Les URL externes de ces pages n’ont pas été revalidées individuellement.

**Prochaine étape :** lot d’audit suivant, maximum cinq tutoriels, avec priorité à CI/CD/déploiement, autorisations côté serveur, sécurité des sessions/tokens et tests d’intégration selon les lacunes relevées.


### Exécution 8 — Audit pédagogique ciblé, lot 2

**Périmètre : cinq tutoriels maximum.** La copie de départ est l’archive V6 récupérée depuis la pièce jointe de conversation, vérifiée avant extraction (178 entrées, 175 pages HTML ; SHA-256 `fc4f9bb0dfe4034fdb3a5b0072f970e11ed1baa8443e81558086a20a18a96e1a`).

| Fichier | Décision d’audit | Correction réalisée |
|---|---|---|
| `lessons/ci-cd.html` | Révisé | Ajout d’un bloc sur la chaîne d’approvisionnement : épinglage d’actions, permissions minimales, pull requests de forks, risque des workflows privilégiés, environnements protégés, identifiants temporaires, scans de dépendances/secrets et provenance des artefacts. |
| `lessons/rollback-deploiement.html` | Révisé | Exercice transformé en runbook mesurable (seuils, décideur, digest d’artefact, compatibilité des données, délai de récupération, condition d’arrêt) ; suppression de l’atelier redondant placé après la navigation. |
| `lessons/autorisations-serveur.html` | Révisé | Correction de paragraphes imbriqués et d’un titre placé dans un paragraphe ; clarification du contexte d’identité fiable, du choix 403/404 et ajout d’une matrice de scénarios négatifs. |
| `lessons/securite-sessions-tokens.html` | Révisé | Ajout d’un flux de rotation atomique des refresh tokens, détection de rejeu et précisions sur la protection CSRF pour l’authentification par cookie. |
| `lessons/tests-integration.html` | Révisé | Ajout d’un exemple de nettoyage ciblé, des exigences d’isolation, des précautions en parallèle et d’un scénario de validation invalide sans effet persistant. |

**Contrôles exécutés :** les cinq fichiers modifiés passent le parseur strict `lxml` ; inventaire HTML : 175 pages ; références locales `href`/`src` et fragments contrôlées : aucune cible manquante. L’analyse stricte de l’ensemble du livrable révèle huit erreurs structurelles dans d’autres pages, consignées sans modification dans ce lot : `assistants-code.html`, `branches-conflits-git.html`, `cache-compromis.html`, `choix-techniques.html`, `dns-tls-proxy.html`, `processus-threads-memoire.html`, `reseaux-tcp-ip.html`, `systeme-exploitation-fichiers.html`.

**Limites :** aucun navigateur, compilateur TypeScript, exécuteur de tests, pipeline CI/CD, déploiement ou contrôle HTTP externe n’a été lancé. Les exemples ajoutés restent à adapter au framework/ORM et à exécuter dans un projet réel.

**Archive de sortie :** `Roadmap_Full_Stack_2026_V7.zip` — archive complète vérifiée, 178 entrées dont 175 fichiers HTML. V6 conservée comme point de restauration.

**Prochaine étape :** lot d’audit limité à cinq pages, priorisant les erreurs de structure HTML découvertes et les pages de sécurité/exploitation encore non vérifiées.


### Exécution 9 — réparation de structure HTML, lot 1 (11 octobre 2026)

**Base de travail :** `Roadmap_Full_Stack_2026_V7.zip`, récupérée depuis la pièce jointe de conversation et vérifiée avant extraction (178 entrées, 175 fichiers HTML ; SHA-256 `8b6d80422c6872f5ee6c2cf0a2fef74c71ae7f7ce1a7e575e66a4d3dfcf5d889`). La V7 est conservée comme point de restauration.

| Fichier | Correction structurelle |
|---|---|
| `lessons/assistants-code.html` | Fermeture des paragraphes avant les nouveaux paragraphes et éléments de bloc ; suppression des fermetures `p` surnuméraires. |
| `lessons/branches-conflits-git.html` | Paragraphes fermés avant les blocs de code et listes ; suppression des fermetures `p` surnuméraires. |
| `lessons/cache-compromis.html` | Réparation des paragraphes imbriqués et des blocs de code/listes inclus dans des paragraphes. |
| `lessons/choix-techniques.html` | Suppression d’une balise `</section>` isolée sans ouverture correspondante. |
| `lessons/dns-tls-proxy.html` | Réparation des paragraphes imbriqués et de la structure autour des blocs de commandes et listes. |

**Contrôles exécutés :** les cinq pages modifiées passent `lxml` avec `recover=False` et sans erreur de parseur. Analyse stricte des 175 pages : 172 sans erreur ; les trois erreurs restantes sont localisées dans `processus-threads-memoire.html`, `reseaux-tcp-ip.html` et `systeme-exploitation-fichiers.html`. Le contrôle des références locales `href`/`src` et fragments a compté 1 028 références, sans chemin ni fragment manquant. L’archive V8 conserve 178 entrées, dont 175 pages HTML, et passe `ZipFile.testzip()`.

**Limites :** aucun navigateur, test d’accessibilité automatisé, compilateur ou exécuteur de tests n’a été lancé ; aucune source externe n’a été vérifiée en HTTP. Les corrections de ce lot portent sur la structure HTML, pas sur une validation complète du contenu pédagogique.

**Prochaine étape :** corriger les trois pages HTML restantes, sans dépasser cinq pages dans le lot suivant.


### Exécution 10 — Réparation structurelle HTML, lot 2

**Fichiers corrigés :** `lessons/processus-threads-memoire.html`, `lessons/reseaux-tcp-ip.html` et `lessons/systeme-exploitation-fichiers.html`. Les paragraphes imbriqués ont été séparés ; les paragraphes ont été fermés avant les listes, titres et blocs de code concernés. Le contenu technique et les exemples n’ont pas été exécutés.

**Contrôles exécutés sur la copie V9 :** 175 pages HTML analysées avec `lxml` en mode strict, sans erreur de parseur ; 1 028 références locales `href`/`src` et 7 fragments contrôlés, aucune cible manquante ; archive ZIP intégrale, 178 entrées dont 175 HTML.

**Limites :** aucun navigateur, audit d’accessibilité complet, exécution d’exemple ou contrôle HTTP externe. La correction structurelle ne constitue pas une validation fonctionnelle.

**Prochaine étape :** reprendre l’audit pédagogique ciblé, maximum cinq tutoriels par exécution.


### Exécution 11 — Audit pédagogique ciblé, lot 3 (11 octobre 2026)

**Périmètre : cinq tutoriels, sans dépasser la limite par exécution.** Les cinq pages ont été relues sur la copie V9. Quatre lacunes concrètes ont été renforcées et la configuration CORS a été rendue plus explicite dans son exemple de pré-vérification.

| Fichier | Décision et modification |
|---|---|
| `lessons/securite-api-abus.html` | Ajout d’une matrice de tests couvrant accès anonyme, accès inter-comptes, corps trop grand, quota dépassé et répétitions avec clé d’idempotence. |
| `lessons/securite-dependances.html` | Précision : `npm audit --omit=dev` n’est pas un audit complet des outils et scripts de build ; ajout de la distinction entre risques runtime et chaîne de construction. |
| `lessons/gestion-secrets.html` | Ajout des commandes `git check-ignore -v .env` et `git ls-files --error-unmatch .env` et explication du fait que `.gitignore` ne retire pas les fichiers déjà suivis ; rappel de révocation si une vraie valeur a été commitée. |
| `lessons/csrf.html` | Clarification : pour une session cookie, privilégier le mécanisme CSRF du framework et utiliser Origin/Referer comme défense complémentaire, sauf politique alternative documentée ; tests GET sans effet et jeton absent. |
| `lessons/cors.html` | Exemple de pré-vérification `OPTIONS` qui contrôle explicitement origine, méthode et en-têtes demandés avant de répondre 204 ; refus 403 sinon et note sur `Vary`. |

**Contrôles exécutés sur la copie V10 :** 175/175 pages HTML passent `lxml` strict sans erreur ; 1 028 références locales `href`/`src` et 7 fragments contrôlés, aucune cible manquante ; assertions de contenu pour les cinq pages réussies ; exemple CORS extrait soumis à `node --check`, puis testé dans un harnais Node isolé (5 assertions passées : origine autorisée, pré-vérification autorisée, origine refusée, méthode refusée, en-tête refusé). Archive complète : 178 entrées dont 175 HTML, test d’intégrité ZIP réussi.

**Limites :** aucune commande npm, commande Git d’exercice, application Express, test CSRF/CORS dans un navigateur, audit de dépendances réel ni vérification HTTP des sources externes n’a été exécuté. Les extraits restent à tester et adapter au projet cible.

**Archive produite :** `Roadmap_Full_Stack_2026_V10.zip`. V9 conservée comme point de restauration.

**Prochaine étape :** audit pédagogique ciblé de cinq pages au maximum, en poursuivant sur validation des entrées, téléversements, en-têtes de sécurité, XSS et journalisation selon les lacunes observées. Aucun test navigateur, audit de dépendances réel, commande Git de l’exercice ou contrôle HTTP des sources externes n’a été exécuté.


## Campagne de correction — exécution 12 (V11)

**Périmètre :** audit pédagogique ciblé de cinq pages, sans dépasser la limite par exécution.

- [x] `validation-schema.html` — corrigé l’affichage HTML du générique TypeScript `z.infer<typeof CreateTaskSchema>` ; l’exemple de réponse invalide ne renvoie que des chemins de champs et codes d’erreur bornés, sans valeur reçue.
- [x] `upload-fichiers.html` — explicité le risque des formats actifs (SVG/HTML), la séparation d’origine et les tests de quarantaine/téléchargement.
- [x] `https-headers.html` — remplacé la commande HEAD seule par une inspection GET reproductible et ajouté une matrice couvrant redirections, API, erreurs, CSP et HSTS.
- [x] `xss.html` — ajouté une matrice de tests de non-régression pour texte brut, attributs, URL, HTML riche et sinks DOM.
- [x] `journalisation-incidents.html` — remplacé un atelier redondant par un mini-runbook de réponse à incident avec critères mesurables.
- [x] Analyse HTML stricte : 175/175 pages passent `lxml` sans erreur.
- [x] Contrôle local : 1 026 références `href`/`src` et 7 références de fragments ; aucune cible locale ou fragment manquant.
- [x] Vérification du rendu du générique TypeScript : `z.infer<typeof CreateTaskSchema>` est restitué comme texte dans le bloc de code, sans balise parasite.
- [x] Deux extraits JavaScript de `xss.html` passent `node --check` ; six assertions isolées de politique d’URL réussissent.
- [x] Exemple JSON de `journalisation-incidents.html` analysé sans erreur ; neuf assertions de présence/qualité de contenu réussies.
- [x] Archive complète V11 : 178 entrées dont 175 HTML ; inventaire identique à V10 ; intégrité ZIP vérifiée.

**Limites prévues :** aucun navigateur ni serveur applicatif n’est supposé disponible ; les exemples de Zod, upload et en-têtes ne seront pas présentés comme exécutés en production. Les sources externes ne sont pas réputées vérifiées en HTTP sans contrôle explicite.


**Résultats d’exécution V11 :** contrôles statiques effectués après les cinq corrections ; aucune page supprimée ni ajoutée. Le test Node couvre uniquement la logique d’autorisation de schéma d’URL reprise de l’exemple XSS et ne constitue pas un test navigateur.

**Non exécuté :** compilateur TypeScript, suite de tests Zod, serveur d’upload, tests de quarantaine réels, requêtes HTTP sur une application, navigateur, test CSP/HSTS en production, audit d’accessibilité complet et vérification HTTP des sources externes.


### Exécution 13 — Audit pédagogique ciblé, lot 5 (11 octobre 2026)

**Périmètre : cinq tutoriels, sans dépasser la limite par exécution.**

| Fichier | Correction appliquée |
|---|---|
| `lessons/rate-limiting.html` | Suppression d’un exemple HTTP 429 redondant ; clarification des formats de `Retry-After`, du backoff avec jitter, de l’idempotence des opérations réessayées et de la confiance à accorder à `X-Forwarded-For` uniquement derrière des proxies approuvés. |
| `lessons/migrations-sans-interruption.html` | Refonte du SQL de backfill pour traiter les lignes `display_name IS NULL` par lots bornés sans curseur susceptible de sauter des lignes ; ajout de `RETURNING`, du contrôle final et des précautions liées aux écritures concurrentes. |
| `lessons/sauvegardes-migrations-prod.html` | Exemple de sauvegarde/restauration PostgreSQL plus sûr : arrêt au premier échec, permissions `umask 077`, variables source/cible distinctes, vérification de l’archive et arrêt sur erreur de restauration ; précisions sur l’isolement réel de la cible. |
| `lessons/environnements-dev-test-prod.html` | Remplacement de `DATABASE_URL=...` par une consigne d’injection à l’exécution ; ajout d’un contrôle explicite de l’environnement avant opération destructive. |
| `lessons/accessibilite.html` | Exemple d’état invalide associant l’aide et l’erreur au champ via `aria-describedby` et `aria-invalid`, avec consignes de retour à l’état valide. |

**Contrôles exécutés :** 175/175 pages HTML passent `lxml` strict ; 1 028 références locales `href`/`src` et 7 fragments contrôlés, aucune cible manquante ; cinq assertions de contenu ciblées réussies ; fragment shell de restauration validé par `bash -n` (syntaxe seulement, aucune commande PostgreSQL exécutée) ; intégrité ZIP vérifiée, 178 entrées dont 175 HTML ; inventaire identique à V11.

**Limites :** aucun test PostgreSQL, exécution de migration, sauvegarde ou restauration réelle, navigateur, audit d’accessibilité complet, test HTTP ni contrôle des sources externes n’a été réalisé.

**Prochaine étape :** audit pédagogique ciblé, maximum cinq pages, sur `api-rest.html`, `api-pagination-filtrage.html`, `cache-http-cdn.html`, `metriques-alertes.html` et `tests-charge.html`, puis poursuite de la validation fonctionnelle.


### Exécution 14 — Audit pédagogique ciblé, lot 6 (11 octobre 2026)

**Périmètre : cinq tutoriels.**

| Fichier | Correction appliquée |
|---|---|
| `lessons/api-rest.html` | L’exemple Express illustre désormais validation de l’identifiant, authentification par middleware et autorisation au niveau de la ressource ; ajout de cas de tests 401/400/403 ou 404 selon le contrat. |
| `lessons/api-pagination-filtrage.html` | Ajout d’un exemple PostgreSQL de pagination par curseur fondé sur un ordre stable, avec paramètres SQL liés, identité d’accès côté serveur et hypothèses explicites sur les valeurs nulles. |
| `lessons/cache-http-cdn.html` | Exemple `Vary` pour les seules dimensions de représentation pertinentes ; distinction explicite entre variation de cache et autorisation ; politique `private, no-store` pour l’exemple personnalisé. |
| `lessons/metriques-alertes.html` | Expression PromQL agrégée avec protection contre la division par zéro ; nécessité d’une alerte distincte en cas d’absence de trafic ; adaptation aux labels réellement exposés par l’application. |
| `lessons/tests-charge.html` | Exemple k6 vérifiant le statut HTTP, le type de contenu JSON et la forme du corps (`data` tableau), avec note sur l’adaptation au contrat réel. |

**Contrôles exécutés :** 175/175 pages HTML analysées sans erreur par `lxml` ; 1 028 références locales `href`/`src` et 7 fragments contrôlés, aucune cible manquante ; extraits JavaScript Express et k6 extraits puis validés par `node --check` ; archive ZIP vérifiée, 178 entrées dont 175 pages HTML, inventaire conservé.

**Non exécuté :** `promtool`, k6, serveur API, requêtes PostgreSQL, test de charge, navigateur, audit d’accessibilité complet et vérification HTTP des sources externes. Les contrôles JavaScript ne prouvent pas le comportement de l’application.

**Prochaine étape :** audit ciblé de `api-evolutives.html`, `graphql.html`, `recherche-moteurs.html`, `systemes-distribues.html` et `architecture-evenementielle.html`, cinq pages maximum, puis poursuite de la validation fonctionnelle.


### Exécution 15 — Audit pédagogique ciblé, lot 7 (11 octobre 2026)

- **Base utilisée :** archive V13 récupérée par son `file_id` de conversation, matérialisée, vérifiée avant extraction et conservée comme point de restauration.
- **Pages relues (5 maximum) :** `api-evolutives.html`, `graphql.html`, `recherche-moteurs.html`, `systemes-distribues.html` et `architecture-evenementielle.html`.
- **Corrections :** définition des deux directions de compatibilité client/serveur et matrice d’évolution d’API ; schéma et requête GraphQL de pagination par curseur avec `pageInfo`, tri stable et autorisation par page ; mesures précision@k, rappel@k et nDCG@k pour évaluer le classement ; budget temporel chiffré et décisions de retry par classe d’erreur ; déduplication SQL via `RETURNING`, accusé de réception après commit et schéma outbox avec limite de livraison explicitée.
- **Documentation synchronisée :** README et plan de correction.
- **Contrôles réellement exécutés :** parseur `lxml` sur 175 pages sans erreur ; 1 028 références locales `href`/`src` et 7 références de fragments contrôlées, 0 cible manquante ; 6 assertions ciblées réussies ; inventaire identique à V13, 178 entrées dont 175 HTML ; intégrité ZIP vérifiée.
- **Limites :** aucune source externe consultée en HTTP ; aucun serveur GraphQL, moteur de recherche, courtier, PostgreSQL ou navigateur exécuté. Les exemples SQL/GraphQL restent des exemples documentaires non exécutés.
- **Archive produite :** `Roadmap_Full_Stack_2026_V14.zip`.
- **Prochaine étape proposée :** audit ciblé de cinq pages sur timeouts/retries/annulation, idempotence API, webhooks, tâches asynchrones et concurrence des mises à jour.


### Exécution 16 — Audit pédagogique ciblé, lot 8 (11 octobre 2026)

- **Base utilisée :** archive V14 récupérée depuis son `file_id` réel de conversation, matérialisée puis vérifiée avant extraction ; V14 conservée comme point de restauration.
- **Pages relues (5 maximum) :** `timeouts-retries-annulation.html`, `idempotence-api.html`, `webhooks.html`, `taches-asynchrones.html` et `concurrence-mises-a-jour.html`.
- **Corrections :**
  - `timeouts-retries-annulation.html` : combinaison du signal d’annulation appelant et d’un timeout sur les runtimes modernes ; distinction de l’expiration du délai et de l’annulation volontaire ; politique indicative des statuts réessayables et convention du nombre de tentatives.
  - `idempotence-api.html` : schéma illustratif de registre avec unicité par appelant/opération/clé, empreinte de requête, état, résultat et expiration ; séquence transactionnelle pour les effets locaux et limites des effets externes.
  - `webhooks.html` : exemple SQL schématique où inbox et outbox sont écrites dans la même transaction ; la réponse positive suit le commit durable et le dispatcher/worker tolère les doublons.
  - `taches-asynchrones.html` : identifiant de job stable dérivé de l’identité de l’appelant et de la clé d’idempotence ; limites de la déduplication propre à une file ; autorisation requise sur l’endpoint de statut.
  - `concurrence-mises-a-jour.html` : `RETURNING` pour constater l’écriture conditionnelle ; clarification de `If-Match`, du validateur fort et des réponses de précondition.
- **Documentation synchronisée :** README et suivi de progression mis à jour.
- **Contrôles réellement exécutés :** analyse stricte `lxml` sur 175 pages, 0 erreur ; 1 902 références `href`/`src` parcourues (1 028 locales et 874 externes) et 7 références de fragments vérifiées, aucune cible locale ou fragment manquant ; 12 assertions ciblées réussies ; inventaire de l’archive source vérifié (178 entrées, 175 HTML).
- **Limites :** aucun test navigateur, PostgreSQL, courtier, file de messages, compilateur TypeScript, test d’intégration ou contrôle HTTP externe exécuté. Les schémas SQL et les pseudo-API de file sont documentaires et doivent être adaptés à l’implémentation choisie.
- **Archive produite :** `Roadmap_Full_Stack_2026_V15.zip`.
- **Prochaine étape :** reprendre l’audit pédagogique sur cinq pages maximum ; après les lots prioritaires, commencer la validation fonctionnelle de l’index, de la recherche, de la navigation, du responsive et de l’accessibilité.


### Exécution 17 — Audit pédagogique ciblé, lot 9 (11 octobre 2026)

- **Base utilisée :** archive V15 récupérée depuis le `file_id` réel de la pièce jointe de conversation, matérialisée et vérifiée avant extraction. V15 conservée comme point de restauration.
- **Pages relues (5 maximum) :** `sessions-jwt.html`, `oauth-oidc.html`, `isolation-transactions-verrous.html`, `transactions-metier.html` et `migrations.html`.
- **Corrections réalisées :**
  - `sessions-jwt.html` : exemple de cookie `__Host-` cohérent avec ses contraintes, rappel sur CSRF et délais côté serveur, sélection des clés JWT depuis une source de confiance et matrice de tests pour fixation de session, rejeu de refresh token, audience et CSRF.
  - `oauth-oidc.html` : consommation unique de `state`, réutilisation exacte de la redirect URI à l’échange, vérification conditionnelle de `azp`, tableau de tests négatifs du callback et interdiction de journaliser les codes/jetons/vérificateurs.
  - `isolation-transactions-verrous.html` : exemple de verrouillage avec `RETURNING` et contrôle obligatoire du nombre de lignes ; exemple de débit conditionnel ; rappel que toute reprise redémarre l’unité transactionnelle complète.
  - `transactions-metier.html` : transfert illustratif exprimé en unités monétaires mineures entières, verrouillage des comptes dans un ordre stable, contrôle de `rowCount` après chaque écriture, rollback en cas d’échec et payload outbox JSONB valide.
  - `migrations.html` : exemple PostgreSQL de contrainte ajoutée `NOT VALID` puis validée après backfill ; avertissements sur les verrous, les migrations concurrentes et l’usage de `IF NOT EXISTS` qui peut masquer une dérive.
- **Documentation synchronisée :** README, plan de correction et suivi.
- **Contrôles réellement exécutés :** 175/175 pages HTML analysées sans erreur par `lxml` ; 1 902 références `href`/`src` contrôlées (1 028 locales, 874 externes) ; 7 références de fragments contrôlées, aucune cible manquante ; 25 assertions ciblées réussies ; les 5 pages ont chacune au moins 5 liens HTTPS, des objectifs, un exercice et des critères de réussite ; archive intègre avec 178 entrées dont 175 HTML, inventaire identique à V15.
- **Limites :** aucun test navigateur, fournisseur OIDC, serveur applicatif, PostgreSQL, outil de migration, courtier ou contrôle HTTP externe exécuté. Les exemples SQL restent documentaires ; la logique applicative décrite par commentaires doit être implémentée et testée.
- **Archive produite :** `Roadmap_Full_Stack_2026_V16.zip`.
- **Publication bibliothèque :** tentative `files__manage_library` échouée avec `container_session_unavailable` pour les quatre fichiers ; ne pas réutiliser `container_path` tant que la session est indisponible. À la prochaine exécution, récupérer les `file_id` réels des pièces jointes V16 et utiliser `source_file_ref`.
- **Prochaine étape :** publier V16, le plan et le suivi dans la bibliothèque via les `file_id` des pièces jointes, puis auditer au maximum cinq pages encore non couvertes par la campagne : `rbac-abac-controle-acces.html`, `rotation-secrets-chiffrement.html`, `migrations-livraison.html`, `limites-securite-ia.html` et `verification-code-ia.html`. Ensuite, préparer la validation fonctionnelle de l’index, de la recherche, de la navigation, du responsive et de l’accessibilité.



### Exécution 18 — Audit pédagogique ciblé, lot 10 (11 octobre 2026)

- **Base utilisée :** archive V16 récupérée depuis le `file_id` réel de la pièce jointe de conversation, matérialisée et vérifiée avant extraction. L’archive V16 est conservée comme point de restauration.
- **Pages relues (5 maximum) :** `rbac-abac-controle-acces.html`, `rotation-secrets-chiffrement.html`, `migrations-livraison.html`, `limites-securite-ia.html` et `verification-code-ia.html`.
- **Corrections réalisées :**
  - `rbac-abac-controle-acces.html` : refus par défaut si l’acteur ou la ressource manque, contrôles explicites de tenant/organisation, garde-fous contre les propriétés absentes, matrice de tests autorisés/refusés et rappel que les attributs proviennent du contexte serveur.
  - `rotation-secrets-chiffrement.html` : runbook de rotation d’une clé de signature, identifiants de clés sans valeur secrète, preuves attendues, seuils d’arrêt, période de chevauchement et distinction entre clé de signature et clé de chiffrement de données.
  - `migrations-livraison.html` : exemple PostgreSQL illustratif de backfill par lots, précontrôle des valeurs non convertibles, reprise par curseur et conditions d’arrêt/validation.
  - `limites-securite-ia.html` : contrat d’outils illustratif, séparation lecture/écriture, approbation liée à un changement précis et matrice de scénarios d’abus.
  - `verification-code-ia.html` : calcul de remise basé sur centimes entiers et points de base, arrondi explicite via `BigInt`, exigences ES2020 et exemples de tests de frontière indépendants.
- **Documentation synchronisée :** README, plan de correction et suivi de progression.
- **Contrôles réellement exécutés :** 175/175 pages sans erreur `lxml` ; 1 902 références `href`/`src` (1 026 locales, 874 externes) et 7 fragments, aucune cible manquante ; 21 assertions ciblées réussies ; contrat IA JSON valide ; Node a exécuté 12 assertions RBAC et 10 assertions de calcul de remise ; index : 174/174 pages référencées, 0 cible manquante ; recherche testée avec 10 assertions Node ; 175 pages sans titre/lang/viewport/H1 manquant, H1 multiple, ID dupliqué, lien vide ou image sans `alt` ; CSS responsive et reduced-motion présents ; ZIP intègre, 178 entrées dont 175 HTML, inventaire identique à V16.
- **Limites :** aucun SGBD, fournisseur de secrets, service d’identité, agent IA, navigateur ou service HTTP externe n’a été exécuté ou interrogé. Les exemples SQL et de configuration sont documentaires.
- **Archive produite :** `Roadmap_Full_Stack_2026_V17.zip`.
- **Publication bibliothèque V16 :** archive, plan canonique, plan versionné et suivi V16 publiés via `source_file_ref`. Le plan canonique a été remplacé ; un doublon `plan_corrections_roadmap_fullstack_2026(1).md` reste présent car sa suppression a échoué avec une erreur 401.
- **Publication V17 :** à effectuer depuis les `file_id` réels des pièces jointes V17 avec `source_file_ref` lors de la prochaine exécution ; ne pas dépendre de `container_path`.
- **Validation fonctionnelle statique, première passe :** 174/174 pages référencées dans l’index ; recherche testée avec 10 assertions Node ; breakpoints responsive 900px/720px et `prefers-reduced-motion` présents ; 175 pages sans anomalies structurelles de base détectées. Aucun test navigateur réel ni audit d’accessibilité complet.


### Exécution 19 — Audit pédagogique ciblé, lot 11 (11 octobre 2026)

- **Base utilisée :** archive V17 issue de la pièce jointe de conversation `file_00000000c0f081f7b175bb3c8b2b9f97`, matérialisée avec son identifiant réel. Le ZIP matérialisé passe `testzip()` et contient 178 entrées, dont 175 fichiers HTML.
- **Contrôle de provenance :** les octets de la pièce jointe V17 mesurent 894 719 octets et leur SHA-256 calculé est `b3b42963e0080084f1fbea78970408242cb483268825da95ba87e984c5a9c66b`. Les documents V17 fournis auparavant indiquent 894 732 octets et `712902a3f6d24e0894524cae1cbfab70b3526658a424fe111e20b13904792bd3`. Ces valeurs ne correspondent pas à la pièce jointe matérialisée ; V18 est donc basée sur les octets réellement récupérés, sans supposer que l’empreinte déclarée antérieurement est correcte.
- **Pages relues (5 maximum) :** `react-hooks.html`, `outils-frontend.html`, `index-performances.html`, `typescript-react.html` et `gestion-etat.html`.
- **Corrections réalisées :**
  - `react-hooks.html` : transmission de `resourceId` à `loadData`, traitement explicite d’`AbortError` et note sur l’état d’erreur attendu dans une interface réelle.
  - `outils-frontend.html` : ajout de `"test": "vitest run"` à l’exemple `package.json` et précision que Vitest doit être installé/configuré ; liste des commandes CI cohérente avec le texte.
  - `index-performances.html` : harmonisation de `client_id` et `cree_le` entre l’index composé, l’explication et la requête `EXPLAIN`.
  - `typescript-react.html` : échappement HTML des génériques `ChangeEvent<HTMLInputElement>`, `FormEvent<HTMLFormElement>` et `LoadState<T>` pour éviter que le navigateur les interprète comme des balises.
  - `gestion-etat.html` : déclaration explicite de `LoadStatus` et typage de `useState<LoadStatus>`.
- **Documentation synchronisée :** README et suivi mis à jour.
- **Contrôles ciblés exécutés :** 12/12 assertions ciblées réussies : transmission de `resourceId` et gestion d’`AbortError` ; syntaxe du fragment JavaScript vérifiée par `node --check` ; bloc `package.json` analysé comme JSON valide et commande de test/CI présente ; colonnes SQL cohérentes ; génériques TypeScript visibles après parsing HTML sans balises parasites ; union de statut React explicitement typée ; objectifs, exercice, critères de réussite et sources présents sur les cinq pages. Le fragment JavaScript React Hooks passe séparément `node --check`.
- **Contrôles globaux exécutés :** 175/175 pages HTML sans erreur `lxml` ; 1 902 références `href`/`src` (1 028 locales, 874 HTTP/HTTPS externes) ; 7 références de fragments, aucune cible locale ou fragment manquant ; aucun ID dupliqué, titre/lang/viewport/H1 manquant, lien vide ou image sans `alt`. L’index et les autres fichiers conservent leur inventaire.
- **Archive de référence préservée :** pièce jointe V17 conservée dans la conversation ; l’archive de travail V18 est construite à partir de ses octets matérialisés. La publication en bibliothèque est différée après la validation fonctionnelle, conformément à l’ordre de priorité du plan.

- **Archive V18 :** créée après mise à jour du README et du suivi ; test d’intégrité ZIP réussi, 178 entrées dont 175 HTML, inventaire identique à V17. V17 reste le point de restauration dans les fichiers de la conversation ; la publication V18 en bibliothèque est différée après la validation fonctionnelle.


### Exécution 20 — Audit pédagogique ciblé, lot 12 (11 octobre 2026)

**Base utilisée :** archive V18 matérialisée depuis la pièce jointe de conversation `file_0000000051fc81f7aa7c5c1a8553221a`. SHA-256 calculé avant extraction : `8e7e0f263f4d348c7ef7b76fdebfb29b801ced3e39d9f5170a7488e824e8df7a`. Le ZIP passe `testzip()` et contient 178 entrées, dont 175 pages HTML. La copie de travail a été extraite séparément ; l’archive V18 n’a pas été modifiée.

**Pages relues (5 maximum) :** `performance-frontend.html`, `jointures-agregations.html`, `react-composants.html`, `tailwind-composants.html` et `normalisation.html`.

**Corrections réalisées :**
- `performance-frontend.html` : ajout des seuils de référence LCP ≤ 2,5 s, INP ≤ 200 ms et CLS ≤ 0,1 au 75e percentile des données de terrain ; distinction explicite entre mesure de laboratoire et données de terrain, avec réserve en cas d’échantillon insuffisant ; ajout d’une validation des acquis.
- `jointures-agregations.html` : exemple PostgreSQL concret montrant `WHERE`, `GROUP BY`, `HAVING`, tri et paramètre lié `$1`, avec explication du niveau auquel chaque filtre s’applique.
- `react-composants.html` : exemple TypeScript de contrat de props et de rendu de liste avec une clé stable fondée sur l’identifiant métier ; précision que `key` est une métadonnée de réconciliation et n’est pas transmise comme prop.
- `tailwind-composants.html` : `type="button"` explicite, focus visible avec décalage et couleur, exemple de bouton natif désactivé ; distinction entre le comportement natif de `disabled` et la simple annonce de `aria-disabled`.
- `normalisation.html` : exemple de décomposition d’une table de lignes de commande à clé composée, explication d’une dépendance partielle et d’une dépendance transitive ; limite métier explicitée si un produit peut apparaître plusieurs fois dans une commande.

**Documentation synchronisée :** README et suivi de progression mis à jour dans la copie du projet. Le plan de correction externe est mis à jour séparément.

**Contrôles réellement exécutés :**
- ZIP source V18 : intégrité réussie, 178 entrées dont 175 HTML.
- Analyse `lxml` : 175/175 pages sans erreur.
- Références `href`/`src` : 1 902 parcourues, dont 1 028 locales et 874 externes ; aucune cible locale manquante.
- Fragments HTML : aucune cible manquante.
- Structure globale : aucun titre, `lang`, viewport ou `h1` manquant ; aucun `h1` multiple, ID dupliqué, lien vide ou image sans `alt`.
- Index : 174/174 liens de compétences pointent vers des fichiers existants.
- Recherche de l’index : 10 assertions Node réussies avec un DOM simulé (recherche trouvée, casse, aucun résultat, masquage des chapitres, remise à zéro). Ce contrôle n’est pas un test navigateur.
- Contrôles ciblés : les cinq pages contiennent objectifs, exercice, critères de réussite, cinq liens HTTPS visibles et cinq URL dans le commentaire de sources ; assertions spécifiques aux ajouts réussies.

**Limites :** aucun navigateur réel, PostgreSQL, compilateur TypeScript/React, build Tailwind, audit d’accessibilité complet ou contrôle HTTP des sources externes n’a été exécuté. Les exemples SQL/TSX/CSS restent à valider dans leurs environnements réels.

**Archive produite :** `Roadmap_Full_Stack_2026_V19.zip`, à vérifier après mise à jour finale des documents. V18 reste conservée comme point de restauration.

**Prochaine étape :** poursuivre l’audit ciblé dans l’ordre de l’index sur `architecture-ordinateur.html`, `terminal-shell-bash.html`, `javascript-typescript.html`, `structures-donnees-algorithmes.html` et `complexite-algorithmique.html` (cinq pages maximum). La validation fonctionnelle réelle (navigateurs, responsive visuel, clavier/focus, contrastes, exécution d’exemples et contrôle HTTP ciblé) reste incomplète.

### Exécution 21 — Audit pédagogique ciblé, lot 13 (11 octobre 2026)

- **Base utilisée :** archive V19 matérialisée depuis la pièce jointe de conversation `file_00000000ff9081f4a33f1ffd87d33dae`. Taille : 900 154 octets ; SHA-256 calculé : `480bb84098ba03955405bcf7ad86bb867754ef43f910316d088f09f85d302794`. Le ZIP passe le contrôle d’intégrité et contient 178 entrées, dont 175 pages HTML. La copie de travail est séparée ; V19 reste intacte.
- **Plan de référence :** plan canonique de conversation `file_000000000d5481f48bb1f041ab95be5d`, matérialisé et lu. Le plan de bibliothèque `/Devoirs/plan_corrections_roadmap_fullstack_2026.md` a également été consulté ; il est plus ancien que le plan de la conversation.
- **Pages relues (5 maximum) :** `architecture-ordinateur.html`, `terminal-shell-bash.html`, `javascript-typescript.html`, `structures-donnees-algorithmes.html` et `complexite-algorithmique.html`.
- **Corrections réalisées :**
  - `architecture-ordinateur.html` : alignement des cinq références du commentaire initial sur les cinq liens visibles ; clarification de `free -h` (`available`), `df -h` et `du -sh` ; mini-lab reproductible avec serveur HTTP lié à `127.0.0.1`, inspection du socket et mesure `curl` des temps de connexion/premier octet/total.
  - `terminal-shell-bash.html` : ajout d’une solution complète à l’exercice de rapport ; parcours NUL-délimité, contrôle du code de sortie de `find`, validation des arguments/permissions et refus de remplacer un rapport existant.
  - `javascript-typescript.html` : correction d’une garde de type trop permissive qui déclarait `Utilisateur` après avoir seulement vérifié que `roles` était un tableau ; validation du type de l’email optionnel et de chaque rôle autorisé ; ajout d’une matrice de cinq cas de test.
  - `structures-donnees-algorithmes.html` : audit effectué ; exemples Map/Set, gestion des identifiants dupliqués et invariant du parcours BFS jugés suffisamment explicités, aucune modification superflue.
  - `complexite-algorithmique.html` : audit effectué ; distinction temps/mémoire, hypothèses sur `Set`, borne asymptotique et mesure empirique jugées suffisamment contextualisées, aucune modification superflue.
- **Documentation synchronisée :** README, plan de correction et suivi de progression mis à jour. L’inventaire des pages reste inchangé.
- **Tests réellement exécutés :**
  - Bash : `bash -n` réussi ; quatre tests fonctionnels réussis — noms contenant espaces/retour à la ligne comptés correctement, refus d’un rapport existant, répertoire absent refusé, nombre d’arguments invalide refusé.
  - TypeScript : `tsc --strict --target ES2020 --module commonjs` réussi sur les extraits de type/garde/test ; les cinq cas de test se sont exécutés sous Node sans échec.
  - Mini-lab HTTP : serveur Python local lié à `127.0.0.1:8000`, socket en écoute confirmé avec `ss`, réponse `curl` HTTP 200 et contenu attendu vérifié. Le serveur de test a été arrêté et son répertoire temporaire supprimé.
  - HTML global : 175/175 pages analysées sans erreur par `lxml` avec encodage UTF-8 ; 1 028 références locales et 874 externes recensées ; aucune cible locale ni aucun fragment manquant ; aucun défaut structurel de base détecté (titre, langue, viewport, H1 unique, IDs, liens vides, `alt`).
  - Index et sources : 174/174 liens de compétences/projets ont une cible existante ; les cinq pages ont cinq URL en commentaire initial et cinq liens visibles identiques.
  - Algorithmes : trois assertions Node réussies pour le BFS (cycle, sommet isolé, sommet absent) ; huit assertions Node réussies pour somme et détection de doublons simple/Set.
  - Chromium headless via Playwright : index et cinq pages rendus avec la CSS aux largeurs 375, 768 et 1 365 px ; aucun débordement horizontal ; recherche positive, sans résultat et remise à zéro réussies ; le champ de recherche reçoit un focus clavier avec contour visible de 3 px ; aucune erreur JavaScript dans ces rendus.
- **Limites :** la navigation directe par `page.goto` vers une URL locale HTTP ou `file://` a été bloquée par la politique de l’environnement (`net::ERR_BLOCKED_BY_ADMINISTRATOR`). Les tests Chromium ont donc utilisé `set_content` avec la feuille CSS injectée : ils couvrent DOM, recherche, focus et largeurs, mais pas la navigation réelle entre URL. L’audit d’accessibilité complet et le contrôle HTTP externe des sources documentaires restent à exécuter.
- **Archive produite :** `Roadmap_Full_Stack_2026_V20.zip` ; intégrité ZIP vérifiée, 178 entrées dont 175 HTML, inventaire identique à V19. V19 conservée comme point de restauration.
- **Prochaine étape :** poursuivre la validation fonctionnelle (navigation réelle si l’environnement le permet, clavier/focus, contraste et accessibilité), puis publier l’archive et les documents à jour dans la bibliothèque. Reprendre ensuite l’audit pédagogique sur `javascript-avance.html`, `http.html`, `git.html`, `navigateur-dom-devtools.html` et `html-semantique.html`, cinq pages maximum.



### Exécution 22 — validation fonctionnelle ciblée, lot 1 (11 octobre 2026)

- **Base utilisée :** archive V20 matérialisée depuis la pièce jointe de conversation `file_000000006b308210ac9844e377a76c81`. Taille 913 577 octets ; SHA-256 `3f614ae7c80424637ec84f50d5472b537ecb52750aec711ab816e3e49b71096f`. Le ZIP passe `testzip()` et contient 178 entrées dont 175 HTML. Copie de travail séparée ; V20 reste intacte.
- **Correction réalisée :** dans `style.css`, remplacer l’anneau `:focus-visible` `#a5b4fc` par `#5146e5` et aligner la bordure de focus de `.search` sur cette couleur. L’ancienne couleur avait un contraste de 1,99:1 sur blanc et 1,84:1 sur le fond de page ; la nouvelle atteint 6,25:1 sur blanc et 5,78:1 sur le fond de page.
- **Desserte HTTP locale :** serveur `http.server` temporaire lié à `127.0.0.1` ; index servi en HTTP 200 ; les 175 pages HTML ont été récupérées ; 1 026 références locales `href`/`src` ont répondu HTTP 200 ; aucune requête locale en échec. Le serveur a été arrêté après le contrôle.
- **Audit statique d’accessibilité/structure :** 175 pages contrôlées. Aucun titre, `lang`, viewport ou `h1` manquant/multiple ; aucun lien/bouton sans nom accessible ; aucun contrôle de formulaire sans libellé accessible ; aucune image sans `alt` ; aucun ID dupliqué ; aucun saut de niveau de titre détecté ; aucun tableau sans `th` ou `caption` ; aucun lien `target=_blank` sans `rel=noopener`. Observations non bloquantes : `index.html` n’a pas de landmark `<nav>` et 15 pages de tutoriels n’ont pas de `<footer>` ; aucune modification n’a été faite sur ces pages, et l’absence de footer n’est pas en soi un échec WCAG.
- **Contraste :** 14 paires de couleurs textuelles sélectionnées dans la palette ont été calculées ; minimum mesuré 4,60:1 pour le texte secondaire sur le fond de page, les autres paires testées sont au-dessus. Anneau de focus corrigé : 6,25:1 sur blanc et 5,78:1 sur `#f4f6fb`. Ce contrôle n’est pas une analyse exhaustive de chaque combinaison CSS effectivement rendue.
- **Responsive et mouvement :** règles CSS présentes pour 900 px et 720 px, `:focus-visible`, `prefers-reduced-motion`, impression et `overflow-x:auto` des blocs de code. Aucun rendu navigateur n’a été effectué dans cette exécution.
- **Blocage navigateur :** deux tentatives de démarrage de `/usr/bin/chromium --headless` ont expiré après 12 et 15 secondes sans produire de DOM ; le module Playwright n’est pas installé dans l’environnement courant. La navigation réelle entre URL, l’interaction clavier dans le navigateur et le rendu visuel restent donc non testés.
- **Tests non exécutés :** liens HTTP externes, audit d’accessibilité complet avec outil dédié, exemples SQL/PostgreSQL, React/TypeScript applicatif et build Tailwind.
- **Documentation :** README, suivi et plan actualisés ; V20 préservée comme point de restauration.
- **Archive produite :** `Roadmap_Full_Stack_2026_V21.zip`, ZIP intègre après emballage final, 178 entrées dont 175 HTML, inventaire identique à V20 ; V20 conservée comme point de restauration.
- **Prochaine étape :** si un environnement navigateur exécutable est disponible, tester la navigation directe, la recherche, le focus clavier et le responsive réel. Sinon, publier V21 avec cette limite clairement signalée et reprendre l’audit pédagogique sur `javascript-avance.html`, `http.html`, `git.html`, `navigateur-dom-devtools.html` et `html-semantique.html` (cinq pages maximum).


### Exécution 23 — audit pédagogique ciblé, lot 14 (11 octobre 2026)

- **Base utilisée :** archive V21 de conversation `file_00000000e7a081f6be736aa8ace3140a`, 905 731 octets, SHA-256 `645863829d4a46ef09a861c17e49fe6ae243cc468d33625c2f5f031405bce082`. L’archive V21 de la bibliothèque a été matérialisée et possède la même empreinte ; `testzip()` réussit et l’inventaire contient 178 entrées dont 175 pages HTML. V21 reste intacte comme point de restauration.
- **Plan et suivi lus :** plan de correction V21 et suivi de progression V21 de la conversation, ainsi que leurs copies de bibliothèque. Le plan canonique V21 et le plan versionné V21 ont été synchronisés dans `/Devoirs/` via `source_file_ref` avant le lot.
- **Pages relues (5 maximum) :** `javascript-avance.html`, `http.html`, `git.html`, `navigateur-dom-devtools.html`, `html-semantique.html`.
- **Corrections réalisées :** `javascript-avance.html` sépare les variantes séquentielle et concurrente, sans lancer les deux séquences dans le même exemple ; `http.html` illustre la revalidation `ETag`/`If-None-Match` avec réponse `304` et distingue `private, no-cache` de `no-store` ; `git.html` distingue les commandes de continuation d’un conflit (`git merge --continue` et `git rebase --continue`) ainsi que les commandes d’abandon correspondantes ; `html-semantique.html` montre un champ invalide associé à son message d’erreur avec `aria-describedby` et `aria-invalid`. `navigateur-dom-devtools.html` a été audité sans modification, les procédures de diagnostic et les précautions relatives aux données sensibles étant déjà explicites.
- **Documentation synchronisée :** README et suivi de progression mis à jour dans la copie du projet ; plan de correction externe mis à jour séparément.
- **Contrôles exécutés :** analyse stricte UTF-8 avec `lxml` sur 175/175 pages, zéro erreur de parsing ; 1 028 références locales et 874 externes recensées ; 7 fragments vérifiés ; zéro cible locale ou fragment manquant ; zéro ID dupliqué ou anomalie structurelle de base dans les contrôles ciblés ; 174/174 liens de tutoriels de l’index résolus ; cinq pages sur cinq ont cinq URL dans le commentaire de sources et cinq liens visibles identiques. Le test Node du choix séquentiel/concurrent a réussi 5 assertions. Un dépôt Git temporaire a confirmé la poursuite après conflit avec `git merge --continue` et `git rebase --continue`. Les assertions de contenu sur cache HTTP, continuation Git et association de champ/erreur HTML ont réussi.
- **Comparaison :** six fichiers modifiés dans la copie par rapport à V21 : les quatre pages ci-dessus, `README.md` et `PROGRESSION_TUTORIELS.md`. `navigateur-dom-devtools.html` n’a pas été modifié. Aucun fichier ajouté ou supprimé ; inventaire attendu de 178 entrées dont 175 HTML.
- **Limites :** aucun navigateur réel ni lecteur d’écran ; la navigation directe reste bloquée par l’environnement (`net::ERR_BLOCKED_BY_ADMINISTRATOR`) et Playwright n’est pas disponible. Aucun contrôle HTTP externe exhaustif des sources documentaires n’est revendiqué. Les tests Git ont été exécutés dans des dépôts temporaires ; les exemples HTTP/cache et HTML sont validés statiquement, pas sur un serveur de production. La publication de V22 dans la bibliothèque a échoué pour les cinq fichiers avec `container_session_unavailable` ; ne pas réessayer avec `container_path`, utiliser les `file_id` réels des pièces jointes de conversation et `source_file_ref` lors de la prochaine exécution.
- **Prochaine étape :** audit pédagogique limité à cinq pages dans l’ordre de l’index : `accessibilite.html`, `css-fondamentaux.html`, `flexbox-grid.html`, `responsive-design.html`, `javascript-dom.html`. Continuer en parallèle la validation statique fonctionnelle et reprendre la navigation réelle dès qu’un navigateur exécutable est disponible.

### Exécution 24 — audit pédagogique ciblé, lot 15 (11 octobre 2026)

- **Base utilisée :** archive V22 de la conversation `file_0000000045f0820d9425c15b6a60b69f`, 907 864 octets, SHA-256 `5a205986069fc596475ce49949b94e5d8c596a3cf09977cb81409312c7e72735`. L’archive a été vérifiée avant extraction ; elle contient 178 entrées dont 175 pages HTML. Une copie de travail distincte a été créée.
- **Conservation V22 :** archive, plan versionné, suivi et README V22 ont ensuite été publiés dans `/Devoirs/` via `source_file_ref`, après l’échec de publication consigné au jalon V22.
- **Pages relues (5 maximum) :** `accessibilite.html`, `css-fondamentaux.html`, `flexbox-grid.html`, `responsive-design.html`, `javascript-dom.html`.
- **Corrections réalisées :** la page d’accessibilité précise que `aria-expanded` appartient au bouton de commande et que `aria-controls` référence la cible ; CSS fondamentaux explicite la proximité de portée dans la cascade et donne les tuples de spécificité des trois sélecteurs d’exemple ; Flexbox/Grid distingue `auto-fit` de `auto-fill` ; Responsive design limite aussi le nombre d’itérations dans la préférence de réduction du mouvement et explique le compromis ; JavaScript DOM remplace l’exemple incomplet qui plaçait `aria-expanded` sur le panneau par un bouton natif relié via `aria-controls`, synchronise `aria-expanded` et `hidden`, puis ajoute une région `role="status"` pour annoncer l’ajout d’une tâche sans déplacer le focus.
- **Contrôles HTML et liens :** 175 pages analysées ; aucune erreur ni cible locale manquante ; 1 026 références de chemin locales et 7 références de fragment vérifiées ; 874 références externes recensées ; 174/174 liens de compétences/projets de l’index résolus. Les cinq pages ont chacune cinq URL dans le commentaire de sources et cinq liens visibles.
- **Tests de code ciblés :** quatre extraits JavaScript de `javascript-dom.html` passent `node --check` ; le panneau de divulgation passe 4 assertions d’état ; le formulaire et sa région de statut passent 8 assertions. La feuille CSS est analysée par `tinycss2` (74 règles) et quatre extraits CSS responsive sont analysés sans erreur.
- **Contrôle HTTP local :** 1 026 références de chemin demandées au serveur temporaire, 1 026 réponses HTTP 200, aucune requête en échec ; serveur arrêté à la fin du test.
- **Rendu Chromium via Playwright :** index et cinq pages rendus avec CSS injectée via `set_content` à 375, 768 et 1 365 px ; 18 rendus sans débordement horizontal ; recherche positive (2 cartes PostgreSQL visibles), absence de résultat (0 carte) et remise à zéro (174 cartes) réussies ; le premier focus clavier observé est visible avec un contour de 3 px ; aucune erreur JavaScript. La navigation directe par `page.goto` reste bloquée par `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Le navigateur Playwright embarqué n’est pas installé ; le binaire système `/usr/bin/chromium` a été utilisé pour les rendus `set_content`.
- **Archive V23 :** créée à partir de la copie complète ; intégrité ZIP vérifiée, 178 entrées dont 175 HTML, inventaire identique à V22 et sept fichiers internes modifiés. V22 reste conservée comme point de restauration.
- **Publication V23 :** la tentative de publication de l’archive et des quatre documents externes a échoué avec `container_session_unavailable`. Ne pas réessayer avec `container_path` ; une fois les pièces jointes V23 disponibles, utiliser leurs `file_id` réels et `source_file_ref`.
- **Limites :** aucun lecteur d’écran, audit WCAG exhaustif, contrôle HTTP exhaustif des 874 liens externes, ni exécution des exemples dans un navigateur via URL directe. Les tests DOM du bouton/formulaire utilisent un faux DOM Node, distinct d’un test navigateur.
- **Prochaine étape :** poursuivre la validation fonctionnelle disponible et les corrections prioritaires ; si aucun nouveau défaut n’est révélé, reprendre l’audit ciblé dans l’ordre de l’index sur `fetch-apis-navigateur.html`, `typescript-generiques.html`, `typescript-unions-intersections.html`, `typescript-types-conditionnels-mappes.html` et `typescript-utilitaires.html` (cinq pages maximum).



### Exécution 25 — audit pédagogique ciblé, lot 16 (11 octobre 2026)

- **Base utilisée :** V23, pièce jointe de conversation `file_00000000ffd8820dbf404ae43f9b382a`, matérialisée puis vérifiée : 910 318 octets, SHA-256 `a3b45c67701f6f0d156c090a7f24a6b7f80e8e58ac7d33afa9c77ee1c22ddfd7`. Le ZIP est intègre et contient 178 entrées dont 175 pages HTML. La copie de travail est distincte ; V23 reste intacte.
- **Publication de V23 résolue :** archive, plan versionné, suivi et README V23 ont été conservés dans `/Devoirs/` à partir de leurs `file_id` réels via `source_file_ref`. Le plan canonique de la bibliothèque a été remplacé par le plan V23. La version de référence V23 reste disponible.
- **Pages relues (5 maximum) :** `fetch-apis-navigateur.html`, `typescript-generiques.html`, `typescript-unions-intersections.html`, `typescript-types-conditionnels-mappes.html`, `typescript-utilitaires.html`.
- **Corrections réalisées :**
  - `fetch-apis-navigateur.html` : ajout d’un exemple exécutable de recherche avec `AbortController`, compteur de révision, gestion distincte de l’annulation et garde empêchant une réponse obsolète de remplacer le résultat courant ; rappel de valider le corps selon le contrat réel de l’API.
  - `typescript-unions-intersections.html` : renommage des déclarations de l’atelier en `WorkflowResult`, `assertNeverWorkflow` et `renderWorkflowResult`, afin d’éviter les collisions avec les exemples précédents ; référence explicative alignée sur le nouveau nom.
  - `typescript-types-conditionnels-mappes.html` : renommage de l’alias d’exemple en `ApiUser`/`ApiUserResult` pour éviter une seconde déclaration de `User`.
  - `typescript-utilitaires.html` : `UserCreation` devient `Pick<User, "name" | "email">`, car `Omit<User, "id">` incluait `isAdmin` dans ce modèle ; l’explication précise pourquoi une liste positive est préférable à une liste d’exclusion pour une entrée contrôlée par le client. Les alias de l’atelier sont renommés (`InternalUser`, `InternalUserSummary`, `InternalUserPatch`) pour éviter les redéclarations ; `Permissions` devient `RolePermissions` pour éviter le conflit de nom avec le type global DOM.
  - `typescript-generiques.html` : audit réalisé sans modification ; les exemples de relations génériques, contraintes `extends`, `keyof`/`T[K]` et retour `T | undefined` sont cohérents.
- **Contrôles structurels :** 175/175 pages HTML analysées sans erreur ; 1 026 références locales et 7 fragments contrôlés sans cible manquante ; 874 références externes recensées, non vérifiées exhaustivement par HTTP ; 174/174 liens de compétences/projets de l’index résolus ; inventaire de l’archive inchangé.
- **Sources documentaires :** les cinq pages conservent chacune cinq URL dans le commentaire initial et cinq liens HTTPS visibles, avec des ensembles identiques.
- **Contrôle HTTP local complémentaire :** serveur temporaire lié à `127.0.0.1` ; les 1 026 références locales `href`/`src` ont répondu HTTP 200, sans échec ; le serveur a été arrêté après le test.
- **Tests JavaScript :** six extraits de Fetch passent `node --check`. Un test du bloc de recherche, avec deux réponses simulées dans l’ordre inverse de lancement, passe quatre assertions : le premier signal est annulé, seul le résultat récent est affiché et aucune erreur n’est remontée pour l’annulation attendue.
- **Tests TypeScript :** les extraits regroupés des pages unions, types conditionnels/mappés et utilitaires compilent avec `tsc --strict --noEmit --target ES2022` ; les neuf blocs de `typescript-generiques.html` compilent séparément. Un test négatif ajoute une variante `empty` non traitée et obtient l’erreur attendue d’assignabilité à `never`. Un test de type confirme que `UserCreation` accepte `name`/`email` et refuse `isAdmin`.
- **Comparaison :** six fichiers internes modifiés par rapport à V23 : quatre tutoriels, `README.md` et `PROGRESSION_TUTORIELS.md`. Aucun fichier ajouté ou supprimé ; 178 entrées ZIP, dont 175 HTML.
- **Limites :** aucun navigateur réel, lecteur d’écran, audit WCAG exhaustif, contrôle HTTP externe exhaustif ou test d’application métier n’a été exécuté dans cette exécution. Les tests de code portent sur les extraits ciblés ; ils ne valident pas une application de production.
- **Archive produite :** `Roadmap_Full_Stack_2026_V24.zip`, intégrité et inventaire vérifiés après mise à jour des documents ; V23 conservée comme point de restauration.
- **Prochaine étape :** poursuivre l’audit dans l’ordre de l’index sur `typescript-unknown-never.html`, `typescript-modules-tsconfig.html`, `contrats-api-validation.html`, `api-erreurs-coherentes.html` et `plans-execution-sql.html` (cinq pages maximum), puis poursuivre la validation fonctionnelle restante.


### Exécution 26 — audit pédagogique ciblé, lot 17 (11 octobre 2026)

- **Base utilisée :** archive V24 récupérée depuis la pièce jointe de conversation `file_0000000033388230acb76a4630d23e45`, 912 624 octets, SHA-256 `e8021b2c545d68ea3834b9e6fb8191682dd9268542059c934f682304a8e1ad3e`. Le ZIP a passé `testzip()` et contient 178 entrées dont 175 pages HTML. Une copie de travail distincte a été utilisée ; V24 reste intacte.
- **Plan et suivi lus :** plan canonique de conversation V24 (`file_0000000098e4823092ca72e79b9f2a54`), plan versionné V24 et suivi V24. La bibliothèque a aussi été consultée : son plan canonique était encore en V23 et son archive la plus récente était V23.
- **Pages relues (5 maximum) :** `typescript-unknown-never.html`, `typescript-modules-tsconfig.html`, `contrats-api-validation.html`, `api-erreurs-coherentes.html`, `plans-execution-sql.html`.
- **Corrections réalisées :**
  - `typescript-unknown-never.html` : le second exemple de garde de type utilise `ParsedUser`/`isParsedUser` au lieu de redéclarer `User`/`isUser` ; l’explication précise que les extraits peuvent être réunis sans collision.
  - `typescript-modules-tsconfig.html` : l’exemple utilise `src/math.ts`, `src/app.ts` et `./math.js`, en cohérence avec `include: ["src/**/*.ts"]` et la résolution NodeNext/ESM ; l’explication décrit pourquoi l’extension d’exécution `.js` figure dans le source TypeScript.
  - `api-erreurs-coherentes.html` : le middleware de corrélation est placé avant `express.json()` ; les erreurs `entity.parse.failed` et `entity.too.large` sont traitées explicitement en 400 et 413, tandis que les erreurs inattendues restent en 500 avec un message générique et un journal expurgé.
  - `contrats-api-validation.html` : audit sans modification ; la distinction entre assertion TypeScript, validation runtime, entrée serveur et réponse fournisseur est déjà explicitée.
  - `plans-execution-sql.html` : audit sans modification ; les précautions concernant l’exécution réelle par `EXPLAIN ANALYZE`, les estimations, les boucles, les index et la représentativité des mesures sont déjà documentées.
- **Contrôles HTML/liens :** 175/175 pages analysées sans erreur par `lxml` ; 1 028 références locales et 874 références HTTP/HTTPS recensées ; aucun chemin local ou fragment manquant ; 174/174 liens de compétences/projets de l’index résolus. Les cinq pages ont un titre, un `h1`, des objectifs, un exercice, des critères de réussite et cinq liens HTTPS visibles ; les cinq URL du commentaire de sources correspondent exactement aux cinq liens visibles sur chacune des cinq pages.
- **Tests TypeScript :** les six blocs de `typescript-unknown-never.html` compilent ensemble avec `tsc --strict --noEmit --target ES2022`, sans collision de déclarations. L’exemple de modules compilé avec `module`/`moduleResolution` `NodeNext`, `strict`, `noEmit` et `include: ["src/**/*.ts"]` passe ; une compilation de production de test suivie de l’exécution Node affiche `5`.
- **Gestionnaire Express :** le bloc passe le contrôle de types strict avec des déclarations minimales de test. Un test d’exécution isolé sur un faux Express confirme l’ordre middleware de corrélation → parseur JSON et vérifie 400 pour JSON mal formé, 413 pour corps trop volumineux, 500 générique pour erreur inattendue et égalité entre le `requestId` du corps et l’en-tête. Ce test n’est pas une exécution sur un serveur Express réel.
- **Comparaison :** trois pages modifiées (`typescript-unknown-never.html`, `typescript-modules-tsconfig.html`, `api-erreurs-coherentes.html`), deux pages auditées sans modification, puis README et suivi mis à jour. Aucun fichier de projet ajouté ou supprimé ; inventaire attendu : 178 entrées dont 175 HTML.
- **Limites :** aucun serveur Express réel, PostgreSQL, navigateur, lecteur d’écran ou audit WCAG exhaustif n’a été exécuté. Les 874 références externes sont recensées, mais non toutes vérifiées par HTTP. Les exemples de contrats API et de plans SQL restent des tutoriels, pas des tests d’intégration.
- **Archive produite :** `Roadmap_Full_Stack_2026_V25.zip`, intégrité vérifiée après réemballage ; 178 entrées dont 175 HTML, inventaire identique à V24. V24 reste conservée comme point de restauration.
- **Publication :** l’archive V24 et ses documents associés ont été conservés dans `/Devoirs/` via les `file_id` réels et `source_file_ref`. L’archive V25, son plan versionné, son README, son suivi, le rapport de validation et le manifeste ont été publiés dans `/Devoirs/` depuis les fichiers de sortie. L’ancien plan canonique V23 a été renommé en `plan_corrections_roadmap_fullstack_2026_V23_library_backup.md` pour conserver l’historique ; l’état de synchronisation du plan canonique est consigné dans le plan de correction externe.
- **Prochaine étape :** validation fonctionnelle complémentaire : vérifier les pages servies en HTTP local et leurs liens, l’index/recherche, le responsive/focus via le navigateur disponible ; conserver les limites de navigation directe si `net::ERR_BLOCKED_BY_ADMINISTRATOR` persiste. Puis publier les livrables V25.



### Exécution 27 — validation fonctionnelle ciblée (11 octobre 2026)

- **Base utilisée :** V25 matérialisée depuis le `file_id` de conversation `file_00000000c0c881f8b5c1070185af5f31` ; 915 082 octets, SHA-256 `6ee85b29fed297d9515896e273d6e190506c2149cc9baa53dfba3d9c5ab95939`. ZIP intègre, 178 entrées dont 175 HTML. La copie V25 de la bibliothèque a été comparée et s’est révélée antérieure (915 008 octets, empreinte différente) ; la référence conversation a été retenue.
- **Défauts découverts au rendu mobile :** quatre pages TypeScript provoquaient un débordement horizontal à 375 px, dû aux blocs de code non contenus par une règle globale `pre`. Le sélecteur `.lesson-nav .nav-link:focus-visible,.skill-link:focus-visible` utilisait encore `#a5b4fc`, contraste insuffisant sur les fonds clairs.
- **Correction :** `style.css` ajoute `pre{max-width:100%;overflow-x:auto;box-sizing:border-box}` et aligne les contours de focus des liens sur `#5146e5`. Les exemples longs restent défilables dans leur bloc sans élargir la page.
- **README/suivi :** état V26 ajouté ; tableau de seconde passe réconcilié pour les compétences 111–169 avec les lots 50–56 déjà consignés ; limites de validation explicitées.
- **Contrôles structurels :** 175/175 pages HTML sans erreur `lxml` ; 1 026 références locales `href`/`src`, 874 références externes et 7 fragments recensés ; aucune cible locale ou aucun fragment manquant ; 174/174 liens de compétences/projets de l’index résolus.
- **HTTP local :** 1 026 requêtes vers les références locales, 1 026 réponses HTTP 200, aucune requête en échec.
- **Rendu Chromium via Playwright :** 175 pages avec CSS injectée dans le DOM à 375 px, zéro débordement horizontal ; index et cinq pages ciblées à 375/768/1 365 px sans débordement. Recherche : 2 cartes PostgreSQL, 0 résultat absent, 174 cartes après remise à zéro. Focus clavier : champ et carte avec contour de 3 px en `#5146e5`. Aucune erreur console ou erreur de page.
- **CSS/contraste :** 75 règles analysées par `tinycss2`, aucune erreur de parsing ; 6,25:1 sur blanc et 5,78:1 sur `#f4f6fb`.
- **Blocages :** `page.goto` vers `file://` et `http://127.0.0.1` bloqué par `net::ERR_BLOCKED_BY_ADMINISTRATOR` ; deux sources officielles n’ont pas pu être résolues par DNS depuis l’environnement. Pas d’audit lecteur d’écran/WCAG exhaustif ni de vérification HTTP exhaustive des 874 URL externes.
- **Fichiers du projet modifiés :** `style.css`, `README.md`, `PROGRESSION_TUTORIELS.md`. Aucun tutoriel n’a été relu ou modifié pendant cette exécution ; la limite de cinq pages est respectée.
- **Prochaine étape :** finaliser l’archive V26, synchroniser V25 exacte et publier V26 ainsi que le plan canonique et les documents associés dans la bibliothèque. Ensuite, reprendre la navigation réelle et les contrôles externes dès que les restrictions réseau/navigateur le permettent.



### Exécution 28 — correction responsive et validation fonctionnelle ciblée (11 octobre 2026)

- **Base retenue :** V26 de la conversation, `file_0000000094d881f8be6e021a80ad458b`, 917 496 octets, SHA-256 `f754b39be6733515de890826055ebece765151231243965eeee5ea78d71fb555`. L’archive a passé `testzip()` ; 178 entrées dont 175 HTML. La bibliothèque `/Devoirs/` a été listée : V26 et les documents associés y sont présents.
- **Défauts reproduits :** une première passe Playwright avec le CSS correctement injecté a retrouvé 14 pages avec débordement à 375 px. L’analyse du DOM a isolé deux causes : tableaux de leçon trop larges et chaînes `code` en ligne non sécables hors des blocs `pre`.
- **Correction appliquée :** `style.css` ajoute `.lesson-section table{display:block;width:max-content;max-width:100%;overflow-x:auto}` et `.lesson-section :not(pre)>code{overflow-wrap:anywhere}`. Les tableaux conservent les rôles `table` et `row` dans l’arbre d’accessibilité Chromium testé.
- **Fichiers du projet modifiés :** `style.css`, `README.md`, `PROGRESSION_TUTORIELS.md`. Aucun tutoriel HTML n’a été modifié ni relu ; limite de cinq pages respectée.
- **Contrôles :** 175/175 pages HTML sans erreur `lxml` ; aucun défaut détecté par les heuristiques statiques de langue, titre, `h1`, IDs, `alt`, libellés, noms accessibles et références ARIA ; 177 ressources locales uniques répondent HTTP 200. `tinycss2` ne relève aucune erreur de parsing CSS. Après correction, 175 pages rendues via `set_content` à 375 px sans débordement ; index et cinq pages ciblées à 375/768/1365 px sans débordement sur 18 cas. Recherche réelle dans le DOM injecté : 2 résultats PostgreSQL, 0 résultat absent, 174 après remise à zéro ; focus de 3 px ; `prefers-reduced-motion` appliqué.
- **Navigation directe :** trois essais (`http://127.0.0.1`, `http://localhost`, `file://`) bloqués par `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Cette exécution ne valide donc pas la navigation entre URL dans un navigateur.
- **Sources externes :** 874 liens externes recensés sur les pages ; dix URL représentatives testées en HTTPS échouent toutes en résolution DNS dans l’environnement. Les autres URL ne sont pas déclarées vérifiées.
- **Prochaine étape :** poursuivre l’audit d’accessibilité statique ; reprendre la navigation directe et la vérification HTTP externe dès que les restrictions réseau/navigateur le permettent. la publication V27 reste à effectuer via `source_file_ref` après disponibilité des `file_id` réels des pièces jointes.


### Exécution 31 — validation fonctionnelle ciblée et correction de l’encodage HTML (12 octobre 2026)

- **Base retenue :** V29 de la conversation, `file_00000000116c8230b3485a069623d384`, 923 861 octets ; SHA-256 `9b5800c27f4f428839cc29171d02af0bd21116fbcf5bf21b68b7b24a91db0a4d`. ZIP vérifié avant extraction ; 178 entrées dont 175 HTML ; copie de travail distincte.
- **Contrôle d’encodage :** le scan complet a détecté sept pages où le commentaire documentaire initial repoussait la balise `<meta charset="utf-8">` au-delà de la limite de 1 024 octets, ou faisait dépasser cette limite à la balise entière. Le commentaire existant a été déplacé juste après la déclaration UTF-8 dans le `<head>`, sans changer le contenu documentaire : `decoupage-taches-estimation.html`, `environnements-dev-test-prod.html`, `projet-5-application-professionnelle.html`, `rollback-deploiement.html`, `verification-code-ia.html`, `migrations-livraison.html`, `recueil-besoin-specifications.html`. Ce travail est mécanique et ne constitue pas une relecture pédagogique supplémentaire.
- **Contrôles statiques :** 175/175 pages analysées sans erreur ; 175 déclarations UTF-8 présentes et complètes dans les 1 024 premiers octets ; 1 026 références locales, 874 références externes recensées ; zéro chemin ou fragment manquant ; zéro ID dupliqué ; 174 liens de compétences dans l’index.
- **HTTP local :** 176 ressources uniques testées, 176 réponses HTTP 200, aucune requête en échec.
- **Chromium/Playwright :** le rendu avec `set_content` et le CSS réel a couvert les 175 pages à 375 px sans débordement horizontal. Cinq pages représentatives ont été contrôlées à 375, 768 et 1 365 px, sans débordement. Recherche : 2 résultats PostgreSQL, 0 résultat sans correspondance, 174 après remise à zéro. Parcours clavier : focus visible de 3 px sur le champ de recherche et la première carte. `prefers-reduced-motion` : `scroll-behavior: auto`, transitions ramenées à `0.00001s`. Zéro erreur console, exception de page ou requête échouée pendant les tests injectés.
- **Limite navigateur :** l’essai de navigation directe vers le serveur local échoue avec `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Les tests `set_content` ne prouvent pas la navigation réelle entre URL. Lecteur d’écran, audit WCAG exhaustif, test HTTP des 874 URL externes et tests d’intégration backend/SQL non exécutés.
- **Fichiers modifiés dans le projet :** sept pages HTML pour repositionner le commentaire documentaire après le charset, `README.md` et `PROGRESSION_TUTORIELS.md`. Aucun fichier ajouté ou supprimé. Aucun audit pédagogique approfondi au-delà des cinq pages de contrôle fonctionnel n’a été réalisé.
- **Publication :** réussie dans `/Devoirs/`. V29 et ses documents de référence ont été conservés via `source_file_ref`. V30 et les six documents associés ont été publiés ; les sept snapshots V30 ont été rematérialisés et comparés octet par octet aux fichiers finaux locaux, sans écart. Le plan canonique et le plan versionné ont été publiés en V30 lors de la première publication. Après l’ajout du statut final et le réemballage de l’archive, la tentative de rafraîchissement des sept snapshots a échoué avec `container_session_unavailable`. La bibliothèque contient donc une première V30 de 924 784 octets (SHA-256 `38221140e83fcba2b6533ff6a0ee375844cd007b4b5eee16aaa7c26cfddfa31c`), différente des fichiers finaux locaux. À la prochaine exécution, récupérer les `file_id` réels des pièces jointes finales et remplacer les snapshots via `source_file_ref`, sans `container_path`.
- **Prochaine étape :** synchroniser les fichiers finaux puis reprendre les contrôles restants quand l’environnement le permettra : navigation réelle entre URL, lecteur d’écran/audit WCAG exhaustif, vérification HTTP des 874 URL externes et tests d’intégration backend/SQL. Si ces blocages persistent, poursuivre l’audit ciblé sur cinq tutoriels maximum, en respectant l’ordre du plan et sans revendiquer d’exécutions non réalisées.



### Exécution 40 — publication et vérification V38 (12 octobre 2026)

- [x] Rechercher les archives de conversation et de bibliothèque ; conserver V38 comme archive la plus récente de la conversation et consulter le plan/suivi V38 ainsi que les versions V36 de la bibliothèque.
- [x] Publier l’archive V38, le plan canonique, le plan versionné, le suivi, le README, le rapport de validation, le manifeste et trois rapports ciblés via `source_file_ref`.
- [x] Rematérialiser et comparer les 11 snapshots : 11/11 correspondances exactes octet par octet.
- [x] Vérifier l’intégrité de l’archive publiée : `testzip()` réussi, 178 entrées dont 175 HTML ; SHA-256 `5039875a226a918146acafdf015feef6daeafceded50dc2227282e61849f74b9`.
- [x] Aucun tutoriel ni fichier applicatif modifié ; aucune relecture pédagogique supplémentaire dans ce lot.
- [ ] Reprendre navigation réelle, audit lecteur d’écran/WCAG complet, HTTP externe exhaustif et tests d’intégration réels lorsqu’ils sont possibles.


### Exécution 42 — publication et vérification V40 (12 octobre 2026)

- [x] Rechercher les archives de conversation et de bibliothèque ; retenir V40 de la conversation, plus récente que V38 dans `/Devoirs/`.
- [x] Matérialiser avec les `file_id` réels l’archive, le plan canonique/versionné, le suivi, le README et les rapports V40 ; vérifier le SHA-256 et le ZIP avant publication.
- [x] Publier l’archive et huit documents associés avec `source_file_ref`, en remplaçant le plan canonique par la copie V40 correspondante.
- [x] Rematérialiser les neuf snapshots et comparer les octets : **9/9 correspondances exactes**.
- [x] Vérifier l’archive publiée : 937 410 octets, SHA-256 `e02920b6cc1380fb76acf1adc6ef6a078aaa5fb9f878554d2b84e06bcdae883b`, ZIP valide, 178 entrées dont 175 HTML ; le manifeste concorde avec l’empreinte de l’archive.
- [x] Aucun tutoriel, CSS ou JavaScript applicatif modifié dans ce lot ; aucune relecture pédagogique supplémentaire.
- [ ] Reprendre la navigation réelle, la vérification HTTP exhaustive des 636 URL externes, l’audit lecteur d’écran/WCAG exhaustif et les tests d’intégration backend/PostgreSQL lorsqu’ils sont réalisables.

**Fichiers publiés :** `Roadmap_Full_Stack_2026_V40.zip`, `plan_corrections_roadmap_fullstack_2026.md`, `plan_corrections_roadmap_fullstack_2026_V40.md`, `PROGRESSION_TUTORIELS_V40.md`, `README_V40.md`, `validation_v40.json`, `manifest_v40.json`, `functional_validation_v40.json`, `publication_v40_attempt.json`.

---

### Exécution 41 — validation fonctionnelle ciblée (12 octobre 2026)

- [x] Rechercher les archives versionnées et les plans dans la conversation et la bibliothèque ; retenir V39, plus récente que V38 dans `/Devoirs/`.
- [x] Matérialiser V39 via son `file_id` réel, vérifier SHA-256 et intégrité ZIP, lire le plan/suivi V39 de conversation et les documents V38 de la bibliothèque, puis travailler sur une copie.
- [x] Analyser 175/175 pages HTML, les liens locaux/externes, fragments, identifiants, encodage, CSS, JavaScript inline et liens de l’index.
- [x] Tester 176 ressources locales par HTTP : 176/176 réponses 200.
- [x] Rendre l’index et les cinq fiches projet à 320, 768 et 1 280 px : 18/18 rendus sans débordement ni erreur console/de page.
- [x] Tester la recherche de l’index (174 → 2 pour PostgreSQL → 0 sans correspondance → 174 après remise à zéro), les huit premiers arrêts clavier et `prefers-reduced-motion`.
- [x] Retenter la navigation directe via `page.goto()` : blocage confirmé `net::ERR_BLOCKED_BY_ADMINISTRATOR`; ne pas présenter la navigation inter-pages comme validée.
- [x] Mettre à jour le README, le suivi et le plan ; créer V40 et vérifier ZIP, inventaire et empreintes.
- [ ] Navigation directe, vérification HTTP exhaustive des 636 URL externes, lecteur d’écran/WCAG exhaustif et tests d’intégration backend/SQL restent non validés.
- [ ] Publier V40 et les documents associés via `source_file_ref` avec leurs `file_id` réels, puis rematérialiser et comparer les snapshots.

**Fichiers internes modifiés :** `README.md`, `PROGRESSION_TUTORIELS.md`. Aucun tutoriel, CSS ou JavaScript applicatif modifié ; aucun fichier ajouté ou supprimé.
