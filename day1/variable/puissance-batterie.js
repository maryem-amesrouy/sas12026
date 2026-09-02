let prompt = require("prompt-sync")();
let U = (prompt("enter votre Tension : "));
let I = (prompt("enter votre intensite : "));
let t = (prompt("enter votre temps : "));

Energie = U * I * t

console.log("Tension :", U);
console.log("intensite :", I);
console.log("Temps :", t);
console.log("energie = ", Energie);