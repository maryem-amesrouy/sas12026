let prompt = require("prompt-sync")();
let partie1 =Number(prompt("entre score partie 1 "));
let partie2 =Number(prompt("entre score partie 1 "));
let partie3 =Number(prompt("entre score partie 1 "));
let partie4 =Number(prompt("entre score partie 1 "));

let score = (partie1 + partie2 + partie3 + partie4);
let moyenne = (score / 4);


console.log("score total: ", score);
console.log("Moyenne: ", moyenne);