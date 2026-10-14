# Revue et correction du cours TypeScript — 14 octobre 2026

## Évaluation de la version initiale

**Note : 6,5/10 pour une formation annoncée comme complète.** Le plan de 20 modules est cohérent et couvre le système de types, mais les 60 sections avaient des explications de quelques phrases, généralement un seul exemple et des exercices formulés comme de simples consignes. Le volume initial ne justifiait pas à lui seul une durée de 35 à 50 heures.

## Corrections réalisées

- Conservation du parcours de 20 modules et 60 sections afin de préserver les liens et la progression existants.
- Ajout d’un approfondissement spécifique à chacune des 60 sections : raisonnement, limites, pièges et choix de conception.
- Ajout de 20 exemples supplémentaires ciblant les notions où une seconde démonstration est particulièrement utile.
- Réécriture des 20 exercices en ateliers avec livrable, procédure et critères d’acceptation.
- Mise à jour de la durée indicative à 45–60 heures, à considérer comme estimation de travail et non comme mesure.
- Correction de l’exemple de conversion de ligne de stockage : le statut est désormais réduit par un garde de type explicite, sans assertion après `includes`.
- Mise à jour de la description du cours dans le README.

## Évaluation après correction

| Critère | Avant | Après, sur le contenu statique |
|---|---:|---:|
| Couverture | 8,5/10 | 8,5/10 |
| Profondeur des explications | 4,5/10 | 7,5/10 |
| Qualité des exemples | 5,5/10 | 7,5/10 |
| Exercices et autonomie | 4/10 | 7/10 |
| Progression | 7,5/10 | 8/10 |

**Note estimée après correction : 7,5/10.** Ce n’est pas une certification de justesse de chaque extrait : la validation repose sur l’inspection et les contrôles statiques. Les snippets doivent être compilés dans un environnement TypeScript réel avant d’affirmer qu’ils sont tous exécutables.

## Limites restantes

- Les exercices n’ont pas encore tous un corrigé complet distinct ; ils disposent maintenant d’une procédure et de critères.
- Les exemples ne sont pas encore réunis dans un dépôt d’exercices compilable automatiquement.
- Vitest, le typecheck et le build n’ont pas été exécutés, conformément à la consigne de ne pas installer de dépendances ou lancer ces commandes hors de Codex.

## Vérifications effectuées

- Structure des données : 20 modules, 60 sections, 60 exemples initiaux et 20 exemples supplémentaires (80 au total).
- Chaque module dispose d’un exercice enrichi.
- Archive ZIP créée et vérifiée en lecture.
