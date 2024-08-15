console.log("おはよう～～～～");

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*100) % 3;
    console.log(randomChoice);
    let computerChoice = (randomChoice === 0) ? "rock" : (randomChoice === 1) ? "paper" : "scissors";
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please choose Rock, Paper or Scissors").toLowerCase();
    console.log(humanChoice);
    if (!(humanChoice === "rock" | humanChoice === "paper" | humanChoice === "scissors")) {
        alert("Invalid choice!");
    }
}

console.log(getComputerChoice());
getHumanChoice();