let playerScore = 0;
let computerScore = 0;
let computerChoice;
const resultDiv = document.getElementById('result');
const selectionsDiv = document.getElementById('selections');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const options = ['rock', 'paper', 'scissors'];

/* 
* Generate computer choice using random number
*/
function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    computerChoice = randomChoice;
} 

/* 
* Add event listeners to all buttons
* Get player's choice
* Add player and computer choices to DOM
*/

let buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.addEventListener ('click', function() {
        if (this.getAttribute('data-type') === 'reset') {
            resetGame();
        } else {
            let playerChoice=this.getAttribute('data-type');
            getComputerChoice();
            getResult(playerChoice, computerChoice);
            selectionsDiv.innerHTML = `
            <p>You chose: ${playerChoice}</p>
            <p>Computer chose: ${computerChoice}</p>
            `;
        }
    });
}

/* 
* Get the game result by comparing the string values
* of the player and computer choices
*/

function getResult(playerChoice, computerChoice) {
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        win();
        break;

        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
        lose();
        break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        draw();
        break;
    }
}

/* 
* Player wins - increment score and add win to DOM
*/

function win() {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    resultDiv.innerHTML = `<p>You Win!</p>`;
}

/* 
* Player loses - increment computer's score and
* add a computer win to DOM
*/

function lose() {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `<p>Computer Wins ...</p>`;
}

/* 
* Draw - scores not affected, add draw to DOM
*/

function draw() {
    resultDiv.innerHTML = `<p>It's a draw</p>`;
}

/* 
* Resets game to start over
*/

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    selectionsDiv.innerHTML = ``;
    resultDiv.innerHTML = ``;
}

