import type { CourseModule } from './types';

export const javascriptAdvancedModules: CourseModule[] = [
  {
    "id": "modele-execution",
    "title": "3. Modèle mental, environnement et exécution",
    "summary": "JavaScript est un langage à typage dynamique dont les règles sont définies par ECMAScript. Le navigateur et Node.js fournissent des environnements différents autour du même langage.",
    "concepts": [
      "Distinguer ECMAScript, le langage JavaScript et les API de l’environnement.",
      "Comprendre parsing, compilation/JIT et exécution sans supposer un modèle identique dans tous les moteurs.",
      "Séparer code source, contexte global, pile d’appels et tâches asynchrones.",
      "Choisir un script classique ou un module ES selon les besoins."
    ],
    "sections": [
      {
        "title": "Langage et environnement ne sont pas synonymes",
        "body": "ECMAScript spécifie la syntaxe et la sémantique du langage : expressions, fonctions, objets, promesses, modules, etc. Le navigateur ajoute des API telles que document, fetch, URL et localStorage ; Node.js fournit notamment les modules système, les processus et l’accès au système de fichiers. Une API disponible dans un navigateur n’est pas nécessairement disponible dans Node.js. Vérifie toujours le contexte d’exécution plutôt que de dire simplement « JavaScript le permet ».",
        "examples": [
          {
            "title": "Comparer langage et environnement",
            "language": "javascript",
            "code": "// ECMAScript : disponible dans les environnements modernes\nconst total = [12, 8, 5].reduce((sum, value) => sum + value, 0);\n\n// API navigateur : nécessite un document HTML\n// document.querySelector('h1');\n\n// API Node.js : nécessite Node.js\n// import { readFile } from 'node:fs/promises';"
          }
        ]
      },
      {
        "title": "De la source à l’exécution",
        "body": "Le moteur analyse la source, vérifie la syntaxe, puis exécute le programme ; les moteurs modernes peuvent compiler certaines parties pour accélérer l’exécution. Le modèle précis est une optimisation interne, pas un contrat sur lequel bâtir le code. Une erreur de syntaxe empêche généralement le fichier concerné de s’exécuter ; une exception d’exécution survient lorsqu’une instruction exécutée échoue.",
        "examples": [
          {
            "title": "Syntaxe et erreur d’exécution",
            "language": "javascript",
            "code": "// SyntaxError : parenthèse manquante (corriger avant exécution)\n// const result = (2 + 3;\n\n// Erreur d’exécution : cette ligne lève TypeError\nconst user = null;\n// user.name;"
          }
        ]
      },
      {
        "title": "Scripts classiques et modules",
        "body": "Les modules ES utilisent import/export, ont leur propre portée de module et sont automatiquement exécutés en mode strict. Dans le navigateur, on les charge avec script type=\"module\" ; les modules sont différés par défaut et suivent les règles de même origine/CORS. Dans Node.js, la configuration du projet détermine la façon de traiter les fichiers, notamment via package.json et les extensions.",
        "examples": [
          {
            "title": "Charger un module dans HTML",
            "language": "html",
            "code": "<script type=\"module\" src=\"./src/main.js\"></script>"
          }
        ]
      }
    ],
    "exercise": "Explique pour trois extraits s’ils relèvent du langage ou d’une API d’environnement, puis crée une page HTML qui charge un module JavaScript externe et affiche un résultat dans la console."
  },
  {
    "id": "variables-types",
    "title": "4. Variables, valeurs et types primitifs",
    "summary": "La déclaration d’une variable crée une liaison vers une valeur. Comprendre les types primitifs et la différence entre une liaison et l’objet référencé évite de nombreux bugs.",
    "concepts": [
      "Utiliser const par défaut et let pour une liaison réassignée ; éviter var dans le code moderne.",
      "Connaître string, number, bigint, boolean, undefined, symbol et null.",
      "Distinguer réaffectation d’une liaison et mutation d’un objet.",
      "Lire typeof en tenant compte de ses exceptions historiques."
    ],
    "sections": [
      {
        "title": "const, let et var",
        "body": "const interdit de réaffecter la liaison, mais ne rend pas l’objet immuable. let convient quand une variable doit recevoir une nouvelle valeur. var est limité à la fonction et possède des règles de remontée différentes ; dans du code moderne, préfère const ou let. Déclare les variables au plus près de leur usage et donne-leur un nom qui exprime leur rôle.",
        "examples": [
          {
            "title": "Choisir la déclaration",
            "language": "javascript",
            "code": "const currency = 'EUR';\nlet attempts = 0;\nattempts += 1;\n\nconst settings = { theme: 'dark' };\nsettings.theme = 'light'; // autorisé : l’objet est mutable\n// settings = {}; // TypeError : liaison const réaffectée"
          }
        ]
      },
      {
        "title": "Types primitifs",
        "body": "Les primitives sont des valeurs non objets : chaînes, nombres, bigint, booléens, undefined, symbol et null. Le type number inclut les entiers et flottants IEEE 754, avec des valeurs spéciales comme NaN et Infinity. Les entiers très grands peuvent nécessiter bigint, qui ne se mélange pas implicitement avec number.",
        "examples": [
          {
            "title": "Types et valeurs",
            "language": "javascript",
            "code": "const title = 'JavaScript';       // string\nconst count = 3;                  // number\nconst huge = 9007199254740993n;   // bigint\nconst enabled = true;             // boolean\nlet missing;                      // undefined\nconst empty = null;               // null\nconst token = Symbol('token');"
          }
        ]
      },
      {
        "title": "typeof et valeurs particulières",
        "body": "typeof est utile, mais ne constitue pas un système de validation complet. typeof null renvoie historiquement \"object\" ; les tableaux renvoient aussi \"object\". Utilise Array.isArray pour reconnaître un tableau, et des tests explicites pour les valeurs nullish. NaN est la seule valeur numérique qui n’est pas égale à elle-même ; Number.isNaN permet de la tester sans coercition.",
        "examples": [
          {
            "title": "Tester sans piège",
            "language": "javascript",
            "code": "typeof 'x';              // 'string'\ntypeof 42;                // 'number'\ntypeof null;              // 'object' (particularité historique)\nArray.isArray([]);        // true\nNumber.isNaN(Number('x')); // true"
          }
        ]
      }
    ],
    "exercise": "Crée une fonction qui valide un prix reçu comme valeur inconnue : elle doit accepter uniquement un nombre fini positif ou nul et refuser chaînes, NaN, Infinity et null."
  },
  {
    "id": "conversions-comparaisons",
    "title": "5. Conversions, égalité et opérateurs",
    "summary": "JavaScript convertit certaines valeurs automatiquement selon l’opérateur. Des conversions explicites et des comparaisons cohérentes rendent le code prévisible.",
    "concepts": [
      "Distinguer conversion explicite et coercition implicite.",
      "Préférer === et !== à l’égalité faible dans la majorité du code applicatif.",
      "Comprendre truthiness, nullishness et les différences entre || et ??.",
      "Utiliser les opérateurs arithmétiques, logiques et de comparaison sans confondre leurs résultats."
    ],
    "sections": [
      {
        "title": "Conversions explicites",
        "body": "Number(), String() et Boolean() expriment une conversion. Number(\"12.5\") donne un nombre, tandis que Number(\"abc\") donne NaN. parseInt et parseFloat analysent un préfixe de chaîne et ne remplacent pas une validation de format. Pour les données externes, contrôle le résultat avec Number.isFinite et valide les règles métier séparément.",
        "examples": [
          {
            "title": "Valider une conversion",
            "language": "javascript",
            "code": "function parsePositiveAmount(input) {\n  // Un champ HTML fournit une chaîne : refuser null, undefined et les chaînes vides.\n  if (typeof input !== 'string' || input.trim() === '') {\n    throw new TypeError('Montant invalide');\n  }\n\n  const value = Number(input);\n  if (!Number.isFinite(value) || value < 0) {\n    throw new TypeError('Montant invalide');\n  }\n  return value;\n}\n\nparsePositiveAmount('12.50'); // 12.5\n// parsePositiveAmount(null) et parsePositiveAmount('   ') lèvent une erreur."
          }
        ]
      },
      {
        "title": "Égalité stricte et comparaison",
        "body": "=== compare sans conversion de type, tandis que == peut convertir ses opérandes et produire des résultats surprenants. Les comparaisons d’objets portent sur leur identité de référence, pas sur l’égalité profonde de leurs propriétés. NaN est différent de lui-même ; utilise Number.isNaN pour le reconnaître.",
        "examples": [
          {
            "title": "Comparer des valeurs",
            "language": "javascript",
            "code": "0 === '0'; // false\n0 == '0';  // true : coercition\n\n({ id: 1 }) === ({ id: 1 }); // false : deux objets distincts\nconst value = NaN;\nNumber.isNaN(value); // true"
          }
        ]
      },
      {
        "title": "Valeurs truthy, falsy et nullish",
        "body": "Les valeurs falsy comprennent false, 0, -0, 0n, \"\", null, undefined et NaN. [] et {} sont truthy. || choisit le côté droit si le côté gauche est falsy ; ?? le fait uniquement pour null ou undefined. Pour conserver un zéro ou une chaîne vide valide, ?? est souvent le bon choix.",
        "examples": [
          {
            "title": "Choisir entre || et ??",
            "language": "javascript",
            "code": "const retries = 0;\nconst retryLimit = retries ?? 3; // 0\nconst label = '' || 'Sans titre'; // 'Sans titre'\nconst preservedLabel = '' ?? 'Sans titre'; // ''\n\nconst user = null;\nconst safeName = user?.profile?.name ?? 'Anonyme'; // 'Anonyme'\n// ?. protège une valeur nullish, mais pas un identifiant qui n'existe pas."
          }
        ]
      }
    ],
    "exercise": "Réécris trois expressions qui utilisent == ou || afin de rendre explicites les conversions et de préserver correctement 0 et la chaîne vide."
  },
  {
    "id": "controle-flux",
    "title": "6. Conditions, boucles et contrôle de flux",
    "summary": "Les structures de contrôle dirigent l’exécution. Des branches lisibles et des boucles dont les conditions sont claires facilitent la maintenance.",
    "concepts": [
      "Utiliser if/else, switch et opérateur conditionnel pour des décisions simples.",
      "Choisir entre for, for...of, for...in et les méthodes de tableaux.",
      "Employer break et continue avec parcimonie.",
      "Éviter les boucles infinies et traiter correctement les limites d’index."
    ],
    "sections": [
      {
        "title": "Conditions et expressions",
        "body": "if convient aux décisions avec plusieurs instructions ; l’opérateur conditionnel convient à une expression courte. switch est adapté à des cas discrets et peut utiliser des blocs par case. Évite les conditions imbriquées trop profondes : des clauses de garde qui sortent tôt rendent souvent le chemin nominal plus visible.",
        "examples": [
          {
            "title": "Clauses de garde",
            "language": "javascript",
            "code": "function getShippingLabel(order) {\n  if (!order) return 'Commande absente';\n  if (order.cancelled) return 'Annulée';\n  if (order.total >= 50) return 'Livraison offerte';\n  return 'Livraison standard';\n}"
          }
        ]
      },
      {
        "title": "Choisir la boucle adaptée",
        "body": "for...of parcourt les valeurs d’un itérable comme un tableau ou une chaîne. for...in parcourt les clés énumérables d’un objet et n’est généralement pas le bon choix pour les valeurs d’un tableau. Les méthodes map/filter/find conviennent aux transformations déclaratives. Un for classique reste utile quand l’index ou les étapes sont importants.",
        "examples": [
          {
            "title": "Parcourir une collection",
            "language": "javascript",
            "code": "const names = ['Ada', 'Grace', 'Linus'];\nfor (const name of names) {\n  console.log(name);\n}\n\nconst keys = Object.keys({ theme: 'dark', lang: 'fr' });\nconsole.log(keys); // ['theme', 'lang']"
          }
        ]
      },
      {
        "title": "Terminaison et complexité",
        "body": "Chaque boucle doit avoir une condition de sortie vérifiable. Une boucle qui retire des éléments du tableau pendant qu’elle avance peut sauter des éléments ; un parcours inversé ou la création d’un nouveau tableau est parfois plus sûr. Sur de grandes collections, estime le nombre d’opérations et évite les recherches répétées inutiles.",
        "examples": [
          {
            "title": "Filtrer sans modifier la source",
            "language": "javascript",
            "code": "const scores = [12, 4, 18, 9];\nconst passing = scores.filter((score) => score >= 10);\nconsole.log(passing); // [12, 18]\nconsole.log(scores);  // source inchangée"
          }
        ]
      }
    ],
    "exercise": "Implémente une fonction qui recherche le premier prix supérieur à un plafond, puis une version qui renvoie tous les prix correspondants sans modifier le tableau initial."
  },
  {
    "id": "fonctions",
    "title": "7. Fonctions, paramètres et retours",
    "summary": "Les fonctions encapsulent un comportement et définissent un contrat d’entrée/sortie. Des fonctions courtes et testables réduisent le couplage entre logique métier et interface.",
    "concepts": [
      "Comparer déclarations, expressions de fonction et fonctions fléchées.",
      "Comprendre paramètres par défaut, rest parameters et spread syntax.",
      "Distinguer return, effets de bord et absence de retour.",
      "Écrire des fonctions pures quand cela simplifie les tests."
    ],
    "sections": [
      {
        "title": "Déclarer et appeler une fonction",
        "body": "Une déclaration de fonction est disponible avant son emplacement textuel grâce à l’instanciation des déclarations. Une expression de fonction est liée à une variable. Les fonctions fléchées ont une syntaxe concise et ne possèdent pas leur propre this ni arguments ; elles sont particulièrement utiles pour les callbacks, mais pas toujours comme méthodes d’objet.",
        "examples": [
          {
            "title": "Trois formes courantes",
            "language": "javascript",
            "code": "function add(a, b) { return a + b; }\nconst multiply = function (a, b) { return a * b; };\nconst square = (value) => value * value;\n\nadd(2, 3);      // 5\nmultiply(2, 3); // 6\nsquare(4);      // 16"
          }
        ]
      },
      {
        "title": "Paramètres par défaut, rest et spread",
        "body": "Un paramètre par défaut est utilisé lorsque l’argument vaut undefined, pas lorsqu’il vaut null. ...rest rassemble les arguments restants dans un tableau. ...spread développe un itérable dans un appel ou un littéral ; il effectue une copie superficielle lorsqu’il sert à construire un tableau ou un objet, pas une copie profonde.",
        "examples": [
          {
            "title": "Paramètres souples",
            "language": "javascript",
            "code": "function formatPrice(value, currency = 'EUR') {\n  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency }).format(value);\n}\nfunction sum(...values) { return values.reduce((a, b) => a + b, 0); }\nconst original = [2, 4];\nconst extended = [...original, 6];"
          }
        ]
      },
      {
        "title": "Contrat, retour et pureté",
        "body": "return termine l’appel et renvoie une valeur ; sans return explicite, le résultat est undefined. Une fonction pure dépend uniquement de ses entrées et n’altère pas l’extérieur, ce qui facilite tests et réutilisation. Les effets de bord — accès réseau, DOM, stockage, logs — sont nécessaires mais gagnent à être isolés des calculs métier.",
        "examples": [
          {
            "title": "Séparer calcul et effet",
            "language": "javascript",
            "code": "function applyDiscount(price, rate) {\n  if (!Number.isFinite(price) || price < 0) throw new RangeError('Prix invalide');\n  if (rate < 0 || rate > 1) throw new RangeError('Taux invalide');\n  return price * (1 - rate);\n}\n\nconst discounted = applyDiscount(80, 0.25); // 60"
          }
        ]
      }
    ],
    "exercise": "Construis un module de calcul de panier avec fonctions pures pour le sous-total, la remise et la taxe ; précise les préconditions et teste les valeurs limites."
  },
  {
    "id": "portee-closures",
    "title": "8. Portée lexicale, closures et hoisting",
    "summary": "La portée lexicale détermine où un nom est visible. Une closure conserve l’accès aux liaisons de son environnement, même après le retour de la fonction qui l’a créée.",
    "concepts": [
      "Comprendre portées globale, de fonction et de bloc.",
      "Expliquer temporal dead zone et différence de hoisting entre var, let et const.",
      "Utiliser les closures pour encapsuler un état privé.",
      "Éviter les fuites liées aux closures longues et aux gestionnaires oubliés."
    ],
    "sections": [
      {
        "title": "Portée lexicale",
        "body": "Une variable est résolue en remontant les portées lexicales, c’est-à-dire selon la structure du code, et non selon la fonction qui appelle. let et const sont limités au bloc ; var est limité à la fonction ou au contexte global selon l’environnement. Préfère les variables locales pour limiter les dépendances implicites.",
        "examples": [
          {
            "title": "Portée de bloc",
            "language": "javascript",
            "code": "const language = 'JavaScript';\nif (true) {\n  const version = 'moderne';\n  console.log(language, version);\n}\n// version n’existe pas ici"
          }
        ]
      },
      {
        "title": "Hoisting et temporal dead zone",
        "body": "Les déclarations var sont instanciées avec la valeur undefined avant l’exécution du corps ; les déclarations let et const sont aussi connues du moteur, mais ne peuvent pas être utilisées avant leur initialisation : c’est la temporal dead zone. Évite de dépendre du hoisting pour la lisibilité et initialise les variables près de leur déclaration.",
        "examples": [
          {
            "title": "Ordre d’initialisation",
            "language": "javascript",
            "code": "console.log(count); // undefined avec var\nvar count = 2;\n\n// console.log(total); // ReferenceError : temporal dead zone\nconst total = 5;"
          }
        ]
      },
      {
        "title": "Closures et encapsulation",
        "body": "Une closure est créée lorsqu’une fonction utilise des liaisons de sa portée lexicale externe. Elle peut conserver un état privé sans variable globale. Ce mécanisme est utile pour fabriquer des fonctions configurées, mais une closure attachée à un événement durable peut aussi garder des références en mémoire : retire les écouteurs lorsque leur durée de vie est terminée.",
        "examples": [
          {
            "title": "Compteur privé",
            "language": "javascript",
            "code": "function createCounter() {\n  let count = 0;\n  return {\n    increment() { count += 1; return count; },\n    current() { return count; },\n  };\n}\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.current();   // 1"
          }
        ]
      }
    ],
    "exercise": "Crée une fonction makeMultiplier(factor) qui renvoie une fonction, puis explique quelle liaison est conservée par la closure et pourquoi elle n’est pas globale."
  },
  {
    "id": "objets-references",
    "title": "9. Objets, références et copie",
    "summary": "Les objets représentent des structures à propriétés. Les variables contenant un objet stockent une référence ; affecter ou copier cette référence ne duplique pas automatiquement l’objet.",
    "concepts": [
      "Créer et lire des propriétés avec notation pointée et crochets.",
      "Comprendre référence, identité, mutation et copie superficielle.",
      "Utiliser Object.keys, Object.entries, Object.hasOwn et les descripteurs simples.",
      "Employer optional chaining et déstructuration avec des valeurs absentes."
    ],
    "sections": [
      {
        "title": "Propriétés et accès",
        "body": "La notation pointée convient aux noms connus ; la notation entre crochets accepte une expression, notamment une clé stockée dans une variable. L’accès à une propriété d’un objet nullish lève une erreur, d’où l’intérêt de vérifier la donnée ou d’utiliser ?. quand l’absence est légitime. N’utilise pas un objet brut comme dictionnaire pour des clés arbitraires sans comprendre les propriétés héritées ; Map peut être plus adapté.",
        "examples": [
          {
            "title": "Clés dynamiques et accès sûr",
            "language": "javascript",
            "code": "const product = { name: 'Clavier', price: 49 };\nconst field = 'price';\nconsole.log(product[field]); // 49\nconsole.log(product.stock?.quantity ?? 0); // 0"
          }
        ]
      },
      {
        "title": "Références et copie superficielle",
        "body": "Deux variables peuvent désigner le même objet ; une mutation via l’une est visible via l’autre. {...object} et [...array] copient le premier niveau seulement. Les objets imbriqués restent partagés. structuredClone peut effectuer une copie profonde de nombreuses valeurs structurées, mais ne convient pas à tous les types ni à toutes les ressources ; choisis une stratégie explicite.",
        "examples": [
          {
            "title": "Mutation partagée",
            "language": "javascript",
            "code": "const original = { user: { name: 'Ada' } };\nconst shallow = { ...original };\nshallow.user.name = 'Grace';\nconsole.log(original.user.name); // 'Grace' : référence imbriquée partagée\nconst deep = structuredClone(original);"
          }
        ]
      },
      {
        "title": "Inspection et propriétés propres",
        "body": "Object.keys renvoie les clés propres énumérables ; Object.entries renvoie les paires clé-valeur. Object.hasOwn(obj, key) vérifie qu’une propriété appartient à l’objet lui-même, plutôt qu’à son prototype. Les opérateurs de déstructuration et de propagation utilisent des règles d’énumération précises ; ils ne copient pas automatiquement les propriétés non énumérables ni les propriétés héritées.",
        "examples": [
          {
            "title": "Inspecter un objet",
            "language": "javascript",
            "code": "const config = { theme: 'dark', locale: 'fr-FR' };\nfor (const [key, value] of Object.entries(config)) {\n  console.log(key, value);\n}\nObject.hasOwn(config, 'theme'); // true"
          }
        ]
      }
    ],
    "exercise": "À partir d’un objet imbriqué, démontre une mutation partagée, puis écris une mise à jour immuable qui ne modifie que la propriété voulue."
  },
  {
    "id": "tableaux-methodes",
    "title": "10. Tableaux et transformations fonctionnelles",
    "summary": "Les tableaux ordonnent des valeurs. Les méthodes de transformation permettent de décrire le résultat attendu plutôt que de gérer manuellement chaque index.",
    "concepts": [
      "Maîtriser push/pop, slice/splice et les différences entre méthodes mutantes et non mutantes.",
      "Composer map, filter, find, some, every, flatMap et reduce.",
      "Trier avec un comparateur correct et éviter de muter les données sources par accident.",
      "Comprendre les trous de tableaux et les limites de reduce."
    ],
    "sections": [
      {
        "title": "Méthodes mutantes et non mutantes",
        "body": "push, pop, splice, sort et reverse modifient le tableau récepteur. map, filter, slice et concat créent un nouveau tableau. toSorted et toReversed offrent des alternatives non mutantes dans les environnements qui les prennent en charge. Le nom d’une méthode ne suffit pas toujours : vérifie sa documentation avant de l’intégrer à un flux immuable.",
        "examples": [
          {
            "title": "Trier sans muter",
            "language": "javascript",
            "code": "const scores = [9, 2, 12];\nconst sorted = scores.toSorted((a, b) => a - b);\nconsole.log(sorted); // [2, 9, 12]\nconsole.log(scores); // [9, 2, 12]\n// Alternative compatible plus ancienne : [...scores].sort((a, b) => a - b)"
          }
        ]
      },
      {
        "title": "Transformer et rechercher",
        "body": "map produit une valeur par élément ; filter conserve les éléments qui satisfont une condition ; find renvoie le premier élément correspondant ou undefined ; some et every répondent à des questions booléennes. reduce agrège une collection et nécessite un accumulateur bien défini. Évite reduce quand map/filter expriment plus clairement le besoin.",
        "examples": [
          {
            "title": "Pipeline lisible",
            "language": "javascript",
            "code": "const products = [\n  { name: 'Livre', price: 18, active: true },\n  { name: 'Sac', price: 42, active: false },\n  { name: 'Stylo', price: 3, active: true },\n];\nconst total = products.filter(p => p.active).reduce((sum, p) => sum + p.price, 0);"
          }
        ]
      },
      {
        "title": "Tri, égalité et données manquantes",
        "body": "sort compare les éléments sous forme de chaînes si aucun comparateur n’est fourni ; pour les nombres, fournis (a, b) => a - b. Les objets sont comparés par référence. Les tableaux peuvent contenir des trous et des valeurs undefined : définis le comportement attendu plutôt que de supposer une liste dense. Ajoute un accumulateur initial à reduce pour les tableaux vides et pour rendre le type de résultat explicite.",
        "examples": [
          {
            "title": "Tri de produits",
            "language": "javascript",
            "code": "const byPriceThenName = (a, b) =>\n  a.price - b.price || a.name.localeCompare(b.name, 'fr');\nconst ordered = products.toSorted(byPriceThenName);\nconst names = products.map(({ name }) => name);"
          }
        ]
      }
    ],
    "exercise": "À partir d’une liste de produits, produis une liste filtrée, triée sans mutation, puis un résumé avec nombre d’articles et total. Ajoute le cas d’une liste vide."
  },
  {
    "id": "collections-map-set",
    "title": "11. Map, Set, itérables et générateurs",
    "summary": "Les collections spécialisées et le protocole d’itération répondent à des besoins différents des objets et tableaux classiques.",
    "concepts": [
      "Choisir Map pour associer des clés à des valeurs et Set pour garantir l’unicité.",
      "Comprendre les itérables et for...of.",
      "Créer un générateur avec function* et yield pour produire des valeurs à la demande.",
      "Ne pas supposer que WeakMap ou WeakSet sont énumérables."
    ],
    "sections": [
      {
        "title": "Map et Set",
        "body": "Map conserve des paires clé-valeur et accepte des clés de tout type ; Set conserve des valeurs uniques selon SameValueZero. Ces collections ont une API explicite (set/get/has/delete, add/has/delete) et une taille. Elles conviennent aux caches, index par identifiant et déduplications. Un objet ordinaire reste adapté aux enregistrements dont les propriétés sont connues.",
        "examples": [
          {
            "title": "Indexer par identifiant",
            "language": "javascript",
            "code": "const usersById = new Map();\nusersById.set('u1', { name: 'Ada' });\nusersById.get('u1');\n\nconst uniqueTags = new Set(['css', 'js', 'css']);\nconsole.log([...uniqueTags]); // ['css', 'js']"
          }
        ]
      },
      {
        "title": "Itérables et protocole d’itération",
        "body": "for...of consomme un itérable, c’est-à-dire une valeur qui expose Symbol.iterator. Tableaux, chaînes, Map et Set sont itérables. Un objet simple n’est pas directement itérable par défaut, même si Object.entries permet d’en parcourir les propriétés propres énumérables. Les itérateurs peuvent être consommés une seule fois ou être réutilisables selon leur implémentation.",
        "examples": [
          {
            "title": "Parcourir Map et Set",
            "language": "javascript",
            "code": "const settings = new Map([['theme', 'dark'], ['lang', 'fr']]);\nfor (const [key, value] of settings) {\n  console.log(`${key}=${value}`);\n}"
          }
        ]
      },
      {
        "title": "Générateurs et évaluation différée",
        "body": "Une fonction génératrice, déclarée avec function*, renvoie un itérateur ; yield suspend temporairement son exécution et fournit une valeur au consommateur. Cela permet de produire des séquences sans créer immédiatement un tableau complet. N’utilise pas un générateur si un simple tableau rend le code plus clair ou si les données sont déjà intégralement en mémoire.",
        "examples": [
          {
            "title": "Séquence paresseuse",
            "language": "javascript",
            "code": "function* range(start, end) {\n  for (let value = start; value < end; value += 1) yield value;\n}\nconsole.log([...range(2, 5)]); // [2, 3, 4]"
          }
        ]
      }
    ],
    "exercise": "Choisis entre objet, Map et Set pour trois scénarios : profil utilisateur, cache par clé et liste de tags uniques. Implémente les deux derniers."
  },
  {
    "id": "destructuration-immutabilite",
    "title": "12. Déstructuration, spread et immutabilité",
    "summary": "La syntaxe de déstructuration rend explicite l’extraction de valeurs ; spread facilite la composition, sans garantir à lui seul l’immutabilité profonde.",
    "concepts": [
      "Extraire propriétés et éléments avec des valeurs par défaut.",
      "Utiliser rest pour omettre ou regrouper des propriétés.",
      "Mettre à jour tableaux et objets sans mutation accidentelle.",
      "Comprendre que Object.freeze est superficiel et ne remplace pas une conception immuable."
    ],
    "sections": [
      {
        "title": "Déstructurer et fournir des valeurs par défaut",
        "body": "La déstructuration extrait des propriétés ou positions dans des variables. Une valeur par défaut s’applique lorsque la valeur extraite est undefined, pas null. Elle ne valide pas le type : une valeur inattendue peut toujours traverser la déstructuration. Les noms d’alias évitent de créer des variables globales ou des noms ambigus.",
        "examples": [
          {
            "title": "Déstructuration",
            "language": "javascript",
            "code": "const user = { id: 'u7', profile: { name: 'Sam' }, role: undefined };\nconst { id, role = 'reader' } = user;\nconst { name: displayName = 'Anonyme' } = user.profile;\nconst [first, second = 0] = [10];"
          }
        ]
      },
      {
        "title": "Spread et rest",
        "body": "Dans un littéral, ...source copie les propriétés propres énumérables d’un objet ou développe les éléments d’un itérable. Le paramètre rest collecte les arguments restants ; la propriété rest en déstructuration récupère les propriétés non extraites. L’ordre compte : dans un objet, une propriété écrite après spread remplace la précédente.",
        "examples": [
          {
            "title": "Mise à jour ciblée",
            "language": "javascript",
            "code": "const profile = { name: 'Ada', locale: 'fr', theme: 'light' };\nconst darkProfile = { ...profile, theme: 'dark' };\nconst { theme, ...publicProfile } = darkProfile;\nconsole.log(publicProfile); // { name: 'Ada', locale: 'fr' }"
          }
        ]
      },
      {
        "title": "Immutabilité pratique",
        "body": "L’immutabilité signifie ici que l’on crée une nouvelle valeur au lieu de modifier celle partagée. Elle facilite la comparaison, le débogage et les mises à jour d’état. Une copie par spread reste superficielle ; pour une structure profonde, recopie les niveaux nécessaires, utilise structuredClone lorsque ses contraintes conviennent ou adopte une bibliothèque spécialisée. Object.freeze bloque les modifications directes du premier niveau uniquement.",
        "examples": [
          {
            "title": "Ajouter un élément sans mutation",
            "language": "javascript",
            "code": "const tasks = [{ id: 1, done: false }];\nconst nextTasks = tasks.map(task =>\n  task.id === 1 ? { ...task, done: true } : task\n);\nconsole.log(tasks[0].done);     // false\nconsole.log(nextTasks[0].done); // true"
          }
        ]
      }
    ],
    "exercise": "Réécris la mise à jour d’un profil imbriqué pour ne modifier aucune référence source, puis explique pourquoi un simple {...profile} ne suffit pas."
  },
  {
    "id": "chaines-regexp",
    "title": "13. Chaînes, expressions régulières et internationalisation",
    "summary": "Les chaînes sont immuables et représentent des unités de code UTF-16. Les expressions régulières recherchent des motifs ; les API d’internationalisation gèrent les conventions locales.",
    "concepts": [
      "Utiliser template literals, includes, startsWith, replace et split.",
      "Comprendre Unicode, points de code et limites des index UTF-16.",
      "Écrire des expressions régulières simples sans transformer les regex en langage opaque.",
      "Formater dates, nombres et montants avec Intl."
    ],
    "sections": [
      {
        "title": "Chaînes et template literals",
        "body": "Les chaînes sont immuables : les méthodes renvoient de nouvelles chaînes. Les template literals utilisent les accents graves pour l’interpolation et les chaînes multilignes. trim, includes, startsWith et replace sont utiles pour les transformations ; une normalisation de casse ou d’espaces ne doit pas remplacer une validation métier.",
        "examples": [
          {
            "title": "Formatage lisible",
            "language": "javascript",
            "code": "const product = { name: 'Carnet', price: 12.5 };\nconst message = `Le produit ${product.name} coûte ${product.price} €.`;\nconst normalized = '  Bonjour  '.trim().toLocaleLowerCase('fr-FR');"
          }
        ]
      },
      {
        "title": "Unicode et expressions régulières",
        "body": "Les chaînes JavaScript sont indexées en unités de code UTF-16 ; un caractère Unicode peut occuper deux unités. [...text] parcourt les points de code, mais ne gère pas toujours un graphème visuel composé de plusieurs points. Les regex sont utiles pour rechercher des motifs, mais un contrôle côté client ne remplace jamais une validation serveur. Évite les expressions trop complexes et teste les cas limites.",
        "examples": [
          {
            "title": "Recherche sans supposer un caractère = un index",
            "language": "javascript",
            "code": "const text = 'A😀B';\nconsole.log(text.length); // 4 unités UTF-16\nconsole.log([...text].length); // 3 points de code\nconst hasDigits = /\\d/.test('Commande 42');"
          }
        ]
      },
      {
        "title": "Intl pour les formats locaux",
        "body": "Intl.NumberFormat, Intl.DateTimeFormat et Intl.Collator adaptent les formats et tris aux conventions locales. Ne construis pas un montant en ajoutant manuellement le symbole monétaire à un nombre brut. Pour des calculs financiers précis, définis également la stratégie d’arrondi et l’unité de stockage : le formatage ne résout pas les erreurs de représentation binaire des nombres flottants.",
        "examples": [
          {
            "title": "Montant et tri localisé",
            "language": "javascript",
            "code": "const money = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });\nconsole.log(money.format(1234.5));\nconst names = ['Émile', 'Ada', 'Zoé'];\nconsole.log(names.toSorted((a, b) => a.localeCompare(b, 'fr')));"
          }
        ]
      }
    ],
    "exercise": "Formate un montant et une date selon la locale française, puis écris une recherche insensible à la casse. Documente les limites de la normalisation Unicode utilisée."
  },
  {
    "id": "modules-es",
    "title": "14. Modules ES, import/export et organisation",
    "summary": "Les modules rendent les dépendances explicites et séparent les responsabilités. Une architecture simple facilite la réutilisation, le test et le remplacement d’une partie du programme.",
    "concepts": [
      "Utiliser export nommé et export default sans multiplier les styles inutilement.",
      "Comprendre les chemins relatifs, l’évaluation des modules et les dépendances cycliques.",
      "Séparer domaine, accès aux données, interface et démarrage de l’application.",
      "Ne pas confondre modules ES, CommonJS et bundlers."
    ],
    "sections": [
      {
        "title": "Exports et imports",
        "body": "Les exports nommés conviennent lorsque le module expose plusieurs fonctions ou constantes ; export default représente une exportation par défaut. L’import est statique et doit se trouver au niveau du module. Les chemins relatifs du navigateur incluent généralement l’extension du fichier. Les outils de build peuvent résoudre d’autres conventions, mais il vaut mieux savoir ce que le navigateur comprend nativement.",
        "examples": [
          {
            "title": "Module métier et point d’entrée",
            "language": "javascript",
            "code": "// money.js\nexport function formatMoney(value) {\n  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);\n}\n\n// main.js\nimport { formatMoney } from './money.js';\nconsole.log(formatMoney(19.9));"
          }
        ]
      },
      {
        "title": "Chargement et dépendances",
        "body": "Les modules sont évalués une fois par graphe de modules et leurs exports sont des liaisons vivantes. Le navigateur applique CORS et les règles de même origine aux modules ; un serveur local est généralement nécessaire plutôt qu’une ouverture directe en file://. Un cycle d’import peut fonctionner, mais une lecture avant initialisation peut échouer : garde les dépendances simples et orientées.",
        "examples": [
          {
            "title": "HTML minimal",
            "language": "html",
            "code": "<!doctype html>\n<html lang=\"fr\">\n  <meta charset=\"utf-8\">\n  <title>Module JavaScript</title>\n  <script type=\"module\" src=\"./main.js\"></script>\n</html>"
          }
        ]
      },
      {
        "title": "Découper selon les responsabilités",
        "body": "Évite les fichiers monolithiques qui mêlent règles métier, DOM, réseau et stockage. Un module peut exposer une petite API ; ses détails internes restent privés s’ils ne sont pas exportés. Les imports dynamiques import() servent au chargement conditionnel ou différé, notamment pour réduire le code initial, mais ajoutent une promesse et un chemin d’erreur à traiter.",
        "examples": [
          {
            "title": "Import dynamique",
            "language": "javascript",
            "code": "async function openAdvancedEditor() {\n  const { createEditor } = await import('./advanced-editor.js');\n  return createEditor();\n}"
          }
        ]
      }
    ],
    "exercise": "Organise un mini-catalogue en modules domain, api, ui et main. Liste les responsabilités et dessine les dépendances pour éviter les cycles."
  },
  {
    "id": "erreurs-debug",
    "title": "15. Erreurs, exceptions et débogage",
    "summary": "Un programme robuste rend les erreurs explicites, les traite au niveau approprié et fournit assez de contexte pour diagnostiquer les problèmes sans exposer de données sensibles.",
    "concepts": [
      "Différencier erreurs de syntaxe, exceptions et erreurs métier.",
      "Lancer des erreurs utiles et traiter les exceptions à la frontière adéquate.",
      "Utiliser Error, cause et des classes d’erreur dédiées lorsque nécessaire.",
      "Déboguer avec breakpoints, call stack, inspection et source maps."
    ],
    "sections": [
      {
        "title": "Exceptions et propagation",
        "body": "throw interrompt le flux courant et propage une exception jusqu’au premier catch compatible. try/catch convient aux opérations qui peuvent échouer et dont l’appelant peut réellement décider quoi faire. N’attrape pas toutes les erreurs pour les ignorer : si l’application ne peut pas récupérer, affiche un état d’erreur approprié ou laisse remonter l’exception avec son contexte.",
        "examples": [
          {
            "title": "Erreur de validation",
            "language": "javascript",
            "code": "function requireEmail(value) {\n  if (typeof value !== 'string' || !value.includes('@')) {\n    throw new TypeError('Une adresse e-mail valide est requise');\n  }\n  return value;\n}\ntry { requireEmail('invalide'); }\ncatch (error) { console.error(error.message); }"
          }
        ]
      },
      {
        "title": "Conserver le contexte",
        "body": "Une erreur personnalisée peut exprimer une catégorie métier. Error cause permet d’envelopper une erreur plus basse couche sans perdre son origine. Évite de mettre dans les messages des secrets, jetons, mots de passe ou données personnelles complètes. Les messages destinés aux développeurs et ceux affichés à l’utilisateur ont des objectifs différents.",
        "examples": [
          {
            "title": "Préserver la cause",
            "language": "javascript",
            "code": "class DataLoadError extends Error {\n  constructor(message, options) {\n    super(message, options);\n    this.name = 'DataLoadError';\n  }\n}\ntry {\n  // opération susceptible d’échouer\n} catch (cause) {\n  throw new DataLoadError('Impossible de charger les données', { cause });\n}"
          }
        ]
      },
      {
        "title": "Débogage systématique",
        "body": "Commence par reproduire le problème et noter les entrées qui le déclenchent. Pose un breakpoint près de la première divergence, examine les valeurs et la pile d’appels, puis formule une hypothèse vérifiable. console.log aide ponctuellement ; le debugger est préférable pour inspecter l’évolution des variables. Une source map permet de relier le code transformé au code source lorsque l’outil de build en produit une.",
        "examples": [
          {
            "title": "Assertions locales",
            "language": "javascript",
            "code": "function calculateTotal(items) {\n  console.assert(Array.isArray(items), 'items doit être un tableau');\n  return items.reduce((sum, item) => sum + item.price, 0);\n}"
          }
        ]
      }
    ],
    "exercise": "Ajoute des erreurs explicites à une fonction de calcul et crée une procédure de débogage en cinq étapes pour un résultat inattendu."
  },
  {
    "id": "this-prototypes-classes",
    "title": "16. this, prototypes et classes",
    "summary": "JavaScript utilise une chaîne de prototypes pour la délégation. Les classes offrent une syntaxe plus familière, mais reposent sur ce modèle d’objets.",
    "concepts": [
      "Comprendre que this dépend de la manière dont une fonction est appelée.",
      "Utiliser les méthodes d’objet, call/apply/bind et les fonctions fléchées à bon escient.",
      "Comprendre prototype, héritage et méthodes partagées.",
      "Utiliser class, constructor, extends et super sans sur-ingénierie."
    ],
    "sections": [
      {
        "title": "this dépend de l’appel",
        "body": "Dans une méthode appelée via objet.methode(), this désigne normalement l’objet placé avant le point. Une fonction détachée perd ce contexte dans de nombreux cas ; bind peut le fixer. Les fonctions fléchées capturent le this lexical et ne créent pas leur propre this. Évite d’utiliser une flèche pour une méthode qui doit recevoir dynamiquement l’objet appelant.",
        "examples": [
          {
            "title": "Méthode détachée",
            "language": "javascript",
            "code": "const account = {\n  balance: 10,\n  show() { return this.balance; },\n};\naccount.show(); // 10\nconst showBalance = account.show.bind(account);\nshowBalance(); // 10"
          }
        ]
      },
      {
        "title": "Prototypes et délégation",
        "body": "Lorsqu’une propriété n’est pas trouvée directement sur un objet, JavaScript la recherche dans sa chaîne de prototypes. Les méthodes partagées peuvent ainsi être placées sur le prototype plutôt que recréées pour chaque instance. Object.create permet de choisir explicitement un prototype, mais les classes sont souvent plus lisibles pour des modèles classiques.",
        "examples": [
          {
            "title": "Méthode partagée par prototype",
            "language": "javascript",
            "code": "function User(name) { this.name = name; }\nUser.prototype.greet = function () { return `Bonjour ${this.name}`; };\nconst user = new User('Ada');\nuser.greet(); // 'Bonjour Ada'"
          }
        ]
      },
      {
        "title": "Classes et héritage",
        "body": "class est une syntaxe sur les prototypes avec des règles spécifiques : les méthodes d’instance sont partagées sur le prototype, les champs privés # ne sont accessibles que dans la classe, et extends/super organisent l’héritage. Favorise la composition lorsque plusieurs comportements doivent être combinés ; une hiérarchie de classes profonde rend souvent les changements plus difficiles.",
        "examples": [
          {
            "title": "Classe avec champ privé",
            "language": "javascript",
            "code": "class Wallet {\n  #balance = 0;\n  deposit(amount) {\n    if (!Number.isFinite(amount) || amount <= 0) throw new RangeError('Montant invalide');\n    this.#balance += amount;\n  }\n  get balance() { return this.#balance; }\n}\nconst wallet = new Wallet();\nwallet.deposit(20);"
          }
        ]
      }
    ],
    "exercise": "Explique la différence entre une méthode appelée directement et une méthode détachée. Implémente une classe simple puis propose une variante par composition."
  },
  {
    "id": "asynchrone-event-loop",
    "title": "17. Event loop, tâches et programmation asynchrone",
    "summary": "Le navigateur et Node.js coordonnent le code synchrone, les tâches et les microtâches. Comprendre cet ordre permet d’expliquer les promesses et d’éviter de bloquer l’interface.",
    "concepts": [
      "Distinguer pile d’appels, tâches et microtâches sans confondre avec des threads JavaScript multiples.",
      "Comprendre le rôle de l’event loop et du rendu navigateur.",
      "Éviter les boucles ou calculs longs sur le thread principal.",
      "Ne pas supposer un ordre asynchrone à partir du seul ordre visuel des lignes."
    ],
    "sections": [
      {
        "title": "Code synchrone et file d’attente",
        "body": "Le code JavaScript ordinaire s’exécute jusqu’à la fin du travail courant avant que la boucle d’événements ne traite d’autres callbacks sur le même thread. Une opération réseau peut être gérée par l’environnement puis signaler son résultat plus tard. L’event loop est un modèle utile, mais les détails varient selon l’environnement et les API.",
        "examples": [
          {
            "title": "Ordre des logs",
            "language": "javascript",
            "code": "console.log('A');\nsetTimeout(() => console.log('timer'), 0);\nconsole.log('B');\n// A puis B ; le timer arrive ensuite"
          }
        ]
      },
      {
        "title": "Microtâches et promesses",
        "body": "Les callbacks de promesses sont exécutés dans la file des microtâches après le code courant, avant le traitement de nouvelles tâches dans le modèle navigateur habituel. queueMicrotask permet d’ajouter une microtâche. Accumuler des microtâches qui en ajoutent d’autres peut retarder les tâches suivantes et le rendu : l’asynchronisme ne garantit pas automatiquement la réactivité.",
        "examples": [
          {
            "title": "Comparer promesse et timer",
            "language": "javascript",
            "code": "console.log('début');\nsetTimeout(() => console.log('tâche'), 0);\nPromise.resolve().then(() => console.log('microtâche'));\nconsole.log('fin');\n// début, fin, microtâche, tâche (ordre navigateur habituel)"
          }
        ]
      },
      {
        "title": "Ne pas bloquer le thread principal",
        "body": "Un calcul lourd exécuté sur le thread principal retarde les interactions et le rendu. Découpe le travail en étapes, utilise requestAnimationFrame pour synchroniser un travail visuel, ou déporte les calculs adaptés vers un Web Worker. setTimeout(..., 0) ne signifie pas une exécution immédiate et ne fournit pas une garantie de temps précis.",
        "examples": [
          {
            "title": "Céder le contrôle entre lots",
            "language": "javascript",
            "code": "function processInChunks(items, process, chunkSize = 100) {\n  let index = 0;\n  function nextChunk() {\n    const end = Math.min(index + chunkSize, items.length);\n    while (index < end) process(items[index++]);\n    if (index < items.length) setTimeout(nextChunk, 0);\n  }\n  nextChunk();\n}"
          }
        ]
      }
    ],
    "exercise": "Prédis l’ordre de sortie d’un programme mêlant logs, Promise.resolve, queueMicrotask et setTimeout, puis vérifie ton raisonnement dans la console du navigateur."
  },
  {
    "id": "promesses-async",
    "title": "18. Promises, async/await et composition",
    "summary": "Une Promise représente le résultat futur d’une opération. async/await rend le flux plus lisible, mais n’élimine ni les rejets ni la nécessité de choisir une stratégie de concurrence.",
    "concepts": [
      "Comprendre états pending, fulfilled et rejected.",
      "Utiliser then/catch/finally et async/await avec traitement des erreurs.",
      "Choisir Promise.all, allSettled, race et any selon le contrat.",
      "Éviter les promesses flottantes et les await séquentiels inutiles."
    ],
    "sections": [
      {
        "title": "Cycle de vie d’une Promise",
        "body": "Une Promise est pending, puis fulfilled ou rejected ; son état final ne change plus. then renvoie une nouvelle promesse, ce qui permet de composer les étapes. catch traite un rejet ; finally exécute du nettoyage, sans recevoir directement le résultat. Un rejet non traité peut devenir une erreur globale : chaque opération doit avoir un propriétaire clair pour son échec.",
        "examples": [
          {
            "title": "Chaîne de promesses",
            "language": "javascript",
            "code": "function loadNumber() { return Promise.resolve(4); }\nloadNumber()\n  .then(value => value * 2)\n  .then(value => console.log(value))\n  .catch(error => console.error('Échec', error))\n  .finally(() => console.log('Terminé'));"
          }
        ]
      },
      {
        "title": "async/await et erreurs",
        "body": "Une fonction async renvoie toujours une Promise. await suspend cette fonction jusqu’au règlement de la promesse, sans bloquer à lui seul le thread principal. Utilise try/catch autour de l’opération dont tu sais gérer l’échec ; une capture trop large peut masquer une erreur de programmation. Assure-toi que l’appelant attend ou gère la promesse retournée.",
        "examples": [
          {
            "title": "Traitement explicite",
            "language": "javascript",
            "code": "async function getProfile(id) {\n  try {\n    return await loadProfile(id);\n  } catch (error) {\n    throw new Error(`Chargement du profil ${id} impossible`, { cause: error });\n  }\n}"
          }
        ]
      },
      {
        "title": "Concurrence et agrégation",
        "body": "await successifs exécutent souvent les opérations l’une après l’autre. Si elles sont indépendantes, lance-les avant d’attendre. Promise.all échoue dès qu’une promesse rejette ; allSettled attend tous les résultats et décrit leur statut ; race renvoie le premier règlement ; any attend la première réussite. Le choix dépend du besoin métier, pas d’une préférence stylistique.",
        "examples": [
          {
            "title": "Paralléliser des appels indépendants",
            "language": "javascript",
            "code": "async function loadDashboard() {\n  const [user, orders] = await Promise.all([\n    fetchUser(userId),\n    fetchOrders(userId),\n  ]);\n  const outcomes = await Promise.allSettled([refreshCache(), syncMetrics()]);\n  return { user, orders, outcomes };\n}"
          }
        ]
      }
    ],
    "exercise": "Charge deux ressources indépendantes en parallèle, affiche un état de chargement et gère séparément succès et erreur. Ajoute un cas où l’une des deux opérations échoue."
  },
  {
    "id": "fetch-http",
    "title": "19. fetch, HTTP et gestion des erreurs réseau",
    "summary": "fetch effectue des requêtes réseau et renvoie une Promise de Response. Une réponse HTTP 404 ou 500 n’est pas automatiquement un rejet : le code doit vérifier le statut.",
    "concepts": [
      "Construire des requêtes avec URL, URLSearchParams, headers et options fetch.",
      "Vérifier response.ok et le statut HTTP avant de parser le corps.",
      "Traiter JSON invalide, réseau indisponible et délais d’attente.",
      "Comprendre CORS, authentification et pourquoi les secrets ne doivent pas être dans le navigateur."
    ],
    "sections": [
      {
        "title": "Réponse HTTP et parsing",
        "body": "fetch rejette notamment en cas d’erreur réseau, mais pas simplement parce que le serveur répond 404 ou 500. Vérifie response.ok ou response.status avant de traiter le corps. response.json() est asynchrone et peut échouer si le corps n’est pas un JSON valide. Les réponses peuvent aussi être vides, par exemple avec 204 No Content : adapte le parsing au contrat de l’API.",
        "examples": [
          {
            "title": "Client API minimal",
            "language": "javascript",
            "code": "async function getJson(url) {\n  const response = await fetch(url, { headers: { Accept: 'application/json' } });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}"
          }
        ]
      },
      {
        "title": "URL, paramètres et méthodes",
        "body": "Utilise URL et URLSearchParams pour encoder les paramètres plutôt que concaténer des chaînes à la main. Pour envoyer JSON, sérialise le corps et définis Content-Type. Les méthodes HTTP expriment l’intention (GET, POST, PUT, PATCH, DELETE), mais les garanties de répétition et les effets dépendent aussi du contrat de l’API.",
        "examples": [
          {
            "title": "Envoyer une requête JSON",
            "language": "javascript",
            "code": "const url = new URL('/api/products', location.origin);\nurl.searchParams.set('page', '2');\nconst response = await fetch(url, {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Carnet', price: 12 }),\n});"
          }
        ]
      },
      {
        "title": "Timeouts, annulation et sécurité",
        "body": "AbortController permet d’annuler fetch ou une autre opération qui accepte un signal. CORS est appliqué par le navigateur et doit être configuré côté serveur ; ce n’est pas une authentification. Ne place pas de secret durable dans le bundle client. Valide et autorise les opérations sensibles côté serveur, même si le formulaire client valide déjà les données.",
        "examples": [
          {
            "title": "Timeout avec AbortController",
            "language": "javascript",
            "code": "const controller = new AbortController();\nconst timeoutId = setTimeout(() => controller.abort(), 8000);\ntry {\n  const response = await fetch('/api/status', { signal: controller.signal });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n} finally {\n  clearTimeout(timeoutId);\n}"
          }
        ]
      }
    ],
    "exercise": "Construis un client fetch qui gère 404, 500, JSON invalide, timeout et annulation. Décris quels contrôles doivent aussi exister sur le serveur."
  },
  {
    "id": "dom-manipulation",
    "title": "20. DOM, sélection et rendu sûr",
    "summary": "Le DOM est l’arbre représentant le document. JavaScript peut le lire et le modifier, mais la sécurité et l’accessibilité exigent un rendu explicite plutôt que l’injection de chaînes non fiables.",
    "concepts": [
      "Sélectionner des éléments avec querySelector et querySelectorAll.",
      "Créer et supprimer des nœuds avec createElement, textContent et append.",
      "Distinguer textContent et innerHTML et prévenir les injections XSS.",
      "Comprendre que querySelectorAll renvoie une NodeList statique."
    ],
    "sections": [
      {
        "title": "Sélection et synchronisation avec le DOM",
        "body": "querySelector renvoie le premier élément correspondant ou null ; querySelectorAll renvoie une NodeList statique. Vérifie l’absence d’un élément avant de l’utiliser. Place le script après les éléments concernés ou charge-le avec defer/module afin d’éviter les sélections prématurées. Le DOM n’est pas une base de données : garde une source de vérité claire lorsque l’interface devient complexe.",
        "examples": [
          {
            "title": "Sélection défensive",
            "language": "javascript",
            "code": "const heading = document.querySelector('h1');\nif (heading) {\n  heading.textContent = 'Catalogue';\n}\nconst cards = document.querySelectorAll('[data-product-id]');"
          }
        ]
      },
      {
        "title": "Créer des nœuds et afficher du texte",
        "body": "createElement, textContent et append permettent de construire des nœuds à partir de données sans interpréter celles-ci comme du HTML. innerHTML analyse une chaîne comme balisage et peut provoquer une injection si la chaîne contient une entrée non fiable. Si un rendu HTML dynamique est indispensable, utilise une stratégie de sanitisation éprouvée et un modèle de sécurité explicite.",
        "examples": [
          {
            "title": "Rendu sans injection HTML",
            "language": "javascript",
            "code": "function renderProduct(product) {\n  const article = document.createElement('article');\n  const title = document.createElement('h2');\n  title.textContent = product.name;\n  article.append(title);\n  return article;\n}\ncontainer.append(renderProduct({ name: userSuppliedName }));"
          }
        ]
      },
      {
        "title": "Mise à jour et performances",
        "body": "Construis les nœuds hors du document lorsque cela simplifie les mises à jour, puis insère-les ensemble avec DocumentFragment. Évite les lectures/écritures de layout alternées en boucle, qui peuvent provoquer des recalculs coûteux. Pour les listes longues, considère pagination, virtualisation ou chargement progressif plutôt que d’ajouter des milliers de nœuds d’un coup.",
        "examples": [
          {
            "title": "Insérer un lot de nœuds",
            "language": "javascript",
            "code": "const fragment = document.createDocumentFragment();\nfor (const name of ['Ada', 'Grace', 'Linus']) {\n  const item = document.createElement('li');\n  item.textContent = name;\n  fragment.append(item);\n}\ndocument.querySelector('#authors')?.append(fragment);"
          }
        ]
      }
    ],
    "exercise": "Crée une liste de produits à partir d’objets, sans innerHTML. Teste un nom contenant <script> et vérifie qu’il est affiché comme texte."
  },
  {
    "id": "evenements-formulaires",
    "title": "21. Événements, formulaires et délégation",
    "summary": "Les événements connectent les actions de l’utilisateur au comportement de l’interface. Une bonne gestion conserve l’accès au clavier, valide les entrées et limite le nombre d’écouteurs.",
    "concepts": [
      "Comprendre target, currentTarget, propagation et capture.",
      "Utiliser preventDefault et stopPropagation seulement lorsque le contrat l’exige.",
      "Valider les formulaires côté client sans remplacer la validation serveur.",
      "Employer la délégation d’événements pour les listes dynamiques."
    ],
    "sections": [
      {
        "title": "Propagation et écouteurs",
        "body": "Un événement peut traverser les phases de capture, cible et propagation. target est l’élément à l’origine de l’événement ; currentTarget est l’élément dont le gestionnaire est en cours d’exécution. preventDefault annule l’action native si elle est annulable ; stopPropagation interrompt la propagation et ne doit pas être utilisé par réflexe. Les écouteurs peuvent être retirés ou liés à un AbortSignal.",
        "examples": [
          {
            "title": "Écouteur et cible",
            "language": "javascript",
            "code": "const list = document.querySelector('#products');\nlist?.addEventListener('click', (event) => {\n  const target = event.target;\n  if (!(target instanceof Element)) return;\n  const button = target.closest('button[data-action]');\n  if (!button || !list.contains(button)) return;\n  console.log(button.dataset.action);\n});"
          }
        ]
      },
      {
        "title": "Formulaires et validation",
        "body": "Les contraintes HTML (required, type, min, max, pattern) offrent une validation native utile. JavaScript peut compléter cette validation et afficher des messages contextuels, mais les données doivent être vérifiées côté serveur. Associe chaque champ à un label, annonce les erreurs de façon accessible et ne communique pas uniquement par la couleur.",
        "examples": [
          {
            "title": "Valider un formulaire",
            "language": "javascript",
            "code": "form.addEventListener('submit', (event) => {\n  if (!form.reportValidity()) {\n    event.preventDefault();\n    return;\n  }\n  // Continuer avec les valeurs validées côté client.\n});"
          }
        ]
      },
      {
        "title": "Délégation et durée de vie",
        "body": "La délégation place un écouteur sur un parent stable et identifie le contrôle visé avec closest. Elle convient aux listes dont les éléments sont ajoutés dynamiquement. Évite les gestionnaires qui survivent à la vue qui les a créés ; AbortController peut regrouper leur nettoyage. Les contrôles interactifs natifs offrent déjà un comportement clavier que des div cliquables obligeraient à recréer.",
        "examples": [
          {
            "title": "Nettoyer un groupe d’écouteurs",
            "language": "javascript",
            "code": "const controller = new AbortController();\nwindow.addEventListener('resize', handleResize, { signal: controller.signal });\ndocument.addEventListener('visibilitychange', handleVisibility, { signal: controller.signal });\n// Quand la fonctionnalité se termine :\ncontroller.abort();"
          }
        ]
      }
    ],
    "exercise": "Construis un formulaire accessible avec validation native, message d’erreur explicite et gestion d’un envoi. Ajoute des éléments dynamiques avec délégation d’événements."
  },
  {
    "id": "browser-apis-stockage",
    "title": "22. API navigateur, stockage et cycle de vie",
    "summary": "Les API navigateur exposent des capacités du système et de la page. Le stockage client est utile pour les préférences, mais n’est ni secret ni une source fiable pour les autorisations.",
    "concepts": [
      "Distinguer localStorage, sessionStorage, cookies et IndexedDB selon leur usage.",
      "Sérialiser et parser JSON avec gestion des erreurs et versionnement de données.",
      "Comprendre visibilité de page, timers et événements de cycle de vie.",
      "Traiter les permissions et les échecs des API navigateur."
    ],
    "sections": [
      {
        "title": "Choisir le stockage",
        "body": "localStorage persiste généralement entre les sessions et ne stocke que des chaînes ; sessionStorage est associé à une session d’onglet. IndexedDB convient aux données structurées plus importantes et aux opérations asynchrones. Les cookies ont des propriétés particulières et sont souvent envoyés au serveur. Ne stocke jamais un secret ou une donnée d’autorisation uniquement dans un stockage accessible au JavaScript de la page.",
        "examples": [
          {
            "title": "JSON et erreurs de parsing",
            "language": "javascript",
            "code": "const STORAGE_KEY = 'catalog-preferences-v1';\nfunction readPreferences() {\n  try {\n    const raw = localStorage.getItem(STORAGE_KEY);\n    return raw ? JSON.parse(raw) : { theme: 'system' };\n  } catch {\n    return { theme: 'system' };\n  }\n}"
          }
        ]
      },
      {
        "title": "Cycle de vie et ressources",
        "body": "visibilitychange permet de savoir si le document est visible ; cela peut aider à suspendre des mises à jour coûteuses. Les timers ne garantissent pas une précision absolue et peuvent être ralentis en arrière-plan. Nettoie les timers et écouteurs quand ils ne servent plus, et évite de maintenir une activité permanente si l’utilisateur a quitté la vue.",
        "examples": [
          {
            "title": "Suspendre une tâche périodique",
            "language": "javascript",
            "code": "let timerId;\nfunction startPolling() {\n  if (timerId) return;\n  timerId = setInterval(refreshStatus, 30_000);\n}\nfunction stopPolling() {\n  clearInterval(timerId);\n  timerId = undefined;\n}\ndocument.addEventListener('visibilitychange', () => {\n  document.hidden ? stopPolling() : startPolling();\n});"
          }
        ]
      },
      {
        "title": "API à permissions et dégradation progressive",
        "body": "Certaines API (géolocalisation, notifications, presse-papiers) demandent un contexte sécurisé, une permission ou une action utilisateur. Vérifie la disponibilité, traite les refus et prévois une alternative. Ne demande pas une permission avant que son utilité soit compréhensible ; explique pourquoi elle est nécessaire au moment où la fonctionnalité est activée.",
        "examples": [
          {
            "title": "Vérifier une capacité",
            "language": "javascript",
            "code": "if ('geolocation' in navigator) {\n  navigator.geolocation.getCurrentPosition(\n    position => console.log(position.coords.latitude),\n    error => console.warn('Position indisponible', error.code),\n  );\n} else {\n  console.info('Géolocalisation non prise en charge');\n}"
          }
        ]
      }
    ],
    "exercise": "Implémente la sauvegarde d’une préférence utilisateur avec une valeur par défaut, une gestion du JSON corrompu et une stratégie de versionnement de clé."
  },
  {
    "id": "securite-javascript",
    "title": "23. Sécurité côté client et frontières de confiance",
    "summary": "Le JavaScript du navigateur est modifiable et observable par l’utilisateur. Les contrôles côté client améliorent l’expérience, mais ne protègent pas une API ou une règle métier à eux seuls.",
    "concepts": [
      "Reconnaître XSS, injection HTML et risques liés aux URL non fiables.",
      "Éviter eval, Function et les insertions HTML dangereuses.",
      "Ne jamais inclure de secrets d’API privés dans le code livré au navigateur.",
      "Valider les données côté serveur et appliquer authentification/autorisation à chaque opération sensible."
    ],
    "sections": [
      {
        "title": "XSS et rendu non fiable",
        "body": "Une faille XSS peut exécuter du code dans l’origine du site lorsqu’une entrée non fiable est interprétée comme HTML ou script. Privilégie textContent pour le texte et les API DOM pour créer des éléments. N’utilise pas eval ou Function pour exécuter une chaîne de données. Si le produit doit accepter du HTML, applique un sanitiseur maintenu et une politique de sécurité de contenu adaptée.",
        "examples": [
          {
            "title": "Texte non fiable",
            "language": "javascript",
            "code": "const comment = document.createElement('p');\ncomment.textContent = userComment; // pas d’interprétation HTML\ncommentsContainer.append(comment);\n// Éviter : commentsContainer.innerHTML = userComment;"
          }
        ]
      },
      {
        "title": "Le navigateur n’est pas une frontière de sécurité",
        "body": "Tout code et toute donnée envoyés au navigateur peuvent être inspectés ou modifiés par l’utilisateur. Une variable cachée, un bouton désactivé ou une vérification JavaScript ne protège pas une action côté serveur. L’API doit authentifier l’appelant, vérifier ses droits et valider chaque entrée avant d’exécuter une opération sensible.",
        "examples": [
          {
            "title": "Contrôle côté serveur requis",
            "language": "javascript",
            "code": "// formIsValid et order proviennent de la logique de formulaire de l’application.\nif (formIsValid) {\n  const response = await fetch('/api/orders', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(order),\n  });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n}\n// Le serveur doit tout de même valider l’ordre, le prix et les droits."
          }
        ]
      },
      {
        "title": "Données sensibles et dépendances",
        "body": "Ne place pas de clés privées, jetons de service ou identifiants de base de données dans les fichiers front-end. Les variables d’environnement injectées dans un bundle public ne deviennent pas secrètes. Réduis les dépendances, mets-les à jour, examine les permissions demandées et traite toute donnée externe comme non fiable. Les logs ne doivent pas contenir de jetons ou d’informations personnelles inutiles.",
        "examples": [
          {
            "title": "Ne pas publier de secret",
            "language": "javascript",
            "code": "// Mauvais : cette valeur serait livrée dans le bundle client.\n// const PRIVATE_API_KEY = 'secret';\n\n// Le client appelle un serveur de confiance ; le secret reste côté serveur.\nconst response = await fetch('/api/public-data');"
          }
        ]
      }
    ],
    "exercise": "Liste les risques d’une interface qui valide uniquement côté client. Corrige un rendu vulnérable à XSS et définis les validations obligatoires côté serveur."
  },
  {
    "id": "performance-workers",
    "title": "24. Performance, mémoire et Web Workers",
    "summary": "La performance se mesure sur l’expérience réelle : réactivité, temps de chargement et stabilité visuelle. Il faut d’abord identifier le goulot d’étranglement avant d’optimiser.",
    "concepts": [
      "Mesurer avant d’optimiser avec Performance panel, PerformanceObserver et métriques pertinentes.",
      "Éviter les calculs et mises à jour DOM inutiles.",
      "Comprendre références persistantes, fuites d’écouteurs et garbage collection.",
      "Déporter les calculs indépendants vers un Web Worker quand le coût de communication le justifie."
    ],
    "sections": [
      {
        "title": "Mesurer le problème",
        "body": "Un code qui paraît coûteux n’est pas forcément le goulot d’étranglement. Utilise le profileur pour repérer les longues tâches, les recalculs de style, les layouts et les fonctions fréquemment appelées. Mesure avec des données représentatives et compare avant/après. Évite les micro-optimisations qui rendent le code moins lisible sans gain mesurable.",
        "examples": [
          {
            "title": "Mesure simple",
            "language": "javascript",
            "code": "const start = performance.now();\nrunRepresentativeWorkload();\nconsole.log(`Durée : ${(performance.now() - start).toFixed(1)} ms`);\n// Pour une analyse sérieuse, utilise aussi le profileur du navigateur."
          }
        ]
      },
      {
        "title": "Mémoire et nettoyage",
        "body": "Le ramasse-miettes libère les objets qui ne sont plus accessibles, mais une référence conservée empêche cette libération. Les fuites fréquentes viennent de timers, listeners, caches non bornés ou closures attachées à des éléments de longue durée. Le nettoyage explicite clarifie le cycle de vie, même si le moteur gère automatiquement la mémoire.",
        "examples": [
          {
            "title": "Nettoyage de ressource",
            "language": "javascript",
            "code": "function mountWidget(element) {\n  const controller = new AbortController();\n  element.addEventListener('click', handleClick, { signal: controller.signal });\n  const timer = setInterval(refresh, 10_000);\n  return () => { controller.abort(); clearInterval(timer); };\n}"
          }
        ]
      },
      {
        "title": "Web Workers et tâches lourdes",
        "body": "Un Web Worker exécute du JavaScript dans un contexte séparé et communique principalement par messages structurés. Il ne peut pas manipuler directement le DOM. Le transfert de données a un coût ; déporte donc un calcul suffisamment lourd et indépendant, et définis un contrat de message et un traitement des erreurs.",
        "examples": [
          {
            "title": "Communication avec un worker",
            "language": "javascript",
            "code": "// main.js\nconst worker = new Worker(new URL('./compute-worker.js', import.meta.url), { type: 'module' });\nworker.postMessage({ type: 'sum', values: [1, 2, 3] });\nworker.addEventListener('message', event => console.log(event.data));\n\n// compute-worker.js\nself.addEventListener('message', event => {\n  const { values } = event.data;\n  self.postMessage(values.reduce((sum, value) => sum + value, 0));\n});"
          }
        ]
      }
    ],
    "exercise": "Profile un rendu de liste volumineuse, identifie un coût dominant et propose une amélioration mesurable. Détermine si un Web Worker serait pertinent et pourquoi."
  },
  {
    "id": "dates-regex-json",
    "title": "25. Dates, JSON et formats de données",
    "summary": "Les formats d’échange et les dates nécessitent des conventions explicites. JSON est un format de données, pas un mécanisme de copie universel ni un validateur de schéma.",
    "concepts": [
      "Utiliser JSON.stringify/parse en connaissant leurs limites.",
      "Manipuler Date en UTC et locale sans supposer un fuseau implicite.",
      "Préférer les formats ISO explicites et les API Intl pour l’affichage.",
      "Valider les données après parsing et gérer les valeurs non sérialisables."
    ],
    "sections": [
      {
        "title": "JSON et limites de sérialisation",
        "body": "JSON.stringify sérialise les structures compatibles ; les propriétés undefined, fonctions et symboles sont généralement omises dans les objets, et certains types perdent leur sémantique. JSON.parse peut lever une SyntaxError et ne valide pas la forme métier. Ne transforme pas une copie profonde en JSON sans vérifier que les types concernés et les valeurs sont compatibles.",
        "examples": [
          {
            "title": "Parsing et validation",
            "language": "javascript",
            "code": "function parseProduct(jsonText) {\n  const value = JSON.parse(jsonText);\n  if (!value || typeof value.name !== 'string' || typeof value.price !== 'number') {\n    throw new TypeError('Produit invalide');\n  }\n  return value;\n}"
          }
        ]
      },
      {
        "title": "Dates, UTC et fuseaux",
        "body": "Date représente un instant en millisecondes depuis l’époque Unix, mais ses méthodes locales dépendent du fuseau de l’environnement. Une date sans heure et une date-heure sans offset peuvent être interprétées différemment selon le format et l’environnement. Pour des échanges, privilégie un ISO 8601 avec Z ou un offset explicite lorsqu’il s’agit d’un instant.",
        "examples": [
          {
            "title": "Date ISO et affichage",
            "language": "javascript",
            "code": "const instant = new Date('2026-10-14T12:00:00Z');\nconst formatted = new Intl.DateTimeFormat('fr-FR', {\n  dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Paris',\n}).format(instant);"
          }
        ]
      },
      {
        "title": "Contrats de données",
        "body": "Un JSON valide peut être invalide pour ton application : propriété absente, type inattendu, identifiant dupliqué ou valeur hors limites. Vérifie les invariants à la frontière du système et représente les erreurs de parsing séparément des erreurs de transport. Une validation côté client ne remplace pas la validation de l’API.",
        "examples": [
          {
            "title": "Normaliser une réponse",
            "language": "javascript",
            "code": "function normalizeUser(value) {\n  if (typeof value?.id !== 'string' || typeof value?.name !== 'string') {\n    throw new TypeError('Réponse utilisateur invalide');\n  }\n  return { id: value.id, name: value.name.trim() };\n}"
          }
        ]
      }
    ],
    "exercise": "Construis un parseur de réponse JSON qui valide la structure d’un produit, puis formate une date ISO en français et précise le fuseau utilisé."
  },
  {
    "id": "tests-outillage",
    "title": "26. Tests, qualité et workflow moderne",
    "summary": "Le code moderne s’appuie sur des tests reproductibles, un outillage adapté et une convention d’équipe. Le langage reste distinct du bundler, du transpileur et du gestionnaire de paquets.",
    "concepts": [
      "Écrire des tests unitaires pour les fonctions pures et des tests d’intégration pour les interactions.",
      "Utiliser assertions, cas limites et tests négatifs.",
      "Comprendre lint, formatage, bundling et transpilation comme des rôles différents.",
      "Adopter Git, revue de code et automatisation sans confondre tests passés et absence totale de bugs."
    ],
    "sections": [
      {
        "title": "Tests unitaires et cas limites",
        "body": "Un test doit vérifier un comportement observable avec des entrées contrôlées. Teste le cas nominal, les limites, les entrées invalides et les erreurs attendues. Les fonctions pures sont simples à tester ; les effets de bord nécessitent des doublures ou des environnements adaptés. Évite les tests qui ne font que reproduire l’implémentation interne.",
        "examples": [
          {
            "title": "Test d’une fonction pure",
            "language": "javascript",
            "code": "import { describe, it, expect } from 'vitest';\nimport { applyDiscount } from './pricing.js';\n\ndescribe('applyDiscount', () => {\n  it('applique une remise', () => {\n    expect(applyDiscount(100, 0.2)).toBe(80);\n  });\n});"
          }
        ]
      },
      {
        "title": "Outils : rôles distincts",
        "body": "Le runtime exécute le programme ; un bundler regroupe ou transforme les modules ; un transpileur convertit certaines syntaxes ; un linter détecte des motifs suspects ; un formateur homogénéise la présentation ; un gestionnaire de paquets installe et verrouille les dépendances. Ces outils se recouvrent parfois, mais leurs objectifs ne sont pas interchangeables.",
        "examples": [
          {
            "title": "Exemple de scripts npm",
            "language": "json",
            "code": "{\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"test\": \"vitest run\",\n    \"lint\": \"eslint .\"\n  }\n}"
          }
        ]
      },
      {
        "title": "Workflow de qualité",
        "body": "Un workflow robuste comprend des changements petits, des noms explicites, des commits compréhensibles, une revue et une intégration continue. Les tests détectent les régressions couvertes, mais ne prouvent pas qu’un programme est exempt de défauts. Documente les hypothèses, garde les dépendances à jour et vérifie aussi accessibilité, sécurité et comportement dans le navigateur cible.",
        "examples": [
          {
            "title": "Checklist de revue",
            "language": "javascript",
            "code": "// Avant de fusionner :\n// 1. Relire le diff et supprimer le code mort.\n// 2. Tester cas nominal, erreurs et valeurs limites.\n// 3. Vérifier clavier, focus et messages d’erreur.\n// 4. Contrôler les dépendances et les données sensibles.\n// 5. Documenter toute limitation connue."
          }
        ]
      }
    ],
    "exercise": "Crée un petit module de panier avec tests unitaires, lint et scripts de projet. Ajoute au moins un test d’erreur et explique ce que la suite ne couvre pas."
  },
];
