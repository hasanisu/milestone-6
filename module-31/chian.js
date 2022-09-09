const users = [{id: 1, name:'abul', job: 'doctor'}]
console.log(users[0].name); 

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'},
    ]
}
console.log(data.data[0].name);

const user = {
    id: 5000,
    name: 'Thomas albe edison',
    address: {
        street: {
            first: '35/a kochukhet lane',
            second: 'third floor',
            side: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka',
    }
}

const userFloor = user.address?.stret?.second; /* address er pore ? mark mane hosse address 
er moddhe jodi kono value thake tahole shamne agaw r jodi na thake 
tahole stop hoye jaw. user.address.street.second  eitake bole chaining. */

console.log(userFloor);