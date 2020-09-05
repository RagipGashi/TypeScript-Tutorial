//// DESTRUCTURING is used to constract data values from Object or Arrays etc.
// Destructuring data values from an Object:
/*
const user = {
    firstName: 'Ragip',
    lastName: 'Gashi',
}
// Extracting data from object created above
const {firstName, lastName} = user;

console.log(firstName + ' ' + lastName);

// Arrays
const users = ['John', 'Carl', 'Liz'];

// Extracting data from the array
const [user1, user2, user3] = users;

console.log(user2);

// Using mach pattern
const [a, b] = ['x', 'y'];
console.log(a);

const obj = {a: [{foo: 123, bar: 'abc'}, {}], b: true};
const {a: [{bar: b}]} = obj;
//console.log(b);

const {x: x, y: y} = {x: 12, y: 22};
console.log(y);
*/

// If there is no match, than we get UNDEFINED 
// const [x] = [];
// console.log(x);

// const {prop: y} = {};
// console.log(y);

// Here we set some values to the array and object too to get a result
const [x = 5] = [];
console.log(x);

const {prop: y = 6} = {};
console.log(y);
