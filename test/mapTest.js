const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  const words1 = ["ground", "control", "to", "major", "tom"];
  const numbers = [1, 2, 3, 4, 5];

  it("returns [ 'g', 'c', 't', 'm', 't' ] when passed words1 and word => word[0]", () => {
    assert.deepEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns [6, 7, 2, 5, 3] when passed words1 and word => word.length", () => {
    assert.deepEqual(map(words1, word => word.length), [6, 7, 2, 5, 3]);
  });

  it("returns [2, 4, 6, 8, 10] when passed numbers and num => num * 2", () => {
    assert.deepEqual(map(numbers, num => num * 2), [2, 4, 6, 8, 10]);
  });
});