


function getComputerChoice() {
    let number = Math.floor(Math.random() * 300);

    if (number > 100 && number < 200) {
        return console.log("Rock!");
    }

    if (number > 200 && number < 300) {
        return console.log("Paper!");
    }

    if (number > 0 && number < 100) {
        return console.log("Scissors!");
    }
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "Paper!") {
        return console.log("You Lose!");
    }

    else if (playerSelection === "rock" && computerSelection === "Scissors!") {
        return console.log("You Win!");
    }

    else if (playerSelection === "rock" && computerSelection === "Rock!") {
        return console.log("Draw!");
    }

    else if (playerSelection === "scissors" && computerSelection === "Paper!") {
        return console.log("You Win!");
    }

    else if (playerSelection === "scissors" && computerSelection === "Scissors!") {
        return console.log("Draw!");
    }

    else if (playerSelection === "scissors" && computerSelection === "Rock!") {
        return console.log("You Lose!");
    }

    else if (playerSelection === "paper" && computerSelection === "Paper!") {
        return console.log("Draw!");
    }

    else if (playerSelection === "paper" && computerSelection === "Scissors!") {
    return console.log("You Lose!");
    }

    else if (playerSelection === "paper" && computerSelection === "Rock!") {
        return console.log("You Win!");
    }



 

   



}


playRound();

