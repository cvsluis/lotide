// Function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    // stop loop when item meets callback criteria
    if (callback(item)) {
      break;
    }
    // add element to results array
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;