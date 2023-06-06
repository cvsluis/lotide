const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const object2 = {
  "Portugal": { capital: "Lisbon" },
  "The Netherlands": { capital: "Amsterdam" },
  "Canada": { capital: "Ottawa" }
};

assertEqual((findKey(object1, x => x.stars === 2)), 'noma');
assertEqual((findKey(object1, x => x.stars === 1)), 'Blue Hill');
assertEqual((findKey(object1, x => x.stars === 4)), undefined);
assertEqual((findKey(object2, x => x.capital === "Amsterdam")), 'The Netherlands');