const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

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

assertEqual((findKey(object1, x => x.stars === 2)), 'noma'); // => "noma"
assertEqual((findKey(object1, x => x.stars === 1)), 'Blue Hill');
assertEqual((findKey(object1, x => x.stars === 4)), undefined);
assertEqual((findKey(object2, x => x.capital === "Amsterdam")), 'The Netherlands');
