# Plan de migration — Roadmap Full Stack 2026 vers React

**Statut :** prototype P0 créé ; catalogue classifié (169 compétences, 5 projets) ; 72 concepts répartis sur huit cours, dont 21 concepts HTML et 21 CSS ; validation statique du catalogue réussie. Les tests, le typecheck et le build ne sont pas revalidés dans la dernière passe.  
**Référence utilisée à ce stade :** inventaire V41 (SHA-256 : `592e9b1213ee640b93d7951329d25c096adf7ba82fb4d743a335bbe4245fad1b`) ; index, tutoriels et CSS identiques à V40  
**Stack cible proposée :** React + TypeScript strict + Vite  
**Principe :** préserver le contenu existant, migrer par étapes vérifiables et conserver la version HTML de référence.

## 1. Objectif

Transformer le livrable statique en application React maintenable et testable, sans perdre de compétences, projets, exemples, liens ou consignes pédagogiques. Ce document guide les opérations à effectuer ; il ne prouve pas que les contrôles ont déjà été exécutés.

## 2. État initial connu et précautions

Le manifeste V41 consigne 178 entrées d’archive, 175 fichiers HTML, 25 chapitres et 174 pages pédagogiques. L’index source identifie 169 compétences et 5 projets ; le validateur local confirme ces volumes et la présence des 174 pages copiées. Le catalogue et les tutoriels du workspace proviennent de V40, dont l’index, les pages et le CSS sont identiques à V41 selon le manifeste. La publication de V41 dans `/Devoirs/` n’a pas été confirmée.

- [ ] Retrouver et vérifier l’archive V41 exacte (bloqué tant qu’elle n’est pas accessible).
- [ ] Calculer et consigner son SHA-256.
- [ ] Conserver la source en lecture seule et travailler dans une copie.
- [ ] Ne jamais remplacer V41/V40 par une version non validée.
- [ ] Ne marquer un contrôle comme réussi qu’après exécution et conservation du résultat.
- [ ] Ne pas réécrire les tutoriels sans justification documentée.
- [ ] Ne pas ajouter de backend ou d’authentification dans la première version sans besoin validé.

## 3. Résultat cible

Application React compilée en fichiers statiques avec :
- catalogue central des chapitres, compétences et projets ;
- navigation et URL internes stables ;
- recherche et filtres sur les métadonnées vérifiées ;
- consultation des tutoriels HTML existants ;
- progression locale et favoris, après stabilisation du catalogue ;
- interface responsive et navigable au clavier ;
- tests automatisés, documentation et build reproductible ;
- version HTML originale conservée comme référence.

### Hors périmètre initial
- Réécriture éditoriale des 169 tutoriels.
- Backend, comptes utilisateurs et synchronisation entre appareils.
- Exécution arbitraire de code utilisateur dans le navigateur.
- Conversion de toutes les pages en composants React.

## 4. Stack proposée

| Domaine | Choix initial | Raison |
|---|---|---|
| UI | React | Composants réutilisables |
| Langage | TypeScript strict | Modèle de données vérifiable |
| Build | Vite | Build statique simple |
| Routage | React Router, ou solution plus légère si suffisante | URL stables et navigation directe |
| Tests unitaires | Vitest | Tests de fonctions et composants |
| Tests UI | Testing Library | Vérifier les comportements visibles |
| Tests navigateur | Playwright si l’environnement le permet | Parcours réels |
| Persistance | `localStorage` au départ | Progression sans backend |

Tout changement de stack doit être consigné avec sa justification et les tests à refaire.

## 5. Architecture cible indicative

```text
roadmap-fullstack/
├── public/
│   └── lessons/                 # HTML existant
├── src/
│   ├── app/                     # démarrage et routes
│   ├── components/              # composants partagés
│   ├── features/
│   │   ├── roadmap/
│   │   ├── lessons/
│   │   ├── projects/
│   │   └── progress/
│   ├── data/                    # catalogue et schéma
│   ├── lib/                     # recherche et stockage
│   └── styles/
├── tests/
├── scripts/                     # inventaire et validation
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Ne créer cette arborescence qu’après inspection réelle des fichiers source.

## 6. Phases et critères de sortie

### Phase 0 — Sécuriser et inventorier la source

- [x] Retrouver V41 et vérifier que l’archive est lisible (intégrité ZIP consignée dans le rapport).
- [x] Consigner le SHA-256 de l’archive source dans le rapport d’inventaire.
- [x] Extraire une copie de travail distincte ; conserver les documents de référence.
- [x] Générer l’inventaire des chemins, tailles et extensions dans `inventory_source_v40.json`.
- [x] Compter chapitres, compétences, projets, pages HTML et entrées catalogue dans les rapports.
- [x] Identifier les liens internes et ressources partagées ; les références HTML locales sont contrôlées.
- [x] Détecter les liens locaux cassés et les identifiants dupliqués avec le validateur.
- [x] Comparer les comptages V41 aux rapports historiques ; V41 confirme l’inventaire pédagogique de V40.

**Livrables :** `inventory_source_v40.json`, `migration_inventory_v41.json` et empreinte SHA-256.  
**Sortie :** toutes les entrées attendues sont identifiées ; les écarts de comptage sont expliqués ou signalés.

### Phase 1 — Modéliser le catalogue

- [x] Définir les types `Chapter`, `Lesson` et `LessonKind` ; les projets réutilisent la forme `Lesson` et sont identifiés par le chapitre source.
- [x] Attribuer un identifiant stable à chaque entrée.
- [x] Extraire les métadonnées sans réécrire les textes.
- [x] Associer chaque entrée à son chemin HTML source.
- [x] Ne renseigner technologies, difficulté ou prérequis que si vérifiables.
- [ ] Valider le catalogue par schéma et script.
- [x] Détecter les identifiants dupliqués, fichiers absents et références HTML locales cassées.
- [x] Comparer les totaux au rapport de phase 0.

**Livrables :** catalogue JSON/TypeScript, schéma et rapport de cohérence.  
**Sortie :** chaque entrée attendue est référencée une fois, sauf exceptions documentées.

### Phase 2 — Construire le socle React

- [x] Initialiser React, TypeScript strict et Vite.
- [x] Ajouter `dev`, `build`, `preview`, `typecheck` et `test`.
- [ ] Configurer lint et formatage si la configuration reste reproductible.
- [x] Créer les routes et composants de base.
- [x] Créer accueil, détail générique, états vides et page introuvable.
- [ ] Vérifier ouverture directe d’une URL et navigation retour.
- [ ] Définir des URL stables sans collision.
- [x] Tester le build de production sur les chemins de livraison ; test navigateur du chemin GitHub Pages encore requis.

**Sortie :** démarrage et build réussis ; une entrée s’ouvre par URL sans erreur bloquante.

### Phase 3 — Réutiliser le HTML

- [x] Choisir un mode d’affichage isolant les tutoriels du contexte de l’application (iframe sandboxée ; validation navigateur encore requise).
- [ ] Évaluer une page séparée ou un `iframe` avec politique de sécurité adaptée.
- [ ] Vérifier navigation retour, encodage, accents, images, CSS, code et liens relatifs.
- [ ] Empêcher les scripts des tutoriels d’accéder aux données de progression.
- [ ] Tester des pages courtes, longues, avec images, ancres et ressources relatives.
- [ ] Documenter les pages incompatibles.
- [ ] Ne convertir vers React ou Markdown que si un bénéfice concret est démontré.

**Sortie :** rendu acceptable sur l’échantillon et problèmes de sécurité/chemins traités.

### Phase 4 — Reproduire les fonctions essentielles

- [x] Reproduire l’index des chapitres.
- [x] Afficher les 169 compétences et 5 projets confirmés par l’index source et le manifeste V41.
- [x] Implémenter la navigation chapitre → compétence → projet.
- [x] Ajouter une recherche tolérant casse et accents.
- [x] Ajouter des filtres basés sur la séparation source du chapitre `24-projets-pratiques`.
- [x] Gérer résultats vides et nombre de résultats.
- [x] Vérifier statiquement les routes catalogue et les liens HTML locaux avec `scripts/validate-catalog.mjs` ; test navigateur encore requis.
- [x] Organiser huit langages en sections et 72 concepts en pages `/course/:slug/:conceptId`, avec hashtags menant à la recherche ; conserver les fiches `/lesson/:slug`.
- [ ] Comparer le catalogue affiché au catalogue source.

**Sortie :** aucune entrée source perdue ; fonctions principales accessibles sans navigation cassée.

### Phase 5 — Progression et favoris

- [ ] Définir les états de progression et leur signification.
- [ ] Versionner la clé de stockage.
- [ ] Sauvegarder et restaurer progression/favoris.
- [ ] Gérer données absentes, invalides ou anciennes sans planter.
- [ ] Envisager export/import JSON si utile.
- [ ] Indiquer que les données locales ne sont pas synchronisées entre appareils.
- [ ] Tester rafraîchissement, réouverture et erreurs de stockage.

**Sortie :** données conservées lors d’un rafraîchissement normal ; données invalides traitées proprement.

### Phase 6 — Qualité, accessibilité et performance

- [ ] Vérifier titres, labels, contraste et focus visible.
- [ ] Tester les parcours au clavier.
- [x] Tester les vues mobile/tablette/desktop à 390, 768 et 1280 px ; valider le build `dist` dans un navigateur reste à faire.
- [ ] Vérifier les liens externes et noter ceux non vérifiés.
- [ ] Contrôler console et requêtes réseau du build de production.
- [ ] Tester routes directes, inconnues et chemin de base de déploiement.
- [x] Exécuter tests unitaires et composants : Vitest 7/7, typecheck et build réussis ; validation navigateur complète encore requise.
- [ ] Contrôler la taille du build et les dépendances inutiles.
- [ ] Distinguer validation statique, rendu simulé et test réel dans le navigateur.

**Sortie :** contrôles exécutés ; défauts restants consignés avec gravité, impact et décision.

### Phase 7 — Documentation et livraison

- [ ] Documenter prérequis, installation, commandes et dépannage.
- [ ] Documenter architecture, catalogue et ajout d’un tutoriel.
- [ ] Décrire les limites et tests non exécutés.
- [ ] Générer rapports d’inventaire et de tests.
- [ ] Produire une archive versionnée distincte de la source.
- [ ] Calculer SHA-256 et vérifier l’intégrité.
- [ ] Extraire l’archive finale dans un nouveau répertoire et refaire les contrôles essentiels.
- [ ] Comparer les totaux et identifiants à la source.
- [ ] Ne publier qu’après validation des critères de sortie.
- [ ] Conserver la version HTML et la procédure de retour arrière.

**Sortie :** archive reproductible, vérifiée et documentée, avec preuves des tests réellement exécutés.

## 7. Règles de travail à chaque passe

1. Lire ce plan et le journal avant toute modification.
2. Choisir une tâche atomique avec un identifiant (ex. `MIG-001`).
3. Limiter une passe à un objectif vérifiable ; ne pas dépasser cinq éléments de contenu par lot de corrections.
4. Modifier uniquement la copie de travail.
5. Exécuter les contrôles pertinents immédiatement après chaque modification.
6. Consigner les commandes réellement exécutées, résultats, erreurs et limites.
7. Ne cocher une tâche qu’après preuve d’exécution.
8. En cas d’échec, laisser la tâche ouverte et documenter la cause.
9. Ne pas déclarer une phase terminée avant son critère de sortie.
10. Versionner les rapports et archives ; ne pas écraser les résultats précédents.

## 8. Contrôles automatisés à prévoir

- inventaire et empreintes de fichiers ;
- validation du catalogue et identifiants uniques ;
- vérification des références de fichiers ;
- comparaison des totaux source/catalogue/application ;
- contrôle des routes et liens internes ;
- `tsc --noEmit`, lint, tests et build ;
- tests navigateur si l’environnement le permet ;
- contrôle de l’archive finale après extraction.

Un rendu obtenu par injection du HTML dans un environnement artificiel ne prouve pas, à lui seul, que la navigation réelle fonctionne sur le build de production.

## 9. Indicateurs de réussite

| Indicateur | Cible |
|---|---|
| Entrées pédagogiques perdues | 0 |
| Identifiants dupliqués | 0 |
| Références vers fichiers absents | 0, hors exceptions documentées |
| Erreurs TypeScript | 0 |
| Tests critiques échoués | 0 |
| Routes principales testées | 100 % des routes définies |
| Défauts connus non documentés | 0 |
| Archive finale réouverte et contrôlée | Oui |
| SHA-256 de livraison consigné | Oui |
| Source historique conservée | Oui |

La couverture de code ne remplace ni les tests des parcours critiques ni la comparaison du contenu.

## 10. Risques

| Risque | Mesure |
|---|---|
| Tutoriel perdu | Inventaire et comparaison automatique |
| Liens relatifs cassés | Tests sur les chemins réels et le build final |
| Rendu différent | Échantillon représentatif et comparaison visuelle |
| Scripts hérités non fiables | Séparation du contenu et isolation adaptée |
| Migration trop large | Phases courtes, critères de sortie |
| Dépendance à un serveur | Build statique et test hors ligne si requis |
| Progression perdue | Stockage versionné et tests |
| Environnement de test indisponible | Déclarer le contrôle bloqué, jamais réussi |

## 11. Journal d’exécution

### Passe 0 — Création du plan

- **Date :** 2026-10-12
- **Statut :** plan rédigé ; migration non commencée
- **Actions :** stratégie incrémentale, phases et critères définis
- **Tests de migration exécutés :** aucun
- **Blocages :** archive V41 et environnement de travail à vérifier
- **Prochaine action :** retrouver V41, vérifier l’empreinte et générer l’inventaire réel

### Modèle à copier pour chaque passe

```text
### Passe N — [objectif]
- Date :
- Phase :
- Statut : non commencée / en cours / bloquée / validée
- Fichiers consultés :
- Fichiers modifiés :
- Actions réalisées :
- Commandes réellement exécutées :
- Résultats observés :
- Tests réussis :
- Tests échoués :
- Tests non exécutés et raison :
- Décisions prises :
- Risques ou régressions :
- Prochaine action :
```

## 12. Prochaines étapes

Les exécutions et résultats détaillés sont conservés dans [le journal de migration](MIGRATION_LOG.md). Les contrôles locaux jusqu’à MIG-014 sont réussis ; les tâches restantes sont :

1. **MIG-015 — Comparer le catalogue à la source :** vérifier l’ensemble des identifiants, titres, descriptions, ordre et chemins des 174 entrées.
2. **Validation navigateur complète :** tester routes directes et inconnues, navigation retour, plusieurs tutoriels et iframes, largeurs mobile/desktop et build de production.
3. **Phase 5 — Progression et favoris :** définir les états, stocker et restaurer les données versionnées, gérer les données invalides et ajouter les tests correspondants.
4. **Livraison :** finir les contrôles d’accessibilité et de performance, exécuter GitHub Actions sur le dépôt cible, puis produire et vérifier une archive de livraison.

Ne pas déclarer la migration livrée avant que ces vérifications et la procédure de retour arrière soient documentées.
