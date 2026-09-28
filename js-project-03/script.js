// Step 1: HTML elements ko pakarna
let nameInput = document.getElementById('name-input'); // Input dabba
let btnGreet = document.getElementById('greet-btn');   // Button
let messageDisplay = document.getElementById('message-display'); // Khali h2 tag

// Step 2: Button par sensor (Event Listener) lagana
btnGreet.addEventListener('click', function () {

    // Nayi Cheez 1: Input dabbe se user ka likha hua text utha kar ek dabbe (variable) mein dalo
    let userName = nameInput.value;

    // Nayi Cheez 2: Apna custom message aur user ka naam aapas mein joro (+)
    let finalMessage = "Welcome " + userName + ", aaj ka GitHub push ready hai!";

    // Step 3: Is naye message ko screen par (h2 tag mein) show kardo
    messageDisplay.innerText = finalMessage;

});