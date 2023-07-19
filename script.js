let getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = choices[Math.floor(Math.random() * 3)]
    return compChoice;
}

let playRound = (playerSelection, computerSelection) => {
    let win = "";
    if(playerSelection .toLowerCase() === computerSelection){
        resultDiv.textContent = `Both hands are ${playerSelection}. Its a draw!`;
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'){
        resultDiv.textContent = `${playerSelection} beats ${computerSelection}. You win!`;
        win = "player win"
    }
    
    else{
        resultDiv.textContent = `${computerSelection} beats ${playerSelection}. You lose!`;
        win = "computer win";
    }
    return win;
}

let buttonDisabler = () => {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

let game = (playerSelection) => {
    if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        let computerSelection = getComputerChoice().toLowerCase();
        result = playRound(playerSelection, computerSelection);
    }
    
  
    if(result == 'player win'){
        score += 1;
    }
    else if(result == 'computer win') {
        compScore += 1;
    }
    scoreDiv.textContent = `Your score : ${score}, Computer's score : ${compScore}`;
    if(score == 5 || compScore == 5){
        scoreDiv.textContent = ` Final scores! Your score : ${score}, Computer's score : ${compScore}`;
        if(score == compScore)
        {
            resultDiv.textContent = `Both scored ${score}. Match is a draw!`;
            buttonDisabler();
        }
        else if(score > compScore){
            resultDiv.textContent =  `Player scored ${score} and computer scored ${compScore}. Player wins!`;
            buttonDisabler();
        }
        else{
            resultDiv.textContent = `Player scored ${score} and computer scored ${compScore}. Player loses!`;
            buttonDisabler();
        }
    }
  
    }
  

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');

let score = 0;
let compScore = 0;
let result = "";



buttons.forEach((button) => {
    button.addEventListener('click', () => {
    resultDiv.textContent = "The game is afoot!";
    playerSelection = button.textContent.toLowerCase();
    game(playerSelection);

})
});


   







