"use strict";
//-----------------------------
// Working with Strings PART-2
//-----------------------------
/*

Covered here (Total 10 + Bonus: REGEX):
1) toUpperCase()
2) toLowerCase()
3) trim()
4) trimStart() ---> ES2019, 
5) trimEnd() ----> ES2019
6) replace()
7) replaceAll() ---> ES2021

Bonus: Using REGEX (with replace()) instead of replaceAll()

There are three SIMPLE Methods that return Booleans
1) includes()
2) startsWith()
3) endsWith()

*/

const airline = "TAP Air Portugal";

//---------------------
// Working with cases
//-------------------
// ✨ 1) toLowerCase
console.log(airline.toLowerCase()); // tap air portugal

// ✨ 2) toUpperCase
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

//---------------------------------------------------------------
// Real-world Example 1: To fix capitalization in a passenger name
//---------------------------------------------------------------
const passengerName = "moRTy";
const passengerNameLower = passengerName.toLowerCase();
const correctName =
  passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log(correctName); // Morty

// EXAMPLE: Create a function that takes a passenger name and returns the correct one
const correctNameFunc = function (name) {
  const lowerCasedName = name.toLowerCase();
  const rectifiedName =
    lowerCasedName[0].toUpperCase() + lowerCasedName.slice(1);
  return rectifiedName;
};

console.log(correctNameFunc("BEnJamin")); // Benjamin

//--------------------------------------------------------------------
// Real-world Example 2: Check user input email (Basically COMPARING)
//--------------------------------------------------------------------
// ✨ 3) trim()

const email = "hello@jessie.io";
const inputEmail = "   HeLLo@jessIE.io \n";
const lowerCasedEmail = inputEmail.toLowerCase();
const trimmedEmail = lowerCasedEmail.trim();
console.log(trimmedEmail); // hello@jessie.io

//----------------------------
// SHORTCUT: Chaining METHODS
//-----------------------------
const normalizedEmail = inputEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@jessie.io

console.log(email === normalizedEmail); //true

//----------------------------
// Replace Parts of Strings
//-------------------------
// ✨ 4) replace(), replaceAll()

// NOTE: replace METHOD is case sensitive

const priceGB = `233,89£`;
const priceUS = priceGB.replace(`£`, `$`).replace(",", ".");
console.log(priceUS); // 233.89$

//---------------
// MORE EXAMPLES
//---------------

// Example Use Case 1:

const announcement = `All passengers come to boarding door 12. Boarding door 12.`;
console.log(announcement.replaceAll("door", "GATE"));
// All passengers come to boarding GATE 12. Boarding GATE 12.

//----------------------------------
// 🌟🌟 We're Gonna USe REGEX (along with replace) to replace
// all the occurences of "door" with "GATE"
// "g" stands for GLOBAL
//-------------------------------------------
const usingRegexInsteadOfReplaceAll = announcement.replace(/door/g, "GATE");
console.log(usingRegexInsteadOfReplaceAll);
// All passengers come to boarding GATE 12. Boarding GATE 12.

// 5) includes()
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); // true

// 6) startsWith()
console.log(plane.startsWith("Airbus")); // true
console.log(plane.startsWith("Boeing")); // false

// 7) endsWith()
console.log(plane.endsWith("hello"));
console.log(plane.endsWith("neo"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus Family"); // Part of the new Airbus Family
}

// Example Use Case 2: Check if baggage of a Passenger is Allowed to be Checked In
// on the plane

const checkBaggage = function (item) {
  // First thing to do -> Convert to lowercase
  const baggage = item.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    return `Welcome aboard! ✔️`;
  } else {
    return `You cannot board ❌`;
  }
};

console.log(checkBaggage("I have a laptop, some Food, and a pocket Knife")); // Welcome aboard! ✔️
console.log(checkBaggage("Got some snacks and camera")); // You cannot board ❌
console.log(checkBaggage("Socks, chips, and a gun for protection")); // Welcome aboard! ✔️
