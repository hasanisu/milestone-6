const loadMeals = (search) => {
    // ei link take dynamic korar jonno nicher ei code use hobe
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}` 
    fetch(url)
    .then(res => res.json())
    .then(data => displyMeals(data.meals));
}

const displyMeals = meals =>{
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML ='';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                     <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv);
    })
}

const searchFood = () =>{
    const searchFeild = document.getElementById('search-field');
    const searchText = searchFeild.value;
    loadMeals(searchText);
    searchFeild.value = '';
}

const loadMealDetail = (idMeal) => {
    // console.log('get details of id meal', idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0])); 
    /* prothome eita console.log kore dekheci 
    eita prothme ekta meals name objcet silo oi object k console.log kore amra ekta array peyesi
    and ei array te ekta matro object ase ei jonno amra index hishebe 0 niyesi */
}


const displayMealDetails = meal =>{
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card')
    mealDiv.innerHTML = `
            
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>        
    `
    detailContainer.appendChild (mealDiv);
}

loadMeals('');