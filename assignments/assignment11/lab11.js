// Boredom Activity
window.addEventListener('load', getQuote);

const quoteButton = document.querySelector(".new-quote");

const endpoint = "https://www.boredapi.com/api/activity";

quoteButton.addEventListener("click", getQuote);

async function getQuote(){
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response)

    displayQuote(json_response["activity"]);
}

function displayQuote(x) {
    document.getElementById("js-quote-text").textContent = x;
}

// Cat Pics 

window.addEventListener('load', getCat);

// const catGenerator = document.querySelector(".picture");

const source = "https://dog.ceo/api/breeds/image/random";

quoteButton.addEventListener("click", getCat);

async function getCat(){
    let img = await fetch(source);
    let print = await img.text();

    let json_print = JSON.parse(print);
    console.log(json_print)
    console.log(json_print["message"])

    displayCat(json_print["message"]);
}

function displayCat(x) {
    document.getElementById("js-cat").src = x;
}
