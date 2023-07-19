
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
  	console.log(button.textContent);
    game(button.textContent.toLowerCase());
  })
})

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

let game = (playerChoice) => {
    //let i = 5;
    let score = 0;
    let compScore = 0;
    let result = "";
    while(score == 5 || compScore == 5)
    {
 
    let playerSelection = playerChoice;
    //console.log(playerSelection)
  

    if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        let computerSelection = getComputerChoice().toLowerCase();
        result = playRound(playerSelection, computerSelection);
    }
   
    //i-= 1;
    if(result == 'player win'){
        score += 1;
    }
    else{
        compScore += 1;
    }
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