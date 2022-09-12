const numbers = [20, 54, 6, 87];

const half = numbers.map( n => n/2 );
// console.log(half);

const friends = ['Tom Hanks', 'Tom Cruis', 'Tom Brandy', 'Tom Solaiman'];
const firstLetter = friends.map(friend => friend[0]);
// console.log(firstLetter);

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'iphone', price: 45000},
    {id: 1, name: 'sumsang', price: 45000},
    {id: 1, name: 'tablet', price: 45000},
]

const items = products.map(product => product.name);
console.log(items);