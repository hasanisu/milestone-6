// const first = 2;
// const second = 2;
// if(first === second ){
//     console.log('they are same')
// }
// else{
//     console.log('different')
// }
// const first = {a: 2};
// const second = {a: 2};
// const third = second;
/* third and second same hobar karon hosse second er man ta assign kora
kora hoyese third　orthat second jei memory address rakha hoyese third o 
eki memory address te rakha hoyese */
// if(third === second ){
//     console.log('they are same')
// }
// else{
//     console.log('different')
// }
/*
result
PS E:\Web Development\javascript\milestone-6\module-35> node compare.js
different
PS E:\Web Development\javascript\milestone-6\module-35> node compare.js
they are same
PS E:\Web Development\javascript\milestone-6\module-35> 
*/


// do not use this method to compare object or array
const first = {a: 5, b: 2, D: 7};
const second = {a: 5, c: 7, b: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString)
// if(firstString === secondString){
//     console.log('same')
// }
// else{
//     console.log('different')
// }


function compareObject(first, second){
    const firstKey = Object.keys(first);
    const secondKey = Object.keys(second);
    if(firstKey.length === secondKey.length){
        for(const key of firstKey){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
const isSame = compareObject(first, second);
console.log(isSame);