import type { Course } from './types';

export const typescriptCourse: Course = {
  "id": "typescript",
  "title": "TypeScript approfondi",
  "category": "Langage",
  "tags": [
    "typescript",
    "typage-statique",
    "generiques",
    "type-system",
    "tsconfig",
    "api-typées"
  ],
  "description": "Formation approfondie au système de types TypeScript, conçue comme un complément au cours JavaScript moderne. Elle privilégie la compréhension des garanties et limites, les exemples comparatifs, les ateliers spécifiques à chaque module, des solutions commentées séparées, les tests de types et un projet métier final. Les exercices distinguent compilation statique et validation à l’exécution.",
  "level": "Intermédiaire à avancé",
  "duration": "50 à 65 heures avec ateliers, étude des corrigés, révisions et projet final",
  "prerequisites": [
    "Avoir suivi le cours JavaScript moderne ou maîtriser déjà les fondamentaux du langage : valeurs, fonctions, objets, tableaux, modules et asynchronisme.",
    "Savoir utiliser un terminal, npm et un éditeur avec prise en charge de TypeScript."
  ],
  "objectives": [
    "Comprendre le modèle statique et les limites du système de types effacé.",
    "Modéliser des contrats explicites avec unions, intersections, types utilitaires et types calculés.",
    "Concevoir des abstractions génériques précises et maintenables.",
    "Configurer un projet strict et comprendre la résolution des modules et déclarations.",
    "Valider les données inconnues à l’exécution au lieu de faire confiance aux assertions.",
    "Construire et tester des API TypeScript publiques compatibles et évolutives.",
    "Appliquer TypeScript aux contrats React sans réapprendre les fondamentaux de React.",
    "Diagnostiquer les types trop larges, les assertions risquées et les pertes de précision de l’inférence.",
    "Écrire des tests de types et des tests runtime complémentaires pour sécuriser les API."
  ],
  "modules": [
    {
      "id": "modele-types",
      "title": "1. Modèle mental du système de types",
      "summary": "Comprendre ce que TypeScript garantit, ce qu’il ne garantit pas et comment le compilateur interprète les annotations.",
      "concepts": [
        "Type statique, exécution JavaScript et effacement",
        "Compatibilité structurelle",
        "Soundness et limites assumées"
      ],
      "sections": [
        {
          "title": "Type statique, exécution JavaScript et effacement",
          "body": "TypeScript analyse le programme avant son exécution, puis ses annotations sont effacées lors de l’émission JavaScript. Les types ne créent donc pas de validation automatique au runtime : une réponse HTTP déclarée `User` peut malgré tout contenir une chaîne invalide. Le bon modèle mental est celui d’un vérificateur de contrats entre les parties de ton propre programme, pas d’un mécanisme de sécurité pour les données externes.\n\nApprofondissement — Pour raisonner correctement, sépare trois niveaux : la valeur qui existe à l’exécution, le type que le compilateur lui attribue et les garanties apportées par les fonctions qui la produisent. Une annotation ne transforme jamais une donnée ni ne vérifie son origine. À la frontière d’un système, pars de unknown, valide, puis expose une valeur métier déjà vérifiée.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type User = { id: string; email: string };\n\n// Le type disparaît du JavaScript produit.\nconst user: User = { id: \"u_42\", email: \"a@example.com\" };"
            },
            {
              "title": "La frontière reste inconnue",
              "language": "typescript",
              "code": "function readId(input: unknown): string {\n  if (typeof input !== \"string\" || input.trim() === \"\") {\n    throw new Error(\"Identifiant invalide\");\n  }\n  return input;\n}"
            }
          ]
        },
        {
          "title": "Compatibilité structurelle",
          "body": "TypeScript compare généralement la forme des valeurs : un objet possédant les propriétés requises est compatible avec le type cible, même s’il provient d’un autre type nommé. Les vérifications des littéraux frais sont plus strictes afin de repérer les propriétés probablement mal orthographiées. Comprendre cette distinction évite de confondre les noms de types avec des classes nominales.\n\nApprofondissement — La compatibilité structurelle facilite l’interopérabilité, mais peut accepter des objets plus riches que le contrat demandé. Les contrôles de propriétés excédentaires sont surtout une aide lors de la création directe d’un littéral ; ce ne sont pas des règles d’exactitude générale. Si l’identité d’un type compte réellement, utilise une construction contrôlée, un discriminant ou une marque validée à la création.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Point = { x: number; y: number };\ntype NamedPoint = { x: number; y: number; name: string };\n\nconst named: NamedPoint = { x: 2, y: 3, name: \"A\" };\nconst point: Point = named; // compatible : x et y suffisent"
            }
          ]
        },
        {
          "title": "Soundness et limites assumées",
          "body": "Le système est volontairement pragmatique : `any`, les assertions, certaines opérations sur tableaux et les définitions de bibliothèques peuvent créer des zones non garanties. Une base TypeScript fiable limite ces échappatoires, traite les entrées comme inconnues et active les options strictes. La qualité du typage se juge aussi à la manière dont les frontières non sûres sont isolées.\n\nApprofondissement — Ne confonds pas « le compilateur accepte ce programme » et « le programme est correct ». Les assertions, any, les définitions de dépendances et les mutations via d’autres références réduisent les garanties. Lors d’une revue, repère ces échappatoires et justifie-les ; préfère des fonctions de parsing et des types de sortie construits uniquement après validation.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "function parseId(value: unknown): string {\n  if (typeof value !== \"string\" || value.length === 0) {\n    throw new Error(\"Identifiant invalide\");\n  }\n  return value;\n}"
            }
          ]
        }
      ],
      "exercise": "Exercice — Frontière de confiance. Écris parseUser(input: unknown): User pour accepter uniquement un objet avec un id non vide et un email contenant une chaîne non vide. N’utilise ni any ni assertion pour valider. Livrable : le type User, le parseur et des tests pour une entrée valide, null, une propriété manquante et un mauvais type. Critères d’acceptation : les données sont contrôlées à l’exécution ; le type de sortie ne peut être obtenu qu’après validation ; les erreurs indiquent le champ invalide."
    },
    {
      "id": "inference-annotations",
      "title": "2. Inférence, annotations et widening",
      "summary": "Choisir où expliciter un type et comprendre comment TypeScript élargit les littéraux.",
      "concepts": [
        "Inférence des variables et retours",
        "Élargissement des littéraux et as const",
        "satisfies pour vérifier sans perdre l’inférence"
      ],
      "sections": [
        {
          "title": "Inférence des variables et retours",
          "body": "Le compilateur déduit souvent les types à partir des valeurs et du corps des fonctions. Annoter chaque variable locale ajoute du bruit lorsque l’inférence est claire ; en revanche, les paramètres publics, les contrats métier et les frontières de modules gagnent à être explicites. L’objectif est de rendre les intentions lisibles, pas de répéter mécaniquement le compilateur.\n\nApprofondissement — L’inférence est particulièrement utile à l’intérieur d’une fonction, mais les annotations stabilisent les contrats aux frontières : paramètres exportés, retours métier et callbacks publics. Une annotation de retour explicite peut aussi empêcher qu’une implémentation élargisse accidentellement son API. Ne cherche pas à annoter chaque variable : explicite les intentions qui ne sont pas évidentes.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "const retryLimit = 3; // number, avec littéral conservé selon le contexte\n\nfunction double(value: number) {\n  return value * 2; // retour inféré : number\n}\n\nexport function calculateTax(amount: number): number {\n  return amount * 0.2;\n}"
            }
          ]
        },
        {
          "title": "Élargissement des littéraux et as const",
          "body": "Une variable réassignable contenant une chaîne reçoit généralement le type `string`, pas le littéral exact. `as const` préserve les littéraux et rend les propriétés readonly ; c’est utile pour les tables de configuration et les unions dérivées. Ce mécanisme ne fige pas profondément un objet au runtime : il s’agit d’une restriction statique.\n\nApprofondissement — Les littéraux sont souvent élargis selon la mutabilité et le contexte d’inférence. as const préserve les valeurs littérales et rend statiquement readonly les propriétés du littéral ; il ne gèle pas l’objet en mémoire. Pour des configurations, associe-le à une vérification de forme lorsque c’est utile, puis vérifie le comportement exact des clés et des valeurs dans l’éditeur.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "const status = \"ready\"; // type \"ready\"\nlet mutableStatus = \"ready\"; // type string\nconst routes = { home: \"/\", account: \"/account\" } as const;\ntype RouteName = keyof typeof routes; // \"home\" | \"account\""
            }
          ]
        },
        {
          "title": "satisfies pour vérifier sans perdre l’inférence",
          "body": "L’opérateur `satisfies` vérifie qu’une expression respecte un contrat sans remplacer le type précis inféré de cette expression par le type cible. Il est particulièrement utile pour les configurations, les dictionnaires et les tables de correspondance où l’on veut valider la forme tout en conservant les clés et valeurs littérales.\n\nApprofondissement — satisfies valide une expression contre un contrat sans remplacer son type inféré par celui du contrat. Il ne répare pas une valeur incorrecte et ne constitue pas une validation runtime. Vérifie notamment les unions de chaînes, les propriétés obligatoires et les propriétés inconnues des littéraux frais ; compare le résultat avec une annotation classique pour comprendre ce que tu conserves.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Route = { path: `/${string}`; auth: boolean };\nconst routes = {\n  home: { path: \"/\", auth: false },\n  profile: { path: \"/profile\", auth: true },\n} satisfies Record<string, Route>;\n\ntype RouteKey = keyof typeof routes; // \"home\" | \"profile\""
            },
            {
              "title": "satisfies et conservation des clés",
              "language": "typescript",
              "code": "type Mode = \"light\" | \"dark\";\nconst labels = { light: \"Clair\", dark: \"Sombre\" } satisfies Record<Mode, string>;\ntype LabelKey = keyof typeof labels; // \"light\" | \"dark\""
            }
          ]
        }
      ],
      "exercise": "Exercice — Configuration sans perte d’inférence. Définis les modes compact et comfortable avec leurs tailles, puis utilise as const et satisfies pour garantir que les deux modes existent et que chaque taille est positive. Expose Mode et ModeConfig à partir de la valeur. Critères d’acceptation : une clé manquante ou une taille string est rejetée ; keyof conserve les deux noms exacts ; aucun cast n’est nécessaire."
    },
    {
      "id": "objets-proprietes",
      "title": "3. Types d’objets et contrats de données",
      "summary": "Modéliser les propriétés facultatives, les champs readonly et les formes d’objets sans dupliquer inutilement les définitions.",
      "concepts": [
        "Optionalité, undefined et exactOptionalPropertyTypes",
        "readonly, index signatures et dictionnaires",
        "Composition par intersections et héritage d’interfaces"
      ],
      "sections": [
        {
          "title": "Optionalité, undefined et exactOptionalPropertyTypes",
          "body": "`name?: string` signifie qu’une propriété peut être absente ; sans option stricte spécifique, l’affectation explicite de `undefined` peut aussi être acceptée. Cette distinction compte pour les patchs HTTP, où « ne pas fournir le champ » peut différer de « effacer le champ ». Active `exactOptionalPropertyTypes` lorsque ce contrat doit être précis et traite les propriétés absentes explicitement.\n\nApprofondissement — Pour une propriété facultative, distingue l’absence du champ, la présence avec undefined et la présence avec null. Ces états peuvent avoir des sens métier différents dans un PATCH. Active exactOptionalPropertyTypes lorsque le contrat exige que « absent » signifie réellement « ne pas modifier », et teste les sérialisations JSON car undefined n’est pas conservé comme une valeur de propriété JSON.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type ProfilePatch = {\n  // absent = ne pas modifier ; string = définir la valeur\n  displayName?: string;\n};\n\nconst unchanged: ProfilePatch = {};\nconst renamed: ProfilePatch = { displayName: \"Ada\" };"
            },
            {
              "title": "PATCH avec absence et null",
              "language": "typescript",
              "code": "type ProfilePatch = { nickname?: string | null };\nconst keep = {};\nconst clear = { nickname: null };\nconst set = { nickname: \"Ada\" };"
            }
          ]
        },
        {
          "title": "readonly, index signatures et dictionnaires",
          "body": "`readonly` empêche certaines réaffectations via cette référence, mais ne rend pas automatiquement les objets profondément immuables. Une signature d’index décrit les propriétés arbitraires d’un dictionnaire ; elle doit être suffisamment précise pour ne pas effacer le typage des clés connues. Pour les tables métier, `Record<Key, Value>` est souvent plus strict qu’un index `[key: string]`.\n\nApprofondissement — readonly limite les écritures par une référence typée ; il n’assure pas une immutabilité profonde ni une protection contre les autres références. noUncheckedIndexedAccess rappelle qu’une clé de dictionnaire peut manquer. Préfère des clés finies avec Record<Union, Value> lorsque le domaine est connu, et traite explicitement l’absence avec les indexations ouvertes.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type FeatureFlags = Record<\"search\" | \"billing\", boolean>;\nconst flags: FeatureFlags = { search: true, billing: false };\n\ntype ReadonlyUser = { readonly id: string; name: string };\nconst user: ReadonlyUser = { id: \"u1\", name: \"Sam\" };\nuser.name = \"Alex\"; // autorisé"
            }
          ]
        },
        {
          "title": "Composition par intersections et héritage d’interfaces",
          "body": "Les intersections combinent des contraintes, tandis que `interface extends` exprime souvent plus lisiblement un contrat d’objet extensible. Des propriétés homonymes incompatibles dans une intersection peuvent produire un type impossible ou surprenant. Choisis l’outil selon l’intention : composition de contraintes pour les intersections, contrat nommé et extensible pour les interfaces.\n\nApprofondissement — Les interfaces peuvent être étendues et fusionnées dans certaines situations, tandis que les alias peuvent exprimer unions, intersections et types calculés. Une intersection n’est pas une fusion intelligente : deux propriétés de même nom aux types incompatibles peuvent rendre la propriété impossible à utiliser. Choisis une composition lisible et évite les contrats qui combinent des champs contradictoires.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Identified = { id: string };\ntype Timestamped = { createdAt: Date };\ntype Entity = Identified & Timestamped;\n\ninterface Paginated<T> { items: T[]; nextCursor?: string }\ninterface UserPage extends Paginated<{ id: string; email: string }> { total: number }"
            }
          ]
        }
      ],
      "exercise": "Exercice — Contrat de PATCH. Modélise un profil et son patch : champ absent = ne pas modifier, null = effacer le surnom, string = le remplacer. Active ou explique exactOptionalPropertyTypes. Écris une fonction d’application du patch. Critères d’acceptation : absence, null et chaîne ont trois comportements distincts ; les champs inconnus sont rejetés à la création du littéral ; les règles sont documentées."
    },
    {
      "id": "unions-narrowing",
      "title": "4. Unions, narrowing et exhaustivité",
      "summary": "Représenter les variantes possibles d’une valeur et faire vérifier chaque branche par le compilateur.",
      "concepts": [
        "Unions discriminées comme machines à états",
        "Narrowing par tests et opérateurs",
        "never et contrôle exhaustif"
      ],
      "sections": [
        {
          "title": "Unions discriminées comme machines à états",
          "body": "Une union discriminée encode les états autorisés avec un champ littéral commun. Elle évite les combinaisons incohérentes comme `loading: true` avec un résultat déjà disponible. Chaque variante doit contenir uniquement les données pertinentes à son état ; le compilateur réduit ensuite l’union après un test du discriminant.\n\nApprofondissement — Une union discriminée doit représenter des états réellement possibles. Par exemple, un état success devrait porter sa donnée, tandis qu’un état error porte une erreur ; évite les objets avec plusieurs booléens indépendants qui autorisent des combinaisons incohérentes. Le discriminant devient alors une machine à états vérifiable et une documentation exécutable du domaine.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Result<T> =\n  | { status: \"idle\" }\n  | { status: \"loading\" }\n  | { status: \"success\"; data: T }\n  | { status: \"error\"; message: string };\n\nfunction describe<T>(result: Result<T>): string {\n  switch (result.status) {\n    case \"idle\": return \"Prêt\";\n    case \"loading\": return \"Chargement\";\n    case \"success\": return \"Terminé\";\n    case \"error\": return result.message;\n  }\n}"
            },
            {
              "title": "Rendre les états incompatibles",
              "language": "typescript",
              "code": "type Load<T> =\n  | { status: \"loading\" }\n  | { status: \"ready\"; value: T }\n  | { status: \"failed\"; reason: string };\nfunction getLabel<T>(state: Load<T>): string {\n  return state.status === \"ready\" ? \"Prêt\" : state.status;\n}"
            }
          ]
        },
        {
          "title": "Narrowing par tests et opérateurs",
          "body": "TypeScript affine les types avec `typeof`, `in`, `instanceof`, comparaisons de discriminants et retours précoces. Un test doit établir une propriété réellement fiable ; vérifier seulement qu’une valeur est truthy n’est pas équivalent à vérifier son type. Les vérifications successives peuvent rendre les branches plus simples et supprimer des assertions.\n\nApprofondissement — Le narrowing est fiable lorsqu’une condition établit une propriété précise. typeof ne distingue pas tous les objets, et typeof null vaut historiquement object ; les tests d’appartenance ne valident pas la structure complète d’une donnée externe. Pour un payload non fiable, combine des contrôles explicites ou un schéma runtime avant de construire une union métier.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "function format(value: string | number | null): string {\n  if (value === null) return \"—\";\n  if (typeof value === \"number\") return value.toFixed(2);\n  return value.trim();\n}"
            }
          ]
        },
        {
          "title": "never et contrôle exhaustif",
          "body": "Après avoir traité toutes les variantes d’une union, le type restant doit être `never`. Utiliser une fonction d’exhaustivité rend les évolutions visibles : si une nouvelle variante est ajoutée, le compilateur signale les endroits qui ne la prennent pas en charge. C’est particulièrement utile pour les actions, les états de requête et les événements métier.\n\nApprofondissement — L’exhaustivité protège les évolutions du domaine. Lorsqu’une variante est ajoutée, les switches doivent échouer à la compilation là où le cas n’est pas traité. N’utilise pas un default qui renvoie une valeur générique si cela masque une nouvelle variante ; une fonction assertNever rend la rupture visible. Ajoute un test comportemental pour chaque branche.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Payment = { kind: \"card\"; last4: string } | { kind: \"cash\" };\nfunction assertNever(value: never): never {\n  throw new Error(`Cas non géré : ${JSON.stringify(value)}`);\n}\nfunction label(payment: Payment): string {\n  switch (payment.kind) {\n    case \"card\": return `Carte •••• ${payment.last4}`;\n    case \"cash\": return \"Espèces\";\n    default: return assertNever(payment);\n  }\n}"
            }
          ]
        }
      ],
      "exercise": "Exercice — Machine à états. Modélise idle, loading, success et error par une union discriminée. Écris renderMessage et traite tous les cas avec un contrôle exhaustif fondé sur never. Critères d’acceptation : chaque état possède uniquement ses données pertinentes ; l’ajout d’un nouvel état déclenche une erreur de compilation tant que renderMessage n’est pas complété ; aucun champ optionnel artificiel ne remplace le discriminant."
    },
    {
      "id": "predicats-assertions",
      "title": "5. Gardes de type, prédicats et assertions",
      "summary": "Créer des fonctions de vérification réutilisables et comprendre les risques des assertions.",
      "concepts": [
        "Prédicats de type personnalisés",
        "Assertions non-null et assertions de type",
        "Fonctions assert et invariants"
      ],
      "sections": [
        {
          "title": "Prédicats de type personnalisés",
          "body": "Une fonction qui retourne `value is T` permet au compilateur d’utiliser son résultat comme garde. Le prédicat doit correspondre à une vérification réelle : une signature mensongère peut rendre le programme statiquement convaincant mais faux à l’exécution. Centralise les gardes simples pour réduire les contrôles dupliqués.\n\nApprofondissement — Un prédicat value is User est une promesse faite au compilateur : il ne vérifie pas automatiquement le corps de la fonction. Si le prédicat est trop permissif, le code en aval croit à tort que la valeur est valide. Pour les objets, vérifie null, le type objet, les champs requis et leurs types ; si le contrat est riche, un validateur de schéma est souvent plus sûr.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type User = { id: string; email: string };\nfunction isUser(value: unknown): value is User {\n  if (typeof value !== \"object\" || value === null) return false;\n  const item = value as Record<string, unknown>;\n  return typeof item.id === \"string\" && typeof item.email === \"string\";\n}"
            },
            {
              "title": "Tester un champ sans assertion non contrôlée",
              "language": "typescript",
              "code": "function hasName(value: unknown): value is { name: string } {\n  return typeof value === \"object\" && value !== null &&\n    \"name\" in value && typeof value.name === \"string\";\n}"
            }
          ]
        },
        {
          "title": "Assertions non-null et assertions de type",
          "body": "`value as T` et `value!` changent ce que le compilateur croit, mais n’effectuent aucun contrôle à l’exécution. Réserve-les aux cas où une garantie externe est documentée et difficile à exprimer autrement. Préfère une vérification, une valeur par défaut ou une fonction qui retourne une erreur explicite.\n\nApprofondissement — Une assertion `as User` ou l’opérateur `!` ne modifie pas la valeur à l’exécution. Réserve-les aux endroits où une garantie est établie par un mécanisme externe documenté, et préfère une branche qui lève une erreur ou retourne un résultat explicite. Les assertions successives sont souvent le signe qu’il manque une fonction de construction ou un contrat mieux conçu.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "function requireElement(id: string): HTMLElement {\n  const element = document.getElementById(id);\n  if (!element) throw new Error(`Élément absent : ${id}`);\n  return element;\n}\n\nconst panel = requireElement(\"panel\"); // pas de ! nécessaire"
            }
          ]
        },
        {
          "title": "Fonctions assert et invariants",
          "body": "Une fonction `asserts condition` peut annoncer au compilateur qu’une condition est vraie après son appel, si elle ne lève pas d’exception. Utilise-la pour des invariants internes précis ; pour les entrées utilisateur, les erreurs de validation sont souvent plus utiles qu’une exception générique. Distingue assertion de programme et validation de données.\n\nApprofondissement — Une fonction d’assertion `asserts condition` permet au compilateur de réduire le type après son retour, mais son implémentation doit réellement vérifier la condition. Écris des messages utiles, teste le cas invalide et évite de cacher des effets de bord dans ces fonctions. Les invariants métier complexes doivent être contrôlés au point de création de l’objet, pas dispersés dans l’application.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "function assertDefined<T>(value: T | null | undefined, message: string): asserts value is T {\n  if (value == null) throw new Error(message);\n}\n\nfunction useConfig(config: { endpoint?: string }) {\n  assertDefined(config.endpoint, \"endpoint requis\");\n  return config.endpoint.toUpperCase();\n}"
            }
          ]
        }
      ],
      "exercise": "Exercice — Prédicat de validation. Implémente isNonEmptyString(value: unknown): value is string et un parseur d’identifiant qui renvoie une erreur explicite pour les valeurs invalides. Compare ce prédicat à une assertion `as string`. Critères d’acceptation : le prédicat vérifie la valeur à l’exécution ; les entrées null, nombre et chaîne vide échouent ; l’assertion seule n’est jamais présentée comme une validation."
    },
    {
      "id": "fonctions-types",
      "title": "6. Types de fonctions et signatures publiques",
      "summary": "Décrire précisément les paramètres, retours, callbacks, surcharges et fonctions génériques sans réenseigner les bases des fonctions JavaScript.",
      "concepts": [
        "Types de callbacks et paramètres optionnels",
        "Surcharges et signatures d’implémentation",
        "Paramètres this et compatibilité des callbacks"
      ],
      "sections": [
        {
          "title": "Types de callbacks et paramètres optionnels",
          "body": "Les types de fonctions décrivent la forme des appels autorisés. Un paramètre optionnel peut être omis par l’appelant ; il ne faut pas le confondre avec un paramètre qui accepte explicitement `undefined`. Les callbacks gagnent à préciser le type de leurs données et, dans les API publiques, à éviter les signatures ambiguës.\n\nApprofondissement — Les signatures de callbacks doivent refléter la façon dont ils seront réellement appelés. Un paramètre optionnel signifie que l’appelant peut l’omettre ; ce n’est pas simplement une indication qu’il pourrait être ignoré par l’implémentation. Vérifie la variance des paramètres, les retours void et les callbacks d’API tierces avant de rendre une signature publique.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Formatter<T> = (value: T, index: number) => string;\nfunction formatAll<T>(items: readonly T[], formatter: Formatter<T>): string[] {\n  return items.map(formatter);\n}\nconst labels = formatAll([10, 20], (value) => `#${value}`);"
            }
          ]
        },
        {
          "title": "Surcharges et signatures d’implémentation",
          "body": "Les surcharges offrent plusieurs contrats d’appel au-dessus d’une implémentation unique. Elles sont utiles quand la forme du résultat dépend de la forme des arguments, mais deviennent coûteuses si de simples unions suffisent. Les signatures visibles doivent être cohérentes entre elles et l’implémentation doit couvrir tous les cas annoncés.\n\nApprofondissement — Les surcharges exposent plusieurs contrats d’appel et une seule implémentation doit prendre en charge tous les cas. Les signatures visibles par les appelants sont les surcharges, pas la signature d’implémentation. Si les cas ne sont pas nettement distincts, une union discriminée peut être plus simple et plus facile à maintenir que de nombreuses surcharges.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "function parse(input: string): URL;\nfunction parse(input: URL): URL;\nfunction parse(input: string | URL): URL {\n  return input instanceof URL ? input : new URL(input);\n}"
            },
            {
              "title": "Surcharges visibles par les appelants",
              "language": "typescript",
              "code": "function toUrl(value: string): URL;\nfunction toUrl(value: URL): URL;\nfunction toUrl(value: string | URL): URL {\n  return value instanceof URL ? value : new URL(value);\n}"
            }
          ]
        },
        {
          "title": "Paramètres this et compatibilité des callbacks",
          "body": "TypeScript permet de typer explicitement le paramètre spécial `this` et de vérifier les callbacks dépendant d’un contexte. Les types de fonctions doivent aussi refléter la possibilité réelle d’annulation, d’échec ou d’absence de résultat. Préfère une signature simple et stable à une API surchargée difficile à utiliser.\n\nApprofondissement — La syntaxe `this: Type` est un paramètre de typage supprimé à l’émission, utile pour documenter le contexte d’appel attendu. Une fonction détachée de son objet ou passée comme callback peut perdre son this dynamique. Les fonctions fléchées capturent le this lexical et ne se comportent pas comme les méthodes ordinaires : choisis selon le contrat de la bibliothèque.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Handler = (this: HTMLElement, event: MouseEvent) => void;\nconst handler: Handler = function (event) {\n  this.classList.toggle(\"active\", event.clientX > 100);\n};"
            }
          ]
        }
      ],
      "exercise": "Exercice — API de recherche. Définis les types SearchOptions, SearchResult et une signature de fonction qui accepte une requête et des options facultatives. Ajoute un callback typé et une surcharge uniquement si deux formes d’appel réellement distinctes le justifient. Critères d’acceptation : les retours et erreurs sont explicites ; les paramètres publics sont nommés et documentés ; pas de surcharge redondante ni de fonction de type trop permissive."
    },
    {
      "id": "generiques",
      "title": "7. Génériques : relations entre types",
      "summary": "Concevoir des fonctions et abstractions réutilisables qui préservent les informations de type.",
      "concepts": [
        "Paramètres, contraintes et inférence génériques",
        "Valeurs par défaut et contraintes de collections",
        "Génériques de classes et de contrats"
      ],
      "sections": [
        {
          "title": "Paramètres, contraintes et inférence génériques",
          "body": "Un générique est utile lorsqu’un type de sortie dépend d’un type d’entrée. Les contraintes `extends` donnent accès à un sous-ensemble de propriétés sans réduire inutilement la précision. Évite de créer un paramètre générique qui n’est relié à aucune entrée ou sortie : il n’apporte alors souvent aucune garantie utile.\n\nApprofondissement — Un générique est utile lorsqu’il préserve une relation entre plusieurs positions de type : la clé K détermine le type de retour T[K], ou l’entrée T détermine la sortie T. Si le paramètre générique n’influence aucun contrat observable, il est probablement inutile. Laisse l’inférence fonctionner avant d’ajouter des arguments de type manuels.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {\n  return object[key];\n}\nconst user = { id: \"u1\", active: true };\nconst active = getProperty(user, \"active\"); // boolean"
            },
            {
              "title": "Préserver la relation clé-valeur",
              "language": "typescript",
              "code": "function pick<T, K extends keyof T>(value: T, key: K): T[K] {\n  return value[key];\n}\nconst item = { title: \"Livre\", pages: 120 };\nconst pages = pick(item, \"pages\"); // number"
            }
          ]
        },
        {
          "title": "Valeurs par défaut et contraintes de collections",
          "body": "Les paramètres de type peuvent recevoir une valeur par défaut et être contraints par un contrat. Les collections génériques doivent préserver les éléments exacts au lieu de retourner `object`, `unknown[]` ou `any[]`. Cela permet aux appels en chaîne de rester typés et aux erreurs d’être repérées à leur origine.\n\nApprofondissement — Une contrainte `T extends HasId` autorise l’accès aux propriétés garanties, sans réduire T à HasId : les champs spécifiques du type d’origine sont conservés. Attention aux contraintes trop fortes qui excluent des cas valides, et aux valeurs par défaut qui n’interviennent que lorsque l’inférence ne fournit pas le paramètre. Vérifie les cas vides et les unions.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "interface HasId { id: string }\nfunction indexById<T extends HasId>(items: readonly T[]): Map<string, T> {\n  return new Map(items.map((item) => [item.id, item]));\n}\nconst users = indexById([{ id: \"u1\", role: \"admin\" }]);\nusers.get(\"u1\")?.role; // string connu"
            }
          ]
        },
        {
          "title": "Génériques de classes et de contrats",
          "body": "Les génériques peuvent paramétrer une classe ou une interface quand une instance manipule durablement un type de donnée. L’objectif est de relier les opérations au type stocké, pas de généraliser tout par principe. Les paramètres de type sont effacés à l’exécution : on ne peut pas tester directement `value instanceof T`.\n\nApprofondissement — Un repository générique doit préserver l’identité entre son entité et son identifiant. Une abstraction trop générale qui accepte n’importe quel type pour chaque méthode perd cette relation. Préfère des paramètres génériques cohérents, des méthodes aux entrées et sorties précises, et des types métier distincts pour éviter qu’un identifiant utilisateur soit confondu avec un identifiant de commande.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "interface Repository<T, Id> {\n  get(id: Id): Promise<T | undefined>;\n  save(value: T): Promise<void>;\n}\ntype User = { id: string; email: string };\ntype UserRepository = Repository<User, string>;"
            }
          ]
        }
      ],
      "exercise": "Exercice — Repository générique. Crée Repository<T, Id> avec findById et save. Préserve la relation entre l’identifiant accepté et le type d’entité ; évite de remplacer les types liés par unknown ou des unions trop larges. Critères d’acceptation : un repository User n’accepte pas un identifiant incompatible ; save renvoie le même type d’entité ; les contraintes génériques sont minimales et justifiées."
    },
    {
      "id": "keyof-indexed-access",
      "title": "8. keyof, typeof et accès indexé",
      "summary": "Dériver des types à partir de structures existantes afin de limiter la duplication et les divergences.",
      "concepts": [
        "keyof et typeof au niveau des types",
        "Accès indexé T[K]",
        "Dériver des unions depuis des tableaux constants"
      ],
      "sections": [
        {
          "title": "keyof et typeof au niveau des types",
          "body": "`keyof T` produit l’union des clés connues d’un type. `typeof` permet de réutiliser au niveau des types la forme d’une valeur existante. Ces opérateurs sont particulièrement efficaces pour les configurations constantes et les fonctions dont les paramètres doivent être limités aux clés d’un objet.\n\nApprofondissement — `keyof typeof value` combine la valeur existante et le système de types : typeof au niveau du type interroge la forme statique d’une variable, pas le typeof JavaScript à l’exécution. Avec as const, les clés et valeurs littérales sont conservées. Cette technique permet de garder une seule source de vérité pour une table de configuration et son union de clés.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "const permissions = { read: true, write: false, admin: false } as const;\ntype Permission = keyof typeof permissions;\nfunction can(permission: Permission): boolean {\n  return permissions[permission];\n}"
            }
          ]
        },
        {
          "title": "Accès indexé T[K]",
          "body": "`T[K]` récupère le type associé à une clé. Combiné à `K extends keyof T`, il préserve le lien entre la clé demandée et la valeur retournée. C’est une brique fondamentale des fonctions génériques d’accès, de mise à jour et de transformation de données.\n\nApprofondissement — Le type `T[K]` relie une clé à la valeur correspondante. Avec K contraint par keyof T, la fonction refuse une clé absente et retourne le type associé à la clé réellement passée. Si K est une union de plusieurs clés, le résultat est lui aussi une union ; cette perte de précision est logique et doit être prise en compte dans les fonctions génériques.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type User = { id: string; age: number; nickname?: string };\ntype Age = User[\"age\"]; // number\ntype UserValue = User[keyof User]; // string | number | undefined\nfunction read<T, K extends keyof T>(item: T, key: K): T[K] { return item[key]; }"
            },
            {
              "title": "Une clé détermine le retour",
              "language": "typescript",
              "code": "type Settings = { retries: number; endpoint: string };\nfunction readSetting<K extends keyof Settings>(key: K): Settings[K] {\n  const settings: Settings = { retries: 3, endpoint: \"/api\" };\n  return settings[key];\n}"
            }
          ]
        },
        {
          "title": "Dériver des unions depuis des tableaux constants",
          "body": "Une liste déclarée `as const` permet d’obtenir une union de ses valeurs plutôt que de maintenir une union manuellement. Cette technique réduit les désynchronisations entre la configuration, les options d’interface et les types associés. Elle convient aux valeurs finies, mais pas aux données arbitraires reçues du serveur.\n\nApprofondissement — `(typeof values)[number]` extrait l’union des éléments d’un tuple constant. Il faut préserver le tuple avec as const : sans cela, un tableau de chaînes donne généralement string, pas l’union des valeurs présentes. Ne dérive pas des types métier depuis des données modifiables à l’exécution sans contrôler que leur source est fiable.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "const environments = [\"development\", \"test\", \"production\"] as const;\ntype Environment = (typeof environments)[number];\nfunction deployTo(environment: Environment) {}\ndeployTo(\"production\");\n// deployTo(\"staging\") serait refusé"
            }
          ]
        }
      ],
      "exercise": "Exercice — Accès sûr aux propriétés. Écris getProperty<T, K extends keyof T>(object: T, key: K): T[K]. Ajoute un exemple où une clé valide conserve le type précis de sa valeur et un exemple invalide refusé par le compilateur. Critères d’acceptation : aucune clé string arbitraire ; le type de retour dépend de K ; pas d’assertion de retour."
    },
    {
      "id": "mapped-types",
      "title": "9. Mapped types et transformations",
      "summary": "Construire des types à partir des propriétés d’autres types et comprendre les transformations intégrées.",
      "concepts": [
        "Mapped types personnalisés",
        "Pick, Omit, Partial, Required et Record",
        "Remappage des clés et propriétés conditionnelles"
      ],
      "sections": [
        {
          "title": "Mapped types personnalisés",
          "body": "Un mapped type parcourt les clés d’un type pour produire une nouvelle structure. Il permet de créer des vues readonly, des valeurs optionnelles ou des transformations métier sans répéter toutes les propriétés. Garde ces transformations lisibles : une chaîne de types imbriqués peut être plus difficile à maintenir qu’un type nommé explicite.\n\nApprofondissement — Un mapped type parcourt les clés d’un type pour transformer les propriétés de manière uniforme. Les modificateurs `?` et readonly peuvent être ajoutés ou retirés, mais leurs effets doivent correspondre à la sémantique du contrat. Une transformation générique compacte est utile lorsqu’elle réduit une répétition réelle ; si elle devient difficile à lire, nomme les étapes intermédiaires.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Mutable<T> = { -readonly [K in keyof T]: T[K] };\ntype ReadonlyUser = { readonly id: string; readonly name: string };\ntype EditableUser = Mutable<ReadonlyUser>;"
            }
          ]
        },
        {
          "title": "Pick, Omit, Partial, Required et Record",
          "body": "Les types utilitaires standard couvrent de nombreux besoins courants. `Partial<T>` est pratique pour un patch, mais ne doit pas automatiquement représenter une création ou une mise à jour métier : rendre tous les champs facultatifs peut autoriser des états invalides. `Pick` et `Omit` sont utiles pour des vues de données, à condition de garder un contrat métier explicite.\n\nApprofondissement — Les types utilitaires sont des opérateurs de composition, pas des règles métier automatiques. Partial<T> rend les propriétés facultatives mais ne définit pas à lui seul ce que signifie une mise à jour partielle ; Omit<T, K> peut être insuffisant pour distinguer un DTO public d’une entité interne. Définis les contrats d’entrée et de sortie explicitement lorsque leur sens diffère.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type User = { id: string; email: string; role: \"admin\" | \"member\" };\ntype CreateUser = Omit<User, \"id\">;\ntype UserSummary = Pick<User, \"id\" | \"email\">;\ntype RoleCounts = Record<User[\"role\"], number>;"
            },
            {
              "title": "DTO de création explicite",
              "language": "typescript",
              "code": "type User = { id: string; email: string; role: \"admin\" | \"member\" };\ntype CreateUser = Omit<User, \"id\">;\nconst input: CreateUser = { email: \"a@example.com\", role: \"member\" };"
            }
          ]
        },
        {
          "title": "Remappage des clés et propriétés conditionnelles",
          "body": "Avec `as` dans un mapped type, les clés peuvent être transformées ou filtrées. Cela sert à construire des API dérivées, par exemple des gestionnaires d’événements. Les remappages doivent rester prédictibles et documentés : lorsqu’un type généré devient difficile à comprendre, extrais des alias intermédiaires.\n\nApprofondissement — Le remappage `as` peut renommer ou filtrer des clés. Les clés calculées peuvent se chevaucher, et une propriété non textuelle doit être traitée si le type est générique. Documente les conventions de nommage, puis ajoute des tests de types qui vérifient les clés attendues et l’absence de celles qui devraient être filtrées.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Getters<T> = {\n  [K in keyof T as K extends string ? `get${Capitalize<K>}` : never]: () => T[K]\n};\ntype Settings = { theme: string; retries: number };\ntype SettingsGetters = Getters<Settings>;\n// getTheme(): string ; getRetries(): number"
            }
          ]
        }
      ],
      "exercise": "Exercice — DTO de mise à jour. À partir de User, dérive un type de mise à jour qui rend les propriétés modifiables facultatives mais conserve id en lecture seule et exclu du patch. Explique les différences entre Partial, Pick, Omit et une transformation personnalisée. Critères d’acceptation : id est refusé dans le patch ; les types des champs sont conservés ; la transformation n’affaiblit pas inutilement les types."
    },
    {
      "id": "conditional-infer",
      "title": "10. Types conditionnels et infer",
      "summary": "Exprimer des relations de types qui dépendent d’une condition et extraire une information d’une structure.",
      "concepts": [
        "Types conditionnels",
        "infer et extraction des retours",
        "Distributivité et tableaux de cas"
      ],
      "sections": [
        {
          "title": "Types conditionnels",
          "body": "Un type conditionnel choisit une branche selon une relation d’assignabilité. Il peut représenter une transformation générique, mais des conditions complexes s’évaluent difficilement à l’œil. Nomme les étapes et teste les cas représentatifs pour éviter de construire une métaprogrammation plus complexe que le problème.\n\nApprofondissement — Un type conditionnel `T extends U ? X : Y` choisit une branche selon l’assignabilité statique. Ce n’est pas un if runtime et il ne peut pas inspecter une valeur à l’exécution. Lorsqu’un type générique reste non résolu, l’évaluation peut être différée jusqu’à l’instanciation ; garde les définitions suffisamment petites pour comprendre la branche choisie.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type IdOf<T> = T extends { id: infer I } ? I : never;\ntype A = IdOf<{ id: string; name: string }>; // string\ntype B = IdOf<{ name: string }>; // never"
            }
          ]
        },
        {
          "title": "infer et extraction des retours",
          "body": "`infer` introduit un type à extraire lorsque le type testé correspond à une structure. Les utilitaires `ReturnType`, `Parameters`, `Awaited` et `InstanceType` reposent sur des idées similaires. Préfère les utilitaires standards lorsqu’ils expriment directement l’intention, et crée une condition personnalisée lorsque le contrat est spécifique.\n\nApprofondissement — `infer` capture un type à l’intérieur d’une forme que le compilateur compare. Il peut extraire un retour, un élément de promesse ou un paramètre, mais les surcharges et les fonctions génériques peuvent rendre l’extraction moins intuitive. Avant de créer un utilitaire personnalisé, regarde si ReturnType, Parameters, Awaited ou InstanceType répond déjà au besoin.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type AsyncValue<T> = T extends Promise<infer U> ? U : T;\ntype A = AsyncValue<Promise<{ id: string }>>; // { id: string }\ntype B = Awaited<Promise<Promise<number>>>; // number"
            }
          ]
        },
        {
          "title": "Distributivité et tableaux de cas",
          "body": "Un type conditionnel appliqué à un paramètre générique nu se distribue sur les membres d’une union. Encapsuler le paramètre dans un tuple désactive cette distributivité. Cette différence est importante pour filtrer des unions ou vérifier l’union entière, et mérite des tests de types explicites.\n\nApprofondissement — Les conditionnels distributifs se distribuent sur une union lorsque le paramètre testé est un paramètre générique nu. En enveloppant les deux côtés dans un tuple, tu testes l’union dans son ensemble. Cette différence explique de nombreux types calculés inattendus ; construis un tableau de cas pour string, number, leurs unions et never avant de réutiliser un utilitaire.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type ToArray<T> = T extends unknown ? T[] : never;\ntype Distributed = ToArray<string | number>; // string[] | number[]\ntype WholeArray<T> = [T] extends [unknown] ? T[] : never;\ntype Combined = WholeArray<string | number>; // (string | number)[]"
            },
            {
              "title": "Distribution sur une union",
              "language": "typescript",
              "code": "type BoxEach<T> = T extends unknown ? { value: T } : never;\ntype Separate = BoxEach<string | number>;\n// { value: string } | { value: number }"
            }
          ]
        }
      ],
      "exercise": "Exercice — Résultat asynchrone. Construis un type qui extrait le type résolu d’une Promise ou d’une fonction qui renvoie une Promise, en utilisant Awaited et/ou infer. Documente les cas non couverts et compare à Awaited intégré. Critères d’acceptation : les cas string, Promise<number> et Promise<Promise<boolean>> sont testés ; le type est assignable au résultat attendu ; pas de complexité si un type intégré suffit."
    },
    {
      "id": "template-literal-types",
      "title": "11. Template literal types",
      "summary": "Modéliser des chaînes structurées, des événements et des conventions de noms au niveau du système de types.",
      "concepts": [
        "Unions de chaînes calculées",
        "Types de chaînes et conventions d’API",
        "Routes et paramètres extraits"
      ],
      "sections": [
        {
          "title": "Unions de chaînes calculées",
          "body": "Les template literal types composent des chaînes à partir d’un ou plusieurs types littéraux. Ils sont utiles pour les événements, les noms de routes, les variables de configuration et les clés dérivées. Le produit cartésien de grandes unions peut toutefois produire énormément de variantes : garde les ensembles finis et raisonnables.\n\nApprofondissement — Les template literal types combinent des unions pour produire des ensembles de chaînes autorisées. Le nombre de combinaisons peut croître rapidement : ne transforme pas toutes les chaînes possibles en un système de routage complexe si une table de routes explicite est plus claire. Ces types valident la forme statique des appels, pas une chaîne reçue d’une URL à l’exécution.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Entity = \"user\" | \"invoice\";\ntype Action = \"created\" | \"updated\" | \"deleted\";\ntype EventName = `${Entity}.${Action}`;\nconst eventName: EventName = \"invoice.created\";"
            },
            {
              "title": "Conventions vérifiées à la compilation",
              "language": "typescript",
              "code": "type Resource = \"user\" | \"invoice\";\ntype Event = `${Resource}.created` | `${Resource}.deleted`;\nconst event: Event = \"user.created\";"
            }
          ]
        },
        {
          "title": "Types de chaînes et conventions d’API",
          "body": "Des types comme `Uppercase`, `Lowercase`, `Capitalize` et `Uncapitalize` transforment des chaînes littérales. Associés au remappage des clés, ils permettent d’imposer des conventions. Ils ne remplacent pas la validation d’une chaîne dynamique au runtime ; ils contraignent seulement les valeurs connues du compilateur.\n\nApprofondissement — Le remappage de clés permet de générer des conventions comme onSaved à partir d’un modèle. Fais attention à Capitalize, qui agit sur les chaînes et n’est pas une normalisation linguistique universelle. Les noms produits doivent rester lisibles, sans collisions et cohérents avec les conventions de l’API publique.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type EventHandlers<T> = {\n  [K in keyof T as K extends string ? `on${Capitalize<K>}` : never]: (value: T[K]) => void\n};\ntype Model = { saved: Date; failed: Error };\ntype Handlers = EventHandlers<Model>;"
            }
          ]
        },
        {
          "title": "Routes et paramètres extraits",
          "body": "Un modèle de route peut servir à contraindre les chemins connus et à extraire leurs paramètres. Ce type reste une aide à la compilation ; un routeur doit toujours vérifier le chemin réel et décoder les paramètres reçus. Pour des systèmes de routage complexes, une bibliothèque éprouvée peut être préférable à une solution typée maison.\n\nApprofondissement — L’extraction récursive de paramètres de route illustre bien les types calculés, mais elle doit être testée sur les cas sans paramètre, un seul paramètre et plusieurs segments. Une route dynamique reçue à l’exécution nécessite toujours un parseur. Pour une bibliothèque, limite la complexité et fournis des erreurs compréhensibles aux utilisateurs de l’API.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Route = \"/users/:userId\" | \"/invoices/:invoiceId/items/:itemId\";\ntype Params<S extends string> = S extends `${string}:${infer P}/${infer Rest}`\n  ? P | Params<Rest>\n  : S extends `${string}:${infer P}` ? P : never;\ntype InvoiceParams = Params<\"/invoices/:invoiceId/items/:itemId\">;"
            }
          ]
        }
      ],
      "exercise": "Exercice — Événements typés. À partir de `\"created\" | \"deleted\"`, dérive les noms `\"onCreated\" | \"onDeleted\"` et définis une table de handlers exhaustive. Critères d’acceptation : une clé manquante ou mal orthographiée est rejetée ; les noms sont dérivés d’une union source ; le code évite une union écrite deux fois manuellement."
    },
    {
      "id": "tuples-variadiques",
      "title": "12. Tuples avancés et paramètres variadiques",
      "summary": "Décrire les positions, longueurs et relations entre éléments d’un tableau lorsque leur ordre est significatif.",
      "concepts": [
        "Tuples nommés et éléments optionnels",
        "Rest tuples et concaténation typée",
        "Paramètres nommés via objets typés"
      ],
      "sections": [
        {
          "title": "Tuples nommés et éléments optionnels",
          "body": "Un tuple décrit une séquence de positions connues, contrairement à un tableau homogène. Les labels améliorent la lisibilité sans changer le type. Utilise les tuples pour les résultats fixes et les paramètres structurés ; pour des collections de taille arbitraire, conserve un tableau classique.\n\nApprofondissement — Un tuple décrit la position et le type de chaque élément, contrairement à un tableau homogène. Les labels améliorent la documentation mais ne changent pas la compatibilité structurelle. Les éléments optionnels et rest doivent être ordonnés conformément aux règles de TypeScript ; teste les longueurs permises et les cas vides.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type HttpResult = [status: number, body: string, retryAfter?: number];\nconst ok: HttpResult = [200, \"ok\"];\nconst limited: HttpResult = [429, \"too many requests\", 30];"
            }
          ]
        },
        {
          "title": "Rest tuples et concaténation typée",
          "body": "Les tuples variadiques permettent de capturer puis recomposer des paramètres sans perdre leurs types positionnels. Ils sont utiles pour envelopper une fonction, préfixer des arguments ou composer des appels. Les signatures restent toutefois complexes ; un exemple minimal et un test de compilation valent mieux qu’une signature compacte mais opaque.\n\nApprofondissement — Les tuples variadiques permettent de conserver les types et l’ordre des paramètres lors d’une composition. Ils sont utiles pour envelopper une fonction, préfixer un argument ou concaténer des listes de paramètres. Si l’inférence devient illisible, ajoute un alias explicite et vérifie le type obtenu dans un test de types.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "function prepend<Head, Tail extends unknown[]>(head: Head, ...tail: Tail): [Head, ...Tail] {\n  return [head, ...tail];\n}\nconst value = prepend(\"id\", 42, true); // [string, number, boolean]"
            },
            {
              "title": "Conserver les paramètres concaténés",
              "language": "typescript",
              "code": "function prepend<H, T extends unknown[]>(head: H, ...tail: T): [H, ...T] {\n  return [head, ...tail];\n}\nconst result = prepend(\"id\", 4, true); // [string, number, boolean]"
            }
          ]
        },
        {
          "title": "Paramètres nommés via objets typés",
          "body": "Les options complexes sont souvent plus lisibles sous forme d’objet que sous forme de tuple positionnel. Un type dédié peut exprimer les champs requis, les valeurs par défaut et les variantes autorisées. Choisis un tuple lorsque l’ordre fait partie du contrat ; choisis un objet lorsque le sens de chaque valeur doit rester évident.\n\nApprofondissement — Un objet d’options est généralement préférable à une longue liste d’arguments positionnels lorsque les paramètres sont nombreux ou facultatifs. Le type peut limiter les valeurs acceptées, mais il ne met pas en œuvre la politique métier. Dans un exercice de retry, traite aussi les erreurs, l’annulation, le nombre maximal de tentatives et le délai réellement appliqué.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type RetryOptions = { attempts: number; delayMs: number; backoff: \"fixed\" | \"exponential\" };\nfunction retry<T>(operation: () => Promise<T>, options: RetryOptions): Promise<T> {\n  // L’algorithme de retry est omis dans cet extrait de signature.\n  return operation();\n}"
            }
          ]
        }
      ],
      "exercise": "Exercice — Wrapper de fonction. Écris une fonction compose ou partial qui conserve autant que possible les paramètres et le type de retour de la fonction cible à l’aide de tuples génériques. Critères d’acceptation : un exemple à deux paramètres conserve les types ; une mauvaise valeur est rejetée ; si l’abstraction devient illisible, documente la limite et préfère une signature plus simple."
    },
    {
      "id": "classes-contrats",
      "title": "13. Typage des classes et contrats orientés objet",
      "summary": "Approfondir uniquement les garanties TypeScript autour des classes, des interfaces, des membres et des constructeurs.",
      "concepts": [
        "implements, abstract et membres",
        "Modificateurs d’accès et paramètres de propriété",
        "Types statiques et côté constructeur"
      ],
      "sections": [
        {
          "title": "implements, abstract et membres",
          "body": "`implements` vérifie qu’une classe satisfait un contrat, mais ne modifie pas l’inférence de ses membres. Une classe abstraite peut fournir une implémentation commune tout en imposant des méthodes à ses sous-classes. Choisis une interface pour un contrat sans état partagé et une classe abstraite quand un comportement commun est réellement utile.\n\nApprofondissement — implements vérifie qu’une classe respecte un contrat, mais n’ajoute pas les membres de l’interface à la classe et ne change pas son comportement runtime. abstract empêche l’instanciation directe d’une classe abstraite au niveau TypeScript. Garde les abstractions orientées objet pour les comportements partagés réels ; une interface seule suffit souvent pour décrire une dépendance.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "interface Clock { now(): Date }\nabstract class Scheduler {\n  abstract run(): Promise<void>;\n  protected log(message: string): void { console.info(message); }\n}\nclass SystemClock implements Clock { now() { return new Date(); } }"
            }
          ]
        },
        {
          "title": "Modificateurs d’accès et paramètres de propriété",
          "body": "`public`, `protected` et `private` structurent l’accès statique aux membres. Les propriétés déclarées dans les paramètres du constructeur créent automatiquement des champs. Le modificateur `private` TypeScript n’est pas équivalent à une vraie propriété privée JavaScript `#field` : les besoins de confidentialité à l’exécution doivent être traités séparément.\n\nApprofondissement — Les modificateurs private et protected de TypeScript sont principalement des contrôles statiques, tandis que le mot-clé JavaScript # crée un champ privé runtime. readonly empêche les réaffectations par le type, mais pas toute mutation profonde. Explique la différence si le code manipule des données sensibles ou expose des objets à des consommateurs externes.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "class ApiClient {\n  constructor(\n    private readonly baseUrl: URL,\n    public readonly timeoutMs: number,\n  ) {}\n\n  endpoint(path: string): URL { return new URL(path, this.baseUrl); }\n}"
            }
          ]
        },
        {
          "title": "Types statiques et côté constructeur",
          "body": "Une classe possède un type d’instance et une valeur constructeur. Pour typer un constructeur injectable, utilise `new (...args) => Instance`; pour un membre statique, réfère-toi au côté valeur de la classe. Cette distinction devient importante dans les fabriques, les registres de plugins et les systèmes d’injection.\n\nApprofondissement — Le type d’instance et le type constructeur sont deux formes distinctes : `typeof MyClass` décrit le côté statique de la classe, tandis que `InstanceType<typeof MyClass>` extrait le type des instances. Pour les constructeurs génériques, préfère des signatures minimales et testées ; les paramètres `any` ou `never[]` peuvent modifier subtilement la compatibilité.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Constructor<T> = new (...args: never[]) => T;\nfunction create<T>(Ctor: new () => T): T { return new Ctor(); }\nclass Token { readonly value = \"secret\" }\nconst token = create(Token);"
            },
            {
              "title": "Distinguer instance et constructeur",
              "language": "typescript",
              "code": "class Session { constructor(readonly id: string) {} }\ntype SessionInstance = InstanceType<typeof Session>;\nconst createSession = (Ctor: new (id: string) => SessionInstance) => new Ctor(\"s1\");"
            }
          ]
        }
      ],
      "exercise": "Exercice — Adaptateur de paiement. Définis une interface PaymentGateway et deux implémentations substituables, puis injecte l’interface dans un service de commande. Distingue readonly, visibilité et validation des invariants. Critères d’acceptation : le service dépend du contrat, pas d’une classe concrète ; les implémentations peuvent être substituées ; les erreurs métier sont typées ou explicitement documentées."
    },
    {
      "id": "modules-declarations",
      "title": "14. Modules, déclarations et dépendances typées",
      "summary": "Organiser les types entre modules, comprendre les fichiers de déclaration et traiter les dépendances sans définitions fiables.",
      "concepts": [
        "Import/export de types et dépendances circulaires",
        "Fichiers .d.ts et types de bibliothèques",
        "Déclarer les variables d’environnement"
      ],
      "sections": [
        {
          "title": "Import/export de types et dépendances circulaires",
          "body": "`import type` et `export type` rendent explicite une dépendance utilisée uniquement par le vérificateur. Ils réduisent les ambiguïtés et aident à séparer les contrats des valeurs runtime. Une architecture de types saine évite que les modules métier dépendent circulairement les uns des autres ; les contrats partagés doivent rester stables et ciblés.\n\nApprofondissement — `import type` et `export type` rendent explicite la frontière entre dépendances de types et imports runtime. Avec verbatimModuleSyntax, cette distinction est particulièrement importante pour éviter qu’un import destiné uniquement au compilateur soit émis comme une dépendance JavaScript. Garde des dépendances orientées : les contrats de domaine ne devraient pas importer les couches qui les implémentent.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "import type { User } from \"./domain/user.js\";\nexport type { User } from \"./domain/user.js\";\n\nexport interface UserRepository {\n  findById(id: string): Promise<User | undefined>;\n}"
            }
          ]
        },
        {
          "title": "Fichiers .d.ts et types de bibliothèques",
          "body": "Un fichier `.d.ts` décrit l’API d’un module sans fournir son implémentation. Les packages peuvent livrer leurs types ou s’appuyer sur `@types/...`. Une déclaration incorrecte peut faire croire au compilateur qu’une bibliothèque garantit quelque chose qu’elle ne garantit pas ; vérifie les versions et évite de résoudre les erreurs en déclarant tout `any`.\n\nApprofondissement — Un fichier .d.ts décrit une API existante ; il ne crée pas cette implémentation et ne vérifie pas que la bibliothèque correspond réellement à la déclaration. Une déclaration trop optimiste peut masquer des erreurs runtime. Limite la portée des déclarations, fournis des exemples d’utilisation et teste les types contre la vraie version de la dépendance.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "declare module \"legacy-widget\" {\n  export interface WidgetOptions { label: string; onSelect?: (id: string) => void }\n  export function mount(element: HTMLElement, options: WidgetOptions): () => void;\n}"
            },
            {
              "title": "Une déclaration ne crée pas le runtime",
              "language": "typescript",
              "code": "// legacy-widget.d.ts\ndeclare module \"legacy-widget\" {\n  export function mount(node: HTMLElement): void;\n}\n// Le paquet legacy-widget doit tout de même exister à l’exécution."
            }
          ]
        },
        {
          "title": "Déclarer les variables d’environnement",
          "body": "Les déclarations globales peuvent donner un type aux variables d’environnement exposées par l’outil de build, mais elles ne prouvent pas qu’une variable est présente. Une variable obligatoire doit être validée au démarrage et les secrets ne doivent jamais être exposés dans le bundle navigateur. Garde les déclarations proches de l’environnement concerné.\n\nApprofondissement — Les déclarations de variables d’environnement décrivent leur forme attendue, mais une variable peut manquer dans l’environnement réel. Vérifie les valeurs obligatoires au démarrage et expose ensuite une configuration validée. Ne place jamais de secret côté navigateur : les variables intégrées à un bundle frontend sont visibles des utilisateurs.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "interface ImportMetaEnv {\n  readonly VITE_API_BASE_URL: string;\n}\ninterface ImportMeta { readonly env: ImportMetaEnv }\n\n// Vérification runtime distincte de la déclaration :\nconst apiBase = import.meta.env.VITE_API_BASE_URL;\nif (!apiBase) throw new Error(\"VITE_API_BASE_URL manquante\");"
            }
          ]
        }
      ],
      "exercise": "Exercice — Dépendance sans types. Crée une déclaration minimale pour un module fictif non typé, puis encapsule-le derrière une fonction locale qui expose un contrat plus sûr. Explique la différence entre déclaration de types et validation runtime. Critères d’acceptation : les imports sont résolus avec la configuration choisie ; la déclaration correspond réellement à l’API utilisée ; aucune déclaration large `any` ne fuit dans le reste du projet."
    },
    {
      "id": "configuration-compilateur",
      "title": "15. tsconfig et stratégie de compilation",
      "summary": "Configurer un projet robuste : modes stricts, cible, modules, résolution et vérifications de qualité.",
      "concepts": [
        "Options strictes prioritaires",
        "target, lib, module et moduleResolution",
        "Compilation, lint et CI"
      ],
      "sections": [
        {
          "title": "Options strictes prioritaires",
          "body": "`strict` active un ensemble de vérifications qui détectent notamment les valeurs potentiellement absentes et les paramètres implicitement any. `noUncheckedIndexedAccess` rend explicite le risque d’une clé absente ; `exactOptionalPropertyTypes` affine la différence entre propriété absente et valeur undefined. Active ces options de façon cohérente et corrige les causes au lieu de les contourner.\n\nApprofondissement — `strict` active un ensemble d’options strictes, mais ne couvre pas tous les contrôles utiles. noUncheckedIndexedAccess et exactOptionalPropertyTypes rendent certains contrats plus précis, avec un coût de migration. Active les options de manière explicite, traite les erreurs une catégorie à la fois et évite de masquer la difficulté par des assertions globales.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "json",
              "code": "{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"noUncheckedIndexedAccess\": true,\n    \"exactOptionalPropertyTypes\": true,\n    \"noImplicitOverride\": true,\n    \"noEmit\": true\n  }\n}"
            },
            {
              "title": "Strict n’élimine pas tous les risques",
              "language": "typescript",
              "code": "const values: string[] = [];\nconst first = values[0]; // string | undefined avec noUncheckedIndexedAccess\nif (first !== undefined) console.log(first.toUpperCase());"
            }
          ]
        },
        {
          "title": "target, lib, module et moduleResolution",
          "body": "`target` règle la version de JavaScript émise, tandis que `lib` détermine les API connues du vérificateur ; aucune de ces options ne polyfill automatiquement les API manquantes. `module` et `moduleResolution` doivent correspondre à l’environnement d’exécution et au bundler. Copie une configuration adaptée au projet plutôt qu’un ensemble d’options sans cohérence.\n\nApprofondissement — target contrôle le niveau de syntaxe JavaScript émis, lib les API connues par les types, module la forme des modules et moduleResolution la manière dont les imports sont résolus. Ces options répondent à des questions différentes. Choisis-les selon le runtime et l’outil de build réellement utilisés ; une compilation réussie ne garantit pas que la cible d’exécution dispose de chaque API.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "json",
              "code": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"lib\": [\"ES2022\", \"DOM\", \"DOM.Iterable\"],\n    \"module\": \"ESNext\",\n    \"moduleResolution\": \"Bundler\",\n    \"verbatimModuleSyntax\": true\n  }\n}"
            }
          ]
        },
        {
          "title": "Compilation, lint et CI",
          "body": "Le contrôle de types doit être une étape explicite du pipeline, indépendante des tests et du bundling : certains outils transforment TypeScript sans effectuer la vérification complète. Une commande `tsc --noEmit` dédiée empêche qu’une compilation de production masque des erreurs de type. Fixe les versions et exécute les mêmes commandes en local et en CI.\n\nApprofondissement — Sépare le typecheck, les tests, le lint et le build : ils détectent des classes de problèmes différentes. `noEmit` est adapté lorsque Vite ou un autre bundler produit le JavaScript, mais un package publié doit aussi vérifier ses fichiers de sortie et ses déclarations. Reproduis en CI les commandes documentées dans le README.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "json",
              "code": "{\n  \"scripts\": {\n    \"typecheck\": \"tsc --noEmit\",\n    \"lint\": \"eslint .\",\n    \"test\": \"vitest run\",\n    \"build\": \"vite build\",\n    \"check\": \"npm run typecheck && npm run lint && npm test && npm run build\"\n  }\n}"
            }
          ]
        }
      ],
      "exercise": "Exercice — Configuration stricte. Prépare un tsconfig pour une application moderne et justifie strict, noUncheckedIndexedAccess, exactOptionalPropertyTypes, target, module et moduleResolution. Fournis une commande de typecheck indépendante du build. Critères d’acceptation : la configuration correspond au runtime visé ; les options ne sont pas ajoutées sans explication ; les commandes de test, typecheck et build sont séparées."
    },
    {
      "id": "frontiere-runtime",
      "title": "16. Frontière runtime : valider les données externes",
      "summary": "Ne pas confondre types statiques et validation effective des réponses réseau, formulaires, URL et stockage.",
      "concepts": [
        "unknown à la frontière",
        "Parser avec résultat discriminé",
        "Validation par schéma et types inférés"
      ],
      "sections": [
        {
          "title": "unknown à la frontière",
          "body": "Les données provenant d’un réseau ou du stockage doivent être considérées comme `unknown` jusqu’à validation. Déclarer `const user = await response.json() as User` ne vérifie rien. Une validation peut être écrite manuellement ou confiée à une bibliothèque de schémas ; dans les deux cas, le résultat validé doit devenir le contrat utilisé par le reste de l’application.\n\nApprofondissement — Une réponse HTTP doit être considérée comme unknown même si le serveur est censé renvoyer un type connu. Vérifie le statut HTTP, puis valide la structure et les invariants des données avant de les transmettre au domaine. Un cast vers Promise<unknown> est seulement une façon de retirer le any d’une API de bibliothèque ; il ne valide rien.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "async function fetchJson(url: string): Promise<unknown> {\n  const response = await fetch(url);\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json() as Promise<unknown>;\n}"
            }
          ]
        },
        {
          "title": "Parser avec résultat discriminé",
          "body": "Un parseur peut retourner une union discriminée pour représenter le succès ou les problèmes de validation sans lancer d’exception pour chaque entrée incorrecte. Cela force l’appelant à traiter les deux issues. Réserve les exceptions aux erreurs exceptionnelles et garde des messages utiles, stables et non sensibles.\n\nApprofondissement — Un parseur devrait avoir un contrat déterministe : il accepte unknown et renvoie soit une valeur entièrement valide, soit des problèmes exploitables. Évite de retourner un objet partiellement validé. Définis les règles sur les champs supplémentaires, les valeurs limites et les chaînes vides ; teste plusieurs entrées invalides, pas seulement un exemple correct.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type ParseResult<T> = { ok: true; value: T } | { ok: false; issues: string[] };\ntype Settings = { pageSize: number };\nfunction parseSettings(input: unknown): ParseResult<Settings> {\n  if (typeof input !== \"object\" || input === null || !(\"pageSize\" in input)) {\n    return { ok: false, issues: [\"pageSize requis\"] };\n  }\n  const pageSize = input.pageSize;\n  if (typeof pageSize !== \"number\" || !Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100) {\n    return { ok: false, issues: [\"pageSize doit être un entier de 1 à 100\"] };\n  }\n  return { ok: true, value: { pageSize } };\n}"
            },
            {
              "title": "Parser une valeur inconnue",
              "language": "typescript",
              "code": "function parseLimit(input: unknown): number {\n  if (typeof input !== \"number\" || !Number.isInteger(input) || input < 1 || input > 100) {\n    throw new Error(\"Limite invalide\");\n  }\n  return input;\n}"
            }
          ]
        },
        {
          "title": "Validation par schéma et types inférés",
          "body": "Les bibliothèques de schéma peuvent valider à l’exécution et fournir le type TypeScript correspondant, ce qui réduit la duplication entre validateur et type. Le schéma doit néanmoins exprimer les contraintes métier importantes, et les erreurs doivent être transformées en réponses adaptées à l’interface ou à l’API. La validation cliente n’annule jamais la validation serveur.\n\nApprofondissement — Les bibliothèques de schéma peuvent valider, transformer et inférer les types statiques depuis une même définition. Choisis parse si une exception est le contrat voulu ou safeParse si tu préfères une union résultat. Vérifie la version de la bibliothèque, les messages d’erreur et les conversions implicites ; une validation correcte doit rester alignée avec les règles métier.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "import { z } from \"zod\";\nconst UserSchema = z.object({\n  id: z.string().min(1),\n  email: z.string().email(),\n  role: z.enum([\"admin\", \"member\"]),\n});\ntype User = z.infer<typeof UserSchema>;\nconst user = UserSchema.parse(await fetchJson(\"/api/user\"));"
            }
          ]
        }
      ],
      "exercise": "Exercice — Parser de réponse HTTP. Écris parseProduct(input: unknown): Product qui vérifie id, name et price, dont price doit être un nombre fini positif. Teste les données mal formées et une propriété manquante. Critères d’acceptation : aucune assertion ne sert de validation ; les erreurs mentionnent le champ fautif ; les données externes restent unknown jusqu’à validation."
    },
    {
      "id": "api-erreurs",
      "title": "17. Contrats d’API, erreurs et résultats typés",
      "summary": "Construire des interfaces applicatives dont les résultats et les erreurs sont explicites et faciles à tester.",
      "concepts": [
        "Résultats de domaine au lieu de valeurs ambiguës",
        "Types de requêtes et réponses HTTP",
        "Erreurs typées et observabilité"
      ],
      "sections": [
        {
          "title": "Résultats de domaine au lieu de valeurs ambiguës",
          "body": "Une fonction qui peut échouer doit exposer ce contrat : union de résultat, exception documentée ou type d’erreur précis. Un `T | null` ne distingue pas forcément « absent », « interdit » et « indisponible ». Choisis la représentation en fonction du domaine et force les consommateurs à prendre une décision explicite.\n\nApprofondissement — Un type de résultat discriminé rend les issues métier explicites et évite de confondre une absence normale, un refus d’accès et une panne technique. Ne transforme pas toutes les erreurs en chaînes trop tôt : conserve le code et le contexte utiles à la logique, puis traduis-les en messages à la frontière de présentation.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type FindUserResult =\n  | { kind: \"found\"; user: { id: string; email: string } }\n  | { kind: \"not-found\" }\n  | { kind: \"forbidden\" };\nfunction display(result: FindUserResult): string {\n  switch (result.kind) {\n    case \"found\": return result.user.email;\n    case \"not-found\": return \"Utilisateur absent\";\n    case \"forbidden\": return \"Accès refusé\";\n  }\n}"
            }
          ]
        },
        {
          "title": "Types de requêtes et réponses HTTP",
          "body": "Définir des types distincts pour l’entrée, le domaine et la sortie HTTP évite d’exposer par accident des champs internes. Le type de réponse doit refléter ce qui est réellement sérialisé, pas seulement l’objet stocké en mémoire. La conversion vers JSON et les règles de statut restent des responsabilités runtime.\n\nApprofondissement — Sépare les DTO entrants, les entités métier et les réponses publiques. Le type d’une entité interne peut contenir des champs qui ne doivent jamais être sérialisés, tels qu’un hash de mot de passe. Construis explicitement la réponse plutôt que de retourner directement l’objet interne, et valide le DTO avant toute opération métier.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type CreateUserRequest = { email: string; password: string };\ntype UserEntity = { id: string; email: string; passwordHash: string };\ntype UserResponse = { id: string; email: string };\nfunction toUserResponse(user: UserEntity): UserResponse {\n  return { id: user.id, email: user.email };\n}"
            },
            {
              "title": "Ne pas exposer l’entité interne",
              "language": "typescript",
              "code": "type Account = { id: string; email: string; passwordHash: string };\ntype PublicAccount = Pick<Account, \"id\" | \"email\">;\nfunction toPublic(account: Account): PublicAccount {\n  return { id: account.id, email: account.email };\n}"
            }
          ]
        },
        {
          "title": "Erreurs typées et observabilité",
          "body": "Dans un `catch`, la valeur doit être traitée comme inconnue en mode strict. Convertis les erreurs non fiables en une forme maîtrisée, conserve le contexte technique côté logs et ne renvoie pas de détails internes ou secrets au client. Les erreurs métier prévisibles peuvent être modélisées comme des variantes ; les pannes inattendues doivent rester visibles dans l’observabilité.\n\nApprofondissement — En TypeScript moderne, la valeur capturée dans catch est unknown : traite-la sans supposer qu’elle est une Error. Les logs doivent inclure un contexte utile sans divulguer de secrets ou de données personnelles. Distingue erreurs attendues, erreurs techniques et erreurs annulées ; la politique de retry ne doit pas réessayer aveuglément toutes les exceptions.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "function errorMessage(error: unknown): string {\n  return error instanceof Error ? error.message : \"Erreur inconnue\";\n}\ntry {\n  await saveRecord();\n} catch (error: unknown) {\n  console.error(\"Échec de sauvegarde\", { message: errorMessage(error) });\n}"
            }
          ]
        }
      ],
      "exercise": "Exercice — Résultat explicite. Modélise une opération de création avec `Result<T, E>` discriminé et au moins trois erreurs métier. Écris un consommateur exhaustif qui n’a pas à intercepter des erreurs métier implicites. Critères d’acceptation : success et failure sont impossibles à confondre ; chaque erreur est traitée ; les erreurs techniques inattendues restent distinctes des erreurs métier."
    },
    {
      "id": "types-react",
      "title": "18. Typage avancé de React sans reprendre ses fondamentaux",
      "summary": "Appliquer les types TypeScript aux contrats React déjà étudiés : props, événements, refs, composants génériques et contexte.",
      "concepts": [
        "Props, enfants et composants polymorphes",
        "Événements, refs et contexte",
        "Composants génériques et hooks typés"
      ],
      "sections": [
        {
          "title": "Props, enfants et composants polymorphes",
          "body": "Déclare des types de props qui expriment les valeurs requises et les variantes autorisées. `ReactNode` convient à un contenu React arbitraire, tandis que `ComponentProps` permet de dériver les props d’un élément ou composant existant. Les composants polymorphes qui acceptent `as` demandent des types plus complexes ; ne les construis que si le bénéfice API est réel.\n\nApprofondissement — Pour les props React, pars du contrat utile au composant et réutilise ComponentProps lorsque tu veux reprendre les attributs natifs. Les enfants ne sont pas toujours nécessaires ; impose ReactNode seulement si le composant en accepte réellement. Les composants polymorphes avec `as` ont des génériques délicats : n’ajoute cette abstraction que si le produit en a besoin.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "tsx",
              "code": "import type { ComponentProps, ReactNode } from \"react\";\ntype ButtonProps = {\n  tone: \"primary\" | \"secondary\";\n  children: ReactNode;\n} & Pick<ComponentProps<\"button\">, \"disabled\" | \"type\" | \"onClick\">;\nfunction Button({ tone, children, ...props }: ButtonProps) {\n  return <button data-tone={tone} {...props}>{children}</button>;\n}"
            }
          ]
        },
        {
          "title": "Événements, refs et contexte",
          "body": "Utilise les types d’événements DOM React adaptés au type d’élément et les types de refs correspondants. Un contexte doit éviter une valeur initiale faussement valide ; une fonction `useX` peut lever une erreur si le fournisseur manque. Pour les refs, distingue une référence nullable avant montage d’une valeur garantie après un contrôle explicite.\n\nApprofondissement — Le type d’un événement dépend de l’élément et du gestionnaire, et currentTarget est généralement plus précis que target. Une ref peut être null avant le montage et après le démontage ; garde cette possibilité dans le code. Un contexte nullable combiné à un hook qui lève une erreur fournit une API de consommation plus sûre qu’un cast non-null global.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "tsx",
              "code": "import { createContext, useContext, useRef } from \"react\";\ntype Session = { userId: string };\nconst SessionContext = createContext<Session | null>(null);\nfunction useSession(): Session {\n  const value = useContext(SessionContext);\n  if (!value) throw new Error(\"SessionProvider manquant\");\n  return value;\n}\nfunction SearchInput() {\n  const inputRef = useRef<HTMLInputElement>(null);\n  return <input ref={inputRef} onChange={(event) => console.log(event.currentTarget.value)} />;\n}"
            },
            {
              "title": "Traiter la ref comme potentiellement absente",
              "language": "tsx",
              "code": "import { useRef } from \"react\";\nconst inputRef = useRef<HTMLInputElement>(null);\nfunction focusInput() {\n  inputRef.current?.focus();\n}"
            }
          ]
        },
        {
          "title": "Composants génériques et hooks typés",
          "body": "Les composants et hooks génériques conservent le lien entre une donnée et les callbacks qui la manipulent. Évite `any` pour contourner l’inférence des listes ou des sélecteurs ; expose plutôt un paramètre `T` et des callbacks `(item: T)`. Teste les appels avec plusieurs types concrets pour détecter les abstractions qui perdent leur précision.\n\nApprofondissement — Les composants génériques doivent conserver T jusqu’au callback et au rendu, au lieu de convertir les éléments en any. Pour les listes, la clé React est une identité de rendu, pas simplement une annotation TypeScript. Teste les composants avec plusieurs types d’éléments et vérifie que les callbacks reçoivent bien l’objet d’origine.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "tsx",
              "code": "type SelectProps<T> = {\n  items: readonly T[];\n  getKey: (item: T) => string;\n  renderLabel: (item: T) => string;\n  onSelect: (item: T) => void;\n};\nfunction Select<T>({ items, getKey, renderLabel, onSelect }: SelectProps<T>) {\n  return <ul>{items.map((item) => <li key={getKey(item)}><button onClick={() => onSelect(item)}>{renderLabel(item)}</button></li>)}</ul>;\n}"
            }
          ]
        }
      ],
      "exercise": "Exercice — Composant de formulaire typé. Crée un composant contrôlé avec props explicites, callback de changement et union discriminée pour les états de soumission. Typage des événements et des refs selon le besoin. Critères d’acceptation : aucun any ; le composant ne duplique pas les types React intégrés ; les états de chargement, succès et erreur sont exhaustifs et accessibles."
    },
    {
      "id": "tests-types-api-publiques",
      "title": "19. Tests de types, API publiques et publication",
      "summary": "Vérifier les contrats de types, préserver la compatibilité et préparer des bibliothèques TypeScript maintenables.",
      "concepts": [
        "Tests de compilation et cas négatifs",
        "Compatibilité et versionnement",
        "Déclarations de package et builds"
      ],
      "sections": [
        {
          "title": "Tests de compilation et cas négatifs",
          "body": "Les tests runtime ne prouvent pas que les signatures empêchent les usages incorrects. Des outils comme `tsd` ou des tests avec `@ts-expect-error` permettent de vérifier qu’un appel valide compile et qu’un appel invalide est bien refusé. Un `@ts-expect-error` doit être placé sur la ligne concernée et réévalué quand l’API évolue.\n\nApprofondissement — Les tests de types vérifient des contrats à la compilation, tandis que les tests comportementaux vérifient les valeurs et effets runtime. `@ts-expect-error` est utile pour confirmer qu’une entrée invalide échoue, mais il doit être placé immédiatement avant l’expression concernée et peut devenir obsolète si l’erreur disparaît. Garde les tests négatifs ciblés.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Role = \"admin\" | \"member\";\nfunction setRole(role: Role): void {}\nsetRole(\"admin\");\n// @ts-expect-error rôle non autorisé\nsetRole(\"owner\");"
            },
            {
              "title": "Tester un contrat positif et négatif",
              "language": "typescript",
              "code": "type Role = \"admin\" | \"member\";\nconst validRole: Role = \"admin\";\n// @ts-expect-error \"owner\" ne fait pas partie du contrat\nconst invalidRole: Role = \"owner\";"
            }
          ]
        },
        {
          "title": "Compatibilité et versionnement",
          "body": "Une modification de type peut être une rupture même si le JavaScript runtime ne change pas : retirer une variante d’union, rendre un paramètre obligatoire ou élargir un retour peut casser les consommateurs. Les déclarations publiques sont une API. Versionne-les, documente les migrations et vérifie les usages représentatifs dans des tests de compilation.\n\nApprofondissement — Une modification d’API peut être une rupture même si le code source du package compile : rendre un champ obligatoire, réduire une union ou changer la variance d’un callback peut casser les consommateurs. Versionne selon l’impact observé, documente les dépréciations et teste un petit projet consommateur avec les exports publiés, pas seulement les sources.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "export interface SearchOptions {\n  query: string;\n  limit?: number; // rendre ce champ obligatoire serait une rupture potentielle\n}\nexport function search(options: SearchOptions): Promise<readonly string[]>;"
            }
          ]
        },
        {
          "title": "Déclarations de package et builds",
          "body": "Un package TypeScript doit publier les bons fichiers JavaScript et déclarations, déclarer ses points d’entrée et tester la résolution dans un projet consommateur. Les chemins `exports`, `types`, `files` et les formats ESM/CJS doivent correspondre aux artefacts réellement générés. Évite de publier uniquement le code source si le contrat de package promet des fichiers compilés.\n\nApprofondissement — Les consommateurs dépendent des chemins exportés, des fichiers JavaScript réellement émis et des déclarations correspondantes. Vérifie le package.json, les exports ESM/CJS si les deux sont pris en charge, et les fichiers inclus dans le tarball. Une déclaration valide dans le dépôt peut être inutilisable si elle référence des chemins absents après publication.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "json",
              "code": "{\n  \"name\": \"@example/typed-utils\",\n  \"type\": \"module\",\n  \"types\": \"./dist/index.d.ts\",\n  \"exports\": { \".\": { \"types\": \"./dist/index.d.ts\", \"import\": \"./dist/index.js\" } },\n  \"files\": [\"dist\"]\n}"
            }
          ]
        }
      ],
      "exercise": "Exercice — Contrat public testé. Écris des tests positifs et négatifs pour une fonction générique exportée, puis prépare les déclarations et vérifie un petit consommateur externe. Critères d’acceptation : `@ts-expect-error` est placé sur la ligne qui doit échouer ; les tests runtime restent séparés ; le consommateur importe uniquement l’API publique et non les chemins internes."
    },
    {
      "id": "atelier-architecture",
      "title": "20. Atelier de conception : domaine fortement typé",
      "summary": "Assembler les outils du système de types pour concevoir un domaine maintenable plutôt qu’une collection de définitions isolées.",
      "concepts": [
        "Séparer domaine, transport et stockage",
        "Types métier et invariants",
        "Revue de type et refactoring progressif"
      ],
      "sections": [
        {
          "title": "Séparer domaine, transport et stockage",
          "body": "Le type de domaine représente les règles métier ; les types HTTP représentent les données sérialisées ; les types de stockage représentent les contraintes de persistance. Ces structures peuvent se ressembler sans être identiques. Des fonctions de mapping explicites empêchent qu’un changement de base ou d’API se propage silencieusement dans toute l’application.\n\nApprofondissement — Le DTO représente le format de transport, le modèle métier représente les règles de l’application et la ligne de stockage reflète la persistance. Ils peuvent se ressembler au début, mais évoluent pour des raisons différentes. Des fonctions de conversion explicites isolent les changements de schéma et évitent de propager des noms de colonnes ou des champs privés dans toute l’application.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Order = { id: string; status: \"draft\" | \"paid\" | \"cancelled\"; totalCents: number };\ntype OrderRow = { id: string; status: string; total_cents: number };\nfunction isOrderStatus(value: string): value is Order[\"status\"] {\n  return value === \"draft\" || value === \"paid\" || value === \"cancelled\";\n}\nfunction fromRow(row: OrderRow): Order {\n  if (!isOrderStatus(row.status)) throw new Error(\"Statut invalide\");\n  return { id: row.id, status: row.status, totalCents: row.total_cents };\n}"
            }
          ]
        },
        {
          "title": "Types métier et invariants",
          "body": "Les types peuvent interdire des états simples, mais ne remplacent pas toujours la validation des invariants numériques ou des transitions métier. Un type de montant peut distinguer centimes d’une chaîne arbitraire ; une fonction de création peut vérifier les bornes et garantir que seule une valeur valide est produite. Documente les garanties qui ne sont pas exprimées par le type seul.\n\nApprofondissement — Les types de marque peuvent distinguer statiquement des valeurs qui sont toutes deux des string ou number, mais ils ne garantissent leur validité que si les constructeurs sont contrôlés. Centralise la création et valide les bornes runtime. Pour des montants, précise unité, devise, arrondi et limites sûres ; le type seul ne définit pas une politique financière.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type Cents = number & { readonly __brand: \"Cents\" };\nfunction cents(value: number): Cents {\n  if (!Number.isSafeInteger(value) || value < 0) throw new Error(\"Montant invalide\");\n  return value as Cents;\n}\nconst total = cents(1299);"
            },
            {
              "title": "Créer un montant uniquement après validation",
              "language": "typescript",
              "code": "type Cents = number & { readonly __brand: \"Cents\" };\nfunction toCents(value: number): Cents {\n  if (!Number.isSafeInteger(value) || value < 0) throw new Error(\"Montant invalide\");\n  return value as Cents;\n}"
            }
          ]
        },
        {
          "title": "Revue de type et refactoring progressif",
          "body": "Lors d’une migration vers un typage plus strict, commence par les frontières et les contrats les plus utilisés, puis supprime les `any` et assertions injustifiés. Mesure les échappatoires restantes, documente celles qui sont nécessaires et ajoute des tests de non-régression. Un bon système de types facilite le refactoring sans transformer chaque évolution en bataille avec le compilateur.\n\nApprofondissement — Une migration stricte réussie est progressive : mesure les échappatoires, priorise les frontières partagées, ajoute des tests, puis supprime les casts injustifiés. N’essaie pas de typer tout un système legacy en une seule étape. Documente les compromis temporaires avec un propriétaire et une condition de suppression afin qu’ils ne deviennent pas permanents.",
          "examples": [
            {
              "title": "Exemple commenté",
              "language": "typescript",
              "code": "type LegacyUser = { id: any; email: any };\ntype User = { id: string; email: string };\nfunction normalizeUser(value: LegacyUser): User {\n  if (typeof value.id !== \"string\" || typeof value.email !== \"string\") {\n    throw new Error(\"Utilisateur legacy invalide\");\n  }\n  return { id: value.id, email: value.email };\n}"
            }
          ]
        }
      ],
      "exercise": "Exercice — Catalogue de commandes. Implémente DTO, parseur runtime, entité, repository générique, union d’erreurs et service applicatif. Ajoute tests runtime et tests de types. Critères d’acceptation : configuration stricte ; pas de any injustifié ; validation aux frontières ; erreurs exhaustives ; README décrivant architecture, commandes, garanties et limites."
    }
  ],
  "references": [
    {
      "title": "TypeScript Handbook — The Basics",
      "url": "https://www.typescriptlang.org/docs/handbook/2/basic-types.html"
    },
    {
      "title": "TypeScript Handbook — Everyday Types",
      "url": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"
    },
    {
      "title": "TypeScript Handbook — Narrowing",
      "url": "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"
    },
    {
      "title": "TypeScript Handbook — More on Functions",
      "url": "https://www.typescriptlang.org/docs/handbook/2/functions.html"
    },
    {
      "title": "TypeScript Handbook — Object Types",
      "url": "https://www.typescriptlang.org/docs/handbook/2/objects.html"
    },
    {
      "title": "TypeScript Handbook — Generics",
      "url": "https://www.typescriptlang.org/docs/handbook/2/generics.html"
    },
    {
      "title": "TypeScript Handbook — Type Manipulation",
      "url": "https://www.typescriptlang.org/docs/handbook/2/types-from-types.html"
    },
    {
      "title": "TypeScript TSConfig Reference",
      "url": "https://www.typescriptlang.org/tsconfig/"
    },
    {
      "title": "TypeScript — Declaration Files",
      "url": "https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html"
    },
    {
      "title": "TypeScript — Module Resolution",
      "url": "https://www.typescriptlang.org/docs/handbook/modules/reference.html"
    },
    {
      "title": "TypeScript — JSX",
      "url": "https://www.typescriptlang.org/docs/handbook/jsx.html"
    },
    {
      "title": "Zod — Documentation",
      "url": "https://zod.dev/"
    },
    {
      "title": "tsd — TypeScript Definition Testing",
      "url": "https://github.com/tsdjs/tsd"
    }
  ],
  "finalProject": {
    "title": "API métier fortement typée : catalogue de commandes",
    "description": "Construis un petit package TypeScript qui modélise les commandes d’une boutique. Sépare les DTO HTTP, les entités métier et les données de stockage ; valide les entrées inconnues ; exprime les états et erreurs par unions discriminées ; expose un repository générique ; et publie une API documentée avec déclarations. Le projet doit démontrer la valeur du système de types sans répéter les bases JavaScript.",
    "criteria": [
      "Configuration TypeScript stricte et commande de typecheck séparée des tests et du build.",
      "Aucun any injustifié ; unknown aux frontières non fiables.",
      "Unions discriminées exhaustives pour états et erreurs métier.",
      "Types Create, Update et DTO séparés et justifiés.",
      "Génériques qui conservent les relations entre clés, valeurs et entités.",
      "Validation runtime réelle des données externes ; pas d’assertion utilisée comme validation.",
      "Tests comportementaux et tests de types positifs/négatifs.",
      "Déclarations et points d’entrée vérifiés dans un projet consommateur.",
      "README documentant l’architecture, les garanties et les limites du typage."
    ]
  }
};
