let prompt = require("prompt-sync")();

let string = prompt("entrer un string : ")

function compterVoyelles(chaine){
    let total = 0 ;

    for (let i = 0; i < chaine.length; i++) {
        
        if (chaine[i]=='a' || chaine[i] =='e' || chaine[i] =='u' || chaine[i] =='o' || chaine[i]=='i' || chaine[i] =='y' ) { 
           total ++ 
        }
    }
    return total
}

console.log(compterVoyelles(string))