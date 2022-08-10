function computerChoice() {

    let randomValue = Math.random() * 100;
    let choice = undefined; 

    choice = (randomValue < 33) ? 'Rock' : (randomValue >= 33 && randomValue < 66) ?
    'Paper' : (randomValue >= 66) ? 'Scissors' : 'Error';

    return choice;
}

function normalizeSelection(selection) {
    let firstCharacter = undefined;

    selection = selection.toLowerCase();
    firstCharacter = selection.charAt(0);
    firstCharacter = firstCharacter.toUpperCase();
    
    return firstCharacter.concat(selection.slice(1));
} 


function playRound(playerSelection, computerSelection = computerChoice()) {

    let winner = 0;
    let gameResult = undefined; 

    playerSelection = normalizeSelection(playerSelection);
    computerSelection = normalizeSelection(computerSelection);

    if(playerSelection == 'Rock' && computerSelection == 'Scissors'
    || playerSelection == 'Paper' && computerSelection == 'Rock'
    || playerSelection == 'Scissors' && computerSelection == 'Paper') {

        gameResult = `Ah, You Win! ${playerSelection} beats ${computerSelection}.`;
    
    } 
    
    else if(playerSelection == computerSelection) 
        gameResult = 'Eh, It\'s a Draw!';
      
    else 
        gameResult = `Oh, You Lose! ${computerSelection} beats ${playerSelection}.`;

    return gameResult;

}

function game() {
    
    let userChoice = undefined;
    let gameStatus = undefined;

    let userScore = 0;
    let computerScore = 0;
    

    for(let i = 0; i < 5; i++) {

        userChoice = prompt('What is your choice, wise player? ');
        gameStatus = playRound(userChoice);

        console.log(gameStatus);

        switch(gameStatus.charAt(0)) {
            case 'A':
                userScore++;
            break;

            case 'O':
                computerScore++;
            break;

            default:
            break;
        }

        console.log(`User: ${userScore} | Computer: ${computerScore}`);

    }

    if(userScore > computerScore)
        console.log(`%cYou won the game`, 'background-color: green; color: white; padding: 20px;');
    else if(userScore < computerScore) 
        console.log(`%cYou lost the game`, 'background-color: lightcoral; color: white; padding: 20px;');
    else
        console.warn('It ended like this, equality exists!');
}