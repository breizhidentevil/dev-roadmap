# Amélioration de la navigation des compétences — 14 octobre 2026

## Changements

- Le filtre « Compétences » utilise maintenant une bibliothèque à deux colonnes, cohérente avec la bibliothèque de cours.
- La sidebar liste les chapitres pertinents pour la recherche et le nombre de compétences dans chacun.
- La zone principale affiche les compétences du chapitre sélectionné sous forme de lignes compactes, avec numéro, titre, description et lien vers le tutoriel.
- La recherche existante continue de filtrer les compétences et les chapitres.
- Sur écran étroit, la sidebar devient une liste horizontale défilante.
- Les boutons exposent l’état de sélection avec `aria-pressed`, et les liens/boutons conservent un indicateur de focus visible.
- Le test de catalogue vérifie désormais la navigation entre chapitres au lieu d’attendre que les 169 liens soient affichés simultanément.

## Contrôles

- Validation statique du catalogue : réussie (25 chapitres, 174 entrées, 169 compétences et 5 projets).
- Les tests Vitest, le typecheck et le build n’ont pas été exécutés.
