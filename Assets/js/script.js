//declare any variables
//questions variable, with title, options, and correctAnswer properties in an array
var questions = [{
    title: "What animals sleep with only one side of their brains?",
    options: ["1. cats and dogs", "2. crabs and lobsters", "3. dolphins and whales","4. mosquitos and bees"],
    correctAnswer: "3. dolphins and whales"
},
{
    title: "Who named the Pacific Ocean?",
    options: ["1. Ferdinand Magellan", "2. Christopher Columbus", "3. Vikings", "4. Amerigo Vespucci"],
    correctAnswer: "1. Ferdinand Magellan"
},
{
    title: "What is the rarest M&M color?",
    options: ["1. green", "2. brown", "3. red", "4. blue"],
    correctAnswer: "2. brown"
},
 {
    title: "The unicorn is the national animal of which country?",
    options: ["1. Brazil","2. Switzerland","3. Iceland","4. Scotland"],
    correctAnswer: "4. Scotland"
},
{
    title: "How long is New Zealand’s Ninety Mile Beach?",
    options: ["1. no one knows","2. 55 miles","3. 20 miles", "4. 90 miles"],
    correctAnswer: "2. 55 miles"
}];
//document.querySelectors(s)
var startBtn = document.querySelector(".startBtn");
var welcomeMessage = document.querySelector(".welcome");
var welcomePage = [startBtn, welcomeMessage];
var questionArea = document.querySelector(".qaf-area");
var timer = document.querySelector(".time");
var option1 = document.querySelector("#op1");
var option2 = document.querySelector("#op2");
var option3 = document.querySelector("#op3");
var option4 = document.querySelector("#op4");
var questionText = document.querySelector(".question-text");
var optionContainer = document.querySelector(".question-options");
var feedbackMessage = document.querySelector(".feedback");
var questionPage = [questionArea, option1, option2, option3, option4, questionText, optionContainer];
//other variables
var timeLeft = 0;
var index = 0;

var highScores = localStorage.getItem("high-scores") || [];
//define a few functions that will be used later
//this is the timer function
function startTimer(){
    //start with 61 seconds
    timeLeft = 61;
    //use setInterval to decreate time
    var timeInterval = setInterval(function () {
        timeLeft--;
        //post decreased time to timer in DOM
        timer.textContent = timeLeft;
        //if we run out of time - get to zero, clear the clock, and finish quiz
        if(timeLeft === 0){
            clearInterval(timeInterval);
            setTimeout(finishedQuiz(), 3000);
        }
        //1,000 is milliseconds, so 1,000 milliseconds means we are decreasing by seconds
      }, 1000)
}
//function to go to the next question with an input of direction
function changeQuestion (direction){
    //first ensure that there is time and questions left
    if
    (
        timeLeft < 0 ||
        index >= 4
     )
     //if no time or questions are left end the quiz
     {
        finishedQuiz()
     //else go to the next question/option based on the calculated index (current index + input of direction)
    } else {
        index = index + direction;
        questionText.textContent = questions[index].title;
        option1.textContent= questions[index].options[0];
        option2.textContent = questions[index].options[1];
        option3.textContent = questions[index].options[2];
        option4.textContent = questions[index].options[3];
    }
}
//this function ends the quiz
function finishedQuiz() {
    //it first adds the time left to local storage and goes to the high scores page
    localStorage.setItem("time-left", JSON.stringify(timeLeft));
    //delays the location change by half a second to leave some time to see feedback for question 5
    setTimeout(function() {window.location.href = "./high-scores.html"},500);
}
//functions triggered by buttons

//start game when start button is clicked on
function startGame(event) {
    //this makes the welcome page hidden
    for (var i=0; i<welcomePage.length; i++){
        welcomePage[i].classList.add("hidden");
        welcomePage[i].classList.remove("visible", "welcome");

    }
    //this makes the questions page visible
    for (var i=0; i<questionPage.length;i++){
        questionPage[i].classList.add("visible");
        questionPage[i].classList.remove("hidden");
    }
    //start timer function is triggered
    startTimer();
    //we want to start off with question 1
    questionText.textContent= questions[0].title;
    option1.textContent=questions[0].options[0];
    option2.textContent=questions[0].options[1];
    option3.textContent=questions[0].options[2];
    option4.textContent=questions[0].options[3];
}

//once the first question has been answered this is first triggered 
function questionEvalution(event) {
    //it sees which option is clicked on within the ul or all options
    var element = event.target;
    //if the element clicked on is a button and its value does not match the question's correct answer, 
    if (element.matches("button") && element.textContent !== questions[index].correctAnswer){
        console.log(element.textContent, questions[index].correctAnswer);
        //subtract 5 seconds
        timeLeft -= 5;
        timer.textContent = timeLeft;
        //show feedback
        feedbackMessage.classList.add("visible");
        feedbackMessage.classList.remove("hidden");
        feedbackMessage.textContent = "Wrong! ❌"
        //hide feedback after 2 seconds
        setTimeout(function(){
            feedbackMessage.classList.add("hidden");
            feedbackMessage.classList.remove("visible");  
        },
            2000);
        //go to next question
        changeQuestion(1);
    //else means option chosen was correct
    } else{
        console.log(element.textContent, questions[index].correctAnswer);
        //show feedback 
        feedbackMessage.classList.add("visible");
        feedbackMessage.classList.remove("hidden");
        feedbackMessage.textContent = "Correct! ✅"
        //hide feedback after 2 seconds
        setTimeout(function(){
            feedbackMessage.classList.add("hidden");
            feedbackMessage.classList.remove("visible");        
        },
            2000);
        //go to next question
        changeQuestion(1);
    }
}
//start game when start button is clicked on 
startBtn.addEventListener("click",startGame);
//evaluate if the question was right or wrong when an option button is clicked on
optionContainer.addEventListener("click",questionEvalution);