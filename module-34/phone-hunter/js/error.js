fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// async

try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
catch{

}

/*
then kno use kori
synchronous = squencially kaj kore
Asynchronous bole
*/

// fetch er main name XMLHttpRequest