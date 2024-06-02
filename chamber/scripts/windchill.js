let answer = document.querySelector(".windchill")
function getWindChill() {
    let temp = document.getElementById("temperature").value;
    let windspeed = document.getElementById("windspeed").value;

    if (temp <= 50 && windspeed > 3) {
        let newAnswer = (35.74 + (0.6215 * temp) - (35.75 * (windspeed ** 0.16)) + (0.4275 * temp * (windspeed ** 0.16)));
        let rounded = Math.round(newAnswer * 10) / 10;
        answer.innerHTML = `Wind Chill: ${rounded} °F`;
    } else {
        answer.innerHTML = "N/A";
    }
}