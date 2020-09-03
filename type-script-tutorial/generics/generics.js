/*
//// Using strict type of argument and the return type of the function
function myStrictFunc (arg: string): string {
    return arg;
}

//// Using any type of the arg and return
function myAnyFunc (arg: any): any {
    return arg;
}

//// Using GENERICS
function myGenericFunc<T> (arg: T): T {
    return arg;
}

let x = myGenericFunc<string> ('Hello World!');
let y = myGenericFunc<number> (40);
// With generics, it is possible to pass any type of argument without declaring it!!!
let z = myGenericFunc('Hello');
let w = myGenericFunc(44.44);

console.log(x);
console.log(y);
console.log(z);
console.log(w);
*/
//// Multiple arguments, multiple types
function myGenericFunc(arg1, arg2) {
    var str = arg1 + ' ' + arg2;
    return str;
}
var x = myGenericFunc('Hello', 40);
console.log(x);
//// Using multiple types and arguments, but only with one type, <T>. Now in call we must pass the same type like in the first arg.
function myGeneric(arg1, arg2) {
    var str = arg1 + ' ' + arg2;
    return str;
}
var y = myGeneric('Hello', 'World');
console.log(y);
