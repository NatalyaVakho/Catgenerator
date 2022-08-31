const catFactory = require("../catFactory");
const { cats } = require('../cats');

describe('Cat generator test', () => {
    test('Check property', () => {
        expect(catFactory()).toHaveProperty('age');
        expect(catFactory()).toHaveProperty('name');
        expect(catFactory()).toHaveProperty('gender');
        expect(catFactory()).toHaveProperty('legsCount');
        expect(catFactory()).toHaveProperty('tailLength');
    });

    test('Check values', () => {
        expect(cats.age).toContain(catFactory().age);
        expect(cats.name).toContain(catFactory().name);
        expect(cats.gender).toContain(catFactory().gender);
        expect(cats.legsCount).toContain(catFactory().legsCount);
        expect(cats.tailLength).toContain(catFactory().tailLength)
    });
})
