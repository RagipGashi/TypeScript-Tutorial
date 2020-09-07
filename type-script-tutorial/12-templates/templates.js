var greet = 'Hello World';
var num1 = 5;
var num2 = 3;
// Using a function in template
var total = function (num1, num2) { return num1 + num2; };
// Creating a template
var template = greet + ", This is my template \nin typescript. " + num1 + " + " + num2 + " = " + total(num1, num2);
//console.log(template);
// Using startsWith() to verify if the template starts with a specific word
console.log(template.startsWith('Hello'));
// Using endsWith() to verify if the template ends with a specific word
console.log(template.endsWith('8'));
// Using includes() to see if the template contains a specific word
console.log(template.includes('template'));
