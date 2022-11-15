// Retrieving random phone number ---------------------------
const output = document.querySelector(".output"); 

// Retrieving random phone number generator 
const randomButton = document.querySelector(".random-button").addEventListener("click", random);

function random() {
  outputInt = randomNumber(0, 9999999999);
  output.textContent = outputInt;
}

// Generating a random number in between the min and max values
function randomNumber(min, max) {
  const num = Math.floor(1000000000 + Math.random() * 9000000000);
  return num;
}

// String to Int
let outputInt = parseInt(output.textContent);

// Retrieving yes button ---------------------------
const yesButton = document.querySelector(".yes-button").addEventListener("click", set);
// Retrieving displayed phone number
const phoneNumber = document.querySelector(".phonenumber");
// Retriving digit question 
const counterQ = document.querySelector(".counter")

// Stores the user's phone numbers 1 by 1
let str = "";
// Counter to move onto next digit
let count = 0;

function set() {
  var tempArray = String(outputInt).split("").map((outputInt)=>{
    return Number(outputInt);
  });
  let digit = tempArray[count];
  str = str + digit;
  phoneNumber.textContent += digit;
  switch (count) {
    case 0:
      counterQ.textContent = "Does the second digit match your phone number?";
      phoneNumber.textContent = str + "XXXXXXXXX";
      break;
    case 1:
      counterQ.textContent = "Does the third digit match your phone number?";
      phoneNumber.textContent = str + "XXXXXXXX";
      break;
    case 2:
      counterQ.textContent = "Does the fourth digit match your phone number?";
      phoneNumber.textContent = str + "XXXXXXX";
      break;
    case 3:
      counterQ.textContent = "Does the fifth digit match your phone number?";
      phoneNumber.textContent = str + "XXXXXX";
      break;
    case 4:
      counterQ.textContent = "Does the sixth digit match your phone number?";
      phoneNumber.textContent = str + "XXXXX";
      break;
    case 5:
      counterQ.textContent = "Does the seventh digit match your phone number?";
      phoneNumber.textContent = str + "XXXX";
      break;
    case 6:
      counterQ.textContent = "Does the eighth digit match your phone number?";
      phoneNumber.textContent = str + "XXX";
      break;
    case 7:
      counterQ.textContent = "Does the ninth digit match your phone number?";
      phoneNumber.textContent = str + "XX";
      break;
    case 8:
      phoneNumber.textContent = str + "X";
      counterQ.textContent = "Does the tenth digit match your phone number?";
      break;
    case 9:
      phoneNumber.textContent = str;
  }
  count ++;
  if (str.length === 10) {
    alert("You successfully entered your phone number:" + str)
    document.querySelector(".yes-button").disabled = true;
  } 
}

// Retrieving reset button
const resetButton = document.querySelector(".reset-button").addEventListener("click",baseNumber)

function baseNumber() {
  output.textContent = "0000000000";
  phoneNumber.textContent = "XXXXXXXXXX";
   counterQ.textContent = "Does the first digit match your phone number?"
  str = ""
  count = 0
  document.querySelector(".yes-button").disabled = false;
}

// No button ---------------------------
const noButton = document.querySelector(".no-button").addEventListener("click", message);

function message() {
  alert("Try another random number! 🤪");
}