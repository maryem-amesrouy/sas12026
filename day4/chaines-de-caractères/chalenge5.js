// let prompt = require("prompt-sync");

function estPalindrome(chaine){
   
    let len = chaine.length -1
    for (let i = 0; i < len ; i++) {
       if (chaine[i] != chaine[len] ) {
            return false
       } 
       len--
       

    }
    return true

}

console.log(estPalindrome("kayak"))