function computerChoice() {

    let randomValue = Math.random() * 100;
    let choice = undefined; 

    choice = (randomValue < 33) ? 'Toad' : (randomValue >= 33 && randomValue < 66) ?
    'Newt' : (randomValue >= 66) ? 'Frog' : 'Error';

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

    const roundResult = document.querySelector('.roundResult');
    let winner = 0;
    let gameResult = undefined; 

    playerSelection = normalizeSelection(playerSelection);
    computerSelection = normalizeSelection(computerSelection);

    if(playerSelection == 'Toad' && computerSelection == 'Frog'
    || playerSelection == 'Newt' && computerSelection == 'Toad'
    || playerSelection == 'Frog' && computerSelection == 'Newt') {

        gameResult = `Ah, You Win! ${playerSelection} beats ${computerSelection}.`;
    
    } 
    
    else if(playerSelection == computerSelection) 
        gameResult = 'Eh, It\'s a Draw!';
      
    else 
        gameResult = `Oh, You Lose! ${computerSelection} beats ${playerSelection}.`;

    roundResult.textContent = gameResult;
    return gameResult;

}

const fIcons = document.getElementsByClassName('fa-solid');

for(let a = 0; a < fIcons.length; a++)
{
    if(fIcons[a].classList.contains('fa-frog')) {
        fIcons[a].addEventListener('mouseover', function(e) {
            e.target.classList.add('fa-bounce');
        })
    }
}

for(let a = 0; a < fIcons.length; a++)
{
    if(fIcons[a].classList.contains('fa-frog')) {
        fIcons[a].addEventListener('mouseout', function(e) {
            e.target.classList.remove('fa-bounce');
        })
    }
}
