# Correction de l'erreur TypeScript — 14 octobre 2026

## Erreur signalée

`src/data/reactAdvancedModules.ts`, ligne 1107, avec une série d'erreurs `TS1005` (`',' expected` et `':' expected`).

## Cause

L'exemple ajouté pour `useActionState` était stocké dans une chaîne TypeScript délimitée par des guillemets doubles. Les guillemets de l'appel `fetch` (`"/api/profile/name"`, `"PUT"` et les clés/valeurs d'en-tête) n'étaient pas échappés dans la chaîne englobante. Le parseur interprétait donc une partie du code d'exemple comme de la syntaxe du fichier source.

## Correction

Les guillemets concernés dans la propriété `code` ont été échappés. Le code pédagogique affiché à l'apprenant reste le même.

## Vérifications effectuées

- Le diff de la ligne fautive a été inspecté.
- `node scripts/validate-catalog.mjs` réussit : 25 chapitres, 174 entrées, 174 fichiers sources résolus.
- L'archive ZIP a été recréée et son intégrité vérifiée.

## Limites

Aucun paquet n'a été installé. `npm run typecheck`, Vitest et le build n'ont pas été exécutés ici. Il faut relancer le workflow GitHub Actions pour confirmer que le typecheck passe dans l'environnement CI.
