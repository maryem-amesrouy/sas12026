let prompt = require("prompt-sync")();
let montantComande = Number(prompt("entrer le montant de la commande : "));
let livraison ;

if(montant >= 500){
    console.log("Livraison gratuite");
    livraison = 0
}else{
    console.log("livraison = 40");
    livraison = 40;
}

console.log("Total à payer : ", livraison + montant);