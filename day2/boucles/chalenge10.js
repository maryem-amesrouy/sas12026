let compte = require("prompt-sync")();

let n = 1
let somme = 0;
let compt = -1;

console.log("nLe nombre de valeurs = ", n);

while (n != 0) {
    n = compte("entrer un nombre : ");
    somme += n
    compt++ 
    
    }

console.log("Nombre de valeur : ", compt);
console.log("Somme : ", somme);