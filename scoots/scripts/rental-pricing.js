const pricingJSON = "https://jkweber236.github.io/wdd230/scoots/data/prices.json";

async function GetInfo() {
    const response = await fetch(pricingJSON);
    const data = await response.json();
    displayPrices(data.rentals);
}

function displayPrices(rentals) {

    const reservationTable = document.querySelectorAll("table")[0];
    const walkInTable = document.querySelectorAll("table")[1];

    const reservationBody = reservationTable.querySelector("tbody");
    const walkInBody = walkInTable.querySelector("tbody");


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

        reservationBody.appendChild(reservationRow);

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

        walkInBody.appendChild(walkInRow);
    })
}

GetInfo();