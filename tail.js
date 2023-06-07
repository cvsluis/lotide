// Function that takes in an array and returns everything except the first element of the array
const tail = function(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;