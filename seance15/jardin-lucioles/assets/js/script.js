const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");

// Dimensions de base
const LARGEUR_CANVAS = canvas.width;
const HAUTEUR_CANVAS = canvas.height;
const CENTRE = LARGEUR_CANVAS / 2;
const MILIEU = HAUTEUR_CANVAS / 2;

// Définir les images principales du jeu
const imgFond = new Image();
imgFond.src = "assets/images/foret-nuit.jpg";
const imgJoueur = new Image();
imgJoueur.src = "assets/images/joueur.svg";
const imgLuciole = new Image();
imgLuciole.src = "assets/images/luciole.svg";


// Gérer le démarrage du jeu
window.addEventListener("load", demarrer);

/**
 * Permet le démarrage du jeu une fois que les ressources de 
 * la fenêtre ont été chargées.
 */
function demarrer() {
    // Appeler la fonction qui affiche l'écran d'intro
    dessinerIntro();
}

function dessinerIntro() {
    console.log("Dans l'intro");
    // Image de fond
    contexte.drawImage(imgFond, 0, 0);

    // Titre du jeu
    contexte.font = "60px Arial";
    contexte.fillStyle = "yellow";
    contexte.textAlign = "center";
    contexte.textBaseline = "middle";
    contexte.fillText("Jardin des lucioles", CENTRE, MILIEU);

}

function dessinerPartieJeu() {
    console.log("Dans la partie de jeu");

}

function dessinerFin() {
    console.log("Dans l'écran des résultats");

}