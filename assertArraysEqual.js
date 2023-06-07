const eqArrays = require('./eqArrays');

// Function that takes in 2 arrays and prints to the console 'Assertion Passed' if equal, and 'Assertion Failed' if not equal
// Uses template literals and emojis for clear, easily readable message
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;