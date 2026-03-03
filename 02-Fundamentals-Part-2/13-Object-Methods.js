"use strict";
//-------------------------
// Object Methods
//------------------------
// IMPORTANT 🟢
/*
 - Function expression can be used as a property in an object, just like calcAge
 - "this" = the object on which the method is called
 -
 -

*/

//----------
// Object
//---------
// Any function that is attached to an object is called a "Method"

const userDetails = {
  firstName: "Peter",
  lastName: "Quinn",
  job: "Analyst",
  location: "Berlin",
  birthYear: 1985,
  friends: ["Carrie", "Saul", "Nicholas"],
  hasDriversLicense: true,
  // Any function within an OBJECT is called a METHOD
  // Without the "this" keyword
  calcAge1: function (birthYear) {
    return 2049 - birthYear;
  },

  // Using "this" keyword
  calcAge2: function () {
    // console.log(this); // LOGS THE WHOLE OBJECT
    return 2049 - this.birthYear;
  },

  // Create a new property "age" on the Object using "this"
  calcAge3: function () {
    this.age = 2049 - this.birthYear;
    return this.age;
  },

  // Challenge: Add Summary method
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge3()}-year old ${
      this.job
    } and has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

console.log(userDetails.calcAge1(1985)); // 64
console.log(userDetails["calcAge1"](1985)); // 64

//----------------------
// The "this" Keyword
//---------------------
// The "this" keyword is the complete object itself on which the method is called

console.log(userDetails.calcAge2()); // 64

// Accessing the "age" property that we just added using the calcAge3 method
console.log(userDetails.calcAge3());
console.log(userDetails.age); // 64

//----------------------
// Challenge
//---------------------
// "Peter is a 64-year old Analyst, and he has a drivers license"

console.log(userDetails.getSummary());
// Peter is a 64-year old Analyst and has a drivers license

// IMPORTANT NOTE
console.log(typeof new Array()); // Object: Since Arrays are also Objects
// Thats why they too have methods (push, unshift, pop, shift, indexOf, includes)
