let itemInput = document.getElementById('item-input');
let addBtn = document.getElementById('add-btn');
let itemList = document.getElementById('item-list');

// Nayi Cheez 1: Array (Khaali dabba jisme multiple cheezein aayengi)
let itemsArray = [];

addBtn.addEventListener('click', function () {
    let newItem = itemInput.value;

    if (newItem !== "") { // Check: Agar input khali nahi hai
        // Nayi Cheez 2: push() - Array ke andar naya item daalna
        itemsArray.push(newItem);

        // List ko khali karo taake purani items dobara na chap jayein
        itemList.innerHTML = "";

        // Nayi Cheez 3: forEach Loop - Array mein majood har item ke liye code chalana
        itemsArray.forEach(function (item) {
            itemList.innerHTML += `<li>${item}</li>`; // HTML mein <li> add karna
        });

        // Input dabbe ko wapas khali kar do agle item ke liye
        itemInput.value = "";

    }


});
