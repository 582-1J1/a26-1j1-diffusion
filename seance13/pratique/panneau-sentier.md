# Le panneau du sentier

## Objectif

Pratiquer les tableaux, la déclaration et l'appel de fonctions, les paramètres, la valeur de retour et l'écouteur d'événement `click`.

## Contexte

Le joueur arrive devant un panneau en bois au milieu du sentier. À chaque clic **sur le panneau**, un nouveau conseil s'affiche. Après le dernier conseil, le programme revient au premier.

## Préparation

1. Copiez le dossier [jardin-lucioles](../jardin-lucioles/) dans un nouveau dossier nommé `panneau-sentier`.
2. Dans ce nouveau dossier, créez un fichier `assets/js/panneau.js`.
3. Dans `index.html`, remplacez `script.js` par `panneau.js` dans la balise `<script>`.

## Consignes

Écrivez d'abord le pseudo-code de la fonction `gererClic`, puis programmez la solution dans `panneau.js`.

1. Récupérez le Canvas et son contexte.
2. Déclarez un tableau `CONSEILS` contenant trois conseils (des chaînes de caractères) et une variable `numeroConseil` qui commence à `0`.
3. Déclarez une constante pour chaque information du panneau : sa position (`PANNEAU_X`, `PANNEAU_Y`) et ses dimensions (`PANNEAU_LARGEUR`, `PANNEAU_HAUTEUR`).
4. Déclarez une fonction `ecrireTexte(texte, x, y)` qui écrit un texte dans le Canvas. Ses trois **paramètres** sont les informations qu'elle reçoit.
5. Déclarez une fonction `obtenirConseil(numero)` qui **retourne** `CONSEILS[numero]`. Si `numero` ne correspond à aucun élément du tableau, elle retourne plutôt `"Aucun conseil."`.
6. Déclarez une fonction `estDansRectangle(pointX, pointY, rectX, rectY, largeur, hauteur)` qui **retourne** `true` si le point est dans le rectangle, sinon `false`.
7. Déclarez une fonction `dessinerPanneau()` qui efface le Canvas, dessine le rectangle du panneau, puis **appelle** `ecrireTexte()` avec, comme argument, la valeur retournée par `obtenirConseil(numeroConseil)`.
8. Déclarez une fonction `gererClic(evenement)`. Elle utilise `estDansRectangle()` avec `evenement.offsetX` et `evenement.offsetY`. Si le clic est sur le panneau, elle augmente `numeroConseil`, revient à `0` après le dernier conseil, puis appelle `dessinerPanneau()`.
9. Déclarez une fonction `initialiser()` qui enregistre `gererClic` pour l'événement `click` du Canvas, puis appelle `dessinerPanneau()`.
10. Enregistrez `initialiser` pour l'événement `load` de la fenêtre.

## Défi

Ajoutez une fonction `gererDoubleClic()` qui remet `numeroConseil` à `0` lorsque le joueur double-clique sur le Canvas, puis redessine le panneau. N'oubliez pas de l'enregistrer pour l'événement `dblclick`.

## Vérification

Avant de montrer votre travail :

- le pseudo-code de `gererClic` est écrit avant le code;
- chaque fonction est **déclarée une seule fois** et **appelée** à l'endroit approprié;
- les paramètres sont dans les déclarations et les arguments sont dans les appels;
- `obtenirConseil` et `estDansRectangle` utilisent `return` plutôt que `console.log`;
- les noms de fonctions passés à `addEventListener` n'ont **pas** de parenthèses;
- le clic hors du panneau ne change pas le conseil;
- le programme revient au premier conseil après le dernier;
- la console ne contient aucune erreur.
