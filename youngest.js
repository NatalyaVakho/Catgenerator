const catsGroupGenerate = require('./catsGroupGenerate');

const youngestCat = (n) => {
    const cats = catsGroupGenerate(99);
    let cat = cats.filter(item => item.age < 3);
    let youngest = cat.filter(item => item.gender == 'female');
    let catsname = [];
    for (let cats of youngest){
        let catname = cats.name;
        catsname.push(catname);
    }
    catsname.length = n;
    //console.log(catsname);
    return catsname;
}

//youngestCat(7);

module.exports = youngestCat;