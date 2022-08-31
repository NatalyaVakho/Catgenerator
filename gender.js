const catsGroupGenerate = require("./catsGroupGenerate.js");

const catsGender = (n) => {
    const cats = catsGroupGenerate(n);
    let cat = cats.filter(item => item.gender == 'male');
    //console.log(cat);
    return cat;
}

//catsGender(3);

module.exports = catsGender;