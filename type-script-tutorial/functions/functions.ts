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

/*
function getFullName (firstName: string, lastName?: string): string { // ? after the parameter is to save from error if we call the function with less parameters than declared
    // To prevent from returning undefined
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
let name1 = getFullName('John');
*/

// If we don't know how many parameters we will call, just put ... in parameter list and in return use .join(' ');
function getFullName (firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ');
}

let name1 = getFullName('John', 'Doe', 'Williams', 'Johnson', 'Jackson');

console.log(name1);