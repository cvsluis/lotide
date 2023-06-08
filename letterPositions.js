// Function that takes in a string and returns all indices of letter positions in the string
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // ignore spaces
    if (sentence[i] === " ") {
      continue;
    }
    // check if the key does not exist yet in the result object and set initial value to empty array
    if (!Array.isArray(results[sentence[i]])) {
      results[sentence[i]] = [];
    }
    // push index to array for each key that matches
    results[sentence[i]].push(i);
  }
  return results;
};

module.exports = letterPositions;