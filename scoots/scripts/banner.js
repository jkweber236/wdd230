const bannerButton = document.querySelector('#bannerButton');
const banner = document.querySelector('#banner');

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