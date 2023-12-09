let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let playerChoice = "";

const rockBtn = document.getElementById('rockbtn');
const paperBtn = document.getElementById('paperbtn');
const scissorBtn = document.getElementById('scissorbtn');
const resultsText = document.getElementById('results');
const playerScoreText = document.getElementById('playerscore');
const computerScoreText = document.getElementById('computerscore');
const matchResultsText = document.getElementById('matchResult')




rockBtn.addEventListener("click", clickRock);

function clickRock() {
    playerChoice = "rock";
    game();
}

paperBtn.addEventListener("click", clickPaper);

function clickPaper() {
    playerChoice = "paper";
    game();
}

scissorBtn.addEventListener("click", clickScissor);

function clickScissor() {
    playerChoice = "scissors";
    game();
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 300);

    if (number > 100 && number < 200) {
        return ("Rock!");
    }

    if (number > 200 && number < 300) {
        return ("Paper!");
    }

    if (number > 0 && number < 100) {
        return ("Scissors!");
    }
}



function playRound(playerSelection, computerSelection) {



    if (playerSelection === "rock" && computerSelection === "Paper!" && roundCount != 5) {
        computerScore += 1;
        roundCount += 1;
        resultsText.textContent = ("You Lose!");
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        

    }

    else if (playerSelection === "rock" && computerSelection === "Scissors!" && roundCount != 5) {
        playerScore += 1;
        roundCount += 1;
        resultsText.textContent = ("You Win!");
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        
    }

    else if (playerSelection === "rock" && computerSelection === "Rock!" && roundCount != 5) {
        roundCount += 1;
        resultsText.textContent = ("Draw!");
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        
    }

    else if (playerSelection === "scissors" && computerSelection === "Paper!" && roundCount != 5) {
        roundCount += 1;
        playerScore += 1;
        resultsText.textContent = ("You Win!");
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        
    }

    else if (playerSelection === "scissors" && computerSelection === "Scissors!" && roundCount != 5) {
        roundCount += 1;
        resultsText.textContent = ("Draw!");
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        
    }

    else if (playerSelection === "scissors" && computerSelection === "Rock!" && roundCount != 5) {
        roundCount += 1;
        computerScore += 1;
        resultsText.textContent = ("You Lose!");
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        
    }

    else if (playerSelection === "paper" && computerSelection === "Paper!" && roundCount != 5) {
        roundCount += 1;
        resultsText.textContent = ("Draw!");
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        
    }

    else if (playerSelection === "paper" && computerSelection === "Scissors!" && roundCount != 5) {
        roundCount += 1;
        computerScore += 1;
        resultsText.textContent = ("You Lose!");
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        
    }

    else if (playerSelection === "paper" && computerSelection === "Rock!" && roundCount != 5) {
        roundCount += 1;
        playerScore += 1;
        resultsText.textContent = ("You Win!");
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        
    }

    else {
        return console.log("fuck");
    }



 

   



}


function game() {


  let playerSelection = playerChoice;
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log("Your score is " + playerScore)
    console.log("Your opponents score is " + computerScore)
 
 
if (playerScore > computerScore && roundCount === 5) {
    resultsText.textContent = ("You used Hollow Purple. You Win!");
}

if (playerScore < computerScore && roundCount === 5) {
    resultsText.textContent = ("You lose the game!");
}

if (playerScore === computerScore && roundCount === 5) {
    resultsText.textContent = ("The game is a draw!");
}


}


