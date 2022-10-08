import Person, { a, f } from './Person_3.mjs';

const p2 = new Person('Sharon', 26);

console.log(p2.toString());
console.log({ a }); //因為要讓它呈現物件 所以大括號

console.log(f(7));
