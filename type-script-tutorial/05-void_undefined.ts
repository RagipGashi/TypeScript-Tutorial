function logData(): void {
  console.log("Here is some data");
  // return 'Some data'; // Doesn't work -> Type 'string' is not assignable to type 'void'.
}

logData();

let u: undefined = undefined;
let n: null = null;

console.log(n);

function error(message: string): never {
  throw new Error(message);
}

error("Something happend");
function infLoop(): never {
  while (true) {
    console.log("Hello");
  }
}

/*
function doSometing(): never {
    return 'Hello'; // Don't work -> Type 'string' is not assignable to type 'never'.
}
*/
