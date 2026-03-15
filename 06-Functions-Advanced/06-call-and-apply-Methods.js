"use strict";
//---------------------------
// Call and Apply Methods: Function Methods
//---------------------------
/*
We would set the "this" keyword manually and Explicitely, a
nd learn why we'd want to do that.
*/

const luftansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book: function (passengerName, flightNum) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} on flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      traveller: `${passengerName}`,
    });
  },
};

luftansa.book("Peter", 345);
// Peter booked a seat on Lufthansa on flight LH345
luftansa.book("Carrie", 879);
// Carrie booked a seat on Lufthansa on flight LH879

console.log(luftansa); // {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2), book: ƒ}

//-------------------
/*
Let's say Lufthansa launched another airline
called Eurowings. Now, we also need the book() method on the new object
with the Eurowings details. SO, we DONT NEED TO COPY the book() method
again to the eurowings Object

*/

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// Since JS has first class functions, we can take the book() method
// and store it into a variable; And then use it AS a VALUE

//------------------------------------------
// COPYING the Function Method to a variable
const newBookingFunction = luftansa.book;

// ❌ THIS DOES NOT WORK
// newBookingFunction("Elliot", 675); // script.js:15 Uncaught TypeError: Cannot read properties of undefined (reading 'airline')

/*
🤔 However, we can ONLY call the method by telling JavaScript
what OBJECT it should use to use the "this" keyword (that exists in the newBookingFunction)
This means, while booking:

Luftansa Flight ---> "this" keyowrd should point to "luftansa" Object
Eurowings Flight ---> "this" keyowrd should point to "eurowings" Object

HOW DO WE DO THAT? ⁉️
 We can use 3 function methods to do that:

-> 1) call
-> 2) apply
-> 3) bind

(Call and Apply Methods: COVERED HERE in this SCript File)
*/

//-------------------------------------------------------------------
// 📞 The "Call" Method: HELPS Set the "this" keyword EXPLICITELY
//-------------------------------------------------------------------

//+++++++++++++++++++++++++++++++++++++++++++
// Args EXPLANIED in the call METHOD: (Object to use the "this" keyword on | ARG 2 | ARG 3)
//++++++++++++++++++++++++++++++++++++++++++

//..............
// EXAMPLE 1
//..............
newBookingFunction.call(eurowings, "Elliot", 675);
// Elliot booked a seat on Eurowings on flight EW675
console.log(eurowings); // {airline: 'Eurowings', iataCode: 'EW', bookings: Array(1)} ✔️

//..............
// EXAMPLE 2
//..............
newBookingFunction.call(luftansa, "Mr. Anderson", 999);
// Mr. Anderson booked a seat on Lufthansa on flight LH999

console.log(luftansa); // {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), book: ƒ} ✔️

//..............
// EXAMPLE 3
//..............
//-------------------
// Creating Another Airline:
const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};

//.............................
// Using the Call Method here:

newBookingFunction.call(swiss, "Bob", 777);
// Bob booked a seat on Swiss Airlines on flight LX777

//------------------------
// 🍉 The "Apply" Method
//--------------------------

// (NOT Much USED in Modern Days (as of 2026));
// BUT EXTREMLY USEFUL While Working with Legacy Codebases 🤓
//------------------------

// Works Exactly the SAME as the "call" method, but takes Args a bit Differently
//+++++++++++++++++++++++++++++++++++++++++++
// Args EXPLANIED in the apply METHOD:
// (Object to use the "this" keyword on | Takes in Data Array instead of a list )
//++++++++++++++++++++++++++++++++++++++++++

//..............
// EXAMPLE 1
//..............
const flightData = ["Damon", 888];

const jamaican = {
  airline: "Jamaican Airlines",
  iataCode: "JA",
  bookings: [],
};

newBookingFunction.apply(jamaican, flightData);
// Damon booked a seat on Jamaican Airlines on flight JA888

console.log(jamaican);
// {airline: 'Jamaican Airlines', iataCode: 'JA', bookings: Array(1)}

//------------------------
// 🍇 The "call" Method:
// Better way of using the function when you have Array as INPUT Data
//--------------------------

const flightDataNew = ["Stefan", 555];

// Using the spread operator
newBookingFunction.call(jamaican, ...flightDataNew);

console.log(jamaican);
// {airline: 'Jamaican Airlines', iataCode: 'JA', bookings: Array(2)}
