import type { Course } from './types';
import { cssAdvancedModules } from './cssAdvancedModules';

export const cssCourse: Course = {
  id: 'css',
  title: 'CSS',
  category: 'Langage',
  tags: ['css', 'mise-en-page', 'responsive', 'accessibilite', 'design-system'],
  description: 'Cours approfondi de CSS, de la syntaxe et de la cascade aux layouts modernes, aux composants, aux préférences d’accessibilité, au débogage et à la performance. Chaque module associe concepts, explications, exemples copiables et exercices progressifs.',
  level: 'Débutant à avancé',
  duration: '21 concepts · 28 à 40 heures avec les exercices et le projet',
  prerequisites: ['Savoir lire un document HTML et reconnaître les éléments, attributs et classes.', 'Savoir créer des fichiers texte et les ouvrir dans un navigateur.', 'Aucun prérequis en JavaScript : les interactions sont abordées depuis leur représentation CSS.'],
  objectives: [
    'Expliquer la cascade, l’héritage, la spécificité et les couches sans recourir à des surcharges au hasard.',
    'Choisir des sélecteurs, des unités et des propriétés qui résistent à l’évolution du HTML.',
    'Maîtriser le modèle de boîte, la typographie, les couleurs et les états des composants.',
    'Construire des layouts solides avec le flux normal, Flexbox, Grid et les container queries.',
    'Concevoir une interface responsive qui reste utilisable au zoom, au clavier et avec des préférences système différentes.',
    'Diagnostiquer les problèmes avec les outils du navigateur et maintenir une architecture CSS lisible.',
  ],
  modules: [
    {
      id: 'fondations',
      title: '1. Modèle mental, syntaxe et branchement à HTML',
      summary: 'CSS décrit la présentation d’un document : le navigateur associe des règles aux éléments du DOM, calcule les valeurs de propriétés, construit les boîtes puis peint le résultat. Comprendre cette chaîne aide à séparer structure, style et comportement.',
      concepts: [
        'Une règle contient un sélecteur et un bloc de déclarations ; chaque déclaration associe une propriété à une valeur.',
        'Une feuille externe reliée avec link rel="stylesheet" sépare les styles du contenu et facilite la réutilisation.',
        'Le navigateur parse le CSS ; une déclaration invalide est généralement ignorée sans empêcher les autres règles valides.',
        'Les styles peuvent venir de l’agent utilisateur, de feuilles de l’auteur, d’attributs style et d’autres mécanismes soumis à la cascade.',
        'CSS n’est ni un langage de balisage comme HTML, ni un langage général de programmation : il décrit des contraintes de présentation.',
      ],
      sections: [
        { title: 'Une règle CSS de bout en bout', body: 'Un sélecteur indique les éléments concernés. Les déclarations entre accolades définissent les propriétés et valeurs. Le point-virgule termine chaque déclaration et doit être conservé pour éviter les erreurs lors de l’ajout d’une propriété. Les commentaires utilisent la forme /* ... */. Le nom d’une classe dans CSS commence par un point, alors que dans HTML la valeur de class ne contient pas ce point. Une classe peut être partagée par plusieurs éléments et un élément peut porter plusieurs classes séparées par des espaces.', examples: [{ title: 'Une règle simple', language: 'css', code: `/* Une classe peut être réutilisée dans tout le document. */
.notice {
  color: #17324d;
  background-color: #eaf3ff;
  padding: 1rem;
  border-inline-start: 0.25rem solid #2457a7;
}` }] },
        { title: 'Relier la feuille de style et séparer les responsabilités', body: 'La méthode habituelle consiste à créer un fichier .css et à le relier dans le head du document HTML. Le chemin relatif est calculé depuis le document courant ; une casse incorrecte ou un mauvais chemin peut empêcher le chargement. Les styles en ligne peuvent être utiles pour certains cas contrôlés, mais ils compliquent souvent les thèmes, la réutilisation et les overrides. Le HTML doit conserver la structure et le sens ; CSS s’occupe de la présentation et JavaScript, lorsque nécessaire, de la logique interactive.', examples: [{ title: 'Document HTML et fichier CSS', language: 'html', code: `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Découvrir CSS</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <main class="page">
      <h1>Découvrir CSS</h1>
      <p class="notice">Le contenu garde son sens sans la feuille de style.</p>
    </main>
  </body>
</html>` }, { title: 'Feuille styles.css', language: 'css', code: `body { margin: 0; font-family: system-ui, sans-serif; }
.page { width: min(100% - 2rem, 68rem); margin-inline: auto; }
.notice { padding: 1rem; background: #eaf3ff; }` }] },
        { title: 'Le navigateur calcule un résultat, pas une liste de commandes', body: 'Les déclarations ne sont pas exécutées ligne après ligne comme des instructions impératives. Plusieurs règles peuvent cibler le même élément et la cascade décide quelles valeurs sont retenues. Certaines propriétés héritent, d’autres non. Les valeurs relatives sont calculées selon leur contexte et les contraintes du layout influencent la taille réellement utilisée. Quand un style semble ignoré, vérifie le chargement du fichier, la validité de la déclaration, le sélecteur et la cascade avant d’ajouter une nouvelle règle.', examples: [{ title: 'Deux règles concurrentes', language: 'css', code: `p { color: #333; }
.intro { color: #174ea6; }

/* Un paragraphe class="intro" prend la couleur de .intro
   si les autres conditions de cascade sont égales. */` }] },
      ],
      exercise: 'Crée une page HTML avec une feuille CSS externe. Ajoute une classe réutilisable, une règle pour le body et une règle conflictuelle volontaire ; utilise DevTools pour identifier la déclaration gagnante.',
      example: { language: 'css', code: `:root { --text: #20252b; --surface: #fff; --accent: #2457a7; }
body { margin: 0; color: var(--text); background: var(--surface); font-family: system-ui, sans-serif; }
.page { width: min(100% - 2rem, 70rem); margin-inline: auto; }
.button { color: white; background: var(--accent); padding: 0.7em 1em; border: 0; border-radius: 0.4rem; }` },
    },
    ...cssAdvancedModules,
  ],
  references: [
    { title: 'MDN — Apprendre CSS', url: 'https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics' },
    { title: 'MDN — Référence CSS', url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
    { title: 'MDN — Cascade et héritage', url: 'https://developer.mozilla.org/fr/docs/Web/CSS/Cascade' },
    { title: 'web.dev — Learn CSS', url: 'https://web.dev/learn/css/' },
    { title: 'W3C — CSS Specifications', url: 'https://www.w3.org/Style/CSS/' },
    { title: 'MDN — Sélecteurs CSS', url: 'https://developer.mozilla.org/fr/docs/Web/CSS/CSS_selectors' },
    { title: 'MDN — Cascade et couches', url: 'https://developer.mozilla.org/fr/docs/Web/CSS/CSS_cascade/Cascade' },
    { title: 'MDN — Flexbox', url: 'https://developer.mozilla.org/fr/docs/Web/CSS/CSS_flexible_box_layout' },
    { title: 'MDN — CSS Grid', url: 'https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout' },
    { title: 'MDN — Media queries', url: 'https://developer.mozilla.org/fr/docs/Web/CSS/CSS_media_queries' },
    { title: 'MDN — Container queries', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries' },
    { title: 'MDN — Animations CSS', url: 'https://developer.mozilla.org/fr/docs/Web/CSS/CSS_animations' },
    { title: 'W3C WAI — Understanding contrast minimum', url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html' },
    { title: 'MDN — prefers-reduced-motion', url: 'https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-reduced-motion' },
  ],
  finalProject: {
    title: 'Interface responsive de réservation pour un lieu culturel',
    description: 'Construis l’interface d’un lieu culturel fictif : en-tête, navigation, présentation du lieu, grille d’événements, filtres, cartes de réservation, formulaire et pied de page. Le HTML fournit la structure sémantique ; le CSS gère la hiérarchie visuelle, les layouts, les états, le responsive, les préférences et l’impression.',
    criteria: [
      'Les styles sont répartis de façon lisible et utilisent des jetons CSS sémantiques pour les couleurs, espacements, rayons et typographie.',
      'La page utilise le flux normal, Flexbox et Grid de façon adaptée, sans positionnement arbitraire pour structurer le contenu.',
      'Les layouts s’adaptent à 320, 768, 1024 et 1440 pixels sans débordement horizontal inexpliqué.',
      'Les états hover, focus-visible, disabled et invalid sont visibles et compréhensibles ; le focus n’est jamais supprimé sans remplacement.',
      'Le contraste, le zoom, le texte long, la réduction du mouvement et le thème système sont vérifiés.',
      'Les images conservent ou recadrent leurs proportions de façon intentionnelle ; leur place est réservée pour limiter les décalages.',
      'La page reste lisible en impression et les contrôles purement interactifs inutiles à l’impression sont masqués.',
      'Le projet comprend une note expliquant les choix de layout, les conventions CSS et les vérifications manuelles réalisées.',
    ],
  },
};
