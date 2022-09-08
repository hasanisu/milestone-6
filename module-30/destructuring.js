const fish = {
    name: 'king hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '01718183566',
    price: 4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);

/*jehetu ami ekta object er property gulo k call korar jonno alada 
alada variable diclare kortesi with same property name, tai alada alada
variable diclare na kore amra ekta variable diclare korte pari ta niche 
dewa holo */

const {phone, color, price} = fish;
console.log(phone);
console.log(price);

// array er khtrew amra eita use korte pari 
const nayoks = ['sakib', 'riaj', 'ilias'];
const [king, notun, puran] = nayoks;
console.log(notun);

function getName(){
    return ['alim', 'halim'];
}
const [baba, chacha] = getName();
console.log(chacha, baba);