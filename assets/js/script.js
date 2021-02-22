// targetting the question section of html
var questionEl = document.getElementById("questions");

// targetting the answer buttons
var answerButtons = document.getElementById("answers");


// targetting the specific answer buttons
var answerEl1 = document.getElementById("answer-btn1");
var answerEl2 = document.getElementById("answer-btn2");
var answerEl3 = document.getElementById("answer-btn3");
var answerEl4 = document.getElementById("answer-btn4");

var timeLeft = 

// time element
//function countdown() {
//    var timeLeft = 45;
//    var timeInterval = setInterval(function() {
//        if (timeLeft > 0) {
//            nextQuestion();
//        }
//    })
//}

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
            b: "alert.('Hello Joe')",
            c: "message('Hello Joe')",
            d: "both A and B are correct."
        },
        correctAnswer: "both A and B are correct."
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
console.log(randomQuestions);

// variable for my current question index
currentQuestionIndex = 0;

// Targeting the Start Quiz button
var startButton = document.getElementById('startQuiz-btn');

// Targeting the div with the start button to hide after it's clicked
var hideButton = document.querySelector(".start-button");

// Targeting my hidden containter to "unhide"
var showQuestions = document.querySelector(".hidden");

// Starting the quiz once button is clicked
startButton.onclick = startQuiz;

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
    console.log ("testing button!");
    showQuestions.classList.remove("hidden");
    hideButton.classList.add("hidden");
    insertQandA();
//    answerButtons.onclick = nextQuestion();
};


function nextQuestion(event) {
    var answer = (event.target.innerText);
    console.log(answer);
    console.log(randomQuestions[currentQuestionIndex].correctAnswer);
    if (answer === randomQuestions[currentQuestionIndex].correctAnswer) {
        currentQuestionIndex = currentQuestionIndex + 1;
        console.logt(currentQuestionIndex);
        insertQandA;
    }
};

answerButtons.addEventListener("click", nextQuestion);



//nextQuestion();

console.log(randomQuestions);
console.log(randomQuestions[currentQuestionIndex].question);