// Function that takes in an array and returns middle most element of the array
const middle = function(array) {
  const newArray = [];
  if (array.length <= 2) {
    return newArray;
  }
  if (array.length % 2 === 0) {
    newArray.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
    return newArray;
  }
  newArray.push(array[Math.floor(array.length / 2)]);
  return newArray;
};

module.exports = middle;