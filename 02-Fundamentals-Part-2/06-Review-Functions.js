"use strict";
//---------------------
// Reviewing Functions
//---------------------

//------------------
// Helper function
//------------------
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// Primary function
const yearsUntilRetirement = function (yearBornIn, firstName) {
  const age = calcAge(yearBornIn);
  const yearsLeft = 65 - age;

  if (yearsLeft > 0) {
    console.log(`${firstName} retires in ${yearsLeft} years`);
    return yearsLeft; // ! return immeditely terminates and exits the function
    console.log("Hello");
  } else {
    console.log(`${firstName} already retired! ✨`);
    console.log("Wubbalubbadubdub");
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Morty"));
// Morty retires in 19 years
// 19

console.log(yearsUntilRetirement(1960, "Rick"));
// Rick already retired! ✨
// Wubba lubba dub dub
// -1

//--------------------------------
// 3 Types of Function: Review
//------------------------------
// Function Declaration (Can be used before they are declared in code)
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function Expression (Anonymous) (✅ "this" keyword)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Functions ( NO ❌ "this" keyword)
const calcAge3 = (birthYear) => 2037 - birthYear;

//----------------------------------------------------------------
