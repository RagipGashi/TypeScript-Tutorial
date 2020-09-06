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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Using private access modifier
/*
class Animal {
    // If we use privete, means we can have access only within the class, otherwise we need setter and getter
    private name: string;

    constructor (name: string) {
        this.name = name;
    }

    // Using getter method
    getName() {
        return this.name;
    }

    // Using setter method
    setName(name: string) {
        this.name = name;
    }
}

// Instantiate the class
const dog = new Animal('Skippy');
// Use setter method to set the name
dog.setName('Mimi');
// Use getter method to get the name
console.log(dog.getName());
*/
// Using protected access modifier
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
// Create another class which extends Animal class to see the usage of protected modifier
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = 
        // super must we write to call the constructor in the parent class
        _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return Dog;
}(Animal));
// Instantiate the class Dog which extends Animal
var dog = new Dog('Ralph');
