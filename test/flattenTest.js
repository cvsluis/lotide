const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns empty array when passed an empty array", () => {
    assert.deepEqual((flatten([])), []);
  });

  it("returns [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);
  });
  
  it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] when passed [1, [2, [3, [4, 5], 6, 7], [8, 9]], 0]]", () => {
    assert.deepEqual((flatten([1, [2, [3, [4, 5], 6, 7], [8, 9]], 0])), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  });
});