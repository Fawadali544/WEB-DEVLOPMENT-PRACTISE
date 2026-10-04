let quoteDisplay = document.getElementById('quote-display');
let generateBtn = document.getElementById('generate-btn');


let vibesArray = [
    "Code likho, bug fix karo, repeat!",
    "Aaj gym mein heavy weight uthana hai.",
    "Delta Force ya PUBG? Aaj raat ka scene set hai.",
    "Errors se mat daro, wo tumhe behtar dev banate hain.",
    "UI/UX par focus karo, design king hota hai.",
    "Thoda rest bhi zaroori hai, screen se break lo!"
];


generateBtn.addEventListener('click', function () {
    let randomIndex = Math.floor(Math.random() * vibesArray.length);
    quoteDisplay.innerText = vibesArray[randomIndex];
});