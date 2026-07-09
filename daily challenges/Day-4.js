// Exercise 1: If/Else Statements
// ======================================

console.log("========== Exercise 1: If/Else Statements ==========");

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Score 95:", getGrade(95));
console.log("Score 84:", getGrade(84));
console.log("Score 76:", getGrade(76));
console.log("Score 61:", getGrade(61));
console.log("Score 45:", getGrade(45));


// ======================================
// Exercise 2: Switch Statements
// ======================================

console.log("\n========== Exercise 2: Switch Statements ==========");

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(getDayName(0));
console.log(getDayName(1));
console.log(getDayName(2));
console.log(getDayName(3));
console.log(getDayName(4));
console.log(getDayName(5));
console.log(getDayName(6));
console.log(getDayName(8));


// ======================================
// Exercise 3: Loops
// ======================================

console.log("\n========== Exercise 3: Loops ==========");

// For Loop
console.log("For Loop");

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
console.log("While Loop");

let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

// For...of Loop
console.log("For...of Loop");

const colors = ["Red", "Green", "Blue"];

for (const color of colors) {
    console.log(color);
}


// ======================================
// Challenge 1
// Print Numbers 1 - 100
// ======================================

console.log("\n========== Challenge 1 ==========");

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// ======================================
// Challenge 2
// Print Even Numbers 1 - 50
// ======================================

console.log("\n========== Challenge 2 ==========");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}


// ======================================
// Challenge 3
// FizzBuzz
// ======================================

console.log("\n========== Challenge 3: FizzBuzz ==========");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}


// ======================================
// Challenge 4
// Triangle of Stars
// ======================================

console.log("\n========== Challenge 4 ==========");

for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

console.log("\nTask 7.4 Completed Successfully!");
