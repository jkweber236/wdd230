let timestamp = document.querySelector("#time-stamp")
let now = Date.now();
let form = document.querySelector("#join-form")

form.addEventListener("submit", (event) => {
    timestamp.value = now.toString();
});