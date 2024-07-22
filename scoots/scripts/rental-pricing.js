const pricingJSON = "https://jkweber236.github.io/wdd230/scoots/data/prices.json";

async function GetInfo() {
    const response = await fetch(infoURL);
    const data = await response.json();
    displayPricess(data.rentals);
}

function displayPrices(rentals) {

    const reservationTable = document.querySelectorAll("table")[1];
    const walkInTable = document.querySelectorAll("table")[2];

    rentals.forEach((rental) => {
        const reservationRow = document.createElement("tr");

        let reserveName = document.createElement("td");
        let reserveMaxPersons = document.createElement("td");
        let reserveHalfDay = document.createElement("td");
        let reserveFullDay = document.createElement("td");

        reserveName.innerHTML = rental.name;
        reserveMaxPersons.innerHTML = rental.maxriders;
        reserveHalfDay.innerHTML = rental.reservation.half;
        reserveFullDay.innerHTML = rental.reservation.full;

        reservationRow.appendChild(reserveName);
        reservationRow.appendChild(reserveMaxPersons);
        reservationRow.appendChild(reserveHalfDay);
        reservationRow.appendChild(reserveFullDay);

        reservationTable.querySelector("tbody").appendChild(reservationRow);

        const walkInRow = document.createElement("tr");

        let walkInName = document.createElement("td");
        let walkInMaxPersons = document.createElement("td");
        let walkInHalfDay = document.createElement("td");
        let walkInFullDay = document.createElement("td");

        walkInName.innerHTML = rental.name;
        walkInMaxPersons.innerHTML = rental.maxriders;
        walkInHalfDay.innerHTML = rental.walkin.half;
        walkInFullDay.innerHTML = rental.walkin.full;

        walkInRow.appendChild(walkInName);
        walkInRow.appendChild(walkInMaxPersons);
        walkInRow.appendChild(walkInHalfDay);
        walkInRow.appendChild(walkInFullDay);

        walkInTable.querySelector("tbody").appendChild(reservationRow);
    })
}

// const forecastDays = Object.keys(days).slice(0, 3);
// forecastDays.forEach(day => {
//     const row = document.createElement('tr');
//     const dateCell = document.createElement('td');
//     const highCell = document.createElement('td');
//     const lowCell = document.createElement('td');

//     dateCell.textContent = day;
//     highCell.textContent = `${Math.round(days[day].high)}°F`;
//     lowCell.textContent = `${Math.round(days[day].low)}°F`;

//     row.appendChild(dateCell);
//     row.appendChild(highCell);
//     row.appendChild(lowCell);

//     forecastTable.appendChild(row);
// });


// companies.forEach((company) => {
//     let card = document.createElement("section")
//     let logo = document.createElement("img")
//     let address = document.createElement("p")
//     let number = document.createElement("p")
//     let website = document.createElement("a")
//     address.innerHTML = company.address
//     number.innerHTML = company.phone
//     website.innerHTML = "Website"

//     card.setAttribute('class', "card")
//     logo.setAttribute('class', "logo")
//     logo.setAttribute('src', company.image);
//     logo.setAttribute('alt', `${company.name}'s logo`);
//     logo.setAttribute('loading', "lazy");