const { catsGroupGenerate } = require("./catsGroupGenerate.js");

exports.catsGender = (n) => {
    const cats = catsGroupGenerate(n);
    let cat = cats.filter(item => item.gender == 'male');
    //console.log(cat);
    return cat;
}

//catsGender();