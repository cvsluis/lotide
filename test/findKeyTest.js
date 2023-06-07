const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  const object1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("returns noma when passed object1, and x => x.stars === 2", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 2), 'noma');
  });
  it("returns Blue Hill when passed object1, and x => x.stars === 1", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 1), 'Blue Hill');
  });
  it("returns undefined when passed object1, and x => x.stars === 4", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 4), undefined);
  });
});