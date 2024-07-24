const bannerButton = document.querySelector('#bannerButton');
const banner = document.querySelector('#banner');

// var today = new Date();
// var dayOfWeek = today.getDay();
// function showBanner() {
//     if (dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3) {
//         banner.classList.toggle("close");
//     }
// }
// showBanner();


function toggle() {
    if (banner.classList == close) {
        banner.classList.toggle("open");

    } else {
        if (banner.classList == "open" || banner.classList == "") {
            banner.classList.toggle("close");
        }

    }
}

bannerButton.addEventListener('click', () => {
    toggle()
});