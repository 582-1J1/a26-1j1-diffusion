# Séance 19 - Fonctions temporelles, objets et interactions

- Fonctions temporelles : `setTimeout()` et `setInterval()`
- Boucle de jeu et d'animation
- Objets : paires clé-valeur et accès aux propriétés
- Événements du clavier : `keydown`, `keyup` et `event.key`
- Objet `Audio` et rétroactions visuelle et sonore

## Objectifs de la séance

À la fin de la séance, vous devriez être capable de :

- planifier l'exécution différée ou répétée d'une fonction;
- expliquer le rôle d'une boucle de jeu dans la mise à jour et l'affichage d'un jeu;
- regrouper les propriétés d'une entité dans un objet;
- lire et modifier une propriété avec la notation pointée ou la notation par crochets;
- réagir à l'enfoncement et au relâchement d'une touche;
- utiliser `event.key` pour reconnaître la touche concernée;
- utiliser l'objet `Audio` pour lire, mettre en pause ou répéter un son;
- choisir une rétroaction visuelle ou sonore adaptée à une action du jeu.

## 1. Planifier une action dans le temps

JavaScript peut programmer l'exécution d'une fonction après un délai ou à intervalles répétés. Ces fonctions temporelles ne mettent pas le reste du programme en pause : le navigateur peut continuer à traiter les autres événements pendant l'attente.

### Exécuter une fonction une seule fois

`setTimeout()` programme une fonction pour qu'elle s'exécute après un délai exprimé en millisecondes.

```js
setTimeout(fonctionARappeler, delaiEnMillisecondes);
```

Le nom de la fonction est fourni sans parenthèses. On transmet la fonction à appeler, sans l'exécuter immédiatement.

### Répéter une fonction

`setInterval()` programme l'appel répété d'une fonction, à un intervalle exprimé en millisecondes.

```js
setInterval(fonctionARappeler, intervalleEnMillisecondes);
```

Le délai indique une fréquence approximative, et non une garantie d'exécution à une heure exacte. Le navigateur peut être occupé et retarder un appel.

Chaque minuterie renvoie un identifiant. On peut conserver cet identifiant afin d'annuler la minuterie :

```js
const idDelai = setTimeout(fonctionARappeler, delaiEnMillisecondes);
clearTimeout(idDelai);

const idIntervalle = setInterval(fonctionARappeler, intervalleEnMillisecondes);
clearInterval(idIntervalle);
```

Il faut éviter de démarrer plusieurs intervalles pour la même boucle de jeu : chaque intervalle continuerait d'appeler sa fonction. Une boucle devrait être démarrée une seule fois, puis arrêtée au besoin avec son identifiant.

## 2. La boucle de jeu et d'animation

Une boucle de jeu est une fonction appelée de façon répétée pendant que le jeu est actif. À chaque passage, le programme peut :

1. mettre à jour l'état du jeu et les positions des éléments;
2. effacer l'image précédente;
3. dessiner la nouvelle image à partir de l'état actuel.

La boucle relie ainsi le temps à l'animation : si une position change à chaque appel, l'élément semble se déplacer. Les événements de l'utilisateur peuvent aussi modifier l'état lu par la boucle.

Une minuterie est utile pour comprendre et créer une répétition simple. Toutefois, son intervalle n'est pas parfaitement régulier. Le nombre d'appels par seconde peut varier selon le navigateur et la charge de l'ordinateur; une animation ne doit donc pas supposer que le délai demandé sera toujours respecté exactement.

## 3. Regrouper des données dans un objet

Un **objet** regroupe des valeurs qui décrivent une même entité. Chaque valeur est associée à une **propriété** : le nom de la propriété est sa **clé**, et la donnée associée est sa **valeur**.

La forme générale d'un objet littéral est :

```js
const nomObjet = {
  propriete: valeur,
  autrePropriete: autreValeur
};
```

Les propriétés sont séparées par des virgules. Une propriété peut contenir une chaîne de caractères, un nombre, une valeur booléenne, une image ou une autre donnée déjà utilisée dans le cours.

### Lire une propriété

La notation pointée convient lorsque le nom de la propriété est connu dans le code :

```js
nomObjet.propriete
```

La notation par crochets utilise une chaîne de caractères pour désigner la clé :

```js
nomObjet["propriete"]
```

Les deux notations permettent également de modifier une propriété par affectation :

```js
nomObjet.propriete = nouvelleValeur;
nomObjet["propriete"] = nouvelleValeur;
```

La notation par crochets est nécessaire quand la clé est fournie dans une variable. La notation pointée est généralement plus simple quand le nom de la propriété est écrit directement.

Un objet déclaré avec `const` peut avoir ses propriétés modifiées. `const` empêche de remplacer la référence à l'objet par une autre valeur; il ne rend pas les propriétés immuables.

## 4. Réagir aux événements du clavier

On peut écouter les événements du clavier sur `document`. Deux événements sont utiles :

- `keydown` se produit lorsqu'une touche est enfoncée;
- `keyup` se produit lorsqu'une touche est relâchée.

Un écouteur transmet à sa fonction de gestion un objet événement. Sa propriété `key` indique la touche concernée :

```js
document.addEventListener("keydown", gererTouche);
document.addEventListener("keyup", gererTouche);

function gererTouche(evenement) {
  console.log(evenement.key);
}
```

La valeur de `event.key` est une chaîne de caractères. Les touches de direction, par exemple, sont représentées par `"ArrowUp"`, `"ArrowDown"`, `"ArrowLeft"` et `"ArrowRight"`. La casse et l'orthographe doivent correspondre à la valeur reçue.

Un événement `keydown` peut se répéter tant qu'une touche reste enfoncée. Pour une action qui doit continuer pendant que la touche est maintenue, il est souvent préférable de mémoriser si elle est enfoncée dans l'état du jeu, puis de consulter cet état dans la boucle de jeu. L'événement `keyup` permet alors de signaler son relâchement.

## 5. Lire et contrôler un son

L'objet `Audio` représente un son chargé par le navigateur. On peut lui fournir le chemin d'un fichier audio ou affecter ce chemin à sa propriété `src`.

Les opérations courantes sont :

- `play()` pour demander la lecture;
- `pause()` pour mettre la lecture en pause;
- `currentTime` pour connaître ou modifier la position de lecture;
- `loop` pour répéter la lecture;
- `volume` pour régler le volume, entre `0` et `1`.

Pour rejouer un son depuis le début après l'avoir interrompu, il faut replacer sa position de lecture au début avant de le lancer de nouveau. La lecture audio est contrôlée par le navigateur. En particulier, un navigateur peut refuser de lancer un son avant une première interaction de l'utilisateur. Il faut donc déclencher les sons en réponse à une action permise et vérifier le comportement dans le navigateur.

## 6. Choisir une rétroaction

Une rétroaction confirme au joueur qu'une action ou un changement d'état a été pris en compte.

- Une **rétroaction visuelle** peut modifier le dessin, la position, la couleur ou le texte affiché sur le Canvas.
- Une **rétroaction sonore** peut jouer un effet sonore ou une musique.

La rétroaction doit correspondre à l'événement et à l'état du jeu. Elle peut être visuelle, sonore ou combiner les deux. Un son ne remplace pas une information visuelle essentielle : le joueur doit pouvoir comprendre ce qui se passe même si le son est désactivé.
