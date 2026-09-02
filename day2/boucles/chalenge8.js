let prompt =require("prompt-sync")();

let mission =prompt("combien de missions est realié : ");
let scor = 100;
let mult ;
let i;

for (let i = 1; i <= mission; i++) {
    mult = i * scor ;
  console.log("Mission", i , "→ Score : ", mult);
}

