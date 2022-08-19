import { catFactory } from "./catFactory.js";

const catsGroupGenerate = (n) => {
    let arr = Array.from({length: n}, () => catFactory());
    console.log(arr);
    return arr;
}

catsGroupGenerate(2);