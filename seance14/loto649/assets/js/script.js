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


function genererEntierAleatoire(min, max) {

}


// Par exemple
genererEntierAleatoire(1, 49);
genererEntierAleatoire(1, 13);
genererEntierAleatoire(100, 600);

