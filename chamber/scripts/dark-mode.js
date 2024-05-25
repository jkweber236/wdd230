const modeButton = document.querySelector(".switch input");
const main = document.querySelector("main");

modeButton.addEventListener("change", () => {
    main.classList.toggle('dark-mode');
});