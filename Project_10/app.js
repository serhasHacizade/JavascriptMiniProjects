// this project is query simple with openWeather
const settings = {
    url: 'url',
    key: 'api code',
    iconUrl: 'iconUrl',
    location: 'sivas',
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", (event) => {
    if (event.keyCode == '13') {
        getResult(searchBar.value)
    }
});

const getResult = (cityName) => {
    let query = `${settings.url}weather?q=${cityName}&appid=${settings.key}&units=metric&lang=tr`
    // console.log("Json olarak tutulan link: ", query);
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResult)
}

const displayResult = (result) => {
    console.log("Json olarak tutulan bilgiler: ", result);
    let city = document.querySelector(".city");
    city.innerText = `${result.name}, ${result.sys.country}`
    let temp = document.querySelector(".temp");
    temp.innerText = `${result.main.temp}°C`
    let desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description + (result.weather[0].icon.endsWith('d') ? ' (Gündüz)' : ' (Gece)')
    let minMax = document.querySelector(".minMax");
    minMax.innerText = `${result.main.temp_min}°C / ${result.main.temp_max}°C`;
    let icon = document.querySelector('.icon');
    icon.src = settings.iconUrl + result.weather[0].icon + '@2x.png'
}

/**
 * DOMContentLoaded triggers when document loaded
 * You can add event listeners to document object
 * Like another html elements
 */
document.addEventListener('DOMContentLoaded', () => {
    getResult(settings.location);
    searchBar.focus(); // search input auto focus
})
