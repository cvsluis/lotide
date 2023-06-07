const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [3, 5, 15, 8] for the letter h of 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
  it("returns { h: [0, 6], e: [1, 7], l: [2, 3, 8, 9], o: [4, 10] } for 'hello hello'", () => {
    assert.deepEqual(letterPositions("hello hello"), { h: [0, 6], e: [1, 7], l: [2, 3, 8, 9], o: [4, 10] });
  });
  it("returns an empty object for an empty string", () => {
    assert.deepEqual(letterPositions(""), {});
  });
});