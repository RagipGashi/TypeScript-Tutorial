/*
function add(x: number, y: number): number {
  return x + y;
}

// Anonymos function
let myAdd = function (x: any, y: any): number {
  if (typeof x == "string") {
    x = parseInt(x, 10); // parse a string to integer with the base of 10
  }
  if (typeof y == "string") {
    y = parseInt(y, 10);
  }
  return x + y;
};

// console.log(add(5, 5));
console.log(myAdd("4", 4));
*/

function getFullName (firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}

let name1 = getFullName('John', 'Doe');
console.log(name1);