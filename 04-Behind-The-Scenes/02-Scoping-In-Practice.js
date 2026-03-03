"use strict";
//-------------------------------------------------------------
// SCOPING IN PRACTICE
//-------------------------------------------------------------

/*

// This will not work: Since firstName0 is not in the execution context
const calcAge0 = function (birthYear) {
  const age = 2077 - birthYear;
  console.log(firstName0);
  return age;
};

console.log(calcAge0(1991));
const firstName0 = "peter";

*/

//---------------------------------------------------------------------
// This will work: Since firstName is in the current execution context
const calcAge1 = function (birthYear) {
  const age = 2077 - birthYear;
  console.log(firstName1);
  return age;
};

const firstName1 = "peter";
console.log(calcAge1(1991));

/*

peter
86

*/

//---------------------------------------------------
// SCOPING IN PRACTICE: ALl Scopes
//---------------------------------------------------

const calcAge = function (birthYear) {
  const age = 2037 - birthYear;

  const printAge = function () {
    let output = `${firstName} is ${age} years old scientist, born in ${birthYear}`;
    console.log(output); // Morty is 46 years old scientist, born in 1991

    // Creating a BLOCK SCOPE
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // <-- Ignores BLOCK, Since "var" is Function Scoped
      const firstName = "Bob"; // Creating New variable with same name as OUTER Scope's variable
      output = "NEW OUTPUT!"; // Reassigning OUTER SCOPE Variable

      const str = `Oh! You're a millinial, ${firstName}`;
      console.log(str); // Oh! You're a millinial, Bob

      // Functions are also BLOCK SCOPED: ONLY FOR "strict mode"
      const addValues = function (a, b) {
        return a + b;
      };
      console.log(addValues(2, 3)); // 5
    }
    // console.log(str); // Uncaught ReferenceError

    console.log(millenial); // true
    console.log(output); // NEW OUTPUT!

    // console.log(addValues(2, 3)); // Uncaught ReferenceError
  };

  printAge();

  return age;
};

//  This is available to be ACCESSED, as it has been defined in the global scope
const firstName = "Morty";

// Function call
console.log(calcAge(1991));
