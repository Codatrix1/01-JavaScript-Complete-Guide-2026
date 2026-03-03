"use strict";
//----------------------------------
// LECTURE 118: MAPS: Iteration ♻
//----------------------------------

//........................................................
// Although, we can use the set Method to add values to a MAP as "key", "value"......
// but it gets out of hand, when we have to populate a huge number of values or Objects to an Existing Map.
//...........................................

// ⭕ When creating a new Map, the below method should be preferred instead of using the set Method.
//
// Lets say, we want to write object into a Question/Answer Object----

//------------------------
// Array within the Array; The first one would be the key, and the second one would be the value
//-----------------------

const question = new Map([
  ["Question", "Who is the best scientist in the universe"],
  [1, "Rick Sanchez"],
  [2, "Morty Smith"],
  [3, "Beth Smith"],
  ["correct", 3],
  [true, "You're right! ✔️"],
  [(false, "❌ Wrong answer! Try again.")],
]);

console.log(question);

// ⭕ When Creating a new MAP from Scratch directly in the code, this is the preferred way to write ❗ In other cases, such as, When we keep adding elements, Programmtically using Code, then the set method is the way to go

// 🔴 NOTE: The above is the same type of structure, i.e. arrays within arrays, that we find in the Object when we use the Method Object.entries()

//---------------------------
// CONVERT OBJECT to MAP
//--------------------------
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(Object.entries(openingHours)); // (3) [Array(2), Array(2), Array(2)]

// Conversion
//🔴 VERY IMPORTANT TRICK -------- when we already have an Object, we can convert it to MAP
const objectToMap = new Map(Object.entries(openingHours));
console.log(objectToMap); // Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}

//.........................................................................
// ⭕ ITERATION in Maps -> REALLY REALLY, GOOD Use CASE of De-Structuring⚡🔴
//......................................................................
//
// 🔴 Important: As we know that Object -----> ❌ NOT ITERABLE , but in order to iterate over them, we convert it into Iterable using Object.entries()   --- But, in the case of MAPS, we can directly iterate over them in the same way using the for-of loop with [key, value] pairs.. See Below
// Quiz App
const quiz = new Map([
  ["Question", "Who is the best scientist in the universe"],
  [1, "Rick Sanchez"],
  [2, "Morty Smith"],
  [3, "Beth Smith"],
  ["correct", 3],
  [true, "You're right! ✔️"],
  [false, "❌ Wrong answer! Try again."],
]);

console.log(quiz.get("Question"));

for (const [key, value] of quiz) {
  if (typeof key === "number") console.log(`Answer: ${key}: ${value}`);
}

/*
Who is the best scientist in the universe
Answer: 1: Rick Sanchez
Answer: 2: Morty Smith
Answer: 3: Beth Smith

*/

// const ans = Number(prompt("Your Answer: "));
const ans = 1;
console.log(quiz.get(quiz.get("correct") === ans));
3;

//-----------------------
// CONVERT MAP TO ARRAY
//----------------------
console.log([...quiz]);

//--------------------
// SOME MORE METHODS
//--------------------
console.log([...quiz.entries()]);
// (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

console.log([...quiz.keys()]);
// (7) ['Question', 1, 2, 3, 'correct', true, false]

console.log([...quiz.values()]);
// (7) ['Who is the best scientist in the universe', 'Rick Sanchez', 'Morty Smith', 'Beth Smith', 3, "You're right! ✔️", '❌ Wrong answer! Try again.']
