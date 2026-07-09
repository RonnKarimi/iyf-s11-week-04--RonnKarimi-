// ======================================
// IYF Season 11 - Week 04
// Task: Functions
// Author: Ronn Mwangi
// GitHub: https://github.com/RonnKarimi
// ======================================

console.log("========== Exercise 1: Function Declarations ==========");

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Ronn"));

// Function Expression
const add = function (a, b) {
    return a + b;
};

console.log("10 + 5 =", add(10, 5));

// Arrow Function
const multiply = (a, b) => a * b;

console.log("8 × 4 =", multiply(8, 4));

// Arrow Function with Body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log("20 ÷ 4 =", divide(20, 4));
console.log("20 ÷ 0 =", divide(20, 0));


// ======================================
// Exercise 2: Build These Functions
// ======================================

console.log("\n========== Exercise 2 ==========");

// 1. Calculate Area
function calculateArea(width, height) {
    return width * height;
}

console.log("Area of Rectangle:", calculateArea(12, 5));


// 2. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log("30°C =", celsiusToFahrenheit(30), "°F");


// 3. Even or Odd
function isEven(number) {
    return number % 2 === 0;
}

console.log("8 is even:", isEven(8));
console.log("11 is even:", isEven(11));


// 4. Get Initials
function getInitials(fullName) {
    let names = fullName.split(" ");

    return names[0][0].toUpperCase() + names[1][0].toUpperCase();
}

console.log("Initials:", getInitials("Ronn Mwangi"));


// 5. Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Reverse:", reverseString("JavaScript"));


// ======================================
// Exercise 3: Default Parameters
// ======================================

console.log("\n========== Exercise 3 ==========");

function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetUser());

console.log(greetUser("Alice"));

console.log(greetUser("Bob", "Hi"));


// Build calculateTip()

function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log("Tip for KES 2000:", calculateTip(2000));

console.log("Tip for KES 2000 (20%):", calculateTip(2000, 20));


// ======================================
// Bonus Testing
// ======================================

console.log("\n========== Bonus ==========");

console.log("Rectangle Area:", calculateArea(20, 10));

console.log("100°C =", celsiusToFahrenheit(100), "°F");

console.log("Is 100 Even?", isEven(100));

console.log("Initials:", getInitials("John Doe"));

console.log("Reverse of Coding:", reverseString("Coding"));

console.log("Greeting:", greetUser("Ronn", "Welcome"));

console.log("Tip:", calculateTip(5000));

console.log("\nTask Completed Successfully!");
