// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
var storyText = "It was 94 fahrenheit outside, so :insertx: wanted to go out and enjoy the weather. When they got to :inserty:, they stared in awe for a few moments, then :insertz:. Bob was a bystander and completely understood the feeling — it was a hot day and :insertx: had 300 pounds of stress to unload."
const insertX = ["Aang and the gang", "Toph and the gang", "Katara and the gang", "Sokka and the gang"];
const insertY = ["the Waterfall Lagoon", "the Fancy Lady Day Spa", "Kyoshi Island"];
const insertZ = ["sighed in relief", "squealed with joy", "bathed in all its glory"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
    var newStory = storyText
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
   
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":insertx:", xItem);
    
    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name)
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(21.43 + " stone");
        const temperature =  Math.round(34.4) + " centigrade";
        newStory = newStory.replace("94 fahrenheit", temperature)
        newStory = newStory.replace("300 pounds", weight)
    }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}