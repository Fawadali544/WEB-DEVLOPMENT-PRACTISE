let clockDisplay = document.getElementById('clock-display');

function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // 12-hour format mein convert karo
    hours = hours % 12;
    hours = hours ? hours : 12; // Agar hours 0 hai to 12 dikhao

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockDisplay.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}
updateClock(); // Page load hone par pehle se hi clock update ho jaye
setInterval(updateClock, 1000); // Har second clock update karo