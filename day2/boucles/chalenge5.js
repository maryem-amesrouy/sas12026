let prompt = require("prompt-sync")();

let n = prompt("enter votre nombre N : ");
let x = prompt("enter votre nombre X: ");
let mult = 1;

console.log("n = ", n);
console.log("x = ", x);
for (let i = 1; i <= n; i++) {
    
    mult = x * i;
    console.log(mult);
    if (mult == n) {
        break;  
    }  
}
