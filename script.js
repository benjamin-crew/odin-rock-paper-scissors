function updateScore(winner = null) {
    console.log(winner);
    if (winner === null) {
        console.log("creating scores")
        var scores = [0, 0];
        console.log("scores created")
        console.log(scores)
    } else if (winner === "user") {
        scores[0]++;
    } else {
        scores[1]++;
    }
    console.log(scores);
    console.log("returning");
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
        return score;
    } else if (user === "rock") {
        if (computer === "paper") {
            console.log("Computer wins! Paper beats rock!");
            ++score[1];
        } else if (computer === "scissors") {
            console.log("You win! Rock beats scissors!")
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

    // Check to see if game should end
    if (rounds < 1) {
        console.log("Game finished")
        document.querySelector('.play').removeAttribute('disabled');
        return;
    }

    // Disable the play button
    document.querySelector('.play').setAttribute('disabled', 'true');


    // Enable the buttons
    document.getElementById("rock").removeAttribute('disabled');
    document.getElementById("paper").removeAttribute('disabled');
    document.getElementById("scissors").removeAttribute('disabled');

    // Show Status
    const statusContainer = document.querySelector('.scores-section-status');
    if (rounds >= 0) {
        statusContainer.innerText = `Rounds: ${rounds}`;
    } else {
        statusContainer.innerText = 'Game has ended';
    }

    // Show Scores
    let displayScore = updateScore()
    console.log("returned");
    const scoresContainer = document.querySelector('.scores-section-scores');
    scoresContainer.innerText = `User ${displayScore[0]} - ${displayScore[1]} Computer`;

    //Placeholder variable to hold winner of each round
    if (rounds === 5) {
        let winner = undefined;
    } else {
        winner = undefined;
    }

    // Button functions
    const rockButton = document.getElementById("rock");
    rockButton.addEventListener('click', () => {
        console.log("clicked");
        winner = playRound("rock")
        rounds--;

        updateScore(winner)
    });

    const paperButton = document.getElementById("paper");
    paperButton.addEventListener('click', () => {
        winner = playRound("paper")
        rounds--;

        updateScore(winner)
    });

    const scissorsButton = document.getElementById("scissors");
    scissorsButton.addEventListener('click', () => {
        winner = playRound("scissors")
        rounds--;

        updateScore(winner)
    });
}


// Start game when playButton is clicked
const playButton = document.querySelector('.play');
playButton.addEventListener('click', function () {

    //Get number of rounds to play
    let numberOfRounds = 5;

    // Start game
    game(numberOfRounds);
});