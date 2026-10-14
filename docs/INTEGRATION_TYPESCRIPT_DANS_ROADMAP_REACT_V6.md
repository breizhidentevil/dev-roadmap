# Intégration du cours TypeScript dans la roadmap React — V6

## Changements

- Réintégration du cours TypeScript approfondi complet dans `src/data/typescriptCourse.ts`.
- Enregistrement du cours dans `src/data/courses.ts` à la place du cours TypeScript court.
- Ajout d’un test de non-régression couvrant les 20 modules, 60 sections, 80 exemples, les ateliers et une route du cours.
- Conservation de la correction de syntaxe du cours React dans `src/data/reactAdvancedModules.ts` issue de la version V5.
- Conservation du catalogue, de la feuille de style et des autres cours de la version React V5.

## Vérifications statiques

- Le fichier `src/data/typescriptCourse.ts` est présent et importé par `src/data/courses.ts`.
- Le test de cours TypeScript est présent dans `src/App.test.tsx`.
- Le cours garde son identifiant `typescript`, donc la liste de neuf cours reste inchangée.
- L’archive contient le projet complet sans `node_modules`, `.git`, `dist` ni `coverage`.

Les tests Vitest, le typecheck et le build n’ont pas été exécutés. La correction de syntaxe React précédente a été conservée, mais son passage au compilateur doit être confirmé dans GitHub Actions.
