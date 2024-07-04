let timestamp = document.querySelector("#time-stamp")
let form = document.querySelector("#join-form")

form.addEventListener("submit", (event) => {
    let now = Date.now();
    timestamp.value = now.toString();
});