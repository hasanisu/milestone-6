/********************* practice problem -1. Map *******************/ 
const addNumber = [1, 3, 5, 7, 9];

    evenNumber = [];
    for(let number of addNumber){
        const result = number + 1;
        evenNumber.push(result);
        }

// console.log(evenNumber);

const isAdd = addNumber.map(num => num + 1);
// console.log(isAdd);

/********************* practice problem -2. filter *******************/ 

const anArray = [33, 50, 79, 78, 90, 101, 30];
const isDivided = anArray.filter(num => num % 10 == 0);
// console.log(isDivided);

/********************* practice problem -3. find *******************/ 

const isFind = anArray.find(num => num % 10 == 0);
// console.log(isFind);


/********************* practice problem -4. reduce *******************/ 

const isAnArray = [1, 9, 17, 22];
const isReduce = isAnArray.reduce((previous, current) => previous + current, 0);
// console.log(isReduce);

/********************* practice problem -5. reduce *******************/

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

const addAge = people.reduce((previous, current) => previous + current.age, 0);
// console.log(addAge);

/********************* practice problem -6. Access object value *******************/
const student = {
    name: 'fredie',
    age: 26
};
// console.log(student.age);

let data = {
    location:[
        {
            latitude:'34.5, 37.8',
            longitude: '98.77 58.7',
            city: 'Hyderabad',
            country: 'India'
        
        }
    ]
}
// console.log(data.location[0].city);

const users = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }
//   console.log(users.email);
// console.log(users.address);
// console.log(users.address.geo.lng);
// console.log(users.company.name);

// function min (nums){
//     return Math.min(nums)
// }
// console.log(min([1, 3, 2]));

// const cube = x => x*x*x;
// console.log(cube(2));

// const [a,b] = [1, 2, 3, 4, 5];
// console.log(a+b);

// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter(n => n % 2);
// console.log(output);

// const friends = ["Moushumi", "Misha", "Manna", "Mimi", "Mahiya"];
// const freiennd = friends.find(dost => dost.length == 5);
// console.log(freiennd);