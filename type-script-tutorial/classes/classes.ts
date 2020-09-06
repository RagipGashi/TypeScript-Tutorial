// Create a class
class Person {
    firstName: string;
    lastName: string;
    age: number

    constructor(first: string, last: string, age: number) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    // Creating a method which is very helpfull to use to different objects and use its properties
    sayHello() {
        const output: string = this.firstName + ' says hello...';
        console.log(output);
        return output;
    }
}

// Instantiate the class
const john = new Person('John', 'Doe', 30);
// console.log(john);
// console.log(john.firstName);
// Calling the method sayHello() from john object
john.sayHello();

// Create another object
const kevin = new Person('Kevin', 'Hart', 40);
// console.log(kevin);
// Calling the method sayHello() from kevin object
kevin.sayHello();