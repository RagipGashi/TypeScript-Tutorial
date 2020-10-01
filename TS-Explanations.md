# TypeScript

**What is TypeScript:**

- TypeScript is a superset of JavaScript that compiles to plain JavaScript
- Static defined, each time we define a variable, we must declare what type of variable it is

**JavaScript:**

```javascript
function add(a, b) {
  return a + b;
}
```

**TypeScript:**

```javascript
function add(a: number, b: number): number {
  return a + b;
}
```

- It was designed for development of large applications

- Existing JavaScript programs are also valid TypeScript
- TypeScript is open source and was created and is maintained by Microsoft
- tsc is a compliler that compiles TypeScript in JavaScript and it is written in TypeScript

## Data types:

- **primitives:**
  - string
  - number
  - Boolean
  - null
  - undefined
  - any -> **is parent class (Object) root class for all the others. It essentially disable type checking.**
  - void - no type returned
- **complex:**

  - Tuple -> Array with multiple predifined types
  - Enums -> enumerated values
  - Unknown ->describe the type of variables that we do not know
  - Generics -> specify type constraints. Great for reuse

- **Interesting is the union type**
  - Example:

```javascript
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

- Code compilation example:

**typescript**

```javascript
function sortArrayElements(inputArray: Array<number>): Array<number> {
  // Sort the elements of the array and save them to the result variable
  const result = inputArray.sort((firstElement, secondElement) => {
    return firstElement - secondElement;
  });
  return result;
```

**Javascript**

```javascript
function sortArrayElements(inputArray) {
  // Sort the elements of the array and save them to the result variable
  const result = inputArray.sort((firstElement, secondElement) => {
    return firstElement - secondElement;
  });
  return result;
}
```

## Types void, undefined, null and never

- void -> the function doesn't return anything
- never -> is used when you are sure that something is never going to occur

```javascript
function keepProcessing(): never {
            while (true) {
         console.log('I always do something and it never ends.')
     }
```

- null and undefined can return each of those two types, but not any other type

```javascript
// Both null and undefined are only `==` to themselves and each other:
console.log(null == null); // true (of course)
console.log(undefined == undefined); // true (of course)
console.log(null == undefined); // true
```

## Using interfaces

- An interface is a syntactical contract that an entity should conform to.
- Interfaces make the code reusable

```javascript
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

const customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {
    return "Hi there";
  },
};
```

- If we want to use features of interfaces, we must inherit them. Devided with a comma, an interface can extend as many other interfaces as it wants.

```javascript
interface IPerson {
  name: string;
  gender: string;
}
interface ICitizen {
  readonly SSN: number;
}
interface IEmployee extends IPerson, ICitizen {
  empCode: number;
}

let empObj: IEmployee = {
  empCode: 1,
  name: 'Bill',
  gender: 'Male',
  SSN: 120,
};
```

## Using generics

- Generics make possible to pass any type of argument if we don't declare it inside <>

```javascript
function myFunc<T>(arg: T): T {
  return arg;
}
```

## Difference of VAR, LET and CONST

### **var:**

Declared variables are accessable globaly if declared outside of a function, and function scoped if declared inside a function

```javascript
{
  var greeter = "hey hi";

  function newFunction() {
    var hello = "hello";
  }
}
```

Here, **greeter** is globally scoped because it exists outside a function while **hello** is function scoped. So we cannot access the variable hello outside of a function. So if we do this:

### **let**

declared variable are block scoped and their values are changable. If we access them out of scope we will get an error saying **Cannot find name 'i'**

### **const**

declared variables are also block scoped and their values are constant. This means if we declared them once and try to change its values, we will get an error saying: **Cannot assign to 'xy' because it is a constant.**

## Arrow function

- Arrow functions makes the code clen and use lexical THIS
  - Old style:

```javascript
let add (num1: number, num2: number): number {
  return num1 + num2;
}
```

- The same code with **arrow function**
  - Arrow function:

```javascript
const add = (num1: number, num2: number): number => num1 + num2;
```

- Arrow functions with **only one expression** don't need an explicit return, just like in case above.

## Destructuring - Extracting values

- It is used to extract values from an object or an array:

```javascript
const user = {
  firstName: "UserName",
  lastName: "UserLastname",
};
const { firstName, lastName } = user;

console.log(firstName + " " + lastName);
```

## Using templates

- If we want a declared template to split in two lines or use some variables in it, we must use backtick (`) instead of quotes (') and then just before the variable use dollar sign (\$). In a template can be used a function too:

```javascript
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

### **public**

By default, members (properties and methods) of TypeScript class are public, so you don’t need to prefix members with the public keyword.

- Public members are accessible everywhere without restrictions, means that it could be accessable from anywhere, in the class, out of the class and from any inherited class too.

### **private**

Means that it could be accessable only inside of the class in which the function or propertie is declared.

- If we want to use them out of the class, we need to use **setter** and **getter** methods.

### **protected**

A protected member is only accessable within the class and its subclasses.

### **static member**

When we use the static keyword on properties we define on a class, they belong to the class itself, this means that we cannot access those properties from an instance of the class.

- We can only access the properties directly by referencing the class itself.
