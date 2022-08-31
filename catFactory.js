const {cats} = require ("./cats.js");
const  pick = require ("./list.js");

const catFactory = () => {
    const result = {
        name: pick(cats.name),
        age: pick(cats.age),
        gender: pick(cats.gender),
        legsCount: pick(cats.legsCount),
        tailLength: pick(cats.tailLength),
    };
    //console.log(result);
    return result;
}
//catFactory();


module.exports = catFactory;
