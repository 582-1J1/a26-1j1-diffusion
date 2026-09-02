# Séance 5 - Instructions conditionnelles
- Instructions `if`, `else`, `else if`
- Opérateurs de comparaison et opérateurs logiques

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- écrire une instruction conditionnelle;
- prévoir plusieurs résultats avec `if`, `else if` et `else`;
- comparer des valeurs;
- combiner des conditions avec `&&`, `||` et `!`;
- utiliser une règle conditionnelle pour décrire l'état d'un jeu.

## 1. Une condition permet au programme de choisir

Une condition vérifie si une expression est vraie ou fausse. Le bloc associé à `if` est exécuté seulement lorsque la condition est vraie.

```js
const score = 3;
const objectif = 3;

if (score >= objectif) {
  console.log("Objectif atteint !");
}
```

Les accolades délimitent le bloc d'instructions qui dépend de la condition.

## 2. Prévoir le cas contraire avec `else`

`else` indique ce qui doit se produire lorsque la condition du `if` est fausse.

```js
if (score >= objectif) {
  console.log("Le passage est ouvert.");
} else {
  console.log("Il faut encore trouver des lucioles.");
}
```

Une seule des deux branches est exécutée.

## 3. Vérifier plusieurs possibilités avec `else if`

`else if` permet de tester une autre condition lorsque les conditions précédentes sont fausses. Les tests sont réalisés de haut en bas. La première condition vraie détermine le bloc exécuté.

```js
if (score >= 5) {
  console.log("Le jardin est entièrement éclairé.");
} else if (score >= 3) {
  console.log("Le passage principal est ouvert.");
} else {
  console.log("La recherche continue.");
}
```

Un `else if` n'est pas obligatoire. On peut utiliser seulement `if`, ou `if` et `else`.

## 4. Les opérateurs de comparaison

Les comparaisons produisent une valeur booléenne : `true` ou `false`.

| Opérateur | Signification | Exemple |
| --- | --- | --- |
| `===` | est égal à | `score === 3` |
| `!==` | est différent de | `score !== 0` |
| `>` | est plus grand que | `score > 3` |
| `<` | est plus petit que | `score < 3` |
| `>=` | est plus grand ou égal à | `score >= 3` |
| `<=` | est plus petit ou égal à | `score <= 3` |

Le signe `=` affecte une valeur. Il ne sert pas à comparer.

## 5. Combiner des conditions

Les opérateurs logiques permettent de combiner ou d'inverser des conditions.

- `&&` signifie « et » : les deux conditions doivent être vraies;
- `||` signifie « ou » : au moins une condition doit être vraie;
- `!` signifie « non » : la valeur booléenne est inversée.

```js
const score = 3;
const nombreVies = 2;
const lucioleRecueillie = true;

if (score >= 3 && nombreVies > 0) {
  console.log("Le joueur peut continuer.");
}

if (lucioleRecueillie || score >= 5) {
  console.log("Une récompense peut être affichée.");
}

if (!lucioleRecueillie) {
  console.log("La luciole est encore dans le jardin.");
}
```

Les parenthèses peuvent rendre une condition complexe plus facile à lire :

```js
const passageOuvert = lucioleRecueillie && (score >= 3 || nombreVies === 0);
```

## 6. Décrire un état du projet de jeu

Dans le projet de jeu du cours (à démarrer la semaine prochaine), une condition pourra vérifier si le joueur touche une luciole. Pour l'instant, nous représentons cet état avec une valeur *booléene* (`true`/`false`).

```js
let score = 0;
let lucioleRecueillie = false;
const objectif = 1;

if (lucioleRecueillie) {
  score++;
}

if (score >= objectif) {
  console.log("La luciole est recueillie !");
} else {
  console.log("Le joueur doit encore atteindre la luciole.");
}
```

À la séance suivante, ces règles pourront être reliées à des éléments dessinés dans le Canvas.

## À retenir

- `if` exécute un bloc si une condition est vraie.
- `else` prévoit le cas où la condition est fausse.
- `else if` permet de tester une possibilité supplémentaire.
- Les opérateurs de comparaison produisent `true` ou `false`.
- `&&` signifie « et », `||` signifie « ou » et `!` signifie « non ».
- Les conditions permettent de programmer les règles et les états d'un jeu.
