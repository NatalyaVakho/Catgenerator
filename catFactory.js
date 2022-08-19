import { cats } from "./cats.js";
import { pick } from "./list.js";

const catFactory = () => {
    const result = {
        name: pick(cats.name),
        age: pick(cats.age),
        gender: pick(cats.gender),
        legsCount: pick(cats.legsCount),
        tailLength: pick(cats.tailLength),
    };
    return result;
}

export {catFactory};

