const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.42242&lon=-86.92667&units=imperial&appid=452e25a3aabb8cddeafb9392f5338b35";
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42242&lon=-86.92667&units=imperial&appid=452e25a3aabb8cddeafb9392f5338b35";
const highurl = "https://api.openweathermap.org/data/2.5/weather?lat=20.42242&lon=-86.92667&units=imperial&appid=452e25a3aabb8cddeafb9392f5338b35"
const temperature = document.querySelector("#temp-desc");
const humidity = document.querySelector("#humidity");
const icon = document.querySelector("#weather-icon");
const forecast = document.querySelector("#next-day-temp");
const maintemp = document.querySelector("#weather-main");
const hightemp = document.querySelector("#max-temp");

async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

function displayWeather(data) {
    maintemp.innerHTML = `${data.weather[0].main} `;
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;F and ${data.weather[0].description}`;
    humidity.innerHTML = `Humidity - ${data.main.humidity}%`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.setAttribute("src", iconsrc)
    icon.setAttribute("alt", data.weather[0].main)
}

async function getForecast() {
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

function displayForecast(data) {

    let today = new Date();
    let curryear = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');

    let tomorrow = `${curryear}-${month}-${Number(day) + 1} 15:00:00`;
    let todaydate = `${curryear}-${month}-${day}`
    let highest = 0
    data.list.forEach(element => {
        if (element.dt_txt.split(" ")[0] == todaydate) {
            if (element.main.temp > highest) {
                highest = element.main.temp;
            }
        }
        if (element.dt_txt == tomorrow) {
            forecast.innerHTML = `Tomorrow at 3pm - ${Math.round(element.main.temp)}&deg;F`;
        }
    });

    if (highest > 0) {
        hightemp.innerHTML = `Today's high is ${Math.round(highest)}&deg;F`
    } else {
        getCurr();
    }
}

async function getCurr() {
    try {
        const response = await fetch(highurl);
        if (response.ok) {
            const data = await response.json();
            displayCurr(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

function displayCurr(data) {
    hightemp.innerHTML = `Today's high is ${Math.round(data.main.temp_max)}&deg;F`
}


getWeather();
getForecast();