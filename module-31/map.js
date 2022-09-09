const numbers = [2, 5, 8, 9];
// const output = [];
// for(const number of numbers){
//     const result = number*2;
//     output.push(result);
// }
// console.log(output);

// ei same jinish ta amra ekta function e call korte pari
function getDouble(numbers){
    const output = [];
    for(const number of numbers){
    const result = doubleIt(number);
    output.push(result);
}
return output;
}


function doubleItOld(num){
    return num * 2;
}
const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDoubleDirect);

/*
purpose: 
1. get an array
2. for every elements of the array do something 
3. store the result in an array 
4. return the result array 
*/

const double = getDouble(numbers);
console.log(double);
console.log(makeDouble);