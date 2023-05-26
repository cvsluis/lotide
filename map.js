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

const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "sam"];
const numbers = [1, 2, 3, 4, 5];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(numbers, num => num * 2);
const results4 = map(words1, word => word.length);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'g', 'c', 't', 'm', 's' ]);
assertArraysEqual(results3, [2, 4, 6, 8, 10]);
assertArraysEqual(results4, [ 6, 7, 2, 5, 3 ]);