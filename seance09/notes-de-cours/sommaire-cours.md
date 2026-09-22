# Séance 9 - Boucles, tableaux, hasard et pseudo-code
- Instructions itératives : la boucle `while`
- Tableaux simples
- Randomisation et objet `Math`
- Analyse de problème et pseudo-code

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- répéter une action avec une boucle `while`;
- éviter une boucle infinie en modifiant la condition;
- créer et manipuler un tableau simple;
- générer une valeur aléatoire;
- utiliser le hasard pour rendre une partie différente;
- analyser un problème avant de programmer;
- rédiger un pseudo-code clair, sans écrire encore de code JavaScript.

## Remarque technique - charger le JavaScript avec `defer`

Jusqu'à maintenant, la balise `<script>` était placée à la fin de l'élément `<body>`. Cette position permettait au navigateur de lire le HTML avant de charger le fichier JavaScript.

On peut aussi placer la balise `<script>` dans le `<head>` avec l'attribut `defer` :

```html
<head>
  <script src="assets/js/script.js" defer></script>
</head>
```

Avec `defer`, le navigateur télécharge le fichier JavaScript pendant qu'il lit la page, puis exécute le script après l'analyse du HTML. Le Canvas existe donc déjà lorsque `document.querySelector("canvas")` est exécuté.

Dans ce cours, les deux placements sont possibles. Pour le projet de classe, nous utiliserons maintenant `defer` afin d'uniformiser la structure avec les autres projets.

## 1. Répéter avec `while`

La boucle `while` répète un bloc tant que sa condition est vraie.

```js
let compteur = 0;

while (compteur < 3) {
  console.log("Lucioles préparées :", compteur);
  compteur++;
}
```

La boucle comporte trois idées importantes :

1. une valeur de départ;
2. une condition qui détermine si la répétition continue;
3. une modification qui permet éventuellement d'arrêter la boucle.

Sans modification de `compteur`, la condition resterait vraie et la boucle deviendrait infinie. Dans cette séance, nous utilisons `while` pour répéter une action connue un certain nombre de fois.

## 2. Un tableau simple

Un tableau rassemble plusieurs valeurs dans une seule variable. Les positions commencent à `0`.

```js
const couleurs = ["jaune", "vert", "bleu"];

console.log(couleurs[0]);
console.log(couleurs.length);
```

On peut ajouter une valeur avec `push()` et lire une valeur en utilisant son index :

```js
const nombresLuciole = [];
nombresLuciole.push(2);
nombresLuciole.push(5);

console.log(nombresLuciole[1]);
```

Dans le projet de classe, un tableau peut conserver les positions des lucioles. Pour rester simple, on peut utiliser deux tableaux parallèles : un pour les positions `x`, un pour les positions `y`.

```js
const positionsX = [];
const positionsY = [];

positionsX.push(120);
positionsY.push(180);
```

La position d'une même luciole se trouve au même index dans les deux tableaux.

## 3. Générer une valeur aléatoire

`Math.random()` produit un nombre décimal supérieur ou égal à `0` et inférieur à `1`.

```js
const hasard = Math.random();
console.log(hasard);
```

Pour obtenir un entier entre `0` et `9`, on utilise `Math.floor()` :

```js
const entier = Math.floor(Math.random() * 10);
console.log(entier);
```

Pour une position dans un Canvas, on peut limiter le résultat à une largeur ou une hauteur :

```js
const positionX = Math.floor(Math.random() * 760);
const positionY = Math.floor(Math.random() * 460);
```

La valeur `760` laisse une marge si la luciole mesure environ `40` pixels et que le Canvas mesure `800` pixels.

## 4. Créer plusieurs lucioles avec `while`

La constante `MAX_LUCIOLES` définit le nombre maximal de lucioles à créer. La boucle ajoute une nouvelle position tant que le tableau contient moins de lucioles que ce maximum.

```js
const MAX_LUCIOLES = 12;
const positionsX = [];
const positionsY = [];
let indexLuciole = 0;

while (indexLuciole < MAX_LUCIOLES) {
  positionsX.push(Math.floor(Math.random() * 760));
  positionsY.push(Math.floor(Math.random() * 460));
  indexLuciole++;
}
```

Le résultat est différent à chaque chargement. C'est le début de la rejouabilité : le joueur ne retrouve pas exactement les mêmes positions à chaque partie.

## 5. Dessiner le tableau de lucioles

Pour dessiner chaque élément du tableau, on peut utiliser un deuxième compteur et une autre boucle `while` :

```js
let indexLuciole = 0;

while (indexLuciole < positionsX.length) {
  contexte.beginPath();
  contexte.arc(positionsX[indexLuciole], positionsY[indexLuciole], 8, 0, Math.PI * 2);
  contexte.fill();
  indexLuciole++;
}
```

Le même index permet de récupérer la position `x` et la position `y` d'une luciole.

## 6. Analyser avant de programmer

Avant d'écrire le programme, il faut décrire le problème et les étapes de sa solution.

### Problème

Au démarrage du projet de classe, créer au maximum douze lucioles à des positions aléatoires et les afficher sur un fond de forêt nocturne.

### Données nécessaires

- la largeur et la hauteur du Canvas;
- le nombre maximal de lucioles;
- deux tableaux de positions;
- une image de fond;
- la taille d'une luciole.

### Règles

- les tableaux commencent vides;
- la génération continue tant que le nombre de lucioles est inférieur au maximum;
- chaque position reste dans les limites visibles du Canvas;
- les lucioles sont dessinées après l'arrière-plan.

## 7. Pseudo-code

Le pseudo-code décrit les étapes sans dépendre de la syntaxe JavaScript. Cette séance utilise le pseudo-code seulement; les organigrammes seront laissés de côté.

```text
INITIALISER le Canvas et son contexte de dessin
INITIALISER l'image de fond de la forêt
INITIALISER le nombre maximal de lucioles à 12
INITIALISER un tableau vide pour les positions X
INITIALISER un tableau vide pour les positions Y

ATTENDRE le chargement de la fenêtre
    EFFACER le Canvas
    AFFICHER l'image de fond à la taille du Canvas

    INITIALISER le compteur de lucioles à 0
    TANT QUE le compteur de lucioles est inférieur au nombre maximal
        GÉNÉRER une position X aléatoire dans la zone visible
        GÉNÉRER une position Y aléatoire dans la zone visible
        AJOUTER la position X au tableau des positions X
        AJOUTER la position Y au tableau des positions Y
        INCRÉMENTER le compteur de lucioles
    FIN TANT QUE

    INITIALISER l'index à 0
    TANT QUE l'index est inférieur à la longueur du tableau des positions X
        DESSINER une luciole aux positions X et Y de l'index
        INCRÉMENTER l'index
    FIN TANT QUE
FIN ATTENDRE
```

## À retenir

- `while` répète des instructions tant que sa condition est vraie.
- Un tableau rassemble plusieurs valeurs et utilise des index qui commencent à `0`.
- `Math.random()` produit une valeur aléatoire et `Math.floor()` permet d'obtenir un entier.
- Une constante comme `MAX_LUCIOLES` rend une règle de jeu claire et facile à modifier.
- Le pseudo-code permet de vérifier la logique avant d'écrire le programme.
