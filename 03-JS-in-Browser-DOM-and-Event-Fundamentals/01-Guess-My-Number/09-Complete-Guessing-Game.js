"use strict";
//-------------------------------------
// Complete Code for the Guessing Game
//-------------------------------------

// App state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Application state variable
let initialScore = 20;
let highscore = 0;

//--------------------------------
// REfactoring: Factory Function
//-------------------------------
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When no guess input
  if (!guess) {
    displayMessage("🚫 No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎊 Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    // Manipulating styles in CSS
    document.querySelector("h1").textContent = "Woohoo! You Won 🎊";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (initialScore > highscore) {
      highscore = initialScore;
      document.querySelector(".highscore").textContent = initialScore;
    }
    // When guess is different than the secretNumber!
  } else if (guess !== secretNumber) {
    if (initialScore > 1) {
      displayMessage(guess > secretNumber ? "Too high! 📈" : "Too low! 📉");
      initialScore--;
      document.querySelector(".score").textContent = initialScore;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }
  }
});

// Reset function
document.querySelector(".again").addEventListener("click", function () {
  initialScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = initialScore;
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
