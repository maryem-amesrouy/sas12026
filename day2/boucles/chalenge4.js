let prompt = require("prompt-sync")();

let n = prompt("entrer votre nembre : ");
let mult = 1;

for(let i = 1; i <= n; i++){
    mult = n * i ;
    console.log(n, "x", i, "=", mult);    
}
