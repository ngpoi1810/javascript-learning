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

/*
- Vì JS chỉ có thể "Do one thing" tại một lúc và không thể nào xảy ra việc multitasking. Tiếp theo ta sẽ có WebAPIs Enviroment
nhũng cái này là một vài APIs được cung cấp đến Engine nhưng cái này thì không thực sự là một phần của chính JS ví dụ như
DOM timer, Fetch API, Geolocation API,...
- Tiếp theo thì ta có Callback Queue: Đây là nơi để sẵn sàng thực thi những callback function
- Cuối cùng bất cứ khi nào mà Call Stack rỗng thì "The Event Loop" sẽ lấy những cái callback từ "Callback Queue" và đẩy nó vào bên trong
"Call Stack" để được thực thi vậy nên "The Event Loop" là một phần thiết yếu để làm cho các hành vi bất đồng bộ khả thi trong JS
- Đó là lý do tại sao mà chúng ta có "Non blocking concurrency model" trong JS. Và một "Concurrency Model" một cách đơn giản là có thể 
xử lý multiple things tại cùng một lúc.
- Và một lưu ý là Promise không chạy trong "Callback Queue" thay vào đó nó sẽ được chạy trong một Queue đặc biệt hơn được gọi là
"Microtask Queue" về cơ bản thì nó được ưu tiên hơn "Callback Queue"
*/