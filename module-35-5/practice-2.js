/*
৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
*/

const leHalua = () => 89;
// console.log('man', leHalua());

/*
৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
*/

const isDivided = (num) => num / 17;
const result = isDivided(34);
// console.log(result);

/*
৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 
*/

const isAdd = (first, second) => {
    const num1 = first + 7;
    const num2 = second + 5;
    const total = num1 + num2;

    if(total % 2 === 0){
        return true;
    }
    else{
       return false
    }
}
const result1 = isAdd(10, 20);
// console.log(result1);

/*
৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/
const anArrow = (first) =>{
    for(num of first){
        let add = num + 7;
        let square = Math.pow(add, 2);
        // console.log(square);
    }
    
    
}
const isNumebr = [12, 34, 1, 6,];
const hello = anArrow(isNumebr);
console.log(hello)

