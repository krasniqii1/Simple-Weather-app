const apiKey = '0d7336e1fc03fe0564bbf10f2123a76e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const weatherIcon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');
const searchBox = document.querySelector('.search input');
const btn = document.querySelector('.search button');


async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)

    temp.innerHTML = Math.round(data.main.temp) + '°C';
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + '%';
    windSpeed.innerHTML = data.wind.speed + ' Km/h';

    if (data.weather[0].main == 'clear') {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == 'Wind') {
        weatherIcon.src = "images/wind.png"
    }

    document.querySelector('.weather').style.display = "block";
}

btn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
