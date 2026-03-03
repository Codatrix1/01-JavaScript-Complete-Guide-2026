"use strict";
//-------------------------------------
// Challenge 1
//-------------------------------------
/*
Implement a game reset functionality, soo that the player 
can make a new guess! Here is how!

1. Select the element with the "again" class and attach a click event handler
2. In the handler function, restore initial values of the
score and secretNumber variables
3. Restore the initial conditions of the message,
number, score, and guess input field
4. Also, restore the original background coloe (#222)
and the number width (15 rem)
*/

// Math.random() : Gives a random number betwen 0 - 1

// App state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Application state variable
let initialScore = 20;

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
