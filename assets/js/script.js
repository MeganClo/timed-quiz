// targetting the question section of html
var questionEl = document.getElementById("questions");

// targetting the answer buttons
var answerButtons = document.getElementById("answers");

// targetting where I want my timer to go
var timerEl = document.getElementById("timer");

// variable for my current question index
currentQuestionIndex = 0;

// Targeting the Start Quiz button
var startButton = document.getElementById('startQuiz-btn');

// Targeting my hidden containter to "unhide"
var showQuestions = document.querySelector(".hidden");

// targetting the play again button
var startAgain = document.getElementById("again-btn");

// targetting the highscore form
var highscores = document.getElementById("score");

// targetting submit button 
var submitButton = document.getElementById("submit-btn");

//setting the amount of questions to be asked
var indexOf = 3;

// targetting the specific answer buttons
var answerEl1 = document.getElementById("answer-btn1");
var answerEl2 = document.getElementById("answer-btn2");
var answerEl3 = document.getElementById("answer-btn3");
var answerEl4 = document.getElementById("answer-btn4");

// Setting the start time
var timeLeft = 45;
var timeInterval = ""

// Possible Questions to be asked during quiz
var QandA = [
    {
        question: "When a function belongs to an object, we refer to it as what?",
        answersChoice: {
            a: "a method",
            b: "a principle",
            c: "a property",
            d: "a value"
        },
        correctAnswer: "a method"
    },
    {
        question: "Variables declared outside of any function are called what?",
        answersChoice: {
            a: "local function",
            b: "useful function",
            c: "global function", 
            d: "single value"
        },
        correctAnswer: "global function"
    },
    {
        question: "Which of the below is NOT a data type in JavaScript?",
        answersChoice: {
            a: "Boolean",
            b: "String",
            c: "null",
            d: "all are data types in JavaScript",
        },
        correctAnswer: "all are data types in JavaScript"
    },
    {
        question: "We put our JavaScript inside what HTML element?",
        answersChoice: {
            a: "<jScript>",
            b: "<sourceJs>",
            c: "<script>",
            d: "<href>"
        },
        correctAnswer: "<script>"
    },
    {
        question: "How would you put 'Hello Joe' in an alert box?",
        answersChoice: {
            a: "window.alert('Hello Joe')",
            b: "display.('Hello Joe')",
            c: "message('Hello Joe')",
            d: "function('Hello Joe')"
        },
        correctAnswer: "window.alert('Hello Joe')"
    },
    {
        question: "How do you create a function called 'newFunction' in JavaScript?",
        answersChoice: {
            a: "newFunction()",
            b: "function newFunction()",
            c: "function = newFunction()",
            d: "function (newFunction)"
        },
        correctAnswer: "function newFunction()"
    },
    {
        question: "What is one way you can add a comment in JavaScript?",
        answersChoice: {
            a: "// comment would go here",
            b: "<!-- comment would go here -->",
            c: "'comment would go here'",
            d: "* comment would go here"
        },
        correctAnswer: "// comment would go here"
    },
    {
        question: "Which of these shows a correct way to declare a JavaScript variable?",
        answersChoice: {
            a: "var myName",
            b: "variable = myName",
            c: "var(myName)",
            d: "v myName"
        },
        correctAnswer: "var myName"
    },
    {
        question: "Who invented JavaScript?",
        answersChoice: {
            a: "John Resig",
            b: "Brendan Eich",
            c: "Javier Scripter",
            d: "Yan Zhu"
        },
        correctAnswer: "Brendan Eich"
    },
    {
        question: "What data type is boolean?",
        answersChoice: {
            a: "True or False",
            b: "large numbers",
            c: "decimal number values",
            d: "Symbols"
        },
        correctAnswer: "True or False"
    }
]

// Shuffling the Questions so that they are asked in a different order every time. 
var randomQuestions = QandA.sort(() => Math.random() - 0.5);
console.log(randomQuestions)


// time element
function countdown() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time is Out!";
            showQuestions.classList.add("hidden");
            startAgain.classList.remove("hidden");
        }
};

// inserting my questions and answers into my HTML
function insertQandA() {
    questionEl.innerText = randomQuestions[currentQuestionIndex].question;
    answerEl1.innerText = randomQuestions[currentQuestionIndex].answersChoice.a;
    answerEl2.innerText = randomQuestions[currentQuestionIndex].answersChoice.b;
    answerEl3.innerText = randomQuestions[currentQuestionIndex].answersChoice.c;
    answerEl4.innerText = randomQuestions[currentQuestionIndex].answersChoice.d;
};


// fuction to start quiz
function startQuiz() {
    showQuestions.classList.remove("hidden");
    startButton.classList.add("hidden");
    timeInterval = setInterval(countdown, 1000);
    insertQandA();
};

// function to reload the page to start the quiz again
function startOver() {
    location.reload();
};

// function to move through the quiz questions and end the game
function nextQuestion(event) {
    var answer = (event.target.innerText);

    if (answer === randomQuestions[currentQuestionIndex].correctAnswer && currentQuestionIndex <= indexOf && timeLeft > 0) {
        currentQuestionIndex = currentQuestionIndex + 1;
        insertQandA();
    }
    else if (currentQuestionIndex <= indexOf && timeLeft > 0) {
        currentQuestionIndex = currentQuestionIndex + 1;
        timeLeft = timeLeft-10;
        insertQandA();
    }
    else {
        clearInterval(timeInterval);
        score();
    }
};

// function to submit the userName
function score() {
    showQuestions.classList.add("hidden");
    highscores.classList.remove("hidden");
};

// Starting the quiz once button is clicked
startButton.onclick = startQuiz;

// listening for "click" to trigger the next question
answerButtons.addEventListener("click", nextQuestion);

// starting the game again
startAgain.onclick = startOver;

// submitting score and starting over
submitButton.addEventListener("click", function() {
    event.preventDefault();
    // fetch userName from input field
    var userName = document.getElementById("name").value;
    // fetch user score
    var score = (timeLeft + 1);
    // fetch old scores from localStorage or create a new one if it's an empty array
    var savedScores = JSON.parse(localStorage.getItem("scores") || "[]");
    // add new userName and score to saved scores
    savedScores.push({ userName, score});
    // save the new array to localStorage
    localStorage.setItem("scores", JSON.stringify(savedScores));
    var link = document.getElementById("after-submit");
    link.classList.remove("hidden");
    highscores.classList.add("hidden");
});
