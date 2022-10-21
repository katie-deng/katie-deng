const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ["2019-01-26.JPG", "2019-09-26.JPG", "2019-12-19.JPG", "2020-11-20.JPG", "2021-11-16.JPG"];

/* Declaring the alternative text for each image file */
const alts = {
    "2019-01-26.JPG" : "Sunset 1",
    "2019-09-26.JPG" : "Sunset 2",
    "2019-12-19.JPG" : "Sunset 3",
    "2020-11-20.JPG" : "City lights",
    "2021-11-16.JPG" : "Sunset 4"
}

/* Looping through images */
for (const image of imageArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);

    /* Adding a click event listener to each thumbnail image */
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
        });
    }


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
