// practice problem-1

// practice: 1:1

const multiple = (a, b, c) => a * b * c;
const result = multiple( 2, 3, 4);
console.log(result);  

const add = (num1, num2) => num1 + num2;
const results = add(10, 20);
console.log(results);

// practice: 1:2
const threeLine = `I am a web developer.
I love to code.
I love to eat biryani.
`
console.log(threeLine);

// practice: 1:3
const defaultParameter = (mango, banana = 0) => mango + banana;
const fruits = defaultParameter(10);
console.log(fruits);

// practice problem-4

const array1 = [24, 64, 23, 87];
const array2 = [54, 899, 64, 789];

const findMax = (num1, num2) =>{
    const array3 = num1.concat(num2);
    const array = Math.max(...array3)
    // console.log(array);
    return array
}
const findArray = findMax(array1, array2);
console.log(findArray);

// practice problem-3
function hasan (array){
    for(let i = 0; i > array.length; i++){
        const index = array[i];
        console.log(index);
    }

}
const aray = [20, 2, 4, 61];
const array5 = hasan(aray);
console.log(array5);



