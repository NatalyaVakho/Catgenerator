import { catsGroupGenerate } from "./catsGroupGenerate.js";

const catsGender = () => {
    const cats = catsGroupGenerate(99);
    let cat = cats.filter(item => item.gender == 'male');
    console.log(cat);
    return cat;
}

catsGender();