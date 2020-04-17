const rockButton = document.querySelector('#rock-div');
const paperButton = document.querySelector('#paper-div');
const scissorsButton = document.querySelector('#scissors-div');
const resultSection = document.querySelector('#game-results-container');
const yourScore = document.querySelector('#your-score');
const computerScore = document.querySelector('#computer-score');

let winCount = 0;
let lossCount = 0;
let roundCount = 0;

rockButton.addEventListener('click', (e) => {
    roundCount++;
    playRound('rock', computerPlay());
    checkGameEnd(winCount, lossCount)
});

paperButton.addEventListener('click', (e) => {
    roundCount++;
    playRound('paper', computerPlay());
    checkGameEnd(winCount, lossCount)
});

scissorsButton.addEventListener('click', (e) => {
    roundCount++;
    playRound('scissors', computerPlay());
    checkGameEnd(winCount, lossCount)
});
 
    function computerPlay(){
        let selector = Math.floor(Math.random()*3);
        if (selector<1){
            return "rock";
        }
        else if (selector>=1 && selector <2){
            return "paper";
        }
        else{
            return "scissors";
        }
    }

    function playRound(playerSelection, computerSelection){
        if (playerSelection === computerSelection){

            const result = document.createElement('p');
            result.classList.add("result");
            result.textContent = `Round ${roundCount}: You both picked ${playerSelection}, the game is tied!`;
            resultSection.appendChild(result);
        }

        else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock'){
            const result = document.createElement('p');
            result.classList.add("result");
            result.textContent = `Round ${roundCount}: You win, ${playerSelection} beats ${computerSelection}!`;
            resultSection.appendChild(result);

            winCount++;
            yourScore.textContent = `Your Score: ${winCount}`;    
        }
        
        else{
            const result = document.createElement('p');
            result.classList.add("result");
            result.textContent = `Round ${roundCount}: You lose, ${computerSelection} beats ${playerSelection}!`;
            resultSection.appendChild(result);

            lossCount++;
            computerScore.textContent = `Computer's Score: ${lossCount}`;
        }
    }

    function checkGameEnd(x, y){
        if (x === 5){
            alert('Congratulations! A winner is you!');
            winCount=0;
            yourScore.textContent = `Your Score: ${winCount}`;
            lossCount=0;
            computerScore.textContent = `Computer's Score: ${lossCount}`;
            for (i=0 ; i<roundCount ; i++){
            const pastScores = document.querySelector('.result');
            resultSection.removeChild(pastScores);
            }
            roundCount=0;
        }

        else if (y === 5){
            alert('Computer wins. Better luck next time.')
            winCount=0;
            yourScore.textContent = `Your Score: ${winCount}`;
            lossCount=0;
            computerScore.textContent = `Computer's Score: ${lossCount}`;
            for (i=0 ; i<roundCount ; i++){
                const pastScores = document.querySelector('.result');
                resultSection.removeChild(pastScores);
                }
            roundCount=0;
        }

        else return;
    }