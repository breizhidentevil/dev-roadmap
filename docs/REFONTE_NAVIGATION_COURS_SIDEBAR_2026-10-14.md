# Refonte de la section Cours — 14 octobre 2026

## Objectif

Remplacer, lorsque le filtre « Cours » est actif, la succession de cartes de tous les modules par une bibliothèque à navigation latérale. La navigation doit rester utilisable au clavier et s'adapter aux écrans étroits.

## Changements

- Ajout d'une sidebar listant les cours disponibles, leur catégorie et leur nombre de modules.
- Sélection d'un cours par bouton avec `aria-pressed` et mise en évidence du choix actif.
- Présentation des modules du cours sélectionné sous forme de lignes compactes avec numéro, résumé et nombre de notions.
- Recherche conservée : elle filtre les cours et modules proposés dans la bibliothèque.
- Sur les petits écrans, la sidebar devient une rangée horizontale défilante plutôt qu'une colonne fixe.
- Le filtre « Tout » conserve la présentation actuelle du catalogue ; la nouvelle mise en page s'applique au filtre « Cours ».
- Mise à jour du test de catalogue pour vérifier les neuf cours dans la sidebar, le volume total et le changement de cours.

## Vérifications

La validation statique du catalogue est exécutée séparément. Vitest, le typecheck et le build ne sont pas exécutés conformément à la consigne de ne pas lancer ces opérations hors de Codex.
