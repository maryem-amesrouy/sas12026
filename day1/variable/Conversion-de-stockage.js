let prompt = require("prompt-sync")()
let GB = Number(prompt("entrer GB:"));
let MB = GB * 1024;

console.log("Stockage :" + GB);
console.log("Résultat :" + MB);
