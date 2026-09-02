const titreJeu = "Le jardin des lucioles";
const objectif = 3;
let score = 2;
let nombreVies = 2;
let lucioleRecueillie = true;

console.log("Titre du jeu :", titreJeu);
console.log("Score :", score);
console.log("Nombre de vies :", nombreVies);
console.log("Luciole recueillie :", lucioleRecueillie);

if (lucioleRecueillie && score >= objectif) {
  console.log("La porte vers la suite du jardin est ouverte.");
} else if (lucioleRecueillie && score < objectif) {
  console.log("La luciole est recueillie, mais il faut encore des points.");
} else {
  console.log("La porte reste fermée.");
}

if (nombreVies > 0) {
  console.log("Le joueur peut continuer.");
} else {
  console.log("La partie est terminée.");
}

if (!lucioleRecueillie || nombreVies === 0) {
  console.log("Le jardin attend encore le joueur.");
}
