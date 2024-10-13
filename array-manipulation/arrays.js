//Find Maximum Element in an Array:
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

//Filter Even Numbers from an Array:
function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEven([1, 2, 3, 4, 5])); // Output: [2, 4]

//Filter Odd Numbers from an Array:
function filterOdd(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(filterOdd([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

//Sort Array in Ascending Order
function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

console.log(sortAscending([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

//Sort Array in Descending Order
function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

console.log(sortDescending([5, 3, 8, 1, 2])); // Output: [8, 5, 3, 2, 1]

//Remove Duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

//Find the Intersection of Two Arrays
function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(findIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]