// Function that takes in an array containing a nested array of elements and returns a flattened version of the array
// Supports unlimited nesting by using recursion
const flatten = function(array) {
  let results = [];
  array.forEach(i => {
    // check if element is an array
    if (Array.isArray(i)) {
      // use recursion to go through each element of array
      flatten(i).forEach(j => results.push(j));
      // element is not array, push element to new array
    } else {
      results.push(i);
    }
  });
  return results;
};

module.exports = flatten;