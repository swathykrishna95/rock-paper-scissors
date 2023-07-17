let getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = choices[Math.floor(Math.random() * 3)]
    return compChoice;
}

let playRound = (playerSelection, computerSelection) => {
    let win = "";
    if(playerSelection .toLowerCase() === computerSelection){
        console.log(`Both hands are ${playerSelection}. Its a draw!`);
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'){
        console.log(`${playerSelection} beats ${computerSelection}. You win!`);
        win = "player win"
    }
    
    else{
        console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
        win = "computer win";
    }
    return win;
}

let game = () => {
    let score = 0;
    let compScore = 0;
    let result = "";

    let playerSelection = 
    if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        let computerSelection = getComputerChoice().toLowerCase();
        result = playRound(playerSelection, computerSelection);
    }
    else{
        console.log("Please select a valid hand.")
    }
    i-= 1;
    if(result == 'player win'){
        score += 1;
    }
    else{
        compScore += 1;
    }
    
    console.log(score, compScore);
    if(score == compScore)
    {
        console.log(`Both scored ${score}. Match is a draw!`)
    }
    else if(score > compScore){
        console.log(`Player scored ${score} and computer scored ${compScore}. Player wins!`)
    }
    else{
        console.log(`Player scored ${score} and computer scored ${compScore}. Player loses!`)
    }
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

document.addEventListener('onclick', () => {playerSelection = 'rock'});
console.log(this)
document.addEventListener('onclick', () => {playerSelection = 'paper'});
document.addEventListener('onclick', () => {playerSelection = 'scissors'});

