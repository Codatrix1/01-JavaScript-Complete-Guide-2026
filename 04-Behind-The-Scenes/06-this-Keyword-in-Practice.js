"use strict";
//---------------------------------------------
// THE "this" KEYWORD in Practice
//---------------------------------------------

//--------------
// ⭐ 1) GLOBAL
//-------------
console.log(this); // Gives the Global "window" Obj

//-------------------------------
// ⭐⭐ 2) SIMPLE FUNCTION CALL
//--------------------------------
// Function without any Object attached to it
//----------------------------
// INSIDE A GENERAL FUNCTION
//----------------------------
// SIMPLE FUNCTION CALL 👉 this = undefined [ONLY VALID in STRICT MODE; Otherwise it points to ❗ window OBJECT which is very problematic]

const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  console.log(this); // undefined
  return age;
};

console.log(calcAge(1989));
/*
undefined
48
*/

//--------------------------------------------
// ⭐⭐⭐ 3) ARROW FUNCTIONS: NO OWN "this"
//-------------------------------------------
// METHOD 👉 this = <this of the surrounding function [lexical this]>
//------------------------
// INSIDE ARROW FUNCTION: Point to the parent object,
// it does not get its own this keyword
//------------------------

const calcAgeArrow = (birthYear) => {
  const age = 2037 - birthYear;
  console.log(this); // WINDOW OBJECT
  return age;
};

console.log(calcAgeArrow(1991));

/*
WINDOW OBJECT: Uses the LEXICAL "this" keyword
46
*/

//--------------------------------------------
// ⭐⭐⭐⭐ 4)INSIDE AN OBJECT as a METHOD
//--------------------------------------------
// METHOD 👉 this = Points to the <OBJECT that is calling the method>
//----------
// OBJECT 1
//---------

const user = {
  firstName: "peter",
  birthYear: 1989,
  calcAge: function () {
    console.log(this); // "this" 👉  {firstName: 'peter', birthYear: 1989, calcAge: ƒ}
    return 2037 - this.birthYear;
  },
};

// "user" is the Object that is calling the METHOD: "user" is the owner of the method

user.calcAge(); // {firstName: 'peter', birthYear: 1989, calcAge: ƒ}

console.log(user.calcAge(1991));

// {firstName: 'peter', birthYear: 1989, calcAge: ƒ}
// 48

//-----------
// OBJECT 2
//----------
// Another Example: To show that the "this" keyword is dynamic

const rick = {
  birthYear: 1951,
};

rick.calcAge = user.calcAge;

// 🔥 Method BORROWING
console.log(rick.calcAge());

/*

{birthYear: 1951, calcAge: ƒ}
86

*/

const fn = user.calcAge;
fn();

// We are just copying the function to the "fn" variable, which remember, is just a plain old function with NO OBJECT attached to it. Thus, the "this" 👉 undefined

/*

undefined
Uncaught TypeError: Cannot read properties of undefined (reading 'birthYear')

*/

//--------------------------------------------
// ⭐⭐⭐⭐⭐ 5) EVENT LISTENER FUNCTIONS
//-------------------------------------------
// METHOD 👉 this = <DOM ELEMENT that the handler is attached to>

// THIS is Covered in the ADVANCED DOM Section, not here

//-------------------------------------------
// 🔴🟢 OTHER WAYS TO CALL A FUNCTION 🟢🔴
//------------------------------------------
// new , call, apply, bind [✔ LATER COVERED]
