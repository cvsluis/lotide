const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("returns drama when passed bestTVShowsByGenre and 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns sciFi when passed bestTVShowsByGenre and 'The Expanse'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });
  it("returns undefined when passed bestTVShowsByGenre and 'Sherlock'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Sherlock"), undefined);
  });
});