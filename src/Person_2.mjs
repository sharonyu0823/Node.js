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

const p1 = new Person('David', 25);

// console.log(p1 + '');

// corresponding to file: module.test_2.mjs