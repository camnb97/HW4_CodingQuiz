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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let quizQuestions = [
    {
        question: "What is Javascript?",
        answers: {
            a: "Downloadable content",
            b: "A language",
            c: "A website for sharing fonts",
            d: "The person who invented the internet"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you call a function?",
        answers: {
            a: "functionName()",
            b: "dial its phone number",
            c: "yell",
            d: "you cant"
        },
        correctAnswer: "a"
    },
    {
        question: "What is CSS?",
        answers: {
            a: "stands for 'Call Sherrif Sam'",
            b: "A layout design",
            c: "A website for talking with strangers",
            d: "a way to style webpages"
        },
        correctAnswer: "d"
    },
    {
        question: "why don't dingos like babies?",
        answers: {
            a: "funny tasting",
            b: "too much salt",
            c: "the lady on tv",
            d: "dingos don;'t liken anybody"
        },
        correctAnswer: "c"
    },
    {
        question: "What is Javascript?",
        answers: {
            a: "Downloadable content",
            b: "A language",
            c: "A website for sharing fonts",
            d: "The person who invented the internet"
        },
        correctAnswer: "b"
    },
    {
        question: "why don't dingos like babies?",
        answers: {
            a: "funny tasting",
            b: "too much salt",
            c: "the lady on tv",
            d: "dingos don;'t liken anybody"
        },
        correctAnswer: "c"
    }
]
// var i = 0
// i+=1

//     console.log(quizQuestions
//         [i].answers.b)

let countdown = document.querySelector(".timer")
console.log(countdown)
let start = document.querySelector("#begin-quiz")
let bottomAlert = document.querySelector("#bottom-alert")
let questionOne = document.querySelector("#question")
let quizQ = document.querySelector("#quiz");
let nextBtn = document.querySelector("#nextQ")
let secondsLeft = 90
let qI = 0

console.log(nextBtn)

function beginQuiz() {
    let timer = setInterval(function () {
        countdown.innerHTML = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timer);
            bottomAlert.textContent = "Out of time!"
        }
        secondsLeft--;
    }, 1000)

    questionOne.textContent = quizQuestions[qI].question

    qI++
}

function nextQuestion(){

    questionOne.textContent = quizQuestions[qI].question

    qI++
}

function qOne() {
    ///some way to make this take up the entire body, or something

    //?..How to make clickable questions..?

    if (true) {
        qTwo
    } if (false) {
        bottomAlert.textContent = "Incorrect!";
        //?..make timer lose 5 sec ..?
    } else {
        bottomAlert.textContent = "Please choose an answer"
    }
}

start.addEventListener('click', function() {
    beginQuiz()
})

nextBtn.addEventListener('click', function(){
    console.log(qI)
    nextQuestion()
})

//git commit -m "got help from tutor, showed me how to navigate questions array, and how to make the correct answer go to the next question"