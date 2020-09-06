class Animal {
    name: string;

    constructor (name: string) {
        this.name = name;
    }
}

// Instantiate the class
const dog = new Animal('Skipper');
console.log(dog.name);