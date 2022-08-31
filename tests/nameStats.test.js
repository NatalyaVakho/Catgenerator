const nameStats = require('../nameStats');
const { cats } = require('../cats');
const pick = require("../list.js");

test('name statistics', () => {
    let name = pick(cats.name);
    expect(nameStats(99)).toHaveProperty(name, expect.any(Number));
});