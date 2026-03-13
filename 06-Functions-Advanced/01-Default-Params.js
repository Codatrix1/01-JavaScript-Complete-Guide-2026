"use strict";
//---------------------------------
// Default Parameters in Functions
//---------------------------------
// In functions, sometimes, it good to have default parameters, so, we don't have
// to change them manually

//----------------------------
// Without the DEFAULT PARAMS
//---------------------------
// Function to create some data, and push it into
// some booking Array

const bookingsArray = [];

//----------------------
// ES5 Way: The OLD Way
//----------------------
const createBooking = function (flightNum, numPassengers, price) {
  numPassengers = numPassengers || 1;
  price = price || 199;
  const bookingObj = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price,
  };
  bookingsArray.push(bookingObj);
  return bookingObj;
};

console.log(createBooking("LH123"));

//-------------------------------
// ✨ ES6: With Default Params
//-------------------------------
const createBookingOne = function (flightNum, numPassengers = 1, price = 199) {
  const bookingObj = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price,
  };
  bookingsArray.push(bookingObj);
  return bookingObj;
};

console.log(createBookingOne("NH456"));
// {flightNum: 'NH456', numPassengers: 1, price: 199}

console.log(createBookingOne("NH456", 2, 800));
// {flightNum: 'NH456', numPassengers: 2, price: 800}

//--------------------------------------------------------
// ✨✨ ES6: With Default Params: With Dynmaic Calculation
//--------------------------------------------------------
const createBookingTwo = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  const bookingObj = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price,
  };
  bookingsArray.push(bookingObj);
  return bookingObj;
};

console.log(createBookingTwo("NH456"));
// {flightNum: 'NH456', numPassengers: 1, price: 199}

console.log(createBookingTwo("NH456", 4));
// {flightNum: 'NH456', numPassengers: 4, price: 796}

console.log(createBookingTwo("NH456", 7));
// {flightNum: 'NH456', numPassengers: 7, price: 1393}

//---------------------------------------------------------------------------
// NOTE: ⁉️ We cannot skip the agruments; if you really need it to be empty,
// just use "undefined" instead
//--------------------------------

console.log(createBookingTwo("NH456", undefined, 1000));
// {flightNum: 'NH456', numPassengers: 1, price: 1000}
