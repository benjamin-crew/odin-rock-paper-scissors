function updateScore(winner) {
    if (winner === "user") {
        scores[0]++;
    } else if (winner === "computer") {
        scores[1]++;
    } else {
        console.log("tie")
    }
    return scores;
}

function getComputerChoice() {
    // Function to get computers choice and return it
    const choices = ["rock", "paper", "scissors"];

    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const choice = choices[randomIndex];
    return choice;
}

function playRound(user) {

    // Get computer choice
    const computer = getComputerChoice()

    // Function to output choices and evaluate them
    console.log("You choose: " + user);
    console.log("Computer chooses: " + computer);

    if (user === computer) {
        console.log("It's a tie!");
        winner = null;
        return winner;
    } else if (user === "rock") {
        if (computer === "paper") {
            console.log("Computer wins! Paper beats rock!");
            winner = "computer"
        } else if (computer === "scissors") {
            console.log("You win! Rock beats scissors!")
            winner = "user"
        }
    } else if (user === "paper") {
        if (computer === "rock") {
            console.log("You win! Paper beats rock!");
            winner = "user"
        } else if (computer === "scissors") {
            console.log("Computer wins! Scissors beats paper!");
            winner = "computer";
        }
    } else if (user === "scissors") {
        if (computer === "rock") {
            console.log("Computer wins! Rock beats scissors!");
            winner = "computer"
        } else if (computer === "paper") {
            console.log("You win! Scissors beats paper!");
            winner = "user"
        }
    }
    return winner;
}

function startRound(choice) {


    if(numberOfRounds === 1){
        statusContainer.innerText = 'Game has ended';
    } else {
        winner = playRound(choice)
        numberOfRounds--;
        roundNumber++;

        updateScore(winner)


        statusContainer.innerText = `Rounds: ${roundNumber}/5`;
        scoresContainer.innerText = `User ${scores[0]} - ${scores[1]} Computer`;   
    }
}

// Set number of rounds to play globally
let numberOfRounds = 5;
let roundNumber = 1;

// Set scores variable globally
let scores = [0, 0];

// Store winner of round
let winner = null;

// Show Status
const statusContainer = document.querySelector('.scores-section-status');
statusContainer.innerText = `Rounds: ${roundNumber}/5`;

// Show Scores
const scoresContainer = document.querySelector('.scores-section-scores');
scoresContainer.innerText = `User ${scores[0]} - ${scores[1]} Computer`;   

// Buttons and button actions
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener('click', () => {
    startRound("rock")
});
paperButton.addEventListener('click', () => {
    startRound("paper")
});
scissorsButton.addEventListener('click', () => {
    startRound("scissors")
});