"use strict";
//---------------------------------------------------
// REGULAR FUNCTIONS vs ARROW FUNCTIONS
//---------------------------------------------------

//------------------------------------------
// PITFALLS of the "this" keyword ❌
//------------------------------------------
// This will help decide, when to USE and when to AVOID "this"

// var firstName = "Morty";

const userDetails = {
  firstName: "Rick",
  birthYear: 1951,

  calcAge: function () {
    console.log(this); // ✔️ Refers to the "userDetails" OBJECT
    return 2077 - this.birthYear;
  },

  // 🔥 NEVER EVER USE AN ARROW FUNCTION AS A METHOD IN AN OBJECT
  greet: () => {
    console.log(this); // Here, "here" points to the Global Window Object
    console.log(`Hello ${this.firstName}`);
  },
};

userDetails.greet();
console.log(this.firstName); // undefined
console.log(window.firstName); // undefined

//---------------------------------
// 🔴 Function INSIDE Of a METHOD
//--------------------------------
const userDetailsEnhanced = {
  firstName: "Rick",
  birthYear: 1951,

  calcAge: function () {
    console.log(this); // ✔️ Refers to the "userDetails" OBJECT
    console.log(2077 - this.birthYear); // 126

    const isMillenial = function () {
      console.log(this); // undefined: Since this is just a regular function, where "this" is undefined
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996); // ❌ Uncaught TypeError
    };
    isMillenial();
  },
};

// userDetailsEnhanced.calcAge();

//-----------------------------------------
// 🟢 SOLUTION 1: Old Version - Pre - ES6
//----------------------------------------
const userDetailsEnhancedSolOne = {
  firstName: "Rick",
  birthYear: 1951,

  calcAge: function () {
    console.log(this); // ✔️ Refers to the "userDetails" OBJECT
    console.log(2077 - this.birthYear); // 126

    const self = this; // Works right due to the Scope Chain LOOKUP
    const isMillenial = function () {
      console.log(self);
      console.log(self.birthYear >= 1981 && self.birthYear <= 1996); // false
    };
    isMillenial();
  },
};

userDetailsEnhancedSolOne.calcAge();

//------------------------------------
// 🟢🟢 SOLUTION 2: New Version - ES6+
//-------------------------------------
// ->>> Using Arrow Function, as they uses the "this" keyword of the parent scope

const userDetailsEnhancedSolTwo = {
  firstName: "Rick",
  birthYear: 1951,

  calcAge: function () {
    console.log(this); // ✔️ Refers to the "userDetails" OBJECT
    console.log(2077 - this.birthYear); // 126

    const isMillenial = () => {
      console.log(this); // ✔️ Arrow fn: "this" points to parent Scope: Lexically: Inherits
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996); // false
    };
    isMillenial();
  },
};

userDetailsEnhancedSolTwo.calcAge();

//------------------------------------------------------------------------------
//.......NOT IMPORTANT...... More Modern way to Specify Multiple Parameters
// IN the previous LECTURE about the Call Stack, the functions
// get access to "this" keyword as well as

// the "arguments" keyword <-------

// ONlY availale in Regular Functions <-----
//.. This is useful if we want a function to accept MORE PARAMETERS , than SPECIFIED.
//------------------------------------------------------------------------------------

//----------------------
// 💥 Arguments Keyword
//---------------------
//.. This is useful if we want a function to accept MORE PARAMETERS , than SPECIFIED.
// ONLY AVAILABLE WITH REGULAR FUNCTIONS

const addValuesExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(addValuesExp(2, 5));
// 7
// Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]

console.log(addValuesExp(2, 5, 3, 4));
// 7
// Arguments(4) [2, 5, 3, 4, callee: (...), Symbol(Symbol.iterator): ƒ]

//----------------------------------------------------------------------------------
const addValuesArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

console.log(addValuesArrow(2, 3)); // Uncaught ReferenceError: arguments is not defined
