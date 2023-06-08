const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } when passed 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });

  it("returns 4 for the letter h when passed 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters("lighthouse in the house").h, 4);
  });
  
  it("returns an empty object for an empty string", () => {
    assert.deepEqual(countLetters(""), {});
  });
});