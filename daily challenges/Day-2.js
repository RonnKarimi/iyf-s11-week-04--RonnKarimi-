// ======================================
// Day 2: Reverse String (Loop)
// ======================================

console.log("\n===== Day 2: Reverse String (Loop) =====");

function reverseStringLoop(str) {

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseStringLoop("hello"));

// Reverse using Built-in Methods

function reverseStringBuiltIn(str) {
    return str.split("").reverse().join("");
}

console.log(reverseStringBuiltIn("JavaScript"));
