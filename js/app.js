// Terminal application with Javascript Node.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fizzBuzz(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example usage:
rl.question('Enter a number: ', (answer) => {
    // convert strings to int, and trim
    const n = parseInt(answer.trim(), 10);
    fizzBuzz(n);
    rl.close();
});
