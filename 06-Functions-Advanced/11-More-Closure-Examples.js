"use strict";
//------------------------
// More Closure Examples
//-----------------------
/*
Both examples are gonna demonstrate that we DO NOT need 
to return a function from within another function in order 
to create a CLOSURE
*/

//.....................
// 🍇 Example 1
//.....................

let f;

const g = function () {
  const a = 45;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 888;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 90

console.dir(f); // 0 : Closure (g) {a: 45}

// Re-assigning f function
h();
f(); // 1776

console.dir(f); // 0 : Closure (h) {b: 888}

/*
When ths f() function is called the g() function has already finished executing.
However, the f() function has already closed over the variable env of g();
and thus, it able to access the variable "a" ;

Same thing happens with the h() function. The f() function now CLOSED Over the
variable env of h(). And can access the "b" varible using CLOSURE.
*/

//.....................
// 🍉 Example 2
//.....................
// Timer is also a great example to see a CLOSURE in action
// where we do not need to RETRUN a Function.

const boardPassengers = function (numPassengers, waitTime) {
  const perGroup = numPassengers / 3;

  // The function will execute after defined milliseconds for example 1000ms = 1 sec
  setTimeout(function () {
    console.log(`We are now boarding all ${numPassengers}`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, waitTime * 1000);

  console.log(`Will start boarding in ${waitTime} seconds`);
};

const perGroup = 1000;
// This is to state that Clousure has Priority over the scope chain. If that's wasnt
// the case the perGroup value would be taken as 1000 (as above) and not 180;

boardPassengers(180, 5);

/*
Will start boarding in 5 seconds
We are now boarding all 180
There are 3 groups each with 60 passengers
*/

/*
When ths boardPassengers() function has already finished executing, the setTimeout()
function ran completely imdependently. But still the callback function within the setTimeout()
function was able to access all the variable that was in the Variable Environment in which it was created. These are numPassengers and waitTime (the args).


*/
