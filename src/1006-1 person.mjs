class Person {
    constructor(name = 'noname', age = 0) {
        this.name = name;
        this.age = age;
    }

toJSON() {
    const { name, age } = this;
    return {name, age, gender: 'male'};
}
}
const p1 = new Person('David', '20');

console.log(JSON.stringify(p1));