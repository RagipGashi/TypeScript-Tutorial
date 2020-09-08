/*
//// Regular function
let getName = function(name: string): string {
    return name;
}
console.log(getName('Ragip Gashi'));

//// ARROW function, with only one expression, we don't need to type return.
let getName = (name: string):string => name;

console.log(getName('Ragip Gashi'));

// Regular function
let add = function(num1: number, num2: number): number {
    return num1 + num2;
}

// Arrow function
let add = (num1: number, num2: number): number => num1 + num2;

console.log(add(1, 3));

// Counting the age in one second in old way function
var User = {
    name: 'Ragip Gashi',
    age: 40,
    startAging: function() {
        var self = this;
        setInterval(function() {
            self.age++;
            console.log(self.age);
        }, 1000)
    }
}
var ragip = Object.create(User);
ragip.startAging();

*/
// Arrow function -> it elleminates self. and it is more ellegant, so it makes cleaner code and use lexical THIS
const User = {
  name: "Ragip Gashi",
  age: 40,
  startAging: function () {
    setInterval(() => {
      this.age++;
      console.log(this.age);
    }, 1000);
  },
};
const ragip = Object.create(User);
ragip.startAging();
