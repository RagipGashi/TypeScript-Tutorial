// Creating a class
var Person = /** @class */ (function () {
    // Creating a constructor
    function Person(name) {
        this.name = name;
        console.log("Person created " + this.name);
    }
    // Creating a method
    Person.prototype.sayHello = function () {
        console.log(this.name + " says hello");
    };
    return Person;
}());
var john = new Person('John');
