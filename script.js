// Initialize score from localStorage or set to 0
let score = parseInt(localStorage.getItem('gameScore')) || 0;
document.getElementById('score').textContent = score;

// Game choices array
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Select all choice buttons
const buttons = document.querySelectorAll('.choice-button');

// Modal Elements
const rulesModal = document.getElementById('rulesModal');
const rulesButton = document.querySelector('.rules-button');
const closeButton = document.querySelector('.close-button');

// Result Display Elements
const resultDisplay = document.getElementById('resultDisplay');
const resultHeading = document.querySelector('.result-heading');
const playerChoiceContainer = document.getElementById('playerChoiceContainer');
const computerChoiceContainer = document.getElementById('computerChoiceContainer');
const playAgainButton = document.querySelector('.play-again');

// Game Container
const gameContainer = document.querySelector('.game-container');

// Show Rules Modal
rulesButton.addEventListener('click', () => {
  resultDisplay.style.display = 'none';
  gameContainer.style.display = 'none';
  rulesModal.style.display = 'block';
});

// Close Rules Modal
closeButton.addEventListener('click', () => {
  gameContainer.style.display = 'block';
  rulesModal.style.display = 'none';
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.classList[1];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getWinner(playerChoice, computerChoice);

    // Update score
    if (result === 'win') {
      score++;
    } else if (result === 'lose') {
      score = Math.max(0, score - 1); // Ensure score doesn't go below 0
    }

    document.getElementById('score').textContent = score;
    localStorage.setItem('gameScore', score);

    // Hide the game container (which includes the pentagon)
    gameContainer.style.display = 'none';

    // Update the result display
    updateResultDisplay(playerChoice, computerChoice, result);
  });
});

// Function to determine the winner
function getWinner(player, computer) {
  // Winning conditions for each choice
  const rules = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['rock', 'scissors']
  };

  if (player === computer) return 'draw';
  return rules[player].includes(computer) ? 'win' : 'lose';
}

// Function to update the result display
// Function to update the result display
function updateResultDisplay(playerChoice, computerChoice, result) {
  // Update player's choice display
  playerChoiceContainer.innerHTML = `
    <div class="choice-container ${playerChoice}">
      <div class="choice-placeholder">
        <div class="button-inner">
          <img src="images/icon-${playerChoice}.svg" alt="${playerChoice} icon" class="choice-icon">
        </div>
      </div>
    </div>
  `;

  // Initially show an empty circle for computer's choice
  computerChoiceContainer.innerHTML = `
    <div class="choice-container">
      <div class="choice-placeholder">
        <div class="button-inner"></div>
      </div>
    </div>
  `;

  // Show the result display
  resultDisplay.style.display = 'flex';

  // After a brief delay, update computer's choice and result
  setTimeout(() => {
    computerChoiceContainer.innerHTML = `
      <div class="choice-container ${computerChoice}">
        <div class="choice-placeholder">
          <div class="button-inner">
            <img src="images/icon-${computerChoice}.svg" alt="${computerChoice} icon" class="choice-icon">
          </div>
        </div>
      </div>
    `;
    resultHeading.textContent = result === 'win' ? "YOU WIN" : result === 'lose' ? "YOU LOSE" : "DRAW";
  }, 1000); // 1 second delay for suspense
}

// Play Again functionality
playAgainButton.addEventListener('click', () => {
  // Hide the result display
  resultDisplay.style.display = 'none';
  // Show the game container again (including the pentagon)
  gameContainer.style.display = 'block';
  // Reset placeholders for the next round
  playerChoiceContainer.innerHTML = '<div class="choice-placeholder"></div>';
  computerChoiceContainer.innerHTML = '<div class="choice-placeholder"></div>';
  resultHeading.textContent = '';
});