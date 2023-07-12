let getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = choices[Math.floor(Math.random() * 3)]
    return compChoice;
}

let playRound = (playerSelection, computerSelection) => {
    
    if(playerSelection .toLowerCase() === computerSelection){
        return(`Both hands are ${playerSelection}. Its a draw!`);
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'){
        return (`${playerSelection} beats ${computerSelection}. You win!`);
    }
    
    else{
        return (`${computerSelection} beats ${playerSelection}. You lose!`)
    }
}

let game = () => {
    let i = 5;
    while(i > 0)
    {
    let playerSelection = prompt("Enter your choice: (rock, paper or scissors:" ).toLowerCase();
    if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        let computerSelection = getComputerChoice().toLowerCase();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    else{
        console.log("Please select a valid hand.")
    }
    }
}