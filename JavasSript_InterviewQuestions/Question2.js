// Custom implementation of `map`
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Custom implementation of `reduce`
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

// Custom implementation of `filter`
function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Custom implementation of `flatMap`
function customFlatMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const mappedValue = callback(array[i], i, array);
        if (Array.isArray(mappedValue)) {
            result.push(...mappedValue);
        } else {
            result.push(mappedValue);
        }
    }
    return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Using customMap
const doubled = customMap(numbers, (x) => x * 2);
console.log("customMap:", doubled); // [2, 4, 6, 8, 10]

// Using customReduce
const sum = customReduce(numbers, (acc, x) => acc + x, 0);
console.log("customReduce:", sum); // 15

// Using customFilter
const evenNumbers = customFilter(numbers, (x) => x % 2 === 0);
console.log("customFilter:", evenNumbers); // [2, 4]

// Using customFlatMap
const flatMapped = customFlatMap(numbers, (x) => [x, x * 2]);
console.log("customFlatMap:", flatMapped); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
