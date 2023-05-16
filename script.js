const generateButton = document.querySelector("#generateButton");
const jokeText = document.querySelector("#jokeText");
// here i will async 
const getDadJokes = async() => {
    const response = await fetch("https://icanhazdadjoke.com/", {

        method: "Get",
        headers: {
            Accept: "application/json"
        },
    });

    const jsonJokeData = await response.json();
    // here will return onlz one joke in a json formate and i will access it in jsonJokeData.joke to get the statment 
    jokeText.textContent = jsonJokeData.joke;
    // console.log(jsonJokeData.joke);

};

generateButton.addEventListener("click", (e) => {
    getDadJokes();
});