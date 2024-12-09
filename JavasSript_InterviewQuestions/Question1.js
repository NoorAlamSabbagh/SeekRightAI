
const baseValue = 10;
let multiplier = 5;
var additionalValue = 3;

const result1 = baseValue + multiplier;
let result2 = baseValue * multiplier; 
var result3 = baseValue - additionalValue;

multiplier = 7;
let result4 = baseValue * multiplier; 

// Printing the results
console.log("Result of addition (const + let):", result1);
console.log("Result of multiplication (const * let):", result2);
console.log("Result of subtraction (const - var):", result3);
console.log("Updated result after modifying multiplier (const * updated let):", result4);
