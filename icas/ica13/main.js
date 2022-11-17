const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  // Animating the first image
  alice1.animate(aliceTumbling, aliceTiming);

  // Animating the rest of the images
  alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming).finished);
//   .catch(error => console.error(`Error animating Alices: ${error}`));

// ----------------------------------------------------------------------------- Mozilla exercises 

// Source: https://github.com/BrendanWorley/testfield/blob/main/main.js

// "Callback Hell" version: call-backs inside of call-backs = hard to read and debug
function tumbleAlice () {
    const animateObject = alice1.animate(aliceTumbling, aliceTiming);
    // 1 second after the aliceTiming duration
    let intverval = 2001;
    // The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. 
    setTimeout (() => {
        const animateObject2 = alice2.animate(aliceTumbling, aliceTiming);
        const interval1 = 2001;
        setTimeout (() => {
            const animateObject3 = alice3.animate(aliceTumbling, aliceTiming);
        }, 2001);
    }, interval);
};  

// .then() hell version 
function tumbleAliceThen() {
    const showAnimateObject = alice1.animate(aliceTumbling, aliceTiming);
    const promise1 = Promise.resolve(showAnimateObject.finished);
      
      promise1.then(() => {
        const showAnimateObject2 = alice2.animate(aliceTumbling, aliceTiming);  
        const promise2 = Promise.resolve(showAnimateObject2.finished);
          
          promise2.then(() => {
            const showAnimateObject3 = alice3.animate(aliceTumbling, aliceTiming);
          });
      });      
  };
