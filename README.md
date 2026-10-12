# Roadmap Full Stack 2026 — prototype React

## État

Prototype de migration aligné sur l’inventaire **V41**. Les fichiers de catalogue et tutoriels proviennent de V40 ; le manifeste V41 confirme que l’index, les 174 pages pédagogiques et la feuille de style sont identiques. Les tests React, le typecheck et le build local passent ; le parcours navigateur et le déploiement réel restent à valider.

## Déploiement GitHub Pages

Le dépôt inclut un workflow GitHub Actions dans `.github/workflows/deploy.yml`. Après avoir poussé le projet sur GitHub :

1. Ouvrir **Settings → Pages** dans le dépôt.
2. Dans **Build and deployment**, choisir **GitHub Actions** comme source.
3. Pousser un commit sur la branche `main` (ou lancer le workflow manuellement depuis l’onglet **Actions**).
4. Attendre la fin du workflow, puis ouvrir l’URL Pages affichée par GitHub.

Le workflow installe les dépendances avec npm, exécute la validation du catalogue, le contrôle TypeScript et les tests, construit `dist/` et déploie ce dossier. Les routes utilisent un `HashRouter` afin que les liens profonds fonctionnent sans règle de réécriture serveur. Les URL des ressources sont relatives, pour fonctionner sous le préfixe `/<nom-du-depot>/` de GitHub Pages.

Si la branche par défaut du dépôt n’est pas `main`, modifier le déclencheur `push.branches` dans `.github/workflows/deploy.yml` ou utiliser le lancement manuel.

## Prérequis

- Node.js LTS et npm

## Commandes

```bash
npm install
npm run dev
npm run typecheck
npm test
npm run build
npm run preview
```

## Contenu

- `public/lessons/` conserve les pages HTML source sans réécriture.
- `src/data/catalog.json` conserve le catalogue extrait de l’index V40, confirmé identique dans le manifeste V41.
- `src/App.tsx` fournit un index React avec recherche, filtres compétences/projets, thème clair/sombre mémorisé et page de lecture isolée.
- `docs/source-reference/` conserve l’index, le CSS et la documentation source de V41.

## Vues responsive

- **Mobile, jusqu’à 600 px :** une colonne de cartes, marges compactes et navigation de leçon sur plusieurs lignes.
- **Tablette, de 601 à 1023 px :** deux colonnes de cartes et en-tête de leçon en grille.
- **Navigateur desktop, dès 1024 px :** trois colonnes de cartes et conteneur centré.
- Contrôlé localement à 390, 768 et 1280 px ; les pages testées ne débordent pas horizontalement.

## Contrôles effectués depuis le prototype initial

- Le validateur du catalogue vérifie maintenant la présence de `public/style.css`, les 174 pages, l’absence des anciens liens `../index.html` et les liens HTML locaux entre tutoriels.
- La feuille de style source a été copiée à `public/style.css` afin de résoudre les références `../style.css` des tutoriels.
- Les liens de retour au catalogue ont été redirigés vers la route React `/` avec `target="_top"`. L’iframe autorise cette navigation uniquement après une action utilisateur (`allow-top-navigation-by-user-activation`).
- `node scripts/validate-catalog.mjs` passe après ces changements.
- Smoke test navigateur local réussi : filtres à 5 projets/169 compétences et chargement de la fiche Projet 1 dans l’iframe sur sa route HashRouter.
- Le bouton soleil/lune mémorise le choix du thème et le synchronise avec les pages HTML dans l’iframe.

## Limites connues de ce premier incrément

- Le catalogue compte 169 compétences et 5 projets, classifiés depuis le chapitre source `24-projets-pratiques` et contrôlés par le validateur. La comparaison exhaustive de toutes les entrées avec l’archive reste à compléter.
- Le rendu des tutoriels en iframe reste à tester sur un échantillon représentatif et dans le build de production. Le smoke test local ne couvre qu’une fiche projet. L’attribut `sandbox` reste restrictif : les scripts des pages héritées ne sont pas autorisés. La navigation vers le catalogue parent est permise uniquement après un clic utilisateur.
- `npm test` (7 tests), `npm run typecheck` et `npm run build` passent après installation des dépendances locales. `package-lock.json` est généré pour permettre les installations reproductibles avec `npm ci`.
- Le déploiement GitHub Pages est configuré par GitHub Actions ; il reste à vérifier sur un dépôt GitHub réel après publication.
- La progression et les favoris ne sont pas encore implémentés.

## Source

Archive utilisée pour ce prototype : `Roadmap_Full_Stack_2026_V41.zip`. Voir le rapport `migration_inventory_v41.json` à la racine de l’archive de travail livrée.


### Installation reproductible

Le `package-lock.json` généré doit être conservé avec le projet ; utilisez `npm ci` pour les installations reproductibles en CI.

### Référence de migration

La source de référence est désormais `Roadmap_Full_Stack_2026_V41.zip` (SHA-256 : `592e9b1213ee640b93d7951329d25c096adf7ba82fb4d743a335bbe4245fad1b`). Son manifeste indique que l’inventaire est identique à V40 ; seuls le README et le fichier de progression diffèrent. Les références V41 sont conservées dans `docs/source-reference/`.
