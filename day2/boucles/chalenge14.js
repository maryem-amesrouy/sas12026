let prompt =require("prompt-sync")();

let n = Number(prompt("entrer un nembre : "));
let somme =0
for (let i = 0; i < n; i++) {
    
    if(i % 2 == 0){
        somme =somme + i
        console.log("lasomme des nembre paire" ,somme);
    }else (i % 2 != 0)
    {
        somme= somme + i
        console.log("Somme des impairs",somme)
    }
    
    
}