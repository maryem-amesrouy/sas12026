let prompt = require("prompt-sync")();

let depart = prompt("entrer votre nembre  : ");
console.log("Depart = ", depart);
let i = depart;
while (i >= 0) {
    console.log(i);
    i--
}
