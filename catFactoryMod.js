import cats  from "./cats.js";
import pick from "./list.js";

const catFactory = (gender = 'male') => {
    const result = {
        name: pick(cats.name),
        age: pick(cats.age),
        gender,
        legsCount: pick(cats.legsCount),
        tailLength: pick(cats.tailLength),
    };
    console.log(result);
    return result;
}

catFactory();