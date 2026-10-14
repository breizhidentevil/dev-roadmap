<div align="center">

# Roadmap Full Stack 2026

### Un parcours de compétences web, du premier concept à la mise en production.

[![GitHub Actions](https://github.com/breizhidentevil/dev-roadmap/actions/workflows/deploy.yml/badge.svg)](https://github.com/breizhidentevil/dev-roadmap/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)

</div>

> **Prototype en cours de migration.** Le catalogue et les tutoriels sont disponibles ; la progression, les favoris et la validation complète avant livraison restent à réaliser.

## Le parcours en chiffres

| Chapitres | Compétences | Projets affichés | Cours | Modules de cours |
|:---:|:---:|:---:|:---:|:---:|
| **24** | **169** | **0** | **10** | **223** |

## Ce que l’application propose

- Recherche tolérante à la casse et aux accents.
- Filtre séparé pour les compétences et les projets.
- Lecture des tutoriels HTML conservés dans une iframe sandboxée.
- Parcours distincts pour HTML, CSS, JavaScript, TypeScript, React, gestion d’état React, Node.js, SQL, NoSQL et PostgreSQL ; chaque cours forme une section du catalogue.
- Le cours React approfondi couvre 21 modules, 105 sections pédagogiques et 105 exemples, des bases aux Hooks, React 19, tests, accessibilité, performance et déploiement.
- Le cours de gestion d’état React comprend 8 modules, 41 sections et 41 exemples sur Context + useReducer, Zustand, Redux Toolkit, Jotai, TanStack Query, persistance, tests, sécurité et choix d’architecture ; son projet final compare Zustand et Redux Toolkit.
- Une page par grand concept, avec navigation précédente/suivante et hashtags qui lancent une recherche ciblée.
- Le cours HTML comprend 21 concepts détaillés, des références normatives et pédagogiques, du code colorisé et un sélecteur **Code source / Aperçu HTML** sandboxé.
- Le cours CSS comprend 21 modules, 63 sections pédagogiques, 65 exemples, 14 références documentaires et un projet final responsive.
- Le cours JavaScript moderne comprend 26 modules, 78 sections pédagogiques, 77 exemples de code commentés, 26 exercices, 11 références documentaires et un projet final connecté.
- Thème clair ou sombre, mémorisé et appliqué aussi aux tutoriels.
- Mise en page adaptée au mobile, à la tablette et au navigateur desktop.
- Distinction explicite entre les cours (`/course/:slug`) et les fiches historiques de compétences (`/lesson/:slug`).
- Routes HashRouter et workflow GitHub Actions prêts pour GitHub Pages.

## Démarrage rapide

Prérequis : Node.js LTS et npm.

```bash
git clone https://github.com/breizhidentevil/dev-roadmap.git
cd dev-roadmap
npm ci
npm run dev
```

Vite affiche l’adresse locale dans le terminal, généralement <http://localhost:5173>.

## Commandes utiles

| Commande | Action |
|---|---|
| `npm run dev` | Démarre le serveur local |
| `npm test` | Exécute les tests Vitest |
| `npm run typecheck` | Vérifie les types TypeScript |
| `npm run validate:catalog` | Vérifie les entrées et fichiers du catalogue |
| `npm run build` | Produit le site dans `dist/` |
| `npm run preview` | Sert le build localement |

## Vues responsive

| Vue | Largeur | Présentation |
|---|---:|---|
| Mobile | Jusqu’à 600 px | Une colonne, marges compactes, navigation empilée |
| Tablette | 601 à 1023 px | Deux colonnes, en-tête de leçon en grille |
| Desktop | Dès 1024 px | Trois colonnes dans un conteneur centré |

Contrôlé localement à 390, 768 et 1280 px sans débordement horizontal.

## Déploiement

Le workflow [Build and deploy to GitHub Pages](.github/workflows/deploy.yml) valide le catalogue, exécute le typecheck et les tests, construit `dist/` puis publie l’artefact. Dans les paramètres du dépôt, sélectionner **Settings → Pages → GitHub Actions**.

Le déploiement réel et le rendu complet sur GitHub Pages restent à confirmer. Voir le [guide de publication](docs/GITHUB_PAGES.md).

## État de la migration

La validation statique du catalogue passe : 24 chapitres, 169 entrées (169 compétences et aucun projet affiché), identifiants uniques et 169 fichiers pédagogiques résolus. Les tests React, le typecheck et le build n’ont pas été relancés après les dernières corrections pédagogiques ; ils doivent être vérifiés dans Codex. Les concepts de cours restent séparés du catalogue source.

Avant de considérer la migration complète :

- comparer chaque identifiant, titre, description, ordre et chemin du catalogue à la source ;
- implémenter la progression et les favoris avec persistance locale ;
- compléter les tests navigateur sur plusieurs tutoriels et le build de production ;
- exécuter et vérifier le déploiement GitHub Pages.

Le [plan de migration](docs/PLAN_MIGRATION_REACT_ROADMAP_FULLSTACK_2026.md) et le [journal d’exécution](docs/MIGRATION_LOG.md) détaillent les travaux et limites.

## Source pédagogique

Le catalogue et les 174 pages proviennent de V40. Le manifeste V41 confirme que l’index, les tutoriels et la feuille de style sont identiques ; seules les documentations source diffèrent. Les références V40/V41 sont conservées dans [`docs/source-reference/`](docs/source-reference/).

## Cours React approfondis

Les cours React et Gestion d’état avancée ont été enrichis le 14 octobre 2026 avec des sections d’approfondissement et des ateliers pratiques dans chaque module. Voir `docs/REVUE_COURS_REACT_ET_GESTION_ETAT_2026-10-14.md` et `docs/GUIDE_ETUDE_REACT_ET_GESTION_ETAT.md`.


## Cours SQL complet

Le parcours SQL comprend 26 modules, 79 sections, 26 exercices progressifs et un projet final de réservation. Les exemples sont principalement orientés PostgreSQL. Voir `docs/COURS_SQL_COMPLET_2026-10-14.md`.

## Cours NoSQL

Cours approfondi de 26 modules, 78 sections et 26 exercices couvrant MongoDB, Redis, Cassandra, les bases orientées graphes, la cohérence distribuée et l’intégration Node.js/TypeScript. Voir `docs/COURS_NOSQL_2026-10-14.md`.


## Cours Node.js et PostgreSQL

Le cours Node.js et npm comprend 26 modules, 78 sections, 26 exercices et 15 références. Le cours PostgreSQL comprend 28 modules, 84 sections, 28 exercices avec corrigés indicatifs et 19 références. Ces nombres décrivent la structure des contenus ; ils ne signifient pas que tous les exemples ont été exécutés.

## Cours de spécialisation TypeScript / Node.js

Le premier cours de spécialisation est disponible dans [`docs/COURS_C01_HTTP_RESEAUX_NODEJS_2026-10-14.md`](docs/COURS_C01_HTTP_RESEAUX_NODEJS_2026-10-14.md). Il couvre le trajet d’une requête, HTTP, DNS, TLS, CORS, cache, timeouts et diagnostic, avec exercices corrigés et projet intégrateur. Voir aussi le [rapport C01](docs/REVUE_C01_HTTP_RESEAUX_2026-10-14.md) et le [plan de migration](docs/PLAN_MIGRATION_COURS_TYPESCRIPT_NODEJS.md). Le contenu est rédigé mais n’a pas encore été validé par une exécution complète des exemples.
