let prompt = require("prompt-sync")();

let n = Number(prompt("entrer votre nombre : "));

let resultat = 0
for (let i = 1; i < n ; i++) {
   if( n % i == 0 ){
        
        resultat += i  
    }   
}  

if (resultat == n) {
    console.log(n, "est un nombre parfait.");
}else{
    console.log(n, "est pas un nombre parfait.");
}

    
    
