// Utiliser JS pour capturer le CANVAS dans la page HTML
const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");

// Dessiner une première forme dans le canvas.

// Récupérer la largeur et la hauteur du canvas
let largeurCanvas = canvas.width;
let hauteurCanvas = canvas.height;

// Le ciel
contexte.fillStyle = "lightblue";
contexte.fillRect(0, 0, largeurCanvas, hauteurCanvas / 2);

// Le sol
contexte.fillStyle = "darkgreen";
contexte.fillRect(0, hauteurCanvas / 2, largeurCanvas, hauteurCanvas / 2);

// Le soleil
contexte.fillStyle = "yellow";
// Ombre portée
contexte.shadowColor = "yellow";
contexte.shadowBlur = 30;
contexte.beginPath();
contexte.arc(0, 0, 90, 0, Math.PI);
contexte.fill();
// Retirer l'ombre portée
contexte.shadowBlur = 0;

// Les rayons
// contexte.fillStyle = "#990000";
// contexte.fillStyle = "rgba(10, 225, 40, 0.2)";
contexte.beginPath();
contexte.moveTo(90, 0);
contexte.lineTo(110, 15);
contexte.lineTo(85, 30);
contexte.lineTo(105, 45);
contexte.lineTo(70, 55);
contexte.fill();

// Ajout d'une image
// Étape 1 : on crée un objet image
let chat = new Image();

// Étape 2 : on lui assigne une source de fichier image
chat.src = "assets/images/chat.jpg";

// Étape 3 : on dessine (place) l'image dans le canvas
// S'assurer que la page a fini de charger les éléments requis avant de placer (dessiner) l'image

window.addEventListener("load", initialisation);

function initialisation() {
    contexte.drawImage(chat, 200, hauteurCanvas / 2 - 80, 120, 80);
}


// Intégrer du texte dans le canvas
// Choisir une couleur pour le texte
contexte.fillStyle = "#900";
// Choisir une police de caractères
contexte.font = "bold 24px Courrier";
contexte.textAlign = "center";
contexte.textBaseline = "middle";
contexte.fillText("Niveau débutant", largeurCanvas / 2, hauteurCanvas / 4);

