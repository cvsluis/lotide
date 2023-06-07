// Function that takes in a string and returns all indices of letter positions in the string
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    if (!Array.isArray(results[sentence[i]])) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }
  return results;
};

module.exports = letterPositions;