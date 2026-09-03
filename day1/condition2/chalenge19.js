let prompt = require("prompt-sync")();

let passagers = Number(prompt("entrer le nembre de passagers : "));
let trajet = Number(prompt("enter type de votre trajet : "));

switch (trajet) {
    case 1:
        console.log("Petit trajet : ", passagers * 20);
        break;

    case 2:
        console.log("Trajet moyen : ", passagers * 50);
        break;

    case 3:
        console.log("Long trajet : ", passagers * 100);
        break;

    case 4:
        console.log("International : ", passagers * 500);
        break;

    default:
        console.log("trajet invalable");
        break;
}
