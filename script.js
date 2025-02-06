// Initialize score from localStorage or set to 0
let score = parseInt(localStorage.getItem('gameScore')) || 0;
document.getElementById('score').textContent = score;

// Game choices array
const choices = ['rock', 'paper', 'scissors'];

// Select all choice buttons
const buttons = document.querySelectorAll('.choice-button');

// Modal Elements
const rulesModal = document.getElementById('rulesModal');
const rulesButton = document.querySelector('.rules-button');
const closeButton = document.querySelector('.close-button');

// Result Display Elements
const resultDisplay = document.getElementById('resultDisplay');
const resultHeading = document.querySelector('.result-heading');
const playerPlaceholder = document.querySelector('.player .choice-placeholder');
const computerPlaceholder = document.querySelector('.computer .choice-placeholder');
const playAgainButton = document.querySelector('.play-again');

// Show Rules Modal
rulesButton.addEventListener('click', () => {
    rulesModal.style.display = 'block';
});

// Close Rules Modal
closeButton.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get player's choice from button class
        const playerChoice = button.classList[1];

        // Generate computer's choice
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Determine winner and update score
        const result = getWinner(playerChoice, computerChoice);

        // Update the result display
        updateResultDisplay(playerChoice, computerChoice, result);

        // Update score based on result
        if (result === 'win') {
            score++;
        } else if (result === 'lose') {
            score = Math.max(0, score - 1);
        }

        // Update score display and save to localStorage
        document.getElementById('score').textContent = score;
        localStorage.setItem('gameScore', score);

        // Show the result display
        resultDisplay.style.display = 'flex';
    });
});

// Function to determine the winner
function getWinner(player, computer) {
    if (player === computer) return 'draw';

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }

    return 'lose';
}

// Function to update the result display
function updateResultDisplay(playerChoice, computerChoice, result) {
    // Update placeholders with choices
    playerPlaceholder.className = `choice-placeholder ${playerChoice}`;
    computerPlaceholder.className = `choice-placeholder ${computerChoice}`;

    // Update result heading
    resultHeading.textContent = result === 'win'
        ? "YOU WIN!"
        : result === 'lose'
            ? "YOU LOSE"
            : "IT'S A DRAW!";
}

// Play Again functionality
playAgainButton.addEventListener('click', () => {
    // Hide the result display
    resultDisplay.style.display = 'none';

    // Reset placeholders for the next round
    playerPlaceholder.className = 'choice-placeholder';
    computerPlaceholder.className = 'choice-placeholder';
    resultHeading.textContent = '';
});
