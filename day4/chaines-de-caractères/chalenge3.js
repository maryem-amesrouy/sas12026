let prompt= require("prompt-sync")();

let string = prompt("entrer un string : ")

function inverserChaine(chaine){
   let string = ""
    
   for (let i = 1; i <= chaine.length; i++) {
      string += chaine[chaine.length -i]
    
   }
 return string
}
console.log(inverserChaine(string))
