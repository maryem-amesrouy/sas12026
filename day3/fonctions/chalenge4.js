let prompt = require("prompt-sync")();

let titre = prompt("entrer votre titre : ");
let nom = prompt("entrer votre nom : ");

 function saluerClien (titre , nom){
      if(titre == ""){
       console.log("Bonjour client", nom)
      }else {
        console.log("bonjour", titre ,  nom)
      }
 }

saluerClien (titre , nom)
