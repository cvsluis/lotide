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