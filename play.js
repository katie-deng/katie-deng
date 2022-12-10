// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const toContinue = document.getElementById('continue');
const yesButton = document.getElementById('yesbtn');
const noButton = document.getElementById('nobtn');
const story2 = document.querySelector('.story2')

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

toContinue.style.visibility = "hidden";

// 2. RAW TEXT STRINGS
var storyText = "Bob finally finished finals. It felt like 300 pounds of stress was lifted off. It was a beautiful day out, 94 degrees fahrenheit to be exact. To jumpstart break, Bob hit up :insertx: to :inserty:. Luckily, :insertx: was free and decided to tag along with Bob. The two decided to go to a :insertz:, where some unexpected things began to happen."
const insertX = ["Ironman", "Spiderman", "Groot", "Thor"]; // people
const insertY = ["go out partying", "hang out", "spill some tea", "go destress after a long semester"]; // activity 
const insertZ = ["mall", "haunted house", "coffee shop", "library"]; // location

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

var xvalue = "";
var yvalue = "";
var zvalue = "";

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    xvalue = xvalue.replace("", xItem);
    var yItem = randomValueFromArray(insertY);
    yvalue = yvalue.replace("", yItem);
    var zItem = randomValueFromArray(insertZ);
    zvalue = zvalue.replace("", zItem);
   
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":insertx:", xItem);
    
    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
        newStory = newStory.replace("Bob", name);
        newStory = newStory.replace("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(21.43) + " kilograms";
        const temperature =  Math.round(34.4) + " degrees centigrade";
        newStory = newStory.replace("94 degrees fahrenheit", temperature)
        newStory = newStory.replace("300 pounds", weight)
    }

  story.textContent = newStory;
  story.style.visibility = 'visible';
  document.querySelector('.randomize').disabled = true;
}

// 4. FINAL PROJECT EXTENSION
var storyText2 = ":insertx: had a suspicion that something weird was going to happen. As soon as they stepped foot into the :insertz:, :inserta: popped up out of nowhere and began annoying Bob and :insertx:. In an attempt to deter the annoyance, :insertx: :insertb:. Luckily, that did the trick and :inserta: stopped bothering them. Bob and :insertx: sighed with relief, and carried on in the :insertz:. 20 minutes passed when all of a sudden, :insertc:. Distant beeping could be heard. Bob rubbed their eyes. He had awoken. This had all been a bad dream 🙂"
const insertA = ["Thanos", "Ronan", "Loki", "Ultron", "Doctor Octopus"]; // people
const insertB = ["began running in the opposite direction", "used their superpower to stop the yapping", "slapped some sense into them"]; // action
const insertC = ["there was a loud explosion in the distance", "associates of the previous annoyance appeared", "the floor beneath began to crumble away", "the sky turned red and started rumbling"]; // event

randomize.addEventListener('click', addStory);

function addStory() {
    toContinue.style.visibility = "visible";
    yesButton.addEventListener("click", storypt2);
    noButton.addEventListener("click", disabling);
}

function storypt2 () {
    var newStory2 = storyText2
    var aItem = randomValueFromArray(insertA);
    var bItem = randomValueFromArray(insertB);
    var cItem = randomValueFromArray(insertC);

    newStory2 = newStory2.replace(":insertx:", xvalue);
    newStory2 = newStory2.replace(":insertz:", zvalue);
    newStory2 = newStory2.replace(":inserta:", aItem);
    newStory2 = newStory2.replace(":insertx:", xvalue);
    newStory2 = newStory2.replace(":insertx:", xvalue);
    newStory2 = newStory2.replace(":insertb:", bItem);
    newStory2 = newStory2.replace(":inserta:", aItem);
    newStory2 = newStory2.replace(":insertx:", xvalue);
    newStory2 = newStory2.replace(":inserty:", yvalue);
    newStory2 = newStory2.replace(":insertz:", zvalue);
    newStory2 = newStory2.replace(":insertc:", cItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory2 = newStory2.replace("Bob", name);
        newStory2 = newStory2.replace("Bob", name);
    }
    story2.textContent = newStory2;
    story2.style.visibility = 'visible';
    noButton.disabled = true;
    yesButton.disabled = true;
}

function disabling() {
    alert("Thanks for playing!");
    noButton.disabled = true;
    yesButton.disabled = true;
}