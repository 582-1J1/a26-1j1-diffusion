# Séance 13 - Tableaux, fonctions et événements de la souris
- Introduction aux tableaux (`Array`)
- Fonctions : utilité, déclaration et appel
- Paramètres, arguments et valeur de retour
- Nomenclature, documentation et portée des variables
- Écouteurs d'événements et événements de la souris
- États du jeu : intro, jeu et résultat

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- créer un tableau, lire ses éléments, les modifier et le parcourir avec une boucle `while`;
- expliquer l'utilité d'une fonction;
- distinguer la **déclaration** d'une fonction et son **appel**;
- distinguer un **paramètre** et un **argument**;
- utiliser `return` pour qu'une fonction renvoie une valeur;
- nommer et documenter une fonction;
- distinguer une variable globale et une variable locale;
- enregistrer un écouteur d'événement avec `addEventListener()`;
- obtenir la position du curseur lors d'un clic;
- organiser un jeu en états avec une fonction `boucleJeu()`.

## 1. Les tableaux

Une variable contient une seule valeur. Pour conserver une liste de valeurs liées entre elles, on utilise un **tableau** (`Array`).

```js
const instructions = [
  "Cliquez sur les lucioles.",
  "Attrapez-les toutes.",
  "Le jardin sera illuminé."
];
```

Un tableau se déclare avec des crochets `[ ]`. Les éléments sont séparés par des virgules.

### L'index

Chaque élément possède un **index**, c'est-à-dire sa position dans le tableau. **Le premier index est 0**, pas 1.

| Index | Valeur |
| --- | --- |
| `0` | `"Cliquez sur les lucioles."` |
| `1` | `"Attrapez-les toutes."` |
| `2` | `"Le jardin sera illuminé."` |

```js
console.log(instructions[0]); // "Cliquez sur les lucioles."
console.log(instructions[2]); // "Le jardin sera illuminé."
console.log(instructions[3]); // undefined : cet index n'existe pas
```

### La longueur

La propriété `length` donne le nombre d'éléments. Le dernier index est donc `length - 1`.

```js
console.log(instructions.length); // 3
```

### Modifier, ajouter et retirer

```js
instructions[1] = "Attrapez-les toutes pour gagner."; // modifier un élément
instructions.push("Bonne chance !");                  // ajouter à la fin
instructions.pop();                                   // retirer le dernier élément
```

La déclaration `const` empêche de remplacer le tableau entier par un autre, mais elle n'empêche pas de modifier son contenu. Pour un tableau qu'on doit recommencer à zéro (par exemple à chaque partie), on utilise `let`.

### Un tableau vide

On peut partir d'un tableau vide et le remplir plus tard :

```js
let positionsX = [];
positionsX.push(120);
positionsX.push(350);
```

### Parcourir un tableau avec `while`

Pour traiter chaque élément, on utilise un compteur qui sert d'index :

```js
let index = 0;

while (index < instructions.length) {
  console.log(instructions[index]);
  index++;
}
```

Trois éléments sont à vérifier :

1. le compteur commence à `0`;
2. la condition est `index < instructions.length` (et non `<=`, qui irait un cran trop loin et produirait `undefined`);
3. le compteur augmente à chaque tour.

### Tableaux parallèles

Pour représenter plusieurs lucioles, on peut utiliser un tableau pour les positions `x` et un autre pour les positions `y`. La même position (le même index) dans les deux tableaux désigne la même luciole.

```js
const positionsX = [120, 350, 600];
const positionsY = [200, 90, 310];

console.log(positionsX[1], positionsY[1]); // 350 90 : la deuxième luciole
```

## 2. Pourquoi des fonctions?

Quand un programme grandit, les mêmes instructions reviennent à plusieurs endroits. Une **fonction** est un bloc d'instructions auquel on donne un nom, pour pouvoir le réutiliser.

Une fonction permet de :

- éviter de répéter le même code;
- donner un nom à une intention (`dessinerScene` est plus clair que dix lignes de dessin);
- diviser un programme en petites tâches faciles à comprendre;
- corriger ou modifier un comportement à un seul endroit.

## 3. Déclaration et appel : deux gestes différents

C'est la confusion la plus fréquente chez les débutants. Une image aide : **écrire une recette dans un livre n'a jamais cuisiné un plat**. Écrire la recette est une chose; la suivre en est une autre.

### La déclaration : écrire la recette

```js
function saluerJoueur() {
  console.log("Bienvenue dans le jardin des lucioles !");
}
```

- `function` est le mot-clé qui annonce une fonction;
- `saluerJoueur` est le nom de la fonction;
- les parenthèses `( )` accueilleront plus tard des paramètres (elles sont vides ici);
- les accolades `{ }` entourent le **corps** de la fonction, c'est-à-dire les instructions qu'elle contient.

**Si on s'en tient à la déclaration, rien ne s'affiche.** Le navigateur a pris connaissance de la fonction, mais il ne l'a pas exécutée.

### L'appel : suivre la recette

```js
saluerJoueur();
saluerJoueur();
```

Le nom suivi de parenthèses **appelle** la fonction. Le corps s'exécute à chaque appel. Ici, le message s'affiche **deux fois**.

| | Déclaration | Appel |
| --- | --- | --- |
| Rôle | Définir ce que fait la fonction | Demander à la fonction de s'exécuter |
| Écriture | `function saluerJoueur() { ... }` | `saluerJoueur();` |
| Nombre de fois | Une seule fois | Autant de fois que nécessaire |
| Que se passe-t-il? | Rien ne s'exécute | Le corps de la fonction s'exécute |

### Avec ou sans parenthèses

- `saluerJoueur()` **appelle** la fonction.
- `saluerJoueur` (sans parenthèses) **désigne** la fonction sans l'exécuter.

Cette différence sera essentielle avec les écouteurs d'événements (section 8).

### L'ordre d'exécution

JavaScript lit le fichier de haut en bas. Quand il rencontre un appel, il saute dans la fonction, exécute son corps, puis revient à la ligne suivante.

```js
console.log("1. Début du programme");

function annoncerPartie() {
  console.log("3. Dans la fonction");
}

console.log("2. Avant l'appel");
annoncerPartie();
console.log("4. Après l'appel");
```

Les messages s'affichent dans l'ordre `1`, `2`, `3`, `4`. Le corps de la fonction (message `3`) ne s'exécute pas à l'endroit où il est écrit, mais au moment de l'appel.

JavaScript prend connaissance de toutes les déclarations de fonctions avant d'exécuter le reste du fichier. On peut donc appeler une fonction avant l'endroit où elle est déclarée.

### Une structure recommandée pour un programme

1. les constantes;
2. les variables globales;
3. les images et autres ressources;
4. les déclarations de fonctions;
5. à la fin, l'instruction qui démarre le programme (par exemple `window.addEventListener("load", initialiser);`).

## 4. Les paramètres et les arguments

Une fonction qui fait toujours exactement la même chose est limitée. On veut souvent lui **transmettre une information**.

```js
function saluerJoueur(nomJoueur) {
  console.log("Bienvenue, " + nomJoueur + " !");
}

saluerJoueur("Alex");
saluerJoueur("Camille");
```

- `nomJoueur`, écrit entre les parenthèses de la **déclaration**, est un **paramètre**.
- `"Alex"` et `"Camille"`, écrits entre les parenthèses de l'**appel**, sont des **arguments**.

Une image pour s'en souvenir : le paramètre est **la case vide d'un formulaire**, l'argument est **ce que vous écrivez dans la case**.

| | Paramètre | Argument |
| --- | --- | --- |
| Où? | Dans la déclaration | Dans l'appel |
| Quoi? | Un nom de variable | Une valeur réelle |
| Quand a-t-il une valeur? | Seulement pendant l'exécution de la fonction | Toujours, c'est la valeur transmise |

### Ce qui se passe pendant l'appel

Pour `saluerJoueur("Alex")` :

1. l'appel fournit l'argument `"Alex"`;
2. la valeur est copiée dans le paramètre `nomJoueur`;
3. le corps de la fonction s'exécute avec `nomJoueur` qui vaut `"Alex"`;
4. à la fin, le programme reprend après l'appel.

L'argument peut aussi être une variable ou une expression. Son nom n'a **pas besoin** d'être le même que celui du paramètre :

```js
let prenom = "Alex";
saluerJoueur(prenom);          // la valeur de prenom est copiée dans nomJoueur
saluerJoueur("Dr " + prenom);  // une expression produit la valeur
```

### Plusieurs paramètres : l'ordre compte

Les arguments sont associés aux paramètres **selon leur position**.

```js
function afficherPosition(nom, x, y) {
  console.log(nom + " est en (" + x + ", " + y + ")");
}

afficherPosition("Luciole", 120, 80); // Luciole est en (120, 80)
afficherPosition(120, 80, "Luciole"); // 120 est en (80, Luciole) : mauvais ordre
```

Si on fournit moins d'arguments que de paramètres, les paramètres manquants valent `undefined`.

## 5. La valeur de retour

Parfois, on veut que la fonction **renvoie un résultat** à l'endroit où elle a été appelée. On utilise le mot-clé `return`.

```js
function additionner(a, b) {
  return a + b;
}

const total = additionner(5, 3);
console.log(total); // 8
```

Étape par étape :

1. l'appel `additionner(5, 3)` fournit les arguments `5` et `3`;
2. les paramètres `a` et `b` reçoivent ces valeurs;
3. `return a + b` calcule `8` et le renvoie;
4. **l'appel est remplacé par la valeur `8`**;
5. la valeur est affectée à la constante `total`.

Un appel de fonction qui retourne une valeur est donc une **expression** : il produit une valeur, comme `3 + 5`.

### Afficher n'est pas retourner

Les débutants confondent souvent `console.log()` et `return`.

| | `console.log(...)` | `return ...` |
| --- | --- | --- |
| Que fait-il? | Affiche un message dans la console | Renvoie une valeur au code qui a appelé la fonction |
| Pour qui? | Pour le programmeur qui observe | Pour le reste du programme |
| Peut-on réutiliser la valeur? | Non | Oui : la stocker, la comparer, la calculer |

```js
function additionnerEtAfficher(a, b) {
  console.log(a + b); // affiche, mais ne renvoie rien
}

const resultat = additionnerEtAfficher(5, 3); // affiche 8 dans la console
console.log(resultat);                        // undefined : rien n'a été renvoyé
```

Une fonction sans `return` renvoie `undefined`.

### `return` termine la fonction

Dès que `return` est exécuté, la fonction s'arrête. Les instructions écrites après ne sont pas exécutées.

```js
function obtenirMessage() {
  return "Fin";
  console.log("Cette ligne ne s'exécute jamais.");
}
```

### Retourner un booléen pour une condition

Une fonction peut retourner `true` ou `false` et servir dans un `if` :

```js
function aGagne(score, objectif) {
  return score >= objectif;
}

if (aGagne(8, 8)) {
  console.log("Bravo !");
}
```

### Résumé

- les **paramètres** sont les entrées de la fonction;
- `return` est la sortie de la fonction;
- une fonction sans `return` fait quelque chose (dessiner, afficher), mais ne renvoie rien d'utilisable.

### Les erreurs fréquentes

- déclarer une fonction et oublier de l'appeler;
- écrire `maFonction` au lieu de `maFonction()` pour l'appeler;
- utiliser `console.log()` quand on voulait `return`;
- oublier de stocker la valeur retournée dans une variable;
- fournir les arguments dans le mauvais ordre.

## 6. Nomenclature et documentation

- Le nom d'une fonction commence par un **verbe d'action** et suit le style `camelCase` : `dessinerScene`, `calculerPointage`, `demarrerPartie`.
- Une fonction qui retourne un booléen commence souvent par `est` ou `a` : `estDansRectangle`, `aGagne`.
- Une fonction a une seule tâche. Si son nom contient « et », elle en fait peut-être trop.

On documente une fonction avec un commentaire placé juste au-dessus de sa déclaration :

```js
/**
 * Calcule le pointage total d'une partie.
 * @param {number} nombreLucioles - Le nombre de lucioles attrapées.
 * @param {number} pointsParLuciole - Les points accordés par luciole.
 * @returns {number} Le pointage total.
 */
function calculerPointage(nombreLucioles, pointsParLuciole) {
  return nombreLucioles * pointsParLuciole;
}
```

- la première ligne résume le rôle de la fonction;
- `@param` décrit chaque paramètre;
- `@returns` décrit la valeur retournée.

Visual Studio Code affiche cette documentation lorsque vous passez la souris sur le nom de la fonction.

## 7. La portée des variables

La **portée** d'une variable indique où elle est accessible.

- Une variable **globale** est déclarée en dehors de toute fonction. Elle est accessible partout.
- Une variable **locale** est déclarée dans une fonction (ou dans un bloc). Elle n'existe que là.
- Les **paramètres** d'une fonction sont des variables locales.

```js
let score = 0; // globale

function ajouterPoint() {
  const bonus = 1; // locale à ajouterPoint
  score = score + bonus;
}

ajouterPoint();
console.log(score); // 1
console.log(bonus); // Erreur : bonus n'existe pas ici
```

Quelques règles simples :

- on garde globales seulement les valeurs partagées par plusieurs fonctions, comme l'état du jeu ou le score;
- pour transmettre une information à une fonction, on préfère un paramètre;
- une variable locale disparaît à la fin de la fonction : on ne peut pas la réutiliser à l'extérieur.

## 8. La programmation événementielle

Jusqu'ici, nos programmes s'exécutaient de la première à la dernière ligne. Dans un jeu, le programme doit aussi **réagir à ce que fait le joueur**.

| Terme | Signification |
| --- | --- |
| **Événement** | Un fait qui se produit : un clic, une touche, la fin du chargement |
| **Écouteur d'événement** | Ce qui surveille un élément pour détecter un événement |
| **Gestionnaire d'événement** | La fonction qui s'exécute quand l'événement se produit |

### Enregistrer un écouteur

```js
canvas.addEventListener("click", gererClic);
```

Trois informations sont fournies :

1. l'élément surveillé : `canvas`;
2. le nom de l'événement, entre guillemets : `"click"`;
3. le **nom** de la fonction à déclencher : `gererClic`.

Vous connaissez déjà cette forme : `window.addEventListener("load", initialiser);` enregistre la fonction `initialiser` pour l'événement `load`.

### Pourquoi sans parenthèses?

```js
canvas.addEventListener("click", gererClic);   // correct : on donne la fonction
canvas.addEventListener("click", gererClic()); // erreur : on l'appelle tout de suite
```

Avec les parenthèses, `gererClic()` serait **appelée immédiatement**, avant tout clic, et c'est son résultat (`undefined`) qui serait transmis à l'écouteur. Sans parenthèses, on ne fait que **désigner** la fonction. C'est le navigateur qui l'appellera plus tard, à chaque clic.

C'est la différence entre déclaration et appel appliquée aux événements :

- **vous** déclarez la fonction et vous l'enregistrez;
- **le navigateur** l'appelle au bon moment.

### Le paramètre de l'événement

Quand le navigateur appelle le gestionnaire, il lui fournit un **argument** : un objet qui décrit l'événement. On le reçoit dans un paramètre, que nous appelons `evenement` :

```js
function gererClic(evenement) {
  console.log("Clic détecté !");
}
```

On n'est pas obligé d'utiliser ce paramètre. La fonction `initialiser` n'en déclare aucun, ce qui est correct.

### Les événements de la souris

| Événement | Se produit quand |
| --- | --- |
| `click` | l'élément est cliqué |
| `dblclick` | l'élément est double-cliqué |

D'autres événements de la souris existent (`mousemove`, `mouseenter`, etc.). Nous les verrons plus tard.

Un double-clic produit d'abord deux événements `click`, puis un événement `dblclick`.

On place l'écouteur sur le `canvas` pour ne réagir qu'aux clics faits dans le Canvas.

### La position du curseur

L'objet de l'événement contient la position du curseur dans le Canvas :

- `evenement.offsetX` : la position horizontale (`0` est le bord gauche du Canvas);
- `evenement.offsetY` : la position verticale (`0` est le haut du Canvas).

```js
function gererClic(evenement) {
  console.log("Clic en :", evenement.offsetX, evenement.offsetY);
}
```

Les propriétés `clientX` et `clientY` donnent la position dans la **fenêtre**, pas dans le Canvas. Elles ne correspondent donc pas aux coordonnées de dessin. Pour que `offsetX` et `offsetY` correspondent aux coordonnées du Canvas, celui-ci doit s'afficher à sa taille réelle (sans mise à l'échelle par le CSS).

### Une zone cliquable

Un bouton dessiné dans le Canvas n'est qu'un rectangle. Pour savoir si le curseur est dans ce rectangle, on vérifie quatre conditions avec `&&`. Une fonction qui retourne un booléen est idéale :

```js
function estDansRectangle(pointX, pointY, rectX, rectY, largeur, hauteur) {
  return pointX >= rectX && pointX <= rectX + largeur &&
         pointY >= rectY && pointY <= rectY + hauteur;
}
```

Utilisation avec un bouton de 200 sur 60 pixels placé en (300, 380) :

```js
function gererClic(evenement) {
  const surBouton = estDansRectangle(evenement.offsetX, evenement.offsetY, 300, 380, 200, 60);

  if (surBouton) {
    console.log("Bouton cliqué !");
  }
}
```

Pour un clic en (350, 400) :

1. les arguments sont `350, 400, 300, 380, 200, 60`;
2. les quatre comparaisons sont vraies;
3. la fonction retourne `true`;
4. `surBouton` vaut `true` et le message s'affiche.

## 9. Les états du jeu

Un jeu n'affiche pas toujours le même écran. On peut le décrire avec des **états**. Dans le jardin des lucioles :

- `"intro"` : l'écran de titre avec les instructions et un bouton;
- `"jeu"` : la partie en cours;
- `"resultat"` : l'écran de fin.

```text
  intro --(clic sur Jouer)--> jeu --(toutes les lucioles attrapées)--> resultat
                               ^                                          |
                               +-------------(clic sur Rejouer)-----------+
```

L'état courant est conservé dans une variable globale. Chaque état possède sa fonction de dessin, et une fonction `boucleJeu()` choisit laquelle appeler :

```js
let etatJeu = "intro";

function boucleJeu() {
  contexte.clearRect(0, 0, canvas.width, canvas.height);

  if (etatJeu === "intro") {
    dessinerIntro();
  } else if (etatJeu === "jeu") {
    dessinerJeu();
  } else if (etatJeu === "resultat") {
    dessinerResultat();
  }
}
```

Pour l'instant, c'est **nous** qui appelons `boucleJeu()` : au démarrage, puis à la fin de chaque gestionnaire d'événement, après avoir modifié l'état. Dans les prochaines séances, elle sera appelée automatiquement pour animer l'écran.

### Pseudo-code d'un clic

```text
gererClic
    SI l'état est "intro" ET le clic est sur le bouton ALORS
        démarrerPartie
    SINON SI l'état est "jeu" ALORS
        attraperLuciole
        SI toutes les lucioles sont attrapées ALORS
            AFFECTER "resultat" à l'état
        FIN SI
    SINON SI l'état est "resultat" ET le clic est sur le bouton ALORS
        démarrerPartie
    FIN SI
    boucleJeu
TERMINER gererClic
```

Le nom d'un sous-programme (une fonction) ouvre le bloc et `TERMINER nom` le ferme. Le nom d'un autre sous-programme, écrit seul sur une ligne, indique son appel.

## 10. Le projet de classe : l'écran de titre

Le projet [jardin-lucioles](../jardin-lucioles/) rassemble toutes les notions de la séance.

| Notion | Où la retrouve-t-on? |
| --- | --- |
| Tableau | `INSTRUCTIONS` (texte de l'écran de titre), `positionsX`, `positionsY` et `luciolesAttrapees` |
| Boucle `while` et tableau | l'affichage des instructions et le parcours des lucioles |
| Fonction avec paramètres | `ecrireTexte()`, `dessinerBouton()` |
| Fonction avec valeur de retour | `nombreAleatoire()`, `estDansRectangle()` |
| Événement `click` | `gererClic()` |
| Événement `dblclick` | `gererDoubleClic()` (affiche ou cache un indice) |
| États du jeu | `etatJeu` et `boucleJeu()` |

Le code utilise aussi `contexte.textAlign = "center"`, qui centre un texte sur la position `x` donnée à `fillText()`.

## À retenir

- Un tableau est une liste de valeurs; le premier index est `0`, et `length` donne le nombre d'éléments.
- On parcourt un tableau avec une boucle `while` en comptant de `0` à `length - 1`.
- **Déclarer** une fonction, c'est la définir; **appeler** une fonction, c'est l'exécuter.
- Le **paramètre** est dans la déclaration; l'**argument** est dans l'appel.
- `return` renvoie une valeur au code qui a appelé la fonction et termine la fonction; `console.log()` ne fait qu'afficher.
- Un nom de fonction sans parenthèses désigne la fonction; avec des parenthèses, il l'appelle.
- Un écouteur d'événement reçoit le **nom** d'une fonction que le navigateur appellera plus tard.
- `evenement.offsetX` et `evenement.offsetY` donnent la position du curseur dans le Canvas.
- Un état du jeu est une variable qui indique l'écran à afficher; `boucleJeu()` choisit la fonction de dessin selon cet état.
