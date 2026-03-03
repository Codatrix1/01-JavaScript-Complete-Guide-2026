"use strict";

//---------------------------------------
// SCOPE AND THE SCOPE CHAIN
//---------------------------------------

/*

//-------------------------------------
// Each EXECUTION CONTEXT has 3 parts:
//-------------------------------------

👉🏻 Variable Environment
👉🏻 Scope Chain
👉🏻 this keyword





//-------------------------------------------------------------------------------
// ⭐ SCOPING: How in our program's variables are organized and accessed
// Where do variables live? OR Where can we access a certain variable, and where not

// ⭐ In JavaScript, we have something called LEXICAL SCOPING: Scoping is controlled by PLACEMENT of functions and blocks in the code
For example: A function within another function has access to variables in the parent function

// ⭐ SCOPE: Space or environment which a certain variable is DECLARED (variable env in case of functions)
In the case of functions, that's essentailly the variable environment which is stored in the EXECUTION CONTEXT

What's the difference between SCOPE AND VARIABLE ENV?
In the case of functions, its basically the Same

In JavaScript, there is the: 

--- GLOBAL Scope 
--- FUNCTION Scope 
--- BLOCK Scope

// ⭐ SCOPE OF A VARIABLE: Entire Region of our code where a certain variable can be ACCESSED

✨✨ SCOPE IS NOT EQUAL TO Scope of a Variable

*/

//-----------------------------
// 3 TYPES OF SCOPE
//-----------------------------

//...................
// 1) GLOBAL SCOPE
//.................

const name = "Peter";
const age = 23;
const currentYear = 2026;

// - The TOP-LEVEL Code
// - Outside of any function or block
// - Variables declared in global scope are AVAILABLE EVERYWHERE
// - Functions are just variables, so its also true for functions

//.....................
// 2) FUNCTION SCOPE
//....................

// Variables are accessible only INSIDE FUNCTION, and NOT Outside
// Also called a LOCAL SCOPE as Opposed to GLOBAL SCOPE
// It does not matter what kind of function we're using: All Create their own function scope; whether is the Function Expression, Function Declaration, or ARROW Functions

function calcAge(birthYear) {
  const now = 2037;
  const age = now - birthYear;
  return age;
}

// console.log(now); // ReferenceError ❌

//.........................
// 3) BLOCK SCOPE (Starting from ES6)
//.........................
// BLOCK -> Everything between the {} braces: such as the for loop or the if/else statements

const year = 1980;

if (year >= 1981 && year <= 1996) {
  const millenial = true;
  const food = "Paneer";
}

// console.log(millenial); // Reference ERROR ❌

// - Variables are accessible only INSIDE BLOCK(block scoped)
// - ONLY applies to ❗let and ❗const: They both are BLOCK Scoped
// - Functions are also block scoped (only in strict mode)

//-------------------------------------------
// -------- THE SCOPE CHAIN EXAMPLE --------
//--------------------------------------------

//----------------------------------------------------------
// This is called VARIABLE LOOKUP ⬆️🆙 IN THE SCOPE CHAIN

// Every variable in the inner COPE has access to variable from ALL OUTER SCOPES
// That's how the secondFn() has access to the "myName" and "age" variable from the outer scopes

const myName = "Peter"; // GLOBAL SCOPE : Grandparent SCOPE

const firstFn = function () {
  const age = 34; // Parent SCOPE

  // 1) SIBLING SCOPE
  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }

  // 2) SIBLING SCOPE
  const secondFn = function () {
    const job = "Analyst";
    console.log(`${myName} is a ${age} year old ${job}`); // Child SCOPE
    // Peter is a 34 year old Analyst

    console.log(millenial); // true
  };

  console.log(millenial); // true
  // For a variable declared with "var", BLOCK SCOPE DOES NOT APPLY AT ALL,
  // They Are Function SCOPED

  // let and const are BLOCK SCOPED -- VERY VERY IMPORTANT 💥

  secondFn();
};

firstFn();

//-------------------------------------------
// ----- SCOPE CHAIN EXAMPLE vs CALL STACK
//-------------------------------------------
const a = "Peter";
first();

function first() {
  const b = "Hello";
  second();

  function second() {
    const c = "Hi";
    third();
  }
}

function third() {
  const d = "Hey!";
  console.log(d + c + b + a); // REFERENCE ERROR: c is not defined (b is also not there)
}

/*

SCOPE CHAIN
Order in which functions are written in the code
has nothing to do with order in which functions are called


----------------- third() SCOPE
d = "Hey!"

a = "Peter"
first = <function>
third = <function>


----------------- second() SCOPE
c = "Hi!"

b = "Hello"
second = <function>

a = "Peter"
first = <function>
third = <function>


------------------ first() SCOPE
b = "Hello"
second = <function>

a = "Peter"
first = <function>
third = <function>

 
--------------------- GLOBAL SCOPE
a = "Peter"
first = <function>
third = <function>

*/

//-------------------------------------------
// ----- ⭐⭐ SUMMARY ⭐⭐
//--------------------------------------------

/*

-> Scoping asks the question - " Where do variables live?" OR "Where can we access a certain variable, and where not? "

-> There are 3 types of scopes in JavaScript - The Global Scope, The Function Scope and The Block Scope

-> Only "let" and "const" variables are BLOCK SCOPED. Variables declared with "var" end up in the closest function scope

-> In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written

-> Every scope always has access to all the variables from all its outer scopes. This is called scope chain

When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup.

-> The scope chain is a one way street; a scope will never ever have access to the variables of an inner scope; only of outer scopes

-> The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes;

-> The scope chain has nothing to do with the order of the functions where called. It does not affect the scope chain at all.


*/
