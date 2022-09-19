const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

}

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('coutries-container');
    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Country Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital? country.capital[0]: 'No Capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv);
    })
}
const loadCountryDetail = (code) =>{
    // https://restcountries.com/v3.1/alpha/{code}   ei code ta use hobe and eita hobe dynamic
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data[0]))
}
const displayCountry = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img src="${country.flags.png}">
    `
}

loadCountries()