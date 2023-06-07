const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] when passed [1, 2, 3] and [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] when passed ['1', '2', '3'] and [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ["1", "2"]);
  });

  it("maintains original unchanged array after calling function", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});