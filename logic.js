let userScore = 0;
let computerScore = 0;


function computerChoice() {

    let randomValue = Math.random() * 100;
    let choice = undefined; 

    choice = (randomValue < 33) ? 'Crow' : (randomValue >= 33 && randomValue < 66) ?
    'Frog' : (randomValue >= 66) ? 'Locust' : 'Error';

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
    
    let scoreString = '';

    const roundResult = document.querySelector('.roundResult');
    const gamePoints = document.querySelector('.actualScore');

    let winner = 0;
    let gameResult = undefined; 

    playerSelection = normalizeSelection(playerSelection);
    computerSelection = normalizeSelection(computerSelection);

    if(playerSelection == 'Crow' && computerSelection == 'Frog'
    || playerSelection == 'Frog' && computerSelection == 'Locust'
    || playerSelection == 'Locust' && computerSelection == 'Crow') {

        gameResult = `Ah, You Win! ${playerSelection} beats ${computerSelection}.`;
        userScore++;
    } 
    
    else if(playerSelection == computerSelection) 
        gameResult = 'Eh, It\'s a Draw!';
      
    else {
        gameResult = `Oh, You Lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    }

    scoreString = `${userScore} - ${computerScore}`;
    gamePoints.textContent = scoreString;

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

    if(fIcons[a].classList.contains('fa-locust')) {
        fIcons[a].addEventListener('mouseover', function(e) {
            e.target.classList.add('fa-shake');
        })
    }

    if(fIcons[a].classList.contains('fa-crow')) {
        fIcons[a].addEventListener('mouseover', function(e) {
            e.target.classList.add('fa-beat');
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

    if(fIcons[a].classList.contains('fa-locust')) {
        fIcons[a].addEventListener('mouseout', function(e) {
            e.target.classList.remove('fa-shake');
        })
    }

    if(fIcons[a].classList.contains('fa-crow')) {
        fIcons[a].addEventListener('mouseout', function(e) {
            e.target.classList.remove('fa-beat');
        })
    }

    fIcons[a].addEventListener('click', function(e) {   
        playRound(e.target.getAttribute('value'));
    })
}

