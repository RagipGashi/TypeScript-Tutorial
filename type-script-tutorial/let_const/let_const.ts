/*
let a = 55;
let a = 44; // Error: Cannot redeclare block-scoped variable 'a'. This works with declaring as var and this is the main difference between var and let

console.log(a);
*/

//// VAR in a function
function showVar() {
    var a = 44;
    if (true) {
        var a = 33;
        console.log(a); // This one has effected the global-scoped a variable and the result is two times 33
    }
    console.log(a);
}
//showVar();

//// LET declared variable 
function showLet() {
    let a = 44;
    if (true) {
        let a = 33;
        console.log(a); // This one has NOT effected the global-scoped a variable and the result is 33 44
    }
    console.log(a);
}
//showLet();



