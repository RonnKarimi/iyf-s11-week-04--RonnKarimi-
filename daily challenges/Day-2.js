// ========================================

let a = 10;
let b = 3;

// Basic Math
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment / Decrement
let count = 0;

count++;
console.log("After Increment:", count);

count--;
console.log("After Decrement:", count);

// ========================================
// Exercise 2: String Operations
// ========================================

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

// ========================================
// Exercise 3: Comparison & Logical Operators
// ========================================

// Comparison
console.log("5 > 3:", 5 > 3);

console.log("5 < 3:", 5 < 3);

console.log("5 === 5:", 5 === 5);

console.log('5 == "5":', 5 == "5");

console.log("5 !== 3:", 5 !== 3);

// Logical
console.log("true && true:", true && true);

console.log("true || false:", true || false);

console.log("!true:", !true);

// ========================================
// Challenge
// ========================================

let age = 20;

let currentYear = new Date().getFullYear();

// Age in Days
let ageInDays = age * 365;

// Age in Hours
let ageInHours = ageInDays * 24;

// Year You'll Turn 100
let yearTurn100 = currentYear + (100 - age);

console.log("--------------------------------");

console.log("Current Age:", age);

console.log("Approximate Age in Days:", ageInDays);

console.log("Approximate Age in Hours:", ageInHours);

console.log("You will turn 100 in:", yearTurn100);

console.log("--------------------------------");

// ======================================
// Challenge 2
// Print Even Numbers 1 - 50
// ======================================

console.log("\n========== Challenge 2 ==========");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
