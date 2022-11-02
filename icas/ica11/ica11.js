window.addEventListener('load', getQuote);

// Select the new quote button using a querySelector. Assign it to a new variable.
const quoteButton = document.querySelector(".new-quote");

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

// Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".
// Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.
// Change the getQuote function to use the fetch method to get a random quote from that endpoint.
quoteButton.addEventListener("click", getQuote);

async function getQuote(){
    // console.log("test click worked");
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response)
    console.log(json_response["message"]);

    displayQuote(json_response["message"]);
}

function displayQuote(x) {
    // const quoteBox = document.querySelector('#js-quote-text');
    // const textMessage = document.createTextNode(x);

    // quoteBox.appendChild(textMessage);

    document.getElementById("js-quote-text").textContent = x;
}