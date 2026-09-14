// Utiliser JS pour capturer le CANVAS dans la page HTML
const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");

// Dessiner une première forme dans le canvas.
// Le ciel
contexte.fillStyle = "lightblue";
contexte.fillRect(0, 0, 800, 250);

// Le sol
contexte.fillStyle = "darkgreen";
contexte.fillRect(0, 250, 800, 250);