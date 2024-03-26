const randomnumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Please enter a valid number between 1 and 100.', 'red');
        return;
    }

    if (guess === randomnumber) {
        setMessage('Congratulations!! You won', 'green');
    } else if (guess < randomnumber) {
        setMessage('The number is low, give another try', 'blue');
    } else {
        setMessage('The number is high, give another try', 'blue');
    }

    guessInput.value = ''; // Clear input field
    guessInput.focus(); // Focus on input field for next guess
}

function setMessage(message, color) {
    const feedback = document.getElementById('feedback');
    feedback.style.color = color;
    feedback.textContent = message;
}
