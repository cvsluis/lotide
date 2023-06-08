// Function that takes in an array and an itemsToRemove array and returns only
// the items from the source array that are not in the itemsToRemove array
const without = function(array, itemsToRemove) {
  const results = [];
  array.forEach(item => {
    // filter elements that are not in the items to remove array and push them to the results array
    if (!itemsToRemove.includes(item)) {
      results.push(item);
    }
  });
  return results;
};

module.exports = without;