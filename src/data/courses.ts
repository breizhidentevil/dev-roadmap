import type { Course } from './types';
import { htmlCourse } from './htmlCourse';
import { cssCourse } from './cssCourse';
import { javascriptCourse } from './javascriptCourse';
import { typescriptCourse } from './typescriptCourse';
import { reactAdvancedModules } from './reactAdvancedModules';
import { stateManagementCourse } from './stateManagementCourse';

export const courses: Course[] = [
  htmlCourse,
  cssCourse,
  javascriptCourse,
  typescriptCourse,
  {
    id: 'react',
    title: 'React',
    category: 'Bibliothèque',
    tags: ['react', 'react-dom', 'jsx', 'hooks', 'typescript', 'accessibilité', 'tests', 'react-19'],
    description: 'Cours approfondi de React moderne : composants, JSX, état, Hooks, effets, API, formulaires, Context, routage, TypeScript, React 19, accessibilité, tests, performance et mise en production.',
    level: 'Débutant à avancé',
    duration: '20 à 30 heures selon les exercices',
    prerequisites: ['JavaScript moderne : fonctions, modules, tableaux, objets, promesses et async/await.', 'Bases de HTML, CSS et HTTP.', 'TypeScript recommandé pour les exemples typés, mais les concepts restent transposables à JavaScript.'],
    objectives: ['Construire une interface complète avec composants fonctionnels et JSX.', 'Modéliser un état fiable et des transitions explicites.', 'Synchroniser les données distantes et traiter les erreurs asynchrones.', 'Concevoir formulaires, navigation et interfaces accessibles.', 'Écrire des tests centrés sur les comportements utilisateur.', 'Mesurer les performances et préparer une application pour la production.'],
    modules: reactAdvancedModules,
    references: [
      { title: 'Documentation officielle React — Learn', url: 'https://react.dev/learn' },
      { title: 'Documentation officielle — Describing the UI', url: 'https://react.dev/learn/describing-the-ui' },
      { title: 'Documentation officielle — Adding Interactivity', url: 'https://react.dev/learn/adding-interactivity' },
      { title: 'Documentation officielle — Managing State', url: 'https://react.dev/learn/managing-state' },
      { title: 'Documentation officielle — Escape Hatches', url: 'https://react.dev/learn/escape-hatches' },
      { title: 'Documentation officielle — React 19', url: 'https://react.dev/blog/2024/12/05/react-19' },
      { title: 'React Router — Documentation', url: 'https://reactrouter.com/' },
      { title: 'Testing Library — React', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
      { title: 'WAI — WAI-ARIA Authoring Practices', url: 'https://www.w3.org/WAI/ARIA/apg/' },
      { title: 'TypeScript — JSX', url: 'https://www.typescriptlang.org/docs/handbook/jsx.html' }
    ],
    finalProject: {
      title: 'Application complète de gestion de cours',
      description: 'Construis une SPA React + TypeScript pour gérer un catalogue de cours : recherche, filtres, détail par URL, progression, favoris, formulaire de création, chargement d’une API, erreurs récupérables et préférences persistées. Le projet doit être déployable et documenté.',
      criteria: ['Composants et modules organisés par responsabilités.', 'État minimal, mises à jour immuables et transitions cohérentes.', 'Routes ouvrables directement et page 404.', 'Chargement, succès, vide, erreur et annulation des requêtes traités.', 'Formulaires validés côté client et contrôles critiques côté serveur.', 'Labels, clavier, focus et messages de statut accessibles.', 'Tests de composants couvrant les parcours essentiels.', 'Aucune clé secrète dans le bundle client.', 'Typecheck, tests et build exécutés en CI ; procédure de déploiement documentée.']
    }
  },
  stateManagementCourse,
  {
    id: 'nodejs',
    title: 'Node.js',
    category: 'Runtime',
    tags: ['nodejs', 'serveur', 'backend'],
    description: 'Exécuter JavaScript côté serveur et créer un service réseau observable, robuste et sûr.',
    level: 'Intermédiaire',
    duration: '5 à 6 heures',
    prerequisites: ['Maîtriser JavaScript, les modules et async/await.', 'Connaître les bases de HTTP.'],
    objectives: ['Comprendre runtime, event loop et modules.', 'Créer des routes et valider des entrées.', 'Gérer les erreurs, secrets et opérations asynchrones.', 'Tester et préparer un service pour la production.'],
    modules: [
      { id: 'runtime', title: '1. Runtime, modules et configuration', summary: 'Node.js fournit le runtime JavaScript serveur, les modules système et des API d’E/S non bloquantes.', concepts: ['ES modules, package.json et scripts npm', 'Variables d’environnement et configuration validée', 'Event loop : I/O asynchrones et travail CPU bloquant'], exercise: 'Initialise un serveur minimal en modules ES, valide sa configuration au démarrage et ajoute des scripts de test.' },
      { id: 'http', title: '2. HTTP et routes', summary: 'Un serveur reçoit une requête, valide méthode et chemin, appelle la logique applicative puis construit une réponse HTTP.', concepts: ['Méthodes, statuts, en-têtes et corps', 'Routes et séparation transport/logique métier', 'Limites de taille et parsing du corps'], exercise: 'Expose une API de tâches avec GET, POST et DELETE et retourne des codes cohérents.' },
      { id: 'donnees', title: '3. Validation et persistance', summary: 'Les données reçues restent non fiables ; une validation explicite précède toute logique métier ou écriture.', concepts: ['Schémas runtime et messages d’erreur stables', 'Persistance SQL via une couche dédiée', 'Transactions et limites des opérations concurrentes'], exercise: 'Ajoute création et mise à jour d’une ressource avec validation, contraintes et réponses d’erreur cohérentes.' },
      { id: 'robustesse', title: '4. Erreurs, sécurité et tâches', summary: 'Un service doit échouer de manière contrôlée et limiter les effets des entrées, secrets et appels externes.', concepts: ['Gestion centralisée des erreurs et logs sans secrets', 'Timeouts, annulation et retries bornés', 'Authentification, autorisation et protections HTTP'], exercise: 'Ajoute un délai maximal à un appel externe, journalise un identifiant de requête et masque les données sensibles.' },
      { id: 'production', title: '5. Tests et exploitation', summary: 'Le service doit être vérifiable sans dépendre de ressources externes et exposer les informations nécessaires à son exploitation.', concepts: ['Tests unitaires et intégration avec dépendances isolées', 'Health checks, arrêt gracieux et signaux', 'Logs structurés, configuration de production et déploiement'], exercise: 'Écris un test d’intégration pour une route et ajoute un endpoint de santé ainsi qu’un arrêt propre du serveur.' },
    ],
    finalProject: { title: 'API de réservation', description: 'Réalise une API avec validation, persistance SQL, authentification simple, logs et tests d’intégration.', criteria: ['Contrat HTTP documenté.', 'Erreurs et statuts cohérents.', 'Secrets et permissions traités explicitement.', 'Tests automatisés et procédure de démarrage reproductible.'] },
  },
  {
    id: 'sql',
    title: 'SQL',
    category: 'Langage',
    tags: ['sql', 'requêtes', 'relationnel'],
    description: 'Interroger et modifier des données relationnelles avec des requêtes lisibles, exactes et performantes.',
    level: 'Débutant à intermédiaire',
    duration: '4 à 5 heures',
    prerequisites: ['Aucun prérequis ; connaître les tableaux peut aider à comprendre les résultats.'],
    objectives: ['Écrire des requêtes SELECT précises.', 'Relier des tables avec des jointures.', 'Modifier les données en préservant les invariants.', 'Lire les risques de performance et l’usage des transactions.'],
    modules: [
      { id: 'select', title: '1. Lire des données', summary: 'SELECT exprime les colonnes souhaitées, les lignes filtrées et leur ordre ; les clauses doivent être comprises dans leur ordre logique.', concepts: ['SELECT, FROM, WHERE et ORDER BY', 'NULL, IS NULL et logique à trois valeurs', 'LIMIT/OFFSET et pagination de base'], exercise: 'Écris des requêtes de recherche de produits avec filtres optionnels, tri et pagination.', example: { language: 'sql', code: 'SELECT id, name, price\nFROM products\nWHERE active = TRUE\n  AND price >= 20\nORDER BY price DESC\nLIMIT 20;' } },
      { id: 'relations', title: '2. Jointures et agrégations', summary: 'Une jointure relie des lignes selon une clé ; un agrégat résume les lignes après filtrage et regroupement.', concepts: ['Clés primaires et étrangères', 'INNER JOIN et LEFT JOIN', 'COUNT, SUM, GROUP BY et HAVING'], exercise: 'Produis le total des commandes par client, y compris les clients sans commande.' },
      { id: 'ecritures', title: '3. Écritures et contraintes', summary: 'INSERT, UPDATE et DELETE modifient l’état ; les contraintes protègent les invariants même en cas de concurrence.', concepts: ['INSERT avec colonnes explicites', 'UPDATE/DELETE ciblés et vérifiés', 'NOT NULL, UNIQUE, CHECK et références'], exercise: 'Crée une commande avec lignes associées et définis les contraintes qui empêchent les quantités négatives.' },
      { id: 'transactions', title: '4. Transactions', summary: 'Une transaction regroupe des opérations atomiques ; les propriétés ACID décrivent les garanties à préserver.', concepts: ['BEGIN, COMMIT et ROLLBACK', 'Cohérence entre plusieurs écritures', 'Concurrence, isolation et verrouillages'], exercise: 'Simule un transfert entre deux comptes et démontre que les deux soldes changent ensemble ou pas du tout.' },
      { id: 'performance', title: '5. Modélisation et performance', summary: 'Une bonne requête repose sur un modèle adapté ; index et plans d’exécution se choisissent à partir de mesures.', concepts: ['Normalisation et relations n:n', 'Index et coût des écritures', 'EXPLAIN, cardinalité et requêtes N+1'], exercise: 'Analyse une requête lente, ajoute un index justifié et compare son plan avant/après.' },
    ],
    finalProject: { title: 'Base de données de réservation', description: 'Modélise utilisateurs, événements, créneaux et réservations ; écris les requêtes de consultation et les transactions critiques.', criteria: ['Clés et contraintes documentées.', 'Jointures et agrégats testés sur données de cas limites.', 'Écritures atomiques.', 'Choix des index justifiés par un plan d’exécution.'] },
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    category: 'Base de données',
    tags: ['postgresql', 'base-de-données', 'transactions'],
    description: 'Exploiter PostgreSQL au-delà du SQL standard : types, index, transactions concurrentes, migrations et opérations fiables.',
    level: 'Intermédiaire',
    duration: '5 à 6 heures',
    prerequisites: ['Avoir suivi le cours SQL ou connaître SELECT, JOIN, contraintes et transactions.'],
    objectives: ['Configurer une base et naviguer avec psql.', 'Choisir les types et contraintes PostgreSQL.', 'Comprendre plans, index et concurrence.', 'Préparer migrations, sauvegardes et droits.'],
    modules: [
      { id: 'prise-en-main', title: '1. Serveur et psql', summary: 'PostgreSQL sépare cluster, bases, schémas et rôles ; psql permet d’inspecter et d’administrer depuis le terminal.', concepts: ['Connexion, bases, schémas et search_path', 'Rôles, privilèges et moindre autorité', 'Configuration par environnement et sauvegarde de connexion'], exercise: 'Crée un rôle applicatif sans privilèges superuser, un schéma dédié et vérifie ses droits effectifs.' },
      { id: 'types', title: '2. Types, contraintes et fonctions', summary: 'Les types PostgreSQL rendent les données explicites ; les contraintes expriment les règles qui doivent toujours tenir.', concepts: ['numeric, timestamp avec fuseau, UUID et identity', 'CHECK, UNIQUE, contraintes différées et clés étrangères', 'RETURNING, valeurs par défaut et fonctions utiles'], exercise: 'Modélise des créneaux horaires avec dates cohérentes, unicité métier et retour des lignes insérées.' },
      { id: 'indexes', title: '3. Index et plans', summary: 'Le planificateur choisit une stratégie selon statistiques et coûts estimés ; un index doit correspondre aux requêtes réelles.', concepts: ['EXPLAIN et EXPLAIN ANALYZE', 'B-tree, index partiels et index composites', 'Mise à jour des statistiques et coût de maintenance'], exercise: 'Mesure une recherche fréquente, ajoute un index pertinent puis compare lecture, temps et coût d’écriture.' },
      { id: 'concurrence', title: '4. Transactions et concurrence', summary: 'MVCC permet des lectures cohérentes pendant les écritures ; l’isolation et les verrous contrôlent les conflits.', concepts: ['Read committed et repeatable read', 'Verrous de lignes, deadlocks et ordre de verrouillage', 'Contrainte d’unicité comme garantie contre les courses'], exercise: 'Teste deux réservations concurrentes sur le même créneau et garantis qu’une seule peut réussir.' },
      { id: 'migration', title: '5. Migrations et exploitation', summary: 'Les changements de schéma doivent rester compatibles avec l’application pendant leur déploiement et être récupérables.', concepts: ['Migrations versionnées et réversibles quand possible', 'Sauvegardes, restauration testée et rétention', 'Vacuum, connexions, logs et métriques de base'], exercise: 'Déploie une nouvelle colonne via ajout nullable, double écriture, remplissage progressif puis contrainte.' },
    ],
    finalProject: { title: 'Service de réservation robuste', description: 'Conçois et exploite le schéma PostgreSQL d’une API qui empêche les doubles réservations et supporte les évolutions.', criteria: ['Contraintes garantissant l’unicité métier.', 'Test de concurrence et transaction documentés.', 'Index évalués avec EXPLAIN ANALYZE.', 'Migration progressive et restauration testées.'] },
  },
];