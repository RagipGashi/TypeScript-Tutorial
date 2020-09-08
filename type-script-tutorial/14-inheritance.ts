// Creating a class
class Person {
  name: string;
  id: number;

  // Creating a constructor
  constructor(name: string) {
    this.name = name;
    //console.log(`Person created ${this.name}`);
  }

  // Creating a method
  sayHello() {
    console.log(`${this.name} says hello`);
  }

  // Creating another method
  payBalance() {
    console.log(`Customer ${this.id} has paid the balance.`);
  }
}

// Creating another class to use inheritance
export {};
class Customer extends Person {
  id: number;

  constructor(id: number, name: string) {
    super(name);
    this.id = id;
    //console.log(`Customer created ${this.name}`);
  }

  // Use the properties of the method created in parent class
  payBalance() {
    super.payBalance();
  }
}

// Creating john object
// const john = new Person('John');

// Creating mary object and use inheritance from Person class
const mary: Person = new Customer(1, "Mary");

// Call the sayHello() method created in Person class, means use inheritance
mary.sayHello();

mary.payBalance();
