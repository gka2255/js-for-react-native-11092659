/**
 * Processes an array of numbers by squaring even numbers and tripling odd numbers.
 * @param {number[]} numbers - Array of numbers to be processed.
 * @returns {number[]} - New array with processed numbers.
 */
function processArray(numbers) {
    return numbers.map(number => number % 2 === 0 ? number ** 2 : number * 3);
}

// Example usage (optional for testing):
console.log(processArray([2, 4, 6, 8])); // Output: [3, 6, 9, 112]

/**
 * Formats an array of strings based on the corresponding processed numbers.
 * @param {string[]} strings - Array of strings to be formatted.
 * @param {number[]} numbers - Array of processed numbers.
 * @returns {string[]} - Array of formatted strings.
 */
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase());
}

// Example usage (optional for testing):
const strings = ["To err", "Is", "human"];
const processedNumbers = processArray([1, 2, 3, 4]); // [3, 4, 9, 16]
console.log(formatArrayStrings(strings, processedNumbers)); // Output: ["To err", "is", "human"]
