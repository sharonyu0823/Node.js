const { Person, a, f } = require('./cjs_Person_4'); //預設就是js 所以不需要副檔名 但如果是其他就會需要加上副檔名

const p2 = new Person('Sharon', 26);

console.log(p2.toString());
console.log({ a });
console.log(f(7));