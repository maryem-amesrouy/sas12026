let prompt = require("prompt-sync")();
let n = prompt("Enter votre nembre : ");
console.log("n = ", n);
for (let i = 2; i <= n; i++){
    if (i % 2 == 0) {
        console.log(i);
        
    }
   
}