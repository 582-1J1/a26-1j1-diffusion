# Séance 10 - Produire un algorithme en pseudo-code
- Analyse d'un problème
- Rédaction d'un pseudo-code
- Passage du pseudo-code au code JavaScript
- Structure, bonnes pratiques et règles de nomenclature

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- décrire un problème en identifiant ses données et ses règles;
- repérer les cas limites d'un problème avant de programmer;
- rédiger un pseudo-code à l'aide des mots-clés vus en classe;
- traduire un pseudo-code en code JavaScript;
- organiser un programme de façon claire;
- nommer vos variables et vos constantes selon les conventions du cours.

## 1. Les étapes pour produire un algorithme

Avant d'écrire du code, il est utile de suivre quelques étapes :

1. **Analyser le problème** : comprendre ce qui est demandé et ce qui est déjà connu.
2. **Rechercher une solution** : réfléchir à une façon de résoudre le problème, avec des mots simples.
3. **Rédiger un pseudo-code** : décrire les étapes de la solution sans utiliser la syntaxe JavaScript.
4. **Valider le pseudo-code** : vérifier qu'il fonctionne pour les cas normaux et pour les cas limites.
5. **Programmer la solution** : traduire le pseudo-code en JavaScript.

Cette séance ne couvre pas les organigrammes. Nous utilisons seulement le pseudo-code.

## 2. Analyser un problème

Analyser un problème signifie répondre à quelques questions avant de programmer :

- **Quel est le résultat attendu ?**
- **Quelles données sont déjà connues ?**
- **Quelles données doivent être calculées ou générées ?**
- **Quelles règles doivent être respectées ?**
- **Quels cas limites pourraient poser problème ?**

Un bon programme commence toujours par une analyse claire, même courte.

## 3. Rédiger un pseudo-code

Le pseudo-code décrit les étapes d'un programme sans dépendre de la syntaxe JavaScript. Cette séance utilise seulement les mots-clés déjà utiles avec les notions vues en classe :

- **INITIALISER** : pour définir une variable ou une constante et lui donner une valeur de départ;
- **AFFECTER** : pour donner une nouvelle valeur à une variable;
- **SI ... ALORS ... SINON ... FIN SI** : pour les conditions;
- **TANT QUE ... FAIRE ... FIN TANT QUE** : pour les boucles;
- **AFFICHER** : pour afficher un message ou un élément;
- **DEMANDER** : pour demander une information à l'utilisateur;
- **INCREMENTER** : pour augmenter la valeur d'une variable numérique;
- **DECREMENTER** : pour diminuer la valeur d'une variable numérique;
- **ATTENDRE** : pour indiquer qu'une action doit se produire avant de continuer.

Nous n'utilisons pas encore de mots-clés pour les tableaux, les fonctions ou les boucles `POUR`, car ces notions seront vues plus tard dans la session.

## 4. Exemple complet : une luciole pas trop proche

### Analyse du problème

Dans le projet de classe, la luciole apparaît à une position aléatoire dans le Canvas. Elle ne doit toutefois pas apparaître trop près du joueur, pour laisser un peu de recherche au joueur.

- **Données connues** : la position du joueur, un seuil de distance minimal.
- **Données à générer** : la position de la luciole.
- **Règle** : la position générée doit être assez loin du joueur, sur l'axe des `x` ou sur l'axe des `y`.
- **Cas limite** : si le seuil est trop grand par rapport à la taille du Canvas, aucune position ne pourrait convenir. Le seuil doit donc rester raisonnable.

### Pseudo-code

```text
INITIALISER la position X du joueur
INITIALISER la position Y du joueur
INITIALISER le seuil de distance minimal

INITIALISER la position X de la luciole à 0
INITIALISER la position Y de la luciole à 0
INITIALISER "la luciole est assez loin" à FAUX

TANT QUE "la luciole est assez loin" est FAUX FAIRE
    AFFECTER une position X aléatoire à la luciole
    AFFECTER une position Y aléatoire à la luciole

    INITIALISER la différence en X entre la luciole et le joueur
    INITIALISER la différence en Y entre la luciole et le joueur

    SI la différence en X est plus grande que le seuil
       OU la différence en Y est plus grande que le seuil ALORS
        AFFECTER VRAI à "la luciole est assez loin"
    FIN SI
FIN TANT QUE

AFFICHER la scène avec le joueur et la luciole
```

Chaque ligne du pseudo-code décrit une intention, sans se soucier de la syntaxe exacte du langage.

## 5. Passer du pseudo-code au code JavaScript

Chaque mot-clé du pseudo-code correspond à une instruction JavaScript déjà connue :

| Pseudo-code | JavaScript |
| --- | --- |
| `INITIALISER x à valeur` | `let x = valeur;` ou `const x = valeur;` |
| `AFFECTER x à valeur` | `x = valeur;` |
| `SI condition ALORS ... SINON ... FIN SI` | `if (condition) { ... } else { ... }` |
| `TANT QUE condition FAIRE ... FIN TANT QUE` | `while (condition) { ... }` |
| `AFFICHER message` | `console.log(message);` |
| `DEMANDER` | `prompt(...)` |
| `INCREMENTER x` | `x++;` |
| `DECREMENTER x` | `x--;` |

En suivant cette correspondance, le pseudo-code de la section précédente devient :

```js
const positionJoueurX = 80;
const positionJoueurY = 380;
const SEUIL_DISTANCE = 150;

let positionLucioleX = 0;
let positionLucioleY = 0;
let estAssezLoin = false;

while (!estAssezLoin) {
  positionLucioleX = Math.floor(Math.random() * 740) + 30;
  positionLucioleY = Math.floor(Math.random() * 440) + 30;

  const differenceX = Math.abs(positionLucioleX - positionJoueurX);
  const differenceY = Math.abs(positionLucioleY - positionJoueurY);

  estAssezLoin = differenceX > SEUIL_DISTANCE || differenceY > SEUIL_DISTANCE;
}

console.log("Position de la luciole :", positionLucioleX, positionLucioleY);
```

`Math.abs()` retourne une valeur absolue, c'est-à-dire toujours positive. Cette fonction fait partie de l'objet `Math`, comme `Math.random()` et `Math.floor()`.

## 6. Structure et bonnes pratiques

Un programme bien structuré est plus facile à lire, à corriger et à modifier :

- déclarer les constantes et les variables importantes au début du fichier;
- garder un seul niveau d'indentation par bloc (`if`, `while`, etc.);
- éviter de répéter le même calcul à plusieurs endroits;
- ajouter un commentaire lorsque le code n'explique pas déjà son intention.

```js
// Chercher une position de luciole assez loin du joueur
while (!estAssezLoin) {
  // ...
}
```

## 7. Règles de nomenclature

Dans ce cours, nous suivons ces conventions pour nommer les variables et les constantes :

- les variables et les constantes utilisent le style `camelCase` : `positionLucioleX`, `estAssezLoin`;
- une constante qui représente une règle ou une valeur de configuration fixe s'écrit en majuscules avec des tirets bas : `SEUIL_DISTANCE`, `MAX_LUCIOLES`;
- le nom doit décrire clairement le contenu de la variable, sans abréviation obscure;
- une variable booléenne commence souvent par un mot comme `est` ou `a` : `estAssezLoin`, `aTrouveLaLuciole`.

Ces règles rendent le code plus facile à lire pour vous et pour les autres étudiants.

## À retenir

- Analyser un problème signifie identifier ses données, ses règles et ses cas limites.
- Le pseudo-code décrit une solution sans dépendre de la syntaxe JavaScript.
- Chaque mot-clé du pseudo-code correspond à une instruction JavaScript précise.
- Un programme bien structuré est plus facile à lire et à modifier.
- Les noms de variables et de constantes suivent des conventions cohérentes tout au long du cours.
