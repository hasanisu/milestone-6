/*
1. Noraml function this hishebe set kore tar ek dhap oporer object k..jemon kodomAli
2. arrow function ta this hishebe set kore golbal object k jemon window k
*/

const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this);
        /* kono ekta object er method er moddhe jodi oi object er poperty 
        paite chai tahole this.property name dite hobe 
        
        */
        return this.name + 'is particepating in an exam';
    },
    examArrow: () => {

    },
    examNested: ()=>{
        const arrow = () =>{
            console.log(this);
        }
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
// kodomAli.exam();

const result = kodomAli.exam();

const badamAli = {
    name: 'kacha badam',
    money: 8000
}
badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandle(){
    console.log('inside click handle', this);
}
document.getElementById('click-two').addEventListener('click', function(){
    console.log(this);
})