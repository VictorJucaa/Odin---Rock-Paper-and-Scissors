function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
function getComputerChoice() {
    const computerChoices = {0: "rock", 1: "paper", 2: "scissors"};
    const result = Math.floor(Math.random() * 3);
    return computerChoices[result];
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper ou Scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const human = String(humanChoice).trim().toLowerCase();
    const computer = String(computerChoice).trim().toLowerCase();
                

    if (human === computer) {
        console.log(`It's a tie! Both chose ${human[0].toUpperCase() + human.slice(1)}.`);
        return;
    }

    // Determine Winner
    const winsAgainst = {rock: "scissors", paper: "rock", scissors: "paper"};

    if (winsAgainst[human] === computer) {
        humanScore++;
        console.log(`You win! ${human[0].toUpperCase() + human.slice(1)} beats ${computer[0].toUpperCase() + computer.slice(1)}`);
    } else if (winsAgainst[computer] === human) {
        computerScore++;
        console.log(`You lose! ${computer[0].toUpperCase() + computer.slice(1)} beats ${human[0].toUpperCase() + human.slice(1)}`);
    } else {
        
    }
}

    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection);        
    }

    if (humanScore > computerScore) {
        console.log(`You won! The final result is: You: ${humanScore} vs Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose! The final result is: You: ${humanScore} vs Computer ${computerScore}`);
    } else {
        console.log(`It's a tie! The final result is: You: ${humanScore} vs Computer ${computerScore}`);

    }
}

playGame();