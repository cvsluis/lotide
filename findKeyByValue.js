// Function that takes in an object and a value and returns the first key that contains that value
const findKeyByValue = function(objectList, value) {
  for (const key in objectList) {
    if (objectList[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;