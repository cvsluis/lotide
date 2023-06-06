const findKeyByValue = function(objectList, value) {
  for (const key in objectList) {
    if (objectList[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;