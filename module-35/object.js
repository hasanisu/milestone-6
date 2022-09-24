// object er moddhe dui ta jinish thake 
// 1. property 
// 2. method

// creat object using object literals 
const player = {}; /* eita hosse ekta empty object. eitar moddhe amra object add korbo */
player.name ='Small Nirob';
player.speciality = 'batsman';
player.bat = function(){ /* eita hosse method */
    // console.log('swing your bat');
}
// console.log(player);
player.bat();


const student = {
    name: 'Pandey', 
    job: 'khai andey',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 100000
}

// 2. object constructor
const person = new Object();
// console.log(person);

// 3. object create method
const atel = Object.create(student);
// console.log(atel.name);

// 4. class 
class Person{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age  = age;
    }

}
const person1 = new Person(56);
console.log(person1);

// 5. Function
function Car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 32);
console.log(tesla);