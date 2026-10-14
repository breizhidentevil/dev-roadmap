# Guide d’étude — TypeScript approfondi

Ce parcours suppose que JavaScript moderne est déjà maîtrisé. Il ne reprend pas les variables, boucles, fonctions, objets ou promesses comme sujets autonomes : ces éléments servent de support pour apprendre le système de types.

## Méthode pour chaque module

1. Lis l’explication de la section et reformule la garantie statique en une phrase.
2. Recopie chaque exemple dans un fichier TypeScript isolé et prédis le type obtenu avant de demander au compilateur.
3. Modifie volontairement le code pour provoquer une erreur de type ; note si l’erreur est statique ou si une validation runtime est nécessaire.
4. Réalise l’atelier sans regarder tes notes, puis vérifie les critères d’acceptation.
5. Ajoute un test positif et un test négatif quand cela a du sens.

## Ordre de travail recommandé

- Modules 1–5 : modèle mental, inférence, objets, unions et gardes de type. Ne passe pas aux types calculés avant de savoir expliquer unknown, never et le narrowing.
- Modules 6–8 : signatures, génériques et relations entre clés et valeurs. Priorise la précision des contrats plutôt que la sophistication.
- Modules 9–12 : transformations, types conditionnels, chaînes calculées et tuples. Construis une table de cas pour chaque utilitaire avancé.
- Modules 13–15 : classes, modules, déclarations et configuration. Vérifie toujours le runtime cible et la résolution réelle des imports.
- Modules 16–19 : validation runtime, contrats d’API, React, tests de types et publication. Rappelle-toi qu’un type ne valide jamais une donnée externe à lui seul.
- Module 20 : construis le projet final en étapes et conserve une frontière claire entre transport, domaine et stockage.

## Contrôle final

Tu maîtrises un module lorsque tu peux expliquer ses compromis, prévoir les types inférés, résoudre un cas invalide sans assertion arbitraire et montrer comment tester le contrat.
