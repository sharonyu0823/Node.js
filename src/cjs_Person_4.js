class Person {
    // export default 只會出現一次
    gender = 'male';
    constructor(name = 'noname', age = 0) {
        this.name = name;
        this.age = age;
    }
    toJSON() {
        const { name, age, gender } = this;
        return { name, age, gender };
    }

    toString() {
        return JSON.stringify(this);
    }
}

const a = 10;
const f = n => n * n;

module.exports = {
    Person,
    a,
    f,
}; //所有東西包成一個物件做匯出

// corresponding to file: module.test_4.cjs
// 觀念:export cjs_Person_4.js的模組 import到cjs_module.test_4.js 再去複製另外一個人出來