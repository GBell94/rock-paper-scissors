# Rock-Paper-Scissors

Although very simple, Rock, Paper Scissors is a centuries-old game involving strategy and decision-making. When played in-person, it can become possible to detect your opponent's behaviour and predict their moves. When playing against a computer, whose choices are random, the game is much fairer.

This responsive, online version is for users of all ages to enjoy. Users will quickly be able to learn the rules of the game and practise their decision-making skills, whilst having fun.

## Design

The simple colour scheme and Roboto sans serif font were chosen to maximise readability and accessibility. 

## Features

### *Responsive design*

Users may access the site on a range of device sizes, from mobile to desktop, and the design reflects this. Media queries ensure that the site remains easy to read and use on mobile. 

### *Header* 

![header screenshot](/DOCS/Game-header-screenshot.png)

The header clearly displays the game name and also adds a brief overview of the main rules of the game from which the logic can be extended. 

### *Game Choices*

![game buttons screenshot](/DOCS/Game-buttons-screenshot.png)

Users are given a clear instruction to click on one of the buttons to make their choice. The images used for the game buttons are the universal hand gestures for rock, paper and scissors used when playing the game in person. They are displayed in the same order as the game name in the header. A green border is also displayed around the user's choice to highlight which button has been clicked. 

### *Results*

![game result screenshot](/DOCS/Game-result-screenshot.png)

Once a user has clicked a button, their choice is displayed. The computer's random choice is determined by the Javascript code and also displayed on screen. The user also receives a message to say whether they have won, the computer is the winner or it's a draw. If users are unsure of the button images, the display quickly helps them to learn. By also being able to see the computer's choice, users can also see the logic behind the results.

### *Score*

![game score screenshot](/DOCS/Game-score-screenshot.png)

Here users can see the scores for themselves and the computer updated as appropriate after each round.

### *Restart Game*

![restart button screenshot](/DOCS/Game-reset-screenshot.png)

The restart game button allows the user to clear the scores and results area and start a new game.

### *Game site*

![game initial state screenshot](/DOCS/Game-start-screenshot.png)

This image shows the start of the game and is also where the user is returned on clicking the 'restart' button. 

![game in play screenshot](/DOCS/Game-screenshot.png)

This image shows the game during play, where the results and winner are displayed.

### *Features to implement*

Additional features could include:

- Extending the game to include lizard and spock options, from the [Big Bang Theory](https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/) TV show
- Timer to set or limit playing time
- A record of game scores for a playing session
- Allowing players to personalise the game by inputing their name

## Testing

*Manual testing of the site:* 

- All the image buttons are clickable and the player's choice is registered correctly.
- A computer choice is also displayed and this appears to be random.  
- The correct winner or a draw is also displayed.
- The scores are incremented correctly.
- The reset button can be clicked and operates as expected.
- The site opens and functions as expected in Chrome and Firefox browsers.

*Responsiveness:*

- Chrome and Firefox dev tools were used to check the site responsiveness at various browser sizes.
- The [amiresponsive](http://ami.responsivedesign.is/) website was used to create a multi-device mock-up of the site as an additional check on how the site displays across various media. 

![amiresponsive screenshot](/DOCS/amiresponsive-screenshot.png)

In addition, the Lighthouse feature of Chrome dev tools was used to assess the site accessibility and received a score of 100.

![Lighthouse screenshot](/DOCS/Lighthouse-screenshot.png)

*Validator Testing*

- HTML

No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

![W3 validator screenshot](/DOCS/W3-validator-screenshot.png)
- CSS

No errors were returned when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

![Jigsaw screenshot](/DOCS/Jigsaw-validator-screenshot.png)

-JavaScript

No errors were returned when passing through the official [JSHint validator](https://jshint.com)
The main metrics returned were:
- There are 7 functions in the file.
- The function with largest signature takes 2 arguments, while the median is 0.
- Largest function has 6 statements in it, while the median is 3.
- Most complex function has a cyclomatic complexity of 10 while the median is 1.

## Deployment

The site was deployed to GitHub pages. The steps followed are:

- In the GitHub repository, navigate to the Settings tab.
- Scroll down and click on Pages.
- From the source section drop-down menu, select the Master branch and click Save.
- Once this has been selected, the page will be automatically be refreshed with a blue ribbon display to indicate the successful deployment.

The live link can be found here: <https://gbell94.github.io/rock-paper-scissors>

## Credits

### *Content*

- The process for adding event listeners to buttons was adapted from the Code Institute Love Maths project
- Information on using the switch function was taken from a [W3 schools tutorial](https://www.w3schools.com/js/js-switch.asp) and [FreeCodeCamp](https://www.freecodecamp.org)

### *Media*

- The rock, paper and scissors images are from [Kindpng](https://www.kindpng.com)
