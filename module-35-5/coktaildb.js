const loadDrinks = () =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDrinks(data.drinks))
}

const displayDrinks = (drinks) => {
    console.log(drinks);
    const drinksArea = document.getElementById('load-area');
    drinks.forEach(drink =>{
        console.log(drink);
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('col');
        drinkDiv.innerHTML=`
        <div class="card">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${drink.strCategory}</h5>
          <p class="card-text">${drink.strInstructionsIT.slice(0, 100)}</p>
          <button onclick="loadDetails('${drink.idDrink}')" type="button" class="btn btn-primary btn-lg">More Info</button>
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
    console.log('clicked', drink);
}
loadDrinks();