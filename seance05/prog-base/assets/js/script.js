// Déclarer et affecter des valeurs à des constantes 
// (variables qui ne peuvent plus changer de valeurs)
const TITRE_JEU = "Le jardin des lucioles";
const OBJECTIF = 10;

// Déclarer et affecter des valeurs à des variables
let score = 0;
let nombreVies = 2;
let lucioleRecueillie = false;

// La fonction prompt retourne la valeur saisit par l'utilisateur toujours en 
// tant que String
let nombreLuciolesRecueillies = Number(prompt("Combien de lucioles"));

// Si le nombre de luciolles est plus grand que 0, alors changer 
// lucioleRecueillie à true
if (nombreLuciolesRecueillies > 0) {
    // Indiquer qu'une luciole (au moins) est receuillie
    lucioleRecueillie = true;
    // Ajouter au score
    score = score + nombreLuciolesRecueillies;
}


// Si une luciole est recueillie et le score est plus grand ou égal que l'objectif :
// afficher "la partie est terminée"
if (lucioleRecueillie === true) {
    if (score >= OBJECTIF) {
        console.log("La partie est terminée !");
    }
    // Et sinon, afficher "on continue de jouer"
    else {
        console.log("On continue de jouer");
    }
}