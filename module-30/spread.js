const max = Math.max(12, 85, 999, 78);

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers); /*three dot dile number gulo array theke ber hoye ashe */
// console.log(largest);

// const numbers2 = numbers;
// numbers.push(55);
// numbers2.push(7777);
// console.log(numbers);
// console.log(numbers2);
/*eikhane duita man e same dekasse karon duita man e same 
jaiga theke ashtese.*/

// jodi new element add korte chai tahole necher ei methode use korte hobe
const numbers2 =[...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);

// new ekta array diclare with previous number array
const numbers3 = [778, 68, ...numbers, 50];
console.log(numbers3);
