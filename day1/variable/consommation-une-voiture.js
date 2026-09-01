let prompt = require("prompt-sync")();
let kilomètres = Number(prompt("entrer la distance parcourue en kilomètre:"));
let litres = Number(prompt("entrer la quantité de carburant consommée en litres:"));
let Consommation = (litres / kilomètres) * 100;

console.log("kilomètre:",ilomètres);
console.log("litres:", litres);
console.log("consommation =" , Consommation);

