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

    let gameResult = undefined; 

    playerSelection = normalizeSelection(playerSelection);
    computerSelection = normalizeSelection(computerSelection);

    if(playerSelection == 'Rock' && computerSelection == 'Scissors'
    || playerSelection == 'Paper' && computerSelection == 'Rock'
    || playerSelection == 'Scissors' && computerSelection == 'Paper') {

        gameResult = `You Win! ${playerSelection} beats ${computerSelection}.`;

    } 
    
    else if(playerSelection == computerSelection)
        gameResult = 'It\'s a Draw!';
    
    else 
        gameResult = `You Lose! ${computerSelection} beats ${playerSelection}.`;

    return gameResult;

}