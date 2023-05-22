const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  // new object for results
  const results = {};
  // loop through each letter in sentence
  for (let i = 0; i < sentence.length; i++) {
    // if letter is not space, continue
    if (sentence[i] !== " ") {
      // if the current letter is already set to a key that is an array
      if (Array.isArray(results[sentence[i]])) {
        // push the current index to the array
        results[sentence[i]].push(i);
        // no key set yet
      } else {
        // set results["current letter"] to an empty array
        results[sentence[i]] = [];
        // add the current index to the array
        results[sentence[i]].push(i);
      }
    }
  }
  // return object after loop
  return results;
};

/*
1) create new object for results
2) use for loop to go through each letter in the sentence so that I can access indices
3) check if letter is a space
4) check if the letter is pushed to results key already
5) if it is, push the index to the value
6) if it isn't, set the result to have a key that equals and empty array
7) push letter to the array
8) return the function
*/

const result1 = (letterPositions("lighthouse in the house"));

assertArraysEqual(result1['l'], [0]);
assertArraysEqual(result1['i'], [1, 11]);
assertArraysEqual(result1['g'], [2]);
assertArraysEqual(result1['h'], [3, 5, 15, 18]);
assertArraysEqual(result1['t'], [4, 14]);
assertArraysEqual(result1['o'], [6, 19]);
assertArraysEqual(result1['u'], [7, 20]);
assertArraysEqual(result1['s'], [8, 21]);
assertArraysEqual(result1['e'], [9, 16, 22]);
assertArraysEqual(result1['n'], [12]);

