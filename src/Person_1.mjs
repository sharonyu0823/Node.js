class Person {
    gender = 'male'; //這邊不用let or const 做宣告 直接設定一個值
    // 通常不建議在constructor之前做任何值得設定
    constructor(name = 'noname', age = 0) {
        this.name = name; //這個類別的個體的屬性 this.name 然後給他的值
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

console.log(p1 + '');

// corresponding to file: module.test_1.mjs

// the difference between mjs vs js is if the purpose is to export/import or not.