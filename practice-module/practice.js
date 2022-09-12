/*
practice-1 and 2

১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/
const a = 12;
const b = 21;

let c = 12;
let d = 21;

const isString = `The value of: ${a} and the value of ${b} together ${a+b}`;
// console.log(isString);

const anObject = {
    name: 'Hasan',
    age: 30
};
const result = `this is ${anObject.name} and he is ${anObject.age} years old`;
// console.log(result);

/*
practice-problem: 3.1
একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
*/

const anArrow = (numbers) => numbers / 5;
const results =  anArrow(10);
console.log(results);

/*
practice-problem: 3.2
তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
*/
const isMultiple = (first, second) => {
    const add = first + 2;
    const add1 = second +2;
    const multiple = add * add1;
    return multiple;
}
const calculation = isMultiple(4, 6);
// console.log(calculation);


/*
practice-problem: 3.3
এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
*/
const multipleCal = (a, b, c) => {
    const multiple1 = a * b * c;
    return multiple1;
}
const numbers1 = multipleCal( 2, 6, 3);
// console.log(numbers1);


// practice-problem: 3.4
const isDouble = (num1 , num2 ) => {
    const helo = isDouble.length + 2;
    return helo;
}
const gelo = isDouble(12, 34);
console.log(gelo);

/*
practice-problem: 5
অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */

const anArray = [2, 5, 6, 7, 9,];
output = [];
const conceptMap = anArray.map(num => num * 5);
output.push(conceptMap);
// console.log(output);


/*
practice-problem: 6
[ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */

const oddNumber = anArray.filter(oddnum => oddnum % 2 == 1);
// console.log(oddNumber);

/*
practice-problem: 7
একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'iphone', price: 45000},
    {id: 1, name: 'sumsang', price: 45000},
    {id: 1, name: 'tablet', price: 5000},
]

const productsFind = products.find(product => product.price == 5000);
// console.log(productsFind);

/* 
practice-problem: 10
তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
*/
function isNumber(x, y, z = 7){
    const isAdd = x + y + z;
    return isAdd;
}
const numb = isNumber(2 , 3 );
console.log(numb);

/*
practice-problem: 9
চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
*/
const nayoks = ['sakib', 'riaj', 'ilias'];
const [king, notun, three] = nayoks;

console.log(three);