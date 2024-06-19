console.log("Hello World!")

//Get computer choice

function getComputerChoice(){
    let choiceCalc = function () { return Math.floor(Math.random() * 10)} //Getting a random decimal from 0 - 1 but not 1 and multiply it by 10. Round down to turn it into an integer with Math.Floor.  
    let choice;
    (choiceCalc() < 1) ? choiceCalc() : // If choiceCalc is 0 run it again that way we calculate from 1-9 not 0-9. 1-3 is Rock, 4-6 is Paper, 7-9 is Scissors. 3/9
    (choiceCalc() < 4) ? choice = "rock" :
    (choiceCalc() > 6) ? choice = "paper" : choice = "scissors";
    return choice;
}


// Function to capitalize text

let capitalize = function(text){
    let firstLetter = text.charAt(0);
    let otherLetters = text.slice(1);
    return firstLetter.toUpperCase() + otherLetters.toLowerCase();
}


// Get human choice

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    let action = choice.toLocaleLowerCase();

    if(action == "rock" || action == "paper" || action == "scissors"){
        alert(`You've chosen ${capitalize(action)}.`)
        return action;
    }

    else {alert("Hmmm... That was not a valid choice.")}
}


//  Compare getComputerChoice and getHumanChoice and identify winner based on if the player wins or not

function playerWinsif(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if (computerChoice == "rock" && humanChoice == "paper"){
        alert("Player wins!")
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        alert("Player wins!")
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        alert("Player wins!")
    } else {
        alert("Nooo! Player lost!")
    }
}
