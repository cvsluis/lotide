// Function that takes in an array and returns everything except the first element of the array
const tail = function(array) {
  const results = [];
  // start loop at second index value
  for (let i = 1; i < array.length; i++) {
    results.push(array[i]);
  }
  return results;
};

module.exports = tail;