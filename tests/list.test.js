const pick = require("../list.js");
const { cats } = require('../cats');

test("objects", () => {
    const testArray = ['Rex', 'Kiki', 'Poko', 'Tobi', 'Dobbie', 'Faust', 'Lilith', 'Boni', 'MurMeow', 'Vivienne'];
    const result = pick(testArray);

    const compareResults = () => {
        if (testArray.includes(result)) {
        return result;
    }};

    expect(result).toBe(compareResults());
});

