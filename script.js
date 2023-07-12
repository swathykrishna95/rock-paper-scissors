let getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = choices[Math.floor(Math.random() * 3)]
    return compChoice;
}

let playRound = (playerSelection, computerSelection) => {
    
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

let game = () => {
    let playerSelection = prompt("Enter your choice: (rock, paper or scissors:" ).toLowerCase();
    if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        let computerSelection = getComputerChoice().toLowerCase();
        playRound(playerSelection, computerSelection);
    }
    else{
        console.log("Please select a valid hand.")
    }
}