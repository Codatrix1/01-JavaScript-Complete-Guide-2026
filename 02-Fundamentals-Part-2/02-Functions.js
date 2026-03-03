"use strict";

//--------------
// Functions
//-------------

function logger() {
  console.log("My name is Rick!");
}

// invoking / calling/ running function
logger(); // My name is Rick!
logger(); // My name is Rick!

//--------------------------
// Function with Parameters
//--------------------------

function fruitProcesser(numApples, numOranges) {
  const juice = `Juice with ${numApples} apples and ${numOranges} oranges`;
  return juice;
}

const appleJuice = fruitProcesser(5, 0);
console.log(appleJuice); // Juice with 5 apples and 0 oranges

const appleOrangeJuice = fruitProcesser(2, 4);
console.log(appleOrangeJuice); // Juice with 2 apples and 4 oranges

//---------------------
// Built in function
//---------------------
const num1 = Number("23");
const num2 = +"45";

console.log(typeof num1); // number
console.log(typeof num2); // number

console.log(typeof console.log); // function
console.log(typeof fruitProcesser); // function
