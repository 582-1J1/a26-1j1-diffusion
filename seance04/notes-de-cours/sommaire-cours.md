# Séance 4 - Manipulation de nombres et de valeurs booléennes
- Opérateurs arithmétiques, incrémentation, décrémentation, conversion de chaînes en nombre, valeurs booléennes, comparaisons et techniques de débogage

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- utiliser les opérateurs arithmétiques dans un calcul;
- incrémenter et décrémenter une valeur numérique;
- convertir une chaîne de caractères en nombre;
- reconnaître les valeurs `true` et `false`;
- comparer deux valeurs avec un opérateur de comparaison;
- utiliser `alert()`, `prompt()` et `typeof` pour interagir avec la page et déboguer un programme;
- avoir un premier aperçu d'une condition `if` et `else`.

## 1. Les opérateurs arithmétiques

Une variable numérique peut être utilisée dans un calcul, au même titre qu'un nombre écrit directement. Les opérateurs arithmétiques de base sont `+`, `-`, `*`, `/` et `%` :

```js
let score = 3;
let nombreVies = 2;

score = score + 2;       // addition
nombreVies = nombreVies - 1; // soustraction
let double = score * 2;      // multiplication
let moitie = score / 2;       // division
let reste = score % 2;        // modulo : le reste d'une division
```

Le modulo (`%`) donne le reste d'une division. Il est utile pour vérifier si un nombre est pair, par exemple : `score % 2` vaut `0` lorsque `score` est pair.

## 2. Incrémenter et décrémenter

Ajouter ou soustraire `1` à une variable est une opération très fréquente dans un jeu, par exemple pour augmenter un score ou réduire un nombre de vies. JavaScript propose des raccourcis :

```js
let score = 3;
score++; // équivaut à score = score + 1;
console.log(score); // 4

let nombreVies = 2;
nombreVies--; // équivaut à nombreVies = nombreVies - 1;
console.log(nombreVies); // 1
```

`++` incrémente une valeur de `1`. `--` la décrémente de `1`.

## 3. Convertir une chaîne de caractères en nombre

La fonction `prompt()` retourne toujours une chaîne de caractères, même lorsque l'utilisateur tape des chiffres. Pour faire un calcul, cette chaîne doit être convertie en nombre :

```js
let reponse = prompt("Combien de lucioles avez-vous trouvées ?");
let nombreDeLucioles = Number(reponse);

console.log(nombreDeLucioles + 1);
```

Sans cette conversion, l'opérateur `+` concaténerait des chaînes de caractères au lieu d'additionner des nombres. Par exemple, `"3" + 1` donne `"31"`, alors que `Number("3") + 1` donne `4`.

`typeof` permet de vérifier le type d'une valeur, ce qui aide à comprendre ce genre de situation :

```js
console.log(typeof reponse);          // "string"
console.log(typeof nombreDeLucioles); // "number"
```

## 4. Alert et prompt

Les fonctions `alert()` et `prompt()` affichent une boîte de dialogue dans le navigateur.

- `alert("message")` affiche un message à l'utilisateur.
- `prompt("question")` pose une question et retourne la réponse de l'utilisateur.

```js
alert("Bienvenue dans le jardin des lucioles !");
let nomJoueur = prompt("Quel est votre nom ?");
alert("Bonne chance, " + nomJoueur + " !");
```

Ces outils sont utiles pour tester rapidement un programme, en plus de `console.log()`.

## 5. Techniques de débogage

Lorsqu'un programme ne fonctionne pas comme prévu, quelques réflexes aident à trouver le problème :

- utiliser `console.log()` pour afficher la valeur d'une variable à un moment précis;
- utiliser `typeof` pour vérifier le type d'une valeur;
- lire attentivement les messages d'erreur dans la console;
- consulter une référence fiable sur le Web, par exemple [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/JavaScript) ou [javascript.info](https://javascript.info/), pour vérifier la syntaxe exacte d'une instruction.

## 6. Comparer des valeurs

Une comparaison produit toujours une réponse vraie ou fausse. En JavaScript, ces deux valeurs sont `true` et `false`. On les appelle des valeurs booléennes.

```js
const score = 3;
const objectif = 3;
const objectifAtteint = score === objectif;

console.log(objectifAtteint);
```

La console affiche `true`, parce que les deux nombres sont égaux.

Voici quelques opérateurs de comparaison utiles :

| Opérateur | Signification | Exemple |
| --- | --- | --- |
| `===` | est égal à | `score === objectif` |
| `!==` | est différent de | `score !== objectif` |
| `>` | est plus grand que | `score > objectif` |
| `<` | est plus petit que | `score < objectif` |
| `>=` | est plus grand ou égal à | `score >= objectif` |
| `<=` | est plus petit ou égal à | `score <= objectif` |

Utilisez `===` pour vérifier si deux valeurs sont égales. Le signe `=` sert plutôt à affecter une valeur dans une variable.

## 7. Un premier aperçu d'une condition

Une condition permet au programme de choisir une action selon le résultat d'une comparaison. Cette notion sera approfondie au prochain cours, mais en voici un aperçu.

```js
const score = 3;
const objectif = 3;

if (score >= objectif) {
  console.log("Objectif atteint !");
} else {
  console.log("Continuez à chercher les lucioles.");
}
```

Le code entre les premières accolades est exécuté seulement si la condition est vraie. Le mot `else` indique ce que le programme doit faire lorsque la condition est fausse. Une seule des deux parties est exécutée.

## 8. Des informations utiles pour le projet de jeu

Dans nos projets de jeux (plus tard dans le cours), le programme devra souvent calculer et vérifier des valeurs avant de choisir quoi faire. Par exemple, il pourra augmenter un score, puis vérifier si le joueur a trouvé assez de lucioles.

```js
let score = 2;
const objectif = 3;

score++;

const objectifAtteint = score >= objectif;

if (objectifAtteint) {
  console.log("Le passage vers la suite du jardin est ouvert.");
} else {
  console.log("Il reste des lucioles à trouver.");
}
```

Les opérateurs arithmétiques, les conversions de nombres et les comparaisons permettront plus tard de contrôler les règles du jeu.

## À retenir

- Les opérateurs arithmétiques `+`, `-`, `*`, `/` et `%` servent à calculer avec des nombres.
- `++` et `--` incrémentent ou décrémentent une valeur de `1`.
- `prompt()` retourne toujours une chaîne de caractères; `Number()` la convertit en nombre.
- `typeof` permet de vérifier le type d'une valeur.
- `alert()` et `prompt()` permettent d'interagir avec l'utilisateur.
- Une comparaison produit `true` ou `false`.
- `===` compare deux valeurs; `=` affecte une valeur.
- `if` exécute un bloc lorsque sa condition est vraie; `else` s'exécute sinon.
