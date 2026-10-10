let inputField = document.getElementById('goal-fund');
let addBtn = document.getElementById('add-fund');
let resetBtn = document.getElementById('reset-fund');
let display = document.querySelector('p'); // Bina ID ke p tag ko pakra

let currentFund = 0;

// STEP 1: Page Load par purana data nikalo
let savedData = localStorage.getItem('myGoalFundData');
if (savedData) {
    currentFund = Number(savedData); // Pehle se saved string ko wapas math wale number mein badla
    display.innerText = currentFund;
}

// STEP 2: Add Fund Button Logic
addBtn.addEventListener('click', function () {
    let newFund = Number(inputField.value); // Input lo aur direct Number bana do

    currentFund = currentFund + newFund; // Main total mein izafa karo

    display.innerText = currentFund; // Screen par naya total dikhao
    localStorage.setItem('myGoalFundData', currentFund); // Khufiya dabbe mein save karo

    inputField.value = ''; // Box khali karo
});

// STEP 3: Reset Button Logic
resetBtn.addEventListener('click', function () {
    currentFund = 0; // Total wapas zero
    display.innerText = currentFund; // Screen par zero
    localStorage.removeItem('myGoalFundData'); // Khufiya dabbe se delete
});