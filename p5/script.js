let myButtton = document.querySelector('.action-btn');
let myPage = document.querySelector('body');

myButtton.addEventListener('click', function () {
    if (myPage.style.backgroundColor === 'black') {
        myPage.style.backgroundColor = 'white';
        myPage.style.color = 'black';




    } else {
        myPage.style.backgroundColor = 'black';
        myPage.style.color = 'white';

    }

});