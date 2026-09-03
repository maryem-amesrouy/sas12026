
let prompt = require("prompt-sync")();

let nombre1 = Number(prompt("entrer premiere nembre: "));
let operateur = prompt("entrer l'operateur : ");
let nombre2 = Number(prompt("entrer le desieme nembre :"));

console.log("nombre 1 = ", nombre1);
console.log("porérateur :", operateur);
console.log("nombre 2 : ", nombre2);

let Resultat = 1;

switch (operateur) {
    case "+" :
        Resultat = nombre1 + nombre2;
        console.log("resultat = ", Resultat);
        break;
    case "-" :
        Resultat = nombre1 - nombre2;
        console.log("resultat = ", Resultat);
        break;
    case "*" :
        Resultat = nombre1 * nombre2;
        console.log("resultat = ", Resultat);
        break;
    case "/" :
        Resultat = nombre1 / nombre2;
        console.log("resultat = ", Resultat);
        break;

    default:
        console.log("entrer un operateur validé : ");
        break;
}