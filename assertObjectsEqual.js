const eqObjects = require('./eqObjects');

// Function that takes in 2 objects and prints to the console 'Assertion Passed' if equal, and 'Assertion Failed' if not equal
// Uses template literals and emojis for clear, easily readable message
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Tests
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // true
assertObjectsEqual({ a: '1', b: ['1', '2'] }, { b: ['1', '2'], a: '1' }); // true
assertObjectsEqual({ a: '1', b: ['1', '2'] }, { b: ['1', '3'], a: '1' }); // false
assertObjectsEqual({ a: '1', b: 3 }, { b: 2, a: '1' }); // false

module.exports = assertObjectsEqual;