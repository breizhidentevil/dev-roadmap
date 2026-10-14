import type { CourseModule } from "./types";

export const reactAdvancedModules: CourseModule[] = [
  {
    "id": "fondations",
    "title": "1. Fondations, environnement et rendu",
    "summary": "React est une bibliothèque de construction d’interfaces. On décrit l’interface à partir des données et React met à jour le DOM nécessaire lorsque ces données changent.",
    "concepts": [
      "Distinguer React, React DOM, JSX et les outils de build.",
      "Comprendre le cycle rendu → réconciliation → commit DOM sans assimiler un rendu à une modification réelle du DOM.",
      "Créer une application avec Vite et des composants fonctionnels.",
      "Lire les avertissements du navigateur et les erreurs de compilation."
    ],
    "exercise": "Initialise une application Vite React + TypeScript, crée App, Header et Main, puis explique la différence entre un nouveau rendu React et une mutation effective du DOM.",
    "sections": [
      {
        "title": "Le modèle déclaratif",
        "body": "En React, on décrit ce qui doit être affiché pour un état donné. On évite de modifier manuellement le DOM à chaque changement : le composant retourne une description de l’interface et React synchronise le DOM. Un rendu peut être recalculé sans que chaque nœud DOM soit recréé. Les composants doivent donc rester prévisibles et éviter les effets de bord pendant le rendu.",
        "examples": [
          {
            "title": "Un composant minimal",
            "language": "tsx",
            "code": "function Greeting() {\n  const name = \"Ada\";\n  return <h1>Bonjour, {name}</h1>;\n}\n\nexport default function App() {\n  return <main><Greeting /></main>;\n}"
          }
        ]
      },
      {
        "title": "Créer un projet",
        "body": "Pour une application cliente moderne, Vite fournit serveur de développement et build. Le point d’entrée monte l’arbre React dans un élément HTML. Le fichier package.json décrit les scripts et dépendances. Choisis une version de Node.js prise en charge par la version de Vite utilisée et garde le lockfile versionné afin de reproduire les installations.",
        "examples": [
          {
            "title": "Point d’entrée typique",
            "language": "tsx",
            "code": "import { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport App from \"./App\";\nimport \"./index.css\";\n\ncreateRoot(document.getElementById(\"root\")!).render(\n  <StrictMode><App /></StrictMode>\n);"
          }
        ]
      },
      {
        "title": "Strict Mode et diagnostic",
        "body": "En développement, StrictMode peut réexécuter certains rendus et cycles d’effets afin de révéler les mutations et nettoyages incorrects. Ce comportement n’est pas une preuve que React exécute deux fois toute opération en production. Ne supprime pas StrictMode pour masquer un bug : rends plutôt les composants purs et les effets réversibles.",
        "examples": [
          {
            "title": "Rendu sans mutation",
            "language": "tsx",
            "code": "function CounterLabel({ count }: { count: number }) {\n  // Correct : calcul déterministe, aucune mutation externe.\n  return <p>Compteur : {count}</p>;\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — suivre le rendu jusqu’au DOM",
          "body": "Il faut distinguer trois moments : le déclencheur (état, props ou contexte modifié), le rendu (React appelle les composants pour calculer la prochaine description) et le commit (React applique les changements nécessaires au DOM). Un rendu supplémentaire ne signifie donc ni un nouveau DOM complet ni une mise à jour visuelle. Le rendu doit rester pur : pas de requête réseau, de modification de variable externe ou de mutation de props pendant son exécution. StrictMode peut révéler ces erreurs en développement.",
          "examples": [
            {
              "title": "Rendu pur et calcul dérivé",
              "language": "tsx",
              "code": "type Props = { price: number; quantity: number };\nfunction LineTotal({ price, quantity }: Props) {\n  const total = price * quantity; // calcul pur, pas de state supplémentaire\n  return <output>{total.toFixed(2)} €</output>;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — découper sans surarchitecturer",
          "body": "Commence par identifier les régions visuelles et les données qui les alimentent. Extrais un composant lorsqu’il a une responsabilité claire, un contrat réutilisable ou un besoin de test isolé. Ne crée pas automatiquement un composant pour chaque élément HTML. Le parent conserve les décisions qui doivent être partagées ; les composants de présentation reçoivent des valeurs explicites.",
          "examples": [
            {
              "title": "Composition minimale",
              "language": "tsx",
              "code": "type Course = { id: string; title: string };\nfunction CourseList({ courses }: { courses: Course[] }) {\n  if (courses.length === 0) return <p>Aucun cours disponible.</p>;\n  return <ul>{courses.map(course => <li key={course.id}>{course.title}</li>)}</ul>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "jsx",
    "title": "2. JSX, expressions et affichage conditionnel",
    "summary": "JSX est une syntaxe qui permet de décrire une arborescence d’éléments depuis JavaScript. Les expressions JavaScript s’insèrent entre accolades ; les règles de JSX ne sont pas exactement celles du HTML.",
    "concepts": [
      "Utiliser les expressions JavaScript entre accolades.",
      "Employer className, htmlFor et les propriétés React appropriées.",
      "Choisir entre condition ternaire, && et early return.",
      "Éviter d’afficher accidentellement 0 avec une expression conditionnelle en &&."
    ],
    "exercise": "Crée un composant Status qui affiche chargement, erreur, résultats ou état vide. Vérifie qu’une liste vide ne laisse pas apparaître un 0 isolé.",
    "sections": [
      {
        "title": "Expressions et attributs",
        "body": "JSX autorise les expressions JavaScript entre accolades, mais pas les instructions comme if directement dans une expression. Les attributs sont majoritairement camelCase : className, htmlFor, tabIndex. Une chaîne statique s’écrit entre guillemets ; une valeur calculée s’écrit entre accolades. Le contenu utilisateur affiché comme texte est échappé par React, mais cela ne remplace pas la sécurisation de HTML explicitement injecté.",
        "examples": [
          {
            "title": "Expressions dans JSX",
            "language": "tsx",
            "code": "const user = { firstName: \"Ada\", isAdmin: true };\n\nfunction Profile() {\n  return (\n    <section className=\"profile\">\n      <label htmlFor=\"nickname\">Nom</label>\n      <input id=\"nickname\" defaultValue={user.firstName} />\n      {user.isAdmin ? <strong>Administratrice</strong> : <span>Membre</span>}\n    </section>\n  );\n}"
          }
        ]
      },
      {
        "title": "Conditions lisibles",
        "body": "Utilise un ternaire pour deux branches courtes, && pour une présence simple et un early return lorsque la branche rend le reste du composant plus lisible. Attention : `items.length && ...` affiche le nombre 0 quand la liste est vide. Convertis la condition en booléen (`items.length > 0`) ou utilise un ternaire.",
        "examples": [
          {
            "title": "Liste vide sans afficher zéro",
            "language": "tsx",
            "code": "function ResultCount({ count }: { count: number }) {\n  return <p>{count > 0 ? `${count} résultats` : \"Aucun résultat\"}</p>;\n}"
          }
        ]
      },
      {
        "title": "Fragments et structure",
        "body": "Les fragments permettent de retourner plusieurs éléments sans ajouter un nœud artificiel au DOM. Les éléments doivent respecter les règles HTML : évite, par exemple, de placer un bouton dans un autre bouton. La structure sémantique rend le contenu plus compréhensible pour les technologies d’assistance et facilite les tests par rôles accessibles.",
        "examples": [
          {
            "title": "Fragment",
            "language": "tsx",
            "code": "function PageTitle() {\n  return (\n    <>\n      <h1>Catalogue</h1>\n      <p>Choisis un parcours.</p>\n    </>\n  );\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — JSX est une expression",
          "body": "JSX est transformé en appels JavaScript par l’outillage. Il ne s’agit pas d’une chaîne HTML et on ne peut pas y placer directement une instruction if. Utilise une variable intermédiaire, un ternaire ou un retour anticipé lorsque la logique devient complexe. React échappe le texte rendu, mais l’injection volontaire de HTML avec dangerouslySetInnerHTML exige une source fiable et une politique de sanitisation adaptée.",
          "examples": [
            {
              "title": "Trois états explicites",
              "language": "tsx",
              "code": "type State = \"loading\" | \"error\" | \"ready\";\nfunction Message({ state }: { state: State }) {\n  if (state === \"loading\") return <p role=\"status\">Chargement…</p>;\n  if (state === \"error\") return <p role=\"alert\">Une erreur est survenue.</p>;\n  return <p>Contenu disponible.</p>;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — éviter les pièges de rendu",
          "body": "Les expressions logiques renvoient l’une des valeurs opérandes, pas nécessairement un booléen. Ainsi, 0 && <Panel /> renvoie 0, que React affiche. Les listes ont besoin d’une clé stable et les contrôles HTML doivent être valides. Vérifie les états vide, erreur et chargement séparément plutôt que de les imbriquer dans une expression illisible.",
          "examples": [
            {
              "title": "Condition qui ne rend pas zéro",
              "language": "tsx",
              "code": "function ResultList({ count }: { count: number }) {\n  return <>{count > 0 ? <p>{count} résultats</p> : <p>Aucun résultat</p>}</>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "composants-props",
    "title": "3. Composants, props et composition",
    "summary": "Les composants découpent l’interface en unités réutilisables. Les props sont les entrées d’un composant ; la composition permet de construire des écrans sans créer une hiérarchie artificiellement profonde.",
    "concepts": [
      "Définir des composants fonctionnels avec une responsabilité claire.",
      "Typer les props et leurs valeurs optionnelles.",
      "Utiliser children et les slots de composition.",
      "Éviter la duplication et les composants génériques prématurés."
    ],
    "exercise": "Découpe une page de catalogue en Header, CourseList, CourseCard et EmptyState. Définis les props minimales de chaque composant et garde l’état de sélection dans le composant qui en a besoin.",
    "sections": [
      {
        "title": "Props comme contrat",
        "body": "Les props sont transmises par le parent et ne doivent pas être mutées. En TypeScript, un type ou une interface documente le contrat et permet de détecter les appels incomplets. Une valeur optionnelle doit avoir un comportement explicite. Les callbacks transmis en props permettent à l’enfant de signaler une action au parent sans posséder l’état partagé.",
        "examples": [
          {
            "title": "Props typées",
            "language": "tsx",
            "code": "type CourseCardProps = {\n  title: string;\n  duration: string;\n  completed?: boolean;\n  onOpen: () => void;\n};\n\nfunction CourseCard({ title, duration, completed = false, onOpen }: CourseCardProps) {\n  return (\n    <article>\n      <h2>{title}</h2><p>{duration}</p>\n      {completed && <span>Terminé</span>}\n      <button type=\"button\" onClick={onOpen}>Ouvrir</button>\n    </article>\n  );\n}"
          }
        ]
      },
      {
        "title": "Composition avec children",
        "body": "children est une prop React qui représente le contenu imbriqué entre les balises du composant. La composition est souvent plus flexible qu’une prop par variante visuelle. N’extrais un composant que si cela clarifie une responsabilité, formalise une répétition ou fournit une frontière de test utile.",
        "examples": [
          {
            "title": "Composant de présentation",
            "language": "tsx",
            "code": "type PanelProps = { title: string; children: React.ReactNode };\n\nfunction Panel({ title, children }: PanelProps) {\n  return <section className=\"panel\"><h2>{title}</h2>{children}</section>;\n}\n\n// <Panel title=\"Progression\"><ProgressBar value={60} /></Panel>"
          }
        ]
      },
      {
        "title": "Éviter les anti-patterns",
        "body": "Ne passe pas tout l’objet global de l’application à chaque composant si seules deux valeurs sont nécessaires. Ne duplique pas le même markup complexe dans plusieurs écrans : extrais une abstraction lorsque le contrat devient stable. Les composants ne doivent pas lire ou modifier arbitrairement les variables d’un autre composant ; passe explicitement les données nécessaires.",
        "examples": [
          {
            "title": "Données explicites",
            "language": "tsx",
            "code": "type UserBadgeProps = { name: string; role: \"admin\" | \"member\" };\n\nfunction UserBadge({ name, role }: UserBadgeProps) {\n  return <span>{name} — {role === \"admin\" ? \"Administrateur\" : \"Membre\"}</span>;\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — les props définissent un contrat",
          "body": "Une prop est une entrée en lecture seule. Si un enfant doit demander une modification, le parent lui passe une fonction. Évite les types trop permissifs comme any et les objets globaux transmis partout : des contrats petits rendent les composants plus faciles à comprendre et à tester. Les valeurs optionnelles doivent avoir un défaut cohérent et documenté.",
          "examples": [
            {
              "title": "Props et callback typés",
              "language": "tsx",
              "code": "type RenameProps = { value: string; onRename: (next: string) => void };\nfunction RenameField({ value, onRename }: RenameProps) {\n  return <input aria-label=\"Nom\" value={value} onChange={event => onRename(event.currentTarget.value)} />;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — composition plutôt que prop-drilling artificiel",
          "body": "La composition avec children ou des slots peut éviter de faire transiter des données à travers des composants qui ne les utilisent pas. Ne transforme toutefois pas chaque composant en système générique de rendu : préfère le contrat le plus simple qui répond au besoin réel.",
          "examples": [
            {
              "title": "Slot avec children",
              "language": "tsx",
              "code": "import type { ReactNode } from \"react\";\ntype PanelProps = { title: string; children: ReactNode };\nfunction Panel({ title, children }: PanelProps) {\n  return <section aria-labelledby=\"panel-title\"><h2 id=\"panel-title\">{title}</h2>{children}</section>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "listes-cles",
    "title": "4. Listes, clés et identité des éléments",
    "summary": "React utilise les clés pour faire correspondre les éléments d’une liste entre deux rendus. Une clé stable aide React à préserver correctement l’identité, l’état local et les mises à jour.",
    "concepts": [
      "Utiliser une clé unique et stable issue des données.",
      "Comprendre pourquoi l’index est dangereux pour les listes réordonnées.",
      "Filtrer et trier sans muter les tableaux source.",
      "Distinguer identité d’un élément et position dans la liste."
    ],
    "exercise": "Construis une liste de tâches avec recherche et tri. Ajoute une tâche au début et réordonne la liste : vérifie que la saisie et l’état de chaque ligne restent associés à la bonne tâche.",
    "sections": [
      {
        "title": "Clés stables",
        "body": "Une clé identifie un élément parmi ses frères. Un identifiant métier stable est préférable à l’index d’un tableau si des lignes peuvent être insérées, supprimées ou réordonnées. N’utilise pas Math.random() comme clé : chaque rendu ferait apparaître de nouveaux éléments. Les clés ne sont pas transmises comme props ; ajoute un identifiant séparé si le composant doit le recevoir.",
        "examples": [
          {
            "title": "Rendu de liste",
            "language": "tsx",
            "code": "type Task = { id: string; title: string };\n\nfunction TaskList({ tasks }: { tasks: Task[] }) {\n  return <ul>{tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>;\n}"
          }
        ]
      },
      {
        "title": "Filtrer et trier sans mutation",
        "body": "Les méthodes sort et reverse mutent le tableau. Si le tableau vient de props ou de l’état, copie-le avant de trier, ou utilise toSorted quand l’environnement le prend en charge. Les filtres et tris calculés à partir des données existantes sont généralement de l’état dérivé : ne stocke pas une deuxième liste synchronisée manuellement.",
        "examples": [
          {
            "title": "Filtre et tri immuables",
            "language": "tsx",
            "code": "const visibleTasks = tasks\n  .filter(task => task.title.toLowerCase().includes(query.toLowerCase()))\n  .toSorted((a, b) => a.title.localeCompare(b.title));"
          }
        ]
      },
      {
        "title": "Réinitialiser l’état par identité",
        "body": "Changer la clé d’un composant indique à React qu’il s’agit d’une autre identité et peut donc réinitialiser son état local. C’est utile pour repartir d’un formulaire vide lors d’un changement d’enregistrement, mais une clé qui change à chaque rendu détruit inutilement la saisie et le focus.",
        "examples": [
          {
            "title": "Identité liée à la ressource",
            "language": "tsx",
            "code": "function Editor({ documentId }: { documentId: string }) {\n  return <DocumentForm key={documentId} documentId={documentId} />;\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — les clés portent l’identité",
          "body": "Une clé stable permet à React d’associer chaque élément de la nouvelle liste à l’élément correspondant de la précédente. L’index convient uniquement à une liste statique qui ne sera ni insérée, ni supprimée, ni réordonnée. Une clé aléatoire provoque des remplacements à chaque rendu, ce qui peut perdre focus, saisie et état local. La clé n’est pas transmise comme prop.",
          "examples": [
            {
              "title": "Filtrer sans muter la source",
              "language": "tsx",
              "code": "type Task = { id: string; title: string };\nconst visible = tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));\nreturn <ul>{visible.map(task => <li key={task.id}>{task.title}</li>)}</ul>;"
            }
          ]
        },
        {
          "title": "Atelier corrigé — état dérivé",
          "body": "Ne stocke pas une liste filtrée et synchronisée par effet si elle se calcule simplement à partir de la liste source et de la recherche. Deux sources de vérité créent des décalages. Si le calcul devient réellement coûteux, mesure avant d’introduire useMemo.",
          "examples": [
            {
              "title": "Calculer les éléments visibles",
              "language": "tsx",
              "code": "const normalizedQuery = query.trim().toLocaleLowerCase();\nconst visibleTasks = tasks.filter(task => task.title.toLocaleLowerCase().includes(normalizedQuery));\nconst empty = visibleTasks.length === 0;"
            }
          ]
        }
      ]
  },
  {
    "id": "evenements",
    "title": "5. Événements et interactions",
    "summary": "Les gestionnaires d’événements décrivent la réponse de l’interface aux actions utilisateur. Ils sont passés en référence à React et ne doivent pas être exécutés pendant le rendu.",
    "concepts": [
      "Passer onClick={handleClick}, pas onClick={handleClick()}.",
      "Comprendre les événements synthétiques et leur propagation.",
      "Utiliser preventDefault uniquement pour empêcher le comportement navigateur attendu.",
      "Préférer les éléments HTML interactifs natifs."
    ],
    "exercise": "Ajoute création, suppression et validation d’une tâche. Toutes les actions doivent fonctionner au clavier et utiliser les éléments sémantiques adaptés.",
    "sections": [
      {
        "title": "Déclarer un gestionnaire",
        "body": "Un gestionnaire est une fonction appelée après une interaction. `onClick={save}` transmet la fonction ; `onClick={save()}` exécute la fonction pendant le rendu et transmet sa valeur de retour. Si des arguments sont nécessaires, utilise une fonction fléchée. Un gestionnaire peut recevoir un événement typé par React.",
        "examples": [
          {
            "title": "Passer une fonction",
            "language": "tsx",
            "code": "function SaveButton({ onSave }: { onSave: () => void }) {\n  return <button type=\"button\" onClick={onSave}>Enregistrer</button>;\n}\n\nfunction DeleteButton({ id, onDelete }: { id: string; onDelete: (id: string) => void }) {\n  return <button type=\"button\" onClick={() => onDelete(id)}>Supprimer</button>;\n}"
          }
        ]
      },
      {
        "title": "Propagation et formulaires",
        "body": "Les événements remontent généralement dans l’arbre DOM. stopPropagation bloque cette remontée ; il ne doit pas servir à réparer une structure interactive mal conçue. Pour un formulaire, intercepte onSubmit et appelle preventDefault si la navigation native ne doit pas avoir lieu. Garde les actions principales utilisables au clavier avec des boutons et liens natifs.",
        "examples": [
          {
            "title": "Soumission déclarative",
            "language": "tsx",
            "code": "function SearchForm({ onSearch }: { onSearch: (query: string) => void }) {\n  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    event.preventDefault();\n    const data = new FormData(event.currentTarget);\n    onSearch(String(data.get(\"query\") ?? \"\").trim());\n  }\n  return <form onSubmit={handleSubmit}><label htmlFor=\"query\">Recherche</label><input id=\"query\" name=\"query\" /><button>Rechercher</button></form>;\n}"
          }
        ]
      },
      {
        "title": "Accessibilité des actions",
        "body": "Un élément cliquable doit communiquer sa fonction. Utilise button pour une action et a pour une navigation. Un div avec onClick n’offre pas automatiquement focus clavier, activation par Entrée/Espace ou sémantique accessible. Les icônes seules nécessitent un nom accessible ; les boutons désactivés doivent refléter l’état réel de l’action.",
        "examples": [
          {
            "title": "Bouton avec nom accessible",
            "language": "tsx",
            "code": "function RefreshButton({ refresh }: { refresh: () => void }) {\n  return <button type=\"button\" onClick={refresh} aria-label=\"Actualiser les données\">\n    <RefreshIcon aria-hidden=\"true\" />\n  </button>;\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — événement, fonction et propagation",
          "body": "Passe une référence de fonction à onClick ; appeler la fonction pendant le rendu exécute l’action trop tôt. Une fonction fléchée permet de fournir un argument. Les événements remontent dans l’arbre DOM ; stopPropagation doit être réservé aux interactions où cette propagation est réellement indésirable. Préfère les boutons et liens natifs pour obtenir clavier et sémantique gratuitement.",
          "examples": [
            {
              "title": "Événement typé",
              "language": "tsx",
              "code": "function SearchBox({ onSearch }: { onSearch: (query: string) => void }) {\n  return <form onSubmit={event => {\n    event.preventDefault();\n    const data = new FormData(event.currentTarget);\n    onSearch(String(data.get(\"query\") ?? \"\"));\n  }}>\n    <label>Recherche <input name=\"query\" /></label>\n    <button type=\"submit\">Rechercher</button>\n  </form>;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — éviter les doubles soumissions",
          "body": "Une désactivation visuelle pendant une requête améliore l’expérience, mais ne garantit pas l’unicité de l’opération : le serveur doit valider la requête et, si nécessaire, supporter une clé d’idempotence. Les erreurs doivent rester visibles et la soumission doit fonctionner au clavier.",
          "examples": [
            {
              "title": "Bouton de soumission",
              "language": "tsx",
              "code": "function SubmitButton({ pending }: { pending: boolean }) {\n  return <button type=\"submit\" disabled={pending} aria-disabled={pending}>\n    {pending ? \"Envoi en cours…\" : \"Envoyer\"}\n  </button>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "etat-usestate",
    "title": "6. État local, useState et snapshots",
    "summary": "L’état est une mémoire associée à une identité de composant. Une mise à jour planifie un nouveau rendu ; la variable de l’exécution actuelle reste un snapshot et ne change pas au milieu du gestionnaire.",
    "concepts": [
      "Utiliser useState pour une donnée qui influence le rendu.",
      "Utiliser une mise à jour fonctionnelle lorsque la nouvelle valeur dépend de l’ancienne.",
      "Ne jamais modifier l’état directement.",
      "Éviter de stocker une valeur qui peut être calculée depuis les props ou l’état existant."
    ],
    "exercise": "Implémente un panier simple. Quantités et lignes sont l’état source ; calcule le nombre total d’articles et le prix total à partir des lignes, sans les stocker séparément.",
    "sections": [
      {
        "title": "useState et snapshot",
        "body": "useState retourne la valeur de l’état pour ce rendu et une fonction de mise à jour. Appeler cette fonction ne change pas immédiatement la variable locale du gestionnaire courant. React peut regrouper plusieurs mises à jour. Quand la prochaine valeur dépend de la précédente, la forme fonctionnelle garantit que chaque mise à jour s’applique à la valeur la plus récente.",
        "examples": [
          {
            "title": "Incrément fiable",
            "language": "tsx",
            "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  function incrementThree() {\n    setCount(value => value + 1);\n    setCount(value => value + 1);\n    setCount(value => value + 1);\n  }\n  return <button onClick={incrementThree}>Compteur : {count}</button>;\n}"
          }
        ]
      },
      {
        "title": "État immuable",
        "body": "Ne modifie pas un objet ou tableau existant puis ne renvoie pas la même référence : React peut considérer que rien n’a changé. Crée un nouvel objet avec spread et une nouvelle liste avec map, filter ou concat. La copie est superficielle : si une propriété imbriquée doit changer, reconstruis aussi les niveaux concernés.",
        "examples": [
          {
            "title": "Mettre à jour un objet",
            "language": "tsx",
            "code": "type Profile = { name: string; preferences: { theme: \"light\" | \"dark\" } };\nconst [profile, setProfile] = useState<Profile>({ name: \"Ada\", preferences: { theme: \"light\" } });\n\nfunction enableDarkMode() {\n  setProfile(current => ({\n    ...current,\n    preferences: { ...current.preferences, theme: \"dark\" }\n  }));\n}"
          }
        ]
      },
      {
        "title": "Concevoir le bon état",
        "body": "Un état utile représente une information minimale qui change au fil des interactions. Ne stocke pas simultanément `items` et `filteredItems` si le second se calcule depuis le premier et la recherche : cela crée des possibilités de désynchronisation. Définis aussi les invariants : par exemple, une sélection doit-elle être réinitialisée quand l’élément sélectionné disparaît ?",
        "examples": [
          {
            "title": "État dérivé",
            "language": "tsx",
            "code": "const [query, setQuery] = useState(\"\");\nconst [items, setItems] = useState<string[]>([]);\nconst visibleItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — state et snapshots",
          "body": "Chaque rendu reçoit un instantané de l’état. Une mise à jour programme un nouveau rendu ; elle ne modifie pas la variable capturée dans le gestionnaire courant. Quand la nouvelle valeur dépend de la précédente, utilise la forme fonctionnelle de setState pour éviter de calculer à partir d’un instantané obsolète. Les mises à jour rapprochées peuvent être regroupées.",
          "examples": [
            {
              "title": "Mises à jour fonctionnelles",
              "language": "tsx",
              "code": "const [count, setCount] = useState(0);\nfunction incrementThreeTimes() {\n  setCount(value => value + 1);\n  setCount(value => value + 1);\n  setCount(value => value + 1);\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — ne pas muter l’état",
          "body": "Les objets et tableaux d’état doivent être remplacés plutôt que mutés. Une mutation peut modifier un objet déjà partagé entre rendus et empêcher React de détecter le changement comme attendu. Pour les structures profondément imbriquées, considère un reducer ou une normalisation plutôt que des copies opaques.",
          "examples": [
            {
              "title": "Mettre à jour un objet",
              "language": "tsx",
              "code": "type Profile = { name: string; city: string };\nconst [profile, setProfile] = useState<Profile>({ name: \"Ada\", city: \"Nantes\" });\nfunction changeCity(city: string) { setProfile(current => ({ ...current, city })); }"
            }
          ]
        }
      ]
  },
  {
    "id": "etat-complexe",
    "title": "7. État complexe, reducer et invariants",
    "summary": "Quand les transitions deviennent nombreuses, un reducer centralise les règles de mise à jour. L’objectif est de rendre les transitions explicites, déterministes et testables.",
    "concepts": [
      "Structurer un état cohérent plutôt qu’un grand nombre de booléens contradictoires.",
      "Écrire un reducer pur qui retourne un nouvel état.",
      "Modéliser les états asynchrones avec une union discriminée.",
      "Utiliser useReducer lorsque les transitions sont liées ou nombreuses."
    ],
    "exercise": "Modélise un flux de chargement avec idle/loading/success/error, puis écris des tests du reducer qui vérifient les transitions autorisées et l’absence de mutation.",
    "sections": [
      {
        "title": "Quand passer à useReducer",
        "body": "useState convient très bien à une valeur isolée. useReducer est utile lorsque plusieurs actions transforment une structure commune ou que les règles métier doivent être regroupées. Le reducer reçoit l’état courant et une action, puis retourne le prochain état sans effectuer de requête, écrire dans le stockage ou muter les données.",
        "examples": [
          {
            "title": "Reducer de tâches",
            "language": "tsx",
            "code": "type Task = { id: string; title: string; done: boolean };\ntype Action = { type: \"added\"; task: Task } | { type: \"toggled\"; id: string } | { type: \"removed\"; id: string };\n\nfunction reducer(state: Task[], action: Action): Task[] {\n  switch (action.type) {\n    case \"added\": return [...state, action.task];\n    case \"toggled\": return state.map(task => task.id === action.id ? { ...task, done: !task.done } : task);\n    case \"removed\": return state.filter(task => task.id !== action.id);\n  }\n}"
          }
        ]
      },
      {
        "title": "Éviter les états impossibles",
        "body": "Trois booléens `isLoading`, `hasError`, `isSuccess` peuvent produire huit combinaisons, dont plusieurs contradictoires. Une union discriminée limite les états aux cas réellement possibles et rend le rendu exhaustif. La modélisation du type devient un outil de conception : elle force à expliciter les transitions et les données disponibles dans chaque état.",
        "examples": [
          {
            "title": "État de requête explicite",
            "language": "tsx",
            "code": "type RequestState<T> =\n  | { status: \"idle\" }\n  | { status: \"loading\" }\n  | { status: \"success\"; data: T }\n  | { status: \"error\"; message: string };"
          }
        ]
      },
      {
        "title": "Tester les transitions",
        "body": "Un reducer pur peut être testé sans navigateur : donne un état et une action, puis compare le nouvel état attendu. Les tests doivent couvrir les actions nominales, les identifiants absents, les doublons éventuels et les règles de suppression. Évite de rendre le reducer permissif si une action invalide doit être impossible selon le contrat de l’application.",
        "examples": [
          {
            "title": "Test ciblé du reducer",
            "language": "tsx",
            "code": "const initial: Task[] = [{ id: \"a\", title: \"Lire\", done: false }];\nconst next = reducer(initial, { type: \"toggled\", id: \"a\" });\n// next[0].done vaut true ; initial[0].done reste false."
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — modéliser les états valides",
          "body": "Un reducer centralise les transitions d’un domaine. Les actions doivent décrire l’intention, et le reducer rester pur : même entrée, même sortie, sans réseau, horloge ni mutation externe. Les unions discriminées permettent de rendre les transitions exhaustives. Évite les combinaisons de booléens qui autorisent des états contradictoires, comme loading=true et success=true.",
          "examples": [
            {
              "title": "Union discriminée",
              "language": "ts",
              "code": "type RequestState<T> =\n  | { status: \"idle\" }\n  | { status: \"loading\" }\n  | { status: \"success\"; data: T }\n  | { status: \"error\"; message: string };"
            }
          ]
        },
        {
          "title": "Atelier corrigé — transitions testables",
          "body": "Teste les transitions du reducer comme une fonction ordinaire : état initial, action attendue, invariants conservés et absence de mutation de l’entrée. Les tests de reducer complètent les tests UI ; ils ne remplacent pas la vérification des interactions visibles.",
          "examples": [
            {
              "title": "Reducer minimal",
              "language": "ts",
              "code": "type Action = { type: \"increment\" } | { type: \"reset\" };\nfunction reducer(count: number, action: Action): number {\n  switch (action.type) {\n    case \"increment\": return count + 1;\n    case \"reset\": return 0;\n    default: { const exhaustive: never = action; return exhaustive; }\n  }\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "hooks-regles",
    "title": "8. Hooks et hooks personnalisés",
    "summary": "Les Hooks permettent aux composants fonctionnels de réutiliser l’état et la logique React. Leur ordre doit rester stable entre les rendus.",
    "concepts": [
      "Appeler les Hooks au niveau supérieur des composants ou des hooks personnalisés.",
      "Ne pas appeler de Hook dans une condition, une boucle ou une fonction ordinaire.",
      "Extraire une logique réutilisable dans un hook nommé use….",
      "Comprendre qu’un hook personnalisé partage de la logique, pas automatiquement une instance d’état."
    ],
    "exercise": "Extrais un hook useDebouncedValue qui retourne une valeur différée et nettoie son timer. Documente le délai, les changements rapides et le nettoyage au démontage.",
    "sections": [
      {
        "title": "Règles des Hooks",
        "body": "Appelle les Hooks au niveau supérieur d’un composant fonctionnel ou d’un hook personnalisé, avant tout retour conditionnel. React associe l’état des Hooks à leur ordre d’appel. Une condition qui change cet ordre rend les valeurs ambiguës. Les Hooks ne s’appellent pas dans des composants de classe, des callbacks d’événements ou des fonctions utilitaires ordinaires.",
        "examples": [
          {
            "title": "Ordre stable",
            "language": "tsx",
            "code": "function Greeting({ loggedIn }: { loggedIn: boolean }) {\n  const [expanded, setExpanded] = useState(false); // toujours appelé\n  if (!loggedIn) return <p>Connecte-toi.</p>;\n  return <button onClick={() => setExpanded(value => !value)}>{expanded ? \"Réduire\" : \"Développer\"}</button>;\n}"
          }
        ]
      },
      {
        "title": "Créer un hook personnalisé",
        "body": "Un hook personnalisé extrait une séquence de Hooks et une logique de comportement. Son nom commence par use pour que les outils statiques reconnaissent les règles. Chaque appel possède son propre état, sauf si les données sont partagées via un mécanisme commun comme Context ou un store externe. Retourne une API courte et cohérente.",
        "examples": [
          {
            "title": "Hook de valeur persistée",
            "language": "tsx",
            "code": "function useLocalStorageState(key: string, initialValue: string) {\n  const [value, setValue] = useState(() => localStorage.getItem(key) ?? initialValue);\n  useEffect(() => { localStorage.setItem(key, value); }, [key, value]);\n  return [value, setValue] as const;\n}\n// Réservé à un environnement navigateur ; traiter l’accès au stockage si rendu serveur."
          }
        ]
      },
      {
        "title": "Réutiliser sans cacher la complexité",
        "body": "Un hook personnalisé doit représenter un comportement identifiable : useOnlineStatus, useDebouncedValue, useCourseProgress. Évite les hooks qui prennent trop d’options booléennes ou masquent des effets difficiles à raisonner. Les dépendances et les erreurs doivent être visibles dans le contrat. Les règles ESLint des Hooks sont un filet de sécurité important.",
        "examples": [
          {
            "title": "Usage d’un hook",
            "language": "tsx",
            "code": "function SearchBox() {\n  const [query, setQuery] = useState(\"\");\n  const normalizedQuery = query.trim().toLocaleLowerCase();\n  return <input value={query} onChange={event => setQuery(event.target.value)} aria-label=\"Rechercher\" data-query={normalizedQuery} />;\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — pourquoi les règles des Hooks existent",
          "body": "React associe l’état des Hooks à leur ordre d’appel pendant le rendu. Un Hook appelé dans une condition, une boucle ou une fonction ordinaire peut déplacer cet ordre et associer une valeur au mauvais Hook. Les Hooks personnalisés réutilisent une logique d’état ou d’effet ; ils ne créent pas une instance globale partagée par tous les composants.",
          "examples": [
            {
              "title": "Hook personnalisé avec contrat explicite",
              "language": "tsx",
              "code": "function useBoolean(initial = false) {\n  const [value, setValue] = useState(initial);\n  const toggle = useCallback(() => setValue(current => !current), []);\n  return { value, setValue, toggle } as const;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — extraire la logique, pas seulement le code",
          "body": "Un Hook personnalisé est utile lorsque plusieurs composants partagent un même comportement avec un contrat stable. N’extrais pas un Hook qui ne fait que masquer une ligne sans clarifier l’intention. Les Hooks doivent commencer par use et appeler les autres Hooks au niveau supérieur.",
          "examples": [
            {
              "title": "Utilisation indépendante",
              "language": "tsx",
              "code": "function FirstSwitch() { const state = useBoolean(); return <button onClick={state.toggle}>{state.value ? \"Actif\" : \"Inactif\"}</button>; }\nfunction SecondSwitch() { const state = useBoolean(true); return <button onClick={state.toggle}>{state.value ? \"Actif\" : \"Inactif\"}</button>; }"
            }
          ]
        }
      ]
  },
  {
    "id": "effets",
    "title": "9. useEffect et synchronisation externe",
    "summary": "useEffect sert à synchroniser un composant avec un système externe : abonnement, API navigateur, connexion ou bibliothèque impérative. Il ne doit pas servir à recalculer simplement une valeur dérivée.",
    "concepts": [
      "Comprendre setup, dépendances et cleanup.",
      "Déclarer toutes les dépendances réactives réellement utilisées.",
      "Rendre le nettoyage symétrique à la mise en place.",
      "Ne pas déclencher un effet uniquement pour répondre à un clic qui peut être traité dans l’événement."
    ],
    "exercise": "Ajoute un abonnement à un événement navigateur et un effet qui synchronise le titre de page. Vérifie le nettoyage et supprime les effets qui ne font que calculer une valeur.",
    "sections": [
      {
        "title": "À quoi sert un effet",
        "body": "Un effet se déroule après le commit et synchronise React avec un système extérieur à React. Si le code ne fait que transformer props et état en une valeur d’affichage, calcule cette valeur pendant le rendu. Si l’action découle d’un clic précis, place-la dans le gestionnaire d’événement plutôt que de surveiller un état intermédiaire avec useEffect.",
        "examples": [
          {
            "title": "Effet avec abonnement",
            "language": "tsx",
            "code": "useEffect(() => {\n  function handleOnline() { setOnline(true); }\n  function handleOffline() { setOnline(false); }\n  window.addEventListener(\"online\", handleOnline);\n  window.addEventListener(\"offline\", handleOffline);\n  return () => {\n    window.removeEventListener(\"online\", handleOnline);\n    window.removeEventListener(\"offline\", handleOffline);\n  };\n}, []);"
          }
        ]
      },
      {
        "title": "Dépendances et cleanup",
        "body": "Les dépendances sont comparées avec Object.is. Le tableau n’est pas un mécanisme pour choisir arbitrairement quand exécuter le code : il doit refléter les valeurs réactives lues par l’effet. Si une dépendance objet est recréée à chaque rendu, préfère simplifier les dépendances ou stabiliser la structure si cela est réellement nécessaire. Le cleanup précédent s’exécute avant la prochaine mise en place et au démontage.",
        "examples": [
          {
            "title": "Synchronisation d’un titre",
            "language": "tsx",
            "code": "useEffect(() => {\n  document.title = `${unreadCount} notifications`;\n}, [unreadCount]);"
          }
        ]
      },
      {
        "title": "Éviter les effets inutiles",
        "body": "Un effet qui recopie `props.value` dans un état local peut créer un rendu supplémentaire et une source de vérité concurrente. Une fonction calculée à partir des données peut être appelée directement. Pour une opération non idempotente, vérifie le comportement en StrictMode et déclenche-la au bon moment. Les effets ne remplacent pas une architecture de données ou une couche de cache.",
        "examples": [
          {
            "title": "Valeur dérivée sans effet",
            "language": "tsx",
            "code": "function Price({ amount, taxRate }: { amount: number; taxRate: number }) {\n  const total = amount * (1 + taxRate);\n  return <output>{total.toFixed(2)} €</output>;\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — un effet synchronise avec l’extérieur",
          "body": "useEffect n’est pas un mécanisme général pour calculer des données ou répondre à un clic. Il sert à synchroniser le composant avec une ressource externe : abonnement, timer, API impérative ou connexion. Si une valeur se déduit des props et de l’état, calcule-la pendant le rendu. Les dépendances décrivent les valeurs réactives utilisées par l’effet ; ne les retire pas pour faire taire le linter.",
          "examples": [
            {
              "title": "Abonnement avec nettoyage",
              "language": "tsx",
              "code": "useEffect(() => {\n  const onResize = () => setWidth(window.innerWidth);\n  window.addEventListener(\"resize\", onResize);\n  onResize();\n  return () => window.removeEventListener(\"resize\", onResize);\n}, []);"
            }
          ]
        },
        {
          "title": "Atelier corrigé — gérer la durée de vie",
          "body": "Le nettoyage doit annuler ou défaire ce que l’effet a mis en place. En StrictMode développement, un cycle setup/cleanup supplémentaire aide à détecter les abonnements doublés. Pour une requête, annule-la si possible et protège l’état contre les réponses obsolètes ; n’ignore pas arbitrairement les dépendances.",
          "examples": [
            {
              "title": "Effet avec AbortController",
              "language": "tsx",
              "code": "useEffect(() => {\n  const controller = new AbortController();\n  void fetch(\"/api/profile\", { signal: controller.signal }).then(response => {\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return response.json();\n  }).then(setProfile).catch(error => {\n    if (!(error instanceof DOMException && error.name === \"AbortError\")) setError(\"Échec du chargement\");\n  });\n  return () => controller.abort();\n}, []);"
            }
          ]
        }
      ]
  },
  {
    "id": "api-asynchrone",
    "title": "10. API, chargement et courses asynchrones",
    "summary": "Les requêtes réseau introduisent des états de chargement, d’erreur et de données, ainsi que des risques de réponses obsolètes. Le cycle de vie de la requête doit être explicite.",
    "concepts": [
      "Traiter les réponses HTTP non réussies même si fetch ne rejette pas la promesse.",
      "Annuler les requêtes obsolètes avec AbortController.",
      "Modéliser les états loading, success, error et empty.",
      "Préférer une bibliothèque de cache ou les mécanismes du framework pour les besoins avancés."
    ],
    "exercise": "Crée une page de détail qui charge une ressource depuis une API. Traite HTTP 404/500, réseau coupé, données invalides, état vide et changement rapide d’identifiant.",
    "sections": [
      {
        "title": "Fetch et erreurs HTTP",
        "body": "fetch rejette généralement en cas d’erreur réseau, mais une réponse 404 ou 500 produit tout de même une promesse résolue. Vérifie response.ok avant de lire les données. Le contenu externe est inconnu au runtime : les types TypeScript ne valident pas la réponse. Pour une application robuste, vérifie la forme de la donnée avec un parseur ou un schéma runtime.",
        "examples": [
          {
            "title": "Chargement annulable",
            "language": "tsx",
            "code": "useEffect(() => {\n  const controller = new AbortController();\n  async function load() {\n    setState({ status: \"loading\" });\n    try {\n      const response = await fetch(\"/api/courses\", { signal: controller.signal });\n      if (!response.ok) throw new Error(`HTTP ${response.status}`);\n      const data: unknown = await response.json();\n      setState({ status: \"success\", data: parseCourses(data) });\n    } catch (error) {\n      if (error instanceof DOMException && error.name === \"AbortError\") return;\n      setState({ status: \"error\", message: \"Impossible de charger les cours.\" });\n    }\n  }\n  void load();\n  return () => controller.abort();\n}, []);"
          }
        ]
      },
      {
        "title": "Prévenir les réponses obsolètes",
        "body": "Si une requête dépend d’un identifiant ou d’une recherche, la requête A peut finir après la requête B et écraser les résultats récents. L’annulation ou un marqueur de validité dans le cleanup évite de publier une réponse obsolète. Le rendu doit aussi traiter la transition entre identifiants, afin de ne pas afficher comme actuel un résultat associé à l’ancien paramètre.",
        "examples": [
          {
            "title": "Marqueur de validité",
            "language": "tsx",
            "code": "useEffect(() => {\n  let active = true;\n  fetchUser(userId).then(user => { if (active) setUser(user); });\n  return () => { active = false; };\n}, [userId]);"
          }
        ]
      },
      {
        "title": "Pourquoi un cache de données",
        "body": "Une solution de cache gère souvent déduplication, invalidation, reprise, revalidation et états partagés mieux qu’une série d’effets manuels. React n’impose pas une bibliothèque unique. Choisis selon l’architecture : chargement côté routeur, cache serveur/client, mutations et politique de fraîcheur. Évite de réinventer un cache si l’application dépend fortement des données distantes.",
        "examples": [
          {
            "title": "Rendu de tous les états",
            "language": "tsx",
            "code": "if (state.status === \"loading\") return <p role=\"status\">Chargement…</p>;\nif (state.status === \"error\") return <p role=\"alert\">{state.message}</p>;\nif (state.status === \"success\" && state.data.length === 0) return <p>Aucun cours.</p>;"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — HTTP, JSON et types",
          "body": "fetch rejette notamment sur des erreurs réseau, mais pas automatiquement sur un statut HTTP 404 ou 500 : vérifie response.ok. Le JSON reçu est une donnée externe, donc le typer par assertion ne valide rien à l’exécution. Valide sa forme, traite les réponses vides et distingue erreur réseau, erreur HTTP et erreur de schéma. Pour des besoins de cache, revalidation, déduplication et mutations, utilise une bibliothèque de données serveur plutôt que de réimplémenter ces comportements à chaque écran.",
          "examples": [
            {
              "title": "Valider une réponse avant de l’utiliser",
              "language": "ts",
              "code": "type User = { id: string; name: string };\nfunction isUser(value: unknown): value is User {\n  return typeof value === \"object\" && value !== null && \"id\" in value && typeof value.id === \"string\" && \"name\" in value && typeof value.name === \"string\";\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — éviter les courses asynchrones",
          "body": "Si la recherche A est lancée puis la recherche B, A peut finir après B. Une réponse ancienne ne doit pas écraser le résultat récent. L’annulation est préférable lorsque l’API la supporte ; un identifiant de requête ou un drapeau de validité peut aussi protéger l’état. Affiche toujours les états chargement, erreur, résultat vide et succès.",
          "examples": [
            {
              "title": "Annuler une recherche précédente",
              "language": "tsx",
              "code": "useEffect(() => {\n  const controller = new AbortController();\n  async function run() {\n    try { const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, { signal: controller.signal });\n      if (!response.ok) throw new Error(`HTTP ${response.status}`);\n      setResults(await response.json());\n    } catch (error) { if (!(error instanceof DOMException && error.name === \"AbortError\")) setError(\"Recherche impossible\"); }\n  }\n  void run(); return () => controller.abort();\n}, [query]);"
            }
          ]
        }
      ]
  },
  {
    "id": "formulaires",
    "title": "11. Formulaires, validation et saisie contrôlée",
    "summary": "Un formulaire React peut utiliser des champs contrôlés par l’état, ou laisser le navigateur gérer leur valeur initiale. Le choix dépend des besoins de validation, du formatage et de la logique métier.",
    "concepts": [
      "Différencier value/onChange de defaultValue.",
      "Donner un label explicite à chaque champ.",
      "Valider côté client pour l’expérience et côté serveur pour la sécurité.",
      "Afficher les erreurs près du champ et relier les messages avec aria-describedby."
    ],
    "exercise": "Crée un formulaire de profil avec validation, messages accessibles, prévention du double envoi et conservation des valeurs si le serveur refuse la soumission.",
    "sections": [
      {
        "title": "Contrôlé ou non contrôlé",
        "body": "Un champ contrôlé reçoit sa valeur depuis React et met à jour l’état avec onChange. Il convient quand l’interface dépend de chaque frappe ou qu’un formatage est nécessaire. Un champ non contrôlé peut utiliser defaultValue et être lu à la soumission avec FormData. Ne mélange pas value sans onChange avec une entrée que l’utilisateur doit modifier.",
        "examples": [
          {
            "title": "Champ contrôlé",
            "language": "tsx",
            "code": "function NameField() {\n  const [name, setName] = useState(\"\");\n  return (\n    <label>Nom\n      <input value={name} onChange={event => setName(event.target.value)} required />\n    </label>\n  );\n}"
          }
        ]
      },
      {
        "title": "Validation et erreurs",
        "body": "Les attributs HTML required, type=email, minLength et pattern apportent une première validation. La validation métier doit être explicite et les messages compréhensibles. Le serveur doit refaire les validations : un client peut être contourné. Évite de signaler une erreur uniquement par la couleur et relie le message au champ concerné.",
        "examples": [
          {
            "title": "Message associé au champ",
            "language": "tsx",
            "code": "<label htmlFor=\"email\">Adresse e-mail</label>\n<input id=\"email\" type=\"email\" aria-invalid={Boolean(error)} aria-describedby={error ? \"email-error\" : undefined} />\n{error && <p id=\"email-error\">{error}</p>}"
          }
        ]
      },
      {
        "title": "Soumission et état pending",
        "body": "Pendant une soumission, évite les doublons, affiche un état d’attente et conserve les données saisies si la requête échoue. L’état pending doit être réinitialisé dans finally ou géré par une abstraction adaptée. Ne présente pas un formulaire comme réussi avant la confirmation du serveur. Pour les erreurs, distingue les problèmes de validation, d’autorisation et les erreurs transitoires.",
        "examples": [
          {
            "title": "Soumission avec finally",
            "language": "tsx",
            "code": "async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n  event.preventDefault();\n  setPending(true);\n  setError(null);\n  try { await saveProfile(form); setNotice(\"Profil enregistré.\"); }\n  catch { setError(\"Enregistrement impossible. Réessaie.\"); }\n  finally { setPending(false); }\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — contrôlé ou non contrôlé",
          "body": "Un champ contrôlé reçoit sa valeur depuis React et notifie chaque modification par onChange ; il facilite validation et affichage conditionnel. Un champ non contrôlé conserve sa valeur dans le DOM et peut être lu via FormData ou une ref. Ne passe pas value de undefined à une chaîne en cours de vie du composant : choisis un modèle cohérent. La validation client améliore l’expérience mais le serveur doit revalider.",
          "examples": [
            {
              "title": "Validation sans perdre le message accessible",
              "language": "tsx",
              "code": "function EmailField({ value, onChange, error }: { value: string; onChange: (v: string) => void; error?: string }) {\n  return <div><label htmlFor=\"email\">Adresse e-mail</label>\n    <input id=\"email\" type=\"email\" value={value} onChange={e => onChange(e.currentTarget.value)} aria-invalid={Boolean(error)} aria-describedby={error ? \"email-error\" : undefined} />\n    {error && <p id=\"email-error\">{error}</p>}\n  </div>;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — traiter la soumission comme une transaction",
          "body": "Désactive ou protège la soumission pendant l’envoi, mais affiche aussi le résultat et conserve les valeurs utiles en cas d’erreur. Les erreurs doivent être compréhensibles, associées aux champs quand possible et annoncées aux technologies d’assistance. Ne place pas de logique de réseau dans le rendu.",
          "examples": [
            {
              "title": "FormData et état de soumission",
              "language": "tsx",
              "code": "async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n  event.preventDefault();\n  const data = new FormData(event.currentTarget);\n  const email = String(data.get(\"email\") ?? \"\").trim();\n  if (!email) { setError(\"L’adresse e-mail est obligatoire.\"); return; }\n  setPending(true); setError(null);\n  try { await saveEmail(email); } catch { setError(\"Enregistrement impossible. Réessaie.\"); } finally { setPending(false); }\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "refs-dom",
    "title": "12. useRef, DOM et valeurs non visuelles",
    "summary": "Une ref conserve une valeur mutable entre les rendus sans provoquer de nouveau rendu. Elle sert notamment à accéder à un élément DOM ou à garder une référence technique.",
    "concepts": [
      "Utiliser useRef pour focus, mesures et identifiants techniques.",
      "Ne pas utiliser une ref comme substitut à l’état affiché.",
      "Nettoyer les timers, observateurs et ressources externes.",
      "Limiter les manipulations impératives aux cas où elles sont nécessaires."
    ],
    "exercise": "Ajoute un bouton qui place le focus dans le champ de recherche, puis mesure la largeur d’un panneau avec ResizeObserver et nettoie l’observateur.",
    "sections": [
      {
        "title": "Accéder au DOM",
        "body": "React gère le DOM, mais certains besoins restent impératifs : déplacer le focus, mesurer un élément ou piloter un média. useRef fournit un conteneur stable dont la propriété current peut pointer vers l’élément. N’utilise pas cette ref pour remplacer une valeur d’interface qui doit être réactive.",
        "examples": [
          {
            "title": "Focus sur une entrée",
            "language": "tsx",
            "code": "function Search() {\n  const inputRef = useRef<HTMLInputElement>(null);\n  return <><input ref={inputRef} aria-label=\"Recherche\" /><button onClick={() => inputRef.current?.focus()}>Activer la recherche</button></>;\n}"
          }
        ]
      },
      {
        "title": "Valeurs persistantes sans rendu",
        "body": "Une ref est adaptée à une valeur technique qui doit survivre aux rendus, par exemple l’identifiant d’un timer. Changer current ne déclenche pas un rendu, et React ne suit pas ces changements. Si la valeur doit être visible dans le JSX, elle relève probablement de l’état. Ne lis ou n’écris pas arbitrairement les refs pendant le rendu.",
        "examples": [
          {
            "title": "Timer nettoyé",
            "language": "tsx",
            "code": "const timerRef = useRef<number | undefined>(undefined);\n\nuseEffect(() => () => {\n  if (timerRef.current !== undefined) window.clearTimeout(timerRef.current);\n}, []);"
          }
        ]
      },
      {
        "title": "Manipulations DOM mesurées",
        "body": "Pour mesurer le layout avant que l’utilisateur ne voie un clignotement, useLayoutEffect peut être nécessaire, mais il bloque la peinture et doit rester rare. Préfère CSS et le flux normal du DOM. Les observateurs comme ResizeObserver exigent un abonnement et un nettoyage, comme tout système externe.",
        "examples": [
          {
            "title": "Observer un élément",
            "language": "tsx",
            "code": "useEffect(() => {\n  const node = panelRef.current;\n  if (!node) return;\n  const observer = new ResizeObserver(entries => setWidth(entries[0]?.contentRect.width ?? 0));\n  observer.observe(node);\n  return () => observer.disconnect();\n}, []);"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — ref et state ont des finalités différentes",
          "body": "Changer une ref ne déclenche pas de rendu. Utilise useRef pour garder une valeur impérative entre rendus, comme un identifiant de timer ou un élément DOM. Si une valeur doit apparaître dans l’interface, elle doit généralement être un state. N’utilise pas une ref pour contourner la circulation des données ou stocker des informations qui doivent provoquer un rendu.",
          "examples": [
            {
              "title": "Focus après ouverture",
              "language": "tsx",
              "code": "const inputRef = useRef<HTMLInputElement>(null);\nuseEffect(() => { if (isOpen) inputRef.current?.focus(); }, [isOpen]);\nreturn isOpen ? <input ref={inputRef} aria-label=\"Titre\" /> : null;"
            }
          ]
        },
        {
          "title": "Atelier corrigé — nettoyer les ressources impératives",
          "body": "Les timers, observers et listeners doivent être arrêtés lorsqu’ils ne sont plus nécessaires. Une ref est adaptée à l’identifiant d’un timer ; l’effet définit quand il démarre et le nettoyage quand il s’arrête. Pour les mesures de layout qui doivent être appliquées avant l’affichage, évalue useLayoutEffect avec parcimonie.",
          "examples": [
            {
              "title": "Timer nettoyé",
              "language": "tsx",
              "code": "useEffect(() => {\n  const id = window.setInterval(() => setSeconds(value => value + 1), 1000);\n  return () => window.clearInterval(id);\n}, []);"
            }
          ]
        }
      ]
  },
  {
    "id": "context",
    "title": "13. Context et état partagé",
    "summary": "Context transmet une valeur à une branche de l’arbre sans passer explicitement une prop à chaque niveau. Il convient aux dépendances réellement transversales, mais n’est pas un remplacement universel des props.",
    "concepts": [
      "Créer un Context avec un type explicite.",
      "Fournir une valeur et protéger le hook consommateur.",
      "Éviter un unique Context contenant tout l’état applicatif.",
      "Distinguer Context, état local et store externe."
    ],
    "exercise": "Ajoute un thème clair/sombre avec Context, puis explique pourquoi la recherche locale d’une seule page doit rester en props ou en état local plutôt que devenir globale.",
    "sections": [
      {
        "title": "Créer un Context sûr",
        "body": "Le provider fournit la valeur aux descendants qui consomment le Context. Un défaut `undefined` permet de détecter un composant rendu sans provider plutôt que de cacher une configuration manquante. Le hook personnalisé centralise cette vérification et simplifie l’usage dans les composants.",
        "examples": [
          {
            "title": "Context typé",
            "language": "tsx",
            "code": "type AuthContextValue = { user: User | null; signOut: () => void };\nconst AuthContext = createContext<AuthContextValue | undefined>(undefined);\n\nfunction useAuth() {\n  const value = useContext(AuthContext);\n  if (!value) throw new Error(\"useAuth doit être utilisé sous AuthProvider\");\n  return value;\n}"
          }
        ]
      },
      {
        "title": "Limiter les mises à jour",
        "body": "Quand la valeur fournie change, les consommateurs concernés peuvent être rendus de nouveau. Ne crée pas un objet value différent à chaque rendu sans raison si cela provoque des mises à jour coûteuses, mais n’ajoute pas non plus useMemo partout sans mesure. Sépare les contextes aux fréquences et responsabilités distinctes : thème, session, préférences, par exemple.",
        "examples": [
          {
            "title": "Provider de thème",
            "language": "tsx",
            "code": "const ThemeContext = createContext<\"light\" | \"dark\">(\"light\");\n\nfunction App() {\n  const [theme, setTheme] = useState<\"light\" | \"dark\">(\"light\");\n  return <ThemeContext.Provider value={theme}>\n    <button onClick={() => setTheme(t => t === \"light\" ? \"dark\" : \"light\")}>Changer de thème</button>\n    <Page />\n  </ThemeContext.Provider>;\n}"
          }
        ]
      },
      {
        "title": "Choisir le niveau d’état",
        "body": "Garde l’état dans le composant le plus proche qui en a besoin. Remonte-le vers un parent lorsque plusieurs composants doivent le partager. Context est adapté à une valeur transversale qui change modérément ; pour des données très fréquentes ou une logique de cache complexe, évalue un store externe ou une bibliothèque dédiée.",
        "examples": [
          {
            "title": "Préférer props quand c’est simple",
            "language": "tsx",
            "code": "function Page() {\n  const [query, setQuery] = useState(\"\");\n  return <><SearchInput value={query} onChange={setQuery} /><Results query={query} /></>;\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — Context diffuse une valeur, pas un store magique",
          "body": "Context évite de faire transiter une valeur par chaque niveau de props. Tout consommateur concerné est mis à jour lorsque la valeur du provider change selon les règles de comparaison React. Pour des mises à jour fréquentes ou un grand état avec sélecteurs fins, séparer les Contexts, utiliser un reducer ou adopter un store externe peut être plus approprié. Context ne remplace pas la conception d’une source de vérité unique.",
          "examples": [
            {
              "title": "Séparer valeur et actions",
              "language": "tsx",
              "code": "type Theme = \"light\" | \"dark\";\nconst ThemeContext = createContext<Theme | null>(null);\nfunction useTheme() { const value = useContext(ThemeContext); if (value === null) throw new Error(\"useTheme doit être utilisé dans ThemeProvider\"); return value; }"
            }
          ]
        },
        {
          "title": "Atelier corrigé — éviter les valeurs implicites",
          "body": "Fournis un Hook d’accès qui échoue explicitement si le provider manque, plutôt que de masquer une configuration invalide avec une valeur par défaut trompeuse. Le provider doit être placé à la frontière où le domaine est réellement partagé. Les valeurs non liées peuvent rester locales.",
          "examples": [
            {
              "title": "Provider typé",
              "language": "tsx",
              "code": "function ThemeProvider({ children }: { children: React.ReactNode }) {\n  const [theme, setTheme] = useState<Theme>(\"light\");\n  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "navigation",
    "title": "14. Navigation et React Router",
    "summary": "Le routeur associe l’URL à une vue et gère navigation, paramètres, liens et historique. Une route doit pouvoir être ouverte directement et conserver un comportement cohérent avec le bouton précédent du navigateur.",
    "concepts": [
      "Définir des routes et des layouts imbriqués.",
      "Lire les paramètres d’URL et construire des liens déclaratifs.",
      "Gérer route inconnue, chargement et erreurs de navigation.",
      "Ne pas remplacer les liens par des gestionnaires qui modifient manuellement window.location sans besoin."
    ],
    "exercise": "Construis un catalogue avec liste, détail par identifiant, navigation retour et page 404. Teste l’ouverture directe d’une URL de détail et le rafraîchissement en production.",
    "sections": [
      {
        "title": "Routes et liens",
        "body": "React Router fournit des composants Link et des hooks pour synchroniser l’interface avec l’URL. Les liens sont préférables à un bouton pour la navigation, car ils conservent les fonctionnalités attendues du navigateur. Le composant de route doit être choisi en fonction du chemin, pas de conditions éparpillées dans toute l’application.",
        "examples": [
          {
            "title": "Routes simples",
            "language": "tsx",
            "code": "import { BrowserRouter, Routes, Route, Link } from \"react-router-dom\";\n\nfunction App() {\n  return <BrowserRouter><nav><Link to=\"/courses\">Cours</Link></nav>\n    <Routes><Route path=\"/courses\" element={<CourseList />} />\n      <Route path=\"/courses/:courseId\" element={<CourseDetail />} />\n      <Route path=\"*\" element={<NotFound />} /></Routes>\n  </BrowserRouter>;\n}"
          }
        ]
      },
      {
        "title": "Paramètres et liens directs",
        "body": "Un paramètre de route reste une chaîne et doit être validé avant d’être utilisé. La page détail doit fonctionner lors d’un rechargement direct de son URL ; en déploiement SPA, le serveur doit renvoyer index.html pour les chemins applicatifs, ou la stratégie de routage doit être adaptée. Le paramètre URL fait partie de l’état navigable, contrairement à une sélection temporaire uniquement stockée en mémoire.",
        "examples": [
          {
            "title": "Lire un paramètre",
            "language": "tsx",
            "code": "function CourseDetail() {\n  const { courseId } = useParams();\n  if (!courseId) return <p role=\"alert\">Identifiant absent.</p>;\n  return <CourseView id={courseId} />;\n}"
          }
        ]
      },
      {
        "title": "Layouts, redirections et erreurs",
        "body": "Les layouts imbriqués permettent de partager navigation et cadres d’écran. Les routes protégées côté interface améliorent l’expérience mais ne remplacent jamais les contrôles d’autorisation du serveur. Les erreurs de route, ressources absentes et accès interdits doivent avoir des vues distinctes. Évite les redirections automatiques qui rendent l’historique et le retour arrière imprévisibles.",
        "examples": [
          {
            "title": "Route de repli",
            "language": "tsx",
            "code": "<Routes>\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"/settings\" element={<Settings />} />\n  <Route path=\"*\" element={<NotFound />} />\n</Routes>"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — l’URL est aussi un état partageable",
          "body": "Les filtres, pages et identifiants de ressource qui doivent survivre à un rafraîchissement ou être partageables ont souvent leur place dans l’URL. Les paramètres de route identifient une ressource ; les search params représentent souvent des critères de vue. Évite de maintenir des copies contradictoires entre URL et state local. Prévois routes inconnues, erreurs de chargement et navigation clavier.",
          "examples": [
            {
              "title": "Lire un paramètre avec garde",
              "language": "tsx",
              "code": "function CourseRoute() {\n  const { courseId } = useParams();\n  if (!courseId) return <p role=\"alert\">Identifiant de cours manquant.</p>;\n  return <CourseDetails id={courseId} />;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — navigation accessible et résiliente",
          "body": "Utilise Link pour naviguer et les formulaires d’action adaptés à la version du routeur. Les liens profonds doivent fonctionner après rechargement sur l’hébergement cible. Les pages doivent fournir un titre, un état de chargement, une erreur récupérable et une route de repli ; vérifie aussi la configuration de fallback de l’hébergeur statique.",
          "examples": [
            {
              "title": "Lien déclaratif",
              "language": "tsx",
              "code": "import { Link } from \"react-router-dom\";\nfunction CourseLink({ id, title }: { id: string; title: string }) {\n  return <Link to={`/courses/${encodeURIComponent(id)}`}>{title}</Link>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "typescript-react",
    "title": "15. TypeScript avec React",
    "summary": "TypeScript décrit les contrats entre composants et les données manipulées. Il améliore l’édition et la compilation, mais ne valide pas les données reçues à l’exécution.",
    "concepts": [
      "Typer props, callbacks, événements et états.",
      "Utiliser React.ReactNode pour le contenu et les unions pour les variantes.",
      "Éviter any et les assertions non vérifiées.",
      "Valider à l’exécution les données issues du réseau, de l’URL et du stockage."
    ],
    "exercise": "Type une page de formulaire et une API de cours sans any. Traite le JSON comme unknown et écris une validation runtime qui refuse une réponse mal formée.",
    "sections": [
      {
        "title": "Props, children et événements",
        "body": "Type les contrats de composants et utilise les types d’événements React adaptés. L’inférence suffit souvent pour les événements inline ; une fonction extraite peut demander un type explicite. React.ReactNode décrit le contenu pouvant être rendu, tandis que ReactElement représente un élément React déjà construit.",
        "examples": [
          {
            "title": "Événement typé",
            "language": "tsx",
            "code": "type InputProps = { value: string; onChange: (value: string) => void };\n\nfunction TextInput({ value, onChange }: InputProps) {\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event.currentTarget.value);\n  return <input value={value} onChange={handleChange} />;\n}"
          }
        ]
      },
      {
        "title": "Unions discriminées",
        "body": "Les unions littérales modélisent les variantes permises. Elles évitent les combinaisons impossibles et permettent à TypeScript de réduire le type selon status. Un switch exhaustif ou un helper basé sur never aide à détecter les cas oubliés quand le modèle évolue.",
        "examples": [
          {
            "title": "Rendu exhaustif",
            "language": "tsx",
            "code": "type LoadState<T> = { status: \"loading\" } | { status: \"success\"; data: T } | { status: \"error\"; message: string };\n\nfunction assertNever(value: never): never { throw new Error(`État non géré: ${value}`); }"
          }
        ]
      },
      {
        "title": "Types ne remplacent pas validation",
        "body": "Une annotation `const data: Course[] = await response.json()` ne valide pas le JSON : elle affirme seulement au compilateur que la donnée a ce type. Traite la réponse comme unknown puis vérifie structure et règles métier. Même principe pour localStorage et paramètres d’URL, qui sont modifiables hors du système de types.",
        "examples": [
          {
            "title": "Frontière de confiance",
            "language": "tsx",
            "code": "const raw: unknown = await response.json();\nif (!Array.isArray(raw) || !raw.every(isCourse)) {\n  throw new Error(\"Réponse API invalide\");\n}\nconst courses: Course[] = raw;"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — les types ne valident pas les données runtime",
          "body": "TypeScript vérifie le code à la compilation et ses types sont effacés à l’exécution. Les réponses réseau, localStorage, paramètres d’URL et messages postMessage restent non fiables jusqu’à validation. Utilise unknown à la frontière, puis un garde de type ou un schéma runtime. Pour les composants, préfère des unions discriminées aux combinaisons de booléens qui autorisent des états contradictoires.",
          "examples": [
            {
              "title": "État de chargement discriminé",
              "language": "tsx",
              "code": "type ViewState<T> = { status: \"loading\" } | { status: \"error\"; message: string } | { status: \"success\"; data: T };\nfunction View({ state }: { state: ViewState<string[]> }) {\n  if (state.status === \"loading\") return <p role=\"status\">Chargement…</p>;\n  if (state.status === \"error\") return <p role=\"alert\">{state.message}</p>;\n  return <ul>{state.data.map(item => <li key={item}>{item}</li>)}</ul>;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — typer précisément les événements",
          "body": "Le type de l’événement dépend de l’élément et du type d’événement. L’inférence fonctionne souvent directement dans JSX. Lorsque tu extrais le gestionnaire, indique le type React adapté. N’utilise pas as pour forcer le compilateur à accepter une valeur dont la validité n’a pas été établie.",
          "examples": [
            {
              "title": "Événement de saisie",
              "language": "tsx",
              "code": "function NameInput() {\n  const [name, setName] = useState(\"\");\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.currentTarget.value);\n  return <label>Nom <input value={name} onChange={handleChange} /></label>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "react19-actions",
    "title": "16. React 19 : Actions, useActionState et useOptimistic",
    "summary": "React 19 apporte des primitives pour les soumissions, les transitions et les mises à jour optimistes. Elles réduisent le code de plomberie, mais ne remplacent ni la validation serveur ni la compréhension des états.",
    "concepts": [
      "Comprendre Actions et transitions asynchrones.",
      "Utiliser useActionState pour résultat et état pending de formulaire.",
      "Utiliser useOptimistic uniquement avec une stratégie de retour arrière.",
      "Vérifier la compatibilité et la configuration de l’environnement avant d’adopter une API."
    ],
    "exercise": "Crée un formulaire de renommage avec useActionState, validation et état pending. Ajoute une action optimiste uniquement si tu sais comment gérer l’échec et restaurer l’état confirmé.",
    "sections": [
      {
        "title": "Actions asynchrones",
        "body": "Une Action représente un travail déclenché par une interaction, souvent une mutation asynchrone. Les transitions permettent à React de gérer du travail non urgent sans bloquer l’interface. Le serveur reste l’autorité pour les droits et la validation ; une action cliente n’est pas une frontière de sécurité.",
        "examples": [
          {
            "title": "Action de formulaire",
            "language": "tsx",
            "code": "async function saveName(_previous: { message: string }, formData: FormData) {\n  const name = String(formData.get(\"name\") ?? \"\").trim();\n  if (!name) return { message: \"Le nom est obligatoire.\" };\n  await api.updateName(name);\n  return { message: \"Nom enregistré.\" };\n}"
          }
        ]
      },
      {
        "title": "useActionState",
        "body": "useActionState relie une fonction d’action à un état de résultat et fournit un état pending. Il convient aux formulaires dont le résultat doit être affiché. Le contrat de l’action doit gérer les erreurs métier et ne pas exposer les détails internes ou secrets dans les messages visibles.",
        "examples": [
          {
            "title": "Formulaire avec action state",
            "language": "tsx",
            "code": "const [state, formAction, isPending] = useActionState(saveName, { message: \"\" });\nreturn <form action={formAction}>\n  <label>Nom <input name=\"name\" required /></label>\n  <button disabled={isPending}>{isPending ? \"Enregistrement…\" : \"Enregistrer\"}</button>\n  <p role=\"status\">{state.message}</p>\n</form>;"
          }
        ]
      },
      {
        "title": "Mises à jour optimistes",
        "body": "useOptimistic permet de présenter une valeur provisoire pendant qu’une action est en cours. L’interface doit revenir à l’état confirmé si l’opération échoue. N’utilise pas une mise à jour optimiste pour masquer une action non autorisée ou donner une garantie de réussite avant réponse serveur ; indique les erreurs et la possibilité de réessayer.",
        "examples": [
          {
            "title": "Intention optimiste",
            "language": "tsx",
            "code": "const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (current, amount: number) => current + amount);\n// Dans l’action de clic : ajouter +1 de façon optimiste, puis confirmer ou afficher l’erreur."
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — Actions et états de formulaire",
          "body": "useActionState relie une action à un état de résultat et expose l’état pending. La fonction d’action doit être définie avec la signature attendue (état précédent puis données du formulaire) et gérer les erreurs métier. useOptimistic affiche une intention provisoire ; il ne confirme pas la persistance serveur. Les API de formulaire peuvent être utilisées avec React 19, mais les détails dépendent de l’environnement et du framework.",
          "examples": [
            {
              "title": "Action autonome pour useActionState",
              "language": "tsx",
              "code": "type SaveState = { message: string };\nasync function saveNameToApi(name: string): Promise<void> {\n  const response = await fetch(\"/api/profile/name\", { method: \"PUT\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify({ name }) });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n}\nasync function saveName(_previous: SaveState, formData: FormData): Promise<SaveState> {\n  const name = String(formData.get(\"name\") ?? \"\").trim();\n  if (name.length < 2) return { message: \"Le nom doit contenir au moins deux caractères.\" };\n  try { await saveNameToApi(name); return { message: \"Nom enregistré.\" }; }\n  catch { return { message: \"Enregistrement impossible.\" }; }\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — ne pas confondre optimisme et confirmation",
          "body": "L’interface optimiste doit se réconcilier avec la donnée confirmée après succès et revenir en arrière ou afficher une erreur en cas d’échec. Les règles d’autorisation et les validations sont toujours effectuées côté serveur. Prévois un retour accessible et évite les doubles soumissions.",
          "examples": [
            {
              "title": "Formulaire avec pending",
              "language": "tsx",
              "code": "const [state, formAction, isPending] = useActionState(saveName, { message: \"\" });\nreturn <form action={formAction}>\n  <label>Nom <input name=\"name\" required minLength={2} /></label>\n  <button type=\"submit\" disabled={isPending}>{isPending ? \"Enregistrement…\" : \"Enregistrer\"}</button>\n  <p role=\"status\" aria-live=\"polite\">{state.message}</p>\n</form>;"
            }
          ]
        }
      ]
  },
  {
    "id": "accessibilite",
    "title": "17. Accessibilité et qualité d’interface",
    "summary": "Une interface React accessible repose d’abord sur HTML sémantique, navigation clavier, noms accessibles, gestion du focus et retours d’état. ARIA complète le HTML ; elle ne remplace pas une structure correcte.",
    "concepts": [
      "Associer chaque champ à un label.",
      "Préserver le focus et l’ordre de navigation clavier.",
      "Annoncer les changements de statut avec prudence.",
      "Tester les noms accessibles, les rôles et les états des composants."
    ],
    "exercise": "Passe un formulaire et une navigation au clavier uniquement. Vérifie labels, focus visible, erreurs associées, annonces de statut et structure des titres.",
    "sections": [
      {
        "title": "Sémantique avant ARIA",
        "body": "Un bouton natif possède déjà rôle, focus et activation clavier. Un lien représente une navigation ; un bouton représente une action. Les titres structurent le contenu et les listes sont des listes réelles. Ajoute ARIA seulement lorsque le HTML natif ne suffit pas, et vérifie que chaque nom accessible décrit la fonction de l’élément.",
        "examples": [
          {
            "title": "Navigation sémantique",
            "language": "tsx",
            "code": "<nav aria-label=\"Principale\">\n  <a href=\"/courses\">Cours</a>\n  <a href=\"/projects\">Projets</a>\n</nav>"
          }
        ]
      },
      {
        "title": "Focus et dialogues",
        "body": "Après suppression d’un élément ou fermeture d’un dialogue, le focus ne doit pas disparaître dans une zone incohérente. Un dialogue modal doit gérer le focus initial, contenir la navigation clavier et le restaurer à la fermeture. Préfère un composant de dialogue accessible éprouvé si la complexité devient importante plutôt que de reconstruire tous les comportements à la main.",
        "examples": [
          {
            "title": "Retour d’état",
            "language": "tsx",
            "code": "<p role=\"status\" aria-live=\"polite\">{saved ? \"Modifications enregistrées.\" : \"\"}</p>"
          }
        ]
      },
      {
        "title": "Contraste, erreurs et mouvement",
        "body": "Ne communique pas un état uniquement par couleur. Les erreurs doivent être textuelles et associées au contrôle. Respecte les préférences de réduction des animations et assure une cible interactive suffisamment facile à atteindre. L’accessibilité est une propriété de l’ensemble du parcours, pas une seule propriété ARIA.",
        "examples": [
          {
            "title": "Erreur liée à un champ",
            "language": "tsx",
            "code": "<input id=\"password\" type=\"password\" aria-invalid={hasError} aria-describedby={hasError ? \"password-error\" : undefined} />\n{hasError && <p id=\"password-error\">Le mot de passe doit contenir au moins 12 caractères.</p>}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — partir du HTML natif",
          "body": "Les éléments natifs apportent clavier, focus et sémantique. ARIA complète une interface qui ne peut pas être exprimée nativement ; il ne remplace pas un bouton par un div cliquable. Chaque champ doit avoir un nom accessible, chaque erreur doit être associée au champ et les changements importants doivent être annoncés sans rendre la page bavarde.",
          "examples": [
            {
              "title": "Champ avec erreur associée",
              "language": "tsx",
              "code": "function EmailField({ error }: { error?: string }) {\n  return <div><label htmlFor=\"email\">Adresse e-mail</label>\n    <input id=\"email\" type=\"email\" aria-invalid={Boolean(error)} aria-describedby={error ? \"email-error\" : undefined} />\n    {error && <p id=\"email-error\">{error}</p>}\n  </div>;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — vérifier au clavier",
          "body": "Teste l’ordre de tabulation, le focus visible, l’ouverture et la fermeture des dialogues, le retour du focus à l’élément déclencheur et les messages d’erreur. La conformité ne se déduit pas uniquement d’un attribut aria-label ou d’un score automatisé : réalise aussi des essais manuels et des tests avec technologies d’assistance lorsque possible.",
          "examples": [
            {
              "title": "Action native",
              "language": "tsx",
              "code": "function DeleteAction({ onDelete }: { onDelete: () => void }) {\n  return <button type=\"button\" onClick={onDelete} aria-label=\"Supprimer le cours\">Supprimer</button>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "tests",
    "title": "18. Tests de composants et tests utilisateur",
    "summary": "Les tests React robustes vérifient le comportement visible et les interactions, plutôt que l’organisation interne des composants. Les tests unitaires et d’intégration se complètent.",
    "concepts": [
      "Utiliser Testing Library et les requêtes par rôle ou label.",
      "Simuler les interactions utilisateur avec user-event.",
      "Tester succès, erreur, chargement, état vide et formulaires.",
      "Éviter les assertions dépendantes de classes CSS ou de l’implémentation interne."
    ],
    "exercise": "Écris des tests pour un formulaire et une liste filtrable : cas nominal, état vide, validation, échec réseau et navigation. Utilise les rôles accessibles pour interagir avec l’interface.",
    "sections": [
      {
        "title": "Tester le contrat visible",
        "body": "Testing Library encourage les tests proches de l’usage réel : trouver un bouton par son nom accessible, cliquer, puis vérifier le résultat visible. Un test ne devrait pas dépendre de l’ordre interne des hooks ou de la structure privée du composant. Les requêtes par rôle aident aussi à révéler les défauts d’accessibilité.",
        "examples": [
          {
            "title": "Test d’interaction",
            "language": "tsx",
            "code": "render(<Counter />);\nawait user.click(screen.getByRole(\"button\", { name: /incrémenter/i }));\nexpect(screen.getByText(\"Compteur : 1\")).toBeInTheDocument();"
          }
        ]
      },
      {
        "title": "Tests asynchrones",
        "body": "Pour une requête, vérifie l’état de chargement puis attends l’apparition du résultat. Couvre également les erreurs et les réponses vides. Mocke la frontière réseau, pas toute la logique du composant, et évite de dépendre de véritables services externes dans la suite unitaire.",
        "examples": [
          {
            "title": "Attendre un résultat",
            "language": "tsx",
            "code": "expect(screen.getByRole(\"status\")).toHaveTextContent(/chargement/i);\nexpect(await screen.findByRole(\"heading\", { name: \"Cours React\" })).toBeInTheDocument();"
          }
        ]
      },
      {
        "title": "Pyramide de tests",
        "body": "Les tests unitaires couvrent calculs et reducers ; les tests de composants vérifient les parcours ; les tests end-to-end vérifient les intégrations critiques dans un navigateur réel. Ne cherche pas un pourcentage de couverture isolé : privilégie les risques métier, les erreurs de données, les autorisations et les parcours essentiels.",
        "examples": [
          {
            "title": "Test d’état vide",
            "language": "tsx",
            "code": "render(<CourseList courses={[]} />);\nexpect(screen.getByText(/aucun cours/i)).toBeInTheDocument();"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — tester le contrat utilisateur",
          "body": "Les tests de composants doivent observer ce que voit et fait l’utilisateur : rôle, nom accessible, saisie, clic, état chargé ou message d’erreur. Évite les tests qui dépendent de classes CSS ou de l’état interne. Pour l’asynchrone, utilise findBy ou waitFor lorsque nécessaire et contrôle les effets réseau avec des réponses déterministes.",
          "examples": [
            {
              "title": "Test d’interaction observable",
              "language": "tsx",
              "code": "render(<Counter />);\nawait user.click(screen.getByRole(\"button\", { name: /incrémenter/i }));\nexpect(screen.getByText(\"1\")).toBeInTheDocument();"
            }
          ]
        },
        {
          "title": "Atelier corrigé — séparer les niveaux de test",
          "body": "Teste les fonctions pures et reducers isolément, les interactions au niveau composant, puis quelques parcours critiques de bout en bout. Les tests doivent couvrir succès, erreur, attente, vide et accès clavier. Un test qui vérifie uniquement le texte initial n’empêche pas une régression du comportement.",
          "examples": [
            {
              "title": "Test d’un état vide",
              "language": "tsx",
              "code": "render(<CourseList courses={[]} />);\nexpect(screen.getByText(/aucun cours/i)).toBeInTheDocument();"
            }
          ]
        }
      ]
  },
  {
    "id": "performance",
    "title": "19. Performance, memoization et mesure",
    "summary": "La performance se traite à partir de mesures. React fournit des outils pour réduire certains calculs ou rendus, mais la mémorisation ajoute elle-même une complexité et n’est pas nécessaire partout.",
    "concepts": [
      "Mesurer avant d’optimiser.",
      "Distinguer React.memo, useMemo et useCallback.",
      "Réduire le travail et le volume de données avant de mémoriser.",
      "Utiliser lazy loading et découpage des bundles quand ils améliorent le parcours."
    ],
    "exercise": "Profile une liste de plusieurs milliers d’éléments, identifie le coût réel, puis compare filtre direct, mémorisation et pagination ou virtualisation. Documente la mesure avant/après.",
    "sections": [
      {
        "title": "Profiler et causes de rendu",
        "body": "Un rendu d’un parent peut conduire ses enfants à être évalués, mais cela ne signifie pas nécessairement que chaque nœud DOM est modifié. React DevTools Profiler aide à localiser les composants coûteux et les raisons des rendus. Mesure sur des scénarios représentatifs avant de modifier l’architecture.",
        "examples": [
          {
            "title": "Calcul direct par défaut",
            "language": "tsx",
            "code": "const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);\n// Ne mémorise ce calcul que si sa fréquence et son coût le justifient."
          }
        ]
      },
      {
        "title": "Mémoïsation et références",
        "body": "React.memo peut éviter certains rendus si les props restent égales ; useMemo mémorise une valeur calculée ; useCallback mémorise une référence de fonction. Ces outils ne rendent pas une fonction « plus correcte » et ne remplacent pas l’immuabilité. Un objet recréé à chaque rendu peut invalider une mémorisation, mais ajouter des hooks partout rend le code plus difficile à lire.",
        "examples": [
          {
            "title": "useMemo ciblé",
            "language": "tsx",
            "code": "const visibleProducts = useMemo(\n  () => products.filter(product => product.name.toLowerCase().includes(query.toLowerCase())),\n  [products, query]\n);"
          }
        ]
      },
      {
        "title": "Chargement différé",
        "body": "React.lazy et Suspense permettent de charger certains composants à la demande. Le découpage peut réduire le bundle initial, au prix d’un chargement réseau et d’un état d’attente à gérer. Place les frontières de chargement là où l’attente est compréhensible et préserve les dimensions visuelles pour limiter les déplacements de mise en page.",
        "examples": [
          {
            "title": "Chargement différé",
            "language": "tsx",
            "code": "const SettingsPage = lazy(() => import(\"./SettingsPage\"));\n\n<Suspense fallback={<p role=\"status\">Chargement des paramètres…</p>}>\n  <SettingsPage />\n</Suspense>"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — mesurer avant de mémoïser",
          "body": "Un rendu React n’est pas automatiquement coûteux. Commence par profiler, repérer le composant ou calcul responsable et vérifier la structure de l’état. React.memo, useMemo et useCallback ont un coût et ne garantissent pas une accélération ; ils sont utiles lorsque la stabilité des références évite réellement un travail mesuré. Ne les utilise pas pour masquer un modèle de données mal conçu.",
          "examples": [
            {
              "title": "Mémoïsation d’un calcul coûteux",
              "language": "tsx",
              "code": "const visibleItems = useMemo(() => items.filter(item => matches(item, query)), [items, query]);\n// Ne garder useMemo que si le calcul ou ses consommateurs justifient ce cache."
            }
          ]
        },
        {
          "title": "Atelier corrigé — réduire le travail à la source",
          "body": "Avant d’ajouter des Hooks de mémoïsation, réduis les rendus inutiles en gardant l’état près de ses consommateurs, en évitant les états dérivés dupliqués et en découpant les composants selon leurs responsabilités. Mesure le temps avant et après dans les mêmes conditions et documente le compromis.",
          "examples": [
            {
              "title": "Chargement différé d’une route",
              "language": "tsx",
              "code": "const ReportsPage = lazy(() => import(\"./ReportsPage\"));\nfunction ReportsRoute() {\n  return <Suspense fallback={<p role=\"status\">Chargement des rapports…</p>}><ReportsPage /></Suspense>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "erreurs-suspense",
    "title": "20. Erreurs, Suspense et résilience",
    "summary": "Une application fiable traite les erreurs de rendu, les attentes de chargement et les défaillances réseau de manière distincte. Les frontières de gestion évitent qu’une erreur locale ne rende toute l’application inutilisable.",
    "concepts": [
      "Utiliser des Error Boundaries pour les erreurs de rendu descendantes.",
      "Distinguer Error Boundary, try/catch d’événement et erreurs de requête.",
      "Utiliser Suspense uniquement avec des sources compatibles.",
      "Présenter une récupération claire et ne pas divulguer les détails techniques."
    ],
    "exercise": "Ajoute un fallback de route introuvable, une vue de récupération après erreur de chargement et une frontière d’erreur autour d’une zone non critique.",
    "sections": [
      {
        "title": "Error Boundaries",
        "body": "Une Error Boundary intercepte certaines erreurs pendant le rendu des descendants et affiche une solution de repli. Les frontières classiques sont définies avec un composant de classe ou une abstraction/bibliothèque adaptée. Elles ne capturent pas toutes les erreurs d’événements, des promesses arbitraires ou du code asynchrone : ces erreurs nécessitent leur propre gestion.",
        "examples": [
          {
            "title": "Fallback d’erreur conceptuel",
            "language": "tsx",
            "code": "<ErrorBoundary fallback={<p role=\"alert\">Cette section ne peut pas être affichée.</p>}>\n  <ComplexDashboard />\n</ErrorBoundary>"
          }
        ]
      },
      {
        "title": "Suspense et chargement",
        "body": "Suspense affiche un fallback lorsque le descendant suspend via une intégration compatible, comme lazy. Le simple fait de lancer fetch dans un effet ne fait pas automatiquement suspendre ce composant. Place les frontières de façon à préserver les zones déjà utilisables et à éviter de remplacer toute la page pour un chargement local.",
        "examples": [
          {
            "title": "Frontière locale",
            "language": "tsx",
            "code": "<section><h2>Profil</h2><Suspense fallback={<ProfileSkeleton />}><ProfilePanel /></Suspense></section>"
          }
        ]
      },
      {
        "title": "Récupération et observabilité",
        "body": "Un fallback utile donne une action possible : réessayer, revenir à la liste ou contacter le support. Enregistre les détails techniques dans un système de logs approprié, sans données sensibles. Ajoute un identifiant de corrélation si l’application utilise un backend. Une interface qui masque l’erreur sans permettre la récupération reste fragile.",
        "examples": [
          {
            "title": "Message actionnable",
            "language": "tsx",
            "code": "function LoadError({ onRetry }: { onRetry: () => void }) {\n  return <div role=\"alert\"><p>Les données n’ont pas pu être chargées.</p><button onClick={onRetry}>Réessayer</button></div>;\n}"
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — erreur et suspension sont distinctes",
          "body": "Une Error Boundary capture certaines erreurs de rendu de ses descendants ; elle ne capture pas toutes les erreurs d’événements ou de tâches asynchrones. Suspense affiche un fallback lorsqu’un descendant suspend via une intégration compatible, notamment lazy. Un fetch lancé dans un effet ne déclenche pas automatiquement Suspense. Les frontières doivent être placées pour limiter l’étendue de l’écran remplacé.",
          "examples": [
            {
              "title": "Frontière Suspense locale",
              "language": "tsx",
              "code": "function ProfilePanel() {\n  return <section><h2>Profil</h2><Suspense fallback={<p role=\"status\">Chargement du profil…</p>}><LazyProfile /></Suspense></section>;\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — une erreur doit permettre une action",
          "body": "Le fallback d’erreur doit expliquer ce qui a échoué sans exposer de trace interne et proposer, lorsque cela a du sens, une action de réessai ou un retour vers une zone fonctionnelle. Journalise les détails techniques côté observabilité, pas dans le texte affiché. Teste aussi le comportement lorsque le service reste indisponible.",
          "examples": [
            {
              "title": "Fallback avec réessai",
              "language": "tsx",
              "code": "function ErrorMessage({ onRetry }: { onRetry: () => void }) {\n  return <div role=\"alert\"><p>Impossible de charger cette section.</p><button type=\"button\" onClick={onRetry}>Réessayer</button></div>;\n}"
            }
          ]
        }
      ]
  },
  {
    "id": "architecture-production",
    "title": "21. Architecture, sécurité et mise en production",
    "summary": "Une application React maintenable sépare présentation, logique métier, accès aux données et navigation. Le build client ne constitue pas une frontière de sécurité : tout code et secret livré au navigateur est visible par l’utilisateur.",
    "concepts": [
      "Organiser le code par fonctionnalité et responsabilités.",
      "Ne jamais embarquer de secret serveur dans le bundle client.",
      "Comprendre configuration de build, routes SPA et ressources statiques.",
      "Automatiser lint, tests, typecheck et build dans CI."
    ],
    "exercise": "Prépare une application de cours pour la production : structure par fonctionnalité, configuration publique sans secrets, routes directes, gestion des erreurs, typecheck/tests/build en CI et procédure de déploiement documentée.",
    "sections": [
      {
        "title": "Architecture par fonctionnalité",
        "body": "Une structure par domaine fonctionnel aide à rapprocher composants, hooks, validations et tests. Évite les dossiers abstraits trop tôt et les composants qui combinent récupération de données, validation métier et présentation sans séparation. Le but est de rendre les changements localisés et de clarifier la direction des dépendances.",
        "examples": [
          {
            "title": "Exemple de structure",
            "language": "text",
            "code": "src/\n  app/          # routes, providers, configuration\n  features/\n    courses/    # composants, hooks, API, types et tests du domaine\n    profile/\n  shared/       # composants réellement partagés\n  main.tsx"
          }
        ]
      },
      {
        "title": "Sécurité côté client",
        "body": "Ne place jamais une clé privée, un mot de passe ou un secret dans le code React, les variables Vite exposées au client ou un fichier livré au navigateur. Les permissions et validations critiques doivent être vérifiées côté serveur. Le client peut masquer une action, mais seul le serveur décide si l’action est autorisée. Évite aussi d’injecter du HTML non fiable via dangerouslySetInnerHTML.",
        "examples": [
          {
            "title": "Configuration publique uniquement",
            "language": "tsx",
            "code": "const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;\n// Les variables préfixées VITE_ sont exposées au bundle client : aucune clé secrète ici."
          }
        ]
      },
      {
        "title": "Build et déploiement",
        "body": "Le build de production doit être reproductible avec le lockfile et validé en CI par typecheck, tests et build. Si l’application utilise des routes côté client, configure l’hébergement pour servir la page d’entrée sur les chemins applicatifs, ou choisis une stratégie de routage compatible. Vérifie chemins de ressources, variables d’environnement, erreurs console et ouverture directe des routes.",
        "examples": [
          {
            "title": "Pipeline de vérification",
            "language": "text",
            "code": "npm ci\nnpm run typecheck\nnpm test\nnpm run build\n# Publier ensuite le répertoire de sortie généré par le build."
          }
        ]
      }
    ,
        {
          "title": "Approfondissement — architecture par fonctionnalité",
          "body": "Une architecture doit rendre visibles les frontières : composants, logique métier, accès API, types et tests. Le découpage par fonctionnalité facilite les changements locaux ; un dossier partagé doit contenir des abstractions réellement transverses. Les variables d’environnement préfixées pour le client sont publiques après compilation : aucune clé privée ou secret ne doit y être placé.",
          "examples": [
            {
              "title": "Frontière API",
              "language": "ts",
              "code": "export async function loadCourse(id: string): Promise<unknown> {\n  const response = await fetch(`/api/courses/${encodeURIComponent(id)}`);\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json(); // validation métier dans une fonction dédiée à la frontière\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — pipeline reproductible",
          "body": "Le déploiement doit reproduire les dépendances depuis le lockfile, exécuter les contrôles du projet, puis publier le dossier de build attendu. Un contrôle statique de catalogue ne remplace pas Vitest, TypeScript ou le build. Après publication, vérifie les liens profonds, le chemin de base, les ressources et les erreurs de console sur le site réellement déployé.",
          "examples": [
            {
              "title": "Ordre de vérification",
              "language": "bash",
              "code": "npm ci\nnpm run lint\nnpm run typecheck\nnpm test -- --run\nnpm run build\n# Les scripts exacts doivent correspondre au package.json du projet."
            }
          ]
        }
      ]
  }
];
