const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");

// Les images
const imageFond = new Image();
const imageJoueur = new Image();
const imageLuciole = new Image();

imageFond.src = "assets/images/foret-nuit.jpg";
imageJoueur.src = "assets/images/joueur.svg";
imageLuciole.src = "assets/images/luciole.svg";






function initialiser() {
  
}

window.addEventListener("load", initialiser);
