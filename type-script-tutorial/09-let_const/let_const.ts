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

/*
//// VAR in a loop. 
for (var i = 0; i < 5; i++) {
    console.log('In loop: ' + i);
}
console.log(i); // Here we get 5, var declared variables are known out of the loop scope too

//// LET in a loop. 
for (let i = 0; i < 5; i++) {
    console.log('In loop: ' + i);
}
//console.log(i); // Here we get an error, LET declared variables are NOT known out of the loop scope: error TS2304: Cannot find name 'i'.
*/

//// CONST declared variables
const colors = [];
colors.push('red');
colors.push('blue');

//colors = []; // If we try to change the const declard variable we get an error: error TS2588: Cannot assign to 'colors' because it is a constant.

console.log(colors);

