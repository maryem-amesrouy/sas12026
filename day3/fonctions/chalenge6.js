
function verifierMotDePasse (motDePasse){

    if(motDePasse.length>= 8 && motDePasse.includes("@") ){
        return true
    }else{
        return false
    }

}
console.log(verifierMotDePasse())