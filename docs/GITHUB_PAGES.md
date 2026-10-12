# Publication sur GitHub Pages

## Configuration du dépôt

1. Pousser le contenu du dossier du projet dans un dépôt GitHub.
2. Vérifier que la branche principale s'appelle `main` (sinon adapter `.github/workflows/deploy.yml`).
3. Dans **Settings → Pages → Build and deployment**, choisir **GitHub Actions**.
4. Aller dans **Actions**, ouvrir le workflow **Build and deploy to GitHub Pages** et vérifier qu'il se termine avec succès.
5. L'URL publiée est visible dans le résumé du job `deploy` et dans **Settings → Pages**.

## Ce que fait le workflow

- Installe les dépendances avec npm.
- Valide les 25 chapitres et les 174 entrées du catalogue source V40.
- Exécute le contrôle TypeScript et les tests Vitest.
- Construit le site avec Vite et déploie le répertoire `dist`.
- Se déclenche sur chaque push sur `main` et peut être lancé manuellement.

## Décisions de compatibilité

- `HashRouter` évite les erreurs 404 sur les routes de leçon lors d'un accès direct ou d'un rechargement sous GitHub Pages.
- `base: './'` et les URL d'iframe calculées depuis `import.meta.env.BASE_URL` prennent en charge le préfixe du dépôt.
- `public/.nojekyll` évite que Jekyll ignore des chemins publiés.

## Limites

Le workflow n'a pas encore été exécuté sur GitHub depuis cet environnement. La publication effective, les permissions du dépôt et le rendu navigateur devront être confirmés après le premier push. Le catalogue provient de V40 ; le manifeste V41 confirme que l'index, les pages et le CSS sont identiques. Seules les documentations source diffèrent.


## Reproductibilité des dépendances

Les dépendances sont déclarées dans `package.json` et `package-lock.json` est maintenant généré localement. Le workflow exécute encore `npm install` et vérifie le lockfile. Pour des installations CI strictement reproductibles, versionner le lockfile puis remplacer cette commande par `npm ci`. Le cache npm de `setup-node` reste désactivé tant que ce changement n'est pas fait.
