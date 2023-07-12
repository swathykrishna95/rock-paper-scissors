let getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = choices[Math.floor(Math.random() * 3)]
    console.log(compChoice);
    return compChoice;
}

let playRound = () => {
    let playerSelection = prompt("Enter your choice: (rock, paper or scissors:" );
    if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        let computerSelection = getComputerChoice().toLowerCase();
        if(playerSelection .toLowerCase() === computerSelection){
            console.log(`Both hands are ${playerSelection}. Its a draw!`);
        }
        else if(playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'){
            console.log(`${playerSelection} beats ${computerSelection}. You win!`);
        }
        
        else{
            console.log(`${computerSelection} beats ${playerSelection}. You lose!`)
        }
    }
    else{
        console.log("Please select a valid hand.")
    }
}