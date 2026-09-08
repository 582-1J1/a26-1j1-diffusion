# Séance 6 - Introduction à la surface de dessin du navigateur
- Définition d'un contexte de dessin en deux dimensions
- Affichage de texte avec `fillText()`
- Introduction à l'objet `Image()`
- Affichage d'une image avec `drawImage()`
- Effacement de la surface de dessin

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- récupérer une balise `<canvas>` dans une page HTML;
- obtenir son contexte de dessin en deux dimensions;
- dessiner un fond et des formes simples;
- afficher du texte dans le Canvas avec `fillText()`;
- créer une image avec l'objet `Image()`;
- afficher une image avec `drawImage()`;
- effacer le contenu du Canvas avec `clearRect()`.

## 1. Le Canvas est une surface de dessin

La balise `<canvas>` réserve une surface dans la page. Ses attributs `width` et `height` déterminent sa taille de dessin.

```html
<canvas width="800" height="500"></canvas>
```

Le Canvas est une surface, pas une image enregistrée. Le JavaScript doit dessiner son contenu.

## 2. Obtenir le contexte de dessin

On récupère d'abord la balise, puis son contexte de dessin en deux dimensions :

```js
const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");
```

La variable `contexte` donne accès aux méthodes qui permettent de dessiner.

## 3. Dessiner un fond et des formes simples

On peut choisir une couleur avec `fillStyle`, puis remplir un rectangle avec `fillRect()` :

```js
contexte.fillStyle = "#102a43";
contexte.fillRect(0, 0, canvas.width, canvas.height);

contexte.fillStyle = "#84a59d";
contexte.fillRect(100, 220, 40, 40);
```

Les deux premiers nombres représentent la position `x` et `y`. Les deux suivants représentent la largeur et la hauteur.

## 4. Afficher du texte avec `fillText()`

La propriété `font` détermine l'apparence du texte. La méthode `fillText()` reçoit le texte et sa position :

```js
contexte.fillStyle = "#f6bd60";
contexte.font = "28px sans-serif";
contexte.fillText("Le jardin des lucioles", 30, 45);
```

La position `x` commence à gauche du Canvas. La position `y` correspond à la ligne de base du texte.

## 5. Charger une image avec `Image()`

L'objet `Image()` représente une image que le navigateur peut charger. On indique le chemin du fichier avec la propriété `src` :

```js
const imageLuciole = new Image();
imageLuciole.src = "assets/images/luciole.svg";
```

Il faut attendre que l'image soit chargée avant de la dessiner :

```js
imageLuciole.addEventListener("load", () => {
  contexte.drawImage(imageLuciole, 600, 180, 40, 40);
});
```

Le chemin est relatif au fichier `index.html`.

## 6. Afficher une image avec `drawImage()`

La méthode `drawImage()` reçoit l'image, sa position et, ici, sa taille :

```js
contexte.drawImage(imageLuciole, 600, 180, 40, 40);
```

Dans le projet fil-rouge, cette méthode servira à afficher le joueur, les lucioles et d'autres éléments du jeu.

## 7. Effacer la surface

`clearRect()` efface une partie du Canvas. Pour effacer toute la surface, on utilise ses dimensions :

```js
contexte.clearRect(0, 0, canvas.width, canvas.height);
```

Cette méthode sera importante lorsque le jeu devra redessiner la scène après un déplacement ou une animation.

## 8. Relier la séance au projet de jeu

L'étape suivante du projet de classe consiste à afficher une scène simple : un fond, un joueur, une luciole et un message. Pour l'instant, la scène ne bouge pas encore.

```js
contexte.fillStyle = "#102a43";
contexte.fillRect(0, 0, canvas.width, canvas.height);
contexte.fillStyle = "#f6bd60";
contexte.fillText("Trouvez la luciole !", 30, 45);
```

Les positions et les dimensions pourront ensuite être remplacées par des variables, comme dans l'étape précédente du projet fil-rouge.

## À retenir

- `<canvas>` crée une surface de dessin.
- `getContext("2d")` donne accès au dessin en deux dimensions.
- `fillText()` affiche du texte.
- `new Image()` crée un objet image.
- `drawImage()` affiche une image chargée.
- `clearRect()` efface une partie de la surface.
- Une image doit être chargée avant d'être dessinée.
