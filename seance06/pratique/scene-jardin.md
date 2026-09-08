# La scène du jardin

## Objectif

Construisez une première scène statique dans un Canvas avec un fond, un message et une image.

## Préparation

1. Copiez le dossier [prog-base](../prog-base/) dans un nouveau dossier nommé `scene-jardin`.
2. Ouvrez `index.html` dans votre navigateur.
3. Observez le Canvas et le code dans `assets/js/script.js`.

## Consignes

Dans `assets/js/script.js` :

1. Modifiez le texte affiché avec `fillText()` pour donner une instruction au joueur.
2. Modifiez la position du joueur dessiné avec `fillRect()`.
3. Modifiez la position et la taille de l'image de la luciole avec `drawImage()`.
4. Ajoutez une deuxième forme simple dans la scène.
5. Ajoutez une fonction `dessinerScene()` qui efface le Canvas avec `clearRect()` avant de redessiner le fond, le texte, le joueur et la luciole.
6. Appelez `dessinerScene()` une première fois pour afficher la scène.

## Vérification

Avant de montrer votre travail :

- le Canvas s'affiche sans erreur;
- le texte est visible dans la scène;
- l'image de la luciole apparaît après son chargement;
- la scène contient un fond, un joueur et une luciole;
- `clearRect()` est utilisé avant le redessin;
- les chemins vers les fichiers sont respectés.
