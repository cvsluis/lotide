// Function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;