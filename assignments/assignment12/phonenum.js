const randomButton = document.querySelector(".random-button").addEventListener("click", random);

function random() {
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

// Generating a random number in between the min and max values
function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

// Phone number
const output = document.querySelector('.output'); 
// String to Int
let outputInt = parseInt(output.textContent);