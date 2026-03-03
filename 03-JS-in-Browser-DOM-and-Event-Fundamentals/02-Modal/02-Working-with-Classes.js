"use strict";
//-----------------------
// Working with Classes
//-----------------------
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

//---------------------------------------------------
// We do not call the function on the event listener;
// It's JavaScript that calls it
// when the event happens; ie, the click Event
//---------------------------------------------------
for (let index = 0; index < btnShowModal.length; index++) {
  btnShowModal[index].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
