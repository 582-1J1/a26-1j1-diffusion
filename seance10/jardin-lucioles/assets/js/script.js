const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");

// Pseudocode :
// INITIALISER la position X du joueur
// INITIALISER la position Y du joueur
// INITIALISER le seuil de distance minimal
// INITIALISER la position X de la luciole à 0
// INITIALISER la position Y de la luciole à 0
// INITIALISER "la luciole est assez loin" à FAUX
// TANT QUE "la luciole est assez loin" est FAUX FAIRE
//     AFFECTER une position X aléatoire à la luciole
//     AFFECTER une position Y aléatoire à la luciole
//     INITIALISER la différence en X entre la luciole et le joueur
//     INITIALISER la différence en Y entre la luciole et le joueur
//     SI la différence en X est plus grande que le seuil
//        OU la différence en Y est plus grande que le seuil ALORS
//         AFFECTER VRAI à "la luciole est assez loin"
//     FIN SI
// FIN TANT QUE

let positionJoueurX = 100;
let positionJoueurY = 400;

const TAILLE_LUCIOLE = 40;
const DISTANCE_MIN = 150;

let positionLucioleX = 0;
let positionLucioleY = 0;

let estAssezLoin = false;

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
    contexte.drawImage(imageJoueur, positionJoueurX, positionJoueurY);

    // Dessiner une luciole avec position aléatoire MAIS assez 
    // éloignée du joueur :
    // Donc sa position X ou Y sont au moins à 150px du joueur
    while (estAssezLoin === false) {
        positionLucioleX = Math.floor(Math.random() * canvas.width);
        positionLucioleY = Math.floor(Math.random() * canvas.height);

        console.log("Position aléatoire de la luciole : ", positionLucioleX, positionLucioleY);


        let distanceJoueurLucioleX = positionLucioleX - positionJoueurX;
        let distanceJoueurLucioleY = positionLucioleY - positionJoueurY;

        if (distanceJoueurLucioleX > DISTANCE_MIN || distanceJoueurLucioleY > DISTANCE_MIN) {
            estAssezLoin = true;
            // On dessine la luciole 
            contexte.drawImage(imageLuciole, positionLucioleX, positionLucioleY);
        }

    }


    // Répéter l'instruction suivante 20 fois (pour dessiner 20 lucioles)
    // let nbLucioles = 0;
    // while (nbLucioles < 10) {
    //     contexte.drawImage(imageLuciole,
    //         Math.floor(Math.random() * canvas.width),
    //         Math.floor(Math.random() * canvas.height)
    //     );
    //     nbLucioles++;
    // }



}



// CODE DE TEST

// Choisir un nombre aléatoire en JS
let nbAlea = Math.random(); // Nombre entre 0 (possible) et 1 (impossible)
// console.log("Nombre aléatoire : ", nbAlea);

// Nombre ENTIER entre 1 et 10
let nbAlea1_10 = Math.floor(Math.random() * 10) + 1;
// console.log("Nombre entier aléatoire entre 1 et 10 : ", nbAlea1_10);

// Exemple d'instruction itératives (répétition de code)
// Donc les BOUCLES (while/for/for...of)
let choixLoto = "";
let nbChoix = 0;
while (nbChoix < 6) {
    choixLoto = choixLoto + (Math.floor(Math.random() * 49) + 1) + ",";
    nbChoix++;
}
// console.log("Mon choix pour la loto : ", choixLoto);
