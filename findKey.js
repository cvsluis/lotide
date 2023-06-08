// Function that takes in an object and callback and returns the first key that meets the criteria specified in callback
const findKey = function(object, callback) {
  for (const key in object) {
    // check if the value when passed into the callback is truthy
    if (callback(object[key])) {
      // returns the matching key
      return key;
    }
  }
};

module.exports = findKey;