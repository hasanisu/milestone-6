const add = (first, second) => first +second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;
const result = multiply(20, 10);
// console.log(result);

// no perametar
const getPie = () => 3.14;

// one perametar 
const doubleIt = (num) => num * 2;

// one parameter simple version 
const fiveTimes = num => num * 5;

// multi line arrow function 
// if you want to return something, use the return
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum + secondSum;
    const result = multiplyResult / 2;
    return result;
}