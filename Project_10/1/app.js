const url = 'https://api.openweathermap.org/data/2.5/'
const key = '6b52b32f1758724c45c3e9ff18e8e6fc'



const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value)
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log("Json olarak tutulan link: ", query);
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result) => {
    console.log("Json olarak tutulan bilgiler: ",result);
    let city = document.querySelector(".city");
    city.innerText = `${result.name}, ${result.sys.country}`
    let temp = document.querySelector(".temp");
    temp.innerText = `${result.main.temp}°C`
    let desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description
    let minMax = document.querySelector(".minMax");
    minMax.innerText = `${result.main.temp_min}°C / ${result.main.temp_max}°C`

}
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress",setQuery);