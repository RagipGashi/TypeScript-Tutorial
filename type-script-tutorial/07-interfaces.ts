//// USING A SIMPLE FUNCTION
/*
function displayName (user: {firstName: string, lastName: string}) {
    console.log(user.firstName + ' ' + user.lastName);
} 

let myUser = {firstName: 'John', lastName: 'Doe'};

displayName(myUser);

import { formatWithCursor } from "prettier";

//// USING INTERFACE
interface User extends Membership{
  firstName: string;
  lastName: string;
  email?: string; // If we want to insert another feature but make it as NOT REQUIRED we just put a ? and we don't get an error!!!
}

interface Membership {
    type?: string;
}

function displayName(user: User) {
  if (user.email) {
    console.log(user.firstName + " " + user.lastName + " - " + user.email);
  } else {
    console.log(user.firstName + " " + user.lastName);
  }
  if (user.type) {
    console.log(user.firstName + ' has a ' + user.type + ' membership.');
  }
}

let myUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john@gmail.com",
  type: 'Gold',
};

displayName(myUser);
*/

//// CREATE AN INTERFACE TO DISPLAY THE NAME AND THE AGE
interface userFunc {
  (name: string, age: number): string;
}

//// IMPLEMENT THAT INTERFACE
let getUser: userFunc;
getUser = (myName, myAge) => {
  return myName + " is " + myAge + " years old.";
};

console.log(getUser("John", 40));
