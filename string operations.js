// String Operations

let firstName = "Ronn";
let lastName = "Mwangi";

// Concatenation
let fullName = firstName + " " + lastName;

// Template Literals
let greeting = `Hello, ${firstName}!`;

let message = `Your name has ${firstName.length} characters.`;

// String Methods
console.log("Full Name:", fullName);

console.log("Uppercase:", fullName.toUpperCase());

console.log("Lowercase:", fullName.toLowerCase());

console.log("First Character:", firstName.charAt(0));

console.log("Includes 'Ronn':", fullName.includes("Ronn"));

console.log(greeting);

console.log(message);
