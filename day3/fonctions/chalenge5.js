let prompt = require("prompt-sync")();

function additionnerTout(...args){
    return args.reduce((total , nembre)=>{
        return total + nembre
    }, 0);

}
console.log(additionnerTout(1 , 2, 3, 4))
