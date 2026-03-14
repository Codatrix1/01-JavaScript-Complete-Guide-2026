"use strict";
//---------------------------------------
// Functions Accepting Callback Functions
//--------------------------------------
// ✔️✔️ JavaScript Uses CALLBACKS ALL THE TIME
//-------------------------------------------------
// ⁉️⁉️ WHY are Callback Functions used so much in JavaScript, and
// why are they so HELPFUL?
//-------------------------
/*
Advantage 1) 👉 Helps us to split our code easily (reusable and interconnected part
Advantage 2) 👉 BIGGEST Advantage: It allows us to create ABSTRACTION
It means that; In Our Code Example, we created a Level of Abstraction; This enables us to 
hide the code implementation bcoz we really dont care about all these details; This allows to 
think about problems at a HIGHER, and a more ABSTRACT Level.


---------------------------------------------------------------
The tranformer function that we've used in the code does not care how 
the string is transformed. It doesnt care about the level of details. So, we could have 
taken the code (written separately) and written it directly into the transformer.
But we created a NEW LEVEL of ABSTRACTION. And Our Transformer function really concerned about
transforming the input string ITSELF. NO MATTER HOW IT WORKS. The underlying
implmentation is handled by the lower level functions. 
*/

//----------------------------------------------------------
// Create a function that accepts another function as INPUT

// First Function: Function that replaces all the spaces in a given string
// and gives just ONE WORD instead.

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

console.log(oneWord("Hello there!")); // hellothere!

// Second Function: Function to transform the first word of the
// input string to the UPPER CASE

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  //   console.log(first, others);
  return [first.toUpperCase(), ...others].join(" ");
};

console.log(upperFirstWord("Hello There!")); // HELLO There!

//-----------------------------------------------------
// ✨✨ HIGHER ORDER Function: TRANSFORMER
//--------------------------------------------------
// We would just PASS the VALUE in the second argument
// and NOT CALL THE Function; transformer would call the function by itself

const transformer = function (str, fn) {
  console.log(`Original String; ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  // As per Last lecture: Functions can even have METHODS + PROPERTIES
  return `Transformed by: ${fn.name}`;
};

console.log(transformer("JavaScript is Awesome!", upperFirstWord));

/*
Original String; JavaScript is Awesome!
Transformed String: JAVASCRIPT is Awesome!
Transformed by: upperFirstWord
*/

console.log(transformer("JavaScript is Fun!", oneWord));
/*
Original String; JavaScript is Fun!
Transformed String: javascriptisfun!
Transformed by: oneWord
*/

//---------------------------------------------------------
// EXAMPLE 2: Adding callback Function to addEventListener (HIGHER ORDER FUNCTION)
//-------------------------------------------------------
// ✔️✔️ JavaScript Uses CALLBACKS ALL THE TIME

const hi5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", hi5); // 👋

//---------------------------------------------------------------------------
// EXAMPLE 3: Adding callback Function to forEach (covered in later section)
//-------------------------------------------------------------------------
["peter", "rick", "morty"].forEach(hi5); // 3 👋
