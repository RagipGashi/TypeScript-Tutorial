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
console.log(x);
console.log(y);