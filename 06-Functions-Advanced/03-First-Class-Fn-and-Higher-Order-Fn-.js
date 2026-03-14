"use strict";

//---------------------------------
// First Class and Higher Order Functions
//--------------------------------
/*
JavaScript has first class functions with enables us to write 
higher order functions

FIRST CLASS FUNCTIONS
- JavaScript treats functions as FIRST-Class Citizes; Simply put, Functions in 
JavaScript are Treated as Values

Its Because
-> Functions are just another type of Objects in JavaScript; Since Objects are Values
Functions are Values too!

👉 1) That's why we can store functions
---- in variables OR 
---- Properties (in Object Methods)

👉 2) We can also pass functions as arguments to
other functions; 
Example -> Adding Event Listeners or Event Handles to DUMB Objects 

const greet = () => console.log("Hello, Peter")
btnClose.addEventListener("click", greet)]

👉 3) We Can Also RETURN Functions FROM Other Functions (very Useful)

👉 4) Also, REMEMBER,
Functions are Objcets in JS, and Many type of Objects in JS have Methods
like Array Methods; We also have FUNCTION METHODS (methods that we can call on 
functions)

EXAMPLE: call and bind Methods
counter.inc.bind(someOtherObject)


---------------------------
HIGHER ORDER FUNCTIONS
---------------------------
JS has first class functions, and that's why it has higher-order functions too

⁉️ Whats a HIGHER OREDER FUNCTION?
👉 A function that
- RECEIVES another function as an argument
- that RETURNS a new function, 
- or BOTH
👉 This is only possible becacuse of first-class functions 


//--------------------------------------------
// TYPE 1) Function that receives another function
//-------------------------------------------
const greet = () => console.log("Hello Peter");
btnClose.addEventListener("click", greet);

Here, 
‼️ addEventListener is a HIGHER ORDER FUNCTION
‼️ greet is a CALLBACK Function

In this case, the addEventListener function wil call the greet
callback Later. As Soon as the Click Event Happens..

Its like the greet function saying, Hey! Dont greet me yet. Call me back once
you're ready.

/--------------------------------------------
// TYPE 2) Function that RETURNS Another Function
//------------------------------------------------

function count() {
  let counter = 0;
  return function(){
    counter++;
  };
}

Its an advanced Function, and Also harder to understand

⁉️⁉️
 WHATS THE DIFFERENCE BETWEEN First Class Functions and HIGHER ORDER Functions?
Aren't they the same?
✨⁉️⁉️

NO! First Class Function is a feature that a progremming language 
either HAVE or DOES NOT HAVE. All it means that all functions are values. Its JUST A CONCEPT.

On the Other hand, we definitely have HIGHER ORDER Functions. And HIGHER 
Order Functions are POSSIBLE becxause the language supports FIRST CLASS Functions.
*/
