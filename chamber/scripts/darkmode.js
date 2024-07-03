const modeButton = document.querySelector(".switch input");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer")

modeButton.addEventListener("change", () => {
    main.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
});