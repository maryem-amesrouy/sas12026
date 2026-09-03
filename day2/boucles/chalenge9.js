let prompt= require("prompt-sync")();

let base= Number(prompt("entrer votre Base : "));
let exposan = Number(prompt("entrer votre exposan : "));
 let resultat ;
 let i = 1;

 console.log("base =", base)
 console.log("exposan = ", exposan);
 
 while (i <= exposan) {
    resultat = base ** exposan;
    i++
    
 }
 console.log("Résultat : ", resultat);