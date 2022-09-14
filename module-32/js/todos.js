function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data));
}

function displayTodos(todos){
    // get the container
    const todoContainer = document.getElementById('todos-container');

    for(const todo of todos){
        // create the child element
        const todoDiv = document.createElement('div');
        // set innerHTML or innerText
        todoDiv.innerHTML=`
        <h3>Id: ${todo.id}</h3>
        <h4>Id: ${todo.title}</h4>
        <h5>Id: ${todo.userId}</h5>
        `
        // append child 
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos()