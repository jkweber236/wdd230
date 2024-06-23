const baseURL = "https://jkweber236.github.io/wdd230/";
const infoURL = "https://jkweber236.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards")
const list = document.querySelector("#list")

const gridbutton = document.querySelector("#gridview");
const listbutton = document.querySelector("#listview");
const cardsDisplay = document.querySelector("#cards");
const listDisplay = document.querySelector("#list")

async function GetInfo() {
    const response = await fetch(infoURL);
    const data = await response.json();
    displayCards(data.companies)
    displayList(data.companies)
}

function displayCards(companies) {

    companies.forEach((company) => {
        let card = document.createElement("section")
        let logo = document.createElement("img")
        let address = document.createElement("p")
        let number = document.createElement("p")
        let website = document.createElement("a")
        address.innerHTML = company.address
        number.innerHTML = company.phone
        website.innerHTML = "Website"

        card.setAttribute('class', "card")
        logo.setAttribute('class', "logo")
        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `${company.name}'s logo`);
        logo.setAttribute('loading', "lazy");

        website.setAttribute('href', company.website)

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);

        cards.appendChild(card);
    })
}

function displayList(companies) {

    companies.forEach((company) => {
        let item = document.createElement("section")
        let name = document.createElement("p")
        let address = document.createElement("p")
        let number = document.createElement("p")
        let website = document.createElement("a")
        name.innerHTML = company.name
        address.innerHTML = company.address
        number.innerHTML = company.phone
        website.innerHTML = "Website"

        item.setAttribute('class', "item")
        name.setAttribute('id', "first")
        address.setAttribute('id', "second")
        number.setAttribute('id', "third")
        website.setAttribute('id', "fourth")
        website.setAttribute('href', company.website)

        item.appendChild(name);
        item.appendChild(address);
        item.appendChild(number);
        item.appendChild(website);

        list.appendChild(item);
        listDisplay.style.display = "none";
    })
}

GetInfo()


gridbutton.addEventListener("click", () => {
    cardsDisplay.style.display = "grid";
    listDisplay.style.display = "none";
});

listbutton.addEventListener("click", showList);

function showList() {
    cardsDisplay.style.display = "none";
    listDisplay.style.display = "grid";
}