// Function that takes in 2 values and prints to the console 'Assertion Passed' if equal, and 'Assertion Failed' if not equal
// Uses template literals and emojis for clear, easily readable message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Tests
assertEqual("Lighthouse Labs", "Bootcamp"); // false
assertEqual(1, 1); // true
assertEqual("fish", "fish"); // true
assertEqual(6, 8); // false

module.exports = assertEqual;