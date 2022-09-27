/*
৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/
const anArray = [35, 28, 49, 14, 7, 21, 70];
const number = anArray.map(num => num / 7);
// console.log(number);


/*
৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

*/
const student = {
    name: 'Imam Md Hasan',
    jobStatus: {
        firstJob: 'Jbnet Corporation',
        seccndJob: 'Unimoni KK',
        currentJob: 'Japan Remit Finance'
    },
    jobDescription: ['customer service', 'phone handling', 'transaction'],
    salary: function(){
        return this.name + 'salary is 10000 taka';
    },
    maritalStatus: 'married',
    age: 30

    }

    const {name, maritalStatus, age} = student;
    
    const players = ['sakib', 'mashrafi', 'tamim', 'mushfik'];
    const [batsman, balance, openar, kipper] = players;
    
    console.log(balance);
