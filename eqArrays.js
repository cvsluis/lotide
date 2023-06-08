// Function that compares two arrays and returns true if equal, and false if not
// Supports sub-arrays by using recursion
const eqArrays = function(array1, array2) {
  // compare lengths of the arrays and return false if not equal
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // check if either element is an array
    if (Array.isArray(array1[i]) || Array.isArray(array2[i])) {
      // use recursion to compare two arrays, and return false if not equal
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
      // compare each element of array, and return false if not equal
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // array is equal
  return true;
};

module.exports = eqArrays;