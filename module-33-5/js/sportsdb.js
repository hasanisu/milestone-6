const loadSports = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England&s=Soccer')
    .then(res => res.json())
    .then(data => displaySports(data))
}

const displaySports = sports =>{
    console.log(sports);
    const sportsContainer = document.getElementById('sports-container');
    sports.forEach( sport => {
        console.log(sport);
        const sportDiv = document.createElement('div');
        sportDiv.classList.add('col');
        sportDiv.innerHTML = `
        <div class="card">
                        <img src="${sport.strSportThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${sport.strSport}</h5>
                          <p class="card-text">${sport.strSportDescription.slice(0,200)}</p>
                        </div>
                      </div>
        `
        sportsContainer.appendChild(sportDiv);

    })
}

loadSports();