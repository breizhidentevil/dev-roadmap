# Évaluation et amélioration du cours TypeScript — V3

Date : 14 octobre 2026

## Note après correction : 9/10 sur le contenu pédagogique et la structure

Cette note mesure la conception pédagogique, la précision des objectifs, la qualité des ateliers et la présence de corrigés. Elle ne certifie pas que tous les extraits compilent : le typecheck, les tests et le build n'ont pas été exécutés dans cet environnement.

## Défauts corrigés

1. **Exercices trop génériques.** Les 20 exercices ont été réécrits pour viser une compétence précise, avec livrable et critères d'acceptation adaptés au module.
2. **Absence de corrigés complets.** Le document `ATELIERS_TYPESCRIPT_CORRIGES.md` fournit une proposition commentée pour chacun des 20 ateliers.
3. **Peu de critères de maîtrise.** Ajout d'une grille d'autoévaluation et d'un barème sur 100 points pour le projet final.
4. **Incohérence de non-régression.** Un test attendait 60 exemples, alors que le cours en contient 80. L'attente est désormais alignée sur le contenu réel.
5. **Durée et objectifs.** La durée indicative passe à 50–65 heures, avec ateliers, étude des corrigés, révisions et projet final. Cette durée reste une estimation et non une mesure.
6. **Séparation statique/runtime.** Les corrigés répètent la distinction entre vérification par le compilateur et validation effective des données à l'exécution.

## État du cours

- 20 modules ; 60 sections ; 80 exemples ; 20 exercices spécialisés.
- 20 corrigés détaillés, plus une grille d'autoévaluation.
- Projet final avec barème explicite de 100 points.
- Le cours reste complémentaire au cours JavaScript et ne reprend pas ses fondamentaux.

## Évaluation

| Dimension | Note | Justification |
|---|---:|---|
| Couverture | 9/10 | Du modèle de types aux déclarations, tests et architecture métier. |
| Explications et limites | 8,5/10 | Chaque module développe les choix, pièges et garanties. |
| Exemples | 8,5/10 | 80 exemples dans le cours et un corrigé de référence par atelier. |
| Exercices et feedback | 9/10 | Ateliers ciblés, solutions, critères et autoévaluation. |
| Transfert vers un projet | 9/10 | Projet final découpable et évalué sur 100 points. |
| Vérification technique | 6/10 | Les contrôles statiques passent, mais le typecheck, Vitest et le build restent à exécuter dans Codex ou CI. |

**Note globale pédagogique : 9/10.** Le dixième point manquant dépend notamment de l'exécution automatisée de tous les extraits, d'un jeu d'exercices compilables dans un dépôt dédié et d'une vérification de la compatibilité de l'API publiée dans un projet consommateur.

## Contrôles réalisés

- `node scripts/validate-catalog.mjs` : réussi (25 chapitres, 174 entrées, 174 fichiers source résolus, références HTML locales validées).
- Vérification statique des données du cours : 20 modules, 60 sections, 80 exemples, 20 exercices contenant des critères d'acceptation, 13 références.
- Inspection de l'attente de test corrigée : 80 exemples attendus.
- Archive ZIP recréée et intégrité vérifiée.

## Contrôles non réalisés

Conformément à la consigne de ne pas installer de dépendances ni lancer de tests/build hors de Codex, aucun `npm install`, `npm ci`, Vitest, typecheck ou build n'a été exécuté.
