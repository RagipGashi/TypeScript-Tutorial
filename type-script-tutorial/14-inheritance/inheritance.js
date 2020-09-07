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
// Creating a class
var Person = /** @class */ (function () {
    // Creating a constructor
    function Person(name) {
        this.name = name;
        //console.log(`Person created ${this.name}`);
    }
    // Creating a method
    Person.prototype.sayHello = function () {
        console.log(this.name + " says hello");
    };
    // Creating another method
    Person.prototype.payBalance = function () {
        console.log("Customer " + this.id + " has paid the balance.");
    };
    return Person;
}());
// Creating another class to use inheritance
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
        //console.log(`Customer created ${this.name}`);
    }
    // Use the properties of the method created in parent class
    Customer.prototype.payBalance = function () {
        _super.prototype.payBalance.call(this);
    };
    return Customer;
}(Person));
// Creating john object
// const john = new Person('John');
// Creating mary object and use inheritance from Person class
var mary = new Customer(1, 'Mary');
// Call the sayHello() method created in Person class, means use inheritance
mary.sayHello();
mary.payBalance();
