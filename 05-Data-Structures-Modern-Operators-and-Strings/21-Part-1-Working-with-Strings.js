"use strict";

//-----------------------------
// Working with Strings PART-1
//-----------------------------
/*

Covered here:
1) indexOf
2) lastIndexOf
3) slice


We know that Strings have primitives. So, why they have Methods?
Here's why: Whenever we call a method on a s Trsing, JavaScript auto-converts the
String Primitive to a String Object with the same content. And this allows us to use Methods
with String. 

This is called BOXING

It's because it takes our string and puts it into a Box, thats the OBJECT
JavaScript does like this

const stringBoxedAsObject = new String("Ankur") 


*/

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log("B737"[0]); // B

console.log(airline.length); // 16
console.log("B737".length); // 4

//------------------------------------
// String Methods (Just like Arrays)
//------------------------------------

//------------
// 1) indexOf [Simply put, it gets you the first occurance of]
//------------

// ✨ What's the USE CASE of indexOf method?
// Extract part of a string using the "slice" method; and the slice method needs indexes as args

// Gives us the first occurance
console.log(airline.indexOf("r")); // 6
console.log(airline.indexOf("Portugal")); // 8

// It's case sensitive
console.log(airline.indexOf("portugal")); // -1

//------------
// lastIndexOf [Simply put, it gets you the last occurance of]
//------------
console.log(airline.lastIndexOf("r")); // 10

// ✨ What's the USE CASE of indexOf method?
// Extract part of a string using the "slice" method; and the slice method needs indexes as args
// thus its very beneficial to figure out the index of part of a string and extract that;

//------------------
// 2) slice method
//-----------------
console.log(airline.slice(4)); // Air Portugal

// Here, 4 is the begin param.

// The position where the extraction will start.
// The result "Air Portugal" is called a sub-string; since its a part of the original string
// This does not change the underlying string; since we cant change PRIMITIVES i.e Strings
// To use this, we need to assign the result to a variable

//----------------------------------------
// We can also specify the end parameter (Note that the result does not include the
// index value of the 2nd param, so, in the below example, P is having the 8th index, when we specify the end param as 9)
//--------------------------------------
console.log(airline.slice(4, 9)); // Air P
console.log(airline.slice(4, 9).length); // 5; that's 9-4

// Many times we do not know what String we would receive
// Let's try to extract the first word of the string we've without knowing any
// of the indexes

const airlineOne = "TAP Air Portugal";

// EXAMPLE 1: Extracting the "first word in an unknown string"
console.log(airlineOne.slice(0, airlineOne.indexOf(" "))); // TAP

// EXAMPLE 2: Extracting the "last word in an unknown string"
console.log(airlineOne.slice(airlineOne.lastIndexOf(" ") + 1));

// EXAMPLE 3: Extract from the end (using a negative argument)
console.log(airlineOne.slice(-2)); // al

// EXAMPLE 4: Extract from the end and also stop (using a first param and negative end param)
console.log(airlineOne.slice(0, -4)); // TAP Air Port

//---------------------------------------------------
// Write a function that receives an airplane seat and logs to the console that
// whether it is a middle seat or not!
// For instance, the B and the E are middle seats in Airbus A320 and Boeing737
//------------------------------------------------

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  if (seat.slice(-1) === "E" || seat.slice(-1) === "B") {
    return `Its a middle seat!`;
  } else {
    return `Its not a middle seat`;
  }
};

console.log(checkMiddleSeat("11B")); // Its a middle seat!
console.log(checkMiddleSeat("23C")); // Its not a middle seat
console.log(checkMiddleSeat("3E")); // Its a middle seat!

//-------------------------------------------------------------------
// 📦 BOXING: JavaScript Converting String Primitive to String Object;
// and that's why it has METHODS
//--------------------------------

console.log(new String("Ankur")); // String {'Ankur'}
console.log(typeof new String("Ankur")); // object

// When the operation is complete, JS converts the Object to a regular Primitive String

// All String Method return PRIMITIVES, even if called on a String OBJECT
// Example
console.log(typeof new String("Sinha").slice(-1)); // string
