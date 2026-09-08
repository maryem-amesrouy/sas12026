
function extraireChaine(chaine, debut, fin){
      let str = ""  
      let i = 0
    while (i < fin) {
        str = str + chaine[i]
        i++
    }
    console.log(str)
}

extraireChaine("javascript" , 0 , 4)