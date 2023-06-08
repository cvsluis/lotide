// Function that takes in a collection of items and returns counts for a specific subset of those items
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // filter elements that match the truthy values of the itemsToCount object
    if (itemsToCount[item]) {
      // check if the key does not exist yet in the result object and set initial value to 0
      if (!results[item]) {
        results[item] = 0;
      }
      // increase value for each key that matches
      results[item]++;
    }
  }
  return results;
};

module.exports = countOnly;