/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("canvas");
const contexte = canvas.getContext("2d");
const imageLuciole = new Image();

imageLuciole.src = "assets/images/luciole.svg";

let imagesChargees = 0;

function dessinerScene() {
  contexte.clearRect(0, 0, canvas.width, canvas.height);

  contexte.fillStyle = "#102a43";
  contexte.fillRect(0, 0, canvas.width, canvas.height);

  contexte.fillStyle = "#f6bd60";
  contexte.font = "28px sans-serif";
  contexte.fillText("Trouvez la luciole !", 30, 45);

  contexte.drawImage(imageLuciole, 600, 180, 40, 40);
}

function imageEstChargee() {
  imagesChargees++;
  if (imagesChargees === 1) {
    dessinerScene();
  }
}

imageLuciole.addEventListener("load", imageEstChargee);