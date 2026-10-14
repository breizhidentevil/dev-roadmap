# Correction de l’échec de déploiement — compteurs de tests

## Cause

Deux tests de `src/App.test.tsx` utilisaient des compteurs historiques codés en dur : 230 entrées au total et 72 concepts de cours. Les données actuelles comprennent 174 entrées de catalogue et 93 concepts dans les huit cours, soit 267 entrées affichées au total.

## Correction

Les tests calculent désormais `catalogEntryCount` depuis `catalog.json` et `courseConceptCount` depuis `courses`. Le test du filtre « Cours » vérifie le nombre de concepts et les liens de cours à partir de cette valeur calculée. Les contrôles structurels distincts (25 chapitres, 174 entrées catalogue, identifiants uniques et huit sections de cours) sont conservés.

## Vérification

Correction statique uniquement. Conformément à la consigne, aucune dépendance n’a été installée et aucun test, build ou vérification TypeScript n’a été exécuté dans cet environnement. Relancer le workflow GitHub Actions dans Codex/GitHub pour confirmer que les tests passent.
