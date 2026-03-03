"use strict";
//-------------------------------------
// Handling an "Esc" Keypress Event
//------------------------------------
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let index = 0; index < btnShowModal.length; index++) {
  btnShowModal[index].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//-------------------------------
// Key press events in JavaScript
//-------------------------------
// 1) Keyup - When hands are removed and the keypress happens
// 2) Keydown - When key pressed once
// 3) Keypress - Continuos firing the key

document.addEventListener("keydown", function (event) {
  // console.log("A Key was pressed");
  // console.log(event); // Gives you the entire  Object
  // console.log(event.key);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
