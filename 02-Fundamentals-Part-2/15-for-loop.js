"use strict";

// Loops are a fundamental concept in JavaScript. They allow us to automate repetitive tasks

//-----------------------------
// The "for" loop - Iteration
//-----------------------------
/*

Use Case of for Loop:
When we know exactly how many times the loop will have to run

Use Case of While Loop:
When we do not know how many times the loop has to run, we use "while" loop"
OR Even if there is no need for the loop to run

*/

// console.log("Lifting weights 1 🏋🏻‍♀️");
// console.log("Lifting weights 2 🏋🏻‍♀️");
// console.log("Lifting weights 3 🏋🏻‍♀️");
// console.log("Lifting weights 4 🏋🏻‍♀️");
// console.log("Lifting weights 5 🏋🏻‍♀️");

// for loop keeps running while the condition is TRUE

//-------------------------------------------------
// INITIAL VALUE with let | CONDITION | INCREMENT
//-------------------------------------------------

for (let counter = 1; counter <= 5; counter++) {
  console.log(`Lifting weights repeat ${counter} 🏋🏻‍♀️`);
}

/*
Lifting weights repeat 1 🏋🏻‍♀️
Lifting weights repeat 2 🏋🏻‍♀️
Lifting weights repeat 3 🏋🏻‍♀️
Lifting weights repeat 4 🏋🏻‍♀️
Lifting weights repeat 5 🏋🏻‍♀️
*/
