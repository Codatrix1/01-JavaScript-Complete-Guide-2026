"use strict";

//-------------------------------------------------------
// EXECUTION CONTEXT AND THE CALL STACK
//-------------------------------------------------------

// What is an execution context?

// Its and abstract concept
// Its an environment in which a piece
// javascript code is executed. Its like a box Stores all the necessary information
// for some code to be executed

// JavasScript code always executes in the execution context

// 👉🏻 Exactly one Execution Context: Default context, created for code
// that is not inside any function (top-level)

// 👉🏻 ONE Execution context per function: For each function call,
// a new execution context is created

/*
Now, when all functions are done executing, the engine will basically keep waiting
for callback functions to arrive so that it can execute these.

For example, a callback function associated with a click event.

And remember, that it's the event loop who provides these new callback functions.

*/

/*
 ________________  
|                |
|                |
|                |             
|________________|                              
|                |                                      
|   second()     |       JS ENGINE        
|________________|                              
|                |             
|   first()      |               
|________________|               
|                |
|                |
|    GLOBAL      |
|                |
|________________|

CALL STACK

//-------------------------------------
// Each EXECUTION CONTEXT has 3 parts:
//-------------------------------------

👉🏻 Variable Environment---> let, const, var, Functions, arguments object
👉🏻 Scope Chain Environment ---> Scope chain basically consists of
references to variables that are located outside of the current function.
And to keep track of the scope chain, it is stored in each execution context.
👉🏻 this keyword

IN ARROW Functions: ❌ this keyword, ❌ arguments object; everything else
is available. They use these two from their nearest parent, regular parent

*/

//--------------------------------
// COMPILED CODE STARTS EXECUTION
//--------------------------------

const name = "peter";

const first = function () {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();

console.log(x); // 3
