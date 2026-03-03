"use strict";

//------------------------------
// LOGICAL ASSIGNMENT OPERATOR
//-----------------------------
// ✨ THIS LECTURE HAS TWO VERSIONS: BOTH ARE SAME but Useful

/*
-> More modern than Nullish Coalescing Operator ??
-> Introduced in ES2021 ✨

*/

// Lets say we got the following data from some API
// and we want to add a default property numGuests

const restaurantOne = {
  name: "Capri",
  numGuests: 20,
};

const restaurantTwo = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

//------------------------------------------------------------------
// Using the OR || Operator to add numGuests: With Short Circuiting
//------------------------------------------------------------------
// restaurantOne.numGuests = restaurantOne.numGuests || 10;
// restaurantTwo.numGuests = restaurantTwo.numGuests || 10;

// console.log(restaurantOne); // {name: 'Capri', numGuests: 20}
// console.log(restaurantTwo); // {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

//---------------------------------------------------------------------
// Using the LOGICAL Assignment OR || Operator to add numGuests: ES2021
//---------------------------------------------------------------------
// Its a concise way to do the same thing
// It assigns a value to the variable, if the value is FALSEY

restaurantOne.numGuests ||= 15;
restaurantTwo.numGuests ||= 15;

console.log(restaurantOne);
console.log(restaurantTwo);

// ⁉️ It works well. EXCEPT in One Situation: with 0 and "" (Empty value)

//--------------------------------------------------------------------
// USING NULLISH COALESING with the LOGICAL OR || ASSIGNMENT OPERATOR
//--------------------------------------------------------------------
// Called Nullish Assignment Operator

const restaurantThree = {
  name: "Popeye's",
  numGuests: 0,
};

restaurantThree.numGuests ??= 12;
console.log(restaurantThree); // {name: "Popeye's", numGuests: 0}

//--------------------------------------------------------------------
// USING the LOGICAL AND (&&) ASSIGNMENT OPERATOR
//--------------------------------------------------------------------
// Assigns a value to the variable, if it is TRUTHY
// Example: Lets say, we want to Anonymous the restro owner name

const restaurantFour = {
  name: "Jollibees",
  owner: "Pablo",
};
restaurantFour.owner &&= "<ANONYMOUS>";
console.log(restaurantFour); // {name: 'Jollibees', owner: '<ANONYMOUS>'}

//----------------------------------------------
const restaurantFive = {
  name: "Grill In",
};
restaurantFive.owner &&= "<ANONYMOUS>";
console.log(restaurantFive); // {name: 'Grill In'}

//--------------------------------------------------------------------------------
// LECTURE 109: LOGICAL ASSIGNMENT OPERATOR 🟢 ES2021 (NEWLY ADDED CONTENT in 2021)
//--------------------------------------------------------------------------------

//---------------------------------
// 🔥 SHORT CIRCUIT EVALUATION 🔥
//---------------------------------
const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "Taste of Punjab",
  owner: "Ankur",
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1); // {name: 'Capri', numGuests: 20}
console.log(rest2); // {name: 'Taste of Punjab', owner: 'Ankur', numGuests: 10}

//---------------------------------------------
// 🟢 ES2021 🟢: LOGICAL ASSIGNMENT OR (||) OPERATOR
//---------------------------------------------
const rest3 = {
  name: "Capri",
  numGuests: 20,
};

const rest4 = {
  name: "Taste of Punjab",
  owner: "Ankur",
};

// OR Assignment Operator: EXCEPT 0 or undefined
rest3.numGuests ||= 10;
rest4.numGuests ||= 10;

console.log(rest3); // {name: 'Capri', numGuests: 20}
console.log(rest4); // {name: 'Taste of Punjab', owner: 'Ankur', numGuests: 10}

//------------------------------------------------------------------------------
// 🟢 ES2021 🟢: LOGICAL NULLISH ASSIGNMENT OR (||) OPERATOR: WORKS with 0 or undefined
//-------------------------------------------------------------------------------
const rest5 = {
  name: "Capri",
  numGuests: 0,
};

const rest6 = {
  name: "Taste of Punjab",
  owner: "Ankur",
  // numGuests: undefined
};

rest5.numGuests ??= 10;
rest6.numGuests ??= 10;

console.log(rest5); // {name: 'Capri', numGuests: 0}
console.log(rest6); // {name: 'Taste of Punjab', owner: 'Ankur', numGuests: 10}

//---------------------------------
// 🔥 SHORT CIRCUIT EVALUATION 🔥
//---------------------------------

const rest7 = {
  name: "Capri",
  numGuests: 0,
};

const rest8 = {
  name: "Taste of Punjab",
  owner: "Ankur",
};

rest7.owner = rest7.owner && "<ANONYMOUS>";
console.log(rest7); // {name: 'Capri', numGuests: 0, owner: undefined}

rest8.owner = rest8.owner && "<ANONYMOUS>";
console.log(rest8); // {name: 'Taste of Punjab', owner: '<ANONYMOUS>'}

//-----------------------------------------------------
// 🟢 ES2021 🟢: LOGICAL ASSIGNMENT AND (&&) OPERATOR
//-----------------------------------------------------
const rest9 = {
  name: "Capri",
  numGuests: 0,
};

const rest10 = {
  name: "Taste of Punjab",
  owner: "Ankur",
};

rest9.owner &&= "<ANONYMOUS>";
console.log(rest9); // {name: 'Capri', numGuests: 0}

rest10.owner &&= "<ANONYMOUS>";
console.log(rest10); // {name: 'Taste of Punjab', owner: '<ANONYMOUS>'}
