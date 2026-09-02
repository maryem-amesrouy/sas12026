let prompt = require("prompt-sync")();

let n = prompt("entrer votre nembre : ");
let somme = 0

console.log("n = ", n);

for (let i = 0; i <= n; i++) {
    somme = somme + i;
    
}
console.log("somme = ", somme);