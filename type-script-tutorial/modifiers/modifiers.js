var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
// Instantiate the class
var dog = new Animal('Skipper');
console.log(dog.name);
