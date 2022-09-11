const numbers = [12, 54, 4, 62, 11, 78, 31, 45, 61,, 64, 96];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 20);
const even = numbers.filter(number => number % 2 == 0);
// console.log(even);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'iphone', price: 25000},
    {id: 1, name: 'sumsang', price: 70000},
    {id: 1, name: 'tablet', price: 40000},
]
const items = products.filter(product => product.price >= 40000);
console.log(items);