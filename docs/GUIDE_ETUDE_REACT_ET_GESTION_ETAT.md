# Guide d’étude — React et gestion d’état

## Méthode pour chaque module

1. Lis les explications sans copier le code immédiatement.
2. Prédit le résultat de chaque exemple et explique pourquoi.
3. Retape l’exemple dans un projet React + TypeScript, en ajoutant les imports et types manquants.
4. Modifie une règle (état initial, erreur, entrée vide, réponse lente) et observe le résultat.
5. Réalise l’exercice du module avant de consulter les sections d’atelier/corrigé.
6. Ajoute un test qui échoue avant la correction et passe après.

## Jalons React

- **Jalon 1 — interface** : composants, props, JSX, listes, formulaires et accessibilité.
- **Jalon 2 — comportement** : état, reducers, Hooks, effets et requêtes asynchrones annulables.
- **Jalon 3 — application** : navigation, TypeScript, tests, gestion des erreurs et architecture.
- **Jalon 4 — qualité** : mesure des performances, build reproductible et déploiement.

## Jalons gestion d’état

- Modélise d’abord les données sans bibliothèque et identifie la source de vérité.
- Implémente un même cas avec Context + useReducer, puis Zustand, Redux Toolkit et Jotai.
- Garde les données serveur dans TanStack Query ou une solution de même catégorie, sans duplication durable dans le store client.
- Ajoute des tests pour les invariants métier, les erreurs réseau, la persistance et les réponses concurrentes.
- Compare la lisibilité, le débogage, la quantité de code, les rendus et le coût de maintenance ; ne conclus pas qu’une bibliothèque est toujours supérieure.

## Critères d’acquisition

Tu maîtrises un module si tu peux : (1) expliquer le modèle mental sans relire, (2) écrire un exemple de mémoire, (3) identifier un anti-pattern, (4) corriger un bug proche, et (5) tester le comportement observable.
