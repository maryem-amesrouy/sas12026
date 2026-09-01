let prompt = require("prompt-sync")();
let nmb = (prompt("entrer votre nombre : "));

if(nmb < 0){
    console.log("Le nombre est négatif. ");
}else if(nmb > 0){
    console.log("e nombre est positif. ");
}else if (nmb == 0){
    console.log("Le nombre est égal à zéro.");
}
