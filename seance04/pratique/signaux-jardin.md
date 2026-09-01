# Signaux dans le jardin

## Objectif

Utilisez des opérateurs arithmétiques, l'incrémentation, la conversion de nombres et une comparaison pour indiquer l'état d'une recherche de lucioles.

## Préparation

1. Copiez le dossier [exemple-gabarit](../exemple-gabarit/) dans un nouveau dossier nommé `signaux-jardin`.
2. Ouvrez `index.html` dans votre navigateur.
3. Ouvrez la console du navigateur.

## Consignes

Dans `assets/js/script.js` :

1. Ajoutez une variable `nombreVies` contenant le nombre `3`.
2. Utilisez `nombreVies--` pour retirer une vie, puis affichez la nouvelle valeur dans la console.
3. Ajoutez une variable `bonus` contenant le nombre `2`, puis calculez `score + bonus` à l'aide de l'opérateur `+`. Affichez le résultat dans la console.
4. Utilisez `prompt()` pour demander à l'utilisateur combien de lucioles il a trouvées, puis convertissez sa réponse en nombre avec `Number()`.
5. Utilisez `typeof` pour vérifier, dans la console, que la réponse convertie est bien un nombre.
6. Ajoutez cette valeur convertie au `score` à l'aide de l'opérateur `+=` ou de `score = score + ...`.
7. Vérifiez, avec une comparaison, si le nouveau `score` est plus grand ou égal à `objectif`.
8. Ajoutez une condition qui affiche `Il reste des vies.` lorsque `nombreVies` est plus grand que `0`. Sinon, elle doit afficher `La partie est terminée.`

## Vérification

Avant de montrer votre travail :

- votre fichier ne contient aucune erreur dans la console;
- le score est calculé à partir d'une réponse convertie en nombre avec `Number()`;
- `typeof` est utilisé pour confirmer la conversion;
- les deux possibilités liées au nombre de vies sont prévues;
- vos variables portent des noms clairs.
