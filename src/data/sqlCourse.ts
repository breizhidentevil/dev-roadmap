import type { Course } from './types';

/** Cours SQL approfondi : du modèle relationnel à l’exploitation et à l’optimisation. */
export const sqlCourse: Course = {
  "id": "sql",
  "title": "SQL",
  "category": "Langage",
  "tags": [
    "sql",
    "relationnel",
    "requêtes",
    "jointures",
    "transactions",
    "index",
    "sécurité",
    "postgresql"
  ],
  "description": "Formation complète au SQL relationnel, de la première requête à la modélisation, aux transactions concurrentes, à la sécurité, aux performances et à l’intégration dans une application. Les exemples sont majoritairement orientés PostgreSQL ; les différences entre dialectes sont signalées.",
  "level": "Débutant à avancé",
  "duration": "30 à 45 heures avec exercices et projet final",
  "prerequisites": [
    "Aucun prérequis SQL. Savoir utiliser un terminal est utile pour installer un moteur et exécuter les scripts.",
    "Les notions de Node.js et d’API sont utiles pour le module d’intégration applicative, mais ne sont pas nécessaires pour suivre le cours."
  ],
  "objectives": [
    "Comprendre le modèle relationnel et choisir des types et contraintes cohérents.",
    "Écrire des requêtes SELECT précises, lisibles et testables.",
    "Maîtriser les jointures, agrégations, sous-requêtes, CTE et opérations ensemblistes.",
    "Concevoir des écritures sûres et des transactions correctes sous concurrence.",
    "Analyser des plans d’exécution et choisir les index à partir de mesures.",
    "Protéger la base, versionner son schéma et l’intégrer à une application avec des requêtes paramétrées."
  ],
  "modules": [
    {
      "id": "fondamentaux-relationnel",
      "title": "1. Comprendre le modèle relationnel",
      "summary": "SQL interroge et transforme des données structurées en relations. La qualité des requêtes dépend autant du modèle des données que de la syntaxe.",
      "concepts": [
        "Tables, lignes, colonnes et domaines de valeurs",
        "Schéma logique, relation et résultat d’une requête",
        "Déclaratif : exprimer le résultat attendu plutôt que l’algorithme"
      ],
      "sections": [
        {
          "title": "Une table est un contrat de données",
          "body": "Une table représente un type d’objet métier. Chaque colonne possède un type et une règle d’interprétation ; chaque ligne représente un enregistrement. Une table relationnelle n’a pas d’ordre implicite : sans ORDER BY, l’ordre des lignes retournées n’est pas garanti. Les noms de colonnes et les contraintes documentent le contrat de données.",
          "examples": [
            {
              "title": "Une table est un contrat de données",
              "language": "sql",
              "code": "CREATE TABLE products (\n  id BIGINT PRIMARY KEY,\n  name TEXT NOT NULL,\n  price NUMERIC(10, 2) NOT NULL,\n  active BOOLEAN NOT NULL DEFAULT TRUE\n);"
            }
          ]
        },
        {
          "title": "SQL est déclaratif",
          "body": "Une requête décrit les lignes et colonnes voulues. Le moteur choisit un plan d’exécution en fonction des statistiques, des index et des coûts estimés. Deux requêtes équivalentes peuvent avoir des performances différentes ; le planificateur peut aussi changer de stratégie selon le volume et la distribution des données.",
          "examples": [
            {
              "title": "SQL est déclaratif",
              "language": "sql",
              "code": "SELECT name, price\nFROM products\nWHERE active = TRUE\nORDER BY price DESC;"
            }
          ]
        },
        {
          "title": "Penser en ensembles",
          "body": "SQL traite généralement des ensembles de lignes, pas une ligne à la fois. Une jointure peut multiplier les lignes, un agrégat peut les réduire et une sous-requête peut exprimer une condition sur un ensemble. Vérifie toujours la granularité attendue du résultat : « une ligne par commande » n’est pas la même chose que « une ligne par produit de commande ».",
          "examples": [
            {
              "title": "Penser en ensembles",
              "language": "sql",
              "code": "SELECT category_id, COUNT(*) AS product_count\nFROM products\nGROUP BY category_id;"
            }
          ]
        }
      ],
      "exercise": "À partir d’une table `books(id, title, author, published_year)`, écris une requête qui retourne une ligne par livre et explique pourquoi l’ordre n’est pas garanti sans ORDER BY."
    },
    {
      "id": "environnement-dialectes",
      "title": "2. Installer un moteur et comprendre les dialectes",
      "summary": "SQL possède un socle commun, mais les types, fonctions, limites et syntaxes diffèrent selon PostgreSQL, MySQL, SQLite et SQL Server.",
      "concepts": [
        "Client SQL et serveur de base de données",
        "SQL standard et extensions propres à un moteur",
        "Choisir une version et vérifier les exemples dans le bon environnement"
      ],
      "sections": [
        {
          "title": "Client, serveur et base",
          "body": "Un serveur gère les fichiers, les connexions, les transactions et l’exécution des requêtes. Un client comme `psql`, un outil graphique ou un pilote applicatif envoie les instructions et lit les résultats. SQLite est une bibliothèque embarquée basée sur un fichier, tandis que PostgreSQL et MySQL fonctionnent généralement comme serveurs.",
          "examples": [
            {
              "title": "Client, serveur et base",
              "language": "sql",
              "code": "-- PostgreSQL avec psql\nSELECT current_database() AS database_name, current_user AS connected_role;"
            }
          ]
        },
        {
          "title": "Le dialecte compte",
          "body": "Les exemples du cours utilisent majoritairement PostgreSQL. Par exemple, `LIMIT`, `RETURNING`, `ILIKE`, `JSONB` et `GENERATED ... AS IDENTITY` ne sont pas tous portables à l’identique. Avant de copier une requête, identifie le moteur et sa version, puis consulte sa documentation.",
          "examples": [
            {
              "title": "Le dialecte compte",
              "language": "sql",
              "code": "-- PostgreSQL\nSELECT id, name\nFROM products\nORDER BY id\nLIMIT 10;"
            }
          ]
        },
        {
          "title": "Créer un bac à sable",
          "body": "Apprends sur une base jetable avec des données synthétiques et un compte peu privilégié. Ne pratique jamais les suppressions ou migrations risquées directement sur une base de production. Conserve les scripts de création et de peuplement dans le dépôt pour rendre les exercices reproductibles.",
          "examples": [
            {
              "title": "Créer un bac à sable",
              "language": "sql",
              "code": "CREATE TABLE demo_items (\n  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  label TEXT NOT NULL\n);\nINSERT INTO demo_items (label) VALUES ('premier'), ('second');\nSELECT * FROM demo_items ORDER BY id;"
            }
          ]
        }
      ],
      "exercise": "Installe ou ouvre un environnement PostgreSQL ou SQLite, crée une base de test et note trois différences de syntaxe que tu rencontres entre ce moteur et un autre."
    },
    {
      "id": "select-projection",
      "title": "3. SELECT, FROM et projection",
      "summary": "Construire une requête lisible en choisissant explicitement les colonnes et les sources nécessaires.",
      "concepts": [
        "SELECT et alias de colonnes",
        "Éviter SELECT * dans les interfaces stables",
        "DISTINCT et doublons de résultat"
      ],
      "sections": [
        {
          "title": "Choisir les colonnes",
          "body": "`SELECT` définit la projection du résultat. Choisis les colonnes réellement utilisées : cela rend le contrat plus lisible et évite de transporter des données inutiles. Dans une API, sélectionner explicitement les colonnes réduit aussi le risque d’exposer accidentellement un champ ajouté plus tard.",
          "examples": [
            {
              "title": "Choisir les colonnes",
              "language": "sql",
              "code": "SELECT id, title, published_at\nFROM articles;"
            }
          ]
        },
        {
          "title": "Alias et expressions",
          "body": "Un alias nomme une colonne calculée ou renomme une colonne dans le résultat. Utilise des noms explicites et évite les alias qui entrent en conflit avec des mots réservés. La plupart des moteurs permettent de réutiliser un alias dans ORDER BY, mais pas forcément dans WHERE au même niveau.",
          "examples": [
            {
              "title": "Alias et expressions",
              "language": "sql",
              "code": "SELECT quantity * unit_price AS line_total\nFROM order_items;"
            }
          ]
        },
        {
          "title": "DISTINCT avec discernement",
          "body": "`DISTINCT` élimine les doublons sur l’ensemble des colonnes projetées. Il ne signifie pas « choisir arbitrairement une ligne par identifiant ». Si plusieurs colonnes diffèrent, les lignes restent distinctes. Souvent, une jointure mal conçue doit être corrigée plutôt que masquée avec DISTINCT.",
          "examples": [
            {
              "title": "DISTINCT avec discernement",
              "language": "sql",
              "code": "SELECT DISTINCT country_code\nFROM customers\nORDER BY country_code;"
            }
          ]
        }
      ],
      "exercise": "Écris une requête qui retourne l’identifiant, le nom complet et l’adresse e-mail des clients. Évite SELECT * et explique pourquoi."
    },
    {
      "id": "where-operateurs",
      "title": "4. Filtrer avec WHERE",
      "summary": "Définir précisément quelles lignes participent au résultat à l’aide de prédicats simples et composés.",
      "concepts": [
        "Comparaisons et opérateurs booléens",
        "IN, BETWEEN et LIKE",
        "Priorité de AND et OR"
      ],
      "sections": [
        {
          "title": "Comparaisons et booléens",
          "body": "`WHERE` filtre les lignes avant le regroupement. Combine les conditions avec AND, OR et NOT, et utilise des parenthèses dès que la lecture pourrait être ambiguë. AND est prioritaire sur OR : ne laisse pas la priorité implicite définir une règle métier.",
          "examples": [
            {
              "title": "Comparaisons et booléens",
              "language": "sql",
              "code": "SELECT id, name, price\nFROM products\nWHERE active = TRUE\n  AND (price < 20 OR price >= 100);"
            }
          ]
        },
        {
          "title": "IN, BETWEEN et motifs",
          "body": "`IN` teste l’appartenance à une liste ; `BETWEEN` inclut ses deux bornes ; `LIKE` utilise `%` pour zéro ou plusieurs caractères et `_` pour un caractère. Les règles de casse et de collation dépendent du moteur. Un motif commençant par `%` peut empêcher l’usage d’un index B-tree classique.",
          "examples": [
            {
              "title": "IN, BETWEEN et motifs",
              "language": "sql",
              "code": "SELECT id, name\nFROM customers\nWHERE country_code IN ('FR', 'ES')\n  AND name LIKE 'A%';"
            }
          ]
        },
        {
          "title": "Filtrage de dates",
          "body": "Pour filtrer une journée stockée dans un timestamp, privilégie souvent un intervalle semi-ouvert `[début, lendemain)` plutôt qu’une comparaison à 23:59:59.999. Cela évite les erreurs de précision et permet plus facilement d’utiliser un index sur la colonne.",
          "examples": [
            {
              "title": "Filtrage de dates",
              "language": "sql",
              "code": "SELECT id, created_at\nFROM orders\nWHERE created_at >= TIMESTAMP '2026-01-01 00:00:00'\n  AND created_at <  TIMESTAMP '2026-01-02 00:00:00';"
            }
          ]
        }
      ],
      "exercise": "Liste les commandes payées de plus de 50 euros, passées en France ou en Espagne depuis le début du mois. Parenthèse explicitement toute combinaison AND/OR."
    },
    {
      "id": "null-logique",
      "title": "5. NULL et logique à trois valeurs",
      "summary": "NULL signifie qu’une valeur est inconnue ou absente ; il ne se comporte ni comme zéro ni comme une chaîne vide.",
      "concepts": [
        "IS NULL et IS NOT NULL",
        "Résultats TRUE, FALSE et UNKNOWN",
        "COALESCE et NULLIF"
      ],
      "sections": [
        {
          "title": "Tester NULL correctement",
          "body": "Une comparaison telle que `column = NULL` ne teste pas l’absence de valeur. Utilise `IS NULL` ou `IS NOT NULL`. Une condition qui produit UNKNOWN n’est pas retenue par WHERE, ce qui explique plusieurs surprises lors de jointures et de négations.",
          "examples": [
            {
              "title": "Tester NULL correctement",
              "language": "sql",
              "code": "SELECT id, email\nFROM customers\nWHERE email IS NULL;"
            }
          ]
        },
        {
          "title": "Comprendre UNKNOWN",
          "body": "Avec NULL, `NULL = 5`, `NULL = NULL` et `NOT (NULL = 5)` ne donnent pas TRUE. Cette logique à trois valeurs influence les filtres, les CHECK et les jointures. Les contraintes doivent être conçues en sachant que certaines expressions peuvent rester inconnues.",
          "examples": [
            {
              "title": "Comprendre UNKNOWN",
              "language": "sql",
              "code": "SELECT\n  NULL = 5 AS comparison,\n  NULL IS NULL AS is_missing,\n  NOT (NULL = 5) AS negated;"
            }
          ]
        },
        {
          "title": "Remplacer ou neutraliser l’absence",
          "body": "`COALESCE(a, b, ...)` renvoie la première valeur non NULL. `NULLIF(a, b)` renvoie NULL lorsque les deux expressions sont égales. Ces fonctions sont utiles pour la présentation et certains calculs, mais ne doivent pas cacher une donnée manquante si celle-ci a une signification métier.",
          "examples": [
            {
              "title": "Remplacer ou neutraliser l’absence",
              "language": "sql",
              "code": "SELECT name, COALESCE(phone, 'Non renseigné') AS phone_label\nFROM customers;\n\nSELECT numerator / NULLIF(denominator, 0) AS ratio\nFROM metrics;"
            }
          ]
        }
      ],
      "exercise": "Explique pourquoi `WHERE deleted_at != NULL` ne retourne pas les lignes attendues. Réécris le filtre et affiche un libellé par défaut avec COALESCE."
    },
    {
      "id": "expressions-case",
      "title": "6. Expressions, CASE et conversions",
      "summary": "Calculer des valeurs et exprimer des règles conditionnelles directement dans les requêtes sans perdre la lisibilité.",
      "concepts": [
        "CASE WHEN et expressions conditionnelles",
        "CAST et conversions explicites",
        "Fonctions numériques, chaînes et dates"
      ],
      "sections": [
        {
          "title": "CASE exprime une règle",
          "body": "CASE retourne une valeur selon la première branche dont la condition est vraie. Mets les cas les plus spécifiques en premier et prévois un ELSE si une valeur par défaut est réellement définie. Les règles importantes doivent aussi être garanties côté modèle si elles doivent s’appliquer à toutes les écritures.",
          "examples": [
            {
              "title": "CASE exprime une règle",
              "language": "sql",
              "code": "SELECT id, price,\n  CASE\n    WHEN price >= 100 THEN 'premium'\n    WHEN price >= 30 THEN 'standard'\n    ELSE 'entrée de gamme'\n  END AS segment\nFROM products;"
            }
          ]
        },
        {
          "title": "Conversions explicites",
          "body": "CAST convertit une expression vers un type cible. Les conversions implicites peuvent varier selon le moteur et produire des erreurs ou des plans moins efficaces. Valide les données avant conversion lorsqu’elles viennent d’une entrée externe ; une conversion SQL n’est pas une validation métier complète.",
          "examples": [
            {
              "title": "Conversions explicites",
              "language": "sql",
              "code": "SELECT CAST('2026-10-14' AS DATE) AS report_date;"
            }
          ]
        },
        {
          "title": "Fonctions et types",
          "body": "Les fonctions de chaîne, numériques et temporelles simplifient les calculs, mais les noms et comportements peuvent varier entre moteurs. Évite de transformer une colonne dans WHERE lorsque cela empêche l’utilisation d’un index ; préfère un intervalle adapté ou un index d’expression si le moteur le permet.",
          "examples": [
            {
              "title": "Fonctions et types",
              "language": "sql",
              "code": "SELECT\n  UPPER(name) AS normalized_name,\n  ROUND(price * 1.20, 2) AS price_with_tax\nFROM products;"
            }
          ]
        }
      ],
      "exercise": "Écris un CASE qui classe des commandes en « brouillon », « en cours » et « terminée », puis justifie l’ordre des conditions."
    },
    {
      "id": "tri-pagination",
      "title": "7. Trier et paginer les résultats",
      "summary": "Un tri stable et une pagination explicite sont nécessaires pour produire des listes prévisibles dans une application.",
      "concepts": [
        "ORDER BY et ordre déterministe",
        "LIMIT/OFFSET",
        "Pagination par curseur"
      ],
      "sections": [
        {
          "title": "Tri déterministe",
          "body": "Sans ORDER BY, le moteur ne garantit aucun ordre. Si la colonne de tri n’est pas unique, ajoute une clé de départage pour éviter que deux lignes échangent de place entre deux pages. Précise aussi le traitement des NULL si cela compte pour l’interface.",
          "examples": [
            {
              "title": "Tri déterministe",
              "language": "sql",
              "code": "SELECT id, title, created_at\nFROM articles\nORDER BY created_at DESC, id DESC;"
            }
          ]
        },
        {
          "title": "LIMIT et OFFSET",
          "body": "OFFSET saute un nombre de lignes et LIMIT borne le résultat. Cette pagination est simple, mais les grandes valeurs d’OFFSET peuvent coûter cher et les insertions concurrentes peuvent provoquer des doublons ou des omissions entre pages.",
          "examples": [
            {
              "title": "LIMIT et OFFSET",
              "language": "sql",
              "code": "SELECT id, title\nFROM articles\nORDER BY id\nLIMIT 20 OFFSET 40;"
            }
          ]
        },
        {
          "title": "Pagination par curseur",
          "body": "Une pagination par curseur utilise la dernière clé reçue pour poursuivre la lecture. Elle est efficace sur des clés indexées et réduit les décalages dus aux nouvelles lignes, à condition que le tri et le curseur soient définis de façon cohérente.",
          "examples": [
            {
              "title": "Pagination par curseur",
              "language": "sql",
              "code": "SELECT id, title\nFROM articles\nWHERE id > 1200\nORDER BY id\nLIMIT 20;"
            }
          ]
        }
      ],
      "exercise": "Propose une pagination par curseur pour une liste triée par `created_at DESC, id DESC`. Écris le filtre de la page suivante et explique le rôle du second critère."
    },
    {
      "id": "agregations",
      "title": "8. Agrégats, GROUP BY et HAVING",
      "summary": "Les fonctions d’agrégation résument plusieurs lignes ; GROUP BY définit les groupes et HAVING filtre les groupes obtenus.",
      "concepts": [
        "COUNT, SUM, AVG, MIN et MAX",
        "GROUP BY et granularité du résultat",
        "WHERE avant agrégation, HAVING après agrégation"
      ],
      "sections": [
        {
          "title": "Calculer des agrégats",
          "body": "COUNT(*) compte les lignes ; COUNT(colonne) ignore les NULL de cette colonne. SUM et AVG ignorent également les valeurs NULL. Choisis l’agrégat qui correspond à la question et vérifie si une jointure multiplie les lignes avant le calcul.",
          "examples": [
            {
              "title": "Calculer des agrégats",
              "language": "sql",
              "code": "SELECT customer_id, COUNT(*) AS order_count, SUM(total) AS lifetime_value\nFROM orders\nGROUP BY customer_id;"
            }
          ]
        },
        {
          "title": "WHERE ou HAVING ?",
          "body": "WHERE filtre les lignes avant le regroupement. HAVING filtre les groupes après calcul des agrégats. Pour réduire le travail, applique dans WHERE les conditions qui portent sur les lignes individuelles plutôt que de tout reporter dans HAVING.",
          "examples": [
            {
              "title": "WHERE ou HAVING ?",
              "language": "sql",
              "code": "SELECT customer_id, COUNT(*) AS order_count\nFROM orders\nWHERE status = 'paid'\nGROUP BY customer_id\nHAVING COUNT(*) >= 3;"
            }
          ]
        },
        {
          "title": "Éviter les doubles comptages",
          "body": "Si une commande a plusieurs lignes et plusieurs paiements, joindre directement les deux relations peut multiplier les combinaisons et gonfler les sommes. Agrège chaque relation à la granularité voulue avant de les joindre, ou choisis une stratégie qui préserve explicitement cette granularité.",
          "examples": [
            {
              "title": "Éviter les doubles comptages",
              "language": "sql",
              "code": "WITH item_totals AS (\n  SELECT order_id, SUM(quantity * unit_price) AS total\n  FROM order_items GROUP BY order_id\n)\nSELECT o.id, i.total\nFROM orders o\nJOIN item_totals i ON i.order_id = o.id;"
            }
          ]
        },
        {
          "title": "Fonctions de fenêtrage",
          "body": "Une fonction de fenêtrage calcule une valeur sur un ensemble de lignes liées sans réduire le résultat à une seule ligne par groupe, contrairement à GROUP BY. OVER définit la fenêtre ; PARTITION BY sépare les groupes et ORDER BY définit l’ordre de calcul. Les fonctions comme ROW_NUMBER, RANK, LAG et SUM(...) OVER sont très utiles pour classer, comparer une ligne à la précédente ou calculer un cumul.",
          "examples": [
            {
              "title": "Classer et calculer un cumul par client",
              "language": "sql",
              "code": "SELECT customer_id, id AS order_id, created_at, total,\n  ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at DESC, id DESC) AS recent_rank,\n  SUM(total) OVER (PARTITION BY customer_id ORDER BY created_at, id\n    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total\nFROM orders;"
            }
          ]
        }
      ],
      "exercise": "Calcule le chiffre d’affaires par mois et par pays, puis ne conserve que les groupes ayant au moins 100 commandes payées. Documente la granularité de chaque étape. Ensuite, utilise ROW_NUMBER pour sélectionner la commande la plus récente de chaque client."
    },
    {
      "id": "jointures",
      "title": "9. Jointures et relations entre tables",
      "summary": "Les jointures combinent les lignes de relations différentes ; la condition de jointure détermine la cardinalité et le sens du résultat.",
      "concepts": [
        "INNER JOIN et LEFT JOIN",
        "Clés primaires et étrangères",
        "Multiplication des lignes et jointures manquantes"
      ],
      "sections": [
        {
          "title": "INNER JOIN",
          "body": "INNER JOIN ne conserve que les paires de lignes qui satisfont la condition de jointure. Une clé étrangère vers une clé primaire produit généralement au plus une correspondance par ligne enfant ; une relation plusieurs-à-plusieurs peut au contraire multiplier les lignes.",
          "examples": [
            {
              "title": "INNER JOIN",
              "language": "sql",
              "code": "SELECT o.id, c.name AS customer_name\nFROM orders o\nJOIN customers c ON c.id = o.customer_id;"
            }
          ]
        },
        {
          "title": "LEFT JOIN et absence de correspondance",
          "body": "LEFT JOIN conserve toutes les lignes de gauche et complète par NULL lorsqu’aucune ligne de droite ne correspond. Placer une condition sur la table droite dans WHERE peut éliminer ces lignes et transformer le résultat en pratique en jointure interne ; place cette condition dans ON si les lignes sans correspondance doivent rester.",
          "examples": [
            {
              "title": "LEFT JOIN et absence de correspondance",
              "language": "sql",
              "code": "SELECT c.id, c.name, o.id AS order_id\nFROM customers c\nLEFT JOIN orders o\n  ON o.customer_id = c.id\n AND o.status = 'paid';"
            }
          ]
        },
        {
          "title": "Relations plusieurs-à-plusieurs",
          "body": "Une table d’association matérialise une relation n:n. Elle contient les clés étrangères des deux entités et souvent une contrainte UNIQUE composée qui empêche les associations en double. Le modèle doit rendre les cardinalités explicites.",
          "examples": [
            {
              "title": "Relations plusieurs-à-plusieurs",
              "language": "sql",
              "code": "CREATE TABLE article_tags (\n  article_id BIGINT NOT NULL REFERENCES articles(id),\n  tag_id BIGINT NOT NULL REFERENCES tags(id),\n  PRIMARY KEY (article_id, tag_id)\n);"
            }
          ]
        }
      ],
      "exercise": "Retourne tous les clients, y compris ceux sans commande payée, avec leur nombre de commandes payées. Fais attention au placement du filtre et à COUNT."
    },
    {
      "id": "sous-requetes-cte",
      "title": "10. Sous-requêtes, EXISTS et CTE",
      "summary": "Les sous-requêtes et les CTE structurent les requêtes complexes et permettent d’exprimer des conditions d’existence sans multiplier inutilement les lignes.",
      "concepts": [
        "Sous-requêtes scalaires et corrélées",
        "EXISTS et NOT EXISTS",
        "WITH pour nommer les étapes d’une requête"
      ],
      "sections": [
        {
          "title": "Sous-requêtes",
          "body": "Une sous-requête peut produire une valeur, une liste ou une relation. Vérifie la cardinalité attendue : une sous-requête scalaire doit produire au plus une ligne. Une sous-requête corrélée référence une ligne de la requête externe et peut être exécutée logiquement pour chaque ligne, même si le moteur peut la réécrire.",
          "examples": [
            {
              "title": "Sous-requêtes",
              "language": "sql",
              "code": "SELECT id, name\nFROM products\nWHERE price > (SELECT AVG(price) FROM products);"
            }
          ]
        },
        {
          "title": "EXISTS et anti-jointure",
          "body": "EXISTS teste s’il existe au moins une ligne correspondante et évite de multiplier les lignes du résultat externe. NOT EXISTS est souvent adapté pour trouver les entités sans relation correspondante. C’est généralement plus robuste qu’un NOT IN lorsque la sous-requête peut contenir NULL.",
          "examples": [
            {
              "title": "EXISTS et anti-jointure",
              "language": "sql",
              "code": "SELECT c.id, c.name\nFROM customers c\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders o WHERE o.customer_id = c.id\n);"
            }
          ]
        },
        {
          "title": "CTE avec WITH",
          "body": "Une CTE donne un nom à une étape intermédiaire et rend la requête plus lisible. Elle ne garantit pas automatiquement une meilleure performance : selon le moteur et la version, elle peut être fusionnée ou matérialisée. Vérifie le plan lorsque le coût est important.",
          "examples": [
            {
              "title": "CTE avec WITH",
              "language": "sql",
              "code": "WITH monthly_sales AS (\n  SELECT date_trunc('month', created_at) AS month, SUM(total) AS revenue\n  FROM orders WHERE status = 'paid'\n  GROUP BY date_trunc('month', created_at)\n)\nSELECT month, revenue FROM monthly_sales ORDER BY month;"
            }
          ]
        }
      ],
      "exercise": "Écris une requête qui trouve les clients ayant passé au moins une commande payée, puis une seconde qui trouve ceux n’en ayant jamais passé. Compare JOIN et EXISTS."
    },
    {
      "id": "set-operations",
      "title": "11. UNION, INTERSECT et EXCEPT",
      "summary": "Les opérations ensemblistes combinent les résultats de plusieurs requêtes compatibles, selon une logique distincte de la jointure.",
      "concepts": [
        "UNION et UNION ALL",
        "Compatibilité des colonnes",
        "INTERSECT et EXCEPT selon le moteur"
      ],
      "sections": [
        {
          "title": "UNION et UNION ALL",
          "body": "UNION combine les lignes et élimine les doublons ; UNION ALL conserve les doublons et évite le coût de déduplication. Les requêtes doivent retourner le même nombre de colonnes avec des types compatibles, dans le même ordre.",
          "examples": [
            {
              "title": "UNION et UNION ALL",
              "language": "sql",
              "code": "SELECT email FROM customers\nUNION\nSELECT email FROM newsletter_subscribers;"
            }
          ]
        },
        {
          "title": "Étiqueter les sources",
          "body": "Une colonne constante peut identifier l’origine d’une ligne. Si les sources contiennent des doublons qui ont un sens métier, UNION ALL est souvent le choix correct. Renomme les colonnes dans le premier SELECT et harmonise les types des autres branches.",
          "examples": [
            {
              "title": "Étiqueter les sources",
              "language": "sql",
              "code": "SELECT id, name, 'customer' AS source\nFROM customers\nUNION ALL\nSELECT id, name, 'lead' AS source\nFROM leads;"
            }
          ]
        },
        {
          "title": "Comparer deux ensembles",
          "body": "INTERSECT conserve les valeurs présentes dans les deux résultats et EXCEPT celles présentes dans le premier mais pas dans le second. La disponibilité et certains détails varient selon les moteurs ; les équivalents EXISTS/NOT EXISTS sont souvent plus portables.",
          "examples": [
            {
              "title": "Comparer deux ensembles",
              "language": "sql",
              "code": "SELECT customer_id FROM orders_2025\nINTERSECT\nSELECT customer_id FROM orders_2026;"
            }
          ]
        }
      ],
      "exercise": "Fusionne deux listes de contacts en conservant une colonne source. Explique si tu dois utiliser UNION ou UNION ALL et comment traiter les doublons métier."
    },
    {
      "id": "modelisation",
      "title": "12. Modélisation relationnelle et normalisation",
      "summary": "Un schéma bien conçu évite les anomalies de mise à jour et rend les règles métier explicites.",
      "concepts": [
        "Entités, attributs et relations",
        "Première, deuxième et troisième formes normales",
        "Dénormalisation raisonnée"
      ],
      "sections": [
        {
          "title": "Définir les entités et cardinalités",
          "body": "Identifie les objets métier, leurs identifiants et leurs relations. Une relation 1:n se matérialise généralement par une clé étrangère du côté n ; une relation n:n nécessite une table d’association. Évite les colonnes contenant des listes séparées par des virgules.",
          "examples": [
            {
              "title": "Définir les entités et cardinalités",
              "language": "sql",
              "code": "CREATE TABLE order_items (\n  order_id BIGINT NOT NULL REFERENCES orders(id),\n  product_id BIGINT NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL CHECK (quantity > 0),\n  unit_price NUMERIC(12,2) NOT NULL CHECK (unit_price >= 0),\n  PRIMARY KEY (order_id, product_id)\n);"
            }
          ]
        },
        {
          "title": "Éviter les anomalies",
          "body": "La normalisation sépare les faits qui dépendent de clés différentes. Stocker l’adresse du client dans chaque commande peut produire des divergences et rendre les corrections difficiles. Une copie historique peut toutefois être volontaire si elle représente l’adresse de livraison au moment de la commande : documente alors la sémantique de cette copie.",
          "examples": [
            {
              "title": "Éviter les anomalies",
              "language": "sql",
              "code": "-- Les coordonnées actuelles du client vivent dans customers.\n-- L’adresse de livraison de la commande peut être un instantané métier.\nSELECT c.name, o.shipping_address\nFROM customers c JOIN orders o ON o.customer_id = c.id;"
            }
          ]
        },
        {
          "title": "Dénormaliser seulement pour une raison mesurée",
          "body": "La dénormalisation copie ou précalcule des informations afin d’améliorer certains accès. Elle ajoute une obligation de cohérence, de rafraîchissement et de reprise après panne. Décide après mesure d’un besoin réel, et documente la source de vérité ainsi que la stratégie de mise à jour.",
          "examples": [
            {
              "title": "Dénormaliser seulement pour une raison mesurée",
              "language": "sql",
              "code": "-- Exemple de valeur dérivée stockée : à maintenir par transaction\n-- ou par un mécanisme de projection cohérent.\nSELECT customer_id, SUM(total) AS lifetime_value\nFROM orders WHERE status = 'paid'\nGROUP BY customer_id;"
            }
          ]
        }
      ],
      "exercise": "Modélise une bibliothèque avec livres, auteurs, adhérents et emprunts. Identifie les relations 1:n et n:n, les clés et les règles qui évitent les emprunts incohérents."
    },
    {
      "id": "ddl-types",
      "title": "13. CREATE TABLE, types et schémas",
      "summary": "Le DDL définit la structure durable des données ; les types doivent refléter les valeurs réellement admises.",
      "concepts": [
        "CREATE, ALTER et DROP",
        "Entiers, NUMERIC, texte, dates et booléens",
        "Identifiants et choix de types portables"
      ],
      "sections": [
        {
          "title": "Créer une table explicitement",
          "body": "Définis les colonnes, types et contraintes dès la création. Les nombres utilisés pour de l’argent doivent éviter les approximations binaires des nombres flottants ; NUMERIC/DECIMAL est souvent adapté. Choisis la précision selon le domaine et fixe la règle d’arrondi métier.",
          "examples": [
            {
              "title": "Créer une table explicitement",
              "language": "sql",
              "code": "CREATE TABLE invoices (\n  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  reference TEXT NOT NULL UNIQUE,\n  total NUMERIC(12,2) NOT NULL CHECK (total >= 0),\n  issued_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP\n);"
            }
          ]
        },
        {
          "title": "Dates et fuseaux horaires",
          "body": "Un timestamp avec fuseau représente un instant ; un timestamp sans fuseau représente une date-heure locale sans information de fuseau. Les échéances locales peuvent nécessiter un fuseau IANA séparé. Évite de stocker des instants en texte ou d’assumer que le serveur est en UTC sans le vérifier.",
          "examples": [
            {
              "title": "Dates et fuseaux horaires",
              "language": "sql",
              "code": "SELECT CURRENT_TIMESTAMP, CURRENT_DATE;"
            }
          ]
        },
        {
          "title": "Évoluer le schéma",
          "body": "ALTER TABLE modifie une structure existante. Sur une grande table, certaines modifications peuvent verrouiller ou réécrire beaucoup de données. Les migrations de production doivent être préparées en étapes compatibles avec les versions d’application qui coexistent pendant le déploiement.",
          "examples": [
            {
              "title": "Évoluer le schéma",
              "language": "sql",
              "code": "ALTER TABLE customers\n  ADD COLUMN preferred_language TEXT;\n\n-- Vérifier les données avant d’ajouter ensuite une contrainte NOT NULL."
            }
          ]
        }
      ],
      "exercise": "Crée les tables `customers`, `orders` et `order_items` avec des types adaptés. Justifie les types de prix, de dates, des identifiants et des quantités."
    },
    {
      "id": "contraintes-integrite",
      "title": "14. Clés, contraintes et intégrité",
      "summary": "Les contraintes de base de données sont la dernière ligne de défense pour empêcher les états invalides, même quand plusieurs clients écrivent simultanément.",
      "concepts": [
        "PRIMARY KEY et FOREIGN KEY",
        "NOT NULL, UNIQUE et CHECK",
        "Actions référentielles et invariants métier"
      ],
      "sections": [
        {
          "title": "Clés primaires et étrangères",
          "body": "Une clé primaire identifie une ligne. Une clé étrangère impose qu’une référence pointe vers une ligne existante, sauf si la valeur est NULL et que la colonne l’autorise. Les contraintes d’intégrité doivent être portées par la base, pas seulement par l’interface.",
          "examples": [
            {
              "title": "Clés primaires et étrangères",
              "language": "sql",
              "code": "CREATE TABLE orders (\n  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  customer_id BIGINT NOT NULL REFERENCES customers(id),\n  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP\n);"
            }
          ]
        },
        {
          "title": "UNIQUE, CHECK et NOT NULL",
          "body": "UNIQUE interdit les doublons selon les règles du moteur ; CHECK valide une expression ; NOT NULL interdit les valeurs absentes. Attention : un CHECK qui évalue UNKNOWN à cause de NULL est généralement accepté, donc ajoute NOT NULL lorsque l’absence n’est pas autorisée.",
          "examples": [
            {
              "title": "UNIQUE, CHECK et NOT NULL",
              "language": "sql",
              "code": "CREATE TABLE inventory (\n  product_id BIGINT PRIMARY KEY REFERENCES products(id),\n  quantity INTEGER NOT NULL CHECK (quantity >= 0),\n  sku TEXT NOT NULL UNIQUE\n);"
            }
          ]
        },
        {
          "title": "Actions référentielles",
          "body": "ON DELETE RESTRICT/NO ACTION, CASCADE, SET NULL et SET DEFAULT ont des effets différents. CASCADE peut supprimer de nombreuses lignes indirectement : ne l’utilise que si cette propagation correspond exactement à la règle métier et si elle est comprise par l’équipe.",
          "examples": [
            {
              "title": "Actions référentielles",
              "language": "sql",
              "code": "CREATE TABLE comments (\n  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  article_id BIGINT NOT NULL REFERENCES articles(id) ON DELETE CASCADE,\n  body TEXT NOT NULL\n);"
            }
          ]
        }
      ],
      "exercise": "Ajoute les contraintes nécessaires à une réservation de siège : une réservation doit pointer vers un utilisateur et un siège valides, et le même siège ne peut être réservé deux fois pour le même événement."
    },
    {
      "id": "dml-ecritures",
      "title": "15. INSERT, UPDATE, DELETE et RETURNING",
      "summary": "Les écritures SQL doivent être ciblées, validées et protégées par des contraintes, notamment lorsqu’elles sont exécutées par une application.",
      "concepts": [
        "INSERT avec liste de colonnes",
        "UPDATE et DELETE avec prédicat vérifié",
        "RETURNING dans PostgreSQL"
      ],
      "sections": [
        {
          "title": "Insérer des données",
          "body": "Énumère les colonnes dans INSERT afin que la requête ne dépende pas de l’ordre physique de la table. Utilise des paramètres pour les valeurs venant de l’application. RETURNING est une extension disponible notamment dans PostgreSQL et permet de récupérer les lignes insérées.",
          "examples": [
            {
              "title": "Insérer des données",
              "language": "sql",
              "code": "INSERT INTO products (name, price, active)\nVALUES ('Clavier', 49.90, TRUE)\nRETURNING id, name, price;"
            }
          ]
        },
        {
          "title": "Mettre à jour précisément",
          "body": "Un UPDATE sans WHERE modifie toutes les lignes. Avant une opération sensible, vérifie le prédicat avec un SELECT et contrôle le nombre de lignes modifiées. Les validations applicatives ne remplacent pas les contraintes, car l’état peut changer entre la lecture et l’écriture.",
          "examples": [
            {
              "title": "Mettre à jour précisément",
              "language": "sql",
              "code": "UPDATE inventory\nSET quantity = quantity - 1\nWHERE product_id = 42 AND quantity > 0\nRETURNING product_id, quantity;"
            }
          ]
        },
        {
          "title": "Supprimer et gérer les conflits",
          "body": "DELETE sans WHERE supprime toutes les lignes. Pour les créations concurrentes, une contrainte unique est plus fiable qu’un SELECT préalable. PostgreSQL offre `ON CONFLICT` pour définir le comportement en cas de conflit, mais la règle de mise à jour doit rester explicite.",
          "examples": [
            {
              "title": "Supprimer et gérer les conflits",
              "language": "sql",
              "code": "INSERT INTO favorites (user_id, product_id)\nVALUES (7, 42)\nON CONFLICT (user_id, product_id) DO NOTHING;"
            }
          ]
        }
      ],
      "exercise": "Écris un script de migration de données qui insère des lignes, met à jour une catégorie et supprime uniquement les enregistrements explicitement obsolètes. Explique comment tu vérifies le périmètre avant chaque écriture."
    },
    {
      "id": "transactions-acid",
      "title": "16. Transactions et propriétés ACID",
      "summary": "Les transactions regroupent des opérations liées afin de préserver un invariant métier en cas de succès ou d’échec.",
      "concepts": [
        "BEGIN, COMMIT et ROLLBACK",
        "Atomicité, cohérence, isolation et durabilité",
        "Limites entre transactions SQL et effets externes"
      ],
      "sections": [
        {
          "title": "Le cycle d’une transaction",
          "body": "Une transaction commence, exécute plusieurs opérations puis est validée ou annulée. Si une opération échoue, il faut éviter de valider un état partiel. Attention : une requête qui réussit mais modifie zéro ligne n’est pas automatiquement une erreur SQL. Pour les opérations métier, vérifie le nombre de lignes affectées et exécute ROLLBACK si un prérequis (compte existant, solde suffisant, réservation disponible) n’est pas satisfait. Les détails d’autocommit et de gestion des erreurs varient selon le client et le pilote.",
          "examples": [
            {
              "title": "Le cycle d’une transaction",
              "language": "sql",
              "code": "-- Exemple de structure : la logique de contrôle appartient au client SQL ou à l’application.\nBEGIN;\nUPDATE accounts\nSET balance = balance - 25\nWHERE id = 1 AND balance >= 25\nRETURNING id;\n-- L’application doit vérifier qu’exactement une ligne a été modifiée.\n-- Si ce n’est pas le cas : ROLLBACK, sans créditer le second compte.\nUPDATE accounts\nSET balance = balance + 25\nWHERE id = 2\nRETURNING id;\n-- Vérifier également qu’exactement une ligne a été modifiée.\n-- COMMIT seulement si les deux contrôles métier réussissent ; sinon ROLLBACK."
            }
          ]
        },
        {
          "title": "Comprendre ACID",
          "body": "Atomicité signifie tout ou rien ; cohérence signifie que les règles définies restent satisfaites ; isolation limite les interférences concurrentes ; durabilité signifie que les changements validés survivent selon les garanties du moteur. ACID ne rend pas automatiquement correcte une règle métier mal conçue.",
          "examples": [
            {
              "title": "Comprendre ACID",
              "language": "sql",
              "code": "BEGIN;\nUPDATE accounts SET balance = balance - 25\nWHERE id = 1 AND balance >= 25\nRETURNING id;\n-- L’application doit vérifier qu’une ligne a été modifiée.\nROLLBACK;"
            }
          ]
        },
        {
          "title": "Ne pas garder une transaction ouverte",
          "body": "Une transaction longue conserve des verrous ou des versions de lignes et peut bloquer d’autres opérations. N’attends pas une API externe au milieu d’une transaction si tu peux éviter cette durée. Pour coordonner une base et un système externe, étudie les patterns outbox, idempotence et compensation.",
          "examples": [
            {
              "title": "Ne pas garder une transaction ouverte",
              "language": "sql",
              "code": "-- Exemple de transaction courte :\nBEGIN;\nINSERT INTO orders (customer_id, status) VALUES (7, 'pending');\nINSERT INTO outbox_events (event_type, payload)\nVALUES ('order.created', '{\"customerId\":7}');\nCOMMIT;"
            }
          ]
        }
      ],
      "exercise": "Modélise un transfert entre deux comptes. Écris les opérations transactionnelles, la condition qui empêche un solde négatif et le comportement attendu si le second compte n’existe pas."
    },
    {
      "id": "concurrence-isolation",
      "title": "17. Concurrence, isolation et verrous",
      "summary": "Plusieurs requêtes peuvent lire et modifier les mêmes données simultanément ; les contraintes, niveaux d’isolation et verrous protègent les invariants.",
      "concepts": [
        "Lectures concurrentes et anomalies",
        "Niveaux d’isolation et verrous de ligne",
        "Deadlocks, retries et contraintes uniques"
      ],
      "sections": [
        {
          "title": "Les courses entre requêtes",
          "body": "Un schéma « lire puis écrire » peut être incorrect si deux transactions lisent la même valeur avant de la modifier. Le code applicatif doit utiliser une mise à jour conditionnelle, une contrainte, un verrou ou un niveau d’isolation adapté à l’invariant.",
          "examples": [
            {
              "title": "Les courses entre requêtes",
              "language": "sql",
              "code": "UPDATE inventory\nSET quantity = quantity - 1\nWHERE product_id = 42 AND quantity > 0\nRETURNING quantity;"
            }
          ]
        },
        {
          "title": "Isolation et verrouillage",
          "body": "Les moteurs proposent plusieurs niveaux d’isolation. PostgreSQL utilise MVCC ; `SELECT ... FOR UPDATE` peut verrouiller les lignes sélectionnées pour une mise à jour ultérieure. Un verrou n’est utile que si la transaction le conserve jusqu’à l’opération concernée et si tous les chemins concurrents respectent la stratégie.",
          "examples": [
            {
              "title": "Isolation et verrouillage",
              "language": "sql",
              "code": "BEGIN;\nSELECT quantity FROM inventory\nWHERE product_id = 42 FOR UPDATE;\n-- Vérifier puis mettre à jour dans la même transaction.\nCOMMIT;"
            }
          ]
        },
        {
          "title": "Deadlocks et reprises",
          "body": "Un deadlock survient lorsque des transactions attendent circulairement les verrous détenus par les autres. Réduis le risque en verrouillant les ressources dans un ordre cohérent, en gardant les transactions courtes et en gérant les erreurs transitoires avec un retry borné.",
          "examples": [
            {
              "title": "Deadlocks et reprises",
              "language": "sql",
              "code": "-- Deux transactions qui verrouillent les comptes dans\n-- des ordres opposés peuvent provoquer un deadlock.\n-- Ordre stable recommandé : verrouiller les IDs croissants."
            }
          ]
        }
      ],
      "exercise": "Simule deux requêtes concurrentes qui réservent le dernier exemplaire d’un produit. Propose une solution reposant sur une contrainte ou une mise à jour conditionnelle et explique pourquoi elle tient sous concurrence."
    },
    {
      "id": "types-dates-json",
      "title": "18. Types avancés, dates, chaînes et JSON",
      "summary": "Les types explicites réduisent les ambiguïtés, facilitent les contraintes et améliorent les comparaisons.",
      "concepts": [
        "NUMERIC, dates et fuseaux horaires",
        "Encodage et comparaison de texte",
        "JSON et JSONB en PostgreSQL"
      ],
      "sections": [
        {
          "title": "Argent et dates",
          "body": "Pour les montants, utilise un type décimal exact tel que NUMERIC plutôt qu’un flottant binaire. Pour les événements, distingue un instant d’une heure locale. Stocke les instants de manière cohérente et conserve un fuseau IANA lorsque le métier dépend de l’heure locale.",
          "examples": [
            {
              "title": "Argent et dates",
              "language": "sql",
              "code": "CREATE TABLE payments (\n  amount NUMERIC(12,2) NOT NULL CHECK (amount >= 0),\n  occurred_at TIMESTAMPTZ NOT NULL\n);"
            }
          ]
        },
        {
          "title": "Texte, casse et collation",
          "body": "La comparaison des chaînes dépend du moteur, de la collation et parfois de la locale. Normaliser le texte à l’écriture ou créer un index fonctionnel peut faciliter les recherches insensibles à la casse. Ne confonds pas normalisation de recherche et modification irréversible de la valeur affichée.",
          "examples": [
            {
              "title": "Texte, casse et collation",
              "language": "sql",
              "code": "-- PostgreSQL : recherche insensible à la casse\nSELECT id, name FROM customers WHERE name ILIKE 'mar%';"
            }
          ]
        },
        {
          "title": "JSON : utile mais pas universel",
          "body": "JSONB de PostgreSQL est pratique pour des attributs semi-structurés, mais ne remplace pas les colonnes relationnelles lorsqu’un champ a des contraintes, des relations ou des requêtes fréquentes. Choisis une source de vérité et valide la structure du JSON côté base ou application.",
          "examples": [
            {
              "title": "JSON : utile mais pas universel",
              "language": "sql",
              "code": "CREATE TABLE events (\n  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  payload JSONB NOT NULL\n);\nSELECT payload ->> 'type' AS event_type FROM events;"
            }
          ]
        }
      ],
      "exercise": "Modélise une commande avec un instant de création, un montant, une devise et des métadonnées JSON. Justifie quelles données doivent être des colonnes dédiées."
    },
    {
      "id": "vues-fonctions",
      "title": "19. Vues, fonctions et logique côté base",
      "summary": "Les vues et fonctions SQL peuvent réutiliser une logique, mais il faut maîtriser leurs contrats, droits et effets.",
      "concepts": [
        "CREATE VIEW et vues matérialisées",
        "Fonctions et procédures selon le moteur",
        "Responsabilités entre application et base"
      ],
      "sections": [
        {
          "title": "Vues pour stabiliser une lecture",
          "body": "Une vue nomme une requête et peut simplifier un contrat de lecture. Une vue ordinaire ne stocke généralement pas son résultat ; une vue matérialisée le conserve et nécessite une stratégie de rafraîchissement. Les droits effectifs et les options de sécurité dépendent du moteur.",
          "examples": [
            {
              "title": "Vues pour stabiliser une lecture",
              "language": "sql",
              "code": "CREATE VIEW paid_order_totals AS\nSELECT customer_id, SUM(total) AS total_paid\nFROM orders WHERE status = 'paid'\nGROUP BY customer_id;"
            }
          ]
        },
        {
          "title": "Fonctions côté base",
          "body": "Les fonctions peuvent être utiles pour exprimer des opérations proches des données et réduire les allers-retours. Elles doivent être testées, versionnées et documentées comme le reste du code. Évite de disperser la logique métier dans des triggers opaques que les développeurs ne pensent pas à inspecter.",
          "examples": [
            {
              "title": "Fonctions côté base",
              "language": "sql",
              "code": "CREATE FUNCTION add_tax(amount NUMERIC, rate NUMERIC)\nRETURNS NUMERIC\nLANGUAGE SQL\nIMMUTABLE\nAS $$ SELECT amount * (1 + rate) $$;"
            }
          ]
        },
        {
          "title": "Définir une frontière claire",
          "body": "La base garantit l’intégrité et la cohérence des données ; le service applicatif orchestre souvent les cas d’usage, les autorisations et les appels externes. Certaines règles peuvent légitimement exister dans les deux couches, mais chaque duplication doit avoir une raison et une stratégie de synchronisation.",
          "examples": [
            {
              "title": "Définir une frontière claire",
              "language": "sql",
              "code": "SELECT customer_id, total_paid\nFROM paid_order_totals\nWHERE total_paid > 1000;"
            }
          ]
        }
      ],
      "exercise": "Crée une vue de synthèse des commandes payées par client. Décris quand une vue matérialisée pourrait être justifiée et comment tu maintiendrais sa fraîcheur."
    },
    {
      "id": "indexation",
      "title": "20. Index et stratégies d’accès",
      "summary": "Les index accélèrent certains accès mais consomment de la mémoire et de l’espace disque, et ajoutent un coût aux écritures.",
      "concepts": [
        "Index B-tree et recherches sélectives",
        "Index composites et ordre des colonnes",
        "Index partiels et fonctionnels"
      ],
      "sections": [
        {
          "title": "Pourquoi créer un index ?",
          "body": "Un index aide le moteur à localiser des lignes sans parcourir systématiquement toute la table. Il n’est pas automatiquement utilisé : pour une petite table ou une requête qui retourne une grande part des lignes, un scan séquentiel peut être moins coûteux.",
          "examples": [
            {
              "title": "Pourquoi créer un index ?",
              "language": "sql",
              "code": "CREATE INDEX idx_orders_customer_created\nON orders (customer_id, created_at DESC);"
            }
          ]
        },
        {
          "title": "Ordre des colonnes",
          "body": "Un index composite est organisé selon l’ordre de ses colonnes. Un index `(customer_id, created_at)` est particulièrement utile pour rechercher par customer_id puis trier ou filtrer par date ; il n’est pas équivalent à un index commençant par created_at. Choisis l’ordre à partir des requêtes réelles.",
          "examples": [
            {
              "title": "Ordre des colonnes",
              "language": "sql",
              "code": "SELECT id, created_at\nFROM orders\nWHERE customer_id = 7\nORDER BY created_at DESC\nLIMIT 20;"
            }
          ]
        },
        {
          "title": "Index partiels et coût de maintenance",
          "body": "Un index partiel ne couvre que les lignes qui satisfont un prédicat, par exemple les tâches ouvertes. Il peut réduire taille et coût lorsque la requête correspond exactement à ce prédicat. Trop d’index ralentissent INSERT, UPDATE et DELETE ; mesure avant de conserver un index.",
          "examples": [
            {
              "title": "Index partiels et coût de maintenance",
              "language": "sql",
              "code": "CREATE INDEX idx_open_tasks_due\nON tasks (due_at)\nWHERE status = 'open';"
            }
          ]
        }
      ],
      "exercise": "À partir de trois requêtes représentatives d’une API, propose des index. Pour chacun, indique la requête ciblée, l’ordre des colonnes et le coût potentiel sur les écritures."
    },
    {
      "id": "plans-performance",
      "title": "21. Lire EXPLAIN et diagnostiquer une requête lente",
      "summary": "L’optimisation commence par une mesure et un plan d’exécution, pas par l’ajout systématique d’index.",
      "concepts": [
        "EXPLAIN et EXPLAIN ANALYZE",
        "Lignes estimées et lignes réelles",
        "N+1, cardinalité et requêtes coûteuses"
      ],
      "sections": [
        {
          "title": "Lire le plan",
          "body": "EXPLAIN affiche la stratégie estimée du moteur. Dans PostgreSQL, EXPLAIN ANALYZE exécute réellement la requête et fournit des mesures ; il faut donc prendre des précautions si la requête modifie des données ou coûte cher. Compare les estimations de lignes aux résultats réels et repère les opérations dominantes.",
          "examples": [
            {
              "title": "Lire le plan",
              "language": "sql",
              "code": "EXPLAIN\nSELECT id, total FROM orders\nWHERE customer_id = 7\nORDER BY created_at DESC;"
            }
          ]
        },
        {
          "title": "Éviter les transformations inutiles",
          "body": "Appliquer une fonction à la colonne filtrée ou convertir le type dans la condition peut empêcher l’utilisation d’un index ordinaire. Préfère des plages compatibles avec le type de la colonne ou crée un index d’expression lorsque la requête et le moteur le justifient.",
          "examples": [
            {
              "title": "Éviter les transformations inutiles",
              "language": "sql",
              "code": "-- Préférable à DATE(created_at) = DATE '2026-10-14'\nSELECT id FROM orders\nWHERE created_at >= TIMESTAMP '2026-10-14 00:00:00'\n  AND created_at <  TIMESTAMP '2026-10-15 00:00:00';"
            }
          ]
        },
        {
          "title": "Le problème N+1",
          "body": "Une application peut exécuter une requête pour la liste puis une requête par élément pour charger les détails. Le total augmente avec le nombre d’éléments. Une jointure, une requête groupée ou un chargement par lots peut réduire les allers-retours, à condition de préserver la cardinalité et de ne pas charger trop de données.",
          "examples": [
            {
              "title": "Le problème N+1",
              "language": "sql",
              "code": "SELECT o.id, o.created_at, c.name\nFROM orders o\nJOIN customers c ON c.id = o.customer_id\nWHERE o.customer_id = 7\nORDER BY o.created_at DESC;"
            }
          ]
        }
      ],
      "exercise": "Analyse une requête lente avec EXPLAIN. Décris le plan initial, formule une hypothèse, change un seul élément puis compare les plans et les temps sur un jeu de données représentatif."
    },
    {
      "id": "securite-droits",
      "title": "22. Sécurité SQL et permissions",
      "summary": "La sécurité repose sur des requêtes paramétrées, le moindre privilège et une séparation claire entre données et instructions SQL.",
      "concepts": [
        "Injection SQL et paramètres liés",
        "Rôles, GRANT et moindre privilège",
        "Données sensibles, vues et audit"
      ],
      "sections": [
        {
          "title": "Paramétrer les valeurs",
          "body": "Ne concatène pas une entrée utilisateur dans une chaîne SQL. Utilise les paramètres du pilote ; ils séparent la valeur de la syntaxe et empêchent qu’un texte soit interprété comme une instruction. Les paramètres ne remplacent pas une validation métier et ne servent généralement pas à remplacer un nom de table ou de colonne.",
          "examples": [
            {
              "title": "Paramétrer les valeurs",
              "language": "sql",
              "code": "-- Exemple PostgreSQL avec paramètres côté pilote :\nSELECT id, name FROM users WHERE email = $1;"
            }
          ]
        },
        {
          "title": "Limiter les privilèges",
          "body": "Le compte applicatif ne devrait pas être superuser ou propriétaire de toutes les ressources. Accorde uniquement les opérations nécessaires sur les schémas et tables concernés. Sépare les rôles de migration, d’administration et d’exécution applicative, puis teste les droits effectifs.",
          "examples": [
            {
              "title": "Limiter les privilèges",
              "language": "sql",
              "code": "GRANT CONNECT ON DATABASE appdb TO app_runtime;\nGRANT USAGE ON SCHEMA public TO app_runtime;\nGRANT SELECT, INSERT, UPDATE ON TABLE orders TO app_runtime;"
            }
          ]
        },
        {
          "title": "Ne pas exposer les données",
          "body": "Les erreurs SQL peuvent révéler noms de tables, requêtes et détails internes. Retourne des messages génériques aux clients et conserve des logs contrôlés. Limite les données sélectionnées et les droits de lecture, notamment pour les mots de passe, jetons et informations personnelles.",
          "examples": [
            {
              "title": "Ne pas exposer les données",
              "language": "sql",
              "code": "-- Ne sélectionner que les champs nécessaires à l’API\nSELECT id, display_name FROM users WHERE id = $1;"
            }
          ]
        }
      ],
      "exercise": "Repère une requête vulnérable à l’injection dans un exemple de code, réécris-la avec des paramètres et propose un rôle SQL limité aux opérations nécessaires."
    },
    {
      "id": "migrations-sauvegardes",
      "title": "23. Migrations, sauvegardes et exploitation",
      "summary": "Un schéma évolue avec l’application ; les changements doivent être versionnés, observables et récupérables.",
      "concepts": [
        "Migrations versionnées",
        "Évolution progressive des colonnes et contraintes",
        "Sauvegarde, restauration et vérification"
      ],
      "sections": [
        {
          "title": "Versionner les changements",
          "body": "Une migration est un changement versionné du schéma ou des données. Elle doit être répétable dans les environnements prévus, relue et testée sur une copie représentative. Un retour arrière n’est pas toujours possible après une migration destructive : prépare plutôt une stratégie explicite de compatibilité et de restauration.",
          "examples": [
            {
              "title": "Versionner les changements",
              "language": "sql",
              "code": "-- Migration additive initiale\nALTER TABLE customers ADD COLUMN preferred_language TEXT;"
            }
          ]
        },
        {
          "title": "Déployer sans casser les versions en cours",
          "body": "Pour une colonne obligatoire sur une grande table, une séquence plus sûre peut être : ajouter la colonne nullable, déployer le code qui la renseigne, remplir progressivement les anciennes lignes, vérifier, puis ajouter la contrainte. La stratégie exacte dépend du moteur et du volume.",
          "examples": [
            {
              "title": "Déployer sans casser les versions en cours",
              "language": "sql",
              "code": "UPDATE customers\nSET preferred_language = 'fr'\nWHERE preferred_language IS NULL;\n-- Vérifier le nombre de lignes avant d’ajouter NOT NULL."
            }
          ]
        },
        {
          "title": "Sauvegardes et restauration",
          "body": "Une sauvegarde n’est utile que si elle peut être restaurée dans les délais requis. Définis la rétention, les droits d’accès, le chiffrement et les objectifs RPO/RTO. Teste périodiquement la restauration, les extensions nécessaires et la cohérence applicative après récupération. Ces commandes se lancent dans un terminal, pas dans un éditeur SQL.",
          "examples": [
            {
              "title": "Sauvegardes et restauration",
              "language": "bash",
              "code": "# PostgreSQL : commandes indicatives à lancer dans le terminal\npg_dump --format=custom appdb > appdb.dump\npg_restore --list appdb.dump"
            }
          ]
        }
      ],
      "exercise": "Prépare une migration qui rend un champ obligatoire sur une table déjà remplie. Décris les étapes de déploiement, les contrôles avant contrainte et la procédure de restauration."
    },
    {
      "id": "sql-app-integration",
      "title": "24. SQL depuis une application",
      "summary": "Le code applicatif doit contrôler les paramètres, la durée des requêtes, la gestion des transactions et la taille des résultats.",
      "concepts": [
        "Requêtes paramétrées dans un pilote",
        "Pool de connexions et limites de concurrence",
        "Transactions applicatives et mapping des erreurs"
      ],
      "sections": [
        {
          "title": "Requêtes paramétrées côté Node.js",
          "body": "Les placeholders varient selon le pilote. Avec `pg`, `$1`, `$2` sont des paramètres de valeurs ; avec d’autres pilotes, la syntaxe peut être `?` ou nommée. Ne suppose pas que les valeurs peuvent remplacer les noms de colonnes. Pour un tri dynamique, mappe le choix utilisateur vers une liste blanche d’identifiants SQL connus.",
          "examples": [
            {
              "title": "Requêtes paramétrées côté Node.js",
              "language": "javascript",
              "code": "// Exemple Node.js avec le pilote pg\nconst result = await pool.query(\n  'SELECT id, name FROM customers WHERE id = $1',\n  [customerId]\n);"
            }
          ]
        },
        {
          "title": "Pool, timeout et résultats bornés",
          "body": "Un pool évite de créer une connexion pour chaque requête HTTP, mais sa taille doit rester cohérente avec les limites du serveur et le nombre d’instances applicatives. Fixe des timeouts, limite les résultats et libère toujours les clients empruntés au pool, notamment après une transaction. Le code ci-dessous illustre le cycle de vie du client avec le pilote `pg` ; adapte la gestion des erreurs de rollback pour préserver l’erreur initiale.",
          "examples": [
            {
              "title": "Pool, timeout et résultats bornés",
              "language": "javascript",
              "code": "const client = await pool.connect();\ntry {\n  await client.query('BEGIN');\n  // Toutes les requêtes de cette transaction utilisent ce client.\n  // Vérifie les résultats métier avant COMMIT.\n  await client.query('COMMIT');\n} catch (error) {\n  try {\n    await client.query('ROLLBACK');\n  } catch (rollbackError) {\n    // Consigne l'erreur de rollback sans masquer l'erreur initiale.\n    console.error('Échec du ROLLBACK', rollbackError);\n  }\n  throw error;\n} finally {\n  client.release();\n}"
            }
          ]
        },
        {
          "title": "Mapper les erreurs sans les masquer",
          "body": "Les contraintes uniques et étrangères peuvent être traduites en erreurs métier adaptées, mais les erreurs inconnues doivent rester visibles dans les logs. Ne renvoie pas les détails du moteur à l’utilisateur final. Une erreur de connexion ou un timeout n’implique pas toujours que la transaction a échoué avant tout effet ; les reprises doivent tenir compte de l’idempotence.",
          "examples": [
            {
              "title": "Mapper les erreurs sans les masquer",
              "language": "javascript",
              "code": "// Pseudocode d’adaptation d’erreur :\n// si code connu de contrainte unique -> conflit métier\n// si erreur inconnue -> log corrélé + erreur interne générique"
            }
          ]
        }
      ],
      "exercise": "Écris une fonction de repository qui recherche un utilisateur par e-mail avec un pilote SQL. Utilise des paramètres, un timeout raisonnable et une stratégie de gestion d’erreur sans divulguer les détails SQL."
    },
    {
      "id": "tests-qualite",
      "title": "25. Tester les requêtes et les invariants",
      "summary": "Les tests SQL doivent vérifier les résultats, les cas limites, les contraintes et les scénarios transactionnels sur un moteur compatible.",
      "concepts": [
        "Données de test reproductibles",
        "Tests d’intégration avec rollback ou base jetable",
        "Tests de concurrence et régressions de requêtes"
      ],
      "sections": [
        {
          "title": "Tester les résultats métier",
          "body": "Un test doit vérifier les lignes et valeurs attendues, pas seulement l’absence d’exception. Utilise des fixtures explicites et des données qui couvrent les cas normaux, absents, limites et doublons. Évite que les tests dépendent de l’ordre implicite des lignes.",
          "examples": [
            {
              "title": "Tester les résultats métier",
              "language": "sql",
              "code": "SELECT id, status FROM orders WHERE id = 42;\n-- Le test doit vérifier le statut et l’identifiant attendus.\n-- Ajoute ORDER BY si plusieurs lignes sont comparées."
            }
          ]
        },
        {
          "title": "Isoler les tests",
          "body": "Une base de test dédiée ou un schéma jetable empêche les tests de modifier des données réelles. Les transactions avec rollback peuvent être utiles, mais certains outils ou comportements asynchrones peuvent sortir de cette transaction. Les migrations doivent aussi être testées depuis une base vide et depuis une version précédente.",
          "examples": [
            {
              "title": "Isoler les tests",
              "language": "sql",
              "code": "BEGIN;\nINSERT INTO customers (name) VALUES ('Test') RETURNING id;\nROLLBACK;"
            }
          ]
        },
        {
          "title": "Tester les courses",
          "body": "Les tests de concurrence doivent lancer des opérations qui se chevauchent et vérifier l’invariant final, par exemple une seule réservation pour un siège. Les tests purement séquentiels ne révèlent pas les courses. Répète les scénarios sensibles et vérifie les contraintes directement dans la base.",
          "examples": [
            {
              "title": "Tester les courses",
              "language": "sql",
              "code": "-- L’invariant doit être garanti par la base :\nALTER TABLE reservations\nADD CONSTRAINT one_reservation_per_slot\nUNIQUE (event_id, seat_id);"
            }
          ]
        }
      ],
      "exercise": "Écris une suite de tests qui couvre une insertion valide, un doublon interdit, une clé étrangère inexistante et deux tentatives concurrentes de réserver la même place."
    },
    {
      "id": "projet-synthese",
      "title": "26. Projet final : service de réservation",
      "summary": "Assembler la modélisation, les requêtes, les transactions et les pratiques d’exploitation dans un cas réaliste.",
      "concepts": [
        "Schéma relationnel complet",
        "Requêtes de lecture et d’écriture",
        "Concurrence, tests et observabilité"
      ],
      "sections": [
        {
          "title": "Définir le modèle",
          "body": "Le service gère utilisateurs, événements, sièges et réservations. Définis les clés, relations, types et contraintes avant de coder les routes. La base doit empêcher les doubles réservations même si deux requêtes arrivent simultanément.",
          "examples": [
            {
              "title": "Définir le modèle",
              "language": "sql",
              "code": "-- Prérequis : seats possède event_id et une clé unique sur (event_id, id).\nALTER TABLE seats ADD CONSTRAINT seats_event_id_id_unique UNIQUE (event_id, id);\n\nCREATE TABLE reservations (\n  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  event_id BIGINT NOT NULL,\n  seat_id BIGINT NOT NULL,\n  user_id BIGINT NOT NULL REFERENCES users(id),\n  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (event_id, seat_id) REFERENCES seats(event_id, id),\n  UNIQUE (event_id, seat_id)\n);"
            }
          ]
        },
        {
          "title": "Implémenter les cas d’usage",
          "body": "Prévois la liste des places disponibles, les détails d’un événement, la réservation et l’annulation. Les requêtes doivent utiliser des paramètres, retourner seulement les champs nécessaires et traiter proprement les conflits d’unicité. Les opérations liées doivent partager une transaction lorsqu’elles forment un invariant unique.",
          "examples": [
            {
              "title": "Implémenter les cas d’usage",
              "language": "sql",
              "code": "SELECT s.id, s.label\nFROM seats s\nWHERE s.event_id = $1\n  AND NOT EXISTS (\n    SELECT 1 FROM reservations r\n    WHERE r.event_id = s.event_id AND r.seat_id = s.id\n  )\nORDER BY s.label;"
            }
          ]
        },
        {
          "title": "Livrer et exploiter",
          "body": "Ajoute les migrations, les tests d’intégration, les index justifiés, les droits minimaux et une procédure de sauvegarde. Documente la configuration, les limites connues et les commandes nécessaires pour créer une base de test. Vérifie les plans de requêtes avant d’optimiser.",
          "examples": [
            {
              "title": "Livrer et exploiter",
              "language": "sql",
              "code": "EXPLAIN\nSELECT id, seat_id FROM reservations\nWHERE event_id = 42;"
            }
          ]
        }
      ],
      "exercise": "Livrable final : schéma versionné, scripts de données de démonstration, requêtes documentées, tests automatisés, contrôle de concurrence, index justifiés et procédure de restauration."
    }
  ],
  "references": [
    {
      "title": "PostgreSQL — Documentation officielle",
      "url": "https://www.postgresql.org/docs/current/"
    },
    {
      "title": "PostgreSQL — SQL Commands",
      "url": "https://www.postgresql.org/docs/current/sql-commands.html"
    },
    {
      "title": "PostgreSQL — Transactions",
      "url": "https://www.postgresql.org/docs/current/tutorial-transactions.html"
    },
    {
      "title": "PostgreSQL — Indexes",
      "url": "https://www.postgresql.org/docs/current/indexes.html"
    },
    {
      "title": "PostgreSQL — EXPLAIN",
      "url": "https://www.postgresql.org/docs/current/using-explain.html"
    },
    {
      "title": "PostgreSQL — Concurrency Control",
      "url": "https://www.postgresql.org/docs/current/mvcc.html"
    },
    {
      "title": "PostgreSQL — Constraints",
      "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
    },
    {
      "title": "PostgreSQL — Data Types",
      "url": "https://www.postgresql.org/docs/current/datatype.html"
    },
    {
      "title": "PostgreSQL — Authentication and Roles",
      "url": "https://www.postgresql.org/docs/current/user-manag.html"
    },
    {
      "title": "OWASP — SQL Injection Prevention Cheat Sheet",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
    },
    {
      "title": "SQLite — SQL Language",
      "url": "https://www.sqlite.org/lang.html"
    },
    {
      "title": "MySQL — Reference Manual",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/"
    },
    {
      "title": "Use The Index, Luke!",
      "url": "https://use-the-index-luke.com/"
    },
    {
      "title": "MDN — SQL concepts",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary/SQL"
    }
  ],
  "finalProject": {
    "title": "Service de réservation robuste",
    "description": "Conçois le schéma relationnel d’un service de réservation d’événements et de sièges, implémente les requêtes de lecture et d’écriture, protège les invariants sous concurrence et prépare l’exploitation en production. Les exemples d’implémentation sont basés sur PostgreSQL.",
    "criteria": [
      "Schéma relationnel documenté avec clés primaires, clés étrangères et contraintes métier.",
      "Requêtes SELECT, jointures, agrégats et sous-requêtes testés sur des données de démonstration.",
      "Écritures paramétrées et protections contre l’injection SQL.",
      "Transaction de réservation correcte sous concurrence et contrainte empêchant les doublons.",
      "Index justifiés par des requêtes représentatives et des plans EXPLAIN.",
      "Migrations versionnées, droits minimaux, sauvegarde et restauration documentées.",
      "Tests reproductibles couvrant les erreurs, les valeurs absentes et les courses concurrentes."
    ]
  }
};
