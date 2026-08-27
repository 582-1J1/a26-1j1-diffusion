# Séance 2.1 – Introduction au langage JavaScript
- Semaine 2, cours 1
- Variables, constantes, affectation, expressions et chaînes de caractères

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- déclarer une variable ou une constante;
- affecter une valeur à une variable;
- lire une expression simple;
- utiliser une chaîne de caractères;
- reconnaître la valeur `undefined`;
- manipuler un texte simple lié au jeu.

## 1. Une variable représente une information

Une variable est un espace nommé qui permet de conserver une valeur. Dans notre jeu, elle pourra représenter le nom du joueur, le titre du jeu ou un message à afficher.

```js
let nomJoueur = "Alex";
```

Ici, `nomJoueur` est le nom de la variable et `"Alex"` est sa valeur.

Le mot `let` indique que la valeur pourra être remplacée plus tard :

```js
let message = "La partie commence.";
message = "Trouvez les lucioles.";
```

La deuxième instruction remplace la première valeur. Le signe `=` est l'opérateur d'affectation. Il signifie que la valeur située à droite est placée dans la variable située à gauche.

## 2. Une constante conserve une valeur

Une constante est une information qui ne doit pas être remplacée pendant l'exécution du programme. On la déclare avec `const` :

```js
const titreJeu = "Le jardin des lucioles";
```

Le titre ne change pas pendant la partie. Il est donc logique de le conserver dans une constante.

Utilisez `let` pour une valeur qui doit changer et `const` pour une valeur qui doit rester la même.

## 3. Lire une expression

Une expression est une instruction ou un ensemble d'éléments qui produit une valeur :

```js
const message = "Bienvenue dans " + titreJeu;
```

Le signe `+` permet ici de concaténer, c'est-à-dire de réunir deux chaînes de caractères. La valeur de `message` devient :

```text
Bienvenue dans Le jardin des lucioles
```

Une expression peut utiliser une valeur écrite directement ou une variable :

```js
const nomJoueur = "Alex";
const message = "Bonne chance, " + nomJoueur + " !";
```

## 4. Les chaînes de caractères

Une chaîne de caractères est un texte. Elle doit être entourée de guillemets simples ou doubles :

```js
const nomJeu = "Le jardin des lucioles";
const instruction = 'Recueillez les lucioles.';
```

Évitez de mélanger les guillemets qui commencent et qui terminent une même chaîne.

On peut obtenir la longueur d'une chaîne avec la propriété `length` :

```js
const mot = "lumiere";
console.log(mot.length);
```

On peut aussi transformer une chaîne en majuscules ou en minuscules :

```js
const nom = "Lucioles";
console.log(nom.toUpperCase());
console.log(nom.toLowerCase());
```

Ces manipulations permettent de préparer des textes avant de les afficher dans le jeu ou dans la console.

## 5. La valeur `undefined`

La valeur `undefined` signifie qu'une variable existe, mais qu'aucune valeur ne lui a encore été attribuée :

```js
let score;
console.log(score);
```

La console affiche `undefined`.

Plus tard, le programme pourra donner une valeur à cette variable :

```js
score = "0 luciole";
console.log(score);
```

`undefined` n'est pas le texte `"undefined"`. Le premier est une valeur spéciale de JavaScript; le second est une chaîne de caractères.

## 6. Relier les notions au projet de jeu

Même avant de dessiner dans le Canvas, nous pouvons préparer des informations pour le jeu :

```js
const titreJeu = "Le jardin des lucioles";
let message = "Bienvenue !";
let nomJoueur;

console.log(titreJeu);
console.log(message);
console.log(nomJoueur);

nomJoueur = "Alex";
message = "Bonne chance, " + nomJoueur + " !";
console.log(message);
```

Le programme conserve trois informations, puis remplace les valeurs de `nomJoueur` et de `message`.

## À retenir

- `let` sert à déclarer une variable qui peut changer.
- `const` sert à déclarer une constante.
- `=` affecte la valeur de droite à l'élément de gauche.
- Une expression produit une valeur.
- Une chaîne de caractères est un texte entre guillemets.
- `undefined` indique qu'aucune valeur n'a encore été attribuée.
- `console.log()` permet d'observer les valeurs pendant l'apprentissage.
