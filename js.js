let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let humanChoice = button.dataset.choice;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
    })
})

function getComputerChoice() {
    const computerChoices = {0: "rock", 1: "paper", 2: "scissors"};
    const result = Math.floor(Math.random() * 3);
    return computerChoices[result];
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
}
}