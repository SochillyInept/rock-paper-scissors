console.log("Hello World!")

//Get computer choice

function getComputerChoice(){
    let choiceCalc = function () { return Math.floor(Math.random() * 10)} //Getting a random decimal from 0 - 1 but not 1 and multiply it by 10. Round down to turn it into an integer with Math.Floor.  
    let choice = choiceCalc();
    (choice < 1) ? choice = getComputerChoice() : // If choiceCalc is 0 run it again that way we calculate from 1-9 not 0-9. 1-3 is Rock, 4-6 is Paper, 7-9 is Scissors. 3/9
    (choice < 4) ? choice = "rock" :
    (choice > 6) ? choice = "paper" : choice = "scissors";
    return choice;
}


// Function to capitalize text

function capitalize(text){
    let firstLetter = text.charAt(0);
    let otherLetters = text.slice(1);
    return firstLetter.toUpperCase() + otherLetters.toLowerCase();
}

//Creating global action variable to refer to in endgame prompt to obtain getHumanChoice outcome without calling the variable
let action;

// Get human choice

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    action = choice;

    if (action == null){
        return; 
    } else if(action.toLowerCase() == "rock" || action.toLowerCase() == "paper" || action.toLowerCase() == "scissors"){
        alert(`You've chosen ${capitalize(action)}.`)
        return action;
    }

    else {alert("Hmmm... That was not a valid choice.")}
}

//Score variables
let humanScore = 0;
let computerScore = 0;


//  Compare getComputerChoice and getHumanChoice and identify winner based on if the player wins or not

function playerWinsif(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (computerChoice == "rock" && humanChoice == "paper"){
        console.log(`Player wins! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`)
        humanScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        console.log(`Player wins! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`)
        humanScore += 1;
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        console.log(`Player wins! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`)
        humanScore += 1;
    } else if (computerChoice === humanChoice){
        console.log(`Draw! Player chose ${capitalize(humanChoice)} and computer chose ${capitalize(computerChoice)}. `)
    } else if (humanChoice == null){
        return;
    }
    else {
        console.log(`Nooo Player lost! ${capitalize(humanChoice)} loses against ${capitalize(computerChoice)}.`)
        computerScore += 1;
    }
}


//Function to play game

function playGame(){
    for (let i = 0; i < 4; i++){
        let terminateGame = endGame();
        if (terminateGame == true){
            console.log("Game Terminated")
            break;
        } else if (humanScore == 3) {
            console.log("Congrats Player Wins the best of 5!");
            break;
        } else if (computerScore == 3){
            console.log("CATASTROPHE!!! THE PLAYER LOST!");
            break;
        } else {
            console.log(`Player score: ${humanScore}\nComputer Score: ${computerScore}`)
            playerWinsif()
        }

    }
}

// If you hit  cancel the option it does not go to the else statement it will make choice null making action null, making humanChoice null. The issue is that I try to capitalize the outputs and .toUpperCase and similar things on a null object is a type error. So I going to create an endGame function for this
function endGame(){
    let endGame = action;

    if (endGame === null){
        return true;
    }
}