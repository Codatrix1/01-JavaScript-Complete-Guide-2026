"use strict";
//------------------------------------------------------
// Arrow Functions (ES6) (DO NOT GET own "this" keyword)
//------------------------------------------------------

//------------------------------------------
// Function Expression (Anonymous Function)
//------------------------------------------
const calcAge = function (birthYear) {
  return 2049 - birthYear;
};

console.log(calcAge(1951)); // 98

//----------------------------------------------
// Arrow Function (NO "this" Keyword available)
//----------------------------------------------
// IMPLICIT Return: Meaning we do not need to return explicitly
// Arrow functions DO NOT GET own "this" keyword

//------------
// Example 1
//------------
const calcAge2 = (birthYear) => 2049 - birthYear;

console.log(calcAge2(2000)); // 49

//-----------
// Example 2
//----------

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const yearsLeft = 65 - age;
  return `${firstName} will retire after ${yearsLeft} years`;
};

console.log(yearsUntilRetirement(1991, "Morty")); // Morty will retire after 19 years
console.log(yearsUntilRetirement(1981, "Rick")); // Rick will retire after 9 years
