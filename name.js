import { catsGroupGenerate } from "./catsGroupGenerate.js";

const catsName = () => {
    const cats = catsGroupGenerate(99);
    let catsname = [];
    for (let cat of cats) {
        let catname = cat.name;
        catsname.push(catname);
    }
    console.log(catsname);
    return catsname;
};

catsName();
