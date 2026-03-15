"use strict";
//---------------------------
// Bind Method: Function Methods
//---------------------------
/*
⁉️ "bind" method ---> MORE IMPORTANT than "call" and "apply" Methods

Bind also allows us to manually set this keywords for any function call (Just as the call method)
Now,  difference is that bind does not immediately call the function.
Instead it returns a new function where this keyword is bound.
So it's set to whatever value we pass into bind.

*/

const luftansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  // 👋 Keep an Eye on Parameters/Argument Order
  book: function (flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} on flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      traveller: `${passengerName}`,
    });
  },
};

//......................................................................
// Let's say we want to use the book function for eurowings all the time
//......................................................................

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};

const jamaican = {
  airline: "Jamaican Airlines",
  iataCode: "JA",
  bookings: [],
};

const bookTickets = luftansa.book;

const bookEWfn = bookTickets.bind(eurowings);
console.log(bookEWfn); // RETURNS a function with "this" keyword always tied to eurowings

bookEWfn(671, "Damon"); // Damon booked a seat on Eurowings on flight EW671
console.log(eurowings); // {airline: 'Eurowings', iataCode: 'EW', bookings: Array(1)}

//.........................................................
// Similarly, we can use "bind" with the other Flights too
//.........................................................
const bookLXfn = bookTickets.bind(swiss);
const bookJAfn = bookTickets.bind(jamaican);

/*
..............................................................
👋 Taking it to another Level
We can also PRE-SET the Argument (Mind the Order)

🍇 USE CASE: We can use the bind method to ensure that all the flights are booked
through eurowings and the flight number is also same; we just gotta pass the passenger Name

✨ IMPORTANT USE Case ‼️‼️
Specifying parts of the argument/parameters beforehand is a common pattern called the PARTIAL APPLICATION
in Development Workflows
.........................................................
*/
const bookEW234 = bookTickets.bind(eurowings, 234); // PRE-SETTING PARAMS with bind:
bookEW234("Stefan"); // Stefan booked a seat on Eurowings on flight EW234
bookEW234("DB Cooper"); // DB Cooper booked a seat on Eurowings on flight EW234

/*
..............................................................
👋 👋 OTHER Use Cases of the Bind Method
1) When we use Objects Together with Event Listeners
.........................................................
*/

//...........................
// 🌟 USE CASE 1) With Event Listeners
//.........................

// 🤔🤔 IMPORTANT NOTE: In an Event Handler function, the this keyword is attached to the
// handler that's its attached. So, we neeed to specify the proper "this" keyword (Object) with the
// bind method; And thus the "this" keyword is set dynamically

// Bind can make sure that the "this" points to the correct required Object
// Plus, using "bind" method instead of "call" also makes sense, as we
// only need it to be called when the button is clicked, and not Automatically (like with call Method)

luftansa.numPlanes = 300; // Adding property to lufthansa Object

// Adding METHOD to lufthansa Object
luftansa.buyPlane = function () {
  console.log(this);
  this.numPlanes++;
  console.log(this.numPlanes);
};

// Borrowing the method from the lufthansa Object and Copying it to use with bind
const buyPlaneFunc = luftansa.buyPlane;

document
  .querySelector(".buy")
  .addEventListener("click", buyPlaneFunc.bind(luftansa));

/*
Clicking the button 8 Times, we get the OUTPUT:

{airline: 'Lufthansa', iataCode: 'LH', bookings: Array(0), numPlanes: 307, book: ƒ, …}
308
*/

//...........................
// 🌟🌟 USE CASE 2) PARTIAL APPLICATION: Means Pre-setting PARAMETERS
//.........................

/*
Many times while PARTIAL Application, we are NOT INTERESTED in the "this"
keyword, but we still use "bind"
*/
//........................................................
// EXAMPLE: General function that adds TAX to some value
//........................................................

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200)); // 220

// Let's say theres a Tax that we add all the time; Let;s create function for that

const addVAT = addTax.bind(null, 0.23);
// It Means: addVAT = value => value + value * 0.23

console.log(addVAT(100)); // 123

/*
🍇 Explained: Remember that "this" keyword is context / owner of the calling function. Bind allows you to pass value that will be this keyword when function is called. So basically you decide what is the value of this using bind method. The first argument is always value of "this". Then in the next parameter you specify default arguments that will be used when calling a method. 

So in your case 0.23 will be the default rate. So when you call addVAT(100) the 100 - is actually the value parameter because rate was already pre-defined using bind.

Technically speaking bind returns new function - wrapper function that calls your function with pre-defined value of this and other function parameters you provided.

*/

// Challenge: Rewrite the whole function above
// with the concept of Functions RETURNING Functions

const addTaxNew = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTaxNew(0.23)(100)); // 123
