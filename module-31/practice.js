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
const isAge = people.