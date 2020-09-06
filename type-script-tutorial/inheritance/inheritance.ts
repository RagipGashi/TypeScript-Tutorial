// Creating a class
class Person{
    name: string;

    // Creating a constructor
    constructor(name: string) {
        this.name = name;
        console.log(`Person created ${this.name}`);
    }

    // Creating a method
    sayHello() {
        console.log(`${this.name} says hello`);
    }
}

const john = new Person('John');