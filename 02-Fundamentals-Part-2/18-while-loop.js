"use strict";
//-----------------------------------
// "while" Loop
//-----------------------------------
/*

Use Case of for Loop:
When we know exactly how many times the loop will have to run

Use Case of While Loop:
When we do not know how many times the loop has to run, we use "while loop"
OR Even if there is no need for the loop to run


*/

//-----------------------------------------------------
// for loop runs as long as the the condition is TRUE
//----------------------------------------------------
for (let rep = 1; rep <= 4; rep++) {
  console.log(`Lifting weight: ${rep}`);
}

/*

Lifting weight: 1
Lifting weight: 2
Lifting weight: 3
Lifting weight: 4

*/

//---------------
// while loop
//--------------
let rep = 1;
while (rep <= 4) {
  console.log(`WHILE: Lifting weight: ${rep}`);
  rep++;
}

/*

WHILE: Lifting weight: 1
WHILE: Lifting weight: 2
WHILE: Lifting weight: 3
WHILE: Lifting weight: 4

*/

// for loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`FOR: Lifting weights repetition ${rep} 🏋🏻‍♀️`);
}

// WHILE
let repeatCounter = 1;
while (repeatCounter <= 5) {
  console.log(`WHILE: Lifting weights repetition ${repeatCounter} 🏋🏻‍♀️`);
  repeatCounter++;
}

//----------------------------------------------------
// while loop: Example: That does not need a counter
//---------------------------------------------------
// Use Case of While Loop:
// When we do not know how many times the loop has to run, we use "while loop"
// OR Even if there is no need for the loop to run

//------------------------------------------------------------
// EXERCISE: No idea how many times we need to roll the dice;
//------------------------------------------------------------
// Roll the dice until 6 is found

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log("You got a 6.. loops is about to end...");
  }
}
