"use strict";
//-------------------------
// PRIMITIVES vs OBJECTS
// [Primitives VS Reference Types] in PRACTICE
//-------------------------------

// OBJECT REFERENCES IN PRACTICE (Shallow vs Deep)

//---------------
// PRIMITIVES
//--------------
let lastName = "Willams";
let newLastName = lastName;

lastName = "Davis";

console.log(lastName, newLastName); // Davis Williams

//-------------------------
// OBJECTS/REFERENCE TYPES
//-------------------------
/*

//--------------------------------------------------------------
   ❗Important  - Its a mis-conception that "const" are immutable. 
//--------------------------------------------------------------

Well, its TRUE for Primitive Values, but we can mutate it when 
it comes to OBJECTS or The REFERENCE Values. 

We are not changing the value
"identifier" in the Call Stack referencing to the HEAP Object.
We are infact changing the value in the HEAP itself.

*/

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 36,
};

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";

const marriedPerson = function (originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
};

const marriedJessica = marriedPerson(jessica, "Davis");

console.log("Before", jessica); // Before {firstName: 'Jessica', lastName: 'Davis', age: 36}
console.log("After", marriedJessica); // After {firstName: 'Jessica', lastName: 'Davis', age: 36}

// marriedJessica = { x: 99 }; // ❌ Uncaught TypeError: Assignment to constant variable.

//---------------------------------------------------
// HOW to CREATE A COPY of the OBJECT (Shallow COPY)
//--------------------------------------------------

const carrie = {
  firstName: "Carrie",
  lastName: "Mathison",
  age: 38,
  friends: ["Peter", "Saul"],
};

//------------------------------
// ⭐ SHALLOW COPYING OBJECTS
//------------------------------
// Using the SPREAD Operator: Shallow Copy
const carrieCopy = { ...carrie };
carrieCopy.lastName = "Wallace";

// ❌ There is still a problem. It only works on the 1st Level (PRIMITIVE). If we have another object, inside of an object, ..... the 2nd level object, or the inner object remains unchanged. So, it will still point to the same place in the memory HEAP.

//-------------------
// EXAMPLE
//--------------

carrieCopy.friends.push("Nicholas");
carrieCopy.friends.push("Dal Adar");

console.log(`Before`, carrie); // friends : (4) ['Peter', 'Saul', 'Nicholas', 'Dal Adar']
console.log(`After`, carrieCopy); // friends : (4) ['Peter', 'Saul', 'Nicholas', 'Dal Adar']

// While the primitive values are exactly copied, the OBJECT with the OBJECT that is the "friends" array still points to the same Object in the HEAP, so for both "carrie" and "carrieCopy" both arrays get updated with newly added friends by the "push" method

//---------------------------------
// ✨✨✨ DEEP COPY or CLONE
//--------------------------------

const carrieClone = structuredClone(carrie);

carrieClone.friends.push("Bob");
carrieClone.friends.push("Alice");

console.log(`Original`, carrie); // friends : (4) ['Peter', 'Saul', 'Nicholas', 'Dal Adar']
console.log(`Clone`, carrieClone); // friends : (6) ['Peter', 'Saul', 'Nicholas', 'Dal Adar', 'Bob', 'Alice']

/*
✨ DEEP CLONE: SAME EXAMPLE, Better Representatio: in 2026 Revisit: WORKS IN NEWER BROWSERS

const carrie = {
  firstName: "Carrie",
  lastName: "Mathison",
  age: 38,
  friends: ["Peter", "Saul"],
};

// const carrieCopy = { ...carrie };
// carrieCopy.lastName = "Wallace";

// carrieCopy.friends.push("Nicholas");
// carrieCopy.friends.push("Dal Adar");

// console.log(carrie, carrieCopy);

const carrieClone = structuredClone(carrie);

carrieClone.lastName = "Wallace";
carrieClone.friends.push("Alice");
carrieClone.friends.push("Bob");

console.log(carrie, carrieClone);


*/
//-------------------------------------------------------------------------------
//             PREVIOUS LECTURE NOTES (USED BEFORE 2022) --- JUST FOR REFERENCE
//------------------------------------------------------------------------------
//------------------------------
// ⭐ SHALLOW COPYING OBJECTS
//------------------------------
const peter = {
  firstName: "Peter",
  lastName: "Quinn",
  age: 35,
};
//---------------------------------------
// Merge Two objects: 💥 Object.assign()
//---------------------------------------
const peterCopy = Object.assign({}, peter);

console.log(peterCopy); // {firstName: 'Peter', lastName: 'Quinn', age: 35}

peterCopy.lastName = "Smith";

console.log("Before:", peter); // Before: {firstName: 'Peter', lastName: 'Quinn', age: 35}
console.log("After:", peterCopy); // After: {firstName: 'Peter', lastName: 'Smith', age: 37}

// ❌ There is still a problem. It only works on the 1st Level. If we have another object, inside of an object, .....   the 2nd level object, or the inner object remains unchanged. So, it will still point to the same place in the memory  HEAP. Thus, we say that, Object.assign({}, objectName) only creates a shallow copy, and NOT A DEEP CLONE of the original  Object ❌

const carrieOLD = {
  firstName: "Carrie",
  lastName: "Mathison",
  age: 38,
  friends: ["Peter", "Saul"],
};

const carrieNEW = Object.assign({}, carrieOLD);

carrieNEW.lastName = "Smith";
carrieNEW.friends.push("Brody");
carrieNEW.friends.push("Mike");

console.log("Before:", carrieOLD);
// Before: {firstName: 'Carrie', lastName: 'Mathison', age: 38, friends: (4)['Peter', 'Saul', 'Brody', 'Mike']}

console.log("After:", carrieNEW);
// Before: {firstName: 'Carrie', lastName: 'Smith', age: 38, friends: (4)['Peter', 'Saul', 'Brody', 'Mike']}

/*
//-----------------------------------
❗❗ To Make DEEP CLONE of an Object, We use an External Library - 
🔥 Lodash  It has a lot of other helpful functions, 
which we will use in the future sections
*/
