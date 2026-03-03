"use strict";
//-------------------------------------
// Select and Manipulate Elements
//-------------------------------------

console.log(document.querySelector(".message").textContent); // Start guessing...

document.querySelector(".message").textContent = "Correct number!";
console.log(document.querySelector(".message").textContent); // Correct number!

document.querySelector(".number").textContent = 17;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value); // 23
