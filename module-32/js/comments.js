function commentsSec(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(sec => sec.json())
    .then(data => displayComments(data))
}

function displayComments(comments){
    const commentsContainer = document.getElementById('comments-container');
    for(const comment of comments){
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
        <h3>Email Id: ${comment.email}</h3>
        <h4>Name: ${comment.name}</h4>
        <h5>Body: ${comment.body}</h5>
        `
        commentsContainer.appendChild(createDiv);
    }
}
commentsSec()