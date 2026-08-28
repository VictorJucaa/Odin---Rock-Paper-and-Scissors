let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const gameScore = document.querySelector(".gameScore");
const roundMessage = document.createElement('p');
const currentScore = document.createElement('p');
const finalMessage = document.createElement('p');
gameScore.append(roundMessage, currentScore, finalMessage);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let humanChoice = button.dataset.choice;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
})

function getComputerChoice() {
    const computerChoices = {0:'rock', 1:'paper', 2:'scissors'};
    const result = Math.floor(Math.random()*3);
    return computerChoices[result];
}

function playRound(humanChoice, computerChoice) {
    if(gameOver === true) {
        return;
    }

    const human = String(humanChoice).trim().toLowerCase();
    const computer = String(computerChoice).trim().toLowerCase();

    if(human === computer) {
        roundMessage.textContent = `It's a tie! Both chose ${human[0].toUpperCase() + human.slice(1)}!`
    }
    
    const winsAgainst = {rock:'scissors', paper:'rock', scissors:'paper'};

    if(winsAgainst[human] === computer) {
        humanScore++;
        roundMessage.textContent = `You won! ${human[0].toUpperCase() + human.slice(1)} beats
        ${computer[0].toUpperCase() + computer.slice(1)}`;
    } else if(winsAgainst[computer] === human) {
        computerScore++;
        roundMessage.textContent = `You lose! ${human[0].toUpperCase() + computer.slice(1)} beats
        ${human[0].toUpperCase() + human.slice(1)}`;
    }

    currentScore.textContent = 'You: ' + humanScore + ' Computer: ' + computerScore;

    if(humanScore === 5) {
        gameOver = true;
        finalMessage.textContent = 'You won the match!';
    } else if(computerScore === 5) {
        gameOver = true;
        finalMessage.textContent = 'You lost the Match!';
    }
}