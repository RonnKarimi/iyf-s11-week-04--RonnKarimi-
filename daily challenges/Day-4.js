// ======================================
// Day 4: Remove Duplicates
// ======================================

console.log("\n===== Day 4: Remove Duplicates =====");

function removeDuplicatesSet(array) {

    return [...new Set(array)];

}

console.log(removeDuplicatesSet([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicatesFilter(array) {

    return array.filter((item, index) => {

        return array.indexOf(item) === index;

    });

}

console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5]));
