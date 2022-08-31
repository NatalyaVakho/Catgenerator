const catsGroupGenerate = require('../catsGroupGenerate');

test('count of cats in the group', () => {
    let group = catsGroupGenerate(4);
    expect(group).toHaveLength(4);
})