let prompt = require("prompt-sync")();
let Controle =(prompt("enter Contrôle continu : "));
let Projet =(prompt("enter Projet continu : "));
let Examen = (prompt("enter Examen final : "));
let noteFinal = (+Controle * 2 + +Projet * 3 + +Examen * 5) / 10;

console.log("note final = ", noteFinal);