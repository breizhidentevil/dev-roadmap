# Évaluation et corrections — cours JavaScript moderne

**Date :** 14 octobre 2026  
**Périmètre :** cours JavaScript de la roadmap Full Stack 2026, version source `dev-roadmap-javascript-moderne-cours-detaille-v1.zip`.

## Évaluation

- **Avant corrections : 7,5/10.** Bonne couverture et structure régulière, mais quelques exemples présentaient des pièges involontaires et la qualité d’un cours avancé dépend de la précision de ses démonstrations.
- **Après corrections : 8/10.** Les incohérences repérées sont corrigées et des assertions de non-régression ont été ajoutées. La note porte sur le contenu et sa structure ; elle ne vaut pas validation d’exécution dans le navigateur.

| Critère | Évaluation | Observations |
|---|---:|---|
| Couverture technique | 9/10 | ECMAScript, types, fonctions, portée, objets, collections, modules, asynchrone, DOM, réseau, sécurité, performance et tests. |
| Progression pédagogique | 8/10 | Deux modules d’introduction puis 24 modules détaillés ; chaque module contient trois sections et un exercice. |
| Précision des exemples | 7/10 avant correction | Deux pièges involontaires ont été corrigés ; un exemple de sécurité réseau a également été rendu plus complet. |
| Pratique et autonomie | 7/10 | Un exercice par module et un projet final avec critères ; les corrigés complets des exercices restent à ajouter. |
| Références et bonnes pratiques | 8/10 | Références MDN, ECMAScript, Node.js, web.dev et OWASP ; les fragments spécifiques au navigateur sont identifiés par leur contexte pédagogique. |

## Corrections effectuées

1. **Validation d’un montant.** `Number(null)` et `Number('')` renvoient `0`. L’exemple vérifie désormais que l’entrée est une chaîne non vide avant conversion, puis vérifie la finitude et la non-négativité du résultat.
2. **Chaînage optionnel.** L’exemple qui utilisait `user?.profile` sans déclarer `user` provoquait une `ReferenceError`. Il définit maintenant `const user = null` et illustre correctement le repli vers `Anonyme`. Le commentaire rappelle que `?.` ne protège pas un identifiant inexistant.
3. **Requête sensible côté client.** L’exemple de soumission de commande indique maintenant le type de contenu JSON et vérifie `response.ok`. Il rappelle que la validation et l’autorisation côté serveur restent indispensables.
4. **Non-régression.** Des assertions ont été ajoutées à `src/App.test.tsx` pour protéger ces trois points. Elles ont été écrites mais ne sont pas exécutées dans cet environnement.
5. **Documentation.** Le README annonce le volume exact du cours et décrit les exemples comme commentés plutôt que de laisser entendre que chaque extrait est autonome.

## Structure observée

- 26 modules : 2 modules d’introduction et 24 modules avancés.
- 78 sections pédagogiques, soit trois par module.
- 77 exemples de code commentés.
- 26 exercices, un par module.
- 11 références documentaires.
- Un projet final de catalogue de livres avec recherche, filtres, favoris persistants, gestion d’erreurs, rendu DOM sûr et critères d’accessibilité.

## Contrôles réalisés ici

- Structure des données pédagogiques lue et contrôlée statiquement : 26 identifiants uniques, trois sections par module, contenu non vide et exercice présent pour chaque module.
- Validateur statique du catalogue : réussi — 25 chapitres, 174 entrées, 169 compétences, 5 projets, 174 fichiers sources résolus et identifiants uniques.
- Intégrité de l’archive ZIP : vérifiée après création.

Conformément à la consigne du projet, **aucune dépendance n’a été installée et aucun test d’exécution, typecheck ou build n’a été lancé**. Les assertions ajoutées doivent être exécutées dans Codex. Les exemples qui manipulent `document`, `fetch`, `localStorage` ou des fonctions de l’application nécessitent le contexte indiqué dans chaque leçon ; ils ne sont pas tous destinés à s’exécuter isolément dans une console vierge.

## Améliorations restantes

1. Ajouter des corrigés expliqués aux 26 exercices, idéalement sous forme de solution progressive et de variantes.
2. Ajouter de petits quiz avec explication de chaque réponse, notamment sur les conversions, les closures, les microtâches et les erreurs HTTP.
3. Fournir des exercices intégrateurs après les blocs fondamentaux, asynchrones et navigateur.
4. Dans Codex, exécuter les tests, le typecheck et le build ; corriger tout écart de typage ou de rendu.
