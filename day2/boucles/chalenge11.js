let prompt = require("prompt-sync")();

let nembre= Number(prompt("entrer un nembre : "));
let resultat = 1

for (let i = 1; i<= nembre; i++) {
     resultat = resultat * i
   console.log(resultat); 
}
 