const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const forecastTable = document.querySelector('#forecast-table tbody');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.58&lon=-116.56&units=imperial&appid=452e25a3aabb8cddeafb9392f5338b35'

async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) { }
}

function displayResults(data) {

    const currentWeather = data.list[0];
    const temperature = currentWeather.main.temp;
    const icon = currentWeather.weather[0].icon;
    const description = currentWeather.weather[0].description;

    currentTemp.innerHTML = `${Math.round(temperature)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', currentWeather.weather[0].main);
    captionDesc.textContent = description;
}

async function displayForecast(data) {
    const days = {};

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString("en-US", { month: 'long', day: 'numeric' });
        const temp = item.main.temp;

        if (!days[date]) {
            days[date] = { high: temp, low: temp };
        } else {
            days[date].high = Math.max(days[date].high, temp);
            days[date].low = Math.min(days[date].low, temp);
        }
    });

    const forecastDays = Object.keys(days).slice(0, 3);
    forecastDays.forEach(day => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const highCell = document.createElement('td');
        const lowCell = document.createElement('td');

        dateCell.textContent = day;
        highCell.textContent = `${Math.round(days[day].high)}°F`;
        lowCell.textContent = `${Math.round(days[day].low)}°F`;

        row.appendChild(dateCell);
        row.appendChild(highCell);
        row.appendChild(lowCell);

        forecastTable.appendChild(row);
    });
}

getWeather();