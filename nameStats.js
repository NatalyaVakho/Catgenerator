const catsName = require('./name');

const nameStats = (n) => {
    const countItems = catsName(n).reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});
    //console.log(countItems);
    return countItems;
}

//nameStats(999);

module.exports = nameStats;