let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    while (playGame) {        
        const playerChoise = prompt("Please enter rock, paper, or scissors.");
        if (playerChoise || playerChoise === "") {
            const playerOne = playerChoise.trim().toLowerCase();
            if (playerOne === "rock" || playerOne === "paper" || playerOne==="scissors") {
                const choice = ["rock", "paper", "scissors"];
                const computer = choice[Math.floor(Math.random() * choice.length)];
                const result = playerOne === computer ? "Tie game!"
                    : playerOne === "rock" && computer === "paper" ?
                        `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                        : playerOne === "paper" && computer === "scissors" ?
                            `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                            : playerOne === "scissors" && computer === "rock" ?
                                `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
                alert(result);
                playGame = confirm("Play Again?");               
                if (!playGame) alert("Ok, thanks for playing!");                
                continue;
            } else {
                alert("You didn't enter rock, paper, or scissors.");
                continue;
            }
        } else {
            alert("I guess you changed your mind. Maybe next time.");
            break;
        }
    }
} else {
    alert("Ok, maybe next time.");
}