
function obtenirHeureActuelle(){
    let date = new Date ();
    let heure = date.getHours ();
    let minute = date.getMinutes ();
    let seconde= date.getSeconds();

    console.log( heure + ":" + minute + ":" + seconde)
}

obtenirHeureActuelle()