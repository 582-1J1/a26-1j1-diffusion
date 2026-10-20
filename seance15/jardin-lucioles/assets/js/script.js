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
window.addEventListener("load", initialiser);

/**
 * Permet le démarrage du jeu une fois que les ressources de 
 * la fenêtre ont été chargées.
 */
function initialiser() {
    // Appeler la fonction qui affiche l'écran d'intro
    dessinerIntro();

    // Détecter le clic de la souris
    canvas.addEventListener("click", gererClic);
}

function gererClic(evt) {
    console.log("Tu as cliqué au point : ", evt.offsetX, "/", evt.offsetY);
    let x = evt.offsetX;
    let y = evt.offsetY;
    // Si le clic est dans la zone du rectangle du bouton JOUER, alors
    // on passe à l'écran de partie de jeu
    if (x > CENTRE - 50 && x < CENTRE + 50 && y > HAUTEUR_CANVAS - 150 && y < HAUTEUR_CANVAS - 90) {
        // Appel dessinerPartieJeu
        dessinerPartieJeu();
    }
}

function dessinerIntro() {
    console.log("Dans l'intro");
    // Image de fond
    contexte.drawImage(imgFond, 0, 0);

    // Titre du jeu
    contexte.font = "60px Arial";
    contexte.fillStyle = "rgb(193, 157, 49)";
    contexte.textAlign = "center";
    contexte.textBaseline = "middle";
    contexte.fillText("Jardin des lucioles", CENTRE, MILIEU);

    // Bouton d'action (pour passer à l'écran de partie de jeu)
    dessinerBouton(CENTRE - 50, HAUTEUR_CANVAS - 150, 100, 60, "rgb(193, 157, 49)", "#2e2e2e", "JOUER");

}

function dessinerPartieJeu() {
    console.log("Dans la partie de jeu");
    // Vider le canvas


}

function dessinerFin() {
    console.log("Dans l'écran des résultats");

}


/**
 * Dessine une zone d'action ("bouton") dans le canvas.
 * 
 * @param {Number} x position en X du bouton.
 * @param {Number} y position en Y du bouton.
 * @param {Number} largeur largeur du bouton.
 * @param {Number} hauteur hauteur du bouton.
 * @param {String} couleurFond couleur de fond.
 * @param {String} couleurTexte couleur du texte.
 * @param {String} texte Texte à afficher sur le bouton.
 * 
 * @returns {void}
 */
function dessinerBouton(x, y, largeur, hauteur, couleurFond, couleurTexte, texte) {
    // Dessine le rectangle
    contexte.fillStyle = couleurFond;
    contexte.fillRect(x, y, largeur, hauteur);

    // Écrire le texte
    contexte.fillStyle = couleurTexte;
    contexte.font = "20px Arial, sans-serif";
    contexte.textAlign = "center";
    contexte.textBaseline = "middle";
    contexte.fillText(texte, x + largeur / 2, y + hauteur / 2);
}