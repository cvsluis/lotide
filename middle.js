const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    if (array1.length === 0) {
      return true;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  let newArray = [];
  // array with two or less elements
  if (array.length <= 2) {
    return newArray;
    // array with odd number of elements
  } else if (array.length % 2) {
    // add the element of the mid index to newArray
    newArray.push(array[Math.floor(array.length / 2)]);
    return newArray;
    // add the two middle elements to the newArray
  } else {
    newArray.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
    return newArray;
  }
};

assertArraysEqual((middle([1])), []); // => []
assertArraysEqual((middle([1, 2])), []); // => []

assertArraysEqual((middle([1, 2, 3])), [2]); // => [2]
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); // => [3]

assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]); // => [2, 3]
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);// => [3, 4]
