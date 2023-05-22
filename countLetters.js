const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  // create new object for result
  const results = {};
  // loop through the items of the string
  for (const letter of string) {
    // if the item is not a space, continue
    if (letter !== ' ') {
      // check if the item is added to the results already
      if (results[letter]) {
        // increase value by one
        results[letter] += 1;
        // item hasn't been added to results yet
      } else {
        // set results to have a key which is the current item, and set the value to be 1
        results[letter] = 1;
      }
    }
  }
  // return object after loop is finished
  return results;
};

// TESTS

const result1 = (countLetters('lighthouse in the house'));
console.log(result1);

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);

/*
1) create new object for result
2) loop through the letters of the string
3) check if letter is a space
4) check if the letter is pushed to results already
5) if it is, increase the key value
6) if it isn't, set the result key to be the letter
7) return the function
*/