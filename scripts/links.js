const baseURL = "https://jkweber236.github.io/wdd230/";
const linksURL = "https//jkweber.github.io/wdd230/data/links.json"
const activityLinks = document.querySelector('#activity-links');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    let count = 0

    weeks.forEach((week) => {
        let listItem = document.createElement("li")
        listItem.setAttribute("class", "leftalign")

        week.links.forEach((link) => {
            if (count > 0) {
                let span = document.createElement("span")
                span.innerHTML = " | "
                listItem.appendChild(span)
            }
            let newLink = document.createElement("a")


            newLink.setAttribute('href', link.url);
            newLink.setAttribute("class", "projects")
            newLink.textContent = link.title;
            listItem.appendChild(newLink);
            count += 1;
        })
        count = 0
        activityLinks.appendChild(listItem)
    })
};

getLinks();
// const lessonTitle = document.createElement('h2');
// lessonTitle.textContent = `Lesson ${week.week}`;
// lessonDiv.appendChild(lessonTitle);

// lesson.links.forEach(link => {
//     const linkElement = document.createElement('a');
//     linkElement.href = `${baseURL}${link.url}`;
//     linkElement.textContent = link.title;
//     lessonDiv.appendChild(linkElement);