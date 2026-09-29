let ageInput = document.getElementById('age-input');
let checkBtn = document.getElementById('check-btn');
let resultMessage = document.getElementById('result-message');

checkBtn.addEventListener('click', function () {
    let age = ageInput.value;

    if (age >= 18) {
        resultMessage.innerText = "Welcome AndAR aa jao";
        resultMessage.style.color = "#27ae60";

    } else {
        resultMessage.innerText = "chotta ha bhi tu jaah ka paharai kr ";
        resultMessage.style.color = "#e74c3c";


    }

});