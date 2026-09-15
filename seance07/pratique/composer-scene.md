# Composer la scène du jardin

## Objectif

Reprendre la scène Canvas de la séance 6 et la compléter avec plusieurs images chargées, un message et un ordre de dessin clair.

## Préparation

1. Copiez le dossier [prog-base](../prog-base/) dans un nouveau dossier nommé `composer-scene`.
2. Ouvrez `index.html` dans votre navigateur.
3. Observez le Canvas et le fichier `assets/js/script.js`.

## Consignes

Dans `assets/js/script.js` :

1. Conservez la récupération du Canvas et du contexte 2D.
2. Créez une deuxième image avec `new Image()` pour représenter le joueur.
3. Définissez son chemin dans `src`. Vous pouvez utiliser l'image fournie.
4. Créez une fonction nommée `initialiser()` qui appelle `dessinerScene()`.
5. Appelez `initialiser` lorsque la fenêtre est chargée avec `window.addEventListener("load", initialiser)`.
6. Dans `dessinerScene()`, effacez d'abord le Canvas avec `clearRect()`.
7. Dessinez ensuite le fond, le message, le joueur, puis la luciole.
8. Redimensionnez au moins une image avec les quatre derniers paramètres de `drawImage()`.
9. Modifiez les coordonnées pour composer votre propre scène.

## Vérification

Avant de montrer votre travail :

- le texte est visible;
- les deux images apparaissent après leur chargement;
- l'ordre des couches est logique;
- au moins une image est redimensionnée;
- `clearRect()` est appelé avant le redessin;
- la console ne contient aucune erreur.
