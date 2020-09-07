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
function move(distance, direction) {
    console.log('Moving ' + distance + ' Miles in direction ' + direction);
}
move(5, 'South');
// move(5, 'South-East'); // -> doesn't work: Argument of type '"South-East"' is not assignable to parameter of type 'cardinalDirection'.
