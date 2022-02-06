
let buttons = document.getElementsByTagName('button');

for (let button of buttons) {
    button.addEventListener ('click', function() {
        if (this.getAttribute('data-type') === 'reset') {
            resetGame();
        } else {
            let playerChoice=this.getAttribute('data-type');
            //playGame(playerChoice);
            console.log(playerChoice);
        }
    });
}
