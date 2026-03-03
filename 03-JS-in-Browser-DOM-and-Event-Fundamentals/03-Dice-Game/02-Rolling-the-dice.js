"use strict";
//-----------------------
// Rolling the dice
//-----------------------

// selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Variable to hold the current score
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate a random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNumber}.png`;
  //   console.log(diceNumber);

  // 3.) If the dice is not 1
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to the next player
  }
});
