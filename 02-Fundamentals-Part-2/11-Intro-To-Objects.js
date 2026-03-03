"use strict";

//-------------------------
// Introduction To Objects: 2nd DATA STRUCTURE
//------------------------
// IMPORTANT 🟢
/*
 - 
 - Object Literal Syntax: { KEY: VALUE } : 
 Because you are literally writing down the entire obj 
 -
 -      ARRAYS                      OBJECTS
   Order Matters              Order Does not matter
   Structured Data       Unstructured Data Storage

   Keys in object are also called "properties"

*/

// ARRAY
const peterArray = [
  "peter",
  "quinn",
  2049 - 1985,
  "analyst",
  ["Carrie", "Saul", "C-137"],
];

console.log(peterArray); // (5) ['peter', 'quinn', 64, 'analyst', Array(3)]

// Object
const personDetails = {
  firstName: "peter",
  lastName: "quinn",
  age: 2049 - 1985,
  job: "analyst",
  friends: ["Carrie", "Saul", "C-137"],
};

console.log(personDetails); // {firstName: 'peter', lastName: 'quinn', age: 64, job: 'analyst', friends: Array(3)}
