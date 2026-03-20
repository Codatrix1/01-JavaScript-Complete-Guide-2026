"use strict";

//.........................
// Looping Arrays: forEach()
//.........................

/*

✨⁉️🤔 Q: What is the difference between forEach() loop and the for of loop?
USE CASE: You cannot break out of the forEach loop; CONTINUE and BREAK Statements
DO NOT WORK in forEach() loop AT ALL!
For using BREAK or CONTINUE, you gotta use the for of loop.

*/

//...................................................
// Print msg for each movement for the bank account:
// Deposits and Withdrawals
//..................................................
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//.......................
// using the for of loop
//........................
for (const eachMov of movements) {
  if (eachMov > 0) {
    console.log(`You deposited ${eachMov}`);
  } else if (eachMov < 0) {
    console.log(`You withdrew ${Math.abs(eachMov)}`);
  }
}

// 🤔⁉️ Accessing the indexes/ counter variable of the array: using the for of

//.......................................................................
// ✨✨‼️‼️ ORDER OF THE ARGs Matter 🐦‍🔥 (index, currentElement)
//.......................................................................
for (const [idx, eachMov] of movements.entries()) {
  if (eachMov > 0) {
    console.log(`You deposited ${idx + 1}: ${eachMov}`);
  } else if (eachMov < 0) {
    console.log(`You withdrew ${idx + 1}: ${Math.abs(eachMov)}`);
  }
}

/*
You deposited 200
You deposited 450
You withdrew 400
You deposited 3000
You withdrew 650
You withdrew 130
You deposited 70
You deposited 1300

*/

/*
You deposited 1: 200
You deposited 2: 450
You withdrew 3: 400
You deposited 4: 3000
You withdrew 5: 650
You withdrew 6: 130
You deposited 7: 70
You deposited 8: 1300
*/

//.......................
// using forEach() ♻️: Its a HIGHER ORDER FUNCTION that accepts a callback
//.......................
// the forEach Method Loops over the array and execute the callback function every iteration;

console.log(`----- using forEach() -----`);

movements.forEach(function (eachMov) {
  if (eachMov > 0) {
    console.log(`You deposited ${eachMov}`);
  } else if (eachMov < 0) {
    console.log(`You withdrew ${Math.abs(eachMov)}`);
  }
});

/*
You deposited 200
You deposited 450
You withdrew 400
You deposited 3000
You withdrew 650
You withdrew 130
You deposited 70
You deposited 1300
*/

/*
🌟 Explained: 
Iteration 0: function (200)
Iteration 1: function (450)
Iteration 2: function (-400)
................ 
*/

// 🤔⁉️ What if we need access to a counter variable to access
// the index of the array?

//.......................................................................
// ✨✨‼️‼️ ORDER OF THE ARGs Matter 🐦‍🔥 (currentElement, index, array)
//.......................................................................

movements.forEach(function (eachMov, idx, array) {
  if (eachMov > 0) {
    console.log(`You deposited ${idx + 1}# ${eachMov}`);
  } else if (eachMov < 0) {
    console.log(`You withdrew ${idx + 1}# ${Math.abs(eachMov)}`);
  }
});

/*
You deposited 1# 200
You deposited 2# 450
You withdrew 3# 400
You deposited 4# 3000
You withdrew 5# 650
You withdrew 6# 130
You deposited 7# 70
You deposited 8# 1300

*/
