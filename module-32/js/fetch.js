/*

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response)) // .json is not similar but close to JSON.parse
//   .then(json => console.log(json))

/*
kono ekta api k call korle 2 theke 3 ghotona ghot te pare.
1. tumi jokhn call korba tokhon shate shate diye dilo
2. she dilo but onek deri kore dilo.
3. tumi call korla but she dilo na.

ei jonn .then ta use hoi
*/


const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(response => response.json()) // eita hosse promise response.json()
// .then(json => console.log(json))

function loadData(){
    fetch(url)
.then(response => response.json())
.then(json => console.log(json))
}