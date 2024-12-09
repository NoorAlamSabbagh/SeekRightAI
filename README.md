Node.js and JavaScript Interview Questions

This document provides solutions to common Node.js and JavaScript interview questions. It includes examples of a Node.js HTTP server, a demonstration of JavaScript variable types in mathematical operations, and custom implementations of array methods like map, reduce, filter, and flatMap

Node.js Question
Task
Write a simple Node.js HTTP server that listens on port 3000 and responds with a JSON object when accessed via an API call.

Solution
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const responseData = {
        message: 'Hello, world!',
        timestamp: new Date().toISOString(),
        success: true
    };
    res.writeHead(200);
    res.end(JSON.stringify(responseData));
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

Description
Creates an HTTP server using Node.js that listens on port 3000.
Responds to incoming requests with a JSON object containing a message, timestamp, and success flag.



Node.js and JavaScript Interview Questions
This document provides solutions to common Node.js and JavaScript interview questions. It includes examples of a Node.js HTTP server, a demonstration of JavaScript variable types in mathematical operations, and custom implementations of array methods like map, reduce, filter, and flatMap.

Node.js Question
Task
Write a simple Node.js HTTP server that listens on port 3000 and responds with a JSON object when accessed via an API call.

Solution
javascript
Copy code
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const responseData = {
        message: 'Hello, world!',
        timestamp: new Date().toISOString(),
        success: true
    };
    res.writeHead(200);
    res.end(JSON.stringify(responseData));
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
Description
Creates an HTTP server using Node.js that listens on port 3000.
Responds to incoming requests with a JSON object containing a message, timestamp, and success flag.
JavaScript Question 1
Task
Create a mathematical operation using let, var, and const in JavaScript and print the results in the console accordingly.

Solution
const baseValue = 10;
let multiplier = 5;
var additionalValue = 3;

const result1 = baseValue + multiplier;
let result2 = baseValue * multiplier;
var result3 = baseValue - additionalValue;

multiplier = 7;
let result4 = baseValue * multiplier;

console.log("Result of addition (const + let):", result1);
console.log("Result of multiplication (const * let):", result2);
console.log("Result of subtraction (const - var):", result3);
console.log("Updated result after modifying multiplier (const * updated let):", result4);

Description
Demonstrates the use of const (immutable), let (block-scoped, mutable), and var (function-scoped, mutable).
Performs basic mathematical operations: addition, multiplication, and subtraction.
Prints the results to the console.

JavaScript Question 2
Task
Write a function to implement map, reduce, filter, and flatMap using JavaScript.

Solution

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
console.log("customMap:", customMap(numbers, (x) => x * 2));
console.log("customReduce:", customReduce(numbers, (acc, x) => acc + x, 0));
console.log("customFilter:", customFilter(numbers, (x) => x % 2 === 0));
console.log("customFlatMap:", customFlatMap(numbers, (x) => [x, x * 2]));


Description
Implements custom versions of array methods:
customMap: Transforms elements of an array using a callback.
customReduce: Accumulates values in an array into a single output.
customFilter: Filters elements based on a condition.
customFlatMap: Combines map and flattening of arrays.


Usage
Use the provided Node.js server code to demonstrate API response handling.
Use the JavaScript examples to illustrate variable scope and control over array transformations.
These examples are suitable for interview preparation and demonstrate foundational JavaScript concepts.
