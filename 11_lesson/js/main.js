let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    let playerChoise = prompt("Please enter rock, paper, or scissors.");
    if (playerChoise) {
        let playerOne = playerChoise.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || "scissors") {
            let choice = ["rock", "paper", "scissors"];
            let computer = choice[Math.floor(Math.random() * choice.length)];
            let result = playerOne === computer ? "Tie game!"
                : playerOne === "rock" && computer === "paper" ?
                    `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne === "paper" && computer === "scissors" ?
                        `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                        : playerOne === "scissors" && computer === "rock" ?
                            `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
                            alert(result);
                            let playAgain = confirm("Play Again?");
                            playAgain ? location.reload() : alert("Ok, thanks for playing!");
        } else {
            alert("You didn't enter rock, paper, or scissors.");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    alert("Ok, maybe next time.");
}