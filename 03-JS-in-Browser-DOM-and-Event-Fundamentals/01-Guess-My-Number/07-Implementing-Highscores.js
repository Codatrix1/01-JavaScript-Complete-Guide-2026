"use strict";
//-------------------------------------
// Implmenting Highscore functionality
//-------------------------------------

// App state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Application state variable
let initialScore = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When no guess input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎊 Correct number!";
    document.querySelector(".number").textContent = secretNumber;
    // Manipulating styles in CSS
    document.querySelector("h1").textContent = "Woohoo! You Won 🎊";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (initialScore > highscore) {
      highscore = initialScore;
      document.querySelector(".highscore").textContent = initialScore;
    }
    // When number too high!
  } else if (guess > secretNumber) {
    if (initialScore > 1) {
      document.querySelector(".message").textContent = "Too high!";
      initialScore--;
      document.querySelector(".score").textContent = initialScore;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
    // When number too low!
  } else if (guess < secretNumber) {
    if (initialScore > 1) {
      document.querySelector(".message").textContent = "Too low!";
      initialScore--;
      document.querySelector(".score").textContent = initialScore;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
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
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
