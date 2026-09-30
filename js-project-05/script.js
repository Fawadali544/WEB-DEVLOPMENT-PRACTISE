let themeBtn = document.getElementById('theme-btn');
let bodyElement = document.body;

themeBtn.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-theme');

    if (bodyElement.classList.contains('dark-theme')) {
        themeBtn.innerText = "switch to Light Mode";
    } else {
        themeBtn.innerText = "switch to Dark Mode";
    }
})