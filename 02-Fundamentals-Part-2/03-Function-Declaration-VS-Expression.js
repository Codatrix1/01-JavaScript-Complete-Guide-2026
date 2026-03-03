"use strict";

//------------------------------------------------
// Function Declaration VS Function Expressions
//------------------------------------------------

//--------------------------------------
// Function Declaration: Named function
//--------------------------------------
// Can be called anywhere in the code due to HOISTING

const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1); // 46

//------------------------------------------
// Function Expression (Anonymous Function)
//------------------------------------------
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2000);
console.log(age2); // 37

console.log(age1, age2);
