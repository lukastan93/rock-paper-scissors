const rockButton = document.querySelector('#rock-div');
const paperButton = document.querySelector('#paper-div');
const scissorsButton = document.querySelector('#scissors-div');
const resultSection = document.querySelector('#game-results-container');
const yourScore = document.querySelector('#your-score');
const computerScore = document.querySelector('#computer-score');

let winCount = 0;
let lossCount = 0;

rockButton.addEventListener('click', (e) => {
    playRound('rock', computerPlay());
});

paperButton.addEventListener('click', (e) => {
    playRound('paper', computerPlay());
});

scissorsButton.addEventListener('click', (e) => {
    playRound('scissors', computerPlay());
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
            result.textContent = `You both picked ${playerSelection}, the game is tied!`;
            resultSection.appendChild(result);

            console.log(`You both picked ${playerSelection}, the game is tied!`);
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock'){
            const result = document.createElement('p');
            result.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
            resultSection.appendChild(result);

            winCount++;
            yourScore.textContent = `Your Score: ${winCount}`;
            
            console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
            return 1;
        }
        else{
            const result = document.createElement('p');
            result.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
            resultSection.appendChild(result);

            lossCount++;
            computerScore.textContent = `Computer's Score: ${lossCount}`;
            
            console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
            return 0;
        }
    }