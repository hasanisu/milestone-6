const loadUser = () => {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}  

const displayUser = users => {
    const userContainer = document.getElementById('users-container');
    for(const user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User Name: ${user.location.city} ${user.location.country}</h3>
        <h3>Name: ${user.name.first} ${user.name.last}</h3>
        <p>Email: ${user.email}</p>
        <p>User info</p>
        `
        userContainer.appendChild(userDiv);
    }
}

loadUser()