

function remplacerCaractere(chaine, ancien, nouveau){
    for (let i = 0; i < chaine.length; i++) {
        let string =""
        if (ancien === chaine[i]) {
            string = string + nouveau
            
        }else{
           string= string + chaine[i]
        } 

        return string
        
    }

}

console.log(remplacerCaractere("banane", "a" , "o"))