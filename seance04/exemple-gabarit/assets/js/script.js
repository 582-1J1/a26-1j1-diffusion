const titreJeu = "Le jardin des lucioles";
const objectif = 3;
let score = 2;
let nombreVies = 2;

console.log("Titre du jeu :", titreJeu);
console.log("Score :", score);
console.log("Objectif :", objectif);

// Opérateurs arithmétiques
score = score + 1;
let reste = score % 2;
console.log("Score après addition :", score);
console.log("Reste de la division par 2 :", reste);

// Incrémentation et décrémentation
score++;
nombreVies--;
console.log("Score après incrémentation :", score);
console.log("Nombre de vies après décrémentation :", nombreVies);

// Conversion d'une chaîne de caractères en nombre
let reponse = prompt("Combien de lucioles avez-vous trouvées ?");
let nombreDeLucioles = Number(reponse);
console.log("Type de la réponse :", typeof reponse);
console.log("Type après conversion :", typeof nombreDeLucioles);

score = score + nombreDeLucioles;
alert("Nouveau score : " + score);

// Comparaisons
const objectifAtteint = score >= objectif;
console.log("Objectif atteint :", objectifAtteint);

// Aperçu d'une condition, approfondie au prochain cours
if (objectifAtteint) {
  console.log("Le passage vers la suite du jardin est ouvert.");
} else {
  console.log("Il reste des lucioles à trouver.");
}

if (nombreVies > 0) {
  console.log("Le joueur peut continuer sa recherche.");
} else {
  console.log("La partie est terminée.");
}
