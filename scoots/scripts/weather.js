const currentTemp = document.querySelector('#current-temp');
const weatherMain = document.querySelector('#weather-main')
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');
const humidity = document.querySelector('#humidity');
const nextDayTemp = document.querySelector('#next-day-temp')
const highTemp = document.querySelector('#max-temp');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42242&lon=-86.92667&units=imperial&appid=452e25a3aabb8cddeafb9392f5338b35'

async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text())
        }
    }
    catch (error) { }
}

function displayWeather(data) {

    const currentWeather = data.list[0];

    currentTemp.innerHTML = `${Math.round(currentWeather.main.temp)}&deg;F`;
    const icon = currentWeather.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', currentWeather.weather[0].main);
    weatherDesc.textContent = currentWeather.weather[0].description;
    humidity.textContent = `Humidity: ${currentWeather.main.humidity}%`;
    weatherMain.innerHTML = currentWeather.weather[0].main;
}

function displayForecast(data) {
    let maxTemp = 0;
    const targetHour = 15; // 3:00 PM
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dateToday = today.toISOString().split('T')[0];
    const dateTomorrow = tomorrow.toISOString().split('T')[0];

    const nextDayForecast = data.list.find(forecast => {
        const forecastDateTime = new Date(forecast.dt_txt);
        const forecastDate = forecastDateTime.toISOString().split('T')[0];
        return forecastDate === dateTomorrow && forecastDateTime.getHours() === targetHour;
    });

    data.list.forEach(element => {
        if (element.dt_txt.split(" ")[0] == dateToday) {
            if (element.main.temp > maxTemp) {
                maxTemp = element.main.temp;
            }
        }
    });

    if (maxTemp > 0) {
        highTemp.innerHTML = `Today's high is ${Math.round(maxTemp)}&deg;F.`;
    }

    nextDayTemp.innerHTML = `${Math.round(nextDayForecast.main.temp)}&deg;F`;
}

// function displayForecast(data) {

//     let today = new Date();
//     let curryear = today.getFullYear();
//     // year.innerHTML = curryear;
//     let month = (today.getMonth() + 1).toString().padStart(2, '0');
//     let day = today.getDate().toString().padStart(2, '0');

//     let tomorrow = `${curryear}-${month}-${Number(day) + 1} 15:00:00`;
//     let todaydate = `${curryear}-${month}-${day}`
//     let highest = 0
//     data.list.forEach(element => {
//         if (element.dt_txt.split(" ")[0] == todaydate) {
//             if (element.main.temp > highest) {
//                 highest = element.main.temp;
//             }
//         }
//         if (element.dt_txt == tomorrow) {
//             nextDayTemp.innerHTML = `Tomorrow at 3pm - ${Math.round(element.main.temp)}&deg;F`;
//         }
//     });
//     if (highest > 0) {
//         highTemp.innerHTML = `Today's high is ${Math.round(highest)}&deg;F`
//     } else {
//         displayWeather(data);
//     }
// }

getWeather();