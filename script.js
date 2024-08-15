console.log("おはよう～～～～");

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    console.log(humanSelection);
    console.log(computerSelection);
    let outcome = determineWinner(humanSelection, computerSelection);
    console.log(outcome);
    if (outcome === "human") {
        console.log(`You win, ${humanSelection} beats ${computerSelection}!`);
        humanScore++;
    } else if (outcome === "computer") {
        console.log(`You lose, ${computerSelection} beats ${humanSelection}!`);
        computerScore++;
    } else {
        console.log("It's a draw");
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose Rock, Paper or Scissors").toLowerCase();
    console.log(humanChoice);
    if (!(humanChoice === "rock" | humanChoice === "paper" | humanChoice === "scissors")) {
        alert("Invalid choice!");
    }
    return humanChoice;
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*100) % 3;
    console.log(randomChoice);
    let computerChoice = (randomChoice === 0) ? "rock" : (randomChoice === 1) ? "paper" : "scissors";
    return computerChoice;
}

function determineWinner(humanSelection, computerSelection) {
    if (humanSelection === "rock") {
        if (computerSelection === "rock") {
            return "draw";
        } else if (computerSelection === "paper") {
            return "computer";
        } else {
            return "human";
        }
    } else if (humanSelection === "paper") {
        if (computerSelection === "rock") {
            return "human";
        } else if (computerSelection === "paper") {
            return "draw";
        } else {
            return "computer";
        }
    } else {
        if (computerSelection === "rock") {
            return "computer";
        } else if (computerSelection === "paper") {
            return "human";
        } else {
            return "draw";
        }
    }
        
}

function playGame(roundNumber) {
    
    for (let i = 0; i < roundNumber; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current Score:
            Human: ${humanScore}
            Computer: ${computerScore}`)
    }
}

playGame(5);
