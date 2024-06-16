console.log("Hello World!")

//Get computer choice

function getComputerChoice(){
    let choiceCalc = function () { return Math.floor(Math.random() * 10)} //Getting a random decimal from 0 - 1 but not 1 and multiply it by 10. Round down to turn it into an integer with Math.Floor.  
    let choice;
    (choiceCalc() < 1) ? choiceCalc() : // If choiceCalc is 0 run it again that way we calculate from 1-9 not 0-9. 1-3 is Rock, 4-6 is Paper, 7-9 is Scissors. 3/9
    (choiceCalc() < 4) ? choice = "Rock" :
    (choiceCalc() > 6) ? choice = "Paper" : choice = "Scissors";
    return choice;
}