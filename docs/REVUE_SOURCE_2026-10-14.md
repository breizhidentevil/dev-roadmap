# Revue de la source reçue — 2026-10-14

## Source

- Archive fournie : `dev-roadmap-main.zip`
- SHA-256 : `5c9a461988c8a0e01ee29a27082f0fa0f0bafd552a6793b469bbbbec7cc21cce`
- Intégrité ZIP : réussie (`testzip` ne détecte aucune entrée corrompue).
- Entrées de l’archive : 216.
- Fichiers HTML présents : 176 au total dans l’archive, dont les pages de l’application et les ressources pédagogiques.

## Validation exécutée

Commande : `node scripts/validate-catalog.mjs`

Résultat : réussite — 25 chapitres, 174 entrées du catalogue, 169 compétences, 5 projets, 174 identifiants uniques, 174 fichiers source résolus, feuille de style partagée présente, anciens liens de catalogue absents et références HTML locales validées.

## Corrections réalisées dans cette passe

- `.github/workflows/deploy.yml` : remplacement de `npm install` par `npm ci`, pour une installation reproductible fondée sur le lockfile suivi dans le dépôt ; suppression du contrôle séparé du lockfile devenu redondant puisque `npm ci` exige ce fichier et vérifie sa cohérence.
- `docs/GITHUB_PAGES.md` : documentation alignée sur la commande réellement configurée dans le workflow.

## Contrôles bloqués ou non exécutés

- Une tentative de `npm ci --no-audit --no-fund` a dépassé le délai de l’environnement.
- `npm run typecheck` a échoué parce que les dépendances locales sont incomplètes : type definition file `vite/client` introuvable.
- `npm test` n’a pas pu démarrer : `vitest` introuvable.
- `npm run build` a échoué au même stade TypeScript ; le build Vite n’a donc pas été atteint.
- Aucun test navigateur ni déploiement GitHub Actions réel n’a été effectué.

Ces résultats décrivent l’environnement d’exécution de cette passe ; ils ne prouvent pas que la CI GitHub échouera. Il faut exécuter le workflow avec les dépendances verrouillées pour confirmer la chaîne complète.

## Prochaine action

1. Exécuter `npm ci` dans un environnement disposant d’un accès fonctionnel au registre npm.
2. Relancer `npm run validate:catalog`, `npm run typecheck`, `npm test` et `npm run build`.
3. Corriger les éventuels défauts réels, puis vérifier les routes et les iframes dans un navigateur sur le build de production.
4. Ne déclarer la livraison validée qu’après un workflow GitHub Actions réussi et une vérification du déploiement.


## Extension pédagogique — cours CSS

Le cours CSS a été porté à 21 concepts pour reprendre la granularité du cours HTML. Il couvre la cascade, les sélecteurs, le modèle de boîte, la typographie, les couleurs, le flux, Flexbox, Grid, le responsive, les médias, les états de formulaire, l’accessibilité, l’architecture, les animations, les container queries, le débogage, la performance et l’impression. Chaque concept comprend des explications et un exercice ; le cours inclut des exemples de code, cinq références externes et un projet final.

La passe a été limitée à l’édition du code et à des contrôles statiques des fichiers. Conformément à la consigne de l’utilisateur, aucune installation de dépendances, suite de tests ou compilation n’a été tentée. Le comportement dans le navigateur reste donc non vérifié pour cette modification.
