const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        /* kono ekta object er method er moddhe jodi oi object er poperty 
        paite chai tahole this.property name dite hobe 
        
        */
        return this.name + 'is particepating in an exam';
    },
    improveExam: function(subject){
        this.exam(); /* ekta method er moddhe onno method kew call korte pari */
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }

}
const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
console.log(reExam);
const remaining = student.treatDey(900, 100);
// console.log(remaining);
const dolaRemaining = student.treatDey(500, 50);
// console.log(dolaRemaining);