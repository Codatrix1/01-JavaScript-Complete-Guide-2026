"use strict";

//---------------------------------------------------
// How Passing Arguments Works! Value vs. Reference
//--------------------------------------------------
/*
Its really important to understand how Objects and Primitives work 
in the context of functions.
*/

const flight = "LH234";
const flyerDetails = {
  fullName: "Peter Quinn",
  passportNumber: 62562526532,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.fullName = "Mr. " + passenger.fullName;

  if (passenger.passportNumber === 62562526532) {
    return "Successfully Checked In!";
  } else {
    return "Wrong passport";
  }
};

console.log(checkIn(flight, flyerDetails));

console.log(flight); // LH234
console.log(flyerDetails); // {fullName: 'Mr. Peter Quinn', passportNumber: 62562526532}

// Is the same as doing....
const flightNum = flight;
const passenger = flyerDetails;

/*
‼️ When we pass a reference type to a function, what is copied is the
reference to the Object in the memory heap; but they both point to the same
object in the memory; And thats what happnening in the checkIn() function, where
its called "passenger"

Sp, as in the function, we are manipulating the "passenger" objcet
it is exactly as manipulating the "flyerDetails" object. As they are 
the SAME OBJECT in the memory heap

IN SUMMARY
Passing a primitive type as an argumnet is same as creating a copy 
outside the function
On the other hand, when we pass an object to the function, it is just as
copying the object. SO, it also changes the original.

So, we need to be careful ⚠️ with this behavior as it can have
unforseeable consequences in large code bases, thats especally true when 
you work with multiple developers

*/

//-----------------------------
// Example Showing this Effect
//-----------------------------
const newPassport = function (person) {
  person.passportNumber = Math.trunc(Math.random() * 100000000000);
};

newPassport(flyerDetails);
console.log(checkIn(flight, flyerDetails)); // Wrong passport

// Here, two functions are manipulating the same Object
// SO that's creating a problem
// Simply put, the "person" object gets manipulated, and that also REFLECTS in
// our ORIGINAL flyerDetails object
// And then when we pass in that object in the checkIn function, that passport
// is no longer the same as original one!
// ‼️ BE AWARE of this issue!

/*
In Programming there are two terms often used:
-> Passing by Value
-> Passing by Reference

To clarify, JavaScrpt does not have a passing by Reference,
Only passing by Value, even if it looks like passing by Reference;

However, in languages like C++, you can pass by Reference to Value instead
of a Value itself. This works even with primitives, so you could pass a refrence to the
value five and then the oiginal value, outside of the value would change. 
This is called PASSING BY REFRENCE

BUT, JavaScript does not have pass by reference.
So, even if we are passing a reference, we are actually passing a value;
Its simply a value that contains a memory address, 

✨
Simply put, we PASS a Refrence to the Function, 
but we DO NOT PASS by Reference
✨✨
*/
