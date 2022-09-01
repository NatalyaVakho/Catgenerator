const catsGroupGenerate = require('./catsGroupGenerate');

const oldestCat = (n) => {
    const cats = catsGroupGenerate(99);
    let cat = cats.filter(item => item.age >= 8);
    let oldest = cat.filter(item => item.gender == 'male');
    oldest.length = n;
    //console.log(oldest);
    return oldest;
}

//oldestCat(5);

module.exports = oldestCat;