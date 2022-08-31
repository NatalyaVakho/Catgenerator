const catFactory = require("./catFactory.js");

const catsGroupGenerate = (n, defaults) => {
    let arr = Array.from({length: n}, () => catFactory());
    //console.log(arr);
    return arr;
}

catsGroupGenerate(3);
module.exports = catsGroupGenerate;