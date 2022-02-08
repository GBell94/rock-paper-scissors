let playerScore = 0;
let computerScore = 0;
const resultDiv = document.getElementById('result');
const selectionsDiv = document.getElementById('selections');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
//const computerChoice = getComputerChoice();
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    //let options = ["rock", "paper", "scissors"];
    //let randomNumber = Math.floor(Math.random() * 3);
    //return options[randomNumber]; 
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    computerChoice = randomChoice;
} 

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
            //console.log(playerChoice);
            //console.log(computerChoice);
        }
    });
}

function getResult(playerChoice, computerChoice) {
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        win()
        break;

        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
        lose()
        break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        draw()
        break;
    }
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
   //selectionsDiv.innerHTML = `
   // <p>You chose: ${playerChoice}</p>
    //<p>Computer chose: ${computerChoice}</p>
    //`;
    resultDiv.innerHTML = `<p>You Win!</p>`;
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
   // selectionsDiv.innerHTML = `
   // <p>You chose: ${playerChoice}</p>
    //<p>Computer chose: ${computerChoice}</p>
   // `;
    resultDiv.innerHTML = `<p>Computer Wins ...</p>`;
}

function draw(playerChoice, computerChoice) {
    //selectionsDiv.innerHTML = `
    //<p>You chose: ${playerChoice}</p>
    //<p>Computer chose: ${computerChoice}</p>
    //`;
    resultDiv.innerHTML = `<p>It's a draw</p>`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    selectionsDiv.innerHTML = ``;
    resultDiv.innerHTML = ``;
}

