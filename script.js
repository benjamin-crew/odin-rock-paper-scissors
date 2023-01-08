function getComputerChoice() {
    // Function to get computers choice and return it
    const choices = ["rock", "paper", "scissors"];

    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const choice = choices[randomIndex];
    return choice;
}

function getPlayerChoice() {
    // Function to get users choice and return it
    let playerChoice = undefined;

    // while (
    //     playerChoice !== "rock" &&
    //     playerChoice !== "paper" &&
    //     playerChoice !== "scissors"
    // ) {
    //     playerChoice = prompt("Choose rock, paper, scissors: ").toLowerCase();
    // }

    return playerChoice;
}

function playRound(user, computer, score) {
    // Function to output choices and evaluate them

    console.log("You choose: " + user);
    console.log("Computer chooses: " + computer);

    if (user === computer) {
        console.log("It's a tie!");
        return score;
    } else if (user === "rock") {
        if (computer === "paper") {
            console.log("Computer wins! Paper beats rock!");
            ++score[1];
        } else if (computer === "scissors") {
            console.log("You win! Rock beats scissors!");
            ++score[0];
        }
    } else if (user === "paper") {
        if (computer === "rock") {
            console.log("You win! Paper beats rock!");
            ++score[0];
        } else if (computer === "scissors") {
            console.log("Computer wins! Scissors beats paper!");
            ++score[1];
        }
    } else if (user === "scissors") {
        if (computer === "rock") {
            console.log("Computer wins! Rock beats scissors!");
            ++score[1];
        } else if (computer === "paper") {
            console.log("You win! Scissors beats paper!");
            ++score[0];
        }
    }
    return score;
}

function game(rounds) {
    // Main game function

    // Keep track of scores
    let scores = [0, 0];

    // Start game
    for (let i = 0; i < rounds; i++) {
        // Get choices
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        // Play round
        scores = playRound(playerChoice, computerChoice, scores);
    }

    // Output the final scores
    console.log("The final scores are: " + scores[0] + " " + scores[1]);
    if (scores[0] > scores[1]) {
        console.log("You win!");
    } else if (scores[0] < scores[1]) {
        console.log("The computer wins!");
    } else {
        console.log("It's a draw!");
    }
}

//Get number of rounds to play
let numberOfRounds = 5;

// while (typeof numberOfRounds != "number") {
//     numberOfRounds = parseInt(
//         prompt("How many rounds would you like to play?: ")
//     );
// }

// Button functions

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
    console.log("Rock");
    
});

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
    console.log("Paper");
});

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
    console.log("Scissors");
});

//Start game
game(numberOfRounds);