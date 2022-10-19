const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = {
    "pic1.jpg" : "Closeup of a human eye",
    "pic2.jpg" : "Marble pattern",
    "pic3.jpg" : "Flowers",
    "pic4.jpg" : "Egyptian art",
    "pic5.jpg" : "Butterfly on leaf"
}

/* Looping through images */


const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
