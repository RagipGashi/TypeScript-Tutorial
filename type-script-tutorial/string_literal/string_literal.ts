/*
// let x: 'Hello';

// x = 'Hello'; -> works becuase it expected to be type Hello
// x = 'Hello World'; -> doesn't work because it expected to be only the type of Hello
// x = undefined; -> works just fine
// x = null; -> works too

let x: 'Hello' | 'Hello World' | 'Hello World!';

x = 'Hello';
x = 'Hello World';
x = 'Hello World!'
x = 'Hello World!!' //-> doesn't work: Type '"Hello World!!"' is not assignable to type '"Hello" | "Hello World" | "Hello World!"'.

console.log(x);
*/

// Another example with union types
function myAdd (x: string | number, y: string | number): number {
    if (typeof x == 'string') {
        x = parseInt(x, 10);
    }
    if (typeof y == 'string') {
        y = parseInt(y, 10);
    }
    return x + y;
}
console.log(myAdd(4, '4'));