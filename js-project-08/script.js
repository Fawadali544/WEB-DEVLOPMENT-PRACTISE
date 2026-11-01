let stopwatchDisplay = document.getElementById('stopwatch-display');
let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');

let seconds = 0; // Hamara waqt zero se shuru hoga
let timmerId = null; // Is variable mein hum timer ka engine save karenge taake baad mein usay rok sakein
// 1. Start Button Logic
startBtn.addEventListener('click', function () {
    // Agar timer pehle se nahi chal raha, tabhi naya timer start karo
    if (timmerId === null) {
        timmerId = setInterval(function () {
            seconds++; // Har second baad waqt mein 1 ka izafa
            stopwatchDisplay.innerText = seconds + " seconds"; // Screen par naya waqt dikhao
        }, 1000); // 1000 milliseconds = 1 second
    }
});
// 2. Stop Button Logic
stopBtn.addEventListener('click', function () {
    clearInterval(timmerId); // Chalte hue timer engine ko rok do
    timmerId = null; // Engine ko wapas khali kar do taake dobara start ho sake
});



// 3. Reset Button Logic
resetBtn.addEventListener('click', function () {
    clearInterval(timmerId); // Timer ko roko
    timmerId = null; // Engine khali karo
    seconds = 0; // Waqt ko wapas zero par le aao
    stopwatchDisplay.innerText = "0 seconds"; // Screen par zero dikhao
}
);