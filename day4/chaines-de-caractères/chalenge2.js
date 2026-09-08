let prompt =require("prompt-sync")();

let string = prompt("entrer un string");
let lettre = prompt("entrer un lettre")


function compterLettre(chaine, lettre){
    let total = 0
    for (let i = 0; i < chaine.length; i++) {
        
        if (lettre === chaine[i]) {
            total ++
        }   
    }
    return total

}
let resultat = compterLettre(string , lettre)
console.log(resultat)

