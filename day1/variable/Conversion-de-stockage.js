let prompt = require("prompt-sync")()
let GB = (prompt("entrer GB:"));
let MB = GB * 1024;

console.log("Stockage :" + GB);
console.log("Résultat :" + MB);
