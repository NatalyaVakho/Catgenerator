const pick = require("../list.js");
const { cats } = require('../cats');

test("objects", () => {
    // let list = [1, 2, 3, 4];
    let expected = pick(cats.name);
    expect(cats.name).toContain(expected);
});

