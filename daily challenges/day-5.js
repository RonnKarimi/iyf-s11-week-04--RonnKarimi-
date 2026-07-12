// ======================================
// Day 5: Palindrome Checker
// ======================================

console.log("\n===== Day 5: Palindrome Checker =====");

function isPalindrome(str) {

    let cleaned = str
        .toLowerCase()
        .replace(/\s/g, "");

    let reversed = cleaned
        .split("")
        .reverse()
        .join("");

    return cleaned === reversed;

}

console.log(isPalindrome("racecar"));

console.log(isPalindrome("hello"));

console.log(isPalindrome("A man a plan a canal Panama"));
