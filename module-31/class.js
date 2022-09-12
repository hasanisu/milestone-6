// ei class k bole syntactic sugar 
//  class er rule hosse 
/*
1. class er name hobe Capital hobe
*/
class Instrutor {
    name;
    designation = 'Wev course Insteuctor'
    Team = 'Web Team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    starSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

const aamir = new Instrutor('aamir', 'mumbai');
console.log(aamir);