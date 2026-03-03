"use strict";
//-------------------------------------
// Handling Click Events
//-------------------------------------

// An event is something that happens on a page
// such as a mouse click, a key press, and others

// With event listener, we can catch it and use it to take some action

document.querySelector(".check").addEventListener("click", function () {
  // event handler: we do not call the function, JavaScript calls it when the event happens

  // The default input is always a string, so we gotta convert it to number
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  }
});
