Frontend Mentor - Rock, Paper, Scissors, Lizard, Spock solution
This is a solution to the Rock, Paper, Scissors challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents
Overview (#overview)
The challenge (#the-challenge)

Screenshot (#screenshot)

Links (#links)

My process (#my-process)
Built with (#built-with)

What I learned (#what-i-learned)

Continued development (#continued-development)

Useful resources (#useful-resources)

Author (#author)

Acknowledgments (#acknowledgments)

Overview
The challenge
Users should be able to:

View the optimal layout for the game depending on their device's screen size

Play Rock, Paper, Scissors, Lizard, Spock against the computer

Maintain the state of the score after refreshing the browser (implemented)

Bonus: The game includes the extended version with Lizard and Spock (implemented)

Screenshot
Rock, Paper, Scissors, Lizard, Spock Game Screenshot

Note: The screenshot was taken using Firefox's screenshot feature, capturing the full height of the game display on a mobile device to showcase the responsiveness.

Links
Solution URL: Add solution URL here

Live Site URL: Add live site URL here

My process
Built with
Semantic HTML5 markup

CSS custom properties for theming

Flexbox for layout management

CSS Grid for responsive design

Mobile-first workflow

Vanilla JavaScript for game logic and interactivity

What I learned
While working on this project, I deepened my understanding of responsive design, particularly in handling different screen sizes effectively. Here's a snippet of the JavaScript function that updates the result display, which was a key part of the game logic:

js

function updateResultDisplay(playerChoice, computerChoice, result) {
playerChoiceContainer.innerHTML = `    <div class="choice-placeholder ${playerChoice}">
      <div class="button-inner">
        <img src="images/icon-${playerChoice}.svg" alt="${playerChoice} icon" class="choice-icon">
      </div>
    </div>
 `;

// Initially show an empty circle for computer's choice
computerChoiceContainer.innerHTML = `    <div class="choice-placeholder ${computerChoice}">
      <div class="button-inner"></div>
    </div>
 `;

resultDisplay.style.display = 'flex';

setTimeout(() => {
computerChoiceContainer.innerHTML = `      <div class="choice-placeholder ${computerChoice}">
        <div class="button-inner">
          <img src="images/icon-${computerChoice}.svg" alt="${computerChoice} icon" class="choice-icon">
        </div>
      </div>
   `;
resultHeading.textContent = result === 'win' ? "YOU WIN" : result === 'lose' ? "YOU LOSE" : "DRAW";
}, 1000);
}

I also learned how to use localStorage to persist game scores, which was crucial for maintaining the user's score across sessions:

js

let score = parseInt(localStorage.getItem('gameScore')) || 0;
document.getElementById('score').textContent = score;
localStorage.setItem('gameScore', score);

Continued development
For future projects, I plan to focus on:

Enhancing accessibility features, especially for interactive games like this one.

Experimenting with animations to make the game more engaging, perhaps using CSS animations or JavaScript for smoother transitions.

Integrating backend services to save scores or perhaps enable multiplayer functionality.

Useful resources
MDN Web Docs - [Web Storage API](https://x.com/i/grok?text=Web%20Storage%20API) - This was invaluable for understanding how to use localStorage effectively.

CSS-Tricks - A Complete Guide to Flexbox - Helped me master the layout with Flexbox for different screen sizes.

[Frontend Mentor Community](https://x.com/i/grok?text=Frontend%20Mentor%20Community) - The community feedback was crucial in refining the design and functionality.

Author
Website - chidera

Acknowledgments
A big thank you to YOU
