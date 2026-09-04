let prompt = require("prompt-sync")();

let n = Number(prompt("entrer un nombre : "));

for (let i = 1; i <= n; i++) {
    if(n / i == 1){
        console.log(n, "nest un nombre premier.")

    }else(n / i ){
        console.log(n , "n'est pas un nombre premier.")
        break;
    }
    
}