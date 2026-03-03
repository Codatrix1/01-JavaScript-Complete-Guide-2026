//-------------------------------------
// The Conditional (TERNARY) Operator
//-------------------------------------

// Its similar to IF ELSE statement, but all in one line

// It has 3 parts
// Condition ? Do this : Else Do this

//-------------
// Example 1
//------------
const currentAge = 17;

currentAge >= 18
  ? console.log("You are of age")
  : console.log("You are NOT of age");

// You are NOT of age

//---------------------------
// Using Conditional OR Ternary Operator
//-------------------------
// ✨ USE CASE: Conditionally declare variable

const drink = currentAge >= 18 ? "wine 🍷" : "water 💧";
console.log(drink); // water 💧

//--------------------
// IF ELSE Statement
//--------------------
let drink2;
if (currentAge >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2); // water 💧

//------------------------------------------
// Using Conditional OR ternary Operator:
// in a template literal with an Expression
//------------------------------------------
const ageNow = 17;
console.log(`I like to drink ${ageNow >= 18 ? "wine 🍷" : "water 💧"}`);

// I like to drink water 💧
