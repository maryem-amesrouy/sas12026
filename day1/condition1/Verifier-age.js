let prompt = require("prompt-sync")();
let age = Number(prompt("enter votre age"));
if(age >= 18){
    console.log("Accès autorisé");
}else{
    console.log("refusé");
}