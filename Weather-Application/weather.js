


const apiKey = "5cfb12778937549ffe9cc62552e4edbc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBTN = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloud-solid.svg";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/sun-solid.svg";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/cloud-rain-solid.svg";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snowflakes-solid.svg";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/smog-solid.svg";
    }

    document.querySelector(".weather").style.display = "block";

}

searchBTN.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

