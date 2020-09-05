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
*/
var obj = { a: [{ foo: 123, bar: 'abc' }, {}], b: true };
var b = obj.a[0].bar;
console.log(b);
