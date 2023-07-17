const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const scoreTotal = document.querySelector('#score');
let playerSelection = "";

const start = document.querySelector('#start')


let gameStart = () => {
start.textContent = "Game has started!";
rock.addEventListener('click', () => {playerSelection = 'rock';
                                        game()});
paper.addEventListener('click', ()=>{playerSelection = 'paper'
                                        game()});
scissors.addEventListener('click', ()=> {playerSelection = 'scissors'
                                        game()});

}

start.addEventListener('click', gameStart);


let getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = choices[Math.floor(Math.random() * 3)]
    return compChoice;
}

let playRound = (playerSelection, computerSelection) => {
    let win = "";
    if(playerSelection .toLowerCase() === computerSelection){
        result.textContent = `Both hands are ${playerSelection}. Its a draw!`;
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'){
        result.textContent = `${playerSelection} beats ${computerSelection}. You win!`;
        win = "player win"
    }
    
    else{
        result.textContent = `${computerSelection} beats ${playerSelection}. You lose!`;
        win = "computer win";
    }
    return win;
}

let game = () => {
    let score = 0;
    let compScore = 0;
    let result = "";
    
    let computerSelection = getComputerChoice().toLowerCase();
    result = playRound(playerSelection, computerSelection);
    
    if(result == 'player win'){
        score += 1;
    }
    else{
        compScore += 1;
    }
    
    if(score == compScore)
    {
        scoreTotal.textContent = `Both scored ${score}. Match is a draw!`;
    }
    else if(score > compScore){
        scoreTotal.textContent = `Player scored ${score} and computer scored ${compScore}. Player wins!`;
    }
    else{
        scoreTotal.textContent =`Player scored ${score} and computer scored ${compScore}. Player loses!`;
    }
}


