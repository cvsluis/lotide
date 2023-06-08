const eqArrays = require('./eqArrays');

// Function that compares two objects and returns true if equal, or false if not equal
// Supports objects of arrays by using eqArrays function, and sub-objects by using recursion
const eqObjects = function(object1, object2) {
  // compare lengths of the arrays and return false if not equal
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    // check if either value is an array
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      // use eqArrays function to compare, and if not equal return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // check if either value is an object
    } else if (typeof object1[key] === 'object' || typeof object2[key] === 'object') {
      // use recursion to compare two objects, and return false if not equal
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      // compare values of each object, and return false if not equal
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // object is equal
  return true;
};

module.exports = eqObjects;