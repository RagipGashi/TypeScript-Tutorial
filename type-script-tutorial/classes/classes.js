// Create a class
var Person = /** @class */ (function () {
    function Person(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    return Person;
}());
// Instantiate the class
var john = new Person('John', 'Doe', 30);
console.log(john);
console.log(john.firstName);
// Create another object
var kevin = new Person('Kevin', 'Hart', 40);
console.log(kevin);
