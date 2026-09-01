let prompt= require("prompt-sync")();
let note= (prompt("enter votre note : "));

if(note >= 10){
    console.log("Résultat : Admis");
}else if(note < 10){
    console.log("Résultat : non admis");
}