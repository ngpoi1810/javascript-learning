'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function renderData(data) {
    const cur = Object.keys(data.currencies)
    const lang = Object.keys(data.languages)
    const html = `<article class="country">
          <img class="country__img" src="${data.flags.svg}"  alt=""/>
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[lang]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[cur].name}</p>
          </div>
        </article>`
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
}

//Dùng XMLHttp để render data
// function getCountries(country) {
//     const dataCountries = new XMLHttpRequest()
//     dataCountries.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//     dataCountries.send()
//     dataCountries.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText)
//         renderData(data)
//     })
// }
//Bây giờ sẽ dùng fetch để render data
function getCountryData(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => res.json())
        .then(data => {
            renderData(data[0])
            return 23;
        }).then(data => alert(25))
}

getCountryData('portugal')

// Event loop
