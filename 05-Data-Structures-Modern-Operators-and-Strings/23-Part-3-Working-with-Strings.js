"use strict";
//-----------------------------
// Working with Strings PART-3
//-----------------------------
/*

Covered here (Total 5)
1) split() -> One of the most powerful string methods
2) join()
3) padStart()
4) padEnd()
5) repeat()

For all methods, check out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


*/

//------------------
// ✨ 1) split()
//----------------
// Allows us to split a string into multiple parts based on a divider string
// and return an Array
//-----------------------------------------
console.log(`A+very+nice+string`.split("+")); // (4) ['A', 'very', 'nice', 'string']
console.log("Morty Smith".split(" ")); // (2)[("Morty", "Smith")];

// Using Destructuring to assign values
const [firstName, lastName] = "Morty Smith".split(" ");
console.log(firstName, lastName);

// You can also use the slice() Method for it; but it would be very complicate
// Plus, with longer string --- that would be almost impossible

//-----------------
// ✨ 2) join()
//-----------------
// Its basically the opposite of split()
// USED to Join Array Items as one Single String
//-----------------------------------------
// EXAMPLE
// Make the lastName UpperCase and Also add "Mr." in the beginning

const newName = ["Mr.", firstName, lastName.toUpperCase()].join("-");
console.log(newName); // Mr.-Morty-SMITH

//----------------------------------------------------------------
// COMPLEX EXAMPLE: Captilized Name: Capitalize the first Letter of name
//----------------------------------------------------------------
// Solution 1: using slice()
const capitalizeName = function (name) {
  const nameArray = name.split(" ");
  const namesUpper = [];

  for (const eachName of nameArray) {
    namesUpper.push(eachName[0].toUpperCase() + eachName.slice(1));
  }
  return namesUpper.join(" ");
};

console.log(capitalizeName("jessica ann smith davis"));

// Solution 2: Using replace()
const capitalizeNameNEW = function (name) {
  const nameArray = name.split(" ");
  const namesUpper = [];

  for (const eachName of nameArray) {
    namesUpper.push(eachName.replace(eachName[0], eachName[0].toUpperCase()));
  }
  return namesUpper.join(" ");
};

console.log(capitalizeNameNEW("morty smith")); // Morty Smith

//-----------------
// ✨ 3) padStart()
//-----------------
// Padding a string
const msg = "Go to GATE 12";

// msg.padStart(arg1(Complete length of string), arg2(padding character))
console.log(msg.padStart(25, "+"));
// ++++++++++++Go to GATE 12

console.log("Morty".padStart(25, "*"));
// ********************Morty

//-----------------
// ✨ 4) padEnd()
//-----------------
console.log("Morty".padStart(25, "*").padEnd(35, "+"));
// ********************Morty++++++++++

//---------------------------------
// ⁉️ Real-World EXAMPLE of padStart()
//----------------------------------
// When you see a credit card number, you never see the entire number
// usually we see the last 4 digits, and masks the rest

const maskCreditCard = function (number) {
  // const str = number + ""; // This converts it to string; TYPE COERCSION
  const str = String(number);
  const lastFourDigits = str.slice(-4);
  return lastFourDigits.padStart(str.length, "*");
};

console.log(maskCreditCard("2345678234516524")); // ************6524
console.log(maskCreditCard(5268263473593)); // *********3593

//-----------------
// ✨ 5) repeat()
//-----------------
// Simply allows us to repeat the same string multiple times
console.log("Morty".repeat(2)); // MortyMorty

// EXAMPLE 1
// Let's say we've bad weather and all the flights are delayed
const weatherMsg = `Bad Weather!....All flights are delayed 😐 | `;
console.log(weatherMsg.repeat("4"));

/*

Bad Weather!....All flights are delayed 😐 | Bad Weather!....All flights are delayed 😐 | Bad Weather!....All flights are delayed 😐 | Bad Weather!....All flights are delayed 😐 | 

*/

// EXAMPLE 2
// Due to bad weather, there are many planes delayed to take off

const planesInLine = function (numPlanes) {
  return `There are ${numPlanes} planes in line ${"🛩️".repeat(numPlanes)}`;
};

console.log(planesInLine(3));
// There are 3 planes in line 🛩️🛩️🛩️

console.log(planesInLine(10));
// There are 10 planes in line 🛩️🛩️🛩️🛩️🛩️🛩️🛩️🛩️🛩️🛩️
