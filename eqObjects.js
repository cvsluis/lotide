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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  // check if the key arrays are the same length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // loop through each key value pair in object1
  for (let key in object1) {
    // check if both object's key values are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // check if the arrays are equal
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // if values aren't an array, then check if the single values are equal
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const shirtObject2 = { size: "medium", color: "blue" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(shirtObject , shirtObject2), false);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

