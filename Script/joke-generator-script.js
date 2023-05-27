/* Joke Generator Script starts */

let jokeqr_code_generator_Container = document.getElementById("joke");
let jokeBtn = document.getElementById("joke-button");
let joke_url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {

    jokeqr_code_generator_Container.classList.remove("joke-fade");
    fetch(joke_url)
        .then(data => data.json())
        .then(item => {
            jokeqr_code_generator_Container.textContent = `${item.joke}`;
            jokeqr_code_generator_Container.classList.add("joke-fade");
        });
}

jokeBtn.addEventListener("click", getJoke);
getJoke();

/* Joke Generator Script ends */