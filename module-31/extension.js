
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
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}