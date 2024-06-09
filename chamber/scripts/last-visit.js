const visitDisplay = document.getElementById("lastVisit");
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
const msToDays = 84600000;
let days = ((Date.now() - lastVisit) / msToDays).toFixed(0);

if (lastVisit == 0) {
    visitDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else if ((Date.now() - lastVisit) < msToDays) {
    visitDisplay.textContent = `Back so soon! Awesome!`;
} else if (days == 1) {
    `You last visited 1 day ago.`
} else {
    `You last visited ${days} days ago.`;
}

lastVisit = Date.now()

localStorage.setItem("lastVisit-ls", lastVisit);
