const numbers = [12, 54, 4, 60, 30, 78, 31, 45, 61,, 65, 96];

const fives = numbers.find(num => num % 5 ==0);
const fivesAll = numbers.filter(num => num % 5 ==0);
console.log(fives);
console.log(fivesAll);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'iphone', price: 25000},
    {id: 1, name: 'sumsang', price: 70000},
    {id: 1, name: 'tablet', price: 40000},
]