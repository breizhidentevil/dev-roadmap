import type { Course } from './types';
import { htmlCourse } from './htmlCourse';
import { cssCourse } from './cssCourse';
import { javascriptCourse } from './javascriptCourse';
import { typescriptCourse } from './typescriptCourse';
import { reactAdvancedModules } from './reactAdvancedModules';
import { stateManagementCourse } from './stateManagementCourse';
import { nodejsCourse } from './nodejsCourse';
import { sqlCourse } from './sqlCourse';
import { noSqlCourse } from './noSqlCourse';
import { postgresqlCourse } from './postgresqlCourse';
import { backendMigrationCourses } from './backendMigrationCourses';

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
  nodejsCourse,
  sqlCourse,
  noSqlCourse,
  postgresqlCourse,
  ...backendMigrationCourses,
];