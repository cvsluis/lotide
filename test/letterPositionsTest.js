const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const result1 = (letterPositions("lighthouse in the house"));
console.log(result1);

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