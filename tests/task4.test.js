const {catsGender} = require('../gender');
const {catsName} = require('../name');
const { cats } = require('../cats');
const {oldestCat} = require('../oldest');
const {youngestCat} = require('../youngest');
const { catFactory } = require('../catFactory');

describe('Task 4 tests', () => {
    test('only male', () => {
        expect(catsGender(3)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    gender: 'male'
                })
            ])
        );
    });

    test('names', () => {
        expect(cats.name).toEqual(expect.arrayContaining(catsName(11)));
    });

    test('oldest cats', () => {
        let group = oldestCat(4);
        expect(group).toHaveLength(4);
        expect(group).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    gender: 'male'
                })
            ])
        );
        expect(group[1].age).toBeGreaterThanOrEqual(8)
    });

    test('youngest cat', () => {
        // expect(youngestCat(3)).toEqual(
        //     expect.arrayContaining([
        //         expect.objectContaining({
        //             gender: 'female'
        //         })
        //     ])
        // );
        expect(youngestCat(3)).toHaveLength(3);
        expect(cats.name).toEqual(expect.arrayContaining(youngestCat(3)));
    })
});
