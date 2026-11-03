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

// Définir les sons à utiliser dans le jeu
const sonIntro = new Audio();
sonIntro.src = "assets/sons/foret-intro.wav";
// Le configurer pour faire jouer en boucle
sonIntro.loop = true;

// Boucle de jeu
let etatJeu = "intro"; // Autre états possibles : "partie", "fin"

// Écran de titre animé
let idMinuterieTitre;
let positionTitre = -300;

// Joueur animé dans l'écran du titre
const LARGEUR_PERSONNAGE = 56;
const HAUTEUR_PERSONNAGE = 56;
let xPersonnage = 0;
let yPersonnage = 0;
let directionPersonnage = "droite";

// Info du joueur et des lucioles
let joueur = {};
let lucioles = []; // length = 0

// Gérer le démarrage du jeu
window.addEventListener("load", initialiser);

/**
 * Permet le démarrage du jeu une fois que les ressources de 
 * la fenêtre ont été chargées.
 */
function initialiser() {
    // Détecter le clic de la souris
    canvas.addEventListener("click", gererClic);

    // Répéter le code animerTitre 60 fois par seconde
    // On utilise les "minuteries" JS : 
    // setTimeout/setInterval/requestAnimationFrame
    // Pour arrêter une minuterie : clearInterval/clearTimeout/cancelAnimationFrame
    setInterval(boucleJeu, 1000 / 60);

    // Jouer le son d'intro.
    sonIntro.play();

    console.log("État de la propriété 'en pause' du son : ", sonIntro.paused);

}

function gererClic(evt) {
    console.log("Tu as cliqué au point : ", evt.offsetX, "/", evt.offsetY);
    let x = evt.offsetX;
    let y = evt.offsetY;
    // Si le clic est dans la zone du rectangle du bouton JOUER, alors
    // on passe à l'écran de partie de jeu
    if (etatJeu === "intro" && x > CENTRE - 50 && x < CENTRE + 50 && y > HAUTEUR_CANVAS - 150 && y < HAUTEUR_CANVAS - 90) {
        // Appel dessinerPartieJeu
        etatJeu = "partie";
        // On appelle une fonction qui va définir les positions du joueur et des 
        // lucioles
        initialiserPartieJeu();
    }
}

function boucleJeu() {
    if (etatJeu === "intro") {
        dessinerIntro();
    }
    else if (etatJeu === "partie") {
        dessinerPartieJeu();
    }
    else if (etatJeu === "fin") {
        dessinerFin();
    }
}

function dessinerIntro() {
    console.log("Dans l'intro");
    effacerCanvas();

    // Image de fond
    dessinerFond(0.65);

    // Titre animé
    animerTitre();
    // Animer le personnage
    animerPersonnage();
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
    contexte.font = "60px 'Bigelow Rules'";
    contexte.fillStyle = "rgb(193, 157, 49)";
    contexte.textAlign = "center";
    contexte.textBaseline = "middle";
    contexte.fillText("Le jardin des lucioles", positionTitre, MILIEU);

    // Si positionTitre < CENTRE
    // Alors augmenter positionTitre par 5
    if (positionTitre < CENTRE) {
        // positionTitre = positionTitre + 5;
        positionTitre += 5;
    }
    else {
        // Bouton d'action (pour passer à l'écran de partie de jeu)
        dessinerBouton(CENTRE - 50, HAUTEUR_CANVAS - 150, 100, 60, "rgb(193, 157, 49)", "#2e2e2e", "JOUER");
    }
}

function animerPersonnage() {
    // Dessiner le personnage dans sa position actuelle
    contexte.drawImage(imgJoueur, xPersonnage, yPersonnage);

    // Déplacer le personnage le long du contour du canvas.
    if (directionPersonnage === "droite") {
        if (xPersonnage < LARGEUR_CANVAS - LARGEUR_PERSONNAGE) {
            // xPersonnage = xPersonnage + 2;
            xPersonnage += 2;
        }
        else {
            directionPersonnage = "bas";
        }
    }
    else if (directionPersonnage === "bas") {
        if (yPersonnage < HAUTEUR_CANVAS - HAUTEUR_PERSONNAGE) {
            yPersonnage += 5;
        }
        else {
            directionPersonnage = "gauche";
        }
    }
    else if (directionPersonnage === "gauche") {
        if (xPersonnage > 0) {
            xPersonnage -= 10;
        }
        else {
            directionPersonnage = "haut";
        }
    }
    else if (directionPersonnage === "haut") {
        if (yPersonnage > 0) {
            yPersonnage -= 2;
        }
        else {
            directionPersonnage = "droite";
        }
    }
}

function dessinerPartieJeu() {
    // Vider le canvas
    effacerCanvas();

    // Arrêter le son sonIntro
    arreterSon(sonIntro);

    // Dessiner le joueur
    dessinerJoueur();

    // Dessiner les lucioles
    dessinerLucioles();

}

function initialiserPartieJeu() {
    // Définir la position initiale du joueur
    joueur.x = 100;
    joueur.y = 200;
    // Définir les positions aléatoires de 10 lucioles
    while (lucioles.length < 10) {
        // ON crée un nouvel objet avec des positionx x et y aléatoires et on l'ajoute au tableau de lucioles
        let uneLuciole = {};
        uneLuciole.x = Math.floor(Math.random() * LARGEUR_CANVAS);
        uneLuciole.y = Math.floor(Math.random() * HAUTEUR_CANVAS);
        lucioles.push(uneLuciole);
    }
    // Pour tester mon code, afficher les deux variables dans la console
    console.log("Variable 'joueur' : ", joueur);
    console.log("Variable 'lucioles' : ", lucioles);

}

function dessinerJoueur() {

}

function dessinerLucioles() {

}

function arreterSon(son) {
    // Rembobiner le son d'intro
    son.currentTime = 0;
    // Et l'arrêter (mettre sur pause)
    son.pause();
}

function dessinerFin() {
    effacerCanvas();
    console.log("Dans l'écran des résultats");

}

function effacerCanvas() {
    contexte.clearRect(0, 0, LARGEUR_CANVAS, HAUTEUR_CANVAS);
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
    contexte.font = "20px Eater, sans-serif";
    contexte.textAlign = "center";
    contexte.textBaseline = "middle";
    contexte.fillText(texte, x + largeur / 2, y + hauteur / 2);
}



/* Tests avec les tableaux et les objets */

let nomEtudiante = "Julie";
let ageEtudiante = 19;
let noteEtudiante = 85;

// Ou mieux, avec un tableau (Array)
let infoEtudiante = ["Julie", 19, 85, false, "4383698569"];
console.log("Taille (length) du tableau infoEtudiantes : ", infoEtudiante.length);


// On affiche le nom et l'âge dans la console
// On affiche le nom et l'âge dans la console
console.log("Le prénom de l'étudiante est ", infoEtudiante[0]);
console.log("L'âge de l'étudiante est ", infoEtudiante[1]);

// Encore mieux, avec un objet (Object)
let infoEtudianteObjet = { prenom: "Julie", age: 19, note: 85 };
console.log("Prénom : ", infoEtudianteObjet.prenom);
console.log("Note : ", infoEtudianteObjet.note);
