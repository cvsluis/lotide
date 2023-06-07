// Function that takes in an array and an itemsToRemove array and returns only 
// the items from the source array that are not in the itemsToRemove array
const without = function(array, itemsToRemove) {
  const newArray = [];
  array.forEach(item => {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  })
  return newArray;
};

module.exports = without;