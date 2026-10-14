import type { Course } from './types';

export const stateManagementCourse: Course = {
  id: 'gestion-etat-react',
  title: 'Gestion d’état avancée avec React',
  category: 'Bibliothèque',
  tags: ['react', 'state-management', 'zustand', 'redux-toolkit', 'jotai', 'tanstack-query', 'typescript'],
  description: 'Choisir et mettre en œuvre une stratégie de gestion d’état avec Context et useReducer, Zustand, Redux Toolkit, Jotai et TanStack Query. Distinguer état d’interface, état métier partagé et données serveur, puis tester et comparer les architectures.',
  level: 'Intermédiaire à avancé',
  duration: '10 à 14 heures, projet final inclus',
  prerequisites: ['Connaître les composants React, les props, useState, useEffect et les hooks.', 'Savoir écrire des fonctions, des unions TypeScript et du code asynchrone.', 'Comprendre les bases de HTTP et des API JSON.'],
  objectives: [
    'Distinguer état local, état client partagé, état dérivé et état serveur.',
    'Éviter les états dupliqués et les effets de synchronisation inutiles.',
    'Implémenter une solution légère avec Context et useReducer.',
    'Créer des stores typés avec Zustand, Redux Toolkit et Jotai.',
    'Gérer cache, mutations, invalidation et états réseau avec TanStack Query.',
    'Tester les transitions, isoler les stores et choisir une architecture adaptée.'
  ],
  modules: [
    {
      id: 'modeles-etat',
      title: '1. Modèles d’état et critères de choix',
      summary: 'La bonne solution dépend de la nature des données, de leur durée de vie, de leurs consommateurs et de la manière dont elles sont modifiées.',
      concepts: ['État local, état partagé client, état dérivé et état serveur', 'Source de vérité unique et normalisation des données', 'Critères de choix : complexité, traçabilité, granularité, cache et outillage'],
      exercise: 'Pour une boutique, classe recherche, panneau ouvert, panier, session, catalogue API et préférences. Justifie où vit chaque donnée et élimine les valeurs calculables.',
      sections: [
        { title: 'Les catégories d’état', body: 'L’état local concerne généralement un composant ou une petite sous-arborescence : champ en cours de saisie, accordéon ouvert ou onglet sélectionné. L’état client partagé représente une décision de l’interface ou du domaine utilisée par plusieurs zones : panier, filtres globaux ou brouillon multi-étapes. L’état serveur est une copie en cache de données détenues par une API ; elle peut devenir périmée et nécessite une stratégie de revalidation. L’état dérivé se calcule à partir d’autres valeurs : ne le stocke pas si tu peux le calculer simplement.', examples: [{ title: 'Dériver au lieu de dupliquer', language: 'tsx', code: 'type Product = { id: string; name: string; price: number };\n\nfunction CartSummary({ products, query }: { products: Product[]; query: string }) {\n  const visible = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));\n  const total = products.reduce((sum, product) => sum + product.price, 0);\n  return <p>{visible.length} produit(s) visible(s) · Total : {total.toFixed(2)} €</p>;\n}' }] },
        { title: 'Éviter les sources de vérité concurrentes', body: 'Stocker le même fait dans plusieurs états oblige à synchroniser les copies et crée des états impossibles. Par exemple, conserve les lignes du panier, puis calcule le nombre d’articles et le total. Ne conserve pas simultanément un produit complet dans plusieurs composants si un identifiant stable suffit. La normalisation est utile lorsque plusieurs vues modifient les mêmes entités ; elle ajoute toutefois une complexité qui ne se justifie pas pour chaque petit formulaire.', examples: [{ title: 'Modèle normalisé minimal', language: 'ts', code: 'type Todo = { id: string; title: string; done: boolean };\ntype TodoState = { byId: Record<string, Todo>; ids: string[] };\n\nconst initialState: TodoState = { byId: {}, ids: [] };\n// Les listes conservent les identifiants ; les entités n’ont qu’une source de vérité.' }] },
        { title: 'Arbre de décision', body: 'Commence par useState ou useReducer si l’état est local. Utilise Context quand une valeur stable doit être disponible dans une sous-arborescence, en surveillant les rendus provoqués par les changements de valeur. Choisis une bibliothèque de store client quand les transitions, les sélecteurs ou les consommateurs deviennent nombreux. Pour des données distantes, privilégie une bibliothèque conçue pour le cache serveur plutôt que de réinventer loading, erreurs, déduplication et invalidation avec useEffect.', examples: [{ title: 'État serveur et état client sont distincts', language: 'ts', code: 'type UiState = { cartOpen: boolean; selectedTab: "details" | "reviews" };\ntype ApiProduct = { id: string; name: string; updatedAt: string };\n// UiState relève du client ; ApiProduct est une donnée serveur mise en cache.' }] },
        { title: 'Installer seulement les outils retenus', body: 'Ces bibliothèques sont des dépendances séparées : elles ne sont pas nécessaires au fonctionnement du catalogue de cours. Dans ton propre projet, installe seulement la solution choisie et consulte sa documentation pour la version utilisée. Les exemples Redux avec hooks typés supposent une version récente de React Redux. Ne cumule pas plusieurs stores par défaut : chaque abstraction doit répondre à un besoin explicite.', examples: [{ title: 'Commandes d’installation selon le choix', language: 'bash', code: `# Choisis une seule solution de store client selon le besoin\nnpm install zustand\nnpm install @reduxjs/toolkit react-redux\nnpm install jotai\n\n# Cache des données serveur, complémentaire à un store client\nnpm install @tanstack/react-query` }] }
      ,
        {
          "title": "Approfondissement — classer une donnée avant de choisir une bibliothèque",
          "body": "Une décision de gestion d’état commence par la question : qui est propriétaire de cette donnée, qui la modifie, combien de temps doit-elle vivre et peut-elle devenir périmée ? L’état de saisie éphémère reste local. Une sélection partagée peut vivre dans un store client. Une liste venant d’une API reste une donnée serveur mise en cache. Les totaux, compteurs et résultats filtrés se calculent à partir de leur source au lieu d’être synchronisés par effets.",
          "examples": [
            {
              "title": "Matrice de décision concrète",
              "language": "ts",
              "code": "type Ownership = \"local-ui\" | \"shared-client\" | \"server-cache\" | \"derived\";\nconst ownership: Record<string, Ownership> = { searchInput: \"local-ui\", cart: \"shared-client\", products: \"server-cache\", cartTotal: \"derived\" };"
            }
          ]
        },
        {
          "title": "Atelier corrigé — supprimer les doublons",
          "body": "Pour chaque champ du modèle, documente la source de vérité et les règles de mise à jour. Si deux composants doivent modifier le même panier, ils doivent appeler les mêmes actions ou mutation métier. Le nombre d’outils n’est pas un objectif : n’ajoute pas Zustand, Redux et Jotai ensemble sans raison distincte.",
          "examples": [
            {
              "title": "Total calculé au rendu",
              "language": "ts",
              "code": "type CartLine = { price: number; quantity: number };\nconst total = cartLines.reduce((sum, line) => sum + line.price * line.quantity, 0);"
            }
          ]
        }
      ]
    },
    {
      id: 'context-reducer',
      title: '2. Context + useReducer',
      summary: 'Une solution native à React adaptée aux états partagés d’une sous-arborescence, avec transitions explicites et sans bibliothèque externe.',
      concepts: ['Actions discriminées et reducer pur', 'Séparation lecture/dispatch et stabilité des valeurs Context', 'Limites de granularité et de fréquence des mises à jour'],
      exercise: 'Construis un panier avec add, remove et clear. Empêche les quantités négatives, type les actions avec une union discriminée et teste chaque transition.',
      sections: [
        { title: 'Reducer pur et actions explicites', body: 'Un reducer reçoit un état et une action, puis retourne le nouvel état sans modifier l’ancien. Les actions décrivent une intention plutôt qu’une mutation arbitraire. Les unions discriminées rendent les cas exhaustifs et aident TypeScript à vérifier les payloads. Évite les appels réseau, les dates aléatoires et les écritures de stockage dans le reducer : ces effets doivent rester à l’extérieur.', examples: [{ title: 'Reducer typé', language: 'tsx', code: 'type CartItem = { id: string; quantity: number };\ntype CartState = { items: CartItem[] };\ntype CartAction =\n  | { type: "added"; id: string }\n  | { type: "removed"; id: string }\n  | { type: "cleared" };\n\nfunction cartReducer(state: CartState, action: CartAction): CartState {\n  switch (action.type) {\n    case "added": {\n      const found = state.items.some((item) => item.id === action.id);\n      return { items: found\n        ? state.items.map((item) => item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item)\n        : [...state.items, { id: action.id, quantity: 1 }] };\n    }\n    case "removed": return { items: state.items.filter((item) => item.id !== action.id) };\n    case "cleared": return { items: [] };\n  }\n}' }] },
        { title: 'Fournir état et dispatch', body: 'Context évite de transmettre les props à chaque niveau. Le fournisseur doit être placé aussi bas que possible pour limiter la portée du couplage. Séparer le Context de lecture et celui de dispatch peut éviter que les composants qui ne font qu’envoyer des actions se réabonnent à la valeur de l’état. Le Context ne fournit pas à lui seul un système de sélecteurs fins : un changement de valeur peut provoquer le rendu des consommateurs concernés.', examples: [{ title: 'Deux Contexts distincts', language: 'tsx', code: 'import { createContext, useContext, useReducer } from "react";\nimport type { Dispatch, ReactNode } from "react";\n\nconst CartStateContext = createContext<CartState | null>(null);\nconst CartDispatchContext = createContext<Dispatch<CartAction> | null>(null);\n\nfunction CartProvider({ children }: { children: ReactNode }) {\n  const [state, dispatch] = useReducer(cartReducer, { items: [] });\n  return <CartDispatchContext.Provider value={dispatch}>\n    <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>\n  </CartDispatchContext.Provider>;\n}\nfunction useCartState() { const value = useContext(CartStateContext); if (!value) throw new Error("CartProvider manquant"); return value; }\nfunction useCartDispatch() { const value = useContext(CartDispatchContext); if (!value) throw new Error("CartProvider manquant"); return value; }' }] },
        { title: 'Quand Context devient insuffisant', body: 'Context + useReducer reste lisible pour un état circonscrit et des transitions relativement simples. Si de nombreux composants ne lisent chacun qu’une petite partie d’un état très actif, les mises à jour peuvent provoquer trop de rendus. Une séparation manuelle en plusieurs Contexts peut aider, mais ne transforme pas Context en store à sélecteurs. Mesure avant de migrer et évite d’ajouter une bibliothèque seulement parce que l’application possède plusieurs composants.', examples: [{ title: 'Composant consommateur', language: 'tsx', code: 'function CartButton() {\n  const dispatch = useCartDispatch();\n  return <button onClick={() => dispatch({ type: "cleared" })}>Vider le panier</button>;\n}\n\nfunction CartCount() {\n  const { items } = useCartState();\n  const count = items.reduce((sum, item) => sum + item.quantity, 0);\n  return <output>{count} article(s)</output>;\n}' }] }
      ,
        {
          "title": "Approfondissement — reducer pur et invariant métier",
          "body": "Le reducer doit préserver les invariants à chaque transition. Pour un panier, une quantité ne peut pas devenir négative, un identifiant doit être stable et un ajout répété doit suivre une règle explicite. Garde les effets réseau hors du reducer ; déclenche-les depuis une action applicative ou une mutation dédiée. Les tests du reducer sont rapides et déterministes.",
          "examples": [
            {
              "title": "Actions métier explicites",
              "language": "ts",
              "code": "type CartAction = { type: \"added\"; id: string } | { type: \"removed\"; id: string } | { type: \"cleared\" };\nfunction cartReducer(state: CartState, action: CartAction): CartState {\n  switch (action.type) {\n    case \"added\": return addItem(state, action.id);\n    case \"removed\": return { ...state, items: state.items.filter(item => item.id !== action.id) };\n    case \"cleared\": return { items: [] };\n  }\n}"
            }
          ]
        },
        {
          "title": "Atelier corrigé — provider et contexte",
          "body": "Le Context sert à rendre le reducer et son dispatch accessibles dans un périmètre. Une séparation lecture/dispatch peut éviter que les composants qui ne lisent pas l’état s’abonnent à toutes ses évolutions. Les consommateurs doivent échouer clairement si le provider est absent. Pour des mises à jour fréquentes et de nombreux consommateurs, mesure le coût avant de choisir cette solution.",
          "examples": [
            {
              "title": "Hook de contexte explicite",
              "language": "tsx",
              "code": "const CartStateContext = createContext<CartState | null>(null);\nfunction useCartState() { const value = useContext(CartStateContext); if (value === null) throw new Error(\"CartProvider manquant\"); return value; }"
            }
          ]
        }
      ]
    },
    {
      id: 'zustand',
      title: '3. Zustand : store léger et sélecteurs',
      summary: 'Zustand expose un store avec état et actions, sans imposer de provider dans l’arbre React pour un store standard.',
      concepts: ['create, actions et mises à jour immuables', 'Sélecteurs pour ne s’abonner qu’à une portion utile', 'Persistance explicite et isolation des tests'],
      exercise: 'Implémente un store de panier avec addItem, removeItem et clear. Crée un composant qui lit uniquement le nombre d’articles, puis ajoute une persistance contrôlée.',
      sections: [
        { title: 'Créer un store typé', body: 'Zustand permet de regrouper l’état client et les actions dans un store. Les fonctions d’action utilisent set pour retourner les propriétés à modifier ; le store applique les mises à jour. Les tableaux et objets doivent être remplacés de manière immuable. Ne stocke pas les données serveur dans ce store par réflexe : TanStack Query ou un outil équivalent est généralement plus adapté au cache distant.', examples: [{ title: 'Store de panier minimal', language: 'tsx', code: 'import { create } from "zustand";\n\ntype Product = { id: string; title: string; price: number };\ntype CartItem = Product & { quantity: number };\ntype CartStore = {\n  items: CartItem[];\n  addItem: (product: Product) => void;\n  removeItem: (id: string) => void;\n  clear: () => void;\n};\n\nexport const useCartStore = create<CartStore>((set) => ({\n  items: [],\n  addItem: (product) => set((state) => {\n    const existing = state.items.find((item) => item.id === product.id);\n    return { items: existing\n      ? state.items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)\n      : [...state.items, { ...product, quantity: 1 }] };\n  }),\n  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),\n  clear: () => set({ items: [] }),\n}));' }] },
        { title: 'Sélecteurs et rendus', body: 'Un composant peut sélectionner uniquement la valeur dont il dépend. Cela limite les rendus déclenchés par les changements d’autres propriétés du store. Sélectionne des primitives ou utilise les outils de comparaison documentés par la version de Zustand utilisée lorsque tu retournes des objets composés. Ne recrée pas inutilement des structures complexes dans le sélecteur sans vérifier la stratégie d’égalité.', examples: [{ title: 'Sélection ciblée', language: 'tsx', code: 'function CartCount() {\n  const count = useCartStore((state) => state.items.length);\n  return <span>{count} produit(s)</span>;\n}\n\nfunction ClearCartButton() {\n  const clear = useCartStore((state) => state.clear);\n  return <button type="button" onClick={clear}>Vider le panier</button>;\n}' }] },
        { title: 'Persistance sans confiance aveugle', body: 'La persistance est utile pour les préférences ou un panier non sensible, mais le stockage navigateur peut être modifié par l’utilisateur et être indisponible ou contenir une ancienne forme de données. La persistance Zustand s’appuie sur le middleware persist et un stockage configuré. Prévois une version de schéma, une migration si nécessaire et une règle explicite pour les données à ne jamais stocker côté client : jetons sensibles et secrets ne doivent pas être écrits dans localStorage.', examples: [{ title: 'Persister une préférence', language: 'tsx', code: 'import { create } from "zustand";\nimport { persist, createJSONStorage } from "zustand/middleware";\n\ntype Preferences = { compactMode: boolean; toggleCompact: () => void };\nexport const usePreferences = create<Preferences>()(persist(\n  (set) => ({ compactMode: false, toggleCompact: () => set((state) => ({ compactMode: !state.compactMode })) }),\n  {\n    name: "app-preferences",\n    version: 1,\n    storage: createJSONStorage(() => localStorage),\n    partialize: (state) => ({ compactMode: state.compactMode }),\n  },\n));' }] }
      ,
        {
          "title": "Approfondissement — sélecteurs et références",
          "body": "Zustand permet de s’abonner à une partie du store. Un sélecteur qui retourne un objet neuf à chaque lecture peut provoquer des rendus supplémentaires selon la stratégie d’égalité utilisée. Sélectionne une primitive ou un champ précis lorsque possible, et regroupe les sélections avec les outils adaptés à la version. Les règles métier doivent être dans des actions cohérentes, pas dupliquées dans chaque composant.",
          "examples": [
            {
              "title": "Sélecteur ciblé",
              "language": "tsx",
              "code": "const count = useCartStore(state => state.items.length);\nconst addItem = useCartStore(state => state.addItem);\n// Le composant ne lit que les deux valeurs nécessaires."
            }
          ]
        },
        {
          "title": "Atelier corrigé — persistance sans données sensibles",
          "body": "Le middleware persist convient aux préférences ou à un panier non sensible, pas aux secrets. Filtre explicitement les propriétés persistées, versionne le schéma et prépare une migration si sa forme change. En rendu serveur, évite les accès au localStorage au niveau du module et préviens les divergences d’hydratation. Teste les données absentes, anciennes et corrompues.",
          "examples": [
            {
              "title": "Persistance limitée",
              "language": "tsx",
              "code": "persist(storeCreator, {\n  name: \"cart-preferences\",\n  version: 2,\n  partialize: state => ({ compactMode: state.compactMode }),\n  migrate: (persisted, version) => version < 2 ? migratePreferences(persisted) : persisted,\n});"
            }
          ]
        }
      ]
    },
    {
      id: 'redux-toolkit',
      title: '4. Redux Toolkit : transitions explicites et outillage',
      summary: 'Redux Toolkit réduit le code répétitif de Redux classique grâce aux slices, configureStore et aux mises à jour immuables sécurisées par Immer.',
      concepts: ['createSlice, reducers et actions générées', 'configureStore et RootState/AppDispatch inférés', 'Middleware, DevTools, selectors et séparation des responsabilités'],
      exercise: 'Crée un slice de favoris, configure le store, infère RootState et AppDispatch, puis teste les actions et branche un composant typé.',
      sections: [
        { title: 'Définir un slice', body: 'Un slice regroupe un nom, un état initial et des reducers ; Redux Toolkit génère les créateurs d’action correspondants. Dans un reducer de slice, le code peut sembler muter le draft car Immer produit une mise à jour immuable. Cette syntaxe est spécifique à la couche Immer de Redux Toolkit : elle ne doit pas être copiée dans un reducer React ordinaire ou dans un store Zustand sans vérifier son API.', examples: [{ title: 'Slice de favoris', language: 'ts', code: 'import { createSlice, type PayloadAction } from "@reduxjs/toolkit";\n\ntype FavoritesState = { ids: string[] };\nconst initialState: FavoritesState = { ids: [] };\n\nconst favoritesSlice = createSlice({\n  name: "favorites", initialState,\n  reducers: {\n    toggled(state, action: PayloadAction<string>) {\n      const index = state.ids.indexOf(action.payload);\n      if (index >= 0) state.ids.splice(index, 1);\n      else state.ids.push(action.payload);\n    },\n    cleared(state) { state.ids = []; },\n  },\n});\nexport const { toggled, cleared } = favoritesSlice.actions;\nexport default favoritesSlice.reducer;' }] },
        { title: 'Configurer le store et les types', body: 'configureStore installe des contrôles utiles et une configuration raisonnable par défaut. Infère RootState depuis store.getState et AppDispatch depuis store.dispatch plutôt que de recopier manuellement les formes. Le Provider rend le store disponible à l’arbre React ; les hooks typés évitent les casts dispersés. Un store global par application convient à de nombreuses SPA, mais les tests et le rendu serveur exigent de réfléchir à l’isolation par instance.', examples: [{ title: 'Store et hooks typés', language: 'tsx', code: 'import { configureStore } from "@reduxjs/toolkit";\nimport { Provider, useDispatch, useSelector } from "react-redux";\nimport favoritesReducer from "./favoritesSlice";\n\nexport const store = configureStore({ reducer: { favorites: favoritesReducer } });\nexport type RootState = ReturnType<typeof store.getState>;\nexport type AppDispatch = typeof store.dispatch;\nexport const useAppSelector = useSelector.withTypes<RootState>();\nexport const useAppDispatch = useDispatch.withTypes<AppDispatch>();\n\nfunction FavoriteCount() {\n  const count = useAppSelector((state) => state.favorites.ids.length);\n  return <span>{count} favori(s)</span>;\n}\n// À la racine : <Provider store={store}><App /></Provider>' }] },
        { title: 'Quand choisir Redux Toolkit', body: 'Redux Toolkit est intéressant quand de nombreuses fonctionnalités partagent un état client, que les transitions doivent être faciles à inspecter, ou que l’équipe a besoin d’un cadre conventionnel et de DevTools. Il n’est pas automatiquement meilleur pour un compteur ou un simple formulaire. Pour les données serveur, Redux Toolkit propose RTK Query ; évite de maintenir à la main un cache réseau complexe dans des slices si RTK Query ou TanStack Query couvre déjà le besoin. RTK Query est intégré à l’écosystème Redux Toolkit ; TanStack Query fonctionne indépendamment du store client choisi. Compare les deux selon l’architecture existante, les besoins de cache, l’équipe et le coût d’introduction, plutôt que de les installer tous les deux par défaut.', examples: [{ title: 'Action explicite depuis un composant', language: 'tsx', code: 'function FavoriteToggle({ productId }: { productId: string }) {\n  const dispatch = useAppDispatch();\n  const active = useAppSelector((state) => state.favorites.ids.includes(productId));\n  return <button aria-pressed={active} onClick={() => dispatch(toggled(productId))}>\n    {active ? "Retirer des favoris" : "Ajouter aux favoris"}\n  </button>;\n}' }] }
      ,
        {
          "title": "Approfondissement — Redux Toolkit n’exige pas des reducers manuels immuables",
          "body": "createSlice génère les actions et les reducers. Grâce à Immer, la syntaxe qui ressemble à une mutation dans un reducer de slice produit un nouvel état immuable ; cette facilité ne s’étend pas à la mutation arbitraire d’objets hors du reducer. Les règles métier restent déterministes, et les appels réseau appartiennent à un middleware, une thunk ou RTK Query selon le besoin.",
          "examples": [
            {
              "title": "Slice typée et transition",
              "language": "tsx",
              "code": "const counterSlice = createSlice({\n  name: \"counter\", initialState: { value: 0 },\n  reducers: { incremented(state) { state.value += 1; }, reset(state) { state.value = 0; } },\n});\nexport const { incremented, reset } = counterSlice.actions;"
            }
          ]
        },
        {
          "title": "Atelier corrigé — typer store et hooks",
          "body": "Dans une application TypeScript, dérive RootState et AppDispatch depuis le store réel et expose des hooks typés. Évite les types copiés à la main qui se désynchronisent. Choisis entre RTK Query et TanStack Query pour la couche serveur en fonction de l’écosystème et des besoins ; évite de conserver la même réponse API dans plusieurs caches.",
          "examples": [
            {
              "title": "Types dérivés du store",
              "language": "ts",
              "code": "export const store = configureStore({ reducer: { counter: counterSlice.reducer } });\nexport type RootState = ReturnType<typeof store.getState>;\nexport type AppDispatch = typeof store.dispatch;"
            }
          ]
        }
      ]
    },
    {
      id: 'jotai',
      title: '5. Jotai : état atomique et dérivé',
      summary: 'Jotai modélise l’état en atomes indépendants et permet de composer des valeurs dérivées, utile quand les consommateurs ne partagent que certaines données.',
      concepts: ['atom, useAtom, useAtomValue et useSetAtom', 'Atomes dérivés et dépendances', 'État atomique localisé, reset et tests'],
      exercise: 'Crée des atomes pour la recherche et les produits, puis un atome dérivé de résultats filtrés. Vérifie qu’un changement de recherche recalcule les résultats sans dupliquer le tableau.',
      sections: [
        { title: 'Atomes de lecture et écriture', body: 'Un atome représente une unité d’état. Les composants s’abonnent aux atomes qu’ils utilisent, ce qui permet de répartir l’état selon les dépendances plutôt que dans un unique gros objet. Les atomes sont des définitions ; leurs valeurs appartiennent à un store Jotai. Pour une application simple, les primitives React suffisent souvent, mais les atomes peuvent clarifier un état partagé composé de nombreuses petites valeurs.', examples: [{ title: 'Atome compteur', language: 'tsx', code: 'import { atom, useAtom } from "jotai";\n\nconst countAtom = atom(0);\nfunction Counter() {\n  const [count, setCount] = useAtom(countAtom);\n  return <button onClick={() => setCount((value) => value + 1)}>Compteur : {count}</button>;\n}' }] },
        { title: 'Atomes dérivés', body: 'Un atome dérivé calcule une valeur à partir d’autres atomes. Il aide à garder une seule source de vérité et rend la relation entre valeurs explicite. Évite de stocker les résultats filtrés ou le total si ces données se calculent directement à partir des atomes sources. Pour les calculs coûteux, mesure leur fréquence et envisage une stratégie de mémoïsation adaptée.', examples: [{ title: 'Recherche dérivée', language: 'tsx', code: 'import { atom, useAtom, useAtomValue } from "jotai";\n\ntype Product = { id: string; name: string };\nconst productsAtom = atom<Product[]>([]);\nconst queryAtom = atom("");\nconst filteredProductsAtom = atom((get) => {\n  const query = get(queryAtom).trim().toLowerCase();\n  return get(productsAtom).filter((product) => product.name.toLowerCase().includes(query));\n});\nfunction ProductSearch() {\n  const [query, setQuery] = useAtom(queryAtom);\n  const products = useAtomValue(filteredProductsAtom);\n  return <><input value={query} onChange={(event) => setQuery(event.target.value)} />\n    <p>{products.length} résultat(s)</p></>;\n}' }] },
        { title: 'Écriture ciblée et frontières', body: 'useSetAtom permet à un composant de modifier un atome sans lire sa valeur. C’est utile pour des boutons d’action qui n’ont pas besoin de se rendre à chaque changement. Un store Jotai peut être créé explicitement pour isoler des tests ou plusieurs instances ; en rendu serveur, ne partage pas accidentellement un état utilisateur entre requêtes. Vérifie aussi les versions et API de Jotai avant de copier un exemple dans un projet existant.', examples: [{ title: 'Composant qui écrit seulement', language: 'tsx', code: 'import { atom, useSetAtom } from "jotai";\nconst queryAtom = atom("");\nconst resetQueryAtom = atom(null, (_get, set) => set(queryAtom, ""));\nfunction ResetSearch() {\n  const reset = useSetAtom(resetQueryAtom);\n  return <button type="button" onClick={reset}>Effacer la recherche</button>;\n}' }] }
      ,
        {
          "title": "Approfondissement — graphe de dépendances atomiques",
          "body": "Les atomes permettent de composer de petites unités d’état et des valeurs dérivées. Une valeur calculée devrait être dérivée d’atomes sources plutôt que recopiée par un effet. Quand plusieurs atomes forment une transition métier indivisible, utilise un atome d’écriture ou une fonction de domaine pour conserver les invariants. Un Provider peut isoler des instances et faciliter les tests.",
          "examples": [
            {
              "title": "Atome dérivé",
              "language": "tsx",
              "code": "const priceAtom = atom(10);\nconst quantityAtom = atom(2);\nconst totalAtom = atom(get => get(priceAtom) * get(quantityAtom));\nfunction Total() { const total = useAtomValue(totalAtom); return <output>{total.toFixed(2)} €</output>; }"
            }
          ]
        },
        {
          "title": "Atelier corrigé — séparer lecture et écriture",
          "body": "Un composant qui ne fait que déclencher une action n’a pas besoin de s’abonner à la valeur qu’il modifie : useSetAtom limite sa lecture. Pour tester, rends le composant dans un Provider isolé et vérifie les résultats visibles. N’introduis pas un atom pour chaque variable locale sans bénéfice architectural.",
          "examples": [
            {
              "title": "Atome d’écriture",
              "language": "tsx",
              "code": "const resetAtom = atom(null, (_get, set) => { set(priceAtom, 0); set(quantityAtom, 0); });\nfunction ResetCart() { const reset = useSetAtom(resetAtom); return <button onClick={reset}>Réinitialiser</button>; }"
            }
          ]
        }
      ]
    },
    {
      id: 'tanstack-query',
      title: '6. TanStack Query : état serveur et cache',
      summary: 'TanStack Query gère le cycle de vie des données distantes : chargement, erreurs, cache, déduplication, invalidation, revalidation et mutations.',
      concepts: ['QueryClient, QueryClientProvider et clés de requête', 'useQuery, états réseau et erreurs HTTP', 'useMutation, invalidation, optimistic updates et annulation'],
      exercise: 'Crée une liste de tâches servie par une API. Gère chargement, erreur, état vide, création et invalidation du cache après mutation ; distingue les erreurs HTTP des erreurs réseau.',
      sections: [
        { title: 'Clés et requêtes', body: 'Une queryKey identifie une donnée mise en cache. Elle doit inclure les paramètres qui changent le résultat, par exemple un filtre ou un identifiant. Le fetcher doit vérifier response.ok car fetch ne rejette pas automatiquement les réponses HTTP 4xx/5xx. Un QueryClient doit avoir une durée de vie appropriée ; évite de le recréer à chaque rendu. L’instance au niveau du module convient à une SPA côté client ; en rendu serveur, crée une instance isolée par requête pour éviter de partager le cache entre utilisateurs. Les API exactes et les états exposés peuvent varier selon la version majeure installée.', examples: [{ title: 'Requête typée', language: 'tsx', code: 'import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";\n\nconst queryClient = new QueryClient();\ntype Todo = { id: string; title: string; completed: boolean };\nasync function fetchTodos(): Promise<Todo[]> {\n  const response = await fetch("/api/todos");\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  const payload: unknown = await response.json();\n  if (!Array.isArray(payload)) throw new Error("Réponse API invalide : liste de tâches attendue.");\n  const items: unknown[] = payload;\n  const todos = items.filter(isTodo);\n  if (todos.length !== items.length) {\n    throw new Error("Réponse API invalide : une tâche ne respecte pas le schéma.");\n  }\n  return todos;\n}\nfunction isTodo(value: unknown): value is Todo {\n  return typeof value === "object" && value !== null\n    && "id" in value && typeof value.id === "string"\n    && "title" in value && typeof value.title === "string"\n    && "completed" in value && typeof value.completed === "boolean";\n}\nfunction Todos() {\n  const query = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });\n  if (query.isPending) return <p role="status">Chargement…</p>;\n  if (query.isError) return <p role="alert">Impossible de charger les tâches.</p>;\n  if (query.data.length === 0) return <p>Aucune tâche.</p>;\n  return <ul>{query.data.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>;\n}\n// Fournir <QueryClientProvider client={queryClient}> à la racine.' }] },
        { title: 'Mutations et invalidation', body: 'Une mutation modifie les données côté serveur. Après son succès, invalide les clés concernées pour que les requêtes puissent être revalidées. L’invalidation est souvent plus simple et plus sûre qu’une modification optimiste. Une mise à jour optimiste améliore la réactivité, mais doit prévoir rollback, conflits et réponses hors ordre. Les règles d’autorisation restent toujours côté serveur : cacher un bouton ne protège pas une API.', examples: [{ title: 'Créer une tâche puis invalider', language: 'tsx', code: 'import { useMutation, useQueryClient } from "@tanstack/react-query";\n\nasync function createTodo(title: string): Promise<Todo> {\n  const response = await fetch("/api/todos", {\n    method: "POST", headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ title }),\n  });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  const payload: unknown = await response.json();\n  if (!isTodo(payload)) throw new Error("Réponse API invalide : tâche attendue.");\n  return payload;\n}\nfunction AddTodo() {\n  const client = useQueryClient();\n  const mutation = useMutation({\n    mutationFn: createTodo,\n    onSuccess: () => client.invalidateQueries({ queryKey: ["todos"] }),\n  });\n  return <button disabled={mutation.isPending} onClick={() => mutation.mutate("Apprendre React Query")}>\n    {mutation.isPending ? "Ajout…" : "Ajouter une tâche"}\n  </button>;\n}' }] },
        { title: 'Ne pas confondre cache et source d’autorité', body: 'Le cache client accélère l’interface mais n’est pas la base de données faisant autorité. Des données peuvent devenir périmées, être invalidées, échouer à se rafraîchir ou ne pas être accessibles à l’utilisateur courant. Définis les clés en fonction des paramètres et du périmètre de sécurité, vide ou isole le cache lors d’un changement d’identité si nécessaire, et ne place jamais de secrets dans les query keys. TanStack Query ne remplace ni la validation ni les permissions côté serveur.', examples: [{ title: 'Clé incluant le filtre', language: 'ts', code: 'const todosKey = (status: "all" | "open" | "done") => ["todos", { status }] as const;\n// useQuery({ queryKey: todosKey(status), queryFn: () => fetchTodosByStatus(status) })\n// Un changement de status sélectionne une entrée de cache distincte.' }] }
      ,
        {
          "title": "Approfondissement — QueryClient, clés et fraîcheur",
          "body": "La clé doit inclure chaque paramètre qui modifie la réponse, et être stable et structurée. staleTime contrôle quand les données sont considérées fraîches ; gcTime contrôle la conservation des requêtes inactives dans les versions récentes. Ne confonds pas ces durées avec une garantie de fraîcheur serveur. Configure un QueryClient stable dans une SPA et un client isolé par requête côté serveur.",
          "examples": [
            {
              "title": "Clé structurée par filtre",
              "language": "tsx",
              "code": "const tasksKey = (status: \"all\" | \"open\" | \"done\") => [\"tasks\", { status }] as const;\nconst query = useQuery({ queryKey: tasksKey(status), queryFn: () => fetchTasks(status), staleTime: 30_000 });"
            }
          ]
        },
        {
          "title": "Atelier corrigé — mutation et invalidation",
          "body": "Une mutation doit gérer l’état pending, l’échec et la cohérence du cache. Invalider les clés concernées après succès est souvent le premier choix. Pour une mise à jour optimiste, capture l’ancien cache, annule les requêtes en cours, applique la valeur provisoire et restaure en cas d’échec ; il faut aussi penser aux mutations concurrentes. La validation et l’autorisation restent côté serveur.",
          "examples": [
            {
              "title": "Mutation avec invalidation",
              "language": "tsx",
              "code": "const client = useQueryClient();\nconst mutation = useMutation({\n  mutationFn: createTask,\n  onSuccess: () => client.invalidateQueries({ queryKey: [\"tasks\"] }),\n});"
            }
          ]
        }
      ]
    },
    {
      id: 'tests-persistance',
      title: '7. Tests, persistance, concurrence et sécurité',
      summary: 'Un store doit être testable sans dépendre de l’ordre des tests ni laisser des données d’un utilisateur dans un autre contexte.',
      concepts: ['Tester reducers et actions indépendamment de l’interface', 'Réinitialiser les stores, QueryClient et localStorage entre tests', 'Gérer concurrence, données périmées, hydration et informations sensibles'],
      exercise: 'Écris des tests pour les transitions du panier, l’action de favoris, l’invalidation d’une query et le cas d’échec. Assure-toi que chaque test part d’un état isolé.',
      sections: [
        { title: 'Tester les transitions', body: 'Les reducers et actions pures peuvent être testés comme des fonctions : entrée, action, résultat attendu. Pour les composants, Testing Library doit vérifier le comportement visible et les rôles accessibles plutôt que la structure interne du store. Ne partage pas une instance globale mutable entre tests sans la réinitialiser ; sinon l’ordre d’exécution peut influer sur le résultat.', examples: [{ title: 'Test de reducer', language: 'ts', code: 'import { describe, expect, it } from "vitest";\n\ndescribe("cartReducer", () => {\n  it("ajoute une ligne sans muter l’état précédent", () => {\n    const before: CartState = { items: [] };\n    const after = cartReducer(before, { type: "added", id: "p1" });\n    expect(after.items).toEqual([{ id: "p1", quantity: 1 }]);\n    expect(before.items).toEqual([]);\n  });\n});' }] },
        { title: 'Persistance et hydratation', body: 'Le stockage local est disponible seulement dans certains environnements navigateur et peut échouer. Traite ses valeurs comme des entrées non fiables : valide la forme, migre les versions et prévois une valeur par défaut. Avec rendu serveur, évite d’accéder à window/localStorage au niveau du module et réfléchis aux différences entre le HTML initial et l’état réhydraté. Ne persiste que les données utiles et non sensibles.', examples: [{ title: 'Validation d’une valeur stockée', language: 'ts', code: 'type Preferences = { compact: boolean };\nfunction parsePreferences(raw: string | null): Preferences {\n  if (!raw) return { compact: false };\n  try {\n    const value: unknown = JSON.parse(raw);\n    if (typeof value === "object" && value !== null && "compact" in value && typeof value.compact === "boolean") {\n      return { compact: value.compact };\n    }\n  } catch { /* Données absentes ou corrompues : valeur par défaut. */ }\n  return { compact: false };\n}' }] },
        { title: 'Concurrence et cohérence', body: 'Deux mutations peuvent se terminer dans un ordre différent de celui de leur lancement. Les réponses peuvent alors écraser des données plus récentes. Utilise les identifiants, versions ou règles métier de l’API, invalide les caches après les mutations et rends les opérations idempotentes lorsque le contrat le permet. Les optimisations côté client améliorent l’expérience, mais ne remplacent pas les contraintes transactionnelles et la validation serveur.', examples: [{ title: 'Désactiver une soumission en cours', language: 'tsx', code: 'function SaveButton({ saving, onSave }: { saving: boolean; onSave: () => void }) {\n  return <button type="button" disabled={saving} onClick={onSave}>\n    {saving ? "Enregistrement…" : "Enregistrer"}\n  </button>;\n}\n// L’API doit tout de même gérer les doublons et les conflits concurrents.' }] }
      ,
        {
          "title": "Approfondissement — tests isolés et stockage non fiable",
          "body": "Un store global partagé entre tests peut conserver les données d’un test précédent. Fournis un état initial, réinitialise les stores ou crée une instance isolée. Teste les transitions métier séparément des composants. Les données persistées doivent être considérées comme externes : valide leur structure, traite les exceptions de stockage et n’y conserve jamais de secret.",
          "examples": [
            {
              "title": "Cas de test pour une transition",
              "language": "ts",
              "code": "it(\"refuse une quantité invalide\", () => {\n  const next = cartReducer(initialCart, { type: \"quantityChanged\", id: \"p1\", quantity: -1 });\n  expect(next).toEqual(initialCart);\n});"
            }
          ]
        },
        {
          "title": "Atelier corrigé — tester les scénarios qui cassent",
          "body": "Couvre au minimum : stockage vide, JSON corrompu, version précédente, double clic, réponse réseau en erreur, mutation hors ordre et changement d’utilisateur. Pour l’interface, vérifie les états chargement, succès, vide et erreur. Un test doit décrire un comportement observable ou un invariant important, pas simplement exécuter une fonction sans assertion utile.",
          "examples": [
            {
              "title": "Validation d’un nombre",
              "language": "ts",
              "code": "function validQuantity(value: unknown): value is number {\n  return typeof value === \"number\" && Number.isInteger(value) && value > 0;\n}"
            }
          ]
        }
      ]
    },
    {
      id: 'architecture-comparaison',
      title: '8. Comparaison, architecture et migration',
      summary: 'Les bibliothèques se distinguent par leur modèle mental et leur outillage ; la décision doit venir des besoins mesurés et de la durée de vie des données.',
      concepts: ['Comparer granularité, conventions, DevTools, apprentissage et cache', 'Définir des frontières entre UI, domaine, store client et API', 'Migrer progressivement sans maintenir deux sources de vérité'],
      exercise: 'Réalise le projet final comparatif Zustand/Redux Toolkit. Ajoute une note d’architecture expliquant pourquoi les données serveur restent dans TanStack Query et quand Context suffit.',
      sections: [
        { title: 'Comparaison pratique', body: 'Zustand est souvent apprécié pour son API concise et ses sélecteurs. Redux Toolkit apporte des conventions explicites, un écosystème mature et de bons outils de diagnostic. Jotai convient à un modèle en atomes composables. Context + useReducer est intégré à React et adapté à un périmètre limité. TanStack Query traite le cycle de vie des données serveur. Ces outils ne sont pas tous des concurrents directs : une application peut utiliser un store client et un cache serveur ensemble, mais doit éviter de dupliquer les mêmes données dans les deux.', examples: [{ title: 'Tableau de décision', language: 'text', code: 'Besoin local simple                 → useState / useReducer\nÉtat partagé dans une sous-arborescence → Context + useReducer\nStore client léger avec sélecteurs    → Zustand\nTransitions conventionnelles/outillage → Redux Toolkit\nÉtat atomique composable              → Jotai\nCache et synchronisation d’API         → TanStack Query' }] },
        { title: 'Frontières et modules', body: 'Les composants devraient appeler des actions ou des hooks de domaine plutôt que dépendre de détails internes partout. Garde les appels HTTP, la validation de réponses et les règles métier dans des modules dédiés. Évite les imports circulaires entre slices ou stores. Le store ne doit pas devenir un fourre-tout : l’état d’un formulaire éphémère peut rester local, les données serveur dans le cache, et seules les informations client réellement partagées dans le store.', examples: [{ title: 'Séparer la fonction API du composant', language: 'ts', code: 'type Product = { id: string; name: string };\nexport async function getProduct(id: string): Promise<Product> {\n  const response = await fetch(`/api/products/${encodeURIComponent(id)}`);\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  const value: unknown = await response.json();\n  if (typeof value !== "object" || value === null || !("id" in value) || !("name" in value)) {\n    throw new Error("Réponse produit invalide");\n  }\n  if (typeof value.id !== "string" || typeof value.name !== "string") throw new Error("Réponse produit invalide");\n  return { id: value.id, name: value.name };\n}' }] },
        { title: 'Plan de migration', body: 'Identifie d’abord les duplications et les consommateurs. Définis un contrat de lecture et des actions, migre un domaine à la fois, puis supprime l’ancien état après vérification. Ne maintiens pas durablement un état dans Context et dans Zustand avec des effets qui se recopient l’un l’autre : cela crée des courses et rend les tests difficiles. Ajoute des tests avant la migration et compare le comportement observable après chaque étape.', examples: [{ title: 'Contrat de domaine indépendant', language: 'ts', code: 'export type FavoritesPort = {\n  isFavorite: (id: string) => boolean;\n  toggleFavorite: (id: string) => void;\n};\n// L’interface métier dépend du contrat ; l’implémentation peut évoluer sans réécrire tous les composants.' }] }
      ,
        {
          "title": "Approfondissement — ne pas comparer des outils de catégories différentes",
          "body": "Zustand, Redux Toolkit et Jotai gèrent surtout l’état client partagé, avec des modèles différents. TanStack Query gère le cycle de vie des données serveur ; ce n’est pas un remplacement direct du store client. RTK Query fournit une alternative intégrée à l’écosystème Redux pour les données serveur. Context + useReducer peut suffire pour un périmètre limité. Compare les outils sur un même cas fonctionnel et des critères explicités.",
          "examples": [
            {
              "title": "Frontières recommandées",
              "language": "text",
              "code": "Composant → action/hook de domaine → store client\nComposant → hook de requête → cache serveur → API\nDonnées dérivées → calcul pur à partir de la source de vérité"
            }
          ]
        },
        {
          "title": "Atelier corrigé — migration progressive",
          "body": "Avant une migration, mesure les duplications, repère les consommateurs et écris des tests sur les invariants. Migre une fonctionnalité à la fois, définis une API de lecture et d’écriture, puis supprime l’ancien état. Ne synchronise pas durablement deux stores par effets : les courses et les boucles de mise à jour deviennent difficiles à diagnostiquer. Documente les compromis et les coûts de maintenance.",
          "examples": [
            {
              "title": "Contrat indépendant du store",
              "language": "ts",
              "code": "type FavoritesPort = { isFavorite(id: string): boolean; toggleFavorite(id: string): void };\n// Les composants dépendent du contrat fonctionnel, pas de la forme interne du store."
            }
          ]
        }
      ]
    }
  ],
  references: [
    { title: 'React — Managing State', url: 'https://react.dev/learn/managing-state' },
    { title: 'React — Scaling Up with Reducer and Context', url: 'https://react.dev/learn/scaling-up-with-reducer-and-context' },
    { title: 'Zustand — Documentation', url: 'https://zustand.docs.pmnd.rs/' },
    { title: 'Redux Toolkit — Documentation', url: 'https://redux-toolkit.js.org/' },
    { title: 'Redux Toolkit — TypeScript Quick Start', url: 'https://redux-toolkit.js.org/tutorials/typescript' },
    { title: 'Jotai — Documentation', url: 'https://jotai.org/' },
    { title: 'TanStack Query — Documentation', url: 'https://tanstack.com/query/latest/docs/framework/react/overview' },
    { title: 'Testing Library — React', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
    { title: 'TypeScript — Everyday Types', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html' }
  ],
  finalProject: {
    title: 'Gestionnaire de tâches : Zustand contre Redux Toolkit',
    description: 'Construis deux versions fonctionnelles du même gestionnaire de tâches React + TypeScript, l’une avec Zustand et l’autre avec Redux Toolkit. Les deux doivent proposer ajout, édition, complétion, suppression, filtre, compteur dérivé et persistance des préférences. Ajoute une API simulée ou réelle gérée par TanStack Query pour montrer clairement la différence entre état client et état serveur. Compare la quantité de code, la lisibilité des transitions, les sélecteurs, les tests, le débogage et le coût de maintenance. Les versions peuvent vivre dans deux dossiers distincts afin d’éviter de mélanger les stores.',
    criteria: [
      'Les deux versions proposent les mêmes fonctionnalités et règles métier.',
      'Les types TypeScript sont explicites ; aucune utilisation de any pour contourner le modèle.',
      'Les compteurs et résultats filtrés sont dérivés plutôt que dupliqués dans le store.',
      'Les données serveur sont séparées de l’état client et les mutations gèrent erreurs et invalidation.',
      'Les actions et transitions critiques sont couvertes par des tests isolés.',
      'Les tests UI vérifient les comportements visibles et les états de chargement/erreur.',
      'La persistance est versionnée ou validée et ne stocke aucun secret.',
      'Un README décrit les commandes, l’architecture, les compromis et les résultats de comparaison.',
      'Une décision finale justifie la solution retenue selon le contexte, sans déclarer une bibliothèque universellement supérieure.'
    ]
  }
};
