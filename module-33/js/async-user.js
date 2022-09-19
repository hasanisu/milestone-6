const loadUserFetch = () =>{
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
    .catch(error => console.log(error)) 
    /* jodi api link e kono vul thake tahole tahole error dekhanor 
    jonno .catch use kora hoi */
}

/* async hosse oporer function er onno ekta way..eitar kaj o same */
const loadUserAsync = async() =>{
    const url = `https://randomuser.me/api/?gender=female`;
    try{

    }
    catch (error){
        console.log(error)
    }
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0]);

}


const displayUser = user =>{
    console.log(user);
}