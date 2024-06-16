const pattern = /^[A-Za-z\s-]{7,}$/;

let joinForm = document.getElementById("join-form");
let positionTitle = document.getElementById("position-title");
let message = document.querySelector("#error-message");

joinForm.addEventListener("submit", function (event) {
    if (!pattern.test(positionTitle.value)) {
        message.innerHTML = "Please enter a valid title or position (at least 7 characters consisting of alphabetic characters, hyphens, and/or spaces).";
        event.preventDefault();
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});
