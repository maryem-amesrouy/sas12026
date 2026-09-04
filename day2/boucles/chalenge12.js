let prompt = require ("prompt-sync")();

let n=Number(prompt("entrer un nembre : "));


let nombreDiviseure= 0
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    nombreDiviseure ++
    }
     
}
console.log(nombreDiviseure)