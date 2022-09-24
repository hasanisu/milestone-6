// left side er gulo hosse keys and right side er gulo hosse value

const bottle = {
    color: 'yellow', 
    price: 50,
    isCleaned: true, 
    capacity: 1
}
// object er moddhe joto gulo keys ase eigulo k pawar niyom
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
// array moddhe jodi array hoi tahole take bole two diamention
/*
result
[
  [ 'color', 'yellow' ],
  [ 'price', 50 ],      
  [ 'isCleaned', true ],
  [ 'capacity', 1 ]     
]
*/

// const twoDimention = [ [ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ] ]

/*
kono ekta property k delet korar jonno niche ei system ta use hoi. 
kintu jodi delete er age seal ta use kori tahole ar delete korte 
parbo na.

tobe seal korle kono property k delete korte parbo na but oi property
k modify korte parbo kintu kono new keys add korte parbo na.

ar jodi ami freeze kori tahole delete, modify, new keys add kisui kora jabe na
*/
console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);