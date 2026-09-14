// Définir le titre du jeu (une constante)
const TITRE_JEU = "Le jardin des lucioles";

// let message = "Bonjour ";

// let nomJoueuse = prompt("Quel est ton nom ?");
// message = message + nomJoueuse; // Concaténation de chaîne de caractères
// console.log(message);

// Nombre de lucioles qu'il faut attraper pour finir le niveau
// Cette valeur n'est pas censée changer durant le jeu (donc on utilise une constante)
const OBJECTIF = 30;

// Valeurs qui varient pendant le jeu (donc on utilise des variables)
let score = 12;
let nombreVies = 2;

// Afficher les valeurs
console.log("Titre du jeu : ", TITRE_JEU);

// Afficher l'objectif.
console.log("L'objectif est de ramasser ", OBJECTIF, " lucioles");


console.log("Score actuel : ", score);
console.log("Vies restantes : ", nombreVies);

// Demander à l'utilisateur combien de lucioles il a ramassé
let reponse = prompt("Combien de lucioles ? ");
let reponseConvertieEnNombre = Number(reponse);
console.log("Type de la valeur de la réponse : ", typeof reponse);
console.log("Type de la valeur de reponseConvertieEnNombre : ", typeof reponseConvertieEnNombre);

// Afficher le type de la valeur de OBJECTIF
console.log("Type de la valeur de la constante OBJECTIF : ", typeof OBJECTIF);


score = score + reponseConvertieEnNombre;
console.log("Nouveau score : ", score);

// Opérateurs arithmétiques
// Augmenter le score par 1
// score = score + 1; // Ajouter 1
// score = score + 1; 
// score = score + 3; // Ajouter 3
// score = score + 1;
// score++; // Ajouter 1 : avec l'opérateur d'incrémentation
console.log("Score actuel : ", score);

// Diminuer le nombre de vies
nombreVies = nombreVies - 1;
nombreVies = nombreVies - 28;

/*
nombreVies = nombreVies - 1;
nombreVies = nombreVies - 1;
nombreVies = nombreVies - 1;
*/

// Décrémenter les vies
nombreVies--;
console.log("Vies restantes : ", nombreVies);

// Opérateur de comparaison

let partieTerminee = score >= OBJECTIF;
console.log("Type de la valeur de partieTerminee : ", typeof partieTerminee);

console.log("Est-ce que la partie est terminée ?", partieTerminee);