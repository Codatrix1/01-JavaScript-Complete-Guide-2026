"use strict";

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
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

console.log(game.scored);

for (const eachPlayer of game.scored.entries()) {
  console.log(`${eachPlayer[0] + 1}: ${eachPlayer[1]}`);
}

/*
Goal 1: Lewandowski
Goal 2: Gnarby
Goal 3: Lewandowski
Goal 4: Hummels
*/

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
/*

let allTeamOdds = [];
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  let sum = 0;
  allTeamOdds.push(odd);
  for (let index = 0; index <= allTeamOdds.length - 1; index++) {
    sum += allTeamOdds[index];
  }
  const avg = sum / allTeamOdds.length;
  console.log(avg);
}

*/

const allTeamOdds = Object.values(game.odds);

console.log(allTeamOdds);

let mySum = 0;
for (const eachOdd of allTeamOdds) {
  mySum += eachOdd;
}

const averageNew = mySum / allTeamOdds.length;
console.log(averageNew);

/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
*/

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw" : `victory for ${game[team]}`;

  console.log(`Odds of ${teamString} is ${odd}`);
}

/*
Odds of victory for Bayern Munich is 1.33
Odds of draw is 3.25
Odds of victory for Borrussia Dortmund is 6.5

*/

/*
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2,
}

*/
