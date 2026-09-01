let prompt = require("prompt-sync")();
let Duree = prompt("Entrez la duree du film : ");
if(Duree < 60 ){
    console.log("Court métrage");
}else if(60 <= Duree && Duree < 120 ){
    console.log("Film standard");
}else{
    console.log("Film long");
}
