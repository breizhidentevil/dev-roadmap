import type { Course } from './types';

/** Cours approfondi NoSQL : modèles, MongoDB, bases distribuées et intégration applicative. */
export const noSqlCourse: Course = {
  "id": "nosql",
  "title": "NoSQL",
  "category": "Base de données",
  "tags": [
    "nosql",
    "mongodb",
    "redis",
    "cassandra",
    "neo4j",
    "documents",
    "clé-valeur",
    "bases distribuées",
    "cohérence",
    "sécurité"
  ],
  "description": "Cours complet sur les bases NoSQL : modèles, modélisation orientée accès, MongoDB, Redis, Cassandra et graphes, cohérence distribuée, sécurité et intégration Node.js/TypeScript.",
  "level": "Débutant à avancé",
  "duration": "35 à 50 heures avec exercices et projet final",
  "prerequisites": [
    "JavaScript et les objets/tableaux sont utiles pour les exemples MongoDB.",
    "HTTP et Node.js sont recommandés pour l’intégration applicative, mais les premiers modules sont accessibles sans cela.",
    "Aucun prérequis NoSQL ; une connaissance des bases relationnelles facilite les comparaisons."
  ],
  "objectives": [
    "Comparer les modèles document, clé-valeur, colonnes larges et graphe selon requêtes et garanties.",
    "Modéliser des documents selon accès, cardinalité, agrégats et duplication.",
    "Écrire et optimiser requêtes MongoDB, agrégations et index.",
    "Comprendre atomicité, transactions, réplication, cohérence, sharding et reprise après incident.",
    "Utiliser Redis et connaître les cas d’usage de Cassandra et des graphes.",
    "Intégrer NoSQL dans une API Node.js/TypeScript avec validation, sécurité, tests et observabilité.",
    "Justifier une architecture et documenter ses compromis opérationnels."
  ],
  "modules": [
    {
      "id": "fundamentaux",
      "title": "1. Comprendre NoSQL",
      "summary": "NoSQL regroupe des modèles différents du relationnel classique. Le choix dépend des accès, des garanties et des contraintes opérationnelles.",
      "concepts": [
        "Motivations et limites du relationnel",
        "NoSQL ne signifie pas absence de schéma",
        "Choisir selon les requêtes et invariants"
      ],
      "exercise": "Pour une boutique, identifie les données qui pourraient utiliser NoSQL. Pour chaque choix, indique une alternative SQL et le compromis principal.",
      "sections": [
        {
          "title": "Pourquoi des modèles alternatifs ?",
          "body": "Les bases relationnelles restent pertinentes pour beaucoup de domaines. NoSQL répond à certains besoins de flexibilité, de distribution, de débit ou de requêtes spécifiques ; il ne supprime pas les coûts de modélisation, il les déplace vers l’application et l’exploitation.",
          "examples": [
            {
              "title": "Pourquoi des modèles alternatifs ?",
              "language": "text",
              "code": "Les bases relationnelles restent pertinentes pour beaucoup de domaines. NoSQL répond à certains besoins de flexibilité, de distribution, de débit ou de requêtes spécifiques ; il ne supprime pas les coûts de modélisation, il les déplace vers l’application et l’exploitation."
            }
          ]
        },
        {
          "title": "Le schéma existe toujours",
          "body": "Une base documentaire accepte des formes variables, mais l’application doit définir champs obligatoires, types, versions et règles métier. Sans contrat, la flexibilité devient une accumulation de documents incompatibles.",
          "examples": [
            {
              "title": "Le schéma existe toujours",
              "language": "json",
              "code": "{\"_id\":\"p-123\",\"name\":\"Clavier\",\"price\":79.9,\"schemaVersion\":2}"
            }
          ]
        },
        {
          "title": "Les invariants priment sur la mode",
          "body": "Pour chaque invariant, identifie le composant qui le garantit, le comportement en cas de panne et le test qui le démontre. Le choix technologique doit reposer sur des exigences mesurables : latence, volume, disponibilité, cohérence et coût.",
          "examples": [
            {
              "title": "Les invariants priment sur la mode",
              "language": "text",
              "code": "Pour chaque invariant, identifie le composant qui le garantit, le comportement en cas de panne et le test qui le démontre. Le choix technologique doit reposer sur des exigences mesurables : latence, volume, disponibilité, cohérence et coût."
            }
          ]
        }
      ]
    },
    {
      "id": "familles",
      "title": "2. Les familles NoSQL",
      "summary": "Documents, clé-valeur, colonnes larges et graphes répondent à des formes d’accès différentes. Une technologie peut combiner des capacités, mais son modèle dominant reste important.",
      "concepts": [
        "Documents : MongoDB",
        "Clé-valeur : Redis",
        "Colonnes larges : Cassandra",
        "Graphes : Neo4j"
      ],
      "exercise": "Associe un panier à expiration, un catalogue flexible, un réseau de relations et un flux d’événements massif à une famille de bases, puis justifie.",
      "sections": [
        {
          "title": "Bases documentaires",
          "body": "Un document regroupe les données souvent consultées ensemble. L’imbriquement fonctionne pour un agrégat cohérent et borné ; les tableaux non bornés et les copies fréquemment modifiées deviennent coûteux.",
          "examples": [
            {
              "title": "Bases documentaires",
              "language": "javascript",
              "code": "const product = { _id: \"p-42\", name: \"Clavier\", variants: [{ sku: \"p-42-fr\" }] };"
            }
          ]
        },
        {
          "title": "Clé-valeur et colonnes larges",
          "body": "Une base clé-valeur est efficace quand l’application connaît la clé. Redis ajoute des structures utiles au cache et aux compteurs. Cassandra privilégie les requêtes définies autour de la clé de partition plutôt que les jointures arbitraires.",
          "examples": [
            {
              "title": "Clé-valeur et colonnes larges",
              "language": "text",
              "code": "Une base clé-valeur est efficace quand l’application connaît la clé. Redis ajoute des structures utiles au cache et aux compteurs. Cassandra privilégie les requêtes définies autour de la clé de partition plutôt que les jointures arbitraires."
            }
          ]
        },
        {
          "title": "Bases orientées graphes",
          "body": "Les graphes représentent explicitement les entités et leurs relations. Ils sont pertinents quand le parcours de relations est central, par exemple pour les recommandations, dépendances ou détection de fraude.",
          "examples": [
            {
              "title": "Bases orientées graphes",
              "language": "cypher",
              "code": "MATCH (u:User {id: $userId})-[:FOLLOWS]->(other:User) RETURN other.id LIMIT 20;"
            }
          ]
        }
      ]
    },
    {
      "id": "modele-acces",
      "title": "3. Modéliser à partir des accès",
      "summary": "En NoSQL, le modèle est souvent conçu à partir des requêtes attendues. Il faut inventorier les lectures et écritures avant de décider d’imbriquer, référencer ou dupliquer.",
      "concepts": [
        "Inventaire des requêtes métier",
        "Cardinalité et fréquence de mise à jour",
        "Agrégats, duplication et cohérence"
      ],
      "exercise": "Pour un site de cours, liste cinq requêtes principales puis dessine les documents adaptés à chacune.",
      "sections": [
        {
          "title": "Commencer par les requêtes",
          "body": "Liste les lectures et écritures, filtres, tris, volumes et fréquences. Un modèle optimal pour la page détail peut être mauvais pour un écran d’administration. Priorise les requêtes critiques et fixe des budgets de latence.",
          "examples": [
            {
              "title": "Commencer par les requêtes",
              "language": "text",
              "code": "Liste les lectures et écritures, filtres, tris, volumes et fréquences. Un modèle optimal pour la page détail peut être mauvais pour un écran d’administration. Priorise les requêtes critiques et fixe des budgets de latence."
            }
          ]
        },
        {
          "title": "Choisir l’agrégat",
          "body": "L’imbriquement convient aux données bornées consultées ensemble. Les références sont préférables pour des relations partagées, volumineuses ou mises à jour indépendamment.",
          "examples": [
            {
              "title": "Choisir l’agrégat",
              "language": "javascript",
              "code": "const course = { _id: \"c-1\", title: \"SQL\", modules: [{ id: \"m1\", title: \"SELECT\" }] };"
            }
          ]
        },
        {
          "title": "Documenter les compromis",
          "body": "La duplication accélère parfois la lecture, mais exige une source de vérité, une synchronisation et une stratégie de réparation. Distingue snapshot métier historique et copie dérivée qui doit rester synchronisée.",
          "examples": [
            {
              "title": "Documenter les compromis",
              "language": "text",
              "code": "La duplication accélère parfois la lecture, mais exige une source de vérité, une synchronisation et une stratégie de réparation. Distingue snapshot métier historique et copie dérivée qui doit rester synchronisée."
            }
          ]
        }
      ]
    },
    {
      "id": "cap-coherence",
      "title": "4. Distribution, CAP et cohérence",
      "summary": "Les systèmes distribués arbitrent entre disponibilité et cohérence lors d’une partition réseau. CAP n’est pas un classement global des bases.",
      "concepts": [
        "Partition réseau et CAP",
        "Cohérence linéarisable et éventuelle",
        "Latence, quorum et lectures obsolètes"
      ],
      "exercise": "Décris ce que voit un utilisateur si une lecture arrive sur une réplique en retard juste après une mise à jour. Définis le comportement acceptable.",
      "sections": [
        {
          "title": "Comprendre CAP",
          "body": "En présence d’une partition réseau, un système distribué ne peut pas garantir simultanément cohérence linéarisable et disponibilité totale pour toutes les requêtes. Il faut décrire le comportement concret des opérations plutôt que donner une étiquette simpliste à la base.",
          "examples": [
            {
              "title": "Comprendre CAP",
              "language": "text",
              "code": "En présence d’une partition réseau, un système distribué ne peut pas garantir simultanément cohérence linéarisable et disponibilité totale pour toutes les requêtes. Il faut décrire le comportement concret des opérations plutôt que donner une étiquette simpliste à la base."
            }
          ]
        },
        {
          "title": "Niveaux de cohérence",
          "body": "La cohérence éventuelle autorise des répliques temporairement différentes sans durée maximale implicite de convergence. La cohérence linéarisable donne l’impression que chaque opération a eu lieu à un instant unique entre son appel et sa réponse.",
          "examples": [
            {
              "title": "Niveaux de cohérence",
              "language": "text",
              "code": "La cohérence éventuelle autorise des répliques temporairement différentes sans durée maximale implicite de convergence. La cohérence linéarisable donne l’impression que chaque opération a eu lieu à un instant unique entre son appel et sa réponse."
            }
          ]
        },
        {
          "title": "Choisir par opération",
          "body": "Un même système peut proposer plusieurs niveaux de lecture et d’écriture. Définis ceux qui conviennent à un compteur approximatif, un profil, un stock ou une présence en ligne ; mesure la latence et les erreurs possibles.",
          "examples": [
            {
              "title": "Choisir par opération",
              "language": "text",
              "code": "Un même système peut proposer plusieurs niveaux de lecture et d’écriture. Définis ceux qui conviennent à un compteur approximatif, un profil, un stock ou une présence en ligne ; mesure la latence et les erreurs possibles."
            }
          ]
        }
      ]
    },
    {
      "id": "environnement-mongodb",
      "title": "5. Installer MongoDB et préparer l’environnement",
      "summary": "Prépare un environnement de développement reproductible avec MongoDB, mongosh et Compass. Les exercices doivent utiliser des données synthétiques et une base jetable.",
      "concepts": [
        "Serveur, shell et interface graphique",
        "Local, conteneur et service managé",
        "Version, configuration et données synthétiques"
      ],
      "exercise": "Prépare un environnement local, teste la connexion et documente démarrage, arrêt et remise à zéro.",
      "sections": [
        {
          "title": "Les composants",
          "body": "MongoDB Server stocke les données, mongosh est un shell interactif, Compass une interface graphique et le pilote officiel relie l’application au serveur. Ces outils ne remplacent pas l’authentification ni les droits.",
          "examples": [
            {
              "title": "Les composants",
              "language": "bash",
              "code": "mongosh \"mongodb://127.0.0.1:27017/catalogue\""
            }
          ]
        },
        {
          "title": "Configuration reproductible",
          "body": "Épingle les versions de développement, documente les variables nécessaires et ne stocke aucun secret réel dans le dépôt. Un port exposé sur toutes les interfaces n’est pas une configuration de production.",
          "examples": [
            {
              "title": "Configuration reproductible",
              "language": "yaml",
              "code": "services:\n  mongodb:\n    image: mongo:8\n    ports:\n      - \"127.0.0.1:27017:27017\""
            }
          ]
        },
        {
          "title": "Vérifier la connexion",
          "body": "Vérifie le ping, l’identité de la base et la capacité à créer puis lire un document. Sur un environnement partagé, active l’authentification et limite l’exposition réseau.",
          "examples": [
            {
              "title": "Vérifier la connexion",
              "language": "javascript",
              "code": "db.runCommand({ ping: 1 }); db.getName();"
            }
          ]
        }
      ]
    },
    {
      "id": "crud",
      "title": "6. MongoDB : opérations CRUD",
      "summary": "Les opérations CRUD créent, lisent, modifient et suppriment des documents. Il faut maîtriser les filtres, les opérateurs de mise à jour et les résultats d’écriture.",
      "concepts": [
        "insertOne et insertMany",
        "find et findOne",
        "updateOne, updateMany et opérateurs",
        "deleteOne et deleteMany"
      ],
      "exercise": "Crée trois produits, modifie un prix par identifiant et supprime un document de test. Vérifie les résultats de chaque opération.",
      "sections": [
        {
          "title": "Créer et lire",
          "body": "MongoDB crée un `_id` si absent. `insertMany` peut échouer partiellement selon les options. `find` retourne un curseur : évite de matérialiser une collection entière en mémoire.",
          "examples": [
            {
              "title": "Créer et lire",
              "language": "javascript",
              "code": "db.products.insertOne({ name: \"Keyboard\", price: 79.9, active: true }); db.products.find({ active: true }, { name: 1, price: 1 });"
            }
          ]
        },
        {
          "title": "Modifier sans remplacer",
          "body": "`$set`, `$inc`, `$unset` et `$push` réalisent des modifications ciblées. Un remplacement complet peut effacer les champs omis. Vérifie `matchedCount` et `modifiedCount`, qui ne signifient pas la même chose.",
          "examples": [
            {
              "title": "Modifier sans remplacer",
              "language": "javascript",
              "code": "db.products.updateOne({ _id: productId }, { $set: { price: 74.9 }, $inc: { revision: 1 } });"
            }
          ]
        },
        {
          "title": "Supprimer prudemment",
          "body": "Un filtre trop large peut supprimer trop de documents. Avant une suppression massive, exécute le filtre en lecture, compte les résultats et prépare une stratégie de restauration.",
          "examples": [
            {
              "title": "Supprimer prudemment",
              "language": "javascript",
              "code": "const filter = { active: false, archived: true }; db.products.find(filter).limit(20); db.products.countDocuments(filter);"
            }
          ]
        }
      ]
    },
    {
      "id": "requetes",
      "title": "7. Filtrer, projeter et paginer",
      "summary": "Les requêtes MongoDB combinent filtres sur champs, tableaux et objets imbriqués. Une pagination stable nécessite un tri déterministe.",
      "concepts": [
        "Comparaison et logique",
        "Tableaux et chemins imbriqués",
        "Projection, tri, limite et pagination"
      ],
      "exercise": "Liste les produits audio actifs de prix inférieur à 100, triés par prix puis `_id`. Propose une pagination stable.",
      "sections": [
        {
          "title": "Filtres et logique",
          "body": "Les opérateurs `$gt`, `$gte`, `$in`, `$exists`, `$and` et `$or` construisent les prédicats. Valide les types des filtres venant du client ; ne transforme jamais librement une entrée en objet d’opérateurs.",
          "examples": [
            {
              "title": "Filtres et logique",
              "language": "javascript",
              "code": "db.products.find({ active: true, category: \"audio\", price: { $lt: 100 } });"
            }
          ]
        },
        {
          "title": "Tableaux et documents imbriqués",
          "body": "Les chemins comme `address.city` ciblent des champs imbriqués. `$elemMatch` garantit que plusieurs conditions correspondent au même élément de tableau.",
          "examples": [
            {
              "title": "Tableaux et documents imbriqués",
              "language": "javascript",
              "code": "db.orders.find({ items: { $elemMatch: { sku: \"A-1\", quantity: { $gte: 2 } } } });"
            }
          ]
        },
        {
          "title": "Pagination déterministe",
          "body": "`sort` et `limit` stabilisent le résultat. `skip` devient coûteux pour de grands offsets ; une pagination par curseur filtre après la dernière clé vue et doit inclure un critère unique pour départager les égalités.",
          "examples": [
            {
              "title": "Pagination déterministe",
              "language": "javascript",
              "code": "db.products.find({ active: true }).sort({ price: 1, _id: 1 }).limit(20);"
            }
          ]
        }
      ]
    },
    {
      "id": "modelisation-document",
      "title": "8. Modélisation documentaire",
      "summary": "La modélisation MongoDB repose sur l’imbriquement, les références et les frontières d’agrégat. Considère cardinalité, taille et cycle de vie.",
      "concepts": [
        "Imbriquer les données bornées",
        "Référencer les entités partagées",
        "Limiter la duplication non maîtrisée"
      ],
      "exercise": "Modélise utilisateurs, articles et commentaires d’un blog où un article peut recevoir des centaines de milliers de commentaires.",
      "sections": [
        {
          "title": "Imbriquer les données bornées",
          "body": "L’imbriquement fonctionne lorsque les données sont consultées ensemble et leur taille reste bornée. Il facilite les lectures et les mises à jour atomiques du document. Évite les tableaux qui grandissent sans limite.",
          "examples": [
            {
              "title": "Imbriquer les données bornées",
              "language": "javascript",
              "code": "{ _id: \"order-100\", items: [{ sku: \"A-1\", quantity: 1, unitPrice: 79.9 }] }"
            }
          ]
        },
        {
          "title": "Référencer les données partagées",
          "body": "Une référence n’est pas automatiquement une clé étrangère. L’application doit traiter les documents absents, les suppressions et l’intégrité référentielle.",
          "examples": [
            {
              "title": "Référencer les données partagées",
              "language": "javascript",
              "code": "{ _id: \"comment-1\", articleId: \"article-9\", authorId: \"user-2\", body: \"Utile\" }"
            }
          ]
        },
        {
          "title": "Dupliquer avec une source de vérité",
          "body": "Une copie du prix au moment d’un achat est un snapshot historique ; une copie du stock doit rester synchronisée. Documente le processus de réparation des copies dérivées.",
          "examples": [
            {
              "title": "Dupliquer avec une source de vérité",
              "language": "javascript",
              "code": "{ productId: \"p-42\", nameAtPurchase: \"Clavier\", unitPriceAtPurchase: 79.9, quantity: 1 }"
            }
          ]
        }
      ]
    },
    {
      "id": "aggregation",
      "title": "9. Pipeline d’agrégation",
      "summary": "Le pipeline transforme et regroupe les documents. Chaque étape modifie leur forme ou leur nombre ; l’ordre influe sur la logique et les performances.",
      "concepts": [
        "$match et $project",
        "$group, $unwind et $lookup",
        "Mesure et optimisation"
      ],
      "exercise": "Calcule le chiffre d’affaires par client pour les commandes payées. Explique les hypothèses de devise et de dates.",
      "sections": [
        {
          "title": "Filtrer et projeter",
          "body": "Place les filtres sélectifs tôt lorsque cela ne change pas la sémantique. Le moteur optimise certaines étapes ; un `$project` précoce n’améliore pas automatiquement toutes les requêtes.",
          "examples": [
            {
              "title": "Filtrer et projeter",
              "language": "javascript",
              "code": "db.orders.aggregate([{ $match: { status: \"paid\" } }, { $project: { total: 1, customerId: 1 } }]);"
            }
          ]
        },
        {
          "title": "Grouper et dérouler",
          "body": "`$group` produit une ligne par clé de groupe. `$unwind` transforme chaque élément d’un tableau en document ; attention à ne pas multiplier les lignes et compter plusieurs fois une commande.",
          "examples": [
            {
              "title": "Grouper et dérouler",
              "language": "javascript",
              "code": "db.orders.aggregate([{ $match: { status: \"paid\" } }, { $group: { _id: \"$customerId\", revenue: { $sum: \"$total\" }, orders: { $sum: 1 } } }, { $sort: { revenue: -1 } }]);"
            }
          ]
        },
        {
          "title": "Joindre avec $lookup",
          "body": "`$lookup` enrichit les documents depuis une autre collection. Une jointure volumineuse peut coûter cher ; un bon modèle réduit les jointures inutiles sans dupliquer toutes les données aveuglément.",
          "examples": [
            {
              "title": "Joindre avec $lookup",
              "language": "javascript",
              "code": "db.orders.aggregate([{ $lookup: { from: \"customers\", localField: \"customerId\", foreignField: \"_id\", as: \"customer\" } }]);"
            }
          ]
        }
      ]
    },
    {
      "id": "indexes",
      "title": "10. Index et performances",
      "summary": "Un index réduit le travail de recherche mais augmente le coût des écritures, du stockage et de la maintenance. Il doit correspondre aux requêtes réelles.",
      "concepts": [
        "Index simples et composés",
        "Index uniques, partiels, TTL et multiclés",
        "explain et sélectivité"
      ],
      "exercise": "Propose un index pour une requête qui filtre par tenant et statut, trie par date décroissante et limite à 50 résultats.",
      "sections": [
        {
          "title": "Index composés",
          "body": "L’ordre des champs d’un index composé compte. Le préfixe gauche conditionne les requêtes exploitables. Conçois l’index à partir des égalités, tris et plages, puis vérifie-le sur des données représentatives.",
          "examples": [
            {
              "title": "Index composés",
              "language": "javascript",
              "code": "db.orders.createIndex({ tenantId: 1, status: 1, createdAt: -1 });"
            }
          ]
        },
        {
          "title": "Index spécialisés",
          "body": "Un index unique garantit l’unicité, un index partiel couvre un sous-ensemble, un TTL expire des documents selon une date et un multikey indexe les valeurs d’un tableau. Vérifie les contraintes de chaque type.",
          "examples": [
            {
              "title": "Index spécialisés",
              "language": "javascript",
              "code": "db.users.createIndex({ email: 1 }, { unique: true }); db.sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });"
            }
          ]
        },
        {
          "title": "Mesurer le plan",
          "body": "`explain(\"executionStats\")` expose les étapes et le nombre de documents examinés. Un `COLLSCAN` n’est pas toujours mauvais sur une petite collection ; compare latence et charge avant et après.",
          "examples": [
            {
              "title": "Mesurer le plan",
              "language": "javascript",
              "code": "db.orders.find({ tenantId: \"t-1\", status: \"paid\" }).sort({ createdAt: -1 }).limit(50).explain(\"executionStats\");"
            }
          ]
        }
      ]
    },
    {
      "id": "validation-migrations",
      "title": "11. Validation, types et migrations",
      "summary": "Une base documentaire gagne à définir des contrats de données. La validation côté base complète celle de l’API et encadre les documents historiques.",
      "concepts": [
        "BSON et validation JSON Schema",
        "Champs requis et règles de type",
        "Versions de schéma et migrations progressives"
      ],
      "exercise": "Ajoute un validateur imposant nom non vide, prix positif et champ booléen `active`. Prévois les documents historiques sans `active`.",
      "sections": [
        {
          "title": "Valider dans la base",
          "body": "Les validateurs MongoDB utilisent `$jsonSchema` pour imposer types et champs requis. Choisis une politique claire : rejet immédiat ou avertissement temporaire pendant la migration.",
          "examples": [
            {
              "title": "Valider dans la base",
              "language": "javascript",
              "code": "db.createCollection(\"products\", { validator: { $jsonSchema: { bsonType: \"object\", required: [\"name\", \"price\"], properties: { name: { bsonType: \"string\", minLength: 1 }, price: { bsonType: \"number\", minimum: 0 } } } } });"
            }
          ]
        },
        {
          "title": "Évolution de schéma",
          "body": "Accepte temporairement les anciennes formes, déploie du code compatible, migre les données par lots, puis durcis la validation. Une migration doit être relançable, observable et limitée en charge.",
          "examples": [
            {
              "title": "Évolution de schéma",
              "language": "javascript",
              "code": "db.products.updateMany({ active: { $exists: false } }, { $set: { active: true, schemaVersion: 2 } });"
            }
          ]
        },
        {
          "title": "TypeScript ne valide pas au runtime",
          "body": "Les types TypeScript ne garantissent pas qu’un document stocké ou une requête HTTP respecte la forme attendue. Valide aux frontières avec un schéma d’exécution et gère les documents partiellement migrés.",
          "examples": [
            {
              "title": "TypeScript ne valide pas au runtime",
              "language": "typescript",
              "code": "type Product = { _id: string; name: string; price: number; active: boolean; schemaVersion: number };"
            }
          ]
        }
      ]
    },
    {
      "id": "transactions",
      "title": "12. Atomicité, transactions et erreurs",
      "summary": "Les opérations sur un document sont atomiques. Les transactions multi-documents existent mais leur coût incite à bien concevoir les agrégats.",
      "concepts": [
        "Atomicité locale",
        "Transactions multi-documents et sessions",
        "Retries, idempotence et compensation"
      ],
      "exercise": "Pour une commande qui réserve plusieurs articles, identifie les invariants et compare transaction et saga.",
      "sections": [
        {
          "title": "Atomicité sur un document",
          "body": "Une mise à jour conditionnelle vérifie l’état attendu et le modifie atomiquement. Contrôle le nombre de documents modifiés ; zéro modification n’est pas un succès métier.",
          "examples": [
            {
              "title": "Atomicité sur un document",
              "language": "javascript",
              "code": "const r = db.inventory.updateOne({ sku: \"A-1\", available: { $gte: 2 } }, { $inc: { available: -2 } }); if (r.modifiedCount !== 1) throw new Error(\"Stock insuffisant\");"
            }
          ]
        },
        {
          "title": "Transactions multi-documents",
          "body": "Une transaction regroupe des écritures, mais exige un déploiement compatible et peut échouer pour des raisons transitoires. Les retries, le commit incertain et les effets externes doivent être traités explicitement.",
          "examples": [
            {
              "title": "Transactions multi-documents",
              "language": "text",
              "code": "Une transaction doit regrouper uniquement les écritures qui partagent un invariant ; e-mail et paiement externe nécessitent un mécanisme séparé."
            }
          ]
        },
        {
          "title": "Idempotence et effets externes",
          "body": "Un retry peut rejouer une opération déjà exécutée. Utilise une clé d’idempotence persistée et une contrainte d’unicité. Une outbox permet de publier des événements après validation de l’écriture métier.",
          "examples": [
            {
              "title": "Idempotence et effets externes",
              "language": "text",
              "code": "Un retry peut rejouer une opération déjà exécutée. Utilise une clé d’idempotence persistée et une contrainte d’unicité. Une outbox permet de publier des événements après validation de l’écriture métier."
            }
          ]
        }
      ]
    },
    {
      "id": "replication",
      "title": "13. Réplication et haute disponibilité",
      "summary": "Les replica sets répliquent les opérations et élisent un primaire. Les garanties dépendent des options de lecture/écriture et de l’état du cluster.",
      "concepts": [
        "Primary et secondary",
        "writeConcern et readConcern",
        "Bascule, latence et lectures obsolètes"
      ],
      "exercise": "Définis les garanties nécessaires à une écriture de paiement et à une lecture de catalogue.",
      "sections": [
        {
          "title": "Rôle des membres",
          "body": "Le primaire accepte les écritures ordinaires ; les secondaires répliquent et peuvent servir certaines lectures. Une élection peut interrompre brièvement les opérations, que l’application doit savoir retenter.",
          "examples": [
            {
              "title": "Rôle des membres",
              "language": "text",
              "code": "Test : interrompre un membre dans un environnement isolé et observer les erreurs transitoires et le temps de bascule."
            }
          ]
        },
        {
          "title": "Garanties d’écriture",
          "body": "`writeConcern` définit le niveau d’acquittement demandé. Une garantie plus forte peut réduire le risque de perte mais augmente parfois la latence. Choisis selon la criticité métier.",
          "examples": [
            {
              "title": "Garanties d’écriture",
              "language": "javascript",
              "code": "db.orders.insertOne({ _id: \"o-900\", status: \"created\" }, { writeConcern: { w: \"majority\", wtimeout: 5000 } });"
            }
          ]
        },
        {
          "title": "Préférences de lecture",
          "body": "Lire sur une secondaire peut répartir la charge mais retourner une donnée en retard. Pour une lecture après écriture, définis explicitement les garanties nécessaires plutôt que de supposer que toutes les lectures voient instantanément la dernière version.",
          "examples": [
            {
              "title": "Préférences de lecture",
              "language": "text",
              "code": "Lire sur une secondaire peut répartir la charge mais retourner une donnée en retard. Pour une lecture après écriture, définis explicitement les garanties nécessaires plutôt que de supposer que toutes les lectures voient instantanément la dernière version."
            }
          ]
        }
      ]
    },
    {
      "id": "sharding",
      "title": "14. Sharding et montée en charge",
      "summary": "Le sharding répartit les données entre shards. La clé détermine la distribution, les possibilités de ciblage et les risques de hotspots.",
      "concepts": [
        "Clé de shard et distribution",
        "Requêtes ciblées versus scatter-gather",
        "Hotspots et croissance"
      ],
      "exercise": "Compare une clé monotone temporelle et une clé composée à forte cardinalité pour 100 millions d’événements.",
      "sections": [
        {
          "title": "Choisir une clé",
          "body": "La clé doit répartir données et charge tout en permettant de cibler les requêtes. Une clé monotone peut concentrer les écritures ; une cardinalité trop faible empêche une distribution fine.",
          "examples": [
            {
              "title": "Choisir une clé",
              "language": "text",
              "code": "Avant le sharding, mesure la distribution des clés, les volumes, la taille des documents et les requêtes dominantes."
            }
          ]
        },
        {
          "title": "Éviter le scatter-gather",
          "body": "Sans clé adaptée, une requête peut consulter plusieurs shards. Les tris et agrégations distribués ajoutent un coût. Le sharding ne corrige pas une requête mal conçue.",
          "examples": [
            {
              "title": "Éviter le scatter-gather",
              "language": "text",
              "code": "Pour chaque endpoint, indique s’il cible un shard, plusieurs shards ou l’ensemble du cluster."
            }
          ]
        },
        {
          "title": "Prévoir la capacité",
          "body": "Observe équilibrage, débit, latence, stockage et hotspots. Les migrations entre shards consomment des ressources. N’ajoute pas de sharding avant d’avoir vérifié que les solutions plus simples sont insuffisantes.",
          "examples": [
            {
              "title": "Prévoir la capacité",
              "language": "text",
              "code": "Observe équilibrage, débit, latence, stockage et hotspots. Les migrations entre shards consomment des ressources. N’ajoute pas de sharding avant d’avoir vérifié que les solutions plus simples sont insuffisantes."
            }
          ]
        }
      ]
    },
    {
      "id": "concurrence",
      "title": "15. Concurrence, conflits et idempotence",
      "summary": "Même si chaque écriture est atomique, des requêtes concurrentes peuvent violer des invariants si elles ne conditionnent pas leurs transitions.",
      "concepts": [
        "Mises à jour conditionnelles",
        "Version optimiste",
        "Clés d’idempotence"
      ],
      "exercise": "Écris une transition draft→published qui ne peut être appliquée qu’une fois, même si deux requêtes arrivent ensemble.",
      "sections": [
        {
          "title": "Mise à jour conditionnelle",
          "body": "Le filtre fait partie de la garantie métier : l’écriture réussit seulement si l’état attendu est toujours présent. Une lecture suivie d’une écriture sans condition crée une course.",
          "examples": [
            {
              "title": "Mise à jour conditionnelle",
              "language": "javascript",
              "code": "const r = db.articles.updateOne({ _id: \"a-1\", status: \"draft\" }, { $set: { status: \"published\", publishedAt: new Date() } }); if (r.modifiedCount !== 1) throw new Error(\"État incompatible\");"
            }
          ]
        },
        {
          "title": "Version optimiste",
          "body": "Un champ `version` permet de détecter une modification depuis la lecture. Inclue la version attendue dans le filtre et incrémente-la lors de la mise à jour.",
          "examples": [
            {
              "title": "Version optimiste",
              "language": "javascript",
              "code": "const result = db.documents.updateOne({ _id: \"doc-1\", version: 7 }, { $set: { title: \"Révisé\" }, $inc: { version: 1 } }); if (result.matchedCount !== 1) throw new Error(\"Conflit de version : document absent ou modifié depuis la lecture\");"
            }
          ]
        },
        {
          "title": "Dédupliquer les requêtes",
          "body": "La clé d’idempotence doit être unique et conservée assez longtemps pour couvrir les retries. Une vérification préalable suivie d’une insertion n’est pas atomique : impose l’unicité avec un index.",
          "examples": [
            {
              "title": "Dédupliquer les requêtes",
              "language": "javascript",
              "code": "db.idempotency.createIndex({ key: 1 }, { unique: true });"
            }
          ]
        }
      ]
    },
    {
      "id": "sauvegarde",
      "title": "16. Sauvegarde et reprise après incident",
      "summary": "Une sauvegarde n’a de valeur que si sa restauration est testée. RPO et RTO quantifient perte de données et délai de reprise acceptables.",
      "concepts": [
        "Sauvegardes cohérentes",
        "RPO, RTO et rétention",
        "Restauration et vérification"
      ],
      "exercise": "Fixe un RPO/RTO pour une API de commande et propose une politique de sauvegarde et un test trimestriel.",
      "sections": [
        {
          "title": "Définir les objectifs",
          "body": "RPO est la perte maximale de données acceptable exprimée en temps ; RTO est le délai maximal de reprise. Les valeurs doivent être validées avec le métier et testées en pratique.",
          "examples": [
            {
              "title": "Définir les objectifs",
              "language": "text",
              "code": "RPO est la perte maximale de données acceptable exprimée en temps ; RTO est le délai maximal de reprise. Les valeurs doivent être validées avec le métier et testées en pratique."
            }
          ]
        },
        {
          "title": "Sauvegarder",
          "body": "La méthode dépend du déploiement et du volume. Les exports logiques peuvent être lents sur de gros volumes ; les sauvegardes managées et restaurations à un instant donné ont leurs propres limites.",
          "examples": [
            {
              "title": "Sauvegarder",
              "language": "bash",
              "code": "mongodump --uri=\"$MONGODB_URI\" --archive=backup.archive --gzip"
            }
          ]
        },
        {
          "title": "Tester la restauration",
          "body": "Restaure vers un environnement isolé, vérifie collections, index, comptages et invariants métier, puis mesure la durée. Chiffre les sauvegardes et protège leur accès indépendamment de la base.",
          "examples": [
            {
              "title": "Tester la restauration",
              "language": "bash",
              "code": "mongorestore --uri=\"$RESTORE_URI\" --archive=backup.archive --gzip"
            }
          ]
        }
      ]
    },
    {
      "id": "exploitation-securite",
      "title": "17. Exploitation et sécurité MongoDB",
      "summary": "La sécurité dépend des identités, droits, réseau, chiffrement, secrets et surveillance opérationnelle.",
      "concepts": [
        "Authentification et moindre privilège",
        "TLS, réseau et secrets",
        "Audit, logs et métriques"
      ],
      "exercise": "Rédige une checklist de production couvrant identités, réseau, TLS, sauvegardes, alertes et rotation des secrets.",
      "sections": [
        {
          "title": "Droits minimaux",
          "body": "L’application utilise un compte dédié limité aux bases nécessaires. Les comptes administrateur ne sont pas utilisés par le service. Teste les droits effectifs après chaque changement.",
          "examples": [
            {
              "title": "Droits minimaux",
              "language": "text",
              "code": "L’application utilise un compte dédié limité aux bases nécessaires. Les comptes administrateur ne sont pas utilisés par le service. Teste les droits effectifs après chaque changement."
            }
          ]
        },
        {
          "title": "Secrets et réseau",
          "body": "N’expose pas publiquement le port sans contrôle strict. Utilise TLS, injecte les secrets depuis un gestionnaire ou l’environnement et ne journalise jamais les URI contenant un mot de passe.",
          "examples": [
            {
              "title": "Secrets et réseau",
              "language": "text",
              "code": "N’expose pas publiquement le port sans contrôle strict. Utilise TLS, injecte les secrets depuis un gestionnaire ou l’environnement et ne journalise jamais les URI contenant un mot de passe."
            }
          ]
        },
        {
          "title": "Surveiller la santé",
          "body": "Observe latence, connexions, CPU, mémoire, stockage, réplication et requêtes lentes. Définis des seuils et procédures d’intervention ; les logs seuls ne suffisent pas.",
          "examples": [
            {
              "title": "Surveiller la santé",
              "language": "text",
              "code": "Observe latence, connexions, CPU, mémoire, stockage, réplication et requêtes lentes. Définis des seuils et procédures d’intervention ; les logs seuls ne suffisent pas."
            }
          ]
        }
      ]
    },
    {
      "id": "redis",
      "title": "18. Redis et les bases clé-valeur",
      "summary": "Redis fournit des structures en mémoire pour cache, sessions, compteurs et coordination. Son rôle dépend de la persistance et des garanties requises.",
      "concepts": [
        "Strings, hashes, sets, listes, sorted sets",
        "TTL, éviction et cache-aside",
        "Persistance et réplication"
      ],
      "exercise": "Conçois un cache-aside pour une fiche produit : clé, TTL, panne Redis et invalidation après modification.",
      "sections": [
        {
          "title": "Choisir une structure",
          "body": "String pour une valeur simple, hash pour des champs, set pour des valeurs uniques, liste pour une séquence et sorted set pour un classement. Choisis selon les opérations nécessaires.",
          "examples": [
            {
              "title": "Choisir une structure",
              "language": "text",
              "code": "session:abc ; rate:user:42 ; leaderboard:week"
            }
          ]
        },
        {
          "title": "Cache-aside",
          "body": "L’application lit le cache, puis la source de vérité en cas de miss et remplit le cache. TTL ne garantit pas une cohérence immédiate ; invalide ou actualise après écriture et prévois la panne du cache.",
          "examples": [
            {
              "title": "Cache-aside",
              "language": "javascript",
              "code": "async function getProduct(id) { const key = `product:${id}`; const cached = await redis.get(key); if (cached) return JSON.parse(cached); const product = await repository.findById(id); if (product) await redis.set(key, JSON.stringify(product), { EX: 60 }); return product; }"
            }
          ]
        },
        {
          "title": "Mémoire et persistance",
          "body": "La réplication ne remplace pas une sauvegarde. Une éviction est acceptable pour un cache mais pas forcément pour une donnée métier critique. Documente TTL, taille, source de vérité et comportement en cache froid.",
          "examples": [
            {
              "title": "Mémoire et persistance",
              "language": "text",
              "code": "La réplication ne remplace pas une sauvegarde. Une éviction est acceptable pour un cache mais pas forcément pour une donnée métier critique. Documente TTL, taille, source de vérité et comportement en cache froid."
            }
          ]
        }
      ]
    },
    {
      "id": "cassandra",
      "title": "19. Cassandra et les colonnes larges",
      "summary": "Cassandra répartit les données autour des partitions et clés de clustering. Le modèle part des requêtes et des limites de taille de partition.",
      "concepts": [
        "Clé de partition et clustering",
        "Réplication et cohérence",
        "Modélisation par requête"
      ],
      "exercise": "Conçois une table pour consulter les événements d’un utilisateur par jour, du plus récent au plus ancien, en bornant la taille de partition.",
      "sections": [
        {
          "title": "Partitionner les données",
          "body": "La clé de partition détermine la distribution ; les colonnes de clustering ordonnent les lignes dans la partition. Une partition trop grande dégrade les performances : le bucketing temporel peut la borner.",
          "examples": [
            {
              "title": "Partitionner les données",
              "language": "sql",
              "code": "CREATE TABLE events_by_user_day (user_id uuid, event_day date, occurred_at timestamp, event_id timeuuid, event_type text, PRIMARY KEY ((user_id, event_day), occurred_at, event_id)) WITH CLUSTERING ORDER BY (occurred_at DESC, event_id DESC);"
            }
          ]
        },
        {
          "title": "Modéliser par requête",
          "body": "Cassandra ne vise pas les jointures ad hoc. Une table est souvent conçue pour une requête et peut dupliquer des données. Les écritures multiples ne forment pas automatiquement une transaction relationnelle.",
          "examples": [
            {
              "title": "Modéliser par requête",
              "language": "text",
              "code": "Cassandra ne vise pas les jointures ad hoc. Une table est souvent conçue pour une requête et peut dupliquer des données. Les écritures multiples ne forment pas automatiquement une transaction relationnelle."
            }
          ]
        },
        {
          "title": "Cohérence et opérations",
          "body": "Le niveau de cohérence règle le nombre de répliques qui doivent répondre. Le compromis dépend du facteur de réplication, de la latence et de la disponibilité. Teste les erreurs de quorum.",
          "examples": [
            {
              "title": "Cohérence et opérations",
              "language": "text",
              "code": "Le niveau de cohérence règle le nombre de répliques qui doivent répondre. Le compromis dépend du facteur de réplication, de la latence et de la disponibilité. Teste les erreurs de quorum."
            }
          ]
        }
      ]
    },
    {
      "id": "graphes",
      "title": "20. Bases orientées graphes",
      "summary": "Les graphes représentent explicitement les entités et leurs relations. Ils sont utiles lorsque le parcours des relations est au cœur du problème.",
      "concepts": [
        "Nœuds, relations et propriétés",
        "Cypher et parcours",
        "Index, cardinalité et profondeur"
      ],
      "exercise": "Modélise utilisateurs, produits et achats, puis écris une requête de recommandation basée sur les achats d’utilisateurs similaires.",
      "sections": [
        {
          "title": "Modèle de graphe",
          "body": "Les nœuds représentent les entités, les relations portent un type et des propriétés. La direction et le type des relations rendent explicites les parcours.",
          "examples": [
            {
              "title": "Modèle de graphe",
              "language": "cypher",
              "code": "CREATE (u:User {id: \"u-1\", name: \"Ada\"}) CREATE (p:Product {id: \"p-1\", name: \"Keyboard\"}) CREATE (u)-[:VIEWED]->(p);"
            }
          ]
        },
        {
          "title": "Parcourir avec Cypher",
          "body": "Cypher décrit un motif de graphe. La taille du parcours peut exploser si les relations ont une forte cardinalité ou si la profondeur est sans limite. Ancre la requête sur un identifiant sélectif et limite le résultat.",
          "examples": [
            {
              "title": "Parcourir avec Cypher",
              "language": "cypher",
              "code": "MATCH (u:User {id: $userId})-[:PURCHASED]->(:Product)<-[:PURCHASED]-(peer:User)-[:PURCHASED]->(p:Product) WHERE NOT (u)-[:PURCHASED]->(p) RETURN p.id, count(DISTINCT peer) AS score ORDER BY score DESC LIMIT 10;"
            }
          ]
        },
        {
          "title": "Indexer et gouverner",
          "body": "Les contraintes d’unicité sur les identifiants métier évitent les doublons. Protège les bases graphes contre les parcours coûteux, contrôle les permissions et mesure les requêtes fréquentes.",
          "examples": [
            {
              "title": "Indexer et gouverner",
              "language": "cypher",
              "code": "CREATE CONSTRAINT user_id_unique IF NOT EXISTS FOR (u:User) REQUIRE u.id IS UNIQUE;"
            }
          ]
        }
      ]
    },
    {
      "id": "choix-technologie",
      "title": "21. Comparer et choisir une technologie",
      "summary": "Le choix repose sur modèle, accès, invariants, coûts et compétences opérationnelles. Un système polyglotte n’est utile que si ses bénéfices compensent sa complexité.",
      "concepts": [
        "Matrice de décision SQL/NoSQL",
        "Coût total et compétences",
        "Persistance polyglotte et cohérence"
      ],
      "exercise": "Compare PostgreSQL, MongoDB et Redis pour panier, paiement, catalogue et classement temps réel. Définis la source de vérité de chaque donnée.",
      "sections": [
        {
          "title": "Comparer selon les exigences",
          "body": "Évalue requêtes, relations, transactions, cohérence, latence, volume, sauvegarde, observabilité et coût. Les benchmarks doivent reproduire les données et opérations réelles.",
          "examples": [
            {
              "title": "Comparer selon les exigences",
              "language": "text",
              "code": "Évalue requêtes, relations, transactions, cohérence, latence, volume, sauvegarde, observabilité et coût. Les benchmarks doivent reproduire les données et opérations réelles."
            }
          ]
        },
        {
          "title": "Persistance polyglotte",
          "body": "Plusieurs bases peuvent être pertinentes, mais chacune ajoute sauvegardes, surveillance, droits, déploiement et cohérence inter-systèmes. N’ajoute pas un moteur sans besoin explicite.",
          "examples": [
            {
              "title": "Persistance polyglotte",
              "language": "text",
              "code": "Plusieurs bases peuvent être pertinentes, mais chacune ajoute sauvegardes, surveillance, droits, déploiement et cohérence inter-systèmes. N’ajoute pas un moteur sans besoin explicite."
            }
          ]
        },
        {
          "title": "Décider et réévaluer",
          "body": "Une décision d’architecture est une hypothèse à valider. Définis métriques et seuils de réexamen. Le coût total inclut ingénierie, astreinte, migrations, sauvegarde et incidents.",
          "examples": [
            {
              "title": "Décider et réévaluer",
              "language": "text",
              "code": "Une décision d’architecture est une hypothèse à valider. Définis métriques et seuils de réexamen. Le coût total inclut ingénierie, astreinte, migrations, sauvegarde et incidents."
            }
          ]
        }
      ]
    },
    {
      "id": "node-typescript",
      "title": "22. Intégrer MongoDB avec Node.js et TypeScript",
      "summary": "L’intégration applicative gère le pool, la validation runtime, les erreurs et la séparation entre HTTP, métier et accès aux données.",
      "concepts": [
        "Pilote officiel et cycle de vie du client",
        "Types et validation runtime",
        "Repository pattern et erreurs"
      ],
      "exercise": "Crée un repository TypeScript qui lit un produit par ID et modifie son prix, valide l’entrée et traite le cas absent.",
      "sections": [
        {
          "title": "Gérer le client",
          "body": "Réutilise un client MongoDB pour le processus plutôt qu’une connexion par requête. Le pilote gère le pool ; ferme le client à l’arrêt gracieux et configure des timeouts adaptés.",
          "examples": [
            {
              "title": "Gérer le client",
              "language": "typescript",
              "code": "import { MongoClient } from \"mongodb\"; const client = new MongoClient(process.env.MONGODB_URI!); await client.connect(); const products = client.db(\"shop\").collection(\"products\");"
            }
          ]
        },
        {
          "title": "Types et validation runtime",
          "body": "Les types génériques ne valident pas les documents à l’exécution. Valide les entrées avec un schéma runtime, convertis les identifiants et refuse les propriétés inattendues.",
          "examples": [
            {
              "title": "Types et validation runtime",
              "language": "typescript",
              "code": "type Product = { _id: string; name: string; price: number }; function isValidPrice(v: unknown): v is number { return typeof v === \"number\" && Number.isFinite(v) && v >= 0; }"
            }
          ]
        },
        {
          "title": "Séparer les responsabilités",
          "body": "Les contrôleurs traduisent HTTP, les services portent les invariants et les repositories encapsulent les requêtes. Retourne des DTO stables, pas les documents internes complets.",
          "examples": [
            {
              "title": "Séparer les responsabilités",
              "language": "typescript",
              "code": "const result = await products.updateOne({ _id: id }, { $set: { price } }); if (result.matchedCount !== 1) throw new Error(\"PRODUCT_NOT_FOUND\");"
            }
          ]
        }
      ]
    },
    {
      "id": "redis-api",
      "title": "23. Intégrer Redis à une API",
      "summary": "Redis réduit la latence mais introduit expiration, invalidation, concurrence et panne. Il faut définir explicitement le comportement de l’application.",
      "concepts": [
        "Cache-aside et clés déterministes",
        "Cache stampede et invalidation",
        "Limitation de débit atomique"
      ],
      "exercise": "Conçois un cache pour GET /products/:id et un rate limiter par utilisateur, avec clés, TTL et politique de panne.",
      "sections": [
        {
          "title": "Clés stables",
          "body": "Les clés doivent inclure le périmètre pertinent : identifiant, tenant, langue ou version. Évite les secrets. Le TTL limite la durée de vie, mais ne garantit pas la fraîcheur immédiate.",
          "examples": [
            {
              "title": "Clés stables",
              "language": "text",
              "code": "tenant:42:product:abc:locale:fr"
            }
          ]
        },
        {
          "title": "Éviter le cache stampede",
          "body": "Quand une clé expire, de nombreuses requêtes peuvent recalculer la même valeur. Envisage jitter, verrou court, préchauffe ou stale-while-revalidate. Teste sous charge.",
          "examples": [
            {
              "title": "Éviter le cache stampede",
              "language": "text",
              "code": "Quand une clé expire, de nombreuses requêtes peuvent recalculer la même valeur. Envisage jitter, verrou court, préchauffe ou stale-while-revalidate. Teste sous charge."
            }
          ]
        },
        {
          "title": "Limiter le débit atomiquement",
          "body": "Incrément et expiration doivent être atomiques. Deux commandes séparées créent une course ; un script Lua peut regrouper l’opération. Définis le comportement si Redis est indisponible.",
          "examples": [
            {
              "title": "Limiter le débit atomiquement",
              "language": "lua",
              "code": "local n = redis.call(\"INCR\", KEYS[1]); if n == 1 then redis.call(\"EXPIRE\", KEYS[1], ARGV[1]) end; return n"
            }
          ]
        }
      ]
    },
    {
      "id": "securite-app",
      "title": "24. Sécurité applicative et injection NoSQL",
      "summary": "Les filtres construits à partir d’entrées non fiables peuvent devenir des requêtes inattendues. Défense : validation, autorisation, privilèges minimaux et limites de ressources.",
      "concepts": [
        "Injection d’opérateurs",
        "Validation et autorisation",
        "Limites de pagination, taille et temps"
      ],
      "exercise": "Réécris une route qui accepte directement req.query comme filtre MongoDB afin qu’elle n’accepte que des paramètres validés et autorisés.",
      "sections": [
        {
          "title": "Ne pas accepter un filtre arbitraire",
          "body": "Le client ne doit pas envoyer librement des opérateurs comme `$ne` ou des objets imbriqués. Construis le filtre côté serveur à partir d’une liste de champs autorisés et de valeurs validées.",
          "examples": [
            {
              "title": "Ne pas accepter un filtre arbitraire",
              "language": "typescript",
              "code": "const filter = { tenantId: user.tenantId, status: allowedStatuses.includes(input.status) ? input.status : \"pending\" };"
            }
          ]
        },
        {
          "title": "Authentification et autorisation",
          "body": "Chaque requête doit vérifier l’accès au document dans le tenant ou périmètre de l’utilisateur. Inclure le périmètre dans les filtres de lecture et d’écriture réduit le risque d’accès direct non autorisé.",
          "examples": [
            {
              "title": "Authentification et autorisation",
              "language": "typescript",
              "code": "const order = await orders.findOne({ _id: orderId, tenantId: authenticatedUser.tenantId });"
            }
          ]
        },
        {
          "title": "Limiter les ressources",
          "body": "Borne taille du corps, nombre de résultats, durée des requêtes et complexité des filtres. Les regex utilisateur peuvent être coûteuses. Les erreurs publiques restent génériques ; les logs ne contiennent pas de secrets.",
          "examples": [
            {
              "title": "Limiter les ressources",
              "language": "text",
              "code": "Borne taille du corps, nombre de résultats, durée des requêtes et complexité des filtres. Les regex utilisateur peuvent être coûteuses. Les erreurs publiques restent génériques ; les logs ne contiennent pas de secrets."
            }
          ]
        }
      ]
    },
    {
      "id": "tests-observabilite",
      "title": "25. Tests, observabilité et optimisation",
      "summary": "Les tests couvrent comportements et pannes ; l’observabilité relie les métriques techniques aux parcours métier.",
      "concepts": [
        "Tests unitaires et intégration isolée",
        "Données reproductibles et concurrence",
        "Latence p95/p99 et requêtes lentes"
      ],
      "exercise": "Écris un plan de test pour une API de commandes couvrant cas nominal, absent, conflit, panne, doublon d’idempotence et charge.",
      "sections": [
        {
          "title": "Tests reproductibles",
          "body": "Utilise une base isolée et des données synthétiques. Chaque test prépare et nettoie son état. Les mocks ne reproduisent pas la sémantique des index, transactions et conflits du vrai moteur.",
          "examples": [
            {
              "title": "Tests reproductibles",
              "language": "text",
              "code": "Utilise une base isolée et des données synthétiques. Chaque test prépare et nettoie son état. Les mocks ne reproduisent pas la sémantique des index, transactions et conflits du vrai moteur."
            }
          ]
        },
        {
          "title": "Tester concurrence et panne",
          "body": "Synchronise les appels pour provoquer les conflits et vérifie l’invariant final. Injecte les erreurs réseau et confirme que les retries n’engendrent pas de doublons.",
          "examples": [
            {
              "title": "Tester concurrence et panne",
              "language": "text",
              "code": "Synchronise les appels pour provoquer les conflits et vérifie l’invariant final. Injecte les erreurs réseau et confirme que les retries n’engendrent pas de doublons."
            }
          ]
        },
        {
          "title": "Observabilité",
          "body": "Mesure latence par endpoint, taux d’erreur, connexions, saturation, requêtes lentes et cache hit. Les percentiles décrivent mieux les longues traînes que la moyenne. Protège les données personnelles dans les logs.",
          "examples": [
            {
              "title": "Observabilité",
              "language": "text",
              "code": "Mesure latence par endpoint, taux d’erreur, connexions, saturation, requêtes lentes et cache hit. Les percentiles décrivent mieux les longues traînes que la moyenne. Protège les données personnelles dans les logs."
            }
          ]
        }
      ]
    },
    {
      "id": "projet-final",
      "title": "26. Projet final : catalogue, commandes et cache",
      "summary": "Le projet réunit modèle documentaire, API Node.js/TypeScript, Redis, sécurité, tests et pratiques de production. Les choix doivent être justifiés et mesurés.",
      "concepts": [
        "MongoDB comme source de vérité",
        "Redis comme cache et limiteur de débit",
        "API REST, validation, tests et exploitation"
      ],
      "exercise": "Livrer un dépôt documenté avec API, modèle, scripts, tests, décisions d’architecture, mesures et guide de restauration.",
      "sections": [
        {
          "title": "Définir modèle et contrats",
          "body": "Crée les collections `products`, `orders`, `users` et `idempotency`. Justifie l’imbriquement et les références, ajoute validateurs et index, et distingue données de référence des snapshots historiques.",
          "examples": [
            {
              "title": "Définir modèle et contrats",
              "language": "javascript",
              "code": "{ productId: \"p-42\", nameAtPurchase: \"Clavier\", unitPrice: 79.9, quantity: 1 }"
            }
          ]
        },
        {
          "title": "Construire l’API et le cache",
          "body": "Expose des routes avec validation runtime, authentification et autorisation. MongoDB est la source de vérité ; Redis accélère certaines lectures. Définis le comportement en panne et l’invalidation après écriture.",
          "examples": [
            {
              "title": "Construire l’API et le cache",
              "language": "text",
              "code": "Expose des routes avec validation runtime, authentification et autorisation. MongoDB est la source de vérité ; Redis accélère certaines lectures. Définis le comportement en panne et l’invalidation après écriture."
            }
          ]
        },
        {
          "title": "Livrer et exploiter",
          "body": "Le projet est reproductible avec scripts, données synthétiques, tests d’intégration, scénarios de panne, métriques et restauration testée. Mesure les requêtes avant de prétendre qu’un index améliore les performances.",
          "examples": [
            {
              "title": "Livrer et exploiter",
              "language": "text",
              "code": "Le projet est reproductible avec scripts, données synthétiques, tests d’intégration, scénarios de panne, métriques et restauration testée. Mesure les requêtes avant de prétendre qu’un index améliore les performances."
            }
          ]
        }
      ]
    }
  ],
  "references": [
    {
      "title": "MongoDB Manual — Documentation officielle",
      "url": "https://www.mongodb.com/docs/manual/"
    },
    {
      "title": "MongoDB — Data Modeling",
      "url": "https://www.mongodb.com/docs/manual/data-modeling/"
    },
    {
      "title": "MongoDB — Aggregation",
      "url": "https://www.mongodb.com/docs/manual/aggregation/"
    },
    {
      "title": "MongoDB — Indexes",
      "url": "https://www.mongodb.com/docs/manual/indexes/"
    },
    {
      "title": "MongoDB — Transactions",
      "url": "https://www.mongodb.com/docs/manual/core/transactions/"
    },
    {
      "title": "MongoDB — Replication",
      "url": "https://www.mongodb.com/docs/manual/replication/"
    },
    {
      "title": "MongoDB — Sharding",
      "url": "https://www.mongodb.com/docs/manual/sharding/"
    },
    {
      "title": "MongoDB Node.js Driver",
      "url": "https://www.mongodb.com/docs/drivers/node/current/"
    },
    {
      "title": "Redis Documentation",
      "url": "https://redis.io/docs/latest/"
    },
    {
      "title": "Redis Data types",
      "url": "https://redis.io/docs/latest/develop/data-types/"
    },
    {
      "title": "Apache Cassandra Documentation",
      "url": "https://cassandra.apache.org/doc/latest/"
    },
    {
      "title": "Neo4j Cypher Manual",
      "url": "https://neo4j.com/docs/cypher-manual/current/"
    },
    {
      "title": "OWASP NoSQL Security Cheat Sheet",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/NoSQL_Security_Cheat_Sheet.html"
    },
    {
      "title": "Twelve-Factor App — Configuration",
      "url": "https://12factor.net/config"
    },
    {
      "title": "Node.js Test Runner",
      "url": "https://nodejs.org/api/test.html"
    }
  ],
  "finalProject": {
    "title": "API de catalogue et de commandes avec MongoDB et Redis",
    "description": "Construis une API REST Node.js/TypeScript pour un catalogue et des commandes. MongoDB stocke les documents métier et Redis accélère certaines lectures et limite le débit. Le projet démontre une modélisation documentée, la gestion des invariants, la sécurité, des tests d’intégration et un plan d’exploitation.",
    "criteria": [
      "Modèle documenté avec requêtes cibles, cardinalités, index et duplication.",
      "Validation runtime des entrées et validation de schéma pour les documents critiques.",
      "Routes REST avec authentification, autorisation et filtres construits côté serveur.",
      "Gestion des erreurs, timeouts, idempotence et transitions concurrentes.",
      "TTL, invalidation et comportement de Redis en panne explicités.",
      "Tests d’intégration isolés incluant conflits et retries.",
      "Index justifiés par explain et un jeu de données reproductible.",
      "Configuration par environnement, secrets hors dépôt, logs et métriques.",
      "Sauvegarde et restauration testées, procédures d’exploitation documentées.",
      "CI exécutant typecheck, tests et build."
    ]
  }
};
