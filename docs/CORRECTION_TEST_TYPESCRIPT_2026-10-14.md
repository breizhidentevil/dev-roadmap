# Correction du test du cours TypeScript — 14 octobre 2026

## Problème

Le test `expose un cours TypeScript approfondi avec des exercices guidés` utilisait `getByText(/Approfondissement —/)`. React Testing Library attend qu’une requête `getByText` corresponde à un seul élément. La page de cours contient légitimement plusieurs sections commençant par « Approfondissement — », donc la requête échouait avec `Found multiple elements`.

## Correction

Le test utilise désormais `getAllByText(/Approfondissement —/).length` et vérifie qu’au moins un approfondissement est rendu. Cela vérifie le comportement attendu sans supposer qu’un seul module est affiché.

## Vérifications

La validation statique du catalogue est exécutée séparément. Vitest, le typecheck et le build n’ont pas été exécutés dans cet environnement.
