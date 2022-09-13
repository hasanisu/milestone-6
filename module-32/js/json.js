const user = {id: 1, name: 'goriber amir', job: 'actor'};
// JavaScript object Notation (JSON)
const strigify = JSON.stringify(user);
// console.log(user);
// console.log(strigify);
/*
{ id: 1, name: 'goriber amir', job: 'actor' }
{"id":1,"name":"goriber amir","job":"actor"}
*/

/*
joto gulo value ba string ase shob gulo k double qutation 
boshabe hosse json
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        county: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);

javascript k string e convert korte hoile JSON.stringify use korte hobe 
r string theke normal object k convert korte hoile JSON.parse use korte hobe 