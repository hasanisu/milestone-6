const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}

const displayComment = comments =>{
    // console.log(comments);
    const commentArea = document.getElementById('display-container');
    comments.forEach(comment =>{
        // console.log(comment);
        const createDiv = document.createElement('div');
        createDiv.classList.add('showoff');
        createDiv.innerHTML = `
         <div onclick ="loadData(${comment.postId})">
            <h2>Email Id:${comment.email}</h2>
            <h3>Name: ${comment.name}</h3>
            <h4>Post Id: ${comment.postId}</h4>
        </div>
        `
        commentArea.appendChild(createDiv);
        
    })
}

const loadData = (postId) =>{
    // console.log('here is your comment id', id)
    const url = `https://jsonplaceholder.typicode.com/posts${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data))
}

const displayPost = comment =>{
        const postContainer = document.getElementById('post-container');
        const postDiv = document.createElement('div');
        postDiv.classList.add('showoff');
        postDiv.innerHTML = `
        
            <h2>Email Id: ${comment.email}</h2>
             <h3>Name:</h3>
             <h4>Post Id:</h4>
        
        `
        postContainer.appendChild(postDiv);

    
}

loadComments('');