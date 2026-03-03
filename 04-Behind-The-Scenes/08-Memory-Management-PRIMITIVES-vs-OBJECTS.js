"use strict";

//----------------------------
// NEW LECTURE NOTES: 2025
//-------------------------
//--------------------------------------------------------------------
// PRIMITIVES vs OBJECTS: MEMORY MANAGEMENT
//--------------------------------------------------------------------

/*
.............................................
What does memory management actually mean? 
.............................................

Well, memory management in the context of JavaScript is how the JavaScript engine 
allocates space in memory for creating variables and later frees up that memory space, which was taken up by variables that are no longer needed. So that our 
applications run smoothly and efficiently without running out of memory.

So basically, this lecture tries to answer the question, 

............................................................
🤔 How and where are variables created in JavaScript????
...........................................................

Now, unlike lower level programming languages like C or C++ where developers 
actually have to manually reserve pieces of memory for their variables,
JavaScript automatically manages the memory behind the scenes for us.

This makes writing code a lot easier and faster, and it reduces the risk of 
introducing bugs like memory leaks.

............................................................
❓ But, how does it Work?
...........................................................
Every single value that we create in our app  goes through something
that we call a memory lifecycle.

So in this lifecycle, first, a piece of memory is allocated
whenever we create a new value.

For example, to assign that value to a new variable in our code.


🔥 STEP 1) Allocate memory

let temp = 23.7

Each time we declare a variable
with a new value, no matter if it's a single value or a huge object, 
the JavaScript engine will automatically reserve a piece of memory
to store that value.

🔥🔥 STEP 2) Use Memory (Part of the memory lifecycle)

temp = temp + 5
round(temp)

While the code is running, the value 
is written, red, and updated in the allocated 
piece of memory.


🔥🔥🔥 STEP 3) Release Memory
temp is removed from memory

When no longer needed, the value is deleted from memory
to free up resources. This released memory is used for new values.

.............................................................................
.............................................................................
.............................................................................


         JavaScript Engine
....................................
.               .                  .
.               .                  .
. Call stack    .   Memory HEAP    .
.               .                  .
. PRIMITIVES    .    OBJECTS       .
.               .                  .
....................................


WHERE IS MEMORY ALLOCATED >  WHERE IS MEMORY ALLOCATED >      
🔥 STEP 1) Allocate memory EXPLAINED

For PRIMITIVE 👇🏻 : Number, Strings, Booleans, undefined, null, BigInt, Symbol
Allocated in the JS ENGINE's Call Stack (Execution Context in which they are created)

For OBJECTS 👇🏻 : Object Literals, Arrays, Functions, etc, .....
Allocated in the JS ENGINE's HEAP

However there are some exceptions.
Modern JavaScript Engines may store an extremely long string
into the HEAP

Apart from it "References are also stored in the Call Stack"

What Does References mean?
*/

const firstName = "peter";
const currentAge = calcAge(1991);
let newCurrentAge = currentAge;
newCurrentAge++;

const geoLocation = {
  city: "New Delhi",
  country: "India",
};

const newGeoLocation = geoLocation;
newGeoLocation.city = "Gurgaon";

console.log(geoLocation); // Destroys the original value
// {city: 'Gurgaon', country: 'India'}

function calcAge(birthYear) {
  const now = 2077;
  const x = now - birthYear;
  return x;
}

/*

.                                 JavaScript ENGINE
-------------------------------------------------------------------------------------------- 

Global EC
firstName = "peter"
currentAge = 86
newCurrentAge = 87                              {city: ❌ 'New Delhi', country: 'India'}
geoLocation = 🔴 ------> Refers to the HEAP    {city: 'Gurgaon', country: 'India'}
newGeoLocation = 🔴 ---> Refers to the HEAP    {city: 'Gurgaon', country: 'India'}
calcAge = 🟢 ----------> Refers to the HEAP    ƒ calcAge(birthYear) {
.                                                 const now = 2077;
.                                                 const x = now - birthYear;
.                                                  return x;
.                                               }
.
☝🏻                                                 ☝🏻
CALL STACK                                        Memory HEAP
---------------------------------------------------------------------------------------------
*/

console.log(calcAge);

// OLD EDITION: LECTURE
//--------------------------------------------------------------------
// PRIMITIVES vs OBJECTS [Primitives VS Reference Types]
//--------------------------------------------------------------------

// ❗ ❗ VERY IMPORTANT............................

//  Here, we need to learn the difference about the Primitive Types and
// the Object Types, in the way
// they both stored in the Momory... It creates a lOT OF CONFUSION,
// so its really important to undertstand the concept very clearly.

// It is a very Practical Aspect

//--------------------
// With PRIMITIVES
//--------------------
// Number, Strings, Booleans, undefined, null, BigInt, Symbol

let age = 30;
let oldAge = age;

age = 31;

console.log(age); // 31
console.log(oldAge); // 30

//------------------------
// With OBJECTS
//-----------------------
// Object Literals, Arrays, Functions, etc, .....

const ankur = {
  firstName: "Ankur",
  age: 32,
};

const rick = ankur; // copying the object properties to a new object
rick.age = 27; // changing the age

console.log("Rick Details:", rick); // Rick Details: {firstName: 'Ankur', age: 27}
console.log("Ankur Details:", ankur); // Ankur Details: {firstName: 'Ankur', age: 27}
// We see that the "age" for "ankur" has also been re-assigned.. Lets see why

/*

             CALL STACK                                       Memory HEAP
----------------------------------                  ------------------------------------
Identifier       Address     Value                     Address          Value

                                          ===========>    D30F       {firstName: "Ankur", age: 32 ❌}
age----------/----> 0001     30        /                                                      27 ✔
            / \                       /
oldAge----/   \----> 0002     31    /
                                  /  
ankur --------> 0003 -------> D30F
            /
          /
rick --->   


Thus, "ankur" and "rick" ------------> both points to the same Object in the Memory HEAP, 
thus having the same address, with an altered property value ....... 
i.e. age: 27, for both "ankur" and "rick". 
This has huge implications, in JavaScript.


//--------------------------------------------------------------
   ❗Important  - Its a mis-conception that "const" are immutable. 
//--------------------------------------------------------------

Well, its TRUE for Primitive Values, but we can mutate it when 
it comes to OBJECTS or The REFERENCE Values. 

We are not changing the value
"identifier" in the Call Stack referencing to the HEAP Object.
 We are infact changing the value in the HEAP itself.



❗Important
--> There are 3 more topics for "HOW JAVASCRIPT WORK BEHIND THE SCENES" TOPICS FOR LATER ⌛

1.--- Prototypal Inheritance ---> Object Oriented Programmimg(OOP) with JavaScript
2.--- Event Loop --->  Asynchronous JavaScript: Promises, Async/Await anf AJAX
3.--- How DOM Really Works -----> Advanced DOM and Events

*/
