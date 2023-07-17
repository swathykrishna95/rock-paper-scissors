const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
let score = document.querySelector('#score')
;
let playerSelection = "";
rock.addEventListener('click', () => {playerSelection = 'rock';
                                        game()});
paper.addEventListener('click', ()=>{playerSelection = 'paper'
                                        game()});
scissors.addEventListener('click', ()=> {playerSelection = 'scissors'
                                        game()});



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
    
    while(score == 5 || compScore == 5){
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
        score.innerText = `Both scored ${score}. Match is a draw!`;
    }
    else if(score > compScore){
        score.innerText = `Player scored ${score} and computer scored ${compScore}. Player wins!`;
    }
    else{
        score.innerText =`Player scored ${score} and computer scored ${compScore}. Player loses!`;
    }
}
}

