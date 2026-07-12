// ======================================
// Day 3: Largest Number (Loop)
// ======================================

console.log("\n===== Day 3: Largest Number =====");

function findLargest(numbers) {

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > largest) {
            largest = numbers[i];
        }

    }

    return largest;
}

console.log(findLargest([12, 8, 45, 32, 90, 27]));

function findLargestReduce(numbers) {

    return numbers.reduce((largest, current) => {

        if (current > largest) {
            return current;
        }

        return largest;

    });

}

console.log(findLargestReduce([12, 8, 45, 32, 90, 27]));
