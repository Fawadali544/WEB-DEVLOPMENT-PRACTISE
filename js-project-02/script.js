let count = 0;
let valueDisplay = document.getElementById('value');
let btnIncrease = document.getElementById('btn-increase');
let btnDecrease = document.getElementById('btn-decrease');
let btnReset = document.getElementById('btn-reset');

btnIncrease.addEventListener('click', function () {
    count = count + 1;
    valueDisplay.innerText = count;

});
btnDecrease.addEventListener('click', function () {
    count = count - 1;
    valueDisplay.innerText = count;

});
btnReset.addEventListener('click', function () {
    count = count = 0;
    valueDisplay.innerText = count;

});