const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "sam"];
const numbers = [1, 2, 3, 4, 5];

const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(numbers, num => num * 2);
const results4 = map(words1, word => word.length);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'g', 'c', 't', 'm', 's' ]);
assertArraysEqual(results3, [2, 4, 6, 8, 10]);
assertArraysEqual(results4, [ 6, 7, 2, 5, 3 ]);