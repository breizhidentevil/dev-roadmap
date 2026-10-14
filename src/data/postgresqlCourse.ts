import type { Course } from './types';

/** Cours approfondi PostgreSQL : moteur, concurrence, performance et exploitation. */
export const postgresqlCourse: Course = {
  "id": "postgresql",
  "title": "PostgreSQL",
  "category": "Base de données",
  "tags": [
    "postgresql",
    "sql",
    "mvcc",
    "transactions",
    "index",
    "explain",
    "wal",
    "vacuum",
    "replication",
    "sécurité",
    "nodejs",
    "production"
  ],
  "description": "Formation approfondie dédiée au moteur PostgreSQL : architecture, types, fonctions, JSONB, transactions et MVCC, WAL, vacuum, index, plans d’exécution, réplication, sauvegardes, sécurité, migrations, observabilité et intégration Node.js/TypeScript.",
  "level": "Débutant à avancé",
  "duration": "40 à 60 heures avec ateliers, exercices et projet final",
  "prerequisites": [
    "Avoir suivi le cours SQL ou connaître SELECT, jointures, agrégats, contraintes et transactions.",
    "Un terminal et des notions de développement backend sont utiles pour les modules d’intégration, mais les premières parties sont accessibles sans Node.js."
  ],
  "objectives": [
    "Installer et inspecter un environnement PostgreSQL reproductible.",
    "Choisir des types, contraintes, fonctions et schémas cohérents.",
    "Comprendre MVCC, isolation, verrous, WAL et vacuum.",
    "Concevoir des index et interpréter EXPLAIN ANALYZE à partir de mesures.",
    "Sécuriser les rôles, RLS, migrations et accès applicatifs.",
    "Préparer sauvegardes, restauration PITR, réplication et observabilité.",
    "Intégrer PostgreSQL dans Node.js/TypeScript avec pool, paramètres et transactions sûres."
  ],
  "modules": [
    {
      "id": "architecture",
      "title": "1. Architecture PostgreSQL",
      "summary": "PostgreSQL est un serveur relationnel composé de processus, de mémoire partagée, de fichiers de données et de catalogues système. Comprendre ces composants facilite le diagnostic.",
      "concepts": [
        "Cluster, instance, bases et schémas",
        "Processus serveur, connexions et mémoire partagée",
        "Catalogues système et cycle d’une requête"
      ],
      "exercise": "Dessine le chemin d’une requête depuis psql jusqu’au stockage, puis identifie une vue système pour observer les sessions.",
      "sections": [
        {
          "title": "Cluster, instance et base",
          "body": "Dans PostgreSQL, le terme cluster désigne un ensemble de bases gérées par un même serveur et un même répertoire de données. Chaque base contient des schémas ; un schéma organise les objets et n’est pas une base indépendante. Les rôles sont définis au niveau du cluster.",
          "examples": [
            {
              "title": "Cluster, instance et base",
              "language": "sql",
              "code": "SELECT current_database() AS base, current_user AS role, current_schema() AS schema;"
            }
          ]
        },
        {
          "title": "Processus et mémoire",
          "body": "PostgreSQL utilise une architecture multi-processus. Un processus backend sert une connexion ; des processus auxiliaires gèrent notamment checkpoints, WAL et maintenance. `shared_buffers` est un cache partagé, tandis que certaines allocations sont propres à une session ou à une opération.",
          "examples": [
            {
              "title": "Processus et mémoire",
              "language": "text",
              "code": "Client psql → backend → parse/analyse → planificateur → exécution → buffers/WAL → résultat au client."
            }
          ]
        },
        {
          "title": "Catalogues système",
          "body": "Les métadonnées sont interrogeables : `pg_class` décrit de nombreuses relations, `pg_namespace` les schémas et `pg_stat_activity` les sessions actives. Préfère les vues documentées aux modifications directes des catalogues.",
          "examples": [
            {
              "title": "Catalogues système",
              "language": "sql",
              "code": "SELECT n.nspname AS schema_name, c.relname AS object_name, c.relkind\nFROM pg_class c\nJOIN pg_namespace n ON n.oid = c.relnamespace\nWHERE n.nspname NOT LIKE 'pg_%' AND n.nspname <> 'information_schema'\nORDER BY 1, 2 LIMIT 20;"
            }
          ]
        }
      ],
      "solution": "Utilise `pg_stat_activity` pour les sessions, `pg_class`/`pg_namespace` pour les objets et `current_database()` pour identifier la base. Le client se connecte à un backend ; le planificateur prépare un plan, l’exécuteur le réalise, et les buffers/WAL participent au stockage durable. Ne modifie jamais directement les catalogues système."
    },
    {
      "id": "environnement",
      "title": "2. Installer et utiliser les outils",
      "summary": "Un environnement reproductible combine une version connue du serveur, un client adapté, une configuration explicite et une procédure de remise à zéro.",
      "concepts": [
        "Installation locale ou Docker",
        "psql, pgAdmin et variables de connexion",
        "Configuration versionnée sans secrets"
      ],
      "exercise": "Crée une base locale de développement, connecte-toi avec psql, puis documente la commande de connexion sans enregistrer de mot de passe dans le dépôt.",
      "sections": [
        {
          "title": "Connexion avec psql",
          "body": "`psql` est le client en ligne de commande. Les options `-h`, `-p`, `-U` et `-d` rendent la cible explicite. Évite de placer un mot de passe en clair dans l’historique du shell ; utilise un mécanisme adapté à ton environnement.",
          "examples": [
            {
              "title": "Connexion avec psql",
              "language": "bash",
              "code": "psql -h localhost -p 5432 -U app_dev -d app_db"
            }
          ]
        },
        {
          "title": "Inspecter une session",
          "body": "Les méta-commandes psql commencent par une barre oblique inverse et ne sont pas du SQL serveur. Elles accélèrent l’exploration du schéma et des connexions.",
          "examples": [
            {
              "title": "Inspecter une session",
              "language": "text",
              "code": "\\conninfo\n\\l\n\\dn\n\\dt public.*\n\\du"
            }
          ]
        },
        {
          "title": "Environnement reproductible",
          "body": "Fixe la version majeure de PostgreSQL utilisée par les développeurs et la CI. Les fichiers de configuration et les scripts d’initialisation peuvent être versionnés ; les mots de passe et les données personnelles ne doivent pas l’être.",
          "examples": [
            {
              "title": "Environnement reproductible",
              "language": "yaml",
              "code": "services:\n  db:\n    image: postgres:17\n    environment:\n      POSTGRES_DB: app_db\n      POSTGRES_USER: app_dev\n      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\nvolumes:\n  pgdata:"
            }
          ]
        }
      ],
      "solution": "Exemple : `psql -h localhost -p 5432 -U app_dev -d app_db`, puis `\\conninfo`, `\\dn` et `\\dt`. Versionne le fichier Compose et le schéma, mais pas de secret réel. Fournis `POSTGRES_PASSWORD` par l’environnement ou un gestionnaire de secrets ; la variable doit être définie avant `docker compose up`."
    },
    {
      "id": "types",
      "title": "3. Types, valeurs et identifiants",
      "summary": "Les types PostgreSQL définissent la représentation et les opérations autorisées. Un type précis réduit les ambiguïtés, mais doit correspondre aux règles métier et aux limites de précision.",
      "concepts": [
        "Numériques exacts et flottants",
        "Dates, fuseaux horaires, UUID et identity",
        "Casts, domaines, enums et tableaux"
      ],
      "exercise": "Choisis un type pour prix, quantité, instant de paiement, date de naissance et identifiant public. Justifie chaque choix et précise une limite connue.",
      "sections": [
        {
          "title": "Numériques exacts",
          "body": "Utilise `numeric` pour les montants où l’exactitude décimale est importante. Les flottants représentent des approximations binaires. Définis précision et échelle lorsque les limites métier sont connues.",
          "examples": [
            {
              "title": "Numériques exacts",
              "language": "sql",
              "code": "CREATE TABLE invoice_lines (\n  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  quantity integer NOT NULL CHECK (quantity > 0),\n  unit_price numeric(12, 2) NOT NULL CHECK (unit_price >= 0)\n);"
            }
          ]
        },
        {
          "title": "Dates et fuseaux",
          "body": "`timestamptz` représente un instant et l’affiche selon le fuseau de session ; il ne conserve pas le nom du fuseau d’origine. `timestamp` est une date/heure sans fuseau. Utilise `date` pour une date civile sans heure.",
          "examples": [
            {
              "title": "Dates et fuseaux",
              "language": "sql",
              "code": "SELECT now() AS instant, current_date AS date_locale, now() AT TIME ZONE 'Europe/Paris' AS heure_paris;"
            }
          ]
        },
        {
          "title": "UUID et identité",
          "body": "`GENERATED ... AS IDENTITY` gère une valeur issue d’une séquence, sans rendre la colonne unique à lui seul : la clé primaire ou une contrainte `UNIQUE` reste nécessaire. Un UUID est utile comme identifiant distribué, mais il a un coût de stockage et d’index.",
          "examples": [
            {
              "title": "UUID et identité",
              "language": "sql",
              "code": "CREATE TABLE accounts (\n  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  public_id uuid NOT NULL UNIQUE DEFAULT gen_random_uuid(),\n  email text NOT NULL UNIQUE\n);"
            }
          ]
        }
      ],
      "solution": "Prix : `numeric(12,2)` si la règle métier est en centimes ; quantité : `integer` avec `CHECK (quantity > 0)` ; instant de paiement : `timestamptz` ; anniversaire : `date` ; identifiant interne : `bigint GENERATED ... AS IDENTITY`, éventuellement complété d’un UUID public. Une identité ne remplace pas une clé primaire/contrainte unique."
    },
    {
      "id": "contraintes",
      "title": "4. Schémas et contraintes d’intégrité",
      "summary": "Les contraintes expriment dans la base les invariants qui doivent rester vrais même si plusieurs services écrivent simultanément.",
      "concepts": [
        "PRIMARY KEY, FOREIGN KEY et UNIQUE",
        "CHECK, NOT NULL et contraintes différables",
        "Schémas, search_path et noms qualifiés"
      ],
      "exercise": "Modélise des commandes et leurs lignes. Empêche les quantités négatives, les emails dupliqués et les lignes de commande orphelines.",
      "sections": [
        {
          "title": "Clés et références",
          "body": "Une clé étrangère protège l’intégrité référentielle. Choisis explicitement le comportement à la suppression : `RESTRICT`, `CASCADE`, `SET NULL` ou une stratégie métier. Les colonnes référencées doivent être uniques.",
          "examples": [
            {
              "title": "Clés et références",
              "language": "sql",
              "code": "CREATE TABLE customers (\n  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  email text NOT NULL UNIQUE\n);\nCREATE TABLE orders (\n  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  customer_id bigint NOT NULL REFERENCES customers(id) ON DELETE RESTRICT\n);"
            }
          ]
        },
        {
          "title": "CHECK et NULL",
          "body": "Une contrainte `CHECK` échoue si son expression vaut FALSE, mais une expression UNKNOWN due à NULL est acceptée. Ajoute `NOT NULL` quand l’absence de valeur est interdite ; ne compte pas sur CHECK seul pour rejeter NULL.",
          "examples": [
            {
              "title": "CHECK et NULL",
              "language": "sql",
              "code": "CREATE TABLE products (\n  sku text PRIMARY KEY,\n  price numeric(10,2) NOT NULL CHECK (price >= 0),\n  stock integer NOT NULL CHECK (stock >= 0)\n);"
            }
          ]
        },
        {
          "title": "Schémas et search_path",
          "body": "Les schémas organisent les objets et contrôlent les espaces de noms. Un `search_path` trop permissif peut exposer à des objets malveillants ou inattendus ; qualifie les objets sensibles et limite CREATE sur les schémas partagés.",
          "examples": [
            {
              "title": "Schémas et search_path",
              "language": "sql",
              "code": "CREATE SCHEMA app;\nCREATE TABLE app.audit_log (id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY, message text NOT NULL);\nSELECT * FROM app.audit_log;"
            }
          ]
        }
      ],
      "solution": "Définis `customers(id PRIMARY KEY, email UNIQUE NOT NULL)`, `orders(id PRIMARY KEY, customer_id REFERENCES customers(id))` et `order_items(order_id REFERENCES orders(id), quantity CHECK (quantity > 0))`. Si une ligne doit être unique par commande et produit, ajoute `UNIQUE(order_id, product_id)`. Ajoute `NOT NULL` indépendamment de `CHECK` quand NULL est interdit."
    },
    {
      "id": "sql-specifique",
      "title": "5. SQL PostgreSQL spécifique et écritures fiables",
      "summary": "PostgreSQL ajoute des fonctionnalités pratiques pour récupérer les lignes modifiées, gérer les conflits et écrire des opérations atomiques.",
      "concepts": [
        "RETURNING et upsert ON CONFLICT",
        "DISTINCT ON et FILTER",
        "Écritures conditionnelles et nombre de lignes"
      ],
      "exercise": "Écris un upsert pour un inventaire, puis explique comment savoir si la requête a effectivement modifié une ligne.",
      "sections": [
        {
          "title": "RETURNING",
          "body": "`RETURNING` récupère les valeurs résultant d’un INSERT, UPDATE ou DELETE sans requête supplémentaire. C’est utile pour obtenir une clé générée et limiter les courses entre écriture et lecture.",
          "examples": [
            {
              "title": "RETURNING",
              "language": "sql",
              "code": "INSERT INTO customers(email) VALUES ('lea@example.test')\nRETURNING id, email;"
            }
          ]
        },
        {
          "title": "Upsert avec ON CONFLICT",
          "body": "Une contrainte unique doit définir le conflit métier. `ON CONFLICT` permet de choisir explicitement de ne rien faire ou de mettre à jour les colonnes ; évite les lectures préalables utilisées comme garantie d’unicité.",
          "examples": [
            {
              "title": "Upsert avec ON CONFLICT",
              "language": "sql",
              "code": "INSERT INTO inventory(sku, quantity) VALUES ('KB-01', 5)\nON CONFLICT (sku) DO UPDATE\nSET quantity = inventory.quantity + EXCLUDED.quantity\nRETURNING sku, quantity;"
            }
          ]
        },
        {
          "title": "DISTINCT ON et FILTER",
          "body": "`DISTINCT ON` est une extension PostgreSQL qui sélectionne la première ligne de chaque groupe selon l’ordre indiqué. `FILTER` permet plusieurs agrégats conditionnels dans une même requête.",
          "examples": [
            {
              "title": "DISTINCT ON et FILTER",
              "language": "sql",
              "code": "SELECT DISTINCT ON (customer_id) customer_id, id, created_at\nFROM orders ORDER BY customer_id, created_at DESC, id DESC;\n\nSELECT count(*) FILTER (WHERE status = 'paid') AS paid,\n       count(*) FILTER (WHERE status = 'pending') AS pending\nFROM orders;"
            }
          ]
        }
      ],
      "solution": "Pour créer ou actualiser un inventaire, ajoute une contrainte unique sur `sku`, puis utilise `INSERT ... ON CONFLICT (sku) DO UPDATE SET quantity = inventory.quantity + EXCLUDED.quantity RETURNING sku, quantity`. La mise à jour est atomique au niveau de la ligne. Le nombre de lignes retournées indique les lignes affectées ; `DO NOTHING` peut ne rien retourner."
    },
    {
      "id": "jointures-cte",
      "title": "6. Jointures, CTE et requêtes récursives",
      "summary": "Les jointures et CTE rendent les requêtes composables. La lisibilité ne garantit pas automatiquement la rapidité : inspecte les plans quand les volumes deviennent significatifs.",
      "concepts": [
        "Jointures et cardinalité",
        "WITH, CTE matérialisées ou repliées",
        "CTE récursives et prévention des cycles"
      ],
      "exercise": "Écris une requête qui affiche chaque catégorie et son nombre de produits, y compris les catégories vides. Puis construis une hiérarchie parent-enfant avec une CTE récursive.",
      "sections": [
        {
          "title": "Préserver les lignes avec LEFT JOIN",
          "body": "Le placement d’un filtre dans ON ou WHERE peut changer les résultats d’une jointure externe. Un filtre sur la table optionnelle placé dans WHERE peut éliminer les lignes sans correspondance.",
          "examples": [
            {
              "title": "Préserver les lignes avec LEFT JOIN",
              "language": "sql",
              "code": "SELECT c.id, c.name, count(p.id) AS product_count\nFROM categories c\nLEFT JOIN products p ON p.category_id = c.id AND p.active\nGROUP BY c.id, c.name;"
            }
          ]
        },
        {
          "title": "CTE pour décomposer",
          "body": "Une CTE nomme une étape intermédiaire et améliore la lecture. Selon la version, la requête et les directives, PostgreSQL peut replier ou matérialiser la CTE ; ne suppose pas qu’elle est toujours une barrière d’optimisation.",
          "examples": [
            {
              "title": "CTE pour décomposer",
              "language": "sql",
              "code": "WITH monthly_sales AS (\n  SELECT date_trunc('month', created_at) AS month, sum(total) AS revenue\n  FROM orders WHERE status = 'paid' GROUP BY 1\n)\nSELECT month, revenue FROM monthly_sales ORDER BY month;"
            }
          ]
        },
        {
          "title": "CTE récursive",
          "body": "Une CTE récursive combine une partie initiale et une partie récursive. Sur des graphes ou hiérarchies, prévois une stratégie contre les cycles ou une profondeur maximale pour éviter une exploration sans fin.",
          "examples": [
            {
              "title": "CTE récursive",
              "language": "sql",
              "code": "WITH RECURSIVE tree AS (\n  SELECT id, parent_id, name, 0 AS depth FROM categories WHERE id = 1\n  UNION ALL\n  SELECT c.id, c.parent_id, c.name, t.depth + 1\n  FROM categories c JOIN tree t ON c.parent_id = t.id\n  WHERE t.depth < 20\n) SELECT * FROM tree ORDER BY depth, id;"
            }
          ]
        }
      ],
      "solution": "Le compte des catégories vides s’obtient avec `LEFT JOIN` et `count(p.id)`, pas `count(*)` : `SELECT c.id, c.name, count(p.id) FROM categories c LEFT JOIN products p ON p.category_id = c.id GROUP BY c.id, c.name`. Pour une hiérarchie, une CTE `WITH RECURSIVE` suit `parent_id`; ajoute une protection contre les cycles ou une profondeur maximale."
    },
    {
      "id": "fonctions-plpgsql",
      "title": "7. Fonctions, procédures et PL/pgSQL",
      "summary": "La logique côté base peut centraliser des invariants, mais accroît le couplage et doit être testée et versionnée comme du code applicatif.",
      "concepts": [
        "Fonctions SQL et PL/pgSQL",
        "Paramètres, exceptions et valeurs de retour",
        "Procédures, triggers et effets de bord"
      ],
      "exercise": "Crée une fonction qui retourne le total d’une commande. Définis ses comportements si la commande n’existe pas et ajoute un test de ces cas.",
      "sections": [
        {
          "title": "Fonction SQL",
          "body": "Une fonction SQL convient lorsqu’un résultat peut être exprimé par une requête. Le type de retour fait partie du contrat. Pense aux permissions, au coût de chaque appel et aux règles d’exposition des fonctions.",
          "examples": [
            {
              "title": "Fonction SQL",
              "language": "sql",
              "code": "CREATE FUNCTION order_total(p_order_id bigint)\nRETURNS numeric\nLANGUAGE sql\nSTABLE\nAS $$\n  SELECT COALESCE(sum(quantity * unit_price), 0)\n  FROM order_items WHERE order_id = p_order_id;\n$$;"
            }
          ]
        },
        {
          "title": "PL/pgSQL et erreurs",
          "body": "PL/pgSQL permet les variables, branches, boucles et gestion d’exceptions. N’attrape pas toutes les erreurs pour les ignorer : conserve le contexte, distingue les erreurs métier et laisse remonter les erreurs inattendues.",
          "examples": [
            {
              "title": "PL/pgSQL et erreurs",
              "language": "sql",
              "code": "CREATE FUNCTION positive_or_zero(p_value integer)\nRETURNS integer LANGUAGE plpgsql IMMUTABLE AS $$\nBEGIN\n  IF p_value < 0 THEN\n    RAISE EXCEPTION 'value must be non-negative';\n  END IF;\n  RETURN p_value;\nEND; $$;"
            }
          ]
        },
        {
          "title": "Déclencheurs avec parcimonie",
          "body": "Les triggers s’exécutent implicitement et peuvent rendre le chemin d’écriture moins visible. Ils conviennent à certains besoins d’audit ou de cohérence locale, mais la logique métier centrale doit rester documentée et couverte par des tests.",
          "examples": [
            {
              "title": "Déclencheurs avec parcimonie",
              "language": "sql",
              "code": "CREATE FUNCTION touch_updated_at() RETURNS trigger\nLANGUAGE plpgsql AS $$\nBEGIN\n  NEW.updated_at := now();\n  RETURN NEW;\nEND; $$;\nCREATE TRIGGER products_touch_updated_at\nBEFORE UPDATE ON products FOR EACH ROW\nEXECUTE FUNCTION touch_updated_at();"
            }
          ]
        }
      ],
      "solution": "Une fonction minimale peut retourner `COALESCE(sum(quantity * unit_price), 0)` filtré par `order_id`. Décide explicitement si un identifiant inconnu retourne zéro ou doit lever une erreur : `sum` retourne NULL sans lignes, et `COALESCE` masque ce cas. Teste une commande existante, une commande vide et un identifiant inexistant."
    },
    {
      "id": "json-jsonb",
      "title": "8. JSON et JSONB",
      "summary": "JSONB stocke des données semi-structurées dans une représentation adaptée aux recherches. Il ne remplace pas les colonnes relationnelles pour les champs qui exigent relations, contraintes et requêtes fréquentes.",
      "concepts": [
        "Différences entre JSON et JSONB",
        "Opérateurs, fonctions et index GIN",
        "Frontière entre colonnes et documents"
      ],
      "exercise": "Stocke des préférences variables dans JSONB, puis ajoute une contrainte ou une colonne relationnelle pour un champ devenu critique et fréquemment filtré.",
      "sections": [
        {
          "title": "Opérateurs JSONB",
          "body": "`->` retourne une valeur JSON, tandis que `->>` extrait du texte. Valide les types avant conversion : un document JSON flexible ne dispense pas de contrôles de données.",
          "examples": [
            {
              "title": "Opérateurs JSONB",
              "language": "sql",
              "code": "SELECT profile->>'displayName' AS display_name,\n       (settings->>'newsletter')::boolean AS newsletter\nFROM users WHERE settings @> '{\"newsletter\": true}';"
            }
          ]
        },
        {
          "title": "Index GIN",
          "body": "Un index GIN peut accélérer certains opérateurs JSONB, mais augmente le coût des écritures et l’espace disque. Le choix de l’opérateur et de la classe d’index doit correspondre aux requêtes réellement exécutées.",
          "examples": [
            {
              "title": "Index GIN",
              "language": "sql",
              "code": "CREATE INDEX users_settings_gin ON users USING gin (settings jsonb_path_ops);\nEXPLAIN SELECT id FROM users WHERE settings @> '{\"theme\": \"dark\"}';"
            }
          ]
        },
        {
          "title": "JSONB ou colonnes",
          "body": "Utilise une colonne dédiée pour un champ fréquemment filtré, trié, joint ou soumis à une contrainte. JSONB est adapté aux attributs variables, mais une structure libre peut devenir un schéma implicite difficile à faire évoluer.",
          "examples": [
            {
              "title": "JSONB ou colonnes",
              "language": "sql",
              "code": "ALTER TABLE users ADD COLUMN locale text NOT NULL DEFAULT 'fr-FR';\nCREATE INDEX users_locale_idx ON users(locale);"
            }
          ]
        }
      ],
      "solution": "Stocke les préférences variables dans une colonne `jsonb`, mais ajoute une colonne typée dès qu’un champ est central pour les contraintes, les jointures ou le tri. Pour la recherche d’inclusion, `@>` correspond à `jsonb_path_ops`; si tu as besoin des opérateurs d’existence de clés (`?`), compare avec la classe GIN par défaut. Valide les types avant les casts."
    },
    {
      "id": "fenetres",
      "title": "9. Fenêtrage et analyse",
      "summary": "Les fonctions de fenêtrage calculent sur un ensemble de lignes sans les regrouper en une seule ligne par groupe. Elles sont utiles pour classements, cumuls et comparaison temporelle.",
      "concepts": [
        "OVER et PARTITION BY",
        "ROW_NUMBER, RANK et DENSE_RANK",
        "Frames, LAG et LEAD"
      ],
      "exercise": "Classe les commandes par client, calcule un cumul de ventes par mois et compare chaque mois au mois précédent.",
      "sections": [
        {
          "title": "Classement par partition",
          "body": "Le tri de la fenêtre détermine le rang à l’intérieur de chaque partition. Ajoute une clé de départage si le résultat doit être déterministe en cas d’égalité.",
          "examples": [
            {
              "title": "Classement par partition",
              "language": "sql",
              "code": "SELECT customer_id, id, total,\n       row_number() OVER (PARTITION BY customer_id ORDER BY total DESC, id) AS rank\nFROM orders;"
            }
          ]
        },
        {
          "title": "Cumul explicite",
          "body": "Une fenêtre avec ordre utilise un cadre qui peut inclure les lignes liées au même ordre. Précise `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` quand tu veux un cumul ligne par ligne prévisible.",
          "examples": [
            {
              "title": "Cumul explicite",
              "language": "sql",
              "code": "SELECT sold_at, amount,\n       sum(amount) OVER (ORDER BY sold_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total\nFROM sales;"
            }
          ]
        },
        {
          "title": "Comparer aux lignes voisines",
          "body": "`LAG` et `LEAD` accèdent à une ligne précédente ou suivante dans l’ordre de la fenêtre. Ils ne remplacent pas une règle de traitement des périodes manquantes ; les dates absentes doivent être traitées explicitement.",
          "examples": [
            {
              "title": "Comparer aux lignes voisines",
              "language": "sql",
              "code": "SELECT month, revenue,\n       lag(revenue) OVER (ORDER BY month) AS previous_revenue,\n       revenue - lag(revenue) OVER (ORDER BY month) AS change\nFROM monthly_revenue;"
            }
          ]
        }
      ],
      "solution": "Classe les commandes avec `row_number() OVER (PARTITION BY customer_id ORDER BY created_at DESC, id DESC)`. Pour le cumul mensuel, agrège d’abord par mois puis applique `sum(revenue) OVER (ORDER BY month ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)`. `lag(revenue)` compare à la ligne précédente présente ; génère une série de mois si les périodes absentes doivent apparaître."
    },
    {
      "id": "transactions",
      "title": "10. Transactions et propriétés ACID",
      "summary": "Une transaction regroupe plusieurs opérations dans une unité logique. Le code applicatif doit gérer les erreurs, le rollback et la durée de vie des connexions.",
      "concepts": [
        "BEGIN, COMMIT, ROLLBACK et SAVEPOINT",
        "Atomicité et durabilité",
        "Transactions courtes et gestion des erreurs"
      ],
      "exercise": "Écris un transfert entre deux comptes qui vérifie le solde, met à jour les deux comptes dans une transaction et annule toutes les écritures si une étape échoue.",
      "sections": [
        {
          "title": "Transaction explicite",
          "body": "Toutes les écritures qui doivent réussir ensemble appartiennent à la même transaction. Si une requête échoue, la transaction est en erreur jusqu’au rollback, sauf mécanisme de savepoint utilisé correctement.",
          "examples": [
            {
              "title": "Transaction explicite",
              "language": "sql",
              "code": "BEGIN;\nUPDATE accounts SET balance = balance - 25 WHERE id = 1 AND balance >= 25;\n-- Vérifier le nombre de lignes modifiées avant de continuer.\nUPDATE accounts SET balance = balance + 25 WHERE id = 2;\nCOMMIT;"
            }
          ]
        },
        {
          "title": "Savepoints",
          "body": "Un savepoint permet d’annuler une partie des opérations tout en conservant la transaction, lorsque le flux métier le justifie. Il ne remplace pas une transaction correctement découpée et ne rend pas atomiques des effets externes.",
          "examples": [
            {
              "title": "Savepoints",
              "language": "sql",
              "code": "BEGIN;\nUPDATE inventory SET quantity = quantity - 1 WHERE sku = 'A';\nSAVEPOINT optional_step;\n-- étape facultative\nROLLBACK TO SAVEPOINT optional_step;\nCOMMIT;"
            }
          ]
        },
        {
          "title": "Effets externes",
          "body": "Une transaction SQL ne peut pas annuler un email, un appel HTTP ou une publication déjà effectuée. Pour relier la base à un système externe, considère un outbox transactionnel, des clés d’idempotence et des retries contrôlés.",
          "examples": [
            {
              "title": "Effets externes",
              "language": "text",
              "code": "Écriture métier + événement outbox dans une même transaction → commit → worker publie l’événement → consommateur déduplique par event_id."
            }
          ]
        }
      ],
      "solution": "Verrouille ou mets à jour conditionnellement le compte source et vérifie qu’exactement une ligne a été débitée avant de créditer la destination. Par exemple `UPDATE accounts SET balance = balance - $1 WHERE id = $2 AND balance >= $1 RETURNING id`; si aucune ligne n’est retournée, annule la transaction. Valide le montant positif et effectue les deux écritures dans la même transaction."
    },
    {
      "id": "mvcc",
      "title": "11. MVCC et visibilité des lignes",
      "summary": "PostgreSQL utilise MVCC pour donner aux requêtes un snapshot cohérent sans bloquer systématiquement les lecteurs sur les écrivains. Les versions anciennes doivent ensuite être nettoyées.",
      "concepts": [
        "Snapshots et visibilité des versions",
        "Transactions longues et tuples morts",
        "Lien entre MVCC, vacuum et stockage"
      ],
      "exercise": "Observe deux sessions concurrentes en READ COMMITTED, puis explique pourquoi une transaction longue peut retarder le nettoyage des anciennes versions.",
      "sections": [
        {
          "title": "Un snapshot par instruction",
          "body": "En READ COMMITTED, chaque instruction voit un snapshot au début de cette instruction. Deux SELECT dans la même transaction peuvent donc observer des états différents si une autre transaction valide des changements entre les deux.",
          "examples": [
            {
              "title": "Un snapshot par instruction",
              "language": "text",
              "code": "Session A : BEGIN; SELECT balance FROM accounts WHERE id=1;\nSession B : UPDATE accounts SET balance=balance-10 WHERE id=1; COMMIT;\nSession A : SELECT balance FROM accounts WHERE id=1;"
            }
          ]
        },
        {
          "title": "Versions de lignes",
          "body": "Une mise à jour produit généralement une nouvelle version de tuple. Les anciennes versions ne sont pas immédiatement réutilisables si une transaction active pourrait encore les voir. Cela explique le rôle essentiel du vacuum et la vigilance autour des transactions longues.",
          "examples": [
            {
              "title": "Versions de lignes",
              "language": "sql",
              "code": "SELECT pid, usename, state, xact_start, now() - xact_start AS transaction_age, query\nFROM pg_stat_activity\nWHERE xact_start IS NOT NULL ORDER BY xact_start;"
            }
          ]
        },
        {
          "title": "Conséquences opérationnelles",
          "body": "MVCC améliore la concurrence mais ne signifie pas « sans verrous » : les écritures, DDL et verrous explicites peuvent bloquer. Diagnostique les attentes avant de modifier les paramètres globaux.",
          "examples": [
            {
              "title": "Conséquences opérationnelles",
              "language": "sql",
              "code": "SELECT locktype, mode, granted, relation::regclass, pid\nFROM pg_locks ORDER BY granted, pid;"
            }
          ]
        }
      ],
      "solution": "Dans READ COMMITTED, le second SELECT de la session A peut voir la modification validée par B, car chaque instruction prend un nouveau snapshot. Une transaction longue peut conserver un ancien snapshot et retarder la récupération des tuples morts. Observe `xact_start` dans `pg_stat_activity` et ferme les transactions inutiles."
    },
    {
      "id": "isolation",
      "title": "12. Isolation et concurrence",
      "summary": "Les niveaux d’isolation définissent les anomalies observables, mais l’application doit toujours protéger ses invariants par contraintes et stratégies de concurrence adaptées.",
      "concepts": [
        "READ COMMITTED, REPEATABLE READ, SERIALIZABLE",
        "SELECT FOR UPDATE et verrous advisory",
        "Deadlocks, retries et contraintes uniques"
      ],
      "exercise": "Reproduis une course entre deux sessions qui réservent la dernière unité de stock, puis corrige-la par mise à jour conditionnelle ou verrouillage approprié.",
      "sections": [
        {
          "title": "Niveaux d’isolation",
          "body": "PostgreSQL fournit READ COMMITTED, REPEATABLE READ et SERIALIZABLE. SERIALIZABLE peut annuler une transaction pour préserver un résultat équivalent à un ordre séquentiel ; l’application doit alors retenter la transaction complète.",
          "examples": [
            {
              "title": "Niveaux d’isolation",
              "language": "sql",
              "code": "BEGIN ISOLATION LEVEL SERIALIZABLE;\nSELECT available FROM inventory WHERE sku = 'A';\nUPDATE inventory SET available = available - 1 WHERE sku = 'A' AND available > 0;\nCOMMIT;"
            }
          ]
        },
        {
          "title": "Verrouiller une ligne",
          "body": "`SELECT ... FOR UPDATE` verrouille les lignes sélectionnées jusqu’à la fin de la transaction. Il ne protège que les lignes réellement verrouillées et ne remplace pas les contraintes sur les invariants globaux.",
          "examples": [
            {
              "title": "Verrouiller une ligne",
              "language": "sql",
              "code": "BEGIN;\nSELECT available FROM inventory WHERE sku = 'A' FOR UPDATE;\nUPDATE inventory SET available = available - 1 WHERE sku = 'A' AND available > 0;\nCOMMIT;"
            }
          ]
        },
        {
          "title": "Deadlocks et reprise",
          "body": "Les deadlocks surviennent lorsque des transactions attendent circulairement des verrous. Prends les verrous dans un ordre stable et traite les erreurs de deadlock ou de sérialisation par retry borné avec jitter, en rejouant toute la transaction.",
          "examples": [
            {
              "title": "Deadlocks et reprise",
              "language": "text",
              "code": "Retry sûr : nombre de tentatives limité → pause exponentielle avec jitter → nouvelle transaction complète → métrique après épuisement."
            }
          ]
        }
      ],
      "solution": "La protection la plus simple pour un stock est `UPDATE inventory SET available = available - 1 WHERE sku = $1 AND available > 0 RETURNING available`; une ligne retournée signifie que l’unité a été réservée, zéro ligne signifie stock indisponible. Ajoute une contrainte `CHECK (available >= 0)`. Avec SERIALIZABLE, traite `40001` en retentant toute la transaction, avec un nombre de tentatives borné."
    },
    {
      "id": "wal",
      "title": "13. WAL, checkpoints et durabilité",
      "summary": "Le Write-Ahead Log permet de rejouer les modifications après un crash et soutient la réplication physique et la récupération à un instant donné.",
      "concepts": [
        "WAL et ordre d’écriture",
        "Checkpoints et récupération après crash",
        "Archivage et rétention des journaux"
      ],
      "exercise": "Explique comment une transaction validée est récupérée après un crash et liste les paramètres opérationnels qui conditionnent l’archivage WAL.",
      "sections": [
        {
          "title": "Principe WAL",
          "body": "Les informations de journal nécessaires sont écrites avant que les pages de données correspondantes soient considérées durables. Le commit dépend des garanties de synchronisation configurées et du comportement du stockage.",
          "examples": [
            {
              "title": "Principe WAL",
              "language": "text",
              "code": "Modification → entrée WAL → WAL durable selon la configuration → confirmation COMMIT → pages de données écrites ultérieurement."
            }
          ]
        },
        {
          "title": "Checkpoints",
          "body": "Un checkpoint marque un point de récupération et pousse des pages modifiées vers le stockage. Des checkpoints trop fréquents peuvent augmenter les pics d’écriture ; les retarder excessivement allonge la récupération et accroît la quantité de WAL nécessaire. À partir de PostgreSQL 17, les statistiques sont exposées par `pg_stat_checkpointer` avec les colonnes `num_timed`, `num_requested`, `num_done`, `write_time` et `sync_time`. `num_timed` et `num_requested` comptent aussi les checkpoints planifiés ou demandés qui ont été ignorés ; `num_done` compte ceux effectivement réalisés.",
          "examples": [
            {
              "title": "Checkpoints",
              "language": "sql",
              "code": "SELECT num_timed, num_requested, num_done, write_time, sync_time, buffers_written\nFROM pg_stat_checkpointer;"
            }
          ]
        },
        {
          "title": "Archivage WAL",
          "body": "L’archivage copie les segments WAL terminés vers un stockage de sauvegarde. Une archive doit être surveillée et testée ; une commande d’archivage qui échoue peut faire croître le répertoire WAL jusqu’à saturer le disque.",
          "examples": [
            {
              "title": "Archivage WAL",
              "language": "text",
              "code": "Surveiller : taux de réussite de l’archivage, âge du dernier WAL archivé, espace disque, rétention et exercice de restauration."
            }
          ]
        }
      ],
      "solution": "Le WAL est journalisé avant que les pages de données correspondantes soient écrites. Le commit durable dépend notamment de `synchronous_commit`, `fsync` et du stockage. Sur PostgreSQL 17+, `pg_stat_checkpointer` expose `num_timed`, `num_requested`, `num_done`, `write_time`, `sync_time` et `buffers_written` ; `num_done` permet de distinguer les checkpoints réellement effectués des événements planifiés ou demandés qui peuvent être ignorés. Sur les versions antérieures, les colonnes correspondantes se trouvent dans `pg_stat_bgwriter` sous d’autres noms. Surveille aussi l’archivage et l’espace disque."
    },
    {
      "id": "vacuum",
      "title": "14. VACUUM, autovacuum et maintenance",
      "summary": "Le vacuum rend l’espace des versions mortes réutilisable et protège contre certains problèmes liés aux identifiants de transaction. L’autovacuum doit être surveillé plutôt que désactivé par réflexe.",
      "concepts": [
        "VACUUM, ANALYZE et autovacuum",
        "Dead tuples, bloat et wraparound",
        "Transactions longues et tables très actives"
      ],
      "exercise": "Sur une base de test, mesure les statistiques d’une table avant et après une charge d’UPDATE/DELETE, puis explique le rôle d’autovacuum.",
      "sections": [
        {
          "title": "VACUUM et ANALYZE",
          "body": "VACUUM traite les versions mortes qui ne sont plus visibles ; ANALYZE collecte des statistiques pour le planificateur. `VACUUM FULL` réécrit la table et nécessite un verrou fort : ce n’est pas une commande de maintenance anodine.",
          "examples": [
            {
              "title": "VACUUM et ANALYZE",
              "language": "sql",
              "code": "VACUUM (ANALYZE) public.orders;"
            }
          ]
        },
        {
          "title": "Surveiller autovacuum",
          "body": "Les tables à fort débit peuvent nécessiter des réglages par table, mais commence par identifier la cause : longues transactions, seuils, volume de modifications ou I/O. Ne désactive pas autovacuum sans plan de remplacement.",
          "examples": [
            {
              "title": "Surveiller autovacuum",
              "language": "sql",
              "code": "SELECT relname, n_live_tup, n_dead_tup, last_autovacuum, last_autoanalyze\nFROM pg_stat_user_tables ORDER BY n_dead_tup DESC LIMIT 20;"
            }
          ]
        },
        {
          "title": "Prévenir le wraparound",
          "body": "Les identifiants de transaction ont une durée finie ; PostgreSQL doit figer les tuples avant qu’ils ne deviennent ambigus. Surveille les avertissements d’âge des transactions et laisse le mécanisme de protection agir.",
          "examples": [
            {
              "title": "Prévenir le wraparound",
              "language": "sql",
              "code": "SELECT datname, age(datfrozenxid) AS xid_age\nFROM pg_database ORDER BY xid_age DESC;"
            }
          ]
        }
      ],
      "solution": "Compare `n_dead_tup`, `last_autovacuum` et la croissance disque avant/après une charge de test. `VACUUM` rend l’espace des tuples morts réutilisable ; il ne réduit généralement pas le fichier au système d’exploitation. `VACUUM FULL` réécrit la table et prend un verrou fort. Recherche d’abord les transactions longues si le nettoyage stagne."
    },
    {
      "id": "index-types",
      "title": "15. Index : choisir la bonne structure",
      "summary": "Un index accélère certaines lectures mais coûte de l’espace et ralentit les écritures. Le bon choix se fait à partir de requêtes mesurées, pas d’une règle universelle.",
      "concepts": [
        "B-tree, Hash, GIN, GiST et BRIN",
        "Index composites et sélectivité",
        "Index partiels, d’expression et INCLUDE"
      ],
      "exercise": "Pour trois requêtes représentatives, propose un index et justifie la classe, l’ordre des colonnes et le coût attendu sur les écritures.",
      "sections": [
        {
          "title": "B-tree et index composites",
          "body": "B-tree est le choix général pour égalités, plages et tris compatibles. Dans un index composé, l’ordre des colonnes compte ; un index `(tenant_id, created_at)` ne répond pas à tous les cas d’un filtre sur `created_at` seul.",
          "examples": [
            {
              "title": "B-tree et index composites",
              "language": "sql",
              "code": "CREATE INDEX orders_tenant_created_idx ON orders (tenant_id, created_at DESC);\nSELECT id, created_at FROM orders WHERE tenant_id = 42 ORDER BY created_at DESC LIMIT 50;"
            }
          ]
        },
        {
          "title": "GIN, GiST et BRIN",
          "body": "GIN convient à certains ensembles de clés, tableaux et recherches JSONB ; GiST prend en charge des recherches spécialisées comme géométrie et proximité ; BRIN résume des plages de blocs et peut être efficace sur de très grandes tables physiquement corrélées.",
          "examples": [
            {
              "title": "GIN, GiST et BRIN",
              "language": "sql",
              "code": "CREATE INDEX documents_payload_gin ON documents USING gin (payload jsonb_path_ops);\nCREATE INDEX events_time_brin ON events USING brin (occurred_at);"
            }
          ]
        },
        {
          "title": "Index partiels et expressions",
          "body": "Un index partiel n’indexe que les lignes satisfaisant un prédicat. Le planificateur doit pouvoir établir que la requête correspond à ce prédicat. Un index d’expression peut accélérer une recherche normalisée, au prix d’un coût à chaque écriture.",
          "examples": [
            {
              "title": "Index partiels et expressions",
              "language": "sql",
              "code": "CREATE INDEX users_active_email_idx ON users (lower(email)) WHERE active;\nSELECT id FROM users WHERE active AND lower(email) = lower('a@example.test');"
            }
          ]
        }
      ],
      "solution": "Pour `WHERE tenant_id = ? ORDER BY created_at DESC LIMIT 50`, un B-tree `(tenant_id, created_at DESC)` peut couvrir filtre et ordre. Pour JSONB, teste GIN avec la classe adaptée aux opérateurs. Pour une grande table append-only temporellement corrélée, BRIN peut être compact. Compare lecture, écritures et taille avant de conserver un index."
    },
    {
      "id": "explain",
      "title": "16. EXPLAIN et plans d’exécution",
      "summary": "EXPLAIN décrit le plan choisi. EXPLAIN ANALYZE exécute réellement la requête ; sur les écritures, utilise une transaction que tu peux annuler et prends en compte les effets externes éventuels.",
      "concepts": [
        "Seq Scan, Index Scan et Bitmap Scan",
        "Nested Loop, Hash Join et Merge Join",
        "Coûts, cardinalités estimées et temps réels"
      ],
      "exercise": "Choisis une requête lente, compare EXPLAIN à EXPLAIN ANALYZE dans un environnement de test, puis identifie le nœud dominant.",
      "sections": [
        {
          "title": "Lire la structure du plan",
          "body": "Le plan est un arbre d’opérations. Les coûts sont des unités estimées, pas des millisecondes ; les lignes estimées et réelles indiquent si le planificateur comprend la distribution des données.",
          "examples": [
            {
              "title": "Lire la structure du plan",
              "language": "sql",
              "code": "EXPLAIN (COSTS, VERBOSE)\nSELECT id, total FROM orders WHERE customer_id = 42 ORDER BY created_at DESC LIMIT 20;"
            }
          ]
        },
        {
          "title": "Mesures réelles avec prudence",
          "body": "EXPLAIN ANALYZE exécute la requête. Pour tester une écriture, une transaction et un rollback peuvent protéger l’état de la base, mais ils n’annulent pas nécessairement tous les effets externes ou les appels de fonctions non transactionnels.",
          "examples": [
            {
              "title": "Mesures réelles avec prudence",
              "language": "sql",
              "code": "BEGIN;\nEXPLAIN (ANALYZE, BUFFERS, WAL)\nUPDATE inventory SET quantity = quantity - 1 WHERE sku = 'TEST';\nROLLBACK;"
            }
          ]
        },
        {
          "title": "Trouver les erreurs d’estimation",
          "body": "Une grande différence entre lignes estimées et réelles peut venir de statistiques périmées, d’une distribution asymétrique ou d’une corrélation entre colonnes. Mets à jour les statistiques et examine les données avant de forcer un plan.",
          "examples": [
            {
              "title": "Trouver les erreurs d’estimation",
              "language": "sql",
              "code": "ANALYZE orders;\nEXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE status = 'pending';"
            }
          ]
        }
      ],
      "solution": "Commence par `EXPLAIN (COSTS, VERBOSE)` pour inspecter le plan estimé. Pour des mesures réelles, exécute en environnement de test `EXPLAIN (ANALYZE, BUFFERS)` ; sur une écriture, protège l’état avec `BEGIN`/`ROLLBACK`, en gardant à l’esprit que les effets externes ne sont pas forcément annulés. Compare lignes estimées/réelles et nœuds dominants."
    },
    {
      "id": "optimisation",
      "title": "17. Optimisation des requêtes",
      "summary": "L’optimisation suit une boucle mesurable : établir une référence, trouver le coût dominant, changer une chose et comparer sur des données représentatives.",
      "concepts": [
        "Statistiques et sélectivité",
        "Pagination par curseur et requêtes N+1",
        "Coût de lecture, écriture et mémoire"
      ],
      "exercise": "Optimise une liste paginée de commandes avec un index adapté, puis documente latence p50/p95 et coût des écritures avant/après.",
      "sections": [
        {
          "title": "Statistiques et sélectivité",
          "body": "`ANALYZE` collecte des statistiques qui aident à estimer le nombre de lignes. Une valeur rare et une valeur fréquente peuvent justifier des plans différents ; les paramètres et les données représentatives comptent.",
          "examples": [
            {
              "title": "Statistiques et sélectivité",
              "language": "sql",
              "code": "ANALYZE orders;\nEXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE status = 'failed';"
            }
          ]
        },
        {
          "title": "Pagination stable",
          "body": "OFFSET peut devenir coûteux sur de grandes pages et n’est pas stable si les données changent entre requêtes. La pagination par curseur s’appuie sur une clé de tri déterministe et un index adapté.",
          "examples": [
            {
              "title": "Pagination stable",
              "language": "sql",
              "code": "SELECT id, created_at, total FROM orders\nWHERE (created_at, id) < ($1, $2)\nORDER BY created_at DESC, id DESC LIMIT 50;"
            }
          ]
        },
        {
          "title": "Mesurer avant de forcer",
          "body": "Évite de désactiver globalement un type de scan ou de fixer des paramètres pour masquer une estimation erronée. Compare le plan, les buffers, le débit concurrent et le coût d’écriture sur une charge réaliste.",
          "examples": [
            {
              "title": "Mesurer avant de forcer",
              "language": "text",
              "code": "Baseline → hypothèse → modification unique → mêmes données et charge → comparaison p50/p95, buffers, CPU, I/O et erreurs."
            }
          ]
        }
      ],
      "solution": "Mesure la requête avant changement avec un jeu de données représentatif ; lance `ANALYZE` si les statistiques sont anciennes, puis compare le plan et les buffers. Pour une pagination stable, utilise un ordre déterministe (par exemple `created_at DESC, id DESC`) et le curseur correspondant. Rapporte latence, volume lu et coût d’écriture avant/après."
    },
    {
      "id": "partitionnement",
      "title": "18. Partitionnement des tables",
      "summary": "Le partitionnement sépare une table logique en partitions physiques. Il aide pour certaines grosses tables, la suppression de plages et le pruning, mais n’améliore pas automatiquement toute requête.",
      "concepts": [
        "RANGE, LIST et HASH",
        "Partition pruning et contraintes de clé",
        "Maintenance et rétention des partitions"
      ],
      "exercise": "Partitionne un journal d’événements par mois et définis comment créer à l’avance la prochaine partition et retirer les données expirées.",
      "sections": [
        {
          "title": "Partitionnement RANGE",
          "body": "La clé de partition et les requêtes doivent être alignées. Une clé temporelle permet souvent le pruning et la suppression rapide des anciennes périodes, mais les contraintes d’unicité doivent tenir compte des règles de partitionnement.",
          "examples": [
            {
              "title": "Partitionnement RANGE",
              "language": "sql",
              "code": "CREATE TABLE events (\n  occurred_at timestamptz NOT NULL,\n  event_id uuid NOT NULL,\n  payload jsonb NOT NULL\n) PARTITION BY RANGE (occurred_at);\nCREATE TABLE events_2026_10 PARTITION OF events\nFOR VALUES FROM ('2026-10-01') TO ('2026-11-01');"
            }
          ]
        },
        {
          "title": "Pruning et index",
          "body": "Le partition pruning évite d’examiner les partitions dont les bornes ne peuvent pas correspondre. Les index restent utiles à l’intérieur des partitions ; vérifie le plan avec une condition qui inclut la clé de partition.",
          "examples": [
            {
              "title": "Pruning et index",
              "language": "sql",
              "code": "EXPLAIN SELECT * FROM events\nWHERE occurred_at >= '2026-10-01' AND occurred_at < '2026-11-01';"
            }
          ]
        },
        {
          "title": "Exploitation du cycle de vie",
          "body": "Prévois la création des partitions futures, les alertes en cas de partition manquante et une procédure de suppression ou d’archivage. Détacher une partition peut être préférable à un DELETE massif, mais doit respecter les dépendances et la fenêtre de maintenance.",
          "examples": [
            {
              "title": "Exploitation du cycle de vie",
              "language": "text",
              "code": "Automatisation mensuelle : créer la partition suivante → vérifier la présence → alerter si absente → détacher/archiver la partition expirée → contrôler la sauvegarde."
            }
          ]
        }
      ],
      "solution": "Pour une table partitionnée par `occurred_at`, crée chaque partition avec des bornes semi-ouvertes, par exemple du premier jour du mois inclus au premier jour du mois suivant exclu. Les requêtes doivent filtrer la clé de partition pour permettre le pruning. Vérifie les restrictions d’unicité sur les tables partitionnées : la clé de partition doit être incluse dans une contrainte unique globale."
    },
    {
      "id": "replication",
      "title": "19. Réplication et haute disponibilité",
      "summary": "La réplication peut réduire le temps de reprise et répartir certaines lectures, mais elle n’est pas une sauvegarde et implique des choix de cohérence et d’orchestration.",
      "concepts": [
        "Réplication physique et logique",
        "Synchrone, asynchrone et retard",
        "Promotion, split-brain et supervision"
      ],
      "exercise": "Compare réplication synchrone et asynchrone pour une application de paiement, en expliquant la perte de données potentielle et l’impact sur la latence.",
      "sections": [
        {
          "title": "Réplication physique",
          "body": "La réplication physique transmet les changements WAL à un serveur standby qui maintient une copie du cluster. Le retard dépend de la charge, du réseau et du stockage ; une lecture sur standby peut être en retard sur le primaire.",
          "examples": [
            {
              "title": "Réplication physique",
              "language": "sql",
              "code": "SELECT application_name, state, sync_state,\n       write_lag, flush_lag, replay_lag\nFROM pg_stat_replication;"
            }
          ]
        },
        {
          "title": "Réplication logique",
          "body": "La réplication logique publie des changements de tables sélectionnées et les applique à un abonné. Elle peut aider à migrer ou intégrer des données, mais la gestion des DDL, des séquences et des conflits nécessite un plan explicite.",
          "examples": [
            {
              "title": "Réplication logique",
              "language": "sql",
              "code": "CREATE PUBLICATION app_publication FOR TABLE public.products, public.orders;\n-- Sur l'abonné : CREATE SUBSCRIPTION ... CONNECTION '...' PUBLICATION app_publication;"
            }
          ]
        },
        {
          "title": "Bascule et split-brain",
          "body": "Promouvoir un standby exige d’empêcher l’ancien primaire d’accepter des écritures concurrentes. Un orchestrateur et un mécanisme de fencing sont nécessaires pour éviter deux primaires actifs. Teste la bascule et mesure le RTO.",
          "examples": [
            {
              "title": "Bascule et split-brain",
              "language": "text",
              "code": "Runbook de failover : détecter panne → vérifier quorum/état → isoler l’ancien primaire → promouvoir standby → rediriger clients → vérifier cohérence → documenter retour au service."
            }
          ]
        }
      ],
      "solution": "La réplication physique maintient une copie du cluster via WAL ; l’asynchrone peut perdre les dernières transactions lors d’une bascule. La réplication logique ne réplique pas automatiquement tous les DDL ni les séquences. Avant failover, isole l’ancien primaire pour éviter le split-brain et mesure retard, RPO et RTO."
    },
    {
      "id": "backup-restore",
      "title": "20. Sauvegardes et restauration PITR",
      "summary": "Une sauvegarde n’a de valeur que si sa restauration est testée. Les sauvegardes logiques, physiques et l’archivage WAL répondent à des objectifs différents.",
      "concepts": [
        "pg_dump, pg_restore et pg_basebackup",
        "Archivage WAL et point-in-time recovery",
        "RPO, RTO et tests de restauration"
      ],
      "exercise": "Établis une politique de sauvegarde, restaure une base dans un environnement isolé et mesure le temps réel de reprise.",
      "sections": [
        {
          "title": "Sauvegarde logique",
          "body": "`pg_dump` exporte une base dans un format logique ; le format custom est pratique pour restaurer des objets choisis avec `pg_restore`. Les rôles globaux et certains paramètres doivent être sauvegardés séparément.",
          "examples": [
            {
              "title": "Sauvegarde logique",
              "language": "bash",
              "code": "pg_dump --format=custom --file=appdb.dump appdb\npg_restore --list appdb.dump\ncreatedb appdb_restore\npg_restore --dbname=appdb_restore appdb.dump"
            }
          ]
        },
        {
          "title": "Sauvegarde physique et PITR",
          "body": "La récupération à un instant donné nécessite une sauvegarde physique de base et une chaîne WAL continue jusqu’au point ciblé. Une archive manquante peut rendre la récupération impossible au-delà du dernier segment disponible.",
          "examples": [
            {
              "title": "Sauvegarde physique et PITR",
              "language": "text",
              "code": "Sauvegarde de base + archive WAL continue + configuration recovery_target_time + test de restauration sur une machine isolée."
            }
          ]
        },
        {
          "title": "RPO et RTO",
          "body": "RPO est la perte de données maximale acceptable ; RTO est le délai maximal de reprise. Ils déterminent la fréquence, le type de sauvegarde, la réplication et les exercices nécessaires.",
          "examples": [
            {
              "title": "RPO et RTO",
              "language": "text",
              "code": "Exercice : simuler la perte d’une base, restaurer la dernière sauvegarde, vérifier les données métier et mesurer RPO/RTO obtenus."
            }
          ]
        }
      ],
      "solution": "Pour une sauvegarde logique, exécute `pg_dump -Fc -d appdb -f appdb.dump`, crée une base vide et restaure avec `pg_restore -d appdb_restore appdb.dump`. Pour PITR, il faut une sauvegarde physique de base et une chaîne WAL continue, ainsi qu’une configuration de récupération adaptée à la version. Une sauvegarde n’est validée qu’après restauration testée."
    },
    {
      "id": "roles",
      "title": "21. Rôles et privilèges",
      "summary": "Les rôles PostgreSQL sont une frontière de sécurité centrale. Le compte applicatif ne doit pas être superuser ni propriétaire de tous les objets qu’il utilise.",
      "concepts": [
        "CREATE ROLE, GRANT et REVOKE",
        "Privilèges de schéma, tables et séquences",
        "Séparer migration, runtime et administration"
      ],
      "exercise": "Crée un rôle de migration propriétaire du schéma et un rôle runtime qui peut lire et modifier les tables nécessaires sans créer d’objets.",
      "sections": [
        {
          "title": "Rôles dédiés",
          "body": "Sépare les identités par usage : administration, migrations et exécution applicative. Ne partage pas le compte superuser avec l’application. Le principe du moindre privilège limite l’impact d’une compromission.",
          "examples": [
            {
              "title": "Rôles dédiés",
              "language": "sql",
              "code": "CREATE ROLE app_runtime LOGIN;\nCREATE ROLE app_migrator LOGIN;\nGRANT CONNECT ON DATABASE app_db TO app_runtime, app_migrator;"
            }
          ]
        },
        {
          "title": "Privilèges effectifs",
          "body": "Les privilèges sur le schéma et sur les tables sont distincts. Les droits par défaut peuvent simplifier les migrations, mais doivent être configurés pour le rôle qui crée réellement les objets.",
          "examples": [
            {
              "title": "Privilèges effectifs",
              "language": "sql",
              "code": "GRANT USAGE ON SCHEMA app TO app_runtime;\nGRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA app TO app_runtime;\nALTER DEFAULT PRIVILEGES FOR ROLE app_migrator IN SCHEMA app\nGRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO app_runtime;"
            }
          ]
        },
        {
          "title": "Révoquer les droits dangereux",
          "body": "Examine les privilèges hérités, les memberships et les objets accessibles par `PUBLIC`. Évite de laisser CREATE dans un schéma présent dans le `search_path` d’un rôle privilégié.",
          "examples": [
            {
              "title": "Révoquer les droits dangereux",
              "language": "sql",
              "code": "REVOKE CREATE ON SCHEMA public FROM PUBLIC;\nSELECT grantee, privilege_type FROM information_schema.role_table_grants\nWHERE table_schema = 'app' ORDER BY grantee, table_name;"
            }
          ]
        }
      ],
      "solution": "Le rôle runtime reçoit `CONNECT`, `USAGE` sur le schéma et les droits minimaux sur les tables nécessaires ; le rôle de migration crée les objets. Configure les privilèges par défaut pour le rôle qui crée réellement les tables. Pour les séquences explicites utilisées avec `nextval`, accorde les privilèges nécessaires séparément. Teste avec le vrai rôle runtime, pas avec un superuser."
    },
    {
      "id": "securite",
      "title": "22. Authentification, TLS et RLS",
      "summary": "La sécurité combine authentification réseau, privilèges SQL, secrets, chiffrement et contrôle d’accès ligne par ligne. Une politique RLS doit être testée avec le véritable rôle applicatif.",
      "concepts": [
        "pg_hba.conf et TLS",
        "Row-Level Security",
        "SECURITY DEFINER, audit et secrets"
      ],
      "exercise": "Configure un rôle qui ne voit que les lignes du tenant courant et écris des tests négatifs pour vérifier qu’un tenant ne peut lire ni modifier les données d’un autre.",
      "sections": [
        {
          "title": "Authentification et TLS",
          "body": "`pg_hba.conf` définit quelles connexions sont autorisées et comment elles s’authentifient. En production, privilégie des méthodes modernes, limite les sources réseau et utilise TLS selon le modèle de menace.",
          "examples": [
            {
              "title": "Authentification et TLS",
              "language": "text",
              "code": "Contrôler : règles pg_hba.conf → réseau autorisé → méthode d’authentification → validation du certificat TLS → rotation des identifiants."
            }
          ]
        },
        {
          "title": "Row-Level Security",
          "body": "RLS applique des politiques au niveau des lignes. Active la sécurité, définis les politiques pour les opérations nécessaires et teste avec un rôle qui n’est ni superuser ni propriétaire bypassant la politique. La valeur de tenant doit venir d’un contexte fiable. `current_setting(..., true)` renvoie NULL si le paramètre n’est pas défini, ce qui ferme l’accès par défaut. Le paramètre personnalisé doit être défini dans chaque transaction et ne constitue pas, à lui seul, une preuve d’identité : un rôle autorisé à exécuter du SQL arbitraire peut le modifier.",
          "examples": [
            {
              "title": "Row-Level Security",
              "language": "sql",
              "code": "ALTER TABLE documents ENABLE ROW LEVEL SECURITY;\nCREATE POLICY tenant_isolation ON documents\nUSING (tenant_id = current_setting('app.tenant_id', true)::uuid)\nWITH CHECK (tenant_id = current_setting('app.tenant_id', true)::uuid);\n-- Dans chaque transaction applicative : SELECT set_config('app.tenant_id', $1, true);"
            }
          ]
        },
        {
          "title": "Fonctions privilégiées et audit",
          "body": "`SECURITY DEFINER` exécute avec les privilèges du propriétaire et exige un `search_path` sûr, des noms qualifiés et des droits d’exécution minimaux. Les logs doivent aider au diagnostic sans exposer les secrets ou données sensibles. Le schéma `app` doit être non modifiable par des rôles non fiables ; un `search_path` explicite ne suffit pas si un attaquant peut créer des objets dans un schéma de confiance.",
          "examples": [
            {
              "title": "Fonctions privilégiées et audit",
              "language": "sql",
              "code": "CREATE FUNCTION app.safe_lookup(p_id bigint) RETURNS text\nLANGUAGE sql SECURITY DEFINER\nSET search_path = pg_catalog, pg_temp\nAS $$ SELECT value FROM app.public_values WHERE id = p_id $$;\nREVOKE ALL ON FUNCTION app.safe_lookup(bigint) FROM PUBLIC;"
            }
          ]
        }
      ],
      "solution": "Active RLS et utilise une politique `USING`/`WITH CHECK`. Pour éviter une erreur si le paramètre est absent, utilise `current_setting('app.tenant_id', true)::uuid` : la comparaison avec NULL n’autorise aucune ligne. Défini ce paramètre avec `set_config('app.tenant_id', $1, true)` dans chaque transaction. Ce GUC n’est pas une identité authentifiée : il ne protège pas d’un utilisateur qui peut exécuter arbitrairement du SQL sous le rôle applicatif. Le rôle ne doit être ni propriétaire bypassant RLS ni superuser."
    },
    {
      "id": "migrations",
      "title": "23. Migrations et changements sans interruption",
      "summary": "Une migration est un changement de contrat entre base et application. Les déploiements sûrs utilisent souvent une séquence compatible plutôt qu’une modification destructive immédiate.",
      "concepts": [
        "Migrations versionnées et idempotence",
        "Ajout progressif de colonnes et contraintes",
        "Index concurrents et verrous DDL"
      ],
      "exercise": "Prépare une migration qui rend `email` obligatoire sur une grande table sans bloquer longuement les écritures : nettoyage, backfill, validation et contrainte.",
      "sections": [
        {
          "title": "Migrations versionnées",
          "body": "Versionne chaque changement de schéma et applique-les dans un ordre connu en CI/CD. Les migrations ne sont pas toujours réversibles, notamment après perte d’information ; prépare une stratégie de retour ou de forward-fix.",
          "examples": [
            {
              "title": "Migrations versionnées",
              "language": "text",
              "code": "Vérifier version courante → exécuter migration transactionnelle → enregistrer version → vérifier postconditions → déployer le code compatible."
            }
          ]
        },
        {
          "title": "Expand, migrate, contract",
          "body": "Ajoute d’abord la nouvelle structure de façon compatible, déploie le code qui la remplit, migre les données par lots, puis retire l’ancien champ dans une version ultérieure. Le rollback du code doit rester possible pendant la transition.",
          "examples": [
            {
              "title": "Expand, migrate, contract",
              "language": "sql",
              "code": "ALTER TABLE users ADD COLUMN normalized_email text;\n-- Remplissage par lots, puis validation et contrainte dans une migration ultérieure."
            }
          ]
        },
        {
          "title": "Index concurrent",
          "body": "`CREATE INDEX CONCURRENTLY` limite le blocage des écritures mais a des contraintes opérationnelles et ne peut pas être exécuté dans un bloc de transaction ordinaire. Prévois le diagnostic et le nettoyage d’un index invalide après échec.",
          "examples": [
            {
              "title": "Index concurrent",
              "language": "sql",
              "code": "CREATE INDEX CONCURRENTLY orders_status_created_idx\nON orders (status, created_at DESC);"
            }
          ]
        }
      ],
      "solution": "Ajoute d’abord la colonne nullable, déploie un code compatible, remplit les données par lots, valide les valeurs, puis ajoute la contrainte dans une étape distincte. Pour une grande table, étudie `NOT VALID` puis `VALIDATE CONSTRAINT`. Exécute `CREATE INDEX CONCURRENTLY` hors d’une transaction et vérifie `indisvalid` si la création échoue."
    },
    {
      "id": "observabilite",
      "title": "24. Observabilité et diagnostic",
      "summary": "L’observabilité PostgreSQL combine vues statistiques, logs, métriques système et traces applicatives. Les données d’observation doivent être interprétées dans le contexte de la charge.",
      "concepts": [
        "pg_stat_activity et pg_locks",
        "pg_stat_statements et logs lents",
        "Connexions, latence et saturation"
      ],
      "exercise": "Prépare un tableau de bord minimal : sessions actives, attentes de verrous, requêtes lentes, connexions utilisées, taille des tables et retard de réplication.",
      "sections": [
        {
          "title": "Sessions actives et attentes",
          "body": "`pg_stat_activity` permet d’observer les requêtes et leur durée. Les requêtes d’administration doivent masquer les secrets et éviter d’exposer les paramètres sensibles dans les tableaux de bord.",
          "examples": [
            {
              "title": "Sessions actives et attentes",
              "language": "sql",
              "code": "SELECT pid, usename, state, wait_event_type, wait_event,\n       now() - query_start AS query_age, left(query, 120) AS query_sample\nFROM pg_stat_activity\nWHERE state <> 'idle' ORDER BY query_start NULLS LAST;"
            }
          ]
        },
        {
          "title": "pg_stat_statements",
          "body": "Cette extension agrège les statistiques par forme de requête et aide à prioriser les requêtes coûteuses. Active-la conformément à la documentation de la version et compare appels, temps total, moyenne et lectures disque.",
          "examples": [
            {
              "title": "pg_stat_statements",
              "language": "sql",
              "code": "SELECT calls, total_exec_time, mean_exec_time, rows, left(query, 120) AS query\nFROM pg_stat_statements ORDER BY total_exec_time DESC LIMIT 20;"
            }
          ]
        },
        {
          "title": "Capacité et alertes",
          "body": "Les symptômes de saturation peuvent venir du pool de connexions, du CPU, de l’I/O, des verrous, du WAL ou de l’autovacuum. Définis des seuils fondés sur le SLO et relie les alertes à un runbook actionnable.",
          "examples": [
            {
              "title": "Capacité et alertes",
              "language": "text",
              "code": "Signaux de base : connexions / max_connections, latence p95, requêtes bloquées, disque libre, croissance WAL, retard standby, échecs backup et durée de vacuum."
            }
          ]
        }
      ],
      "solution": "Active `pg_stat_statements` selon la documentation et redémarre si `shared_preload_libraries` doit changer. Classe les requêtes par temps total et temps moyen, examine `pg_stat_activity` et les attentes de verrous, puis relie les alertes à des objectifs de service. Ne journalise pas les secrets ni des paramètres personnels non nécessaires."
    },
    {
      "id": "node-integration",
      "title": "25. Intégration Node.js et TypeScript",
      "summary": "L’application doit utiliser un pool de connexions, des requêtes paramétrées et des transactions qui restent sur la même connexion.",
      "concepts": [
        "Driver pg et pool de connexions",
        "Paramètres $1, $2 et validation",
        "Transactions et gestion du cycle de vie"
      ],
      "exercise": "Écris une fonction de dépôt qui crée une commande et ses lignes dans une transaction, avec rollback en cas d’échec et release garantie de la connexion.",
      "sections": [
        {
          "title": "Pool et requêtes paramétrées",
          "body": "Un pool réutilise les connexions. Les valeurs doivent être passées en paramètres et non concaténées dans la chaîne SQL. Les noms de table ou de colonne ne sont généralement pas paramétrables et doivent être choisis par une liste autorisée.",
          "examples": [
            {
              "title": "Pool et requêtes paramétrées",
              "language": "typescript",
              "code": "import { Pool } from 'pg';\nconst pool = new Pool({ connectionString: process.env.DATABASE_URL });\nconst result = await pool.query('SELECT id, email FROM app.users WHERE id = $1', [userId]);"
            }
          ]
        },
        {
          "title": "Transaction sur une connexion",
          "body": "Toutes les requêtes d’une transaction doivent utiliser le même client extrait du pool. `pool.query` appelé séparément peut utiliser des connexions différentes. Libère le client dans `finally` et conserve l’erreur initiale si le rollback échoue.",
          "examples": [
            {
              "title": "Transaction sur une connexion",
              "language": "typescript",
              "code": "const client = await pool.connect();\ntry {\n  await client.query('BEGIN');\n  const order = await client.query('INSERT INTO app.orders(customer_id) VALUES ($1) RETURNING id', [customerId]);\n  await client.query('COMMIT');\n  return order.rows[0];\n} catch (error) {\n  try { await client.query('ROLLBACK'); } catch (rollbackError) { logger.error({ rollbackError }, 'Rollback failed'); }\n  throw error;\n} finally { client.release(); }"
            }
          ]
        },
        {
          "title": "Fermeture et erreurs",
          "body": "À l’arrêt du processus, cesse d’accepter de nouvelles requêtes, attends les opérations en cours dans une limite raisonnable, puis ferme le pool. Configure timeouts et journalise un identifiant de requête sans exposer les paramètres sensibles.",
          "examples": [
            {
              "title": "Fermeture et erreurs",
              "language": "typescript",
              "code": "process.on('SIGTERM', async () => {\n  server.close(async () => {\n    await pool.end();\n    process.exit(0);\n  });\n});"
            }
          ]
        }
      ],
      "solution": "Crée le pool une fois au démarrage, paramètre les valeurs (`$1`) et utilise un client obtenu par `pool.connect()` pour toute la transaction. Fais `BEGIN`, écritures, `COMMIT`; dans `catch`, tente `ROLLBACK` sans masquer l’erreur initiale ; dans `finally`, appelle `client.release()`. Ferme proprement le pool à l’arrêt du serveur."
    },
    {
      "id": "tests",
      "title": "26. Tests d’intégration et qualité",
      "summary": "Les tests de base de données doivent valider le comportement du moteur réel : contraintes, transactions, types, verrouillage et migrations ne se résument pas à des mocks.",
      "concepts": [
        "Base isolée et fixtures déterministes",
        "Tests de contraintes, rollback et concurrence",
        "Migrations et restauration dans la CI"
      ],
      "exercise": "Écris des tests pour une contrainte unique, un rollback et deux réservations concurrentes. Chaque test doit remettre la base dans un état connu.",
      "sections": [
        {
          "title": "Base isolée",
          "body": "Utilise une base dédiée aux tests, avec un schéma et des données contrôlés. Évite les tests dépendants d’un état résiduel ou d’un ordre d’exécution ; nettoie explicitement ce que chaque test crée.",
          "examples": [
            {
              "title": "Base isolée",
              "language": "text",
              "code": "Setup → créer base éphémère → appliquer migrations → charger fixtures → exécuter test → assertions → cleanup."
            }
          ]
        },
        {
          "title": "Tester les contraintes et transactions",
          "body": "Un test doit vérifier le résultat observé, pas seulement que la requête n’a pas levé d’exception. Pour les conflits uniques, affirme qu’une seule insertion a réussi et que la base ne contient qu’une ligne.",
          "examples": [
            {
              "title": "Tester les contraintes et transactions",
              "language": "sql",
              "code": "BEGIN;\nINSERT INTO reservations(event_id, seat_id) VALUES (1, 10);\nROLLBACK;\nSELECT count(*) FROM reservations WHERE event_id = 1 AND seat_id = 10; -- attendu : 0 si la fixture était vide"
            }
          ]
        },
        {
          "title": "Concurrence réaliste",
          "body": "Un test concurrent doit synchroniser deux clients pour provoquer la course et vérifier l’invariant final. Répète le scénario ; une seule exécution séquentielle ne démontre pas la sûreté concurrente.",
          "examples": [
            {
              "title": "Concurrence réaliste",
              "language": "text",
              "code": "Deux clients → barrière de synchronisation → tentative simultanée → attendre les deux résultats → vérifier unicité, stock non négatif et erreurs attendues."
            }
          ]
        }
      ],
      "solution": "Utilise une base dédiée, applique les migrations et prépare des fixtures. Vérifie au minimum : la contrainte unique rejette un doublon, le rollback laisse zéro réservation, et deux clients synchronisés ne peuvent pas réserver la même place. Vérifie l’état final en base et nettoie les fixtures sans dépendre de l’ordre des tests."
    },
    {
      "id": "pooling",
      "title": "27. PgBouncer et dimensionnement",
      "summary": "Le nombre de connexions coûte de la mémoire et des ressources serveur. Un pool applicatif et un pooler externe doivent être dimensionnés ensemble.",
      "concepts": [
        "Pool de l’application et PgBouncer",
        "Modes session, transaction et statement",
        "Limites de connexions, timeouts et files d’attente"
      ],
      "exercise": "Estime le nombre maximal de connexions depuis le nombre d’instances et la taille de leurs pools, puis propose un budget qui réserve une marge à l’administration.",
      "sections": [
        {
          "title": "Dimensionner les connexions",
          "body": "Le nombre potentiel de connexions est approximativement le nombre d’instances multiplié par le maximum de connexions de chaque pool. L’addition doit inclure jobs, migrations, supervision et marge d’urgence.",
          "examples": [
            {
              "title": "Dimensionner les connexions",
              "language": "text",
              "code": "API 4 instances × pool max 10 = 40 connexions potentielles, auxquelles ajouter workers, tâches et administration."
            }
          ]
        },
        {
          "title": "Pooler et mode transaction",
          "body": "PgBouncer peut réduire le nombre de connexions serveur. En mode transaction, une connexion serveur est prêtée pour la durée d’une transaction ; certaines fonctionnalités dépendantes de l’état de session ne sont alors pas compatibles sans configuration adaptée.",
          "examples": [
            {
              "title": "Pooler et mode transaction",
              "language": "text",
              "code": "Avant de choisir le mode : inventorier prepared statements, paramètres de session, tables temporaires, advisory locks et état conservé entre transactions."
            }
          ]
        },
        {
          "title": "Timeouts et backpressure",
          "body": "Un pool saturé peut créer une file d’attente et amplifier la latence. Fixe des timeouts cohérents entre HTTP, pool et requêtes ; rejette ou limite la charge au lieu d’attendre sans borne.",
          "examples": [
            {
              "title": "Timeouts et backpressure",
              "language": "text",
              "code": "Définir : connectionTimeoutMillis → statement_timeout → lock_timeout → timeout HTTP, en gardant un budget global cohérent."
            }
          ]
        }
      ],
      "solution": "Calcule le maximum théorique comme nombre d’instances × taille maximale du pool, puis ajoute workers, tâches, supervision et marge d’administration. Avec PgBouncer en mode transaction, n’assume pas que l’état de session persiste entre transactions. Inventorie les prepared statements, tables temporaires, advisory locks et paramètres de session avant de choisir le mode."
    },
    {
      "id": "production",
      "title": "28. Dimensionnement et architecture de production",
      "summary": "Une architecture fiable définit ses objectifs de service, sa capacité, sa stratégie de reprise et ses modes dégradés avant l’incident.",
      "concepts": [
        "SLO, capacité et croissance",
        "Configuration mémoire et stockage",
        "Haute disponibilité, coût et runbooks"
      ],
      "exercise": "Rédige un mini-dossier de production avec hypothèses de charge, limites, alertes, RPO/RTO, sauvegardes et procédure de bascule.",
      "sections": [
        {
          "title": "Partir des objectifs",
          "body": "Dimensionne sur des mesures et des objectifs de latence et de disponibilité, pas sur une configuration magique. La charge de pointe, les requêtes lentes et les tâches batch doivent être prises en compte.",
          "examples": [
            {
              "title": "Partir des objectifs",
              "language": "text",
              "code": "Hypothèses → charge représentative → benchmark → marge de capacité → seuils d’alerte → révision périodique."
            }
          ]
        },
        {
          "title": "Configuration contrôlée",
          "body": "Des paramètres tels que `shared_buffers`, `work_mem` ou `max_connections` dépendent du matériel, du nombre d’opérations simultanées et du type de charge. `work_mem` peut être consommé plusieurs fois par requête et par session ; ne l’augmente pas sans estimation.",
          "examples": [
            {
              "title": "Configuration contrôlée",
              "language": "sql",
              "code": "SHOW shared_buffers;\nSHOW work_mem;\nSHOW max_connections;\nSHOW statement_timeout;"
            }
          ]
        },
        {
          "title": "Runbooks et modes dégradés",
          "body": "Documente les procédures de saturation, disque plein, retard de réplication, corruption suspectée, échec d’archivage et restauration. Un runbook doit indiquer les vérifications, les décisions de sécurité et le point de retour au service.",
          "examples": [
            {
              "title": "Runbooks et modes dégradés",
              "language": "text",
              "code": "Pour chaque incident : symptômes → commandes de diagnostic → risque de perte → action autorisée → validation → escalade → post-mortem."
            }
          ]
        }
      ],
      "solution": "Documente hypothèses de débit, p95/p99, capacité disque, connexions, RPO/RTO et seuils d’alerte. Mesure sous charge avant de régler `shared_buffers`, `work_mem` ou `max_connections`; `work_mem` peut être consommé par plusieurs opérations simultanées. Teste régulièrement restauration et failover, et maintiens des runbooks actionnables."
    }
  ],
  "references": [
    {
      "title": "Documentation officielle PostgreSQL — Documentation courante",
      "url": "https://www.postgresql.org/docs/current/"
    },
    {
      "title": "PostgreSQL — SQL Commands",
      "url": "https://www.postgresql.org/docs/current/sql-commands.html"
    },
    {
      "title": "PostgreSQL — Data Types",
      "url": "https://www.postgresql.org/docs/current/datatype.html"
    },
    {
      "title": "PostgreSQL — Constraints",
      "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
    },
    {
      "title": "PostgreSQL — Transactions",
      "url": "https://www.postgresql.org/docs/current/tutorial-transactions.html"
    },
    {
      "title": "PostgreSQL — MVCC",
      "url": "https://www.postgresql.org/docs/current/mvcc.html"
    },
    {
      "title": "PostgreSQL — Explicit Locking",
      "url": "https://www.postgresql.org/docs/current/explicit-locking.html"
    },
    {
      "title": "PostgreSQL — WAL",
      "url": "https://www.postgresql.org/docs/current/wal-intro.html"
    },
    {
      "title": "PostgreSQL — Routine Vacuuming",
      "url": "https://www.postgresql.org/docs/current/routine-vacuuming.html"
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
      "title": "PostgreSQL — Partitioning",
      "url": "https://www.postgresql.org/docs/current/ddl-partitioning.html"
    },
    {
      "title": "PostgreSQL — High Availability, Load Balancing, and Replication",
      "url": "https://www.postgresql.org/docs/current/high-availability.html"
    },
    {
      "title": "PostgreSQL — Backup and Restore",
      "url": "https://www.postgresql.org/docs/current/backup.html"
    },
    {
      "title": "PostgreSQL — Role Attributes and Privileges",
      "url": "https://www.postgresql.org/docs/current/user-manag.html"
    },
    {
      "title": "PostgreSQL — Row Security Policies",
      "url": "https://www.postgresql.org/docs/current/ddl-rowsecurity.html"
    },
    {
      "title": "PostgreSQL — pg_stat_statements",
      "url": "https://www.postgresql.org/docs/current/pgstatstatements.html"
    },
    {
      "title": "node-postgres — Documentation",
      "url": "https://node-postgres.com/"
    },
    {
      "title": "PgBouncer — Documentation",
      "url": "https://www.pgbouncer.org/config.html"
    }
  ],
  "finalProject": {
    "title": "Plateforme de réservation fiable sur PostgreSQL",
    "description": "Construis et documente le stockage PostgreSQL d’une API Node.js/TypeScript de réservation. Le projet doit démontrer les contraintes d’intégrité, l’atomicité sous concurrence, des requêtes mesurées, des rôles minimaux, des migrations reproductibles et une restauration testée.",
    "criteria": [
      "Modèle relationnel documenté et contraintes couvrant les invariants métier.",
      "Test concurrent démontrant l’impossibilité de réserver deux fois la même place.",
      "Transactions applicatives utilisant une seule connexion et gérant rollback et erreurs.",
      "Index justifiés par des plans EXPLAIN ANALYZE sur un jeu de données représentatif.",
      "Rôles runtime et migration séparés ; RLS si l’architecture multi-tenant l’exige.",
      "Migrations versionnées et stratégie de déploiement compatible documentée.",
      "Sauvegarde restaurée dans un environnement isolé avec RPO/RTO mesurés.",
      "Métriques, logs, alertes et runbook d’incident livrés.",
      "Typecheck, tests et build exécutés en CI par l’équipe dans son environnement de développement."
    ]
  }
};
