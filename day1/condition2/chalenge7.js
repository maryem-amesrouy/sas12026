let prompt= require("prompt-sync")() ;

let compte = Number(prompt("entrer votre compte : "));

switch (compte){
    case 1 :
        console.log("Compte courant");
        console.log("les frais mensuels : 20dh");
        break;
    case 2:
        console.log("Compte epargne");
        console.log("les frais mensuels : 10dh");
        break;
    case 3: 
        console.log("Compte etudiant");
        console.log("les frais mensuels : 0dh"); 
        break;
    case 4: 
        console.log("Compte Professionnel");
        console.log("les frais mensuels : 50dh"); 
        break;          

    default:
        console.log("compte invalable")
        break;
}
