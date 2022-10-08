export default class Person {
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

export const a = 10;

// const b = 20; //因為沒有匯出所以無法呈現

const f = n => n * n;
export { f }; //注意要包大括號

// corresponding to file: module.test_3.mjs
