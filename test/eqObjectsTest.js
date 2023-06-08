const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true when passed { color: 'red', size: 'medium' } and { size: 'medium', color: 'red' }", () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }), true);
  });

  it("returns false when passed { color: 'blue', size: 'medium' } and { size: 'medium', color: 'red' }", () => {
    assert.strictEqual(eqObjects({ color: "blue", size: "medium" }, { size: "medium", color: "red" }), false);
  });

  it("returns true when passed { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns true when passed { a: { z: 1, p: {o : {y : 3}}}, b: 2 } and { a: { z: 1, p: {o : {y : 3}}}, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: 1, p: {o : {y : 3}}}, b: 2 }, { a: { z: 1, p: {o : {y : 3}}}, b: 2 }), true);
  });
  
  it("returns false when passed { a: 1, b: 2 } and { a: 1, c: 2 }", () => {
    assert.strictEqual(eqObjects({ a: 1, c: 2 }, { a: 1, b: 2 }), false);
  });
});