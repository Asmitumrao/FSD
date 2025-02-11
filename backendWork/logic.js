function sum(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

// we can export only one fuction only-----
// so we will make obj of all functions and export it

const obj = {sum, multiply};
module.exports = obj;