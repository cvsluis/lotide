const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // true
assertObjectsEqual({ a: '1', b: ['1', '2'] }, { b: ['1', '2'], a: '1' }); // true
assertObjectsEqual({ a: '1', b: ['1', '2'] }, { b: ['1', '3'], a: '1' }); // false
assertObjectsEqual({ a: '1', b: 3 }, { b: 2, a: '1' }); // false