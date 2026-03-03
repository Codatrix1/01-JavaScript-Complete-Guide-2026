"use strict";
//-------------------------------------
// Implementing the game logic
//-------------------------------------

// Math.random() : Gives a random number betwen 0 - 1

// App state variable
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

// Application state variable
let initialScore = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎊 Correct number!";
  } else if (guess > secretNumber) {
    if (initialScore > 1) {
      document.querySelector(".message").textContent = "Too high!";
      initialScore--;
      document.querySelector(".score").textContent = initialScore;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
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
