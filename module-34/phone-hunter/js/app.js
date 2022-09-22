// ei khane datar limit & show all er jonno dataLimit parameter add kora hoyese 
const loadPhones = async(searchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimit);
}

// ei khane datar limit & show all er jonno dataLimit parameter add kora hoyese 
const displayPhone = (phones, dataLimit) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML='';
    // display 20 phones only
    // phones = phones.slice(0,10); /* eita if er moddhe dewa hoyese */
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0,10);
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none');
    }


    // display no phones found
    const noPhoen = document.getElementById('no-phone-massage');
    if(phones.length === 0){
        noPhoen.classList.remove('d-none');
    }
    else{
        noPhoen.classList.add('d-none');
    }


    // display all phones 
    phones.forEach( phone =>{
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        
            <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This phone is realy awesome</p>
                    <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary">Show Details</button>
                </div>
            </div>
                   
        `
        phoneContainer.appendChild(phoneDiv);
    })
    // stop sppiner or loader
    toggleSpiner(false);
}





// eita ekta common fuction for data load 
const searchProcces = ( dataLimit) =>{
    toggleSpiner(true);
    const searchField =document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(event){
    if(event.key === 'Enter' ) {
        searchProcces(10)
    }
})

// handle search btn click
document.getElementById('btn-search').addEventListener('click', function(){
    // start loader
    // toggleSpiner(true);
    // const searchField =document.getElementById('search-field');
    // const searchText = searchField.value;
    // loadPhones(searchText);
    // eita ekta common function niye gesi
    searchProcces(10)
})

/* eita hosse loadding spenner, data jokhon load hobe tokhon eita dekhabe and data jokhon display hobe tokhon eita remove hoye jabe.
eit dui jaigai kaj korbe jonno alada alada functiion na likhe ekta common function likha hoyese.
jokhon button click hobe tokhon spenner start hobe...ei jonno button click er porei eita dewa hoyese.
abar data jokhon display hobe tokhon loading spenner er display none hoye jabe.
*/
const toggleSpiner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

// not the besst way to load show all
document.getElementById('btn-show-all').addEventListener('click', function(){
    searchProcces();
})


const loadPhoneDetails = async id =>{
    const url =`https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.data);
}
// loadPhones();