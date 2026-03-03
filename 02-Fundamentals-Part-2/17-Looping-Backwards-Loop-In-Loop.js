"use strict";
//-----------------------------------
// Looping Bcakwards and Loops in Loops
//-----------------------------------
const userArray = [
  "Peter",
  "Quinn",
  2037 - 1991,
  "analyst",
  ["Carrie", "Saul", "Nicholas"],
  true,
];

// Forward Looping: Most used
for (let index = 0; index < userArray.length; index++) {
  console.log(userArray[index]);
}

// Looping backwards
for (let index = userArray.length - 1; index >= 0; index--) {
  console.log(userArray[index]);
}

/*

5 true
4 (3) ['Carrie', 'Saul', 'Nicholas']
3 'analyst'
2 46
1 'Quinn'
0 'Peter'

*/

//---------------------
// Loop within a loop
//--------------------
for (let index = 1; index <= 3; index++) {
  console.log(`--- Starting exercise ${index} 🏋🏻‍♀️----`);
  for (let i = 1; i <= 5; i++) {
    console.log(`Lifting weights rep ${i}`);
  }
}

/*
--- Starting exercise 1 🏋🏻‍♀️----
Lifting weights rep 1
Lifting weights rep 2
Lifting weights rep 3
Lifting weights rep 4
Lifting weights rep 5
--- Starting exercise 2 🏋🏻‍♀️----
Lifting weights rep 1
Lifting weights rep 2
Lifting weights rep 3
Lifting weights rep 4
Lifting weights rep 5
--- Starting exercise 3 🏋🏻‍♀️----
Lifting weights rep 1
Lifting weights rep 2
Lifting weights rep 3
Lifting weights rep 4
Lifting weights rep 5

*/
