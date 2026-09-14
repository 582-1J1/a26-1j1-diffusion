# Séance 7 - Construire une scène avec le Canvas
- Reprise du Canvas et du contexte de dessin 2D
- Affichage de texte avec `fillText()`
- Chargement, redimensionnement et affichage d'images
- Effacement et redessin de la surface

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- récupérer un Canvas et son contexte de dessin 2D;
- afficher un message avec `fillText()`;
- créer une image avec `new Image()`;
- attendre le chargement d'une image avant de la dessiner;
- organiser une scène en couches visuelles;
- redimensionner une image avec `drawImage()`;
- effacer et redessiner une scène.

## 1. Reprendre les bases du Canvas

La balise `<canvas>` fournit une surface de dessin. JavaScript récupère la balise et son contexte 2D :

```js
const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");
```

Le contexte contient les méthodes qui permettent de dessiner le fond, les formes, le texte et les images.

## 2. Afficher du texte

On choisit une couleur et une police avant d'afficher un message avec `fillText()` :

```js
contexte.fillStyle = "#f6bd60";
contexte.font = "28px sans-serif";
contexte.fillText("Trouvez la luciole !", 30, 45);
```

La position du texte est donnée par ses coordonnées `x` et `y`.

## 3. Créer et charger une image

Pour afficher une image, on crée un objet `Image`, puis on lui attribue un chemin :

```js
const imageLuciole = new Image();
imageLuciole.src = "assets/images/luciole.svg";
```

Le navigateur doit avoir terminé le chargement avant que l'image puisse être dessinée. On peut utiliser l'événement `load` :

```js
function imageLucioleChargee() {
  dessinerScene();
}

imageLuciole.addEventListener("load", imageLucioleChargee);
```

Cette forme d'écouteur sera étudiée plus en détail dans une séance ultérieure. Ici, elle sert à attendre une ressource avant de l'utiliser.

## 4. Dessiner dans le bon ordre

Le Canvas est dessiné par couches. Chaque nouveau dessin apparaît par-dessus les dessins précédents. Pour une scène de jeu, on peut suivre cet ordre :

1. l'arrière-plan;
2. le texte ou les éléments du décor;
3. le joueur;
4. les objets importants, comme une luciole.

```js
function dessinerScene() {
  contexte.clearRect(0, 0, canvas.width, canvas.height);

  contexte.drawImage(imageArrierePlan, 0, 0, canvas.width, canvas.height);
  contexte.fillText("Trouvez la luciole !", 30, 45);
  contexte.drawImage(imageJoueur, 100, 220, 40, 40);
  contexte.drawImage(imageLuciole, 600, 180, 40, 40);
}
```

L'ordre permet de contrôler ce qui reste visible lorsque les éléments se chevauchent.

## 5. Redimensionner une image

`drawImage()` peut recevoir l'image, sa position, sa largeur et sa hauteur :

```js
contexte.drawImage(imageLuciole, 600, 180, 40, 40);
```

Les deux derniers nombres redimensionnent l'image au moment du dessin. L'image originale n'est pas modifiée.

Une image peut aussi être dessinée à sa taille originale :

```js
contexte.drawImage(imageLuciole, 600, 180);
```

## 6. Effacer et redessiner

Avant de redessiner une scène, on efface le contenu précédent :

```js
contexte.clearRect(0, 0, canvas.width, canvas.height);
```

Une fonction de dessin rassemble les instructions dans un ordre prévisible :

```js
function dessinerScene() {
  contexte.clearRect(0, 0, canvas.width, canvas.height);
  contexte.fillStyle = "#102a43";
  contexte.fillRect(0, 0, canvas.width, canvas.height);
  contexte.fillText("Le jardin des lucioles", 30, 45);
}
```

À la séance 6, cette fonction était une première organisation de la scène. Aujourd'hui, nous l'utilisons pour gérer plusieurs images et leur chargement.

## 7. Préparer le projet fil-rouge

La scène du Jardin des lucioles commence à prendre sa forme : un arrière-plan, un joueur, une luciole et un message. Elle est encore statique. Les prochaines séances ajouteront progressivement des événements et du mouvement.

```js
const imageLuciole = new Image();
imageLuciole.src = "assets/images/luciole.svg";

function imageLucioleChargee() {
  dessinerScene();
}

imageLuciole.addEventListener("load", imageLucioleChargee);
```

Le principe important est de ne pas tenter de dessiner l'image avant qu'elle soit prête.

## À retenir

- Le contexte 2D fournit les méthodes de dessin du Canvas.
- `fillText()` affiche du texte.
- Une image doit être chargée avant d'être dessinée.
- `drawImage()` peut positionner et redimensionner une image.
- L'ordre des instructions détermine l'ordre des couches visuelles.
- `clearRect()` efface la scène avant un nouveau dessin.
