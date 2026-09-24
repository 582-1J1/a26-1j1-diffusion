const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");

// Créer les objets images utiles pour la scène
let imageFond = new Image();
let imageJoueur = new Image();
let imageLuciole = new Image();

// Leur attibuer les fichiers d'images correspondants
imageFond.src = "assets/images/foret-nuit.jpg";
imageJoueur.src = "assets/images/joueur.svg";
imageLuciole.src = "assets/images/luciole.svg";

// Afficher la scène
window.addEventListener("load", dessinerScene);

function dessinerScene() {
    // "Dessiner" l'image de fond
    contexte.drawImage(imageFond, 0, 0, canvas.width, canvas.height);

    // "Voiler" l'image de fond
    contexte.fillStyle = "rgba(5, 15, 35, 0.65)";
    contexte.fillRect(0, 0, canvas.width, canvas.height)

    // Dessiner le joueur
    contexte.drawImage(imageJoueur, 100, 400);

    // Dessiner deux lucioles

    // Répéter l'instruction suivante 20 fois (pour dessiner 20 lucioles)
    let nbLucioles = 0;
    while (nbLucioles < 20) {
        contexte.drawImage(imageLuciole,
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height)
        );
        nbLucioles++;
    }



}



// CODE DE TEST

// Choisir un nombre aléatoire en JS
let nbAlea = Math.random(); // Nombre entre 0 (possible) et 1 (impossible)
console.log("Nombre aléatoire : ", nbAlea);

// Nombre ENTIER entre 1 et 10
let nbAlea1_10 = Math.floor(Math.random() * 10) + 1;
console.log("Nombre entier aléatoire entre 1 et 10 : ", nbAlea1_10);

// Exemple d'instruction itératives (répétition de code)
// Donc les BOUCLES (while/for/for...of)
let choixLoto = "";
let nbChoix = 0;
while (nbChoix < 6) {
    choixLoto = choixLoto + (Math.floor(Math.random() * 49) + 1) + ",";
    nbChoix++;
}
console.log("Mon choix pour la loto : ", choixLoto);
