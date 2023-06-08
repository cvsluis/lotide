// Function that takes in an array and returns middle most element of the array
const middle = function(array) {
  const results = [];
  // filter arrays that will have no middle element
  if (array.length <= 2) {
    return results;
  }
  // filter arrays that are even and will have two middle elements
  if (array.length % 2 === 0) {
    results.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
    return results;
  }
  // push middle element to results array
  results.push(array[Math.floor(array.length / 2)]);
  return results;
};

module.exports = middle;