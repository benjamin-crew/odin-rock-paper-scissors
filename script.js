function updateScore(winner) {
    if (winner === "user") {
        scores[0]++;
    } else if (winner === "computer") {
        scores[1]++;
    }
    return scores;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    const choice = choices[randomIndex];
    return choice;
}

function playRound(user) {
    const computer = getComputerChoice();

    // Output choices
    const outputChoices = document.querySelector('.round-choices');
    outputChoices.innerText = `You choose ${user}. Computer chooses ${computer}.`;

    // Winning condition logic
    if (user === computer) {
        winner = null;
    } else if (user === "rock") {
        if (computer === "paper") {
            winner = "computer"
        } else if (computer === "scissors") {
            winner = "user"
        }
    } else if (user === "paper") {
        if (computer === "rock") {
            winner = "user"
        } else if (computer === "scissors") {
            winner = "computer";
        }
    } else if (user === "scissors") {
        if (computer === "rock") {
            winner = "computer"
        } else if (computer === "paper") {
            winner = "user"
        }
    }

    // Output winner
    const outputWinner = document.querySelector('.round-status');
    if (winner === null) {
        outputWinner.innerText = 'This round is a tie.';
    } else {
        outputWinner.innerText = `${winner} wins this round!`;
    }

    return winner;
}

function startRound(choice) {
    if (numberOfRounds === 1) {
        const outputWinner = document.querySelector('.round-status');
        if (scores[0] > scores[1]) {
            outputWinner.innerText = `User wins the game! User ${scores[0]} - ${scores[1]} Computer`;
        } else if (scores[0] < scores[1]) {
            outputWinner.innerText = `Computer wins the game! User ${scores[0]} - ${scores[1]} Computer`;
        } else {
            outputWinner.innerText = 'The game ends in a tie!';
        }

        const removeChoices = document.querySelector('.round-choices');
        removeChoices.remove();

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
// Set round number to be incremented as game progresses
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