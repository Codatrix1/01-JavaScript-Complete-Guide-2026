"use strict";
//------------------------------------------------
// IIFE: Immediately Invoked Function Expressions
// Its a PATTERN, NOT FEATURE!
//-------------------------------------------------
/*
⁉️ IIFE
Sometimes in JavaScript, we need a function just to EXECUTE IMMEDITELY, RUN ONCE, 
AND THEN NEVER RUN AGAIN. 

USE CASE: 🍉🍉 🍇 We would need this in ASYNC/AWAIT ♻️

There, IIFE comes in super useful
*/

// Function Statement
const runOnce = function () {
  console.log("This will only run once!");
};

runOnce(); // This will only run once!

//..............................................
// IIFE: Immeditely Invoked Function Expression
//...............................................
// Tricking JS that our function is an EXPRESSION and not statement,
// so it can run immeditely and only once
// NOTE: We do not Name the function; Since we need it to run only ONCE
//....................

(function () {
  console.log("This will DEFINITELY RUN ONLY ONCE");
})(); // This will DEFINITELY RUN ONLY ONCE

// EXAMPLE: with Arrow Function
(() => console.log("This will ALSO RUN ONLY ONCE!"))();
// This will ALSO RUN ONLY ONCE!

//..............................................
// ⁉️🤔 Why do we require IIFE: Here's the reason
//...............................................
/*
We already know that functions creates scopes. Right?
And the ONE SCOPE DO NOT HAVE ACCESS Variables FROM  the INNER SCOPE.
This, the outer scope CANNOT Access Variables, and that
Data can Remain:

1) Private
2) Encapsulated

Many times we want to protect our data to accessed by
external scripts or other parts of the programs or for security and
DATA Privacy reasons.

That's why IIFE were created in the first place.
*/

(function () {
  console.log("This will DEFINITELY RUN ONLY ONCE");
  const isPrivate = 56;
})(); // This will DEFINITELY RUN ONLY ONCE

// console.log(isPrivate); // ✖️ Uncaught ReferenceError: isPrivate is not defined

{
  const isPrivate = 78;
  var isNotPrivate = 123;
}

/*
That's why we use const and let (which creates their own BLOCK Scope) 
and ABSOLUTELY AVOID using "var", since it can be accessed in the outer scope
*/
console.log(isNotPrivate); // 123
// console.log(isPrivate); // script.js:68 Uncaught ReferenceError: isPrivate is not defined
