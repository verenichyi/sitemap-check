class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("Возраст не может быть отрицательным");
            return;
        }
        this._age = value;
    }
}

const person = new Person('Yura', 27);

console.log(person.age);