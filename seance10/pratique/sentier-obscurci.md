# Le sentier obscurci

## Objectif

Analyser un problème simple, rédiger son pseudo-code, puis le traduire en JavaScript, sans utiliser de tableau.

## Contexte

Le joueur avance dans le jardin la nuit avec une petite lanterne. Sa réserve de lumière commence à `20`. À chaque pas simulé, la réserve perd une valeur aléatoire entre `1` et `3`. Le joueur doit s'arrêter dès que sa réserve atteint `0` ou une valeur inférieure.

## Consignes

1. Rédigez l'analyse du problème :
   - quelles données sont déjà connues;
   - quelle donnée doit être générée à chaque pas;
   - quelle règle détermine l'arrêt;
   - un cas limite possible.
2. Rédigez le pseudo-code de ce problème avec les mots-clés vus en classe (`INITIALISER`, `TANT QUE`, `DECREMENTER`, `AFFICHER`, etc.).
3. Créez un fichier `script.js` et traduisez votre pseudo-code en JavaScript.
4. Utilisez une boucle `while` qui s'arrête lorsque la réserve de lumière atteint `0` ou moins.
5. Affichez, à chaque pas, la réserve de lumière restante et le nombre de pas effectués.
6. Affichez un dernier message lorsque la réserve est épuisée.

## Vérification

Avant de montrer votre travail :

- l'analyse identifie clairement les données et la règle d'arrêt;
- le pseudo-code utilise seulement les mots-clés vus en classe;
- le code JavaScript correspond fidèlement au pseudo-code;
- la boucle `while` peut toujours se terminer;
- aucun tableau n'est utilisé;
- la console ne contient aucune erreur.
