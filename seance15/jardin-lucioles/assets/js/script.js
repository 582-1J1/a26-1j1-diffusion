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

// Écran de titre animé
let positionTitre = -300;

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

    // Répéter le code animerTitre 60 fois par seconde
    // On utilise les "minuteries" JS : 
    // setTimeout/setInterval/requestAnimationFrame
    setInterval(dessinerIntro, 1000 / 60);
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
    dessinerFond(0.65);

    // Titre animé
    animerTitre();
}

function dessinerFond(opacite) {
    contexte.drawImage(imgFond, 0, 0, LARGEUR_CANVAS, HAUTEUR_CANVAS);
    // Calcul de la valeur couleur par ***concaténation***
    // contexte.fillStyle = "rgba(10, 15, 20, " + opacite + ")";
    // Calcul de la valeur couleur par litéraux de gabarit (template literal)
    // Interpolation de variable
    contexte.fillStyle = `rgba(10, 15, 20, ${opacite})`;

    contexte.fillRect(0, 0, LARGEUR_CANVAS, HAUTEUR_CANVAS);
}

function animerTitre() {
    // Titre du jeu
    contexte.font = "60px Arial";
    contexte.fillStyle = "rgb(193, 157, 49)";
    contexte.textAlign = "center";
    contexte.textBaseline = "middle";
    contexte.fillText("Le jardin des lucioles", positionTitre, MILIEU);

    // Si positionTitre < CENTRE
    // Alors augmenter positionTitre par 5
    if (positionTitre < CENTRE) {
        // positionTitre = positionTitre + 5;
        positionTitre += 10;
    }
    else {
        // Bouton d'action (pour passer à l'écran de partie de jeu)
        dessinerBouton(CENTRE - 50, HAUTEUR_CANVAS - 150, 100, 60, "rgb(193, 157, 49)", "#2e2e2e", "JOUER");
    }
}

function dessinerPartieJeu() {
    console.log("Dans la partie de jeu");
    // Vider le canvas
    contexte.clearRect(0, 0, LARGEUR_CANVAS, HAUTEUR_CANVAS);

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