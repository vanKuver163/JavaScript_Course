const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
};

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const comouterChoice = getComputerChoice();
        const result = determineWinner(playerChoice, comouterChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
};

const determineWinner = (player, computer) => {
    const winner = player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper" ?
            `Player: ${player}\nComputer: ${computer}\nComputer wins!`
            : player === "paper" && computer === "scissors" ?
                `Player: ${player}\nComputer: ${computer}\nComputer wins!`
                : player === "scissors" && computer === "rock" ?
                    `Player: ${player}\nComputer: ${computer}\nComputer wins!`
                    : `Player: ${player}\nComputer: ${computer}\nplayerOne wins!`;
    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play Again?");  
};

const thanksForPlaying = () => {
    alert("Ok, thanks for playing!");   
};

initGame();

