const { catFactory } = require("./catFactory.js");

exports.catsGroupGenerate = (n, defaults) => {
    let arr = Array.from({length: n}, () => catFactory());
    //console.log(arr);
    return arr;
}

//catsGroupGenerate(3);
//export {catsGroupGenerate};