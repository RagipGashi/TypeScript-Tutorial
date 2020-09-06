/*
class Animal {
    // By default all properties and functions are public, even if we declare them as public or not
    public name: string;

    constructor (name: string) {
        this.name = name;
    }
}

// Instantiate the class
const dog = new Animal('Skipper');
console.log(dog.name);
*/
// Using private access modifier
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // Using getter method
    Animal.prototype.getName = function () {
        return this.name;
    };
    // Using setter method
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    return Animal;
}());
// Instantiate the class
var dog = new Animal('Skippy');
// Use setter method to set the name
dog.setName('Mimi');
// Use getter method to get the name
console.log(dog.getName());
