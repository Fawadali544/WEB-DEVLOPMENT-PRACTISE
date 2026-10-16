let input = document.getElementById('username-input');
let btn = document.getElementById('search-btn');

let avatar = document.getElementById('avatar');
let nameDisplay = document.getElementById('name');
let bioDisplay = document.getElementById('bio');
let reposDisplay = document.getElementById('repos');
let followersDisplay = document.getElementById('followers');

btn.addEventListener('click', async function () {
    let username = input.value;


    if (username === "") {
        alert("bhi pehle username toh likooo");
        return;

    }

    try {
        let response = await fetch(`https://api.github.com/users/${username}`);

        let data = await response.json();

        if (data.message === "Not Found") {
            alert("ya user Github par nhi ha!");
            return;
        }


        avatar.src = data.avatar_url;
        nameDisplay.innerText = data.name || data.login;
        bioDisplay.innerText = data.bio || "no bio available";
        reposDisplay.innerText = `Repos: ${data.public_repos}`;
        followersDisplay.innerText = `Followers: ${data.followers}`;
    } catch (error) {
        console.log("internet ka masla ha Ya Api down ha:", error);
    }
});
