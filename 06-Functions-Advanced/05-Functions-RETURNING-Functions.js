"use strict";
//-------------------------------------------------------------
// Functions RETURNING OTHER Functions: OPPOSITE OF CALLBACKs
//------------------------------------------------------------
// EXAMPLE: Creating a function that RETURNS a NEW Function

/*
🤔 Whats the POINT of RETURNING Other Functions within Functions?
Its extremly helpful in many cases
---> Used in FUNCTIONAL PROGRAMMING 

*/

const greet = function (msg) {
  return function (personName) {
    return `${msg} ${personName}`;
  };
};

const greeterSaysHello = greet("Hello!");

console.log(greeterSaysHello("Peter")); // Hello! Peter
console.log(greeterSaysHello("Carrie")); // // Hello! Carrie

// 👉 The "msg" parameter from the FIRST Function is getting used in the
// SECOND function due to CLOSURE Mechanism. Covered in the upcoming lecture

console.log(greet("Hola!")("Saul")); // Hola! Saul

//----------------------------------------------------------------
// CHALLENGE: Write the above function using only arrow functions
//----------------------------------------------------------------
const greetArrow = (msg) => (personName) => `${msg} ${personName}`;
console.log(greetArrow("Hello!")("Morty")); // Hello! Morty
