//// Using strict type of argument and the return type of the function
function myStrictFunc(arg) {
    return arg;
}
//// Using any type of the arg and return
function myAnyFunc(arg) {
    return arg;
}
//// Using GENERICS
function myGenericFunc(arg) {
    return arg;
}
var x = myGenericFunc('Hello World!');
var y = myGenericFunc(40);
console.log(x);
console.log(y);
