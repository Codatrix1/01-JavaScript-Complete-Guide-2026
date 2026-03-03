"use strict";
//-------------------------
// Dot VS Bracket Notation:
// -----> Use data from objcets and change data in objects
//------------------------
// IMPORTANT 🟢
/*
 - When to use Dot Notation: When the exact property name is to be used 
 - When to use Bracket Notation: When the property name has 
   to be COMPUTED via an Expression
 - 
 -
 -

*/

//-------------
// 🔴 Object
//-------------
const userDetails = {
  firstName: "peter",
  lastName: "quinn",
  age: 2049 - 1985,
  job: "analyst",
  friends: ["Carrie", "Saul", "Nicolas"],
};

console.log(userDetails);

// Dot notation
console.log(userDetails.lastName); // quinn
console.log(userDetails.location); // undefined: DOES NOT EXIST

//---------------------------------------------------------------
// Brackets notation: we can use expressions in square brackets
//-------------------------------------------------------------
// USE CASE of Bracket Notation (Used Very Often in Real World)

// 1) We can compute property name
// 2) While getting data from a server

/*

console.log(userDetails["lastName"]); // quinn

const nameKey = "Name";
console.log(userDetails[`first${nameKey}`]); // peter
console.log(userDetails[`last${nameKey}`]); // quinn

const question = prompt(
  "What do you want to know about the user: firstName, lastName, age, job, or friends"
);

if (userDetails[question]) {
  console.log(userDetails[question]);
} else {
  console.log(
    "The detail does not exist job: What do you want to know about the user: firstName, lastName, age, job, or friends"
  );
}

*/

//---------------------------------
// Adding a property to our object
//---------------------------------
userDetails.location = "Berlin";
userDetails["country"] = "Germany";

console.log(userDetails);

//------------
// Challenge
//------------
// peter has 3 friends, and Carrie is his best friend";

console.log(
  `${userDetails.firstName} has ${userDetails.friends.length} friends, and ${userDetails.friends[0]} is his best friend`,
); // peter has 3 friends, and Carrie is his best friend
