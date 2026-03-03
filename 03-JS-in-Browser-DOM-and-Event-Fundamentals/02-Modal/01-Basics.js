"use strict";
//-----------------------
// Basics: Modal Window
//-----------------------
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector("close-modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelectorAll(".show-modal");

console.log(btnShowModal);

for (let index = 0; index < btnShowModal.length; index++) {
  console.log(btnShowModal[index].textContent);
}
