let prompt = require("prompt-sync")();
let kilomètres = (prompt("entrer la distance parcourue en kilomètre:"));
let litres = (prompt("entrer la quantité de carburant consommée en litres:"));
let Consommation = (litres / kilomètres) * 100;

console.log("kilomètre:",kilomètres);
console.log("litres:", litres);
console.log("consommation =" , Consommation);

