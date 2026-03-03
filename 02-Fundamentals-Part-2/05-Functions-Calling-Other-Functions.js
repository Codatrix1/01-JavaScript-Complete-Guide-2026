"use strict";
//-----------------------------------
// Functions Calling Other Functions
//-----------------------------------

const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple and ${orangePieces} orange pieces`;
  return juice;
};

console.log(fruitProcessor(4, 5)); // Juice with 16 apple and 20 orange pieces
