"use strict";
//// USING A SIMPLE FUNCTION
/*
function displayName (user: {firstName: string, lastName: string}) {
    console.log(user.firstName + ' ' + user.lastName);
}

let myUser = {firstName: 'John', lastName: 'Doe'};

displayName(myUser);
*/
exports.__esModule = true;
function displayName(user) {
    if (user.email) {
        console.log(user.firstName + " " + user.lastName + " - " + user.email);
    }
    else {
        console.log(user.firstName + " " + user.lastName);
    }
    if (user.type) {
        console.log(user.firstName + ' has a ' + user.type + ' membership.');
    }
}
var myUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    type: 'Gold'
};
displayName(myUser);
