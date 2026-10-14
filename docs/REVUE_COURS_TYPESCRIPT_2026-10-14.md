# Évaluation et création du cours TypeScript — 14 octobre 2026

## Périmètre

Le cours TypeScript précédent ne comptait que cinq modules génériques. Il couvrait quelques fondamentaux du système de types, mais ne constituait pas une formation complète. Il a été remplacé par un parcours de 20 modules, 60 sections, 60 exemples commentés, 20 exercices et un projet final.

## Choix pédagogiques

Le cours suppose que JavaScript moderne a déjà été étudié. Il ne reprend pas l’enseignement des variables, opérateurs, conditions, boucles, fonctions, objets, tableaux, modules ou promesses en tant que notions JavaScript. Il utilise ces constructions seulement lorsque nécessaire pour expliquer les garanties du système de types.

Les thèmes couverts sont : modèle de types et effacement, inférence, `satisfies`, types d’objets, unions discriminées, narrowing, prédicats et assertions, signatures de fonctions, génériques, `keyof`/`typeof`/accès indexé, mapped types, conditional types et `infer`, template literal types, tuples variadiques, classes typées, modules et déclarations, tsconfig strict, validation runtime, contrats d’API, typage React, tests de types, publication de packages et architecture de domaine.

## Limites et vérifications

- Les données du cours et le test structurel ont été vérifiés par script statique.
- Le catalogue existant reste à 25 chapitres, 174 compétences/projets et 9 cours.
- Les tests Vitest, le typecheck et le build n’ont pas été exécutés et aucune dépendance n’a été installée, conformément à la consigne de ne pas effectuer ces opérations hors de Codex.
- Les exemples sont pédagogiques : certains nécessitent un environnement précis (DOM, React, Zod, module ESM) et doivent être exécutés dans le projet indiqué par leur contexte.
