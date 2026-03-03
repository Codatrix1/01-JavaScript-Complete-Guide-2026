"use strict";
//-----------------------------------
// Looping Arrays | Break | Continue
//-----------------------------------
/*
Most used Examples for "for" loop:

- loop through Arrays

*/

const userArray = [
  "Peter",
  "Quinn",
  2037 - 1991,
  "analyst",
  ["Carrie", "Saul", "Nicholas"],
  true,
];

// console.log(userArray[0]);
// console.log(userArray[1]);
// console.log(userArray[2]);
// console.log(userArray[3]);
// ...

for (let i = 0; i < userArray.length; i++) {
  console.log(userArray[i], typeof userArray[i]);
}

/*
Peter string
Quinn string
46 'number'
analyst string
(3) ['Carrie', 'Saul', 'Nicholas'] 'object'
true 'boolean'
*/

//----------------------------------------
// EXAMPLE 1: First Method: without push
//---------------------------------------
// Create a new array that contains all the types of the elements
const typesArray = [];
for (let i = 0; i < userArray.length; i++) {
  typesArray[i] = typeof userArray[i];
}

console.log(typesArray);
// (6)[("string", "string", "number", "string", "object", "boolean")];

//-------------------------
// EXAMPLE 2: Using push
//-------------------------
// Create a new array that contains all the types of the elements

const typesArrayNEW = [];
for (let index = 0; index < userArray.length; index++) {
  typesArrayNEW.push(typeof userArray[index]);
}
console.log(typesArrayNEW);
// (6) ['string', 'string', 'number', 'string', 'object', 'boolean']

//-------------------------
// EXAMPLE 3
//-------------------------
// Create a new array that contains all the ages
// Common use case

const years = [1991, 2007, 1951, 2020];

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const ages = [];
for (let index = 0; index < years.length; index++) {
  ages.push(calcAge(years[index]));
}

console.log(ages); // (4) [46, 30, 86, 17]

//-------------------------
// Continue | Break
//-------------------------

// Continue: exit the current iteration of loop and continue the next one
// Break: compltely terminate the loop

// EXAMPLE: Continue: exit the current iteration of loop and continue the next one
// add only the elements in an array that are Strings

const userArrayOne = [
  "Peter",
  "Quinn",
  2037 - 1991,
  "analyst",
  ["Carrie", "Saul", "Nicholas"],
  true,
];

console.log("--- ONLY STRINGS ---");

const stringsOnlyArray = [];
for (let index = 0; index < userArrayOne.length; index++) {
  if (typeof userArrayOne[index] !== "string") continue;
  console.log(userArrayOne[index], typeof userArrayOne[index]);
  stringsOnlyArray.push(userArrayOne[index]);
}

console.log(stringsOnlyArray);

/*
--- ONLY STRINGS ---
Peter string
Quinn string
analyst string
(3) ['Peter', 'Quinn', 'analyst']

*/

//---------------------------------------------
// EXAMPLE: Break: compltely terminate the loop
//----------------------------------------------
// LOG no other item after we found a number

console.log("--- Break the Loop as Soon as a Number is found ---");

for (let index = 0; index < userArrayOne.length; index++) {
  if (typeof userArray[index] === "number") break;
  console.log(userArray[index], typeof userArrayOne[index]);
}

/*
--- Break the Loop as Soon as a Number is found ---
Peter string
Quinn string
*/
