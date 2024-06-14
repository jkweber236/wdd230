const range = document.getElementById("rating");
const displayValue = document.getElementById("displayValue");

displayValue.innerText = range.value;

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    displayValue.innerText = range.value;
}


const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");
const message = document.querySelector("#formmessage");

confirmPass.addEventListener("focusout", checkSame);

function checkSame() {
    if (password.value !== confirmPass.value) {
        message.textContent = "Passwords do not match";
        message.style.visibility = "show";
        confirmPass.style.backgroundColor = "#fff0f3";
        confirmPass.value = "";
        password.value = "";
        password.focus();
    } else {
        message.style.display = "none";
        confirmPass.style.backgroundColor = "#fff";
        confirmPass.style.color = "#000";
    }
}