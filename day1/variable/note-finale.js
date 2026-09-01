let prompt = require("prompt-sync")();
let Controle =Number(prompt("enter Contrôle continu : "));
let Projet =Number(prompt("enter Projet continu : "));
let Examen = Number(prompt("enter Examen final : "));
let noteFinal = (Controle * 2 + Projet * 3 + Examen * 5) / 10;

console.log("note final = ", noteFinal);