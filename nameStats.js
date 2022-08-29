//import { catsGroupGenerate } from "./catsGroupGenerate.js";
const {catsName} = require('./name');

exports.nameStats = (n) => {
    const countItems = catsName(n).reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});
    console.log(countItems);
    return countItems;
}

//nameStats();