'use strict';

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Select DOM elements
const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

// Other variables
let prevGuesses = [];
let remainingGuesses = 10;

// Event listener for form submission
submit.addEventListener('click', function(event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        checkGuess(guess);
    }
}

// Function to check the user's guess against the random number
function checkGuess(guess) {
    prevGuesses.push(guess);
    remainingGuesses--;

    // Display the previous guesses
    guessSlot.textContent = prevGuesses.join(', ');

    if (guess === randomNumber) {
        displayMessage('Congratulations! You guessed the correct number!');
        endGame();
    } else if (remainingGuesses === 0) {
        displayMessage(`Game over! The correct number was ${randomNumber}.`);
        endGame();
    } else {
        displayMessage(`Wrong guess! ${remainingGuesses} guesses remaining.`);
        if (guess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    // Clear the input field
    userInput.value = '';
}

// Function to display messages to the user
function displayMessage(message) {
    resultParas.lastElementChild.textContent = message;
}

// Function to end the game
function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
}

// Optional: Implement a "New Game" button functionality if needed
