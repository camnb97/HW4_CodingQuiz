/*
 1. Design UI
    - Draw a picture
    - Determine where you will display feedback
    - Determine what is clickable, what will recieve keytinput, change input
      timers, scroll events, etc
    - rough in the elements in HTML, style is less important
*/
/* a timer must begin when the quiz begins
        --timer must be reduced when a question is answered incorrect
        --

/*
 2. Identify events
    - Identify HTML elements that generate events, create variables at the top of 
      the page.

      -- .quiz-question in the body of html will hold each question
      --

      var theElement = document.querySelector([CSS Selector for your element]);
    - Create event handlers

      theElement.addeventListener([EVENT TYPE], function(event){
        // do stuff here...
      })

    ...where [EVENT TYPE] is "click" or "change" or "keydown" or whatver

    - Identify the things that should happen in the click handlers
    - there is always a page load event. Usually have a function for anything
      that needs setting up at the beginning, before people interact with the 
      page. Start the execution of this setup function at the bottom of page
*/

/*
 3. Declare variables
    - Global state variables emerge while working on event handlers (i.e., it
      becomes clearer what needs to be tracked across the application)
    - state variables:
      "State describes the status of the entire program or an individual
       object. It could be text, a number, a boolean, or another data type.

       It’s a common tool for coordinating code. For example, once you update state, a bunch of different functions can instantly react to that change."
       https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/
    - Does the state variable need to be global (i.e., used by all the event handlers) or does it only need to be local
      to the event handler?
*/

/*
 3. Refactor
    - identify tasks that can be broken into their own functions, outside the event handlers
    - Are there tasks that more than one event handler share?
*/


let countdown = document.querySelector(".timer")
console.log(countdown)
let secondsLeft = 90


function beginQuiz() {
    let timer = setInterval(function () {
        secondsLeft--;
        countdown.textContent = secondsLeft
    }, 1000 )

}

function qOne() {

}

function qTwo() {

}