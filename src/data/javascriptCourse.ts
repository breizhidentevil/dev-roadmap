import type { Course } from './types';
import { javascriptAdvancedModules } from './javascriptAdvancedModules';

export const javascriptCourse: Course = {

  "id": "javascript",
  "title": "JavaScript moderne",
  "category": "Langage",
  "tags": [
    "javascript",
    "ecmascript",
    "dom",
    "asynchrone",
    "modules",
    "securite"
  ],
  "description": "Cours approfondi de JavaScript moderne, des valeurs et fonctions à la programmation asynchrone, au DOM, aux API navigateur, à la sécurité, aux tests et à la performance. Le parcours distingue le langage ECMAScript des API propres au navigateur et à Node.js.",
  "level": "Débutant à avancé",
  "duration": "26 concepts · 35 à 50 heures avec exercices et projet",
  "prerequisites": [
    "Savoir lire un document HTML et reconnaître les éléments et attributs.",
    "Savoir créer des fichiers texte et utiliser un navigateur.",
    "Aucune connaissance préalable de JavaScript n’est nécessaire ; les concepts sont introduits progressivement."
  ],
  "objectives": [
    "Comprendre les types dynamiques, la portée, les fonctions, les objets et les collections.",
    "Écrire du code lisible en utilisant les fonctionnalités modernes d’ECMAScript.",
    "Organiser un projet avec des modules ES et des contrats explicites.",
    "Manipuler le DOM et les événements sans injection HTML ni perte d’accessibilité.",
    "Maîtriser Promises, async/await, fetch, annulation et états d’erreur.",
    "Appliquer les bases de sécurité, tests, débogage et performance du JavaScript navigateur."
  ],
  "references": [
    {
      "title": "MDN — JavaScript Guide",
      "url": "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide"
    },
    {
      "title": "MDN — Référence JavaScript",
      "url": "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference"
    },
    {
      "title": "ECMA-262 — Spécification ECMAScript",
      "url": "https://tc39.es/ecma262/"
    },
    {
      "title": "MDN — Modules JavaScript",
      "url": "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules"
    },
    {
      "title": "MDN — Promises",
      "url": "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises"
    },
    {
      "title": "MDN — Fetch API",
      "url": "https://developer.mozilla.org/fr/docs/Web/API/Fetch_API"
    },
    {
      "title": "MDN — DOM",
      "url": "https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model"
    },
    {
      "title": "web.dev — Learn JavaScript",
      "url": "https://web.dev/learn/javascript"
    },
    {
      "title": "OWASP — Cross Site Scripting Prevention Cheat Sheet",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"
    },
    {
      "title": "MDN — JavaScript execution model",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model"
    },
    {
      "title": "Node.js — ECMAScript modules",
      "url": "https://nodejs.org/api/esm.html"
    }
  ],
  "finalProject": {
    "title": "Catalogue de livres connecté, filtrable et testable",
    "description": "Construis une petite application sans framework qui affiche un catalogue de livres, recherche par titre, filtre par disponibilité, ouvre une fiche détaillée et conserve les favoris. Les données peuvent provenir d’un fichier JSON local ou d’une API publique ; les états chargement, erreur, vide et succès doivent être traités explicitement. Le projet doit rester accessible au clavier et ne jamais insérer directement des chaînes utilisateur dans innerHTML.",
    "criteria": [
      "Modules séparés pour données, logique métier, rendu et démarrage.",
      "Fonctions pures pour recherche, filtrage et calculs ; tests des cas limites.",
      "État de chargement, erreur réseau, résultat vide et succès clairement présentés.",
      "Utilisation de fetch avec vérification de response.ok, parsing et annulation si nécessaire.",
      "DOM construit avec createElement/textContent ou une stratégie sûre équivalente.",
      "Formulaires labellisés, parcours clavier, focus visible et messages compréhensibles.",
      "Favoris persistés avec gestion des données de stockage invalides.",
      "Aucun secret dans le code client ; validation serveur expliquée si une API est utilisée.",
      "Documentation des choix, instructions de lancement et limites connues."
    ]
  }
,
  modules: [
{
      "id": "fondations",
      "title": "1. Syntaxe, expressions et premiers scripts",
      "summary": "Prendre en main le fichier JavaScript, les instructions, expressions, commentaires et outils de la console avant d’aborder les structures du langage.",
      "concepts": [
        "Instructions et expressions : une expression produit une valeur.",
        "Commentaires, noms, conventions et erreurs de syntaxe.",
        "Console du navigateur, DevTools et chargement de script externe.",
        "Séparer HTML, CSS et JavaScript par responsabilité."
      ],
      "exercise": "Crée une page HTML avec un fichier main.js externe. Affiche trois valeurs, déclenche une erreur volontaire puis retrouve sa cause dans la console.",
      "sections": [
        {
          "title": "Instructions et expressions",
          "body": "Une instruction décrit une action ; une expression produit une valeur. Le point-virgule termine une instruction, même si l’insertion automatique de points-virgules peut parfois masquer un oubli. Écris des expressions simples, utilise des noms explicites et évite les chaînes d’opérations difficiles à lire.",
          "examples": [
            {
              "title": "Exemple de base",
              "language": "javascript",
              "code": "const subtotal = 3 * 12;\nconst message = `Sous-total : ${subtotal} €`;\nconsole.log(message);"
            }
          ]
        },
        {
          "title": "Console et erreurs",
          "body": "La console sert à observer les valeurs et erreurs, mais les logs ne doivent pas rester comme unique stratégie de diagnostic. Les erreurs affichent généralement un type, un message et une pile d’appels. Clique sur la source signalée, reproduis le problème et inspecte les variables au point où elles divergent.",
          "examples": [
            {
              "title": "Erreur intentionnelle",
              "language": "javascript",
              "code": "const price = 12;\nconsole.log(price.toUpperCase()); // TypeError : number n’a pas cette méthode"
            }
          ]
        },
        {
          "title": "Relier le script à HTML",
          "body": "Un fichier séparé facilite la maintenance et le cache. script defer attend l’analyse du document avant l’exécution ; type=\"module\" fournit les modules ES et est différé par défaut. Évite les attributs onclick en ligne : les écouteurs dans le code rendent les responsabilités plus claires.",
          "examples": [
            {
              "title": "Script externe",
              "language": "html",
              "code": "<script type=\"module\" src=\"./main.js\"></script>"
            }
          ]
        }
      ]
    },
{
      "id": "conditions-boucles-intro",
      "title": "2. Conditions et boucles : premières transformations",
      "summary": "Lire et écrire les structures de contrôle qui permettent de choisir une branche et de répéter une opération.",
      "concepts": [
        "if/else et opérateur conditionnel.",
        "Boucles for, while et for...of.",
        "Compteurs, limites, break et continue.",
        "Transformer une liste avec une boucle avant d’étudier les méthodes de tableaux."
      ],
      "exercise": "Parcours une liste de notes, compte les notes valides et calcule la moyenne sans diviser par zéro.",
      "sections": [
        {
          "title": "Branches",
          "body": "Les conditions évaluent une expression en contexte booléen. Une clause de garde qui sort tôt peut éviter des blocs profondément imbriqués. L’opérateur conditionnel est adapté à une décision courte qui produit une valeur, pas à remplacer toutes les structures if.",
          "examples": [
            {
              "title": "Décision explicite",
              "language": "javascript",
              "code": "function classify(score) {\n  if (!Number.isFinite(score)) return 'invalide';\n  if (score >= 10) return 'validé';\n  return 'à retravailler';\n}"
            }
          ]
        },
        {
          "title": "Répétition",
          "body": "Une boucle while convient lorsque le nombre d’itérations dépend d’une condition ; for est utile lorsqu’un index évolue. for...of parcourt les valeurs d’un itérable. Vérifie que la condition évolue pour éviter une boucle infinie.",
          "examples": [
            {
              "title": "Calculer une moyenne",
              "language": "javascript",
              "code": "const scores = [12, 8, 15];\nlet sum = 0;\nfor (const score of scores) sum += score;\nconst average = scores.length ? sum / scores.length : null;"
            }
          ]
        },
        {
          "title": "Lisibilité et limites",
          "body": "Une boucle doit préciser son périmètre et sa sortie. Évite de modifier la collection parcourue sans raison, et définis le comportement pour une liste vide, des valeurs non numériques ou des index absents. Dès qu’une transformation devient répétitive, encapsule-la dans une fonction testable."
        }
      ]
    },
    ...javascriptAdvancedModules,
  ],
};
