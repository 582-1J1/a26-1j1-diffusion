# La porte du jardin

## Objectif

Utilisez des conditions et des opérateurs logiques pour déterminer si le joueur peut franchir une porte du Jardin des lucioles.

## Préparation

1. Copiez le dossier `prog-base` dans un nouveau dossier nommé `porte-jardin`.
2. Ouvrez `index.html` dans votre navigateur.
3. Ouvrez la console du navigateur.

## Consignes

Dans `assets/js/script.js` :

1. Créez les variables `score`, `nombreVies` et `lucioleRecueillie` avec des valeurs de départ.
2. Écrivez une condition qui affiche `La porte est ouverte.` si la luciole est recueillie et que le score est au moins égal à `3`.
3. Ajoutez un `else` qui affiche `La porte reste fermée.`.
4. Ajoutez un `else if` entre les deux pour afficher `La luciole est recueillie, mais il faut encore des points.` lorsque la luciole est recueillie, mais que le score est inférieur à `3`.
5. Écrivez une deuxième condition qui affiche `La partie continue.` si le nombre de vies est supérieur à `0`, sinon elle affiche `La partie est terminée.`.
6. Modifiez une valeur à la fois et observez les différents messages dans la console.

## Vérification

Avant de montrer votre travail :

- `if`, `else if` et `else` sont utilisés;
- la première règle combine deux conditions avec `&&`;
- les résultats des trois états de la porte ont été testés;
- les deux états liés au nombre de vies ont été testés;
- votre fichier ne contient aucune erreur dans la console.
