const loadDrinks = (search) =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDrinks(data.drinks))
}

const displayDrinks = (drinks) => {
    // console.log(drinks);
    const drinksArea = document.getElementById('load-area');
    drinksArea.innerHTML='';
    drinks.forEach( drink => {
        // console.log(drink);
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('col');
        drinkDiv.innerHTML=`
        <div class="card">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <p class="card-text">${drink.strInstructionsIT.slice(0, 100)}</p>
          <button onclick="loadDetails('${drink.idDrink}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#coktailDetailsModel">Veiw Details</button>
        </div>
        </div>
        `
        drinksArea.appendChild(drinkDiv);
    })
}

const loadDetails = idDrink=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.drinks[0]))
}
const displayDetails = drink =>{
    console.log(drink);
    const modalNameSet = document.getElementById('coktailDetailsModelLabel');
    modalNameSet.innerText = drink.strDrink;
    const BodyText = document.getElementById('body-area');
    BodyText.innerHTML = `
    <p>Drinks Catagory: ${drink.strDrink ? drink.strDrink: 'No drinks catagory found'}</p>
    `


}
const searchFeild = ()=>{
    const searchArea = document.getElementById('input-something');
    const searchText = searchArea.value;
    console.log(searchText);
    loadDrinks(searchText)
} 
loadDrinks('a');