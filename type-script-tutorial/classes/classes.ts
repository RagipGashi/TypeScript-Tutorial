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
}

// Instantiate the class
const john = new Person('John', 'Doe', 30);
console.log(john);
console.log(john.firstName);

// Create another object
const kevin = new Person('Kevin', 'Hart', 40);
console.log(kevin);