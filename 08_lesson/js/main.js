
switch (Math.floor(Math.random()*3 +1)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;   
    case 3:
        console.log(3);
        break;   
    default: 
}

let value = ["rock", "paper", "scissors"];

let playerOne = value[Math.floor(Math.random()*value.length)];
let computer = "paper";

switch(playerOne) {
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper"){
            console.log("computer wins!");
        } else {
            console.log("playerOne wins!");
        }
    break;
     case "paper":
        if (computer === "scissors"){
            console.log("computer wins!");
        } else {
            console.log("playerOne wins!");
        }
    break;
    default:
         if (computer === "rock"){
            console.log("computer wins!");
        } else {
            console.log("playerOne wins!");
        }
}
