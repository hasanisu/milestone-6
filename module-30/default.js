// function add(first, second){
//     console.log(first, second);
//     second = second || 0;
//     // if(second === undefined){
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }


function add(first, second = 0){  /* second = 0, eita hosse shortcut way jodi ami second parametar er man jodi kisu na dei tahole error ashbe na */
    const total = first + second;
    return total;
}
const result = add(10, 20);
console.log(result);

function fullName(first, last='Chowdhury'){
    const name = first + ' ' + last; 
    return name;
}
const name = fullName ('Alam');
console.log(name);

