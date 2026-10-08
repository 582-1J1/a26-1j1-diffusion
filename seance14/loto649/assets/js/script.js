const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");

/********************** LES TABLEAUX ***************************/

// let num1 = Math.floor(Math.random()*49) + 1;
// let num2 = Math.floor(Math.random()*49) + 1;
// let num3 = Math.floor(Math.random()*49) + 1;
// let num4 = Math.floor(Math.random()*49) + 1;
// let num5 = Math.floor(Math.random()*49) + 1;
// let num6 = Math.floor(Math.random()*49) + 1;

// let age = 21; // Valeur simple
// let tirage = [25, 5, 10, 13, 12, 1]; // Valeur complexe : tableau

// console.log("Type de la variable 'tirage' : ", typeof tirage);
// console.log("Valeur du 4ème élément du tableau : ", tirage[6]);
// console.log("Nombre d'éléments (valeurs) contenu dans le tableau : ", tirage.length);

// tirage[6] = Math.floor(Math.random() * 49) + 1;
// tirage[7] = Math.floor(Math.random() * 49) + 1;
// tirage[8] = Math.floor(Math.random() * 49) + 1;
// tirage[9] = Math.floor(Math.random() * 49) + 1;


// console.log("Voici le tableau : ", tirage);

// console.log("Nombre d'éléments (valeurs) contenu dans le tableau : ", tirage.length);

// On va simuler le tirage aléatoire de la loto 6/49

// Initialiser un tableau vide qui va contenir le tirage aléqtoire
let boulier = [];

// Tant que le nombre d'éléments du tableau est plus petit que 6
while (boulier.length < 6) {
    // Choisir un nombre entier aléatoire parmi 1,2,3,...,49.
    let nbAlea = Math.floor(Math.random() * 49) + 1;
    // console.log("Le nombre aléatoire choisi : ", nbAlea);

    // Et l'ajouter dans le tableau (boulier) mais seulement s'il n'y est pas déjà
    if (boulier.includes(nbAlea) === false) {
        boulier.push(nbAlea);
    }

    // console.log("Le tableau après chaque nombre ajouté : ", boulier);
}

// console.log("Le boulier à la fin de la boucle : ", boulier);


/******************** LES FONCTIONS *****************************/
// Une fonction est un bloc de code nommé (avec un nom). Ça permet :
// 1) Réutiliser des blocs de code
// 2) Organiser mieux le code du programme (et donc déboguer plus facilement)
// 3) Exécuter le code de façon contrôlé (c'est à dire à la demande)

// Déclaration de la fonction
// Paramètre prenomPersonne
function allo(prenomPersonne) {
    console.log("Allo ", prenomPersonne);
}

// Appel (ou utilisation) de la fonction
// Avec comme argument : "Sylvie"
allo("Sylvie");
// Avec comme argument : "Martin"
allo("Martin");

// Exemple 2 : fonction qui calcule une valeur et retourne le résultat
// Paramètres : largeur et longueur
function surfaceRectangle(largeur, longueur) {
    // Faire le calcul de la surface
    let surface = largeur * longueur;
    // Retourner la valeur calculée
    return surface;
}

// Arguments : 25 et 105
let surface1 = surfaceRectangle(25, 105);
console.log("La superficie du terrain est : ", surface1);

// Arguments : 1000 et 250
let surface2 = surfaceRectangle(1000, 250);
console.log("La deuxième superficie est : ", surface2);


/**
 * Génère un entier positif aléatoire entre deux valeurs, inclusivement.
 * 
 * @param {Number} min la valeur minimale possible.
 * @param {Number} max la valeur maximale possible.
 * 
 * @returns {Number} le nombre aléatoire généré.
 */
function genererEntierAleatoire(min, max) {
    let nbAlea2 = Math.floor(Math.random() * (max - min + 1)) + min;
    return nbAlea2;
}


// Par exemple
let nombreEntre1et49 = genererEntierAleatoire(1, 49);
let autreNombre = genererEntierAleatoire(1, 13);
console.log("Nombre entier aléatoire entre 100 et 600 : ",
    genererEntierAleatoire(100, 600));
// genererEntierAleatoire(10, "allo");

// console.log("Le nombre aléatoire entre 100 et 600 est : ", nbAlea2);



/******** LES ÉVÉNEMENTS DE LA SOURIS ET DU CLAVIER ***************************/
// Les événements permettent de déclencher une action lorsque la souris ou le 
// clavier sont utilisés par l'utilisateur
// C'est ce qui permet *****l'interactivité****** dans un jeu ou n'importe quel
// autre type d'application.
/******************************************************************************/

// Détecter le clic de la souris dans le canvas
canvas.addEventListener("click", gererClic);

function gererClic(evt) {
    // Raccourcis pour offsetX et offsetY   
    let x = evt.offsetX;
    let y = evt.offsetY;

    // Je détecte le clic sur le bouton "bonus"
    if (x > 10 && x < 790 && y > 440 && y < 490) {
        console.log("Tu as cliqué le bouton bonus...");
    }

    // Je détecte le clic sur le bouton "Annuler"
    if (x > canvas.width / 2 - 50
        && x < canvas.width / 2 + 50
        && y > 25
        && y < 60
    ) {
        console.log("OK bye !");
    }

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

// Un premier bouton
dessinerBouton(10, 440, 780, 50, "#090", "white", "CLIC POUR BONUS");

dessinerBouton(canvas.width / 2 - 50, 25, 100, 35, "rgb(200, 25, 25)", "yellow", "Annuler");



let monNombreChanceux = genererEntierAleatoire(0, 5000);