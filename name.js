const catsGroupGenerate = require("./catsGroupGenerate.js");

const catsName = (n) => {
    const cats = catsGroupGenerate(n);
    let catsname = [];
    for (let cat of cats) {
        let catname = cat.name;
        catsname.push(catname);
    }
    //console.log(catsname);
    return catsname;
};

//catsName(6);

module.exports = catsName;
