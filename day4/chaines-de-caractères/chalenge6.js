// let prompt = require ("prompt-sync")()
 let chaine = prompt

function repeterChaine(chaine, fois){
    let string=""
    let i = 0
    while( i < fois){
        let j = 0
        while (j < chaine.length) {
            string += chaine[j]
            j++
            
        }
        i++

        
    }
    return string
}

console.log(repeterChaine("js", 3))