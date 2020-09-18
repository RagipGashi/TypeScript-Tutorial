# TypeScript

**What is TypeScript:**

- TypeScript is a superset of JavaScript that compiles to plain JavaScript
- Existing JavaScript programs are also valid TypeScript
- TypeScript is open source and was created and is maintained by Microsoft
- It was designed for development of large applications
- tsc is a compliler that compiles TypeScript in JavaScript and it is written in TypeScript
- Static defined, each time we define a variable, we must declare what type of variable is
- It works through Node.js


## Data types:
- string
- number
- Boolean
- null
- undefined
- any -> **is parent class (Object) root class for all the others. It essentially disable type checking.**
- void - no type returned
- Tuple - Array with fixed number of elements
- Enums - enumerated values
- Generics - specify type constraints. Great for reuse

- **Interesting is the union type**
  - Example:
```
const msg:number|string;
```
  - means msg variable could be of type number or string


## Object-based Classes
- TypeScript offers the ability to use classes in JavaScript
  - Object Oriented Behavior
  - Move away from **prototype-based** inheritance
  - Better Encapsulation
  - Class Inheritance
  - Access Modifiers - Public, Private, Protected


## Types void, undefined, null and never
- void means that the function doesn't return anything, the same is never too (almost)
- null and undefined can return those two types, but not any string or number


## Using interfaces
- Interfaces make the code more functional
- Interfaces can be extended to use features of each other
- They must be extended if we want to use features of others. Devided with a comma, an interface can extend as many other interfaces as it wants.


## Using generics
- Generics make possible to pass any type of argument if we don't declare it inside <>
``` 
function myFunc<T>(arg: T): T { return arg;}
```

## Difference of using VAR and LET and CONST
- **var** declared variables are accessable out of the scope of a function for example, or out of the scope of the loop
- **let** declared variable are the oposite of this. They are just inside the scope of the loop accessable and known, but if we try to access them out of the loop or out of the if() condition, we will get an error saying **Cannot find name 'i'**
- **const** declared variables are constant, it means if we declare once and try to change its values, we will get an error saying: **Cannot assign to 'xy' because it is a constant.**


## Arrow function
- Arrow functions makes the code clen and use lexical THIS
  - Old style:
```
let add (num1: number, num2: number): number {
  return num1 + num2;
}
```
- The same code with **arrow function**
  - Arrow function:
```
const add = (num1: number, num2: number): number => num1 + num2;
```
- Arrow functions with **only one expression** don't need an explicit return, just like in case above. 


## Destructuring - Extracting values
- It is used to extract values from an object or an array:
```
const user = {
    firstName: 'UserName',
    lastName: 'UserLastname',
}
const {firstName, lastName} = user;

console.log(firstName + ' ' + lastName);
```

## Using templates
- If we want a declared template to split in two lines or use some variables in it, we must use backtick (`) instead of quotes (') and then just before the variable use dollar sign ($). In a template can be used a function too:
```
const greet = 'Hello World';
const num1 = 5;
const num2 = 3;

// Using a function in template
const total = (num1: number, num2: number): number => num1 + num2;

// Creating a template
const template = `${greet}, This is my template 
in typescript. ${num1} + ${num2} = ${total(num1, num2)}`;

console.log(template); 
// Output:
Hello World, This is my template 
in typescript. 5 + 3 = 8
```
- We can use some methods in a template too, like **startsWith()**, **endsWith()** or **includes()**.


## Access modifiers
- In TypeScript we have three access modifiers:
  - **public**
  - **private**
  - **protected**
- By default all functions and properties are public, so it is the same if we use the keyword public before the function or properties or not, it will be always public. 
- **public** means that it could be accessable from anywhere, in the class, out of the class and from any inherited class too. 
- **private** means that it could be accessable only inside of the class in which the function or propertie is declared. 
  - If we want to use them out of the class, we need to use setter and getter methods. 
- **protected** means that it is accessable only within the class and its subclasses. 

- **static member** is accessable inside the class and in its instatiation
