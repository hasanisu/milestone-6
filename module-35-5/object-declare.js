// checklist No 1

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
    maritalStatus: 'married'

    }
    
    // console.log(student);
    const output = student.salary();
    // console.log(output);

    /*
    ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
    */

    const stringOutput =`
    this is your third element index ${student.jobDescription[2]}
    another one is your name ${student.name}
    second one is your Marital Status ${student.maritalStatus}
    
    `
// console.log(stringOutput);

