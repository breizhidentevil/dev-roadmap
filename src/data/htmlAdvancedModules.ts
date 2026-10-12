import type { CourseModule } from './types';

export const htmlAdvancedModules: CourseModule[] = [
  {
    id: 'categories-modeles',
    title: '16. Catégories de contenu et modèles d’imbrication',
    summary: 'Les catégories de contenu décrivent les rôles des éléments et aident à comprendre ce que chacun peut contenir.',
    concepts: ['Metadata content configure le document ; flow content forme le corps ; phrasing content compose le texte.', 'Sectioning content crée les régions de page ; heading content nomme les sections.', 'Embedded, interactive, palpable et script-supporting décrivent des usages différents.', 'Les modèles de contenu définissent les descendants autorisés ; le modèle transparent dépend du parent.', 'Les éléments de formulaire possèdent des sous-catégories qui gouvernent association, focus et soumission.'],
    sections: [
      {
        title: 'Pourquoi les catégories existent',
        body: 'Les catégories ne sont pas des attributs à ajouter : elles décrivent les possibilités et contraintes d’un élément. Un paragraphe accepte du contenu phrasing, une liste accepte des li, et head accepte du contenu metadata. Un même élément peut relever de plusieurs catégories selon ses attributs : a avec href devient interactif ; audio est interactif lorsqu’il expose controls.',
        examples: [{
          title: 'Imbrication valide et modèle phrasing',
          language: 'html',
          code: `<article>
  <h2>Préparer un semis</h2>
  <p>Choisissez un contenant <strong>propre</strong> et percé.</p>
  <ul>
    <li>Humidifier le substrat.</li>
    <li>Placer les graines à faible profondeur.</li>
  </ul>
</article>

<!-- Invalide : p n’accepte pas ul comme enfant. -->
<!-- <p>Étapes : <ul><li>Préparer</li></ul></p> -->`,
        }],
      },
      {
        title: 'Contenu transparent et éléments vides',
        body: 'Un modèle transparent reprend une partie du modèle de son parent ; il ne signifie pas « accepte tout ». Les contraintes continuent de s’appliquer aux descendants. Les éléments vides comme img et input ne peuvent contenir d’enfants. Le slash final peut apparaître en XHTML, mais il ne ferme pas un élément HTML non vide servi en text/html.',
      },
      {
        title: 'Lire les erreurs de modèle',
        body: 'Un message « element X not allowed as child of Y » signale généralement un conflit de modèle de contenu. Vérifie le parent immédiat, la catégorie attendue et le contexte, par exemple li dans une liste ou tr dans un groupe de lignes. Ne corrige pas en ajoutant des div au hasard : garde le sens du document.',
      },
    ],
    exercise: 'Classe les éléments de ta page finale en metadata, flow, phrasing, sectioning et interactive. Identifie trois relations parent/enfant valides et deux invalides, puis vérifie-les avec un validateur.',
  },
  {
    id: 'attributs-globaux-popover',
    title: '17. Attributs globaux, focus et popovers',
    summary: 'Les attributs globaux influencent identité, langue, édition, focus et interactions natives, parfois sur presque tous les éléments.',
    concepts: ['id est unique ; class est une liste de tokens réutilisables ; data-* expose des données non sensibles au DOM.', 'lang, dir, translate, title, hidden, inert, contenteditable, spellcheck et autofocus ont des effets distincts.', 'tabindex négatif, zéro et positif changent différemment le focus ; les valeurs positives sont à éviter.', 'accesskey dépend du navigateur et du clavier, ce n’est pas un raccourci universel.', 'popover, popovertarget et popovertargetaction exposent une interaction native déclarative.'],
    sections: [
      {
        title: 'Identité, langue, direction et données',
        body: 'id doit être unique dans le document et sert aux fragments, labels et références ARIA. class ne donne pas de sémantique. data-* expose une donnée au DOM, jamais un secret. lang accepte un tag de langue ; dir peut valoir ltr, rtl ou auto. title donne une information consultative, mais ne remplace pas un label visible.',
        examples: [{
          title: 'Attributs globaux avec un usage explicite',
          language: 'html',
          code: `<article id="fiche-42" lang="fr" data-category="semis">
  <h2>Tomate ancienne</h2>
  <p>Nom scientifique : <i lang="la">Solanum lycopersicum</i>.</p>
  <p><bdi dir="auto">النص الذي أدخله المستخدم</bdi></p>
  <p><data value="SKU-0042">Référence 42</data></p>
</article>`,
        }],
      },
      {
        title: 'Focus, édition et visibilité',
        body: 'tabindex="0" rend un élément focalisable dans l’ordre normal ; tabindex="-1" le rend focalisable par script sans l’ajouter à la tabulation ; les valeurs positives créent un ordre fragile. contenteditable active l’édition et peut produire du HTML non fiable. hidden retire normalement un contenu pertinent de l’affichage ; inert neutralise interaction et focus d’une sous-arborescence. spellcheck et autocapitalize sont des indications, pas des validations.',
      },
      {
        title: 'Popover et dialogue ne sont pas synonymes',
        body: 'popover transforme un élément en surface affichable/masquable par le navigateur ; un bouton le contrôle avec popovertarget. Le mode auto permet fermeture par Échap ou clic extérieur ; manual laisse le contrôle explicite. Un popover n’est pas modal et ne bloque pas le reste de la page. Choisis dialog et showModal si l’interaction doit être modale.',
        examples: [{
          title: 'Popover contrôlé sans JavaScript applicatif',
          language: 'html',
          code: `<button type="button" popovertarget="aide-jardin" popovertargetaction="toggle">
  Afficher l’aide
</button>
<div id="aide-jardin" popover="auto">
  <h2>Conseil de saison</h2>
  <p>Arrosez tôt le matin pour limiter l’évaporation.</p>
  <button type="button" popovertarget="aide-jardin" popovertargetaction="hide">
    Fermer l’aide
  </button>
</div>`,
        }],
      },
    ],
    exercise: 'Ajoute à une fiche un id unique, une langue secondaire, un data-* non sensible et un popover contrôlé par deux boutons. Vérifie Tab, Échap et le clic extérieur.',
  },
  {
    id: 'templates-web-components',
    title: '18. Templates, slots et Web Components',
    summary: 'HTML fournit des briques déclaratives aux composants Web. Le balisage définit le contrat ; JavaScript apporte l’enregistrement et le comportement.',
    concepts: ['template conserve un fragment inerte qui n’est pas rendu avant clonage ou activation.', 'slot réserve un point d’insertion dans un shadow tree.', 'Un custom element autonome utilise un nom avec tiret et doit être enregistré avec JavaScript.', 'slot et part relient contenu fourni, shadow DOM et styles exposés.', 'Declarative Shadow DOM utilise un template spécialisé dont la compatibilité doit être vérifiée.'],
    sections: [
      {
        title: 'template : stocker un fragment',
        body: 'Le contenu d’un template est conservé dans un DocumentFragment inerte ; il ne s’affiche pas au chargement. Un script peut le cloner puis renseigner ses données. Les scripts du template ne s’exécutent pas simplement parce qu’ils y sont présents. Garde les id uniques après clonage et insère les données comme texte lorsque leur origine n’est pas fiable.',
        examples: [{
          title: 'Template de carte réutilisable',
          language: 'html',
          code: `<template id="garden-card-template">
  <article class="garden-card">
    <h2 class="garden-card__title"></h2>
    <p class="garden-card__description"></p>
    <a class="garden-card__link">Consulter le jardin</a>
  </article>
</template>`,
        }],
      },
      {
        title: 'Custom elements et projection avec slot',
        body: 'Un nom comme garden-card est un custom element autonome. Une classe JavaScript l’enregistre avec customElements.define ; sans enregistrement, le navigateur conserve un élément inconnu sans logique applicative. Dans un shadow root, slot réserve les emplacements du contenu fourni par le consommateur.',
        examples: [{
          title: 'Contrat HTML consommateur et template shadow',
          language: 'html',
          code: `<garden-card>
  <span slot="title">Jardin des Tilleuls</span>
  <p>Ouvert le samedi matin.</p>
</garden-card>

<template id="garden-card-shadow">
  <article>
    <h2><slot name="title">Jardin sans nom</slot></h2>
    <slot></slot>
  </article>
</template>`,
        }],
      },
      {
        title: 'Frontière entre HTML et JavaScript',
        body: 'slot, customElements.define, attachShadow et le clonage d’un template sont des API JavaScript qui manipulent des éléments HTML. Ce cours détaille leur contrat déclaratif ; leur programmation appartient au cours JavaScript/TypeScript. Vérifie le support du Declarative Shadow DOM et prévois un repli pour les navigateurs ciblés.',
      },
    ],
    exercise: 'Écris le balisage consommateur d’un composant carte avec un slot nommé titre et un slot par défaut. Crée aussi un template de liste et indique les opérations qui exigent JavaScript.',
  },
  {
    id: 'donnees-structurees',
    title: '19. Métadonnées et données structurées',
    summary: 'Les métadonnées relient le document à des ressources ou décrivent sa nature. Microdata et JSON-LD exposent des relations machine-readable sans remplacer le contenu visible.',
    concepts: ['link rel décrit stylesheet, icon, canonical, alternate ou preload.', 'La meta description est un résumé possible ; meta keywords n’est pas une stratégie SEO moderne.', 'Open Graph est une convention tierce pour les aperçus sociaux, pas une règle centrale HTML.', 'Microdata relie des valeurs avec itemscope, itemtype, itemprop, itemid et éventuellement itemref.', 'JSON-LD s’embarque dans script type="application/ld+json" ; les données doivent rester cohérentes avec le contenu visible.'],
    sections: [
      {
        title: 'Relations de ressources',
        body: 'link ne sert pas uniquement à charger CSS : rel peut décrire une icône, une URL canonique, une variante linguistique ou une licence. base change la résolution de toutes les URLs relatives du document et peut casser les liens ; utilise-le rarement. Les métadonnées propriétaires doivent être identifiées comme telles.',
        examples: [{
          title: 'Métadonnées et relations',
          language: 'html',
          code: `<head>
  <title>Guide du compost — Jardin du quartier</title>
  <meta name="description" content="Comprendre le compostage partagé et ses étapes.">
  <link rel="canonical" href="https://example.org/guides/compost/">
  <link rel="alternate" hreflang="en" href="https://example.org/en/guides/compost/">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta property="og:title" content="Guide du compost">
  <meta property="og:type" content="article">
</head>`,
        }],
      },
      {
        title: 'Microdata',
        body: 'itemscope délimite l’objet, itemtype indique un vocabulaire et itemprop nomme ses propriétés. itemid peut identifier globalement l’objet ; itemref relie des propriétés situées ailleurs par id. N’ajoute cette couche que si un consommateur en a besoin et si les valeurs correspondent exactement au contenu visible.',
        examples: [{
          title: 'Microdata d’un article',
          language: 'html',
          code: `<article itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">Le compost partagé au fil des saisons</h1>
  <p>Par <span itemprop="author">L’équipe du jardin</span></p>
  <time itemprop="datePublished" datetime="2026-04-12">12 avril 2026</time>
</article>`,
        }],
      },
      {
        title: 'JSON-LD et exactitude des données',
        body: 'JSON-LD est un format de données liées, pas une balise de présentation. script type="application/ld+json" l’embarque comme bloc de données non exécuté comme JavaScript. Un validateur contrôle la syntaxe, mais seule la véracité éditoriale évite de publier des informations trompeuses. Ne génère pas le JSON par concaténation de chaînes contenant des entrées utilisateur.',
        examples: [{
          title: 'JSON-LD de type Article',
          language: 'html',
          code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Le compost partagé au fil des saisons",
  "datePublished": "2026-04-12",
  "author": { "@type": "Organization", "name": "Jardin du quartier" }
}
</script>`,
        }],
      },
    ],
    exercise: 'Ajoute title, description, canonical et une donnée structurée à un article. Vérifie que les données machine-readable sont présentes, syntaxiquement valides et cohérentes avec le contenu visible.',
  },
  {
    id: 'elements-specialises',
    title: '20. Familles spécialisées et éléments moins fréquents',
    summary: 'Certains éléments répondent à des besoins ciblés. Savoir les reconnaître permet de choisir une sémantique adaptée au lieu d’inventer du balisage.',
    concepts: ['address décrit le contact de la page ou de son ancêtre ; ins/del marquent des modifications éditoriales.', 'data relie une valeur machine à un libellé ; time reste préférable pour les dates et durées.', 'ruby/rt/rp annotent la prononciation ; bdi/bdo gèrent la bidirectionnalité.', 'map/area définissent une image map ; ses zones doivent avoir des alternatives utilisables au clavier.', 'output, progress et meter représentent respectivement un résultat, une progression de tâche et une mesure dans une plage connue.'],
    sections: [
      {
        title: 'Éditions, définitions et valeurs machine',
        body: 'address sert aux informations de contact pertinentes pour la page ou la section. ins et del documentent une révision, avec datetime et éventuellement cite. data associe une valeur machine à un libellé humain ; dfn marque un terme défini dans son contexte ; abbr peut développer un sigle. Ces éléments ne sont pas des variantes stylistiques interchangeables.',
        examples: [{
          title: 'Révision et données lisibles par machine',
          language: 'html',
          code: `<p>La collecte commence le <del datetime="2026-04-01">1er avril</del>
  <ins datetime="2026-04-03">3 avril</ins>.</p>
<p>Variété : <data value="tomato-black-krim">Noire de Crimée</data>.</p>
<p><dfn>Paillage</dfn> : couverture protectrice du sol.</p>
<address>Contact : <a href="mailto:contact@example.org">équipe du jardin</a></address>`,
        }],
      },
      {
        title: 'Ruby, texte bidirectionnel et images cliquables',
        body: 'ruby associe une annotation courte au texte de base ; rt fournit la prononciation, rp une ponctuation de repli. bdi isole une séquence de direction inconnue ; bdo impose explicitement une direction et reste rare. map et area associent des formes et coordonnées à des liens : fournis également des liens équivalents si une personne ne peut pas utiliser le pointage.',
        examples: [{
          title: 'Ruby et contenu bidirectionnel',
          language: 'html',
          code: `<p><ruby>東京<rp>(</rp><rt>とうきょう</rt><rp>)</rp></ruby></p>
<p>Identifiant fourni : <bdi dir="auto">مستخدم-42</bdi></p>

<img src="plan.jpg" usemap="#plan" alt="Plan des bâtiments du jardin" width="800" height="500">
<map name="plan">
  <area shape="rect" coords="20,20,180,120" href="/serre/" alt="Visiter la serre">
</map>
<nav aria-label="Lieux du plan"><a href="/serre/">Visiter la serre</a></nav>`,
        }],
      },
      {
        title: 'Résultat, progression et recherche',
        body: 'output peut être relié à des contrôles avec for et expose un résultat calculé. progress indique une tâche en cours ; meter indique une mesure bornée avec seuils et optimum. search marque une région dédiée à la recherche ; menu peut contenir des commandes, mais nav reste préférable pour les navigations de site.',
        examples: [{
          title: 'Indicateurs avec noms accessibles',
          language: 'html',
          code: `<label for="plant-progress">Plantation</label>
<progress id="plant-progress" value="7" max="10">7 sur 10</progress>

<label for="soil-ph">Acidité du sol</label>
<meter id="soil-ph" min="0" max="14" low="5" high="8" optimum="6.5" value="6.8">pH 6,8</meter>`,
        }],
      },
    ],
    exercise: 'Choisis trois éléments spécialisés adaptés à une fiche ou un article et justifie leur sens. Construis une image map seulement si elle apporte une interaction utile, avec des alternatives équivalentes.',
  },
  {
    id: 'obsolete-compatibilite',
    title: '21. Éléments obsolètes, XHTML et compatibilité',
    summary: 'Le Web conserve des balises historiques et plusieurs syntaxes apparentées. Les reconnaître évite de les réintroduire et aide à diagnostiquer des documents hérités.',
    concepts: ['font, center, marquee, frameset, acronym et plusieurs attributs de présentation sont obsolètes ou non conformes.', 'text/html et application/xhtml+xml ont des règles de parsing différentes.', 'Les balises de fermeture optionnelles sont limitées aux cas prévus par la syntaxe.', 'Le slash d’auto-fermeture n’a pas le sens XML pour un élément non vide en HTML.', 'Support navigateur, statut normatif et conformité sont trois questions différentes.'],
    sections: [
      {
        title: 'Repérer et remplacer le balisage hérité',
        body: 'center et font mélangeaient présentation et structure ; CSS fournit aujourd’hui l’alignement et la typographie. marquee et blink sont non conformes. frameset n’est pas le modèle iframe ; acronym a été remplacé par abbr. Modernise progressivement : comprends le rendu existant, teste les lecteurs, puis remplace chaque construction par son équivalent sémantique.',
        examples: [{
          title: 'Remplacement moderne d’un ancien fragment',
          language: 'html',
          code: `<!-- Ancien balisage à éviter : -->
<!-- <center><font color="red">Important</font></center> -->

<!-- Structure sémantique ; présentation séparée en CSS. -->
<p class="notice"><strong>Important</strong></p>
<p>Le terme <abbr title="HyperText Markup Language">HTML</abbr> désigne un langage de balisage.</p>`,
        }],
      },
      {
        title: 'HTML et XHTML ne sont pas interchangeables',
        body: 'Un document text/html utilise l’algorithme de parsing HTML et tolère seulement les end tags explicitement optionnels. Un document application/xhtml+xml suit XML : les balises doivent être bien formées, fermées et sensibles à la casse. Ajouter un slash à un élément non vide en text/html ne corrige pas une imbrication. Le doctype moderne déclenche le mode standards ; des documents historiques peuvent déclencher le mode quirks.',
      },
      {
        title: 'Norme, support et fonctionnalités expérimentales',
        body: 'La spécification détermine le comportement conforme ; les tables de compatibilité décrivent les implémentations réelles. Des attributs tels que headingoffset, de nouveaux états de select ou certaines fonctions de popover peuvent être expérimentaux ou inégalement supportés. Sépare les fondamentaux largement disponibles des extensions et vérifie les navigateurs ciblés avant de les rendre indispensables.',
      },
    ],
    exercise: 'Analyse une page héritée et inventorie balises et attributs obsolètes. Remplace-les par HTML sémantique et CSS séparé ; identifie son type MIME et sa syntaxe de parsing.',
  },
];