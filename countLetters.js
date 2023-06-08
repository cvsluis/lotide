// Function that takes in a sentence and returns an object with the count of each of the letters in the sentence
const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    // ignore spaces
    if (letter === ' ') {
      continue;
    }
    // check if the key does not exist yet in the result object and set initial value to 0
    if (!results[letter]) {
      results[letter] = 0;
    }
    // increase value for each key that matches
    results[letter]++;
  }
  return results;
};

module.exports = countLetters;