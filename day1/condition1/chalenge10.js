// A → Électronique
// B → Vêtements
// C → Alimentation
// D → Maison
// E → Sport

let prompt = require("prompt-sync")();

console.log("A → Électronique");
console.log("B → Vêtements");
console.log("C → Alimentation");
console.log("D → Maison");
console.log("E → Sport");

let choix= prompt("entrer votre coix: ");
switch (choix) {
    case "A":
        console.log("Électronique")
        break;
    case "B":
        console.log("Vêtements")
        break;
    case "C":
        console.log("Alimentation")
        break;
    case "D":
        cosole.log("Maison")
        break;
    case "E":
        console.log("Sport")
        break;
    default:
        break;
}