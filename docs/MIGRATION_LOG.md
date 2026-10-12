# Journal de migration

Les statuts et blocages ci-dessous décrivent chaque passe au moment où elle a été exécutée. Les passes ultérieures les complètent ou les lèvent ; se référer à la dernière passe pour l’état courant.

## Passe MIG-001 — Inventaire initial disponible

- **Date :** 2026-10-12
- **Statut :** partiellement validée sur V40 ; attente de V41
- **Source utilisée :** `Roadmap_Full_Stack_2026_V40.zip`
- **SHA-256 source :** `e02920b6cc1380fb76acf1adc6ef6a078aaa5fb9f878554d2b84e06bcdae883b`
- **Vérification ZIP :** `unzip -t` réussi, aucune erreur de compression
- **Inventaire :** 178 fichiers source, dont 175 HTML, 2 Markdown et 1 CSS
- **Index :** 25 sections de chapitre et 174 liens vers des pages de leçon/projet
- **Copie de contenu :** 174 fichiers HTML copiés vers `public/lessons/` ; documentation et index source conservés sous `docs/source-reference/`
- **Validation catalogue :** `node scripts/validate-catalog.mjs` réussi : 25 chapitres, 174 entrées, 174 identifiants uniques, 174 fichiers locaux résolus
- **Limite importante :** V41 n’a pas été retrouvée dans la bibliothèque accessible pendant cette passe. V40 est la dernière archive source accessible identifiée ; le prototype ne doit pas être considéré comme aligné sur V41 tant qu’une comparaison n’a pas été faite.
- **Installation des dépendances :** `npm install --no-audit --no-fund` n’a pas terminé dans le délai imparti ; aucun test React, typecheck ou build Vite n’est déclaré réussi.
- **Prochaine action :** retrouver V41 si disponible ; sinon obtenir confirmation que V40 peut servir de base. Ensuite installer les dépendances dans un environnement réseau fonctionnel, exécuter typecheck/tests/build et corriger les erreurs.

## Passe MIG-002 — Socle React initialisé

- **Statut :** prototype source créé ; validation runtime en attente
- **Inclus :** React, TypeScript strict, Vite, React Router, catalogue JSON, index avec recherche, page de lecture en iframe isolée, 174 tutoriels HTML copiés, documentation de référence, test de catalogue et script de validation indépendant de dépendances
- **Contrôle exécuté :** `node scripts/validate-catalog.mjs` — réussi
- **Contrôles non exécutés :** `npm test`, `npm run typecheck`, `npm run build`, parcours navigateur et accessibilité complète
- **Risque à traiter :** vérifier le comportement des pages HTML dans l’iframe `sandbox` ; ne pas élargir les permissions sans analyse de sécurité.


## Passe MIG-003 — Ressources HTML et navigation héritées

- **Date :** 2026-10-12
- **Statut :** contrôles statiques réussis ; validation navigateur et build en attente
- **Défaut constaté :** les 174 pages contenaient `href="../style.css"`, mais la feuille de style n’était pas publiée à `public/style.css`. Les liens `../index.html` pouvaient aussi ouvrir l’application dans l’iframe au lieu de revenir au catalogue.
- **Fichiers modifiés :** `public/style.css` (copie de la feuille source V40), 174 fichiers sous `public/lessons/` (liens de retour convertis vers `/` avec `target="_top"`), `src/App.tsx` (autorisation de navigation supérieure uniquement après action utilisateur), `scripts/validate-catalog.mjs`, `package.json`, `README.md`, ce journal et le plan de migration.
- **Sécurité :** les scripts des tutoriels restent désactivés par `sandbox`. `allow-top-navigation-by-user-activation` limite la sortie de l’iframe à une navigation déclenchée par l’utilisateur.
- **Commande exécutée :** `node scripts/validate-catalog.mjs`
- **Résultat observé :** réussi — 25 chapitres, 174 entrées, 174 identifiants uniques, 174 fichiers présents, feuille de style présente, anciens liens de catalogue absents, liens HTML locaux validés.
- **Typecheck/tests/build :** non exécutés, car `node_modules` est absent ; une tentative précédente d’installation a dépassé le délai. Le test navigateur n’a pas été exécuté.
- **Installation hors ligne :** `npm install --offline --ignore-scripts --no-audit --no-fund` a échoué avec `ENOTCACHED` : le paquet `@testing-library/jest-dom` est absent du cache npm. Aucune dépendance n’a été installée par cette tentative.
- **Prochaine action :** obtenir un environnement avec accès au registre npm ou un cache de dépendances, puis exécuter typecheck, tests et build ; le rendu navigateur reste également à vérifier.

## Passe MIG-003b — Accessibilité de la recherche et tests d’interface préparés

- **Date :** 2026-10-12
- **Objectif :** améliorer le retour utilisateur de la recherche et préparer des tests d’interface reproductibles, sans toucher au contenu pédagogique source.
- **Fichiers modifiés :** `src/App.tsx` (compteur de résultats annoncé par une région `role="status"`/`aria-live="polite"`), `src/app.css` (style du compteur), `src/App.test.tsx` (tests du catalogue, de l’affichage initial, de la recherche sans accents et du cas sans résultat), `vite.config.ts` (environnement de test jsdom).
- **Validation exécutée :** `node scripts/validate-catalog.mjs`.
- **Résultat observé :** réussi — 25 chapitres, 174 entrées, 174 identifiants uniques, 174 fichiers présents, feuille de style partagée présente, liens locaux HTML validés.
- **Tests d’interface :** préparés mais non exécutés, car `node_modules` n’est pas présent et le cache npm ne contient pas les dépendances nécessaires. Le typecheck, le build et le navigateur restent non vérifiés.
- **Prochaine action :** disposer des dépendances dans un environnement réseau/cache compatible, lancer les tests, puis corriger toute erreur réelle avant de déclarer le prototype validé.

## MIG-004 — Préparation GitHub Pages

- Ajout de `.github/workflows/deploy.yml` pour construire, tester et publier `dist/` avec GitHub Actions.
- Ajout de `docs/GITHUB_PAGES.md` et instructions de configuration Pages dans le README.
- Passage de `BrowserRouter` à `HashRouter` pour éviter les 404 sur les routes de leçon dans GitHub Pages.
- Configuration de Vite avec `base: './'` et adaptation de la source iframe au préfixe de déploiement.
- Ajout de `public/.nojekyll`.
- Contrôles locaux prévus : validation du catalogue, vérification des fichiers de configuration et intégrité ZIP. Le build, les tests et le déploiement réel ne sont pas déclarés réussis sans dépendances installées et exécution GitHub Actions.


## MIG-005 — Fiabilisation de la CI GitHub Pages

- **Date :** 2026-10-12
- **Objectif :** éviter un échec précoce de GitHub Actions dû au cache npm configuré sans fichier lock suivi dans le dépôt et documenter la reproductibilité des dépendances.
- **Fichiers modifiés :** `package.json` (remplacement des étiquettes `latest` par des plages de versions explicites), `.github/workflows/deploy.yml` (suppression du cache npm sans lockfile et contrôle du lockfile généré), `.gitignore`, `README.md`, `docs/GITHUB_PAGES.md`.
- **Validation catalogue :** à relancer après cette passe.
- **Tests/build :** toujours bloqués localement ; `npm install --no-audit --no-fund` a dépassé 120 secondes. Aucun test React, typecheck ou build n'est déclaré réussi.
- **Point de vigilance :** après le premier workflow CI réussi, committer le `package-lock.json` généré et passer à `npm ci` pour des installations reproductibles.
- **Prochaine action :** exécuter la validation statique, vérifier l'intégrité de l'archive P4 et obtenir un résultat CI réel.


## MIG-006 — Alignement documentaire sur V41 et nouvelle tentative de validation

- **Date :** 2026-10-12
- **Source retrouvée :** `Roadmap_Full_Stack_2026_V41.zip` ; SHA-256 `592e9b1213ee640b93d7951329d25c096adf7ba82fb4d743a335bbe4245fad1b`.
- **Vérification source :** `unzip -t` réussi. Le manifeste V41 indique que l’inventaire est identique à V40 et que seuls `README.md` et `PROGRESSION_TUTORIELS.md` changent dans l’archive. Les pages HTML de tutoriels, l’index et la feuille de style ne changent pas.
- **Fichiers modifiés :** `docs/source-reference/README_V41.md`, `docs/source-reference/PROGRESSION_TUTORIELS_V41.md`, `src/App.tsx` (mention de version), `migration_inventory_v41.json` (source et blocage mis à jour).
- **Validation catalogue :** `node scripts/validate-catalog.mjs` — réussi : 25 chapitres, 174 entrées, 174 identifiants uniques, 174 fichiers résolus, feuille de style présente, aucun ancien lien de catalogue, références HTML locales validées.
- **Installation dépendances :** `npm install --package-lock-only --ignore-scripts --no-audit --no-fund --fetch-retries=0 --fetch-timeout=20000` — échec avec `EAI_AGAIN` lors de la résolution de `registry.npmjs.org`. Aucun `package-lock.json` n’a été produit.
- **Non exécutés :** tests React/Vitest, typecheck, build et navigateur, car les dépendances restent indisponibles. Aucun déploiement réel.
- **Prochaine action :** relancer l’installation sur une machine avec accès au registre npm, générer et committer `package-lock.json`, puis utiliser `npm ci` en CI avant les tests et le build.

## Passe MIG-007 — Classification des compétences et projets

- **Date :** 2026-10-12
- **Objectif :** rendre explicite la séparation compétences/projets demandée par le plan et ajouter un filtre de catalogue.
- **Source de classification :** chapitre `24-projets-pratiques` dans l’index de référence ; identifiants des cinq projets recoupés avec le catalogue.
- **Modifications :** type `LessonKind`, badges statistiques 169/5, filtre accessible Tout/Compétences/Projets, test d’interface des volumes et assertions de catégories dans le validateur statique. Les autres chapitres, dont la compétence `projets-complets`, restent classés comme compétences.
- **Validation exécutée :** `npm run validate:catalog` — réussi : 25 chapitres, 174 entrées, 169 compétences, 5 projets, 174 identifiants uniques et 174 fichiers résolus ; CSS et liens HTML locaux vérifiés.
- **Contrôle TypeScript éditeur :** aucun diagnostic sur `App.tsx`, `App.test.tsx`, `types.ts` et le validateur.
- **Tests React :** `npm test` non exécuté, commande bloquée car `vitest` n’est pas installé (`sh: 1: vitest: not found`). Typecheck, build et navigateur restent à faire après installation des dépendances.
- **Prochaine action :** installer les dépendances dans un environnement pouvant joindre le registre npm, exécuter tests/typecheck/build, puis vérifier le filtre et les iframes dans un navigateur.

## Passe MIG-008 — Validation locale avec dépendances installées

- **Date :** 2026-10-12
- **Dépendances :** `npm install --no-audit --no-fund` a installé le projet et généré `package-lock.json`. Ajout de `@types/react` et `@types/react-dom` pour le typecheck strict ; `tsconfig.app.json` référence `vite/client` afin de typer `import.meta.env`.
- **Correctifs révélés par Vitest :** nettoyage Testing Library entre tests ; sélecteurs alignés sur le rendu courant ; suppression de l’annonce live redondante de l’état vide, le compteur conservant l’annonce des résultats.
- **Tests :** `npm test` — réussi, 1 fichier, 5 tests.
- **Typecheck :** `npm run typecheck` — réussi.
- **Build :** `npm run build` — réussi, 42 modules transformés ; bundle JavaScript de 302,67 kB (94,25 kB gzip).
- **Catalogue :** `npm run validate:catalog` — réussi : 25 chapitres, 174 entrées, 169 compétences, 5 projets, 174 identifiants uniques et 174 fichiers résolus.
- **Smoke test navigateur :** sur Vite local, filtres testés à 5 projets et 169 compétences ; la route `/#/lesson/projet-1-site-frontend` ouvre la fiche dans l’iframe (`h1` chargé).
- **Limites restantes :** vérification responsive à plusieurs largeurs, échantillon représentatif des routes/iframes sur le build de production et déploiement GitHub Pages non exécutés.
- **Prochaine action :** compléter les tests navigateur sur plusieurs largeurs et le build de production, puis vérifier le workflow Pages sur le dépôt cible.

## Passe MIG-009 — Thème clair/sombre

- **Date :** 2026-10-12
- **Modifications :** bouton soleil/lune accessible dans les en-têtes catalogue et leçon ; choix mémorisé dans `localStorage` ; variables de thème pour l’application et styles sombres des tutoriels hérités ; synchronisation du thème avec le document iframe.
- **Tests :** `npm test` — réussi, 1 fichier et 7 tests ; `npm run typecheck`, `npm run build` et `npm run validate:catalog` réussis.
- **Navigateur :** bascule sombre/clair vérifiée sur le catalogue et une fiche iframe ; préférence persistée après rechargement ; largeur 390 px sans débordement horizontal.
- **Build :** 1 933 modules transformés ; bundle JavaScript 307,43 kB (96,19 kB gzip).
- **Limites :** audit visuel/accessibilité complet, autres largeurs, plusieurs tutoriels et build déployé restent à vérifier.

## Passe MIG-010 — Vues responsive mobile, tablette et desktop

- **Date :** 2026-10-12
- **Modifications :** breakpoints explicites dans `src/app.css` : mobile ≤600 px, tablette 601–1023 px, desktop ≥1024 px ; grille 1/2/3 colonnes ; navigation de leçon adaptée ; tailles de titre fixes par breakpoint.
- **Navigateur :** Vite local testé à 390, 768 et 1280 px ; respectivement 1, 2 et 3 colonnes, sans débordement horizontal du document ou de l’en-tête de leçon.
- **Tests :** `npm test` — réussi, 7/7 ; `npm run build` et `npm run validate:catalog` réussis.
- **Limites :** test du build de production dans un navigateur et audit d’autres largeurs restent à faire.

## Passe MIG-012 — Cours HTML approfondi fondé sur les standards

- **Date :** 2026-10-12
- **Sources consultées :** 11 références : standard WHATWG, guides MDN sur syntaxe, structure, liens, images, métadonnées, formulaires et tableaux ; tutoriels WAI sur structure de page, libellés de formulaires et tableaux accessibles.
- **Contenu :** le cours HTML passe à 15 modules couvrant syntaxe/parsing, document et métadonnées, texte, sémantique, URL, images responsives, médias/iframes, tableaux, formulaires, contrôles natifs, soumission/sécurité, éléments interactifs, chargement CSS/JS, accessibilité/internationalisation et validation.
- **Code et exercices :** 21 blocs de code avec exemples complets, plus un exercice par module et un projet final. Les explications sont rédigées en synthèse ; les 11 sources sont liées en fin de page.
- **Tests :** `npm test` — réussi, 11/11 ; `npm run typecheck`, `npm run build` et `npm run validate:catalog` réussis.
- **Navigateur :** `/course/html` affiche 15 modules, 21 exemples, 11 références et 15 liens de sommaire ; à 390 px, aucune barre de défilement horizontale.
- **Prochaine tâche :** MIG-014, comparaison exhaustive du catalogue source.

## Passe MIG-013 — Sections de langages et pages de concept

- **Date :** 2026-10-12
- **Catalogue :** remplacement de la section unique « Cours complets » par huit sections — HTML, CSS, JavaScript, TypeScript, React, Node.js, SQL et PostgreSQL — contenant 50 cartes de concepts.
- **Routes :** chaque carte ouvre `/course/:langage/:concept`; l’ancienne route `/course/:langage` redirige vers son premier concept. Les routes `/lesson/:slug` des compétences restent inchangées.
- **Hashtags :** chaque page affiche les hashtags du langage et du concept ; un clic ouvre le catalogue avec la recherche préremplie. L’index de recherche couvre résumé, notions, exercice et sections du concept.
- **Tests :** `npm test` — réussi, 12/12 ; `npm run typecheck`, `npm run build` et `npm run validate:catalog` réussis.
- **Navigateur :** huit sections et 50 concepts vérifiés ; `#syntaxe` préremplit la recherche et retourne le concept HTML ciblé ; 390 px sans débordement horizontal.
- **Prochaine tâche :** MIG-014, comparaison exhaustive du catalogue source.

## Passe MIG-014 — Audit HTML et exemples interactifs

- **Date :** 2026-10-12
- **Audit des sources :** comparaison du programme aux grandes familles du WHATWG HTML Living Standard, au répertoire des éléments, catégories de contenu et attributs globaux MDN, ainsi qu’aux guides WAI. Les références consultées sont liées dans la page ; le cours est rédigé en synthèse.
- **Cours HTML :** 21 concepts, notamment catégories/modèles de contenu, attributs globaux/popover, templates et Web Components, microdata/JSON-LD, éléments spécialisés, éléments obsolètes et compatibilité HTML/XHTML.
- **Exemples :** PrismLight colore les langages utilisés. Chaque exemple HTML propose Code source/Aperçu HTML ; l’aperçu extrait le body, désactive les scripts avec une iframe sandboxée et interdit les chargements réseau via CSP.
- **Tests :** `npm test` — réussi, 13/13, dont coloration, bascule et politique CSP.
- **Navigateur :** coloration Prism visible ; document complet affiché dans l’aperçu ; retour au code source vérifié.
- **Prochaine tâche :** MIG-015, comparaison exhaustive du catalogue source.

## Passe MIG-011 — Cours complets séparés des compétences

- **Date :** 2026-10-12
- **Modèle :** type `Course` indépendant de `Lesson`, avec catégorie, niveau, prérequis, objectifs, modules, exercices, exemples de code et projet final.
- **Cours créés :** HTML, CSS, JavaScript, TypeScript, React, Node.js, SQL et PostgreSQL. Cinq modules distincts par technologie ; HTML/CSS et JavaScript/TypeScript ne sont pas regroupés.
- **Navigation :** filtre « Cours » et routes `/course/:slug` ; les routes `/lesson/:slug` et les 174 pages HTML existantes restent inchangées.
- **Tests :** `npm test` — réussi, 10/10 ; `npm run typecheck`, `npm run build` et `npm run validate:catalog` réussis.
- **Navigateur :** les huit cours sont listés séparément ; `/course/css` affiche ses cinq modules et son projet final ; test mobile à 390 px sans débordement.
- **Prochaine tâche :** MIG-012, comparaison exhaustive du catalogue historique avec la source.
- **Prochaine tâche :** MIG-011, comparer intégralement les 174 entrées du catalogue avec la source.
