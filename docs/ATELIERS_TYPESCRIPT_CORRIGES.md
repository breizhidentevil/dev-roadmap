# Ateliers TypeScript — corrigés commentés

Ce document complète les 20 exercices du cours TypeScript approfondi. Les solutions sont des propositions de référence, pas les seules implémentations valides. Les extraits sont conçus pour TypeScript 5.9 avec `strict: true`. Ils doivent être copiés dans des fichiers de test dédiés avant d'être intégrés à un projet.

## Comment utiliser les corrigés

1. Résous d'abord l'atelier sans lire la solution.
2. Compare le contrat demandé, les cas limites et les tests, pas seulement la syntaxe.
3. Lance le typecheck dans ton environnement et vérifie les erreurs négatives avec `@ts-expect-error`.
4. Pour toute donnée externe, ajoute des tests d'exécution : le système de types ne valide pas les données à lui seul.

---

## 1. Modèle mental — valider une valeur inconnue

```ts
type User = { id: string; email: string };

function parseUser(input: unknown): User {
  if (typeof input !== "object" || input === null) {
    throw new Error("Utilisateur attendu");
  }

  if (!("id" in input) || !("email" in input)) {
    throw new Error("Champs id et email requis");
  }

  const { id, email } = input;
  if (typeof id !== "string" || id.trim() === "") {
    throw new Error("id invalide");
  }
  if (typeof email !== "string" || email.trim() === "") {
    throw new Error("email invalide");
  }
  return { id, email };
}
```

**Pourquoi :** `unknown` force le code à vérifier les données avant de les utiliser. Le parseur construit un nouvel objet conforme au contrat au lieu de prétendre qu'une valeur inconnue est déjà un `User`.

## 2. Inférence — configuration avec `satisfies`

```ts
const layouts = {
  compact: { gap: 4, columns: 2 },
  comfortable: { gap: 12, columns: 3 },
} as const satisfies Record<string, { gap: number; columns: number }>;

type LayoutName = keyof typeof layouts; // "compact" | "comfortable"
type CompactColumns = typeof layouts.compact.columns; // 2
```

**Pourquoi :** `satisfies` vérifie la forme attendue sans remplacer le type inféré de la valeur. `as const` conserve les littéraux et rend les propriétés statiquement readonly ; il ne fige pas l'objet à l'exécution.

## 3. Objets — PATCH avec absence, `null` et valeur

```ts
type Profile = { id: string; nickname: string | null };
type ProfilePatch = { nickname?: string | null };

function applyPatch(profile: Profile, patch: ProfilePatch): Profile {
  if (!("nickname" in patch)) return profile; // absent : ne rien changer
  return { ...profile, nickname: patch.nickname ?? null };
}

const p: Profile = { id: "u1", nickname: "Ada" };
applyPatch(p, {}); // conserve Ada
applyPatch(p, { nickname: null }); // efface le surnom
applyPatch(p, { nickname: "Grace" }); // remplace le surnom
```

**Point d'attention :** avec `exactOptionalPropertyTypes`, `nickname?: string | null` signifie qu'il peut être absent ou contenir une chaîne/null, mais qu'une affectation explicite `undefined` n'est pas automatiquement autorisée.

## 4. Unions — traiter tous les états

```ts
type Load<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function assertNever(value: never): never {
  throw new Error(`État non géré : ${String(value)}`);
}

function message<T>(state: Load<T>): string {
  switch (state.status) {
    case "idle": return "En attente";
    case "loading": return "Chargement";
    case "success": return "Chargement terminé";
    case "error": return state.message;
    default: return assertNever(state);
  }
}
```

**Pourquoi :** si une variante est ajoutée sans être traitée, `state` ne sera plus `never` dans la branche finale et le compilateur signalera l'oubli.

## 5. Prédicats — valider plutôt qu'asserter

```ts
function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function parseId(value: unknown): string {
  if (!isNonEmptyString(value)) throw new Error("Identifiant invalide");
  return value;
}
```

**Pourquoi :** le prédicat est une fonction JavaScript réelle qui vérifie la valeur. À l'inverse, `value as string` ne vérifie rien et ne modifie pas la donnée.

## 6. Fonctions — exposer un contrat public précis

```ts
type SearchOptions = { limit?: number; category?: string };
type Product = { id: string; name: string };
type SearchResult = { items: Product[]; total: number };
type SearchProducts = (query: string, options?: SearchOptions) => Promise<SearchResult>;

const searchProducts: SearchProducts = async (query, options) => {
  // Exemple local : un vrai adaptateur effectuerait la requête.
  const items: Product[] = query ? [{ id: "p1", name: query }] : [];
  return { items: items.slice(0, options?.limit ?? 20), total: items.length };
};
```

**Pourquoi :** le type nommé documente les paramètres et le résultat. Une surcharge n'est utile que si les formes d'appel ont réellement des contrats différents.

## 7. Génériques — conserver les relations entre types

```ts
interface Repository<T, Id> {
  findById(id: Id): Promise<T | undefined>;
  save(entity: T): Promise<T>;
}

type User = { id: string; email: string };
declare const users: Repository<User, string>;
const user = await users.findById("u1");
// @ts-expect-error l'identifiant doit être une chaîne
await users.findById(42);
```

**Pourquoi :** `T` relie le type de l'entité entrée au type renvoyé ; `Id` exprime séparément le type de l'identifiant. `declare` sert ici uniquement à illustrer un contrat, pas à fournir une implémentation runtime.

## 8. `keyof` et accès indexé — retourner le type de la clé

```ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const product = { id: "p1", price: 12 };
const id = getProperty(product, "id"); // string
const price = getProperty(product, "price"); // number
// @ts-expect-error "name" n'est pas une clé de product
getProperty(product, "name");
```

**Pourquoi :** la contrainte `K extends keyof T` interdit les clés inconnues et `T[K]` préserve la correspondance entre clé et type de valeur.

## 9. Mapped types — créer un patch contrôlé

```ts
type User = { readonly id: string; name: string; email: string };
type UserPatch = Partial<Omit<User, "id">>;

const patch: UserPatch = { name: "Ada" };
// @ts-expect-error l'identifiant ne peut pas être modifié par ce patch
const invalid: UserPatch = { id: "u2" };
```

**Pourquoi :** `Omit` retire le champ d'identité avant que `Partial` rende les autres propriétés facultatives. Ce choix encode une règle métier simple dans le contrat.

## 10. Types conditionnels et `Awaited`

```ts
type AsyncValue<T> = T extends PromiseLike<infer U> ? AsyncValue<U> : T;
type A = AsyncValue<Promise<number>>; // number
type B = AsyncValue<Promise<Promise<boolean>>>; // boolean
// Le type intégré est généralement préférable :
type C = Awaited<Promise<Promise<boolean>>>; // boolean
```

**Pourquoi :** `infer U` capture le type contenu dans la promesse. La récursion gère les promesses imbriquées. En production, privilégie `Awaited<T>` si son comportement répond au besoin : les types personnalisés ne doivent pas remplacer les utilitaires standard sans raison.

## 11. Template literal types — dériver les clés

```ts
type EventName = "created" | "deleted";
type HandlerName = `on${Capitalize<EventName>}`;
type Handlers = Record<HandlerName, (id: string) => void>;

const handlers: Handlers = {
  onCreated: id => console.log("Créé", id),
  onDeleted: id => console.log("Supprimé", id),
};
```

**Pourquoi :** les noms sont calculés depuis une union source unique. La table est exhaustive et une faute d'orthographe devient une erreur de compilation.

## 12. Tuples variadiques — préserver les paramètres

```ts
function partialFirst<A, Rest extends unknown[], R>(
  fn: (first: A, ...rest: Rest) => R,
  first: A,
): (...rest: Rest) => R {
  return (...rest) => fn(first, ...rest);
}

function formatUser(id: string, active: boolean): string {
  return `${id}: ${active ? "actif" : "inactif"}`;
}
const withId = partialFirst(formatUser, "u1");
withId(true); // string
// @ts-expect-error le paramètre restant doit être boolean
withId("oui");
```

**Pourquoi :** `Rest` capture les paramètres restants sous forme de tuple et les restitue sans perdre leur ordre ni leurs types.

## 13. Classes — dépendre d'une interface

```ts
interface PaymentGateway {
  charge(amountCents: number): Promise<{ transactionId: string }>;
}

class OrderService {
  constructor(private readonly gateway: PaymentGateway) {}

  async pay(totalCents: number): Promise<string> {
    if (!Number.isSafeInteger(totalCents) || totalCents <= 0) {
      throw new Error("Montant invalide");
    }
    const result = await this.gateway.charge(totalCents);
    return result.transactionId;
  }
}
```

**Pourquoi :** le service dépend d'un contrat substituable. Les vérifications runtime protègent les invariants numériques ; l'interface ne vérifie pas à elle seule le montant ni la réponse du prestataire.

## 14. Déclarations — isoler une dépendance non typée

```ts
// src/types/legacy-token.d.ts
declare module "legacy-token" {
  export function createToken(subject: string): string;
}
```

Puis encapsule l'appel dans un module local qui valide les arguments et expose uniquement le contrat utile à l'application. **Limite :** cette déclaration dit au compilateur quelle API supposer ; elle ne prouve pas que le paquet réel respecte cette signature. Compare toujours la déclaration à la documentation ou à l'implémentation.

## 15. Configuration — options utiles et commandes séparées

Extrait de configuration pour une application moderne (à adapter au runtime et au bundler) :

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

Commandes séparées : `tsc --noEmit`, `vitest run` et la commande de build du bundler. `moduleResolution: "Bundler"` convient aux outils modernes qui résolvent les modules ; un package publié pour Node peut nécessiter `NodeNext` et une configuration de sorties différente.

## 16. Runtime — parser un produit

```ts
type Product = { id: string; name: string; price: number };

function parseProduct(input: unknown): Product {
  if (typeof input !== "object" || input === null) throw new Error("Produit invalide");
  if (!("id" in input) || typeof input.id !== "string" || input.id.trim() === "") {
    throw new Error("id invalide");
  }
  if (!("name" in input) || typeof input.name !== "string" || input.name.trim() === "") {
    throw new Error("name invalide");
  }
  if (!("price" in input) || typeof input.price !== "number" || !Number.isFinite(input.price) || input.price <= 0) {
    throw new Error("price invalide");
  }
  return { id: input.id, name: input.name, price: input.price };
}
```

**Pourquoi :** chaque champ est vérifié à l'exécution et le parseur construit une sortie neuve. Pour des schémas complexes, une bibliothèque de validation peut réduire le code répétitif, mais il faut comprendre le contrat qu'elle valide.

## 17. API — résultat discriminé

```ts
type AppError =
  | { kind: "not-found"; id: string }
  | { kind: "conflict"; message: string }
  | { kind: "invalid"; field: string };
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

function explain(error: AppError): string {
  switch (error.kind) {
    case "not-found": return `Introuvable : ${error.id}`;
    case "conflict": return error.message;
    case "invalid": return `Champ invalide : ${error.field}`;
    default: {
      const exhaustive: never = error;
      return exhaustive;
    }
  }
}
```

**Pourquoi :** les erreurs métier sont des données explicites que le consommateur doit traiter. Les erreurs techniques inattendues (panne réseau, bug, timeout) nécessitent malgré tout une stratégie distincte.

## 18. React — props et états de soumission

```tsx
type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

type SaveButtonProps = {
  state: SubmitState;
  onSave: () => void;
};

function SaveButton({ state, onSave }: SaveButtonProps) {
  const busy = state.status === "submitting";
  return (
    <div>
      <button type="button" disabled={busy} onClick={onSave}>
        {busy ? "Enregistrement…" : "Enregistrer"}
      </button>
      {state.status === "success" && <p role="status">{state.message}</p>}
      {state.status === "error" && <p role="alert">{state.message}</p>}
    </div>
  );
}
```

**Pourquoi :** les états sont mutuellement exclusifs et les messages accessibles. Les types d'événements doivent être inférés depuis React lorsque c'est possible ; il n'est pas nécessaire de réinventer les types du framework.

## 19. Tests de types — tester le contrat public

```ts
export function identity<T>(value: T): T {
  return value;
}

const count = identity(3);
const text: string = identity("hello");
// @ts-expect-error un nombre ne peut pas être assigné à string
const wrong: string = identity(3);
```

**Pourquoi :** un test positif vérifie l'utilisation prévue ; `@ts-expect-error` vérifie qu'une utilisation interdite reste rejetée. Si l'erreur disparaît, TypeScript signale que la directive est devenue inutile. Ajoute séparément des tests runtime pour les comportements réels.

## 20. Architecture — commande, parsing et résultat

```ts
type OrderDto = { id: unknown; totalCents: unknown };
type Order = { id: string; totalCents: number & { readonly __brand: "Cents" } };
type OrderError = { kind: "invalid-id" } | { kind: "invalid-total" };
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

function parseOrder(dto: OrderDto): Result<Order, OrderError> {
  if (typeof dto.id !== "string" || dto.id.trim() === "") {
    return { ok: false, error: { kind: "invalid-id" } };
  }
  if (typeof dto.totalCents !== "number" || !Number.isSafeInteger(dto.totalCents) || dto.totalCents < 0) {
    return { ok: false, error: { kind: "invalid-total" } };
  }
  return {
    ok: true,
    value: { id: dto.id, totalCents: dto.totalCents as Order["totalCents"] },
  };
}
```

**Pourquoi :** le cast final est isolé après une validation qui établit précisément l'invariant du montant. Dans un projet réel, encapsule la marque dans un constructeur dédié pour empêcher les autres modules de créer des montants invalides. Complète cet exemple avec repository, service, tests de parsing et tests de types.

---

## Grille d'autoévaluation

Attribue 0, 1 ou 2 points à chaque critère : 0 = pas acquis ; 1 = acquis avec aide ; 2 = autonome.

- Je peux expliquer pourquoi `unknown` est préférable à `any` à une frontière non fiable.
- Je sais distinguer union discriminée, intersection et propriétés optionnelles.
- Je peux écrire un générique qui préserve une relation entre entrée et sortie.
- Je sais utiliser `keyof`, `T[K]`, mapped types et types conditionnels sans surcomplexifier.
- Je sais expliquer ce que `as const`, `satisfies` et `as` font — et ne font pas.
- Je peux configurer un projet strict et expliquer les options majeures.
- Je sais valider une réponse HTTP à l'exécution avant de la traiter comme une entité métier.
- Je sais écrire des tests runtime et des tests de types complémentaires.

**Interprétation :** 14–16 points : bases solides ; 10–13 : revoir les modules faibles ; 0–9 : refaire les ateliers sans consulter les solutions.

## Barème du projet final (100 points)

| Critère | Points |
|---|---:|
| Modèle métier et invariants | 15 |
| Parsing runtime et gestion des données invalides | 15 |
| Unions discriminées et erreurs exhaustives | 10 |
| Génériques utiles et relations de types préservées | 10 |
| Configuration stricte et commandes reproductibles | 10 |
| Tests comportementaux | 10 |
| Tests de types positifs et négatifs | 10 |
| API publique et déclarations cohérentes | 10 |
| Documentation des choix et limites | 5 |
| Simplicité et absence de complexité de typage gratuite | 5 |

Objectif de validation : au moins 80/100, sans aucun défaut critique sur la validation runtime ou la configuration stricte.
