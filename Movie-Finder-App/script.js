let input = document.getElementById('search-input');
let btn = document.getElementById('search-btn');
let grid = document.getElementById('movies-grid');

btn.addEventListener('click', async function () {
    let query = input.value;

    if (query === "") {
        alert("Bhai, movie ka naam toh likho!");
        return;
    }

    // Naya search karne par purane result saaf kar do aur Loading dikhao
    grid.innerHTML = "<h2>Loading... ⏳</h2>";

    try {
        // TVMaze API ko hit karo
        let response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        let data = await response.json(); // Data ab ek ARRAY [ ] hai, object { } nahi

        // Agar koi movie nahi mili (Array khali hai)
        if (data.length === 0) {
            grid.innerHTML = "<h2>Koi result nahi mila 😢</h2>";
            return;
        }

        // Data aagaya toh loading hata do
        grid.innerHTML = "";

        // LEVEL 2 CONCEPT: Array par ForEach Loop chalana
        data.forEach(function (item) {

            // Data nikalna (TVMaze format ke hisab se)
            let title = item.show.name;
            let rating = item.show.rating.average || "N/A";

            // Kuch movies ki image server par nahi hoti, isliye fallback placeholder lagana zaroori hai
            let imgUrl = item.show.image ? item.show.image.medium : "https://via.placeholder.com/210x295?text=No+Image";

            // JS ke andar HTML Card banana (Template Literals ` ` ka use karke)
            let cardHTML = `
                <div class="movie-card">
                    <img src="${imgUrl}" alt="${title}">
                    <h3>${title}</h3>
                    <p>⭐ Rating: ${rating}</p>
                </div>
            `;

            // += ka matlab hai purane cards ke sath naya card grid mein add karte jao
            grid.innerHTML += cardHTML;
        });

    } catch (error) {
        console.log("Error:", error);
        grid.innerHTML = "<h2>Internet masla ya API down hai!</h2>";
    }
});