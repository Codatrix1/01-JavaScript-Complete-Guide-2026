"use strict";
//----------------------------------------------------------------------------
// VARIABLE ENVIRONMENT: HOISTING AND THE TDZ (Temporal Dead Zone)
//----------------------------------------------------------------------------
/*

// EXECUTION CONTEXT has 3 parts

1. Variable Environment  ⭐  <---------
2. Scope Chain
3. "this" keyword

Hoisting Happens in the variable environment

⭐ Hoisting - Makes some types of variables accessible/usable in the code before they are actually declared. 
"Variables lifted to the top of the scope chain"

-> Behing The Scenes

Before Execution, code is scanned for variable declarations, 
and for each variable, a new property is created in the VARIABLE ENVIRONMENT OBJECT. 
It happens in the CREATION PHASE in the Execution Context.


//---------------------------------
// ----⭐ HOISTING TABLE ⭐ ----
//---------------------------------

//
//
// TDZ - Temporal Dead Zone
//
//                              HOISTED          INITIAL VALUE            SCOPE
//
//
// function declaration        ✔ YES           ACTUAL FUNCTION           BLOCK (strict mode)
//                                                                       FUNCTION (sloppy mode)
//
// var variables               ✔ YES           undefined                Function Scoped
//
// let/const                   ❌ NO         <uninitialized>, TDZ       Block Scoped
//                        (Technically, yes,
//                        but not in practice)
//
// function Expressions and Arrows                      🤗 Depends if using var or let/const
//
//
//
//
// ..................................
// Thus, we CANNOT USE FUNCTION EXPRESSIONS 
// BEFORE WE DECLARE THEM IN OUR CODE
//...................................

// A function expression or an arrow function created with "var" is set to undefined
// if used before declaring. But when they are created using "let" or "const", 
// they are not usable before they are declared in code due to TDZ

*/

// ---------------------------------------
// 🔥 TEMPORAL DEAD ZONE, LET AND CONST 🔥
// ---------------------------------------

const lastName = "quinn";

if (lastName === "quinn") {
  console.log(`${lastName} is an ${job}`);
  const age = 2077 - 1989;
  console.log(age);
  const job = "Analyst"; // Uncaught ReferenceError: Cannot access 'job' before initialization
  console.log(x); // Uncaught ReferenceError: x is not defined
}

//.......................
// Why is TDZ important?
//......................
//--- 1. It makes us easier to avoid and catch bugs:
// accessing variables before declaration is bad practice and should be avoided........
//--- 2. It makes const variables actually work, as we cannot cannot re-assign it before declaration

//...............................................
// Why was HOISTING created in the first place????
//................................................

// ..... 1. For using functions before declaration.. use them in some programming techniques like MUTUAL RECURSION
//......2. HOISTING could be implemented only by using "var" at that time...So "var" hoisting is just the byProduct
//...3. We cant remove this feature now, and the LET and CONST are used to get around hoisting.
