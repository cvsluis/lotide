// Function that takes in a sentence and returns a count of each of the letters in the sentence
const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter === ' ') {
      continue;
    }
    if (!results[letter]) {
      results[letter] = 0;
    }
    results[letter]++;
  }
  return results;
};

module.exports = countLetters;