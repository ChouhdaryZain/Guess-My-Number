'use strict';

// initializing variables
let secretNumber;
let score = 20;
let highScore = 0;

// Creating a secret number
const secretNumberGenerator = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

// function for setting display message
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}

// function for setting input value
const setInputEmpty = () => {
  document.querySelector('.guess').value = '';
}

// function for setting score
const setScore = (newScore) => {
  document.querySelector('.score').textContent = Number(newScore);
}

// function for number's content, body's backgroundColor, and number's width
const setNumBodyColorNumWidth = (newNumber, backgroundColor, numWidth) => {
  document.querySelector('.number').textContent = newNumber;
  document.querySelector('body').style.backgroundColor = backgroundColor;
  document.querySelector('.number').style.width = numWidth;
}

// Creating event listener function

secretNumberGenerator();
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // if user did not enters any number
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  //if number is correct 
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    // displaying the secret number
    setNumBodyColorNumWidth(secretNumber, '#60b347', '30rem');
    setInputEmpty();
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // if number is too high
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber ? displayMessage('📈 Too high!') : displayMessage('📉 Too low!');
      score--;
      setScore(score);
      setInputEmpty();
    } else {
      displayMessage('💥 You lost the game...');
      setScore(0);
      setInputEmpty();
    }
  }
})
document.querySelector('.again').addEventListener('click', function () {
  setScore(20);
  secretNumberGenerator();
  displayMessage('Start guessing...');
  setInputEmpty();
  setNumBodyColorNumWidth('?', '#222', '15rem');
})