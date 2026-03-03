"use strict";
//-------------------------
// Introduction To Arrays
//------------------------
// IMPORTANT 🟢
/*
 - Two Most important Data Structures in JavaScript: Arrays and Objects
 - Only primitive values are IMMUTABLE
 - Arrays are MUTABLE since they are not primitive values
 - The whole array cannot be replaced since they are assigned with let, const, or var
   Only the elements can be mutated with some kind of logic

*/

//--------------------
// Creating Arrays:
//-------------------
const years = new Array(1991, 1989, 1951);
console.log(years); // [1991, 1989, 1951]

const friendsList = ["Rick", "Morty", "Beth"];
console.log(friendsList); // (3)["Rick", "Morty", "Beth"];

// Accessing array items
console.log(friendsList[0]); // Rick
console.log(friendsList[1]); // Morty

//------------------------------
// Getting the length of array
//------------------------------
console.log(friendsList.length); // 3

//----------------------------------
// Getting the last item in an array
//---------------------------------
console.log(friendsList[friendsList.length - 1]); // Beth

//-----------------------------------------
// Mutating the array (Only the elements)
//-----------------------------------------
// ✨ Array is NOT A PRIMITIVE VALUE, So it can be Mutated
friendsList[2] = "C-137";
console.log(friendsList); // ['Rick', 'Morty', 'C-137']

// friendsList = ["Bob", "Peter"]; // Not possible

//-------------------
// MORE EXAMPLES
//------------------
const details = ["peter", "quinn", 2049 - 1985, "analyst", friendsList];

console.log(details); // (5) ['peter', 'quinn', 64, 'analyst', Array(3)]

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsList = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calcAge(yearsList[0]),
  calcAge(yearsList[1]),
  calcAge(yearsList[2]),
  calcAge(yearsList[3]),
  calcAge(yearsList[yearsList.length - 1]),
];

console.log(ages); //(5) [47, 70, 35, 27, 19]
