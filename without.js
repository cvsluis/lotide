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