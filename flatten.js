// Function that takes in an array containing a nested array of elements and returns a flattened version of the array
// Supports unlimited nesting by using recursion
const flatten = function(array) {
  let newArray = [];
  array.forEach(i => {
    if (Array.isArray(i)) {
      flatten(i).forEach(j => newArray.push(j));
    } else {
      newArray.push(i);
    }
  }) 
  return newArray;
};

module.exports = flatten;