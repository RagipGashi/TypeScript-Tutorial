const greet1 = "Hello World";
const num01 = 5;
const num02 = 3;

// Using a function in template
const totalResult = (num01: number, num02: number): number => num01 + num02;

// Creating a template
const templateStr = `${greet1}, This is my template 
in typescript. ${num01} + ${num02} = ${totalResult(num01, num02)}`;

//console.log(template);
// Using startsWith() to verify if the template starts with a specific word
console.log(templateStr.startsWith("Hello"));

// Using endsWith() to verify if the template ends with a specific word
console.log(templateStr.endsWith("8"));

// Using includes() to see if the template contains a specific word
console.log(templateStr.includes("template"));
