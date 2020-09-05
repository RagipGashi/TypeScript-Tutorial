const greet = 'Hello World';
const num1 = 5;
const num2 = 3;

const total = (num1: number, num2: number): number => num1 + num2;

const template = `${greet}, This is my template 
in typescript. ${num1} + ${num2} = ${total(num1, num2)}`;

console.log(template);