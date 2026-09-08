let prompt = require ("prompt-sync")();
let string = prompt("entrer un string : ")
function compterCaracteres(chaine){
    let i = 0
    while (chaine[i] !== undefined) {
        i++
    }
    return i
}
let resultat = compterCaracteres(string)
console.log (resultat)