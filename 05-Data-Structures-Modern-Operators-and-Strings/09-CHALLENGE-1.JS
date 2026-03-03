"use strict";

//--------------------------------------
// LECTURE 110: CODING CHALLENGE # 1
//--------------------------------------

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: [
    "Lewandowski",
    "Gnarby",
    "Lewandowski",
    "Hummels",
    "Sancho",
    "Gotze",
  ],
  date: "Nov 9th, 2037",

  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

const [gk1, ...fieldPlayers] = players1;
console.log(gk1, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

console.log(players1Final);

// const [team1, draw, team2] = game.odds;

console.log(game.odds);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
