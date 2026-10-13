import type { CourseModule } from './types';

export const cssAdvancedModules: CourseModule[] = [
  {
    id: 'selecteurs',
    title: '2. Sélecteurs, combinateurs et pseudo-classes',
    summary: 'Un sélecteur décrit les éléments auxquels une règle s’applique. Sa précision doit refléter le besoin fonctionnel, sans dépendre inutilement de toute la structure du document.',
    concepts: ['Sélecteurs de type, classe, identifiant, attribut et liste.', 'Combinateurs descendant, enfant direct, frère adjacent et frères suivants.', 'Pseudo-classes structurelles, interactives et fonctionnelles.', 'Sélecteurs :is(), :where(), :not() et :has() selon le besoin et le support visé.'],
    sections: [
      { title: 'Construire un sélecteur lisible', body: 'Un sélecteur de type vise tous les éléments d’un type ; une classe exprime une catégorie réutilisable ; un identifiant devrait rester unique dans le document. Les sélecteurs d’attribut sont utiles lorsque l’attribut fait partie du contrat HTML, par exemple [aria-expanded="true"] ou input[type="email"]. Évite de cibler des éléments par leur position exacte dans une longue chaîne d’ancêtres : une petite évolution du HTML casserait alors le style.', examples: [{ title: 'Sélecteurs de base et combinateurs', language: 'css', code: `.article { max-width: 70ch; }
.article > h2 { margin-block-start: 2rem; }
.article a[href^="https://"] { text-decoration-thickness: 0.12em; }
.menu a + a { margin-inline-start: 1rem; }
input[required] { border-inline-start: 0.25rem solid currentColor; }` }] },
      { title: 'Pseudo-classes et état du document', body: 'Les pseudo-classes ne sélectionnent pas une classe HTML littérale : elles représentent un état ou une relation. :hover dépend du pointeur et ne peut pas être le seul moyen d’exposer une action ; :focus-visible aide à préserver un indicateur de focus utile au clavier ; :checked, :disabled et :invalid décrivent l’état de contrôles. :first-child et :nth-child() dépendent de la structure. :is() simplifie une liste de sélecteurs, :where() garde une spécificité nulle, et :has() permet de sélectionner un élément selon ses descendants ou frères compatibles avec sa syntaxe.', examples: [{ title: 'États et sélection robuste', language: 'css', code: `:where(h1, h2, h3) { line-height: 1.15; }
.button:is(:hover, :focus-visible) { background: var(--accent-hover); }
.field:has(input:invalid) .field__hint { display: block; }
.list > li:nth-child(odd) { background: var(--surface-muted); }
.button:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }` }] },
      { title: 'Pièges fréquents et stratégie de sélection', body: 'Un sélecteur doit exprimer une relation stable, pas une position accidentelle. Un sélecteur plus complexe n’est pas automatiquement meilleur : il peut augmenter la spécificité et rendre le composant difficile à surcharger. Les pseudo-classes fonctionnelles n’ont pas toutes le même comportement de spécificité : :where() vaut zéro, tandis que :is(), :not() et :has() prennent la spécificité maximale de leurs arguments. Vérifie aussi le support des sélecteurs récents pour les navigateurs réellement ciblés.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.card :where(h2, h3) { margin-block-start: 0; }
.card__link { color: var(--link); }

/* Relation explicite, sans dépendre de toute la structure. */
.form-field:has(> input[aria-invalid="true"]) {
  border-color: var(--danger);
}` }] },
    ],
    exercise: 'Crée une liste de cartes avec des sélecteurs de classe, un sélecteur enfant direct et des états hover/focus-visible. Remplace une chaîne de sélecteurs trop longue par une classe de composant claire.',
  },
  {
    id: 'cascade',
    title: '3. Cascade, héritage, spécificité et couches',
    summary: 'La cascade décide quelle déclaration gagne. Comprendre son ordre évite de multiplier les exceptions et de résoudre chaque conflit avec !important.',
    concepts: ['Cascade, origine, importance, couches et spécificité.', 'Héritage, valeurs initiales, unset, revert et revert-layer.', 'Spécificité des sélecteurs complexes et des pseudo-classes fonctionnelles.', 'Organisation avec @layer et stratégie pour les styles tiers.'],
    sections: [
      { title: 'L’ordre de résolution', body: 'Le navigateur ne compare pas uniquement le nombre de classes. Il évalue d’abord la pertinence des déclarations, puis les origines et niveaux d’importance, les couches de cascade, la spécificité, la proximité de portée lorsque @scope est employé, puis l’ordre d’apparition. Les animations et transitions ont leurs propres niveaux dans cette cascade. Il faut donc inspecter la déclaration gagnante avant de changer le sélecteur. Les valeurs héritées ne sont utilisées que pour les propriétés qui héritent, sauf si une valeur explicite ou un mot-clé de contrôle intervient.', examples: [{ title: 'Réduire les conflits avec des couches', language: 'css', code: `@layer reset, vendor, base, components, utilities;

@layer base {
  body { color: #20252b; line-height: 1.6; }
}

@layer components {
  .button { color: white; background: #2457a7; }
}

@layer utilities {
  .text-muted { color: #606975; }
}` }] },
      { title: 'Spécificité et exceptions', body: 'À origines, importance et couches identiques, les identifiants pèsent davantage que les classes, attributs et pseudo-classes, eux-mêmes plus spécifiques que les sélecteurs de type et pseudo-éléments. Les colonnes de spécificité se comparent séparément ; elles ne forment pas un nombre décimal. :where() n’ajoute aucune spécificité ; :is(), :not() et :has() prennent en compte leurs arguments selon leurs règles. !important doit rester rare, notamment parce qu’il inverse certains choix de priorité et rend les overrides plus difficiles. revert et revert-layer servent à revenir à un niveau antérieur de cascade.', examples: [{ title: 'Valeur par défaut et surcharge contrôlée', language: 'css', code: `@layer components {
  .notice { color: #174a70; }
  .notice--danger { color: #8b1e1e; }
}

/* :where garde les règles de base faciles à surcharger. */
:where(.content) a { text-underline-offset: 0.18em; }` }] },
      { title: 'Résoudre un conflit dans l’ordre correct', body: 'Quand une règle semble ignorée, ne commence pas par ajouter un identifiant ou !important. Vérifie d’abord que la déclaration s’applique, puis compare l’origine et l’importance, la couche, la spécificité, la proximité de portée éventuelle et l’ordre source. Pour les déclarations normales d’un même auteur, les règles non placées dans une couche passent avant les règles normales des couches nommées ; pour les déclarations importantes, l’ordre des couches est inversé. Cette inversion rend les règles !important particulièrement difficiles à anticiper.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `@layer reset, base, components, overrides;

@layer base { .button { color: #222; } }
@layer components { .button { color: #174ea6; } }

/* Une déclaration normale hors couche peut battre celles des couches. */
.button { border-radius: .5rem; }` }] },
    ],
    exercise: 'Écris trois règles concurrentes pour une même propriété, prédis la valeur calculée, puis vérifie-la dans DevTools. Réorganise les règles en couches pour que les composants soient prévisibles.',
  },
  {
    id: 'valeurs-unites',
    title: '4. Valeurs, unités, fonctions et propriétés personnalisées',
    summary: 'CSS possède des unités absolues et relatives, des fonctions de calcul et des variables en cascade. Le choix d’une valeur détermine la façon dont une interface réagit au contenu et au viewport.',
    concepts: ['Unités px, rem, em, %, vw, vh, svh, lvh et dvh.', 'Fonctions calc(), min(), max(), clamp() et env().', 'Propriétés personnalisées, portée, héritage et valeurs de repli.', 'Différence entre valeur déclarée, calculée, utilisée et réelle.'],
    sections: [
      { title: 'Choisir une unité selon son rôle', body: 'px désigne un pixel CSS et convient souvent aux bordures fines ; rem est lié à la taille de police de l’élément racine et facilite les échelles cohérentes ; em dépend de la taille de police calculée de l’élément, ce qui peut produire des effets cumulés ; % dépend de la propriété et de son contexte de référence. Les unités de viewport expriment une dimension de fenêtre, mais les barres d’interface mobiles rendent les unités vh classiques parfois surprenantes. svh, lvh et dvh représentent respectivement les tailles petite, grande et dynamique. Privilégie des contraintes fluides plutôt que des dimensions fixes généralisées.', examples: [{ title: 'Conteneur et titre fluides', language: 'css', code: `.page {
  width: min(100% - 2rem, 72rem);
  margin-inline: auto;
}

h1 {
  font-size: clamp(2rem, 1.2rem + 3vw, 4rem);
}

.hero {
  min-height: 60svh;
  padding: clamp(1.5rem, 5vw, 5rem);
}` }] },
      { title: 'Variables et calculs réutilisables', body: 'Une propriété personnalisée commençant par -- suit la cascade et hérite par défaut. var() peut recevoir une valeur de repli si la propriété personnalisée est absente ou possède sa valeur garantie invalide ; le repli ne corrige pas une valeur présente mais incompatible avec la propriété consommatrice. Une variable ne transforme pas automatiquement une chaîne en unité : --gap: 1rem fonctionne, mais --gap: large ne convient pas à gap. calc(), min(), max() et clamp() combinent des valeurs compatibles. env() expose des valeurs d’environnement telles que les zones de sécurité des écrans sans bordure.', examples: [{ title: 'Jetons et zone de sécurité', language: 'css', code: `:root {
  --space-unit: 0.25rem;
  --space-4: calc(var(--space-unit) * 4);
  --content-max: 72rem;
  --page-gutter: clamp(1rem, 4vw, 2.5rem);
}

main {
  width: min(calc(100% - var(--page-gutter) - var(--page-gutter)), var(--content-max));
  margin-inline: auto;
  padding-bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
}` }] },
      { title: 'Lire et déboguer les valeurs calculées', body: 'Une valeur déclarée n’est pas toujours la valeur utilisée. Les fonctions de calcul exigent des types compatibles et une propriété personnalisée peut contenir une séquence de jetons qui n’est pas valide pour la propriété où elle est consommée. Important : la valeur de repli de var() sert notamment lorsque la variable est absente ou invalide comme propriété personnalisée ; elle ne répare pas une valeur présente mais incompatible avec la propriété cible. Les outils de styles calculés aident à voir le résultat final.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `:root { --space: 1rem; --bad-size: large; }

.card { padding: var(--space, 2rem); }
/* La variable existe : le fallback ne remplace pas sa valeur. */
.card__title { font-size: var(--bad-size, 1.25rem); }
/* font-size devient invalide à la substitution ; 1.25rem n’est pas utilisé. */` }] },
    ],
    exercise: 'Crée une échelle de cinq espacements, une largeur de lecture maximale et un titre fluide. Vérifie que le rendu reste lisible à 200 % de zoom et sur une fenêtre étroite.',
  },
  {
    id: 'box-model',
    title: '5. Modèle de boîte, marges et débordements',
    summary: 'Le modèle de boîte détermine la place occupée par chaque élément. Les tailles intrinsèques et les contraintes min/max expliquent beaucoup de débordements en layout.',
    concepts: ['content-box et border-box.', 'Marge, padding, bordure et collapse des marges verticales.', 'overflow, min-width, min-height et dimensions intrinsèques.', 'Marges logiques et adaptation aux directions d’écriture.'],
    sections: [
      { title: 'Calculer la taille réelle', body: 'Avec content-box, width désigne la largeur de contenu ; padding et border s’ajoutent à l’extérieur. Avec border-box, width inclut le contenu, le padding et la bordure, ce qui rend les composants plus simples à dimensionner. La marge reste extérieure. Les marges verticales de blocs peuvent fusionner dans certains contextes : leur résultat n’est pas toujours leur somme. Le padding ne fusionne pas. Une règle globale border-box constitue une base fréquente, mais ne supprime pas le besoin de comprendre les contraintes.', examples: [{ title: 'Convention de boîte', language: 'css', code: `*,
*::before,
*::after {
  box-sizing: border-box;
}

.card {
  width: min(100%, 24rem);
  padding: 1.25rem;
  border: 1px solid #d7dce2;
  margin-block: 1rem;
}` }] },
      { title: 'Diagnostiquer les débordements', body: 'Un élément peut dépasser parce que sa largeur minimale intrinsèque est trop grande, parce qu’un mot ou une URL ne peut pas se couper, ou parce qu’un enfant flex/grid refuse de rétrécir. Dans un élément flex ou grid, min-width: auto peut conserver une largeur minimale liée au contenu ; min-width: 0 sur le bon enfant autorise parfois le rétrécissement. overflow: hidden coupe le contenu et peut masquer un défaut au lieu de le résoudre ; overflow: auto est pertinent quand une zone doit réellement défiler. Les propriétés logiques margin-inline et padding-block décrivent l’intention sans coder systématiquement gauche/droite.', examples: [{ title: 'Contenu long dans une grille', language: 'css', code: `.layout {
  display: grid;
  grid-template-columns: 16rem minmax(0, 1fr);
  gap: 1rem;
}

.layout__main {
  min-width: 0;
  overflow-wrap: anywhere;
}

.card {
  padding-inline: 1rem;
  margin-block: 1.5rem;
}` }] },
      { title: 'Débordement : corriger la cause, pas seulement le symptôme', body: 'Avant d’ajouter overflow: hidden, inspecte le contenu qui impose la largeur, la taille minimale de l’item, le padding et les contraintes de son parent. overflow: clip coupe le débordement sans créer un conteneur de défilement, mais n’est pas un remplacement universel de hidden. Pour les chaînes longues, overflow-wrap: anywhere peut autoriser une coupure ; pour les contenus qui doivent défiler, choisis explicitement une zone de défilement accessible. Le correctif dépend du comportement attendu.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.layout { display: grid; grid-template-columns: 12rem minmax(0, 1fr); }
.content { min-width: 0; }
.content__url { overflow-wrap: anywhere; }
.code-panel { max-width: 100%; overflow: auto; }` }] },
    ],
    exercise: 'Calcule la largeur extérieure d’une boîte en content-box, puis convertis-la en border-box. Construis une mise en page avec un long identifiant et corrige le débordement sans cacher toute la page.',
  },
  {
    id: 'typographie',
    title: '6. Typographie, lisibilité et texte international',
    summary: 'La typographie est une dimension fonctionnelle de l’interface : elle affecte la hiérarchie, la lecture, les langues, le zoom et la hauteur des composants.',
    concepts: ['font-family, font-size, font-weight, line-height et font-stretch.', 'Largeur de ligne, espacements, césure et retours à la ligne.', 'Polices web, formats, sous-ensembles et font-display.', 'Direction du texte, propriétés logiques et contenus multilingues.'],
    sections: [
      { title: 'Définir une échelle typographique', body: 'Déclare une pile de polices avec des alternatives réalistes, puis définis une échelle de tailles et une hauteur de ligne adaptée au rôle du texte. Une hauteur de ligne autour de 1,4 à 1,7 convient souvent aux paragraphes, mais les titres courts peuvent être plus serrés. ch mesure approximativement la largeur du caractère zéro de la police courante et aide à limiter la longueur de lecture ; ce n’est pas une mesure universelle du nombre exact de caractères. Le texte doit rester compréhensible lorsque l’utilisateur agrandit la police ou modifie ses préférences.', examples: [{ title: 'Échelle lisible', language: 'css', code: `:root {
  --font-body: system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-display: Georgia, "Times New Roman", serif;
  --text-base: 1rem;
  --text-small: 0.875rem;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
}

.prose { max-width: 68ch; }
h1, h2 { font-family: var(--font-display); line-height: 1.15; }
small { font-size: var(--text-small); }` }] },
      { title: 'Polices web et textes complexes', body: 'Une police web doit être chargée avec un format adapté, une origine autorisée et une stratégie d’affichage raisonnable. font-display: swap privilégie le texte visible pendant le chargement, au prix possible d’un changement de métriques. Déclare seulement les graisses et sous-ensembles utiles pour limiter les octets. Évite d’imposer text-transform au contenu si cela déforme des noms propres, identifiants ou langues sensibles à la casse. Les propriétés logiques, direction et unicode-bidi doivent être utilisées avec prudence pour le contenu bidirectionnel ; laisse le navigateur traiter le texte normal et isole seulement les fragments dont la direction est inconnue.', examples: [{ title: 'Chargement d’une police locale', language: 'css', code: `@font-face {
  font-family: "Interface Sans";
  src: url("./fonts/interface-sans.woff2") format("woff2");
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
}

html { font-family: "Interface Sans", system-ui, sans-serif; }
[dir="rtl"] .icon-label { margin-inline-start: 0.5rem; }` }] },
      { title: 'Tester la typographie au-delà du texte idéal', body: 'Les dimensions d’une interface ne doivent pas dépendre d’un libellé court ou d’une police toujours disponible. Teste des noms longs, des caractères accentués, des alphabets différents, du texte à droite-à-gauche et l’agrandissement de la police. Dans @font-face, une plage telle que font-weight: 400 700 décrit une police variable capable de couvrir cette plage ; pour des fichiers statiques, déclare chaque graisse correspondant au fichier. Une police de repli doit préserver la lisibilité et éviter les hauteurs fixes.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `@font-face {
  font-family: "Interface Variable";
  src: url("./fonts/interface-variable.woff2") format("woff2");
  font-weight: 100 900; /* seulement si le fichier est variable */
  font-display: swap;
}

.article { max-width: 68ch; line-height: 1.6; }
.button { min-height: 2.75rem; white-space: normal; }` }] },
    ],
    exercise: 'Construis une page éditoriale avec trois niveaux de titre, une largeur de lecture limitée, des liens reconnaissables et une police de repli. Vérifie une langue à droite-à-gauche et le zoom.',
  },
  {
    id: 'couleurs-surfaces',
    title: '7. Couleurs, fonds, bordures et ombres',
    summary: 'Les couleurs et surfaces doivent renforcer la hiérarchie sans compromettre le contraste, l’état des contrôles ou la cohérence du thème.',
    concepts: ['Couleurs hexadécimales, rgb(), hsl() et color().', 'background, dégradés, images de fond et positionnement.', 'Bordures, contours, ombres et séparateurs.', 'Contraste du texte et distinction des états sans dépendre de la couleur seule.'],
    sections: [
      { title: 'Système de couleurs sémantique', body: 'Centralise les couleurs dans des propriétés personnalisées nommées par rôle : texte, surface, bordure, accent, danger et focus. Une couleur brute indique une valeur ; un jeton sémantique explique son usage et facilite un thème alternatif. Les couleurs d’un dégradé et les images de fond ne doivent pas porter seules une information essentielle, car les images peuvent être désactivées et le contraste dépend du fond réellement visible. currentColor permet de réutiliser la couleur du texte pour une bordure ou une icône.', examples: [{ title: 'Palette par rôle', language: 'css', code: `:root {
  color-scheme: light;
  --text: #20252b;
  --surface: #ffffff;
  --surface-muted: #f2f4f7;
  --border: #c8ced6;
  --accent: #174ea6;
  --danger: #a32121;
  --focus: #6a35c8;
}

.card { color: var(--text); background: var(--surface); border: 1px solid var(--border); }
.card__meta { color: color-mix(in srgb, var(--text) 72%, transparent); }
.icon { color: currentColor; }` }] },
      { title: 'Arrière-plans, bordures et ombres', body: 'background est une propriété raccourcie : elle peut réinitialiser plusieurs sous-propriétés en même temps. Lorsqu’une image de fond contient un élément informatif, fournis aussi ce contenu dans le HTML ou une alternative textuelle pertinente. box-shadow peut créer une élévation discrète mais ne remplace pas une bordure quand la séparation doit rester visible. outline est indépendant de la boîte et convient notamment au focus ; ne le supprime pas sans remplacement visible. Les couleurs d’état doivent rester distinguables en niveaux de gris et par d’autres indices comme texte, icône ou forme.', examples: [{ title: 'Surface avec focus visible', language: 'css', code: `.panel {
  background: linear-gradient(135deg, var(--surface), var(--surface-muted));
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 1.5rem rgb(20 30 45 / 8%);
}

.panel a:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}` }] },
      { title: 'Vérifier les couleurs réellement affichées', body: 'Le contraste se calcule entre les couleurs finales du texte et du fond, y compris lorsque le fond est un dégradé, une image ou une transparence. Une couleur de jeton qui passe sur une surface unie peut échouer sur une photo. Les ombres ne suffisent pas à identifier un contrôle et les états ne doivent pas être communiqués uniquement par la couleur. Mesure le contraste avec un outil, puis vérifie le focus et les composants en situation réelle.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.button { color: var(--on-accent); background: var(--accent); border: 1px solid currentColor; }
.button:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
.status::before { content: ""; display: inline-block; width: .6em; height: .6em; border-radius: 50%; }
/* Le texte de statut reste nécessaire : le point coloré seul ne suffit pas. */` }] },
    ],
    exercise: 'Crée une palette claire avec jetons sémantiques. Vérifie le contraste du texte, des bordures utiles et du focus ; ne signale pas une erreur uniquement par la couleur rouge.',
  },
  {
    id: 'flux-positionnement',
    title: '8. Flux normal, display, positionnement et empilement',
    summary: 'Le navigateur place d’abord les éléments selon le flux normal. Flexbox, Grid, positionnement et contextes d’empilement modifient ce comportement avec des règles précises.',
    concepts: ['display: block, inline, inline-block, flow-root, none et contents.', 'position static, relative, absolute, fixed et sticky.', 'Contextes de formatage, flottants hérités et clearfix moderne.', 'z-index et contextes d’empilement.'],
    sections: [
      { title: 'Flux et types de boîte', body: 'Le flux normal place les blocs successivement et les éléments en ligne dans les lignes de texte. display modifie le type de boîte extérieure et, pour certaines valeurs, le modèle de disposition interne. inline-block permet une boîte qui participe à une ligne tout en acceptant largeur et hauteur ; flow-root crée un contexte de formatage de bloc et contient les flottants. display: none retire la boîte du rendu et de l’arbre d’accessibilité dans la plupart des cas ; visibility: hidden conserve sa place. display: contents peut avoir des conséquences subtiles pour la sémantique et l’accessibilité : ne l’utilise pas comme simple raccourci sans vérifier.', examples: [{ title: 'Flux de document', language: 'css', code: `.media { display: flow-root; }
.media__image { float: inline-start; margin-inline-end: 1rem; }
.tag { display: inline-block; padding: 0.2em 0.6em; }
.hidden { display: none; }` }] },
      { title: 'Positionnement et ordre visuel', body: 'relative déplace visuellement une boîte depuis sa position normale et peut servir de référence à un descendant positionné. absolute sort l’élément du flux et cherche un bloc contenant approprié ; fixed se réfère généralement au viewport, mais certains ancêtres transformés peuvent modifier cette référence ; sticky combine le flux et une position contrainte par un conteneur de défilement. z-index ne compare pas tous les éléments de la page dans un espace global : les contextes d’empilement créés notamment par position avec z-index, transform, opacity et d’autres propriétés forment des groupes séparés. Préfère des layouts normaux à des coordonnées absolues pour le contenu principal.', examples: [{ title: 'En-tête collant et badge', language: 'css', code: `.site-header {
  position: sticky;
  inset-block-start: 0;
  z-index: 10;
  background: var(--surface);
}

.card { position: relative; }
.card__badge {
  position: absolute;
  inset-block-start: 0.75rem;
  inset-inline-end: 0.75rem;
}` }] },
      { title: 'Comprendre les contextes de positionnement', body: 'Un élément positionné n’est pas toujours positionné par rapport au viewport : absolute cherche son bloc contenant, et fixed peut être rattaché à un ancêtre qui crée un contexte approprié. sticky dépend de son conteneur de défilement, d’un seuil comme inset-block-start et de l’espace disponible ; il peut ne pas coller si un parent ou une contrainte de taille l’en empêche. Pour diagnostiquer z-index, repère d’abord les contextes d’empilement imbriqués au lieu d’augmenter arbitrairement le nombre.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.scroll-region { overflow: auto; max-height: 70vh; }
.scroll-region__heading { position: sticky; inset-block-start: 0; z-index: 1; background: var(--surface); }

/* Une transformation sur un ancêtre peut changer le repère d’un fixed. */
.dialog-layer { position: fixed; inset: 0; }` }] },
    ],
    exercise: 'Réalise une page en flux normal avec un en-tête sticky et un badge de carte. Explique pourquoi un z-index élevé peut rester derrière un élément situé dans un autre contexte d’empilement.',
  },
  {
    id: 'flexbox',
    title: '9. Flexbox : alignement et distribution sur un axe',
    summary: 'Flexbox est conçu pour distribuer des éléments sur un axe principal et gérer leur taille disponible, leur alignement et leur retour à la ligne.',
    concepts: ['Conteneur flex, axe principal et axe transversal.', 'flex-grow, flex-shrink, flex-basis et raccourci flex.', 'justify-content, align-items, align-content, gap et align-self.', 'Ordre visuel, wrapping et accessibilité du parcours de lecture.'],
    sections: [
      { title: 'Lire les axes', body: 'display: flex crée un contexte flex. flex-direction définit l’axe principal ; justify-content répartit l’espace sur cet axe et align-items aligne les éléments sur l’axe transversal. Les axes suivent le mode d’écriture : row ne signifie pas toujours physiquement gauche vers droite. gap ajoute un espacement entre éléments sans ajouter de marge extérieure aux bords du conteneur. flex-wrap autorise plusieurs lignes, mais chaque ligne répartit l’espace selon ses propres contraintes.', examples: [{ title: 'Barre de navigation flexible', language: 'css', code: `.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.toolbar__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}` }] },
      { title: 'Contrôler la taille des éléments', body: 'flex-basis est la base de taille utilisée avant la distribution de l’espace libre ; flex-grow permet de grandir et flex-shrink de réduire. Le raccourci flex: 1 est pratique, mais les valeurs initiales et les tailles minimales intrinsèques comptent. Un enfant qui contient une longue chaîne peut refuser de rétrécir tant que sa taille minimale automatique n’est pas levée. L’ordre visuel via order ne change pas l’ordre du DOM ni le parcours du clavier : il ne doit pas servir à réorganiser sémantiquement une page.', examples: [{ title: 'Actions et contenu extensible', language: 'css', code: `.toolbar__brand { flex: 0 0 auto; }
.toolbar__search { flex: 1 1 18rem; min-width: 0; }
.toolbar__actions { flex: 0 1 auto; }

.chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }` }] },
      { title: 'Flexbox ne remplace pas l’ordre sémantique', body: 'L’ordre du DOM reste la référence pour les technologies d’assistance, la lecture et la navigation au clavier. order et row-reverse modifient l’ordre visuel sans déplacer les éléments dans le document ; ils doivent servir à de petites adaptations de présentation, pas à inverser un processus ou une suite d’étapes. Si un élément ne rétrécit pas, inspecte flex-basis, flex-shrink, min-width et les dimensions intrinsèques. Teste aussi les contenus longs et le passage à plusieurs lignes.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.toolbar { display: flex; align-items: center; gap: .75rem; flex-wrap: wrap; }
.toolbar__search { flex: 1 1 16rem; min-width: 0; }
.toolbar__actions { display: flex; gap: .5rem; flex-wrap: wrap; }` }] },
    ],
    exercise: 'Construis une barre d’outils qui reste utilisable à 320 px : marque, recherche et actions. Teste les libellés longs, l’agrandissement du texte et l’ordre de lecture au clavier.',
  },
  {
    id: 'grid',
    title: '10. CSS Grid : lignes, colonnes et placement',
    summary: 'Grid organise des éléments sur deux dimensions et permet de décrire des pistes, des zones et des alignements qui s’adaptent au contenu.',
    concepts: ['grid-template-columns/rows, fr, repeat() et minmax().', 'Placement explicite et grille implicite.', 'auto-fit, auto-fill et minmax() pour les grilles fluides.', 'Zones nommées, alignement et sous-grilles lorsque supportées.'],
    sections: [
      { title: 'Définir les pistes', body: 'Une grille sépare le conteneur en pistes de lignes et de colonnes. fr distribue une fraction de l’espace disponible ; minmax() borne la taille d’une piste ; repeat() évite de répéter la même définition. Les tailles minimales intrinsèques peuvent élargir une piste si le contenu l’exige, d’où l’intérêt de minmax(0, 1fr) dans certains layouts. Les propriétés d’alignement contrôlent les items et la grille entière selon la propriété choisie.', examples: [{ title: 'Grille de cartes adaptative', language: 'css', code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
}

.page-layout {
  display: grid;
  grid-template-columns: 16rem minmax(0, 1fr);
  gap: 2rem;
}` }] },
      { title: 'Placement et zones', body: 'Le placement peut être automatique, par lignes numérotées ou par zones nommées. Les zones facilitent la lecture d’une page complexe, mais ne doivent pas produire un ordre visuel trompeur par rapport au DOM. auto-fit et auto-fill diffèrent dans le traitement des pistes vides : auto-fit peut replier les pistes vides pour étendre celles qui restent, tandis qu’auto-fill conserve leur place. Commence avec une grille simple et n’introduis un placement explicite que si la composition en bénéficie réellement.', examples: [{ title: 'Zones de page', language: 'css', code: `.layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 18rem;
  grid-template-areas: "content aside";
  gap: 2rem;
}

.layout__content { grid-area: content; }
.layout__aside { grid-area: aside; }

@media (max-width: 50rem) {
  .layout { grid-template-columns: minmax(0, 1fr); grid-template-areas: "content" "aside"; }
}` }] },
      { title: 'Choisir entre Grid et Flexbox', body: 'Utilise généralement Grid quand les relations entre lignes et colonnes comptent ensemble, et Flexbox quand il faut surtout distribuer une rangée ou une colonne d’éléments. Ce n’est pas une règle absolue : les deux modèles peuvent se combiner. La grille visuelle ne doit pas contredire l’ordre logique du document. Les tailles minimales des pistes sont une source fréquente de débordement ; minmax(0, 1fr) permet à une piste de rétrécir sous la taille minimale intrinsèque de son contenu, si ce comportement est souhaité.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.dashboard { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 1rem; }
.dashboard__main { grid-column: span 8; }
.dashboard__aside { grid-column: span 4; }

@media (max-width: 48rem) {
  .dashboard__main, .dashboard__aside { grid-column: 1 / -1; }
}` }] },
    ],
    exercise: 'Crée une grille de cartes sans breakpoint dédié à chaque téléphone. Ajoute une variante avec zones nommées et vérifie que l’ordre visuel reste cohérent avec le DOM.',
  },
  {
    id: 'responsive',
    title: '11. Responsive design et media queries',
    summary: 'Le responsive design adapte les contraintes au contenu et à l’espace disponible. Le mobile-first consiste à partir d’une base simple, puis à ajouter les capacités réellement nécessaires.',
    concepts: ['Media queries de viewport, préférences et capacités.', 'Breakpoints dictés par le contenu plutôt que par des modèles d’appareils.', 'Images fluides, largeur maximale et typographie adaptative.', 'Viewport, zoom, orientation et tests de débordement.'],
    sections: [
      { title: 'Construire mobile-first', body: 'Écris d’abord le style qui fonctionne avec peu d’espace, puis ajoute des media queries lorsque la composition devient trop contrainte. Les breakpoints sont des seuils de mise en page, pas des noms d’appareils. Une requête min-width est souvent simple à lire pour une approche mobile-first. Une interface réellement responsive ne se limite pas à réduire la taille : elle peut réorganiser la navigation, modifier le nombre de colonnes ou changer l’ordre de présentation sans contredire le DOM.', examples: [{ title: 'Un breakpoint motivé par le contenu', language: 'css', code: `.catalogue { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }

@media (min-width: 42rem) {
  .catalogue { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (min-width: 68rem) {
  .catalogue { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}` }] },
      { title: 'Préférences utilisateur et cas limites', body: 'Les media queries peuvent répondre à prefers-reduced-motion, prefers-color-scheme, contrast, orientation et d’autres caractéristiques. N’en déduis pas que chaque personne utilisant un thème sombre souhaite exactement les mêmes couleurs : les jetons doivent rester sémantiques et contrastés. Vérifie le zoom, le texte agrandi, les libellés longs, les images et les tableaux. Une largeur de viewport de test ne garantit pas à elle seule l’absence de débordement ; inspecte les éléments, les tailles minimales et les contenus non sécables.', examples: [{ title: 'Réduire les colonnes et le mouvement', language: 'css', code: `.gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr)); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .decorative-motion, .carousel__ambient {
    animation: none;
    transition: none;
  }
}` }] },
      { title: 'Tester le contenu réel et pas seulement des largeurs fixes', body: 'Une page responsive doit résister aux conditions qui changent la largeur effective : zoom, texte agrandi, traduction, barre latérale, clavier mobile et contenu injecté. Les breakpoints doivent apparaître quand le contenu ne tient plus correctement, pas parce qu’un appareil porte un nom donné. Le viewport meta est une responsabilité du HTML ; CSS agit ensuite sur l’espace de mise en page disponible. Vérifie les media queries dans les outils du navigateur et conserve une base qui reste lisible si une amélioration n’est pas prise en charge.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.navigation { display: flex; flex-wrap: wrap; gap: .75rem; }
.navigation a { max-width: 100%; overflow-wrap: anywhere; }

@media (min-width: 48rem) {
  .navigation { flex-wrap: nowrap; align-items: center; }
}` }] },
    ],
    exercise: 'Teste une même page à 320, 768, 1024 et 1440 px, puis au zoom 200 %. Documente les points de rupture justifiés par le contenu et corrige chaque débordement à sa source.',
  },
  {
    id: 'images-media',
    title: '12. Images, médias et ratio de boîte',
    summary: 'Les médias doivent conserver leurs proportions, s’adapter à leur conteneur et éviter de provoquer des décalages de mise en page ou des recadrages inattendus.',
    concepts: ['max-width, height auto et object-fit/object-position.', 'aspect-ratio et réservation de l’espace.', 'Images de fond versus contenu HTML.', 'Vidéo responsive, sous-titres et zones de sécurité.'],
    sections: [
      { title: 'Images fluides et recadrage', body: 'max-width: 100% empêche une image de dépasser son conteneur, tandis que height: auto conserve ses proportions. object-fit contrôle la façon dont une image remplit une boîte dimensionnée : contain conserve toute l’image avec éventuellement des espaces, cover remplit la boîte en recadrant. object-position choisit la zone privilégiée. Le texte alternatif relève du HTML et non du CSS. Les attributs width et height en HTML aident le navigateur à réserver la place avant le chargement ; aspect-ratio est utile pour des composants dont la proportion doit rester constante.', examples: [{ title: 'Vignettes cohérentes', language: 'css', code: `.article-image { display: block; max-width: 100%; height: auto; }

.product-card__media {
  aspect-ratio: 4 / 3;
  overflow: clip;
  background: var(--surface-muted);
}

.product-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}` }] },
      { title: 'Vidéo, fond et stabilité visuelle', body: 'Un média intégré doit s’adapter à la largeur disponible et conserver son rapport largeur/hauteur. Les vidéos avec dialogue ont besoin de sous-titres synchronisés ; les commandes natives sont souvent préférables à des commandes recréées sans raison. Les images de fond conviennent à la décoration, pas aux informations indispensables. Réserver la place des médias évite les déplacements de contenu au chargement. N’applique pas object-fit à une image sans définir une boîte dont le recadrage est souhaité.', examples: [{ title: 'Vidéo intégrée fluide', language: 'css', code: `.video-frame { width: 100%; aspect-ratio: 16 / 9; background: #111; }
.video-frame video { display: block; width: 100%; height: 100%; object-fit: contain; }

.decorative-hero {
  background-image: linear-gradient(rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)), url("./images/hero.webp");
  background-size: cover;
  background-position: center;
}` }] },
      { title: 'Distinguer dimensions intrinsèques et recadrage', body: 'height: auto conserve le ratio intrinsèque d’une image lorsque sa largeur est contrainte. object-fit intervient lorsque la boîte a déjà une taille définie et décide comment le contenu remplit cette boîte. Le recadrage peut retirer une partie importante du sujet : vérifie object-position aux tailles extrêmes. Pour limiter les décalages, les attributs HTML width et height restent utiles même lorsque CSS rend le média fluide. Une image décorative de fond ne reçoit pas d’alternative textuelle CSS ; l’information doit être fournie autrement si elle est essentielle.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `img { display: block; max-width: 100%; height: auto; }
.thumbnail { aspect-ratio: 3 / 2; overflow: clip; }
.thumbnail img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 30%; }` }] },
    ],
    exercise: 'Construis une galerie avec images de proportions différentes, une image de contenu et une image décorative. Évite les décalages de mise en page et explique le choix entre contain et cover.',
  },
  {
    id: 'pseudo-elements',
    title: '13. Pseudo-éléments, décorations et contenu généré',
    summary: 'Les pseudo-éléments permettent de styliser une partie d’un élément ou d’ajouter des éléments décoratifs sans modifier le HTML, mais ils ne remplacent pas le contenu essentiel.',
    concepts: ['::before, ::after, ::marker, ::selection et ::placeholder.', 'content et contenu généré.', 'Marqueurs de listes et décoration typographique.', 'Limites d’accessibilité et d’interaction du contenu généré.'],
    sections: [
      { title: 'Créer une décoration sans ajouter de balisage', body: '::before et ::after créent des pseudo-éléments dans la boîte de l’élément ciblé, à condition notamment de définir content. Ils sont utiles pour une icône décorative, un repère ou une bordure accentuée. Ils ne constituent pas un bon emplacement pour un texte indispensable, une information d’état ou une commande : le contenu généré n’est pas toujours exposé comme on l’attend aux technologies d’assistance et n’est pas interactif comme un véritable bouton. Pour une icône importante, privilégie un élément avec un nom accessible.', examples: [{ title: 'Repère décoratif', language: 'css', code: `.section-title::before {
  content: "";
  display: block;
  width: 2.5rem;
  height: 0.25rem;
  margin-block-end: 0.75rem;
  background: var(--accent);
}

.external-link::after { content: " ↗"; }` }] },
      { title: 'Marqueurs et texte sélectionné', body: '::marker stylise le marqueur d’une liste, dans les limites des propriétés prises en charge. ::selection contrôle l’apparence du texte sélectionné et doit préserver une distinction nette. ::placeholder concerne l’indication d’un champ et ne remplace jamais son label ; sa couleur et son contraste doivent être suffisants. La propriété content peut produire du texte, un compteur ou une image, mais les compteurs CSS servent à la présentation et ne remplacent pas une liste sémantique.', examples: [{ title: 'Listes et champs', language: 'css', code: `ul > li::marker { color: var(--accent); }

::selection {
  color: white;
  background: #174ea6;
}

input::placeholder { color: #555d68; opacity: 1; }

.steps { counter-reset: step; }
.steps > li { counter-increment: step; }
.steps > li::before { content: counter(step) ". "; font-weight: 700; }` }] },
      { title: 'Quand ne pas utiliser content', body: 'Le texte produit avec content est adapté à une décoration courte ou à un repère répétitif, mais pas à une information qui doit être copiée, traduite, indexée ou annoncée de façon fiable. Un symbole ajouté à un lien externe peut être décoratif, mais le texte du lien doit déjà décrire la destination. Pour les numéros d’étapes essentiels, préfère une vraie liste ordonnée ; les compteurs CSS ne doivent pas remplacer la structure du contenu.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.external-link::after { content: " ↗"; }
/* Si le symbole est redondant, le masquer côté HTML avec aria-hidden="true" sur un vrai élément. */

/* Exemple de liste sémantique : le numéro vient du HTML. */
.steps { list-style: decimal; padding-inline-start: 1.5em; }
.steps li { padding-inline-start: .25em; }` }] },
    ],
    exercise: 'Ajoute une décoration avant un titre et un style de marqueur de liste. Vérifie que la page conserve tout son sens si les pseudo-éléments ne sont pas rendus.',
  },
  {
    id: 'formulaires',
    title: '14. Formulaires, contrôles et états interactifs',
    summary: 'Le style des formulaires doit clarifier les champs, préserver les affordances natives et rendre visibles les états de focus, d’erreur et de désactivation.',
    concepts: ['Styles des inputs, boutons, select, textarea et contrôles natifs.', 'Pseudo-classes required, optional, valid, invalid, checked et disabled.', 'focus-visible, placeholder et accent-color.', 'Autofill, apparence native et limites de personnalisation.'],
    sections: [
      { title: 'Uniformiser sans effacer les contrôles', body: 'Les contrôles de formulaire possèdent des comportements et apparences natifs utiles. Une réinitialisation agressive peut retirer le focus, les flèches, les états ou les affordances attendues. Utilise font: inherit pour aligner la typographie et des styles cohérents pour les dimensions, mais vérifie chaque contrôle sur les navigateurs visés. :focus-visible doit produire un contour identifiable ; :disabled doit être distingué visuellement sans devenir illisible. Les états CSS reflètent l’état HTML mais ne remplacent ni la validation côté serveur ni des messages d’erreur explicites.', examples: [{ title: 'Champs et focus', language: 'css', code: `input, select, textarea, button { font: inherit; }

.field-control {
  width: 100%;
  min-height: 2.75rem;
  padding: 0.65rem 0.8rem;
  border: 1px solid var(--border);
  border-radius: 0.4rem;
  background: var(--surface);
  color: var(--text);
}

.field-control:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 2px;
}

.field-control:disabled { cursor: not-allowed; opacity: 0.65; }` }] },
      { title: 'Erreurs, validation et cohérence', body: 'required, valid et invalid permettent d’indiquer certains états natifs. Toutefois, :invalid peut être vrai dès le chargement pour un champ obligatoire vide, ce qui peut donner un formulaire rouge avant toute interaction. Une classe d’état ou une stratégie de validation progressive peut être préférable. Un message d’erreur doit nommer le problème et expliquer comment le corriger ; la seule bordure rouge est insuffisante. accent-color permet d’harmoniser certains contrôles natifs sans remplacer leur sémantique.', examples: [{ title: 'État d’erreur explicite', language: 'css', code: `.field[data-state="error"] .field-control,
.field-control[aria-invalid="true"] {
  border-color: var(--danger);
}

.field__error {
  color: var(--danger);
  font-size: 0.9rem;
}

input[type="checkbox"], input[type="radio"] { accent-color: var(--accent); }` }] },
      { title: 'Associer les styles à un vrai contrat HTML', body: 'Les sélecteurs CSS peuvent refléter les états natifs, mais ils ne créent pas à eux seuls la sémantique d’un champ. Assure-toi que chaque contrôle possède un label, que les instructions sont reliées au champ si nécessaire et que les erreurs sont décrites en texte. :invalid peut s’activer dès le chargement pour un champ requis vide ; selon le parcours, :user-invalid ou une classe d’état peut éviter de signaler une erreur avant l’interaction. Vérifie la prise en charge avant de dépendre d’une pseudo-classe récente.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.field-control { width: 100%; font: inherit; }
.field-control:focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }
.field-control[aria-invalid="true"] { border-color: var(--danger); }
.field__error { display: block; color: var(--danger); }` }] },
    ],
    exercise: 'Mets en forme un formulaire d’inscription avec label, aide, erreur, focus, désactivation et cases à cocher. Vérifie au clavier et avec des messages d’erreur textuels.',
  },
  {
    id: 'accessibilite-preferences',
    title: '15. Accessibilité visuelle et préférences utilisateur',
    summary: 'Une interface CSS accessible respecte les contrastes, le zoom, le focus, les préférences de mouvement et les modes de couleurs sans casser la structure HTML.',
    concepts: ['Contraste du texte et des composants.', 'Focus visible et indicateurs non basés uniquement sur la couleur.', 'prefers-reduced-motion, prefers-color-scheme et forced-colors.', 'Zoom, texte agrandi, cibles interactives et reflow.'],
    sections: [
      { title: 'Contraste, focus et zoom', body: 'Les exigences de contraste dépendent du type de contenu et de sa taille ; mesure les couleurs réellement composées plutôt que de supposer qu’une couleur de marque convient à tout. Les bordures qui identifient un contrôle et les indicateurs de focus doivent aussi être visibles. Le focus ne doit pas être supprimé sans remplacement. À fort zoom ou avec du texte agrandi, les blocs doivent pouvoir grandir, les boutons doivent accepter plusieurs lignes et le contenu ne doit pas être coupé par une hauteur fixe. Les cibles interactives doivent être suffisamment grandes et espacées pour limiter les erreurs.', examples: [{ title: 'Focus robuste et texte adaptable', language: 'css', code: `:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

button, .button { min-height: 2.75rem; padding: 0.65em 1em; }

.card__title { overflow-wrap: anywhere; }
.dialog { max-width: min(42rem, calc(100vw - 2rem)); max-height: 85dvh; overflow: auto; }` }] },
      { title: 'Préférences et mode à contraste forcé', body: 'prefers-reduced-motion permet de réduire les animations non essentielles ; prefers-color-scheme indique une préférence de thème ; forced-colors correspond à certains modes de couleurs forcées. Dans ce dernier cas, les couleurs système et les contours natifs peuvent être plus adaptés que des couleurs codées en dur. N’utilise pas des transitions longues pour des éléments qui apparaissent ou disparaissent fréquemment. Les animations informatives doivent rester compréhensibles sans mouvement, et un contenu clignotant ou très rapide doit être évité.', examples: [{ title: 'Respecter les préférences', language: 'css', code: `@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --text: #f1f3f5;
    --surface: #171a1f;
    --surface-muted: #242a32;
    --border: #515b68;
  }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .decorative-motion, .carousel__ambient { animation: none; transition: none; }
}

@media (forced-colors: active) {
  .button { border: 1px solid ButtonText; }
  :focus-visible { outline-color: Highlight; }
}` }] },
      { title: 'Ne pas neutraliser les préférences par une règle globale aveugle', body: 'La réduction du mouvement doit retirer ou atténuer les animations non essentielles, tout en préservant les transitions nécessaires à la compréhension de l’état. Une règle globale avec !important peut supprimer des animations indispensables ou imposer un comportement inattendu à des composants tiers. Commence par cibler les animations décoratives connues. Dans forced-colors, évite de coder en dur des couleurs arbitraires ; utilise les couleurs système et conserve les bordures et contours utiles. Teste au clavier et avec le mode de contraste forcé si disponible.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `@media (prefers-reduced-motion: reduce) {
  .decorative-motion, .carousel__ambient { animation: none; transition: none; }
  html { scroll-behavior: auto; }
}

@media (forced-colors: active) {
  .button { border: 1px solid ButtonText; }
  :focus-visible { outline: 2px solid Highlight; }
}` }] },
    ],
    exercise: 'Audite une interface en navigation clavier, zoom 200 %, thème sombre et réduction du mouvement. Note les défauts visuels et corrige-les sans masquer le contenu.',
  },
  {
    id: 'architecture-css',
    title: '16. Architecture, conventions et composants CSS',
    summary: 'Une feuille de style maintenable explicite les responsabilités, limite les effets de bord et facilite l’évolution des composants.',
    concepts: ['Organisation par couches, fichiers ou domaines.', 'Nommage de composants et variantes.', 'Jetons de design et propriétés personnalisées.', 'Portée des styles, dette CSS et limites des conventions.'],
    sections: [
      { title: 'Concevoir une architecture compréhensible', body: 'Il n’existe pas une architecture unique adaptée à tous les projets. Une petite page peut tenir dans une feuille ; une application peut séparer reset, jetons, éléments, composants et utilitaires. Le plus important est que les responsabilités soient stables et que les dépendances soient prévisibles. Les conventions BEM (bloc, élément, modificateur) offrent un vocabulaire possible, mais ne sont pas obligatoires. Les styles ne doivent pas dépendre d’une profondeur DOM fragile. Les styles globaux doivent rester peu nombreux et les composants doivent documenter leurs variantes.', examples: [{ title: 'Composant et variantes', language: 'css', code: `.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.65em 1em;
  font: inherit;
}

.button--primary { color: white; background: var(--accent); }
.button--secondary { color: var(--text); background: var(--surface); border-color: var(--border); }
.button--danger { color: white; background: var(--danger); }` }] },
      { title: 'Éviter la dette de cascade', body: 'Les symptômes de dette CSS sont les règles dupliquées, les sélecteurs trop spécifiques, les !important successifs et les overrides dont personne ne connaît la raison. Lors d’un refactoring, vérifie les pages et états concernés, supprime les règles mortes seulement si tu peux confirmer qu’elles ne sont plus utilisées, et garde les jetons de design sémantiques. @layer peut établir un ordre global de priorité. Les CSS Modules, le CSS-in-JS et les outils de build changent la portée ou le processus de génération, mais ils ne dispensent pas de comprendre la cascade du navigateur.', examples: [{ title: 'Couches de responsabilité', language: 'css', code: `@layer reset, tokens, base, layout, components, utilities;

@layer tokens {
  :root { --radius-card: 0.75rem; --space-card: 1.25rem; }
}

@layer components {
  .card { border-radius: var(--radius-card); padding: var(--space-card); }
}

@layer utilities {
  .u-visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
}` }] },
      { title: 'Faire évoluer les styles sans cascade accidentelle', body: 'Les jetons devraient porter un sens stable plutôt qu’un usage ponctuel : --color-danger est plus réutilisable que --red-2 si plusieurs composants expriment une erreur. Documente les exceptions, évite les sélecteurs qui traversent plusieurs composants et réserve les utilitaires aux besoins transversaux. Une convention telle que BEM est utile si l’équipe l’applique de façon cohérente ; elle n’est pas un standard obligatoire. Les couches peuvent définir une priorité explicite, mais les styles hors couche doivent être pris en compte.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `@layer reset, tokens, base, components, utilities;

@layer tokens {
  :root { --color-danger: #a32121; --space-card: 1.25rem; }
}
@layer components {
  .alert { padding: var(--space-card); border-inline-start: .25rem solid var(--color-danger); }
}
@layer utilities { .visually-muted { opacity: .8; } }` }] },
    ],
    exercise: 'Définis les jetons de couleur, espace et rayon, puis crée un bouton avec trois variantes. Réduis les règles globales et écris une courte convention de nommage.',
  },
  {
    id: 'transitions-animations',
    title: '17. Transitions, transformations et animations',
    summary: 'Les effets animés peuvent expliquer un changement d’état, mais doivent rester sobres, performants et compatibles avec les préférences de mouvement.',
    concepts: ['transition-property, duration, timing-function et delay.', 'transform, transform-origin et propriétés animables.', '@keyframes, animation-fill-mode et animation-iteration-count.', 'Réduction du mouvement et coût de rendu.'],
    sections: [
      { title: 'Transitions et transformations', body: 'Une transition interpole les changements d’une propriété lorsque sa valeur évolue. Limite transition-property aux propriétés voulues au lieu d’utiliser transition: all, qui peut animer des changements inattendus. transform déplace, tourne ou met à l’échelle une boîte sans modifier le flux normal. opacity et transform sont souvent plus favorables à l’animation que des propriétés qui déclenchent une nouvelle mise en page, mais le coût dépend du contexte. Les animations doivent apporter un signal utile, pas retarder l’accès à une action.', examples: [{ title: 'Retour d’interaction mesuré', language: 'css', code: `.button {
  transition: background-color 160ms ease, transform 160ms ease;
}
.button:hover { transform: translateY(-1px); }
.button:active { transform: translateY(0); }

.dialog { transform-origin: center; }` }] },
      { title: 'Keyframes et mouvement réduit', body: '@keyframes définit des étapes d’animation ; animation peut combiner nom, durée, timing, délai, répétition et mode de remplissage. Les animations infinies, clignotantes ou à fort contraste peuvent être distrayantes ou dangereuses. prefers-reduced-motion doit être traité comme une préférence réelle, et non comme un simple réglage cosmétique. Pour un mouvement non essentiel, supprime-le ou remplace-le par une transition discrète ; ne cache jamais l’information derrière une animation qui ne se termine pas.', examples: [{ title: 'Animation courte et alternative réduite', language: 'css', code: `@keyframes appear {
  from { opacity: 0; transform: translateY(0.5rem); }
  to { opacity: 1; transform: translateY(0); }
}

.toast { animation: appear 180ms ease-out both; }

@media (prefers-reduced-motion: reduce) {
  .toast { animation: none; }
  .button { transition: none; }
}` }] },
      { title: 'Animer l’état, pas la décoration au détriment de l’usage', body: 'Une transition doit renforcer la compréhension d’un changement d’état et rester assez courte pour ne pas retarder l’action. Évite d’animer width, height, margin ou top en continu lorsque transform ou opacity permettent le même résultat visuel, mais mesure si la performance est réellement un problème. Une animation infinie doit être justifiée et offrir une alternative lorsque le mouvement peut gêner. prefers-reduced-motion est un signal à respecter, pas une raison de supprimer tout retour visuel.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.button { transition: background-color 140ms ease, transform 140ms ease; }
.button:active { transform: translateY(1px); }

@media (prefers-reduced-motion: reduce) {
  .button { transition: none; }
  .button:active { transform: none; }
}` }] },
    ],
    exercise: 'Ajoute une transition de bouton et une animation d’apparition courte. Contrôle que le contenu reste immédiatement accessible et que l’animation est supprimée avec reduced-motion.',
  },
  {
    id: 'container-queries',
    title: '18. Container queries, styles de composants et fonctions modernes',
    summary: 'Les container queries permettent à un composant de s’adapter à la taille de son conteneur plutôt qu’à celle du viewport.',
    concepts: ['container-type et container-name.', '@container et conditions de taille.', 'Unités de conteneur cqw, cqh, cqi et cqb.', 'Progressive enhancement et compatibilité.'],
    sections: [
      { title: 'Répondre à l’espace du composant', body: 'Une media query répond à une caractéristique du viewport ou de l’environnement. Une container query répond à une caractéristique d’un conteneur déclaré, ce qui est utile lorsqu’un même composant apparaît dans une colonne étroite ou une page large. Pour interroger sa taille, le conteneur doit établir le type de containment adapté. La query ne peut pas simplement observer n’importe quel ancêtre sans déclaration. N’utilise pas de container queries pour remplacer toutes les media queries : choisis la source de contrainte qui correspond au problème.', examples: [{ title: 'Carte adaptative au conteneur', language: 'css', code: `.card-region { container-type: inline-size; }

.card {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
}

@container (min-width: 34rem) {
  .card { grid-template-columns: 10rem minmax(0, 1fr); align-items: start; }
}` }] },
      { title: 'Unités de conteneur et amélioration progressive', body: 'Les unités cqi et cqb suivent respectivement les dimensions logiques inline et block du conteneur ; cqw et cqh utilisent les dimensions physiques largeur et hauteur. Ces unités peuvent exprimer une typographie ou des espacements proportionnels à une zone. Les composants doivent toutefois conserver une taille minimale et maximale raisonnable pour éviter que le texte devienne minuscule dans un petit conteneur. Fournis une base fonctionnelle avant les fonctionnalités modernes et vérifie le support navigateur nécessaire au projet.', examples: [{ title: 'Dimensionnement borné dans un conteneur', language: 'css', code: `.card-region { container-type: inline-size; }
.card__title { font-size: clamp(1.1rem, 4cqi, 1.8rem); }

@supports (container-type: inline-size) {
  @container (min-width: 40rem) {
    .card__body { display: grid; grid-template-columns: 1fr 2fr; gap: 1rem; }
  }
}` }] },
      { title: 'Choisir le bon conteneur et éviter les effets de bord', body: 'Une container query dépend d’un ancêtre qui établit le type de containment approprié et d’un nom de conteneur éventuel. Elle convient aux composants réutilisés dans plusieurs zones, alors qu’une media query répond à l’environnement global. Les unités cqi et cqb sont relatives à l’axe logique du conteneur ; si aucun conteneur éligible n’est trouvé, elles peuvent se rabattre sur les unités de référence du viewport, ce qui rend le comportement difficile à prévoir. Garde une taille de base lisible et vérifie les cas où le composant est très étroit.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `.card-region { container: card / inline-size; }
.card { display: grid; grid-template-columns: 1fr; gap: 1rem; }
@container card (min-width: 36rem) {
  .card { grid-template-columns: 9rem minmax(0, 1fr); }
}` }] },
    ],
    exercise: 'Crée une carte utilisée dans deux conteneurs de largeurs différentes. Fais évoluer sa disposition avec @container et ajoute des limites qui évitent une typographie trop grande ou trop petite.',
  },
  {
    id: 'debug-css',
    title: '19. Débogage CSS et outils du navigateur',
    summary: 'Déboguer CSS consiste à formuler une hypothèse, inspecter la cascade et le layout, puis vérifier la correction dans plusieurs états.',
    concepts: ['Styles calculés, règles gagnantes et déclarations barrées.', 'Inspection des boîtes, Flexbox, Grid et couches.', 'Reproduction minimale et hypothèses testables.', 'Validation responsive, clavier et captures de régression.'],
    sections: [
      { title: 'Routine de diagnostic', body: 'Sélectionne l’élément dans l’inspecteur, repère la propriété qui ne correspond pas au résultat attendu, puis examine la déclaration gagnante et celles barrées. Vérifie que le sélecteur correspond, que la déclaration est valide, que le fichier CSS est chargé et que la règle n’est pas remplacée par une autre origine, couche ou spécificité. Inspecte ensuite les dimensions calculées, les marges, le modèle de boîte, les tailles minimales et le contexte de layout. Modifie temporairement une déclaration dans DevTools pour tester une hypothèse, puis reporte uniquement la correction nécessaire dans le code source.', examples: [{ title: 'Checklist de débogage', language: 'text', code: `1. L’élément correspond-il au sélecteur ?
2. La déclaration est-elle valide et chargée ?
3. Quelle règle gagne dans la cascade ?
4. Quelles sont les dimensions calculées ?
5. Un parent impose-t-il une contrainte de layout ?
6. Le défaut apparaît-il à une autre largeur ou avec du texte long ?` }] },
      { title: 'Réduire le problème et vérifier les régressions', body: 'Réduis le problème à la plus petite combinaison HTML/CSS qui le reproduit. Évite de corriger un symptôme global si le défaut concerne un seul composant. Vérifie les états hover, focus, disabled, invalid, le zoom, les langues longues, les images et les préférences. Les outils d’inspection Flexbox/Grid aident à visualiser les pistes et axes. Les captures visuelles peuvent repérer des régressions, mais elles ne remplacent pas la vérification du clavier, du contraste et de l’ordre sémantique.', examples: [{ title: 'Réduction d’un problème de grille', language: 'css', code: `.grid { display: grid; grid-template-columns: 12rem minmax(0, 1fr); }

/* Si l’enfant déborde, vérifier sa taille minimale et son contenu. */
.grid__content { min-width: 0; overflow-wrap: anywhere; }` }] },
      { title: 'Documenter la cause et vérifier la correction', body: 'Une correction est fiable lorsqu’elle explique le mécanisme et ne casse pas d’autres états. Note la règle gagnante, la contrainte de layout ou le chargement manquant qui causait le défaut. Retire ensuite les règles temporaires ajoutées dans DevTools et vérifie au minimum une largeur étroite, une largeur large, le clavier et un contenu long. Une capture visuelle ne détecte pas à elle seule un ordre de focus incorrect ou un contraste insuffisant.', examples: [{ title: 'Méthode et exemple', language: 'text', code: `Défaut observé : le contenu déborde dans la colonne principale.
Hypothèse : la piste ou l’enfant conserve une taille minimale intrinsèque.
Test : appliquer min-width: 0 à l’enfant dans DevTools.
Correction source : garder minmax(0, 1fr) et min-width: 0 si justifiés.
Régression : tester texte long, mobile, zoom et clavier.` }] },
    ],
    exercise: 'Reproduis volontairement un conflit de cascade, un débordement Grid et un focus invisible. Diagnostique chaque problème avec DevTools et consigne la cause plutôt que d’ajouter un correctif au hasard.',
  },
  {
    id: 'performance-maintenance',
    title: '20. Performance, compatibilité et maintenance',
    summary: 'La qualité CSS se mesure aussi à la stabilité visuelle, au coût de rendu, à la compatibilité et à la facilité de modification.',
    concepts: ['Réduire les styles inutilisés et les dépendances fragiles.', 'Éviter les recalculs coûteux et les animations inadaptées.', 'Compatibilité, @supports et amélioration progressive.', 'Stabilité de mise en page, cache et séparation des responsabilités.'],
    sections: [
      { title: 'Rendu et performance', body: 'Les changements CSS peuvent affecter le style, la mise en page, la peinture et la composition. Les propriétés qui changent les dimensions ou la position dans le flux peuvent déclencher un layout ; les effets visuels peuvent provoquer de la peinture ; transform et opacity sont souvent plus faciles à composer, sans garantie absolue. Évite de déclencher de grandes animations de largeur, hauteur ou top en continu. Réserve l’espace des images et composants chargés tardivement pour limiter les décalages. Les sélecteurs extrêmement complexes ne sont généralement pas le premier goulot d’étranglement : mesure avant d’optimiser.', examples: [{ title: 'Réserver la place et animer sobrement', language: 'css', code: `.avatar { width: 3rem; aspect-ratio: 1; border-radius: 50%; }

.loading-indicator {
  animation: pulse 1.2s ease-in-out infinite alternate;
}

@keyframes pulse { to { opacity: 0.45; } }

@media (prefers-reduced-motion: reduce) {
  .loading-indicator { animation: none; }
}` }] },
      { title: 'Compatibilité et maintenance', body: 'Les nouvelles propriétés doivent être évaluées selon les navigateurs réellement visés. @supports peut proposer une amélioration lorsque la fonctionnalité est disponible, mais ne détecte pas tous les détails de comportement. Les préfixes ne doivent pas être ajoutés au hasard : les outils de build peuvent gérer les besoins ciblés. Garde un style de base fonctionnel, documente les contraintes utiles et supprime les règles mortes lors d’un changement contrôlé. Le CSS ne doit jamais être la seule barrière de sécurité ou la seule validation des données.', examples: [{ title: 'Base et amélioration progressive', language: 'css', code: `.cards { display: flex; flex-wrap: wrap; gap: 1rem; }
.cards > * { flex: 1 1 16rem; }

@supports (display: grid) {
  .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); }
}` }] },
      { title: 'Mesurer avant de micro-optimiser', body: 'Le coût d’une feuille dépend notamment de sa taille, de la fréquence des changements et du travail de layout/paint qu’ils déclenchent. Les sélecteurs complexes sont rarement la première optimisation à entreprendre sans mesure. Utilise les outils de performance du navigateur pour repérer les longues tâches, recalculs de style, mises en page et peintures. Supprime les règles mortes avec prudence, surtout si elles sont utilisées par des classes ajoutées dynamiquement. La stabilité visuelle et la maintenabilité sont aussi des indicateurs de qualité.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `/* Préférer une animation de composition lorsque le résultat est équivalent. */
.drawer { transform: translateX(100%); transition: transform 180ms ease; }
.drawer[aria-hidden="false"] { transform: translateX(0); }

@media (prefers-reduced-motion: reduce) { .drawer { transition: none; } }` }] },
    ],
    exercise: 'Audite une page pour les règles dupliquées, les hauteurs fixes, les animations de layout et les décalages de contenu. Propose trois corrections justifiées et indique comment les mesurer.',
  },
  {
    id: 'impression-architecture-final',
    title: '21. Impression, intégration et revue finale',
    summary: 'Un cours CSS complet se conclut par l’intégration de tous les concepts dans une interface réelle, vérifiée dans plusieurs modes d’utilisation.',
    concepts: ['@media print, sauts de page et suppression des éléments inutiles.', 'Styles globaux, composants et thèmes cohérents.', 'Checklist de revue responsive et accessibilité.', 'Documentation des décisions et dette technique résiduelle.'],
    sections: [
      { title: 'Préparer une version imprimable', body: 'Les pages imprimées ont des contraintes différentes du viewport. Les navigations, boutons et éléments décoratifs peuvent être masqués si leur suppression ne retire pas d’information. Les couleurs d’arrière-plan ne sont souvent pas imprimées, donc le contenu doit rester lisible sans elles. Évite de forcer chaque carte sur une page distincte sans raison ; break-inside: avoid peut aider pour des blocs courts, mais ne doit pas produire des pages vides ou des coupures excessives. Les liens importants peuvent afficher leur URL dans certains documents imprimés, à condition de ne pas allonger inutilement chaque ligne.', examples: [{ title: 'Feuille de style d’impression', language: 'css', code: `@media print {
  .site-header, .site-footer, .button, .filters { display: none !important; }
  body { color: #000; background: #fff; font-size: 11pt; }
  a { color: inherit; text-decoration: underline; }
  .card, figure, blockquote { break-inside: avoid; }
  main { width: 100%; max-width: none; }
}` }] },
      { title: 'Revue globale d’une interface', body: 'Avant de livrer, vérifie que les styles de base fonctionnent sans dépendre d’un ordre accidentel, que les composants ont des états explicites, que les jetons sont cohérents et que les règles modernes ont une solution de repli lorsque c’est nécessaire. Parcours la page au clavier, vérifie le focus, les contrastes, le zoom, le texte long, les préférences de mouvement et le mode impression. Documente les compromis non résolus : la qualité ne consiste pas à prétendre que tout est parfait, mais à rendre les décisions et limites compréhensibles.', examples: [{ title: 'Checklist de livraison CSS', language: 'text', code: `□ Aucun débordement horizontal inexpliqué
□ Zoom et texte agrandi utilisables
□ Focus visible sur tous les contrôles
□ États erreur/désactivé compréhensibles
□ Mouvement réduit respecté
□ Thème et contraste vérifiés
□ Images et médias dimensionnés
□ Styles d’impression lisibles
□ Règles et jetons nommés clairement` }] },
      { title: 'Valider le résultat comme un produit, pas comme une capture', body: 'Le projet final doit être contrôlé avec des contenus réels, un clavier, un zoom élevé et les préférences système. Vérifie que les styles d’impression conservent le titre, les informations essentielles, les URLs utiles et une hiérarchie lisible. Les propriétés de saut de page sont des indications au moteur d’impression : elles peuvent être adaptées selon le format et le contenu. Documente les navigateurs testés, les problèmes connus et les compromis. Une interface ne peut pas être qualifiée d’accessible sur la seule base de ses règles CSS.', examples: [{ title: 'Méthode et exemple', language: 'css', code: `@media print {
  .site-nav, .filters, .booking-actions { display: none !important; }
  body { color: #000; background: #fff; font-size: 11pt; }
  a { color: inherit; text-decoration: underline; }
  .event-card { break-inside: avoid; }
}` }] },
    ],
    exercise: 'Finalise le projet de réservation du cours. Ajoute une feuille d’impression, mène une revue responsive et accessibilité, puis rédige une courte note listant les choix CSS, les tests manuels effectués et les limites restantes.',
  },
];
