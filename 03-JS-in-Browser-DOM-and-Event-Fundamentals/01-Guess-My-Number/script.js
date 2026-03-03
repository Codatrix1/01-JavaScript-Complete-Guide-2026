"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let initialScore = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎊 Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("h1").textContent = "Woohoo! You Won 🎊";
    document.querySelector(".number").style.width = "30rem";

    // When guess in too high
  } else if (guess > secretNumber) {
    if (initialScore > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      initialScore--;
      document.querySelector(".score").textContent = initialScore;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (initialScore > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
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
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  initialScore = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".score").textContent = initialScore;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
