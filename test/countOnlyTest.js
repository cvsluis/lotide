const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  it("returns { Fang: 2, Jason: 1 } for { 'Jason': true, 'Karima': true, 'Fang': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true }), { Fang: 2, Jason: 1 });
  });
  it("returns { Fang: 2, Salima: 2 } for { 'Fang': true, 'Salima': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Fang': true, 'Salima': true }), { Fang: 2, Salima: 2 });
  });
  it("returns empty object for { 'Karima': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Karima': true }), {});
  });
});