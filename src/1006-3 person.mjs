export default class Person {
    gender = 'male';
    constructor(name = 'noname', age = 0) {
        this.name = name;
        this.age = age;
    }

toJSON() {
    const { name, age, gender } = this;
    return {name, age, gender};
}
toString() {
    return JSON.stringify(this);
}
}
// const p1 = new Person('David', '20');

// console.log(p1 + '');

export const a = 10;
const b = 3;

const f = n => n * n;
export {f};