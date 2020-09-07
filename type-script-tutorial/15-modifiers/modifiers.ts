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
class Animal {
    // If we use protected, means we can have access within the class, and the classes that extends that class
    protected name: string;

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

// Create another class which extends Animal class to see the usage of protected modifier
class Dog extends Animal {

    constructor(name: string) {
        // super must we write to call the constructor in the parent class
        super(name);
        console.log(this.name);
    }
}

// Instantiate the class Dog which extends Animal
const dog: Animal = new Dog('Ralph');