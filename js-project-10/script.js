let secretInput = document.getElementById('secret-input');
let saveBtn = document.getElementById('save-btn');
let clearBtn = document.getElementById('clear-btn');
let savedDisplay = document.getElementById('saved-display');



let oldData = localStorage.getItem('mysecretData'); // Pehle se saved data ko retrieve karo

if (oldData) {
    savedDisplay.innerText = oldData; // Agar data hai to screen par dikhao
}

saveBtn.addEventListener('click', function () {
    let currentText = secretInput.value; // Input field ka current value lo

    localStorage.setItem('mysecretData', currentText); // Input value ko localStorage mein save kar
    savedDisplay.innerText = currentText; // Screen par naya data dikhao
    secretInput.value = ''; // Input field ko clear kar do
});

clearBtn.addEventListener('click', function () {
    localStorage.removeItem('mysecretData'); // localStorage se data hata do
    savedDisplay.innerText = ''; // Screen par data hata do
});