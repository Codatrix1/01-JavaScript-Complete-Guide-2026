"use strict";
//...................
// Closures
//...................
/*
Concepts covered by Closures: All in One
- Execution Context
- Call Stack
- Scope Chain

🍇 Closure is NOT A Feature in JavaScript; Its a MECHANISM just happens automatically
We just need to recognize these situations.

.........Quick Summary..........

A function has access to the variable environment (VE)of the execution context 
in which it was created.
Closure: VE attached to the function, exactly as it was 
at the time and place the function was created

*/

const securedBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} travellers`);
  };
};

const booker = securedBooking();

booker();
booker();
booker();

/*
1 travellers
2 travellers
3 travellers
*/

console.dir(booker);

// We cannot access whatever is mentioned in the double brackets [[]].
// Closure also we cannot access.

/*
ƒ anonymous()
length: 0
name: ""
prototype: {}
arguments: (...)
caller: (...)
[[FunctionLocation]]: script.js:26
[[Prototype]]: ƒ ()
apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ arguments()set arguments: ƒ arguments()get caller: ƒ caller()set caller: ƒ caller()[[FunctionLocation]]: [[Prototype]]: Object[[Scopes]]: Scopes[0]
[[Scopes]]: Scopes[3]
0: Closure (securedBooking) {passengerCount: 3}
1: Script {securedBooking: ƒ, booker: ƒ}
2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

*/

/*
⁉️ Question 🤔: How is the booker() function able to retain the previous count if 
the securedBooking() function has already finished executing; and ideally 
it should NOT HAVE ACCESS to the passengerCount Variable.

Well, that happens due to CLOSURE

.......................
🌟 What is Closure ---> 
.........................
Closure makes a function remember all the variables
that existed at the function birthplace.

........................
⁉️ HOW CLOSURE WORKS??
........................
As per garbage collection rules, variables stored in the stack are destroyed as soon as the execution context pops off the call tack. That's usually the case.

There is however, one exception is the existence of a closure. If an object is reachable
by a closure, it cannot be garbage collected and will therefore stay in the heap indefinitely.

This actually applies to the objects in the heap and to variable environments that are 
stored in the stack as long as they're reachable by a CLOSURE.

So, the passengerCount variable still exists in the memory heap as its REACHABLE By Closure;
thats the only reason; Otherwise it would be really be gone!

♻️ Coming back to the original Question
How is the booker() function able to retain the previous count if 
the securedBooking() function has already finished executing? 

👋👋 Answer: Any function always has access to the variable environment of the execution context
in which the function was created. In the case of "booker()", it was created in the execution
context of secure booking; this gives the booker function access to the variable environment
that contains passengerCount variable.

Another way to say it: The booker function CLOSED Over ITS Parent Scope/VE; including the args
(although, we dont have any in the example)

Wrapping Up (Several definitios of Closure)
............................................
👉 A closure is the closed over variable env of the execution context in which a function
was created, even after that execution context is gone.

👉 a closure gives the function access to all the variables of its parent function.
So the function in which it is defined even after that parent function has returned.
So the function keeps a reference to its outer scope even after that outer scope is gone,
which basically preserves the scope chain throughout time.

👉 Analogy is that a closure makes sure that a function does never lose connection to the variables
that existed at the function's birthplace.It remembers the variables even after the birthplace is gone.
It's like a person who doesn't lose connection to their hometown. In this analogy, the person is the function and the hometown is the function's parent scope. And the function then doesn't lose the connection to the variables stored in this parent scope.

👉 Think of this attached variable environment as a backpack. So in this analogy, a function has a backpack, which it carries around wherever it goes. And this backpack contains all the variables
that were present in the environment in which the function was created.
Then whenever a variable can't be found in the function scope, JavaScript will look into the backpack
and take the missing variable from there.

👉 Theres no way for us to explicitely access closed-over variables. As closures are not a tangible
thing like an Object. Because Closure is just an internal propert of a function. We can observe as
a closure happens because functions magically keep having access to variables that should no longer exist. We can't directly access it (just as variables).  🌟🌟 However, WE CAN TAKE A LOOK AT THE INTERNAL PROPERTY AS Covered Above.
*/
