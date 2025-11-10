'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const resName = restaurant.name;

// console.log(resName);

// restaurant.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(resName);

// const printBookInfo = function ({ title, author, year = 'unknown year' }) {
//   console.log(`${title} was written by ${author} in ${year}`);
// };

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players;

// const [gk1, ...fieldPlayers1] = players1;
// console.log('Team 1:');
// console.log(gk1, fieldPlayers1);

// const [gk2, ...fieldPlayers2] = players2;
// console.log('Team 2:');
// console.log(gk2, fieldPlayers2);

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const { team1: oddsTeam1, x: draw, team2: oddsTeam2 } = game.odds;
// console.log(oddsTeam1, draw, oddsTeam2);

// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored:`);
//   for (const player of players) console.log(player);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// oddsTeam1 < oddsTeam2 && console.log('Team 1 is more likely to win');
// oddsTeam1 > oddsTeam2 && console.log('Team 2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log([...menu.entries()]);

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player} scored a goal!`);
// }

// const odds = Object.values(game.odds);
// console.log(odds);
// let averageOdds = 0;
// for (const odd of odds) {
//   averageOdds += odd;
// }
// averageOdds /= odds.length;
// averageOdds = averageOdds.toFixed(2);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

const announcement =
  'All passangers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace(/door/g, 'gate'));
