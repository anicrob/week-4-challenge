//declare any variables
var question1 = {
    text: "What animals sleep with only one side of their brains?",
    option1: "cats and dogs",
    option2: "crabs and lobsters",
    option3: "dolphins and whales - correct answer",
    option4: "mosquitos and bees"
};
var question2 = {
    text: "Who named the Pacific Ocean?",
    option1: "Ferdinand Magellan - correct",
    option2: "Christopher Columnus",
    option3: "Vikings",
    option4: "Amerigo Vespucci"
};
var question3 = {
    text: "What is the rarest M&M color?",
    option1: "green",
    option2: "Brown - correct",
    option3: "red",
    option4: "blue"
};
var question4 = {
    text: "The unicorn is the national animal of which country?",
    option1: "Brazil",
    option2: "Switzerland",
    option3: "Iceland",
    option4: "Scotland - correct"
};
var question5 = {
    text: "How long is New Zealand’s Ninety Mile Beach?",
    option1: "no one knows",
    option2: "55 miles - correct",
    option3: "20 miles",
    option4: "90 miles"
};
var allQuestions = [question1, question2, question3, question4, question5];
var startBtn = document.querySelector(".startBtn");
var welcomeMessage = document.querySelector(".welcome")
var welcomePage = [startBtn, welcomeMessage];
var questionArea = document.querySelector(".qaf-area")
var timer = document.querySelector(".time");
var option1 = document.querySelector("#op1");
var option2 = document.querySelector("#op2");
var option3 = document.querySelector("#op3");
var option4 = document.querySelector("#op4");
var questionText = document.querySelector(".question-text");
var optionContainer = document.querySelector(".question-options");
var feedbackMessage = document.querySelector(".feedback");
var questionPage = [questionArea, option1, option2, option3, option4, questionText, optionContainer];
var timeLeft = 0;
var index = 0;


//working
function startGame(event) {
    for (var i=0; i<welcomePage.length; i++){
        welcomePage[i].classList.add("hidden");
        welcomePage[i].classList.remove("visible", "welcome");

    }
    for (var i=0; i<questionPage.length;i++){
        questionPage[i].classList.add("visible");
        questionPage[i].classList.remove("hidden");
    }
    startTimer();
    questionText.textContent= allQuestions[0].text;
    option1.textContent=allQuestions[0].option1;
    option2.textContent=allQuestions[0].option2;
    option3.textContent=allQuestions[0].option3;
    option4.textContent=allQuestions[0].option4;
}
//working
function startTimer(){
    timeLeft = 61;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            clearInterval(timeInterval);
            setTimerLocalStorage()
            finishHighscores();
        }
      }, 1000)
}
function changeQuestion (direction){
        if
        (
            timeLeft < 0 ||
            index >= allQuestions.length
         )
         {
            finishHighscores();
        } else {
            index = index + direction;
            questionText.textContent = allQuestions[index].text;
            option1.textContent= allQuestions[index].option1;
            option2.textContent = allQuestions[index].option2;
            option3.textContent = allQuestions[index].option3;
            option4.textContent = allQuestions[index].option4;
        }
    }
function questionEvalution(event) {
    var element = event.target;
    if (element.matches("button")){
        var validate = element.getAttribute("data-validate");
    }
    console.log(validate);
    if(validate === "wrong"){
        timeLeft-=5;
        timer.textContent = timeLeft;
        setTimeout(function(){
            feedbackMessage.setAttribute("class", "visible");
            feedbackMessage.textContent = "Wrong!"},
            30);
        changeQuestion(1);
    } else{
        setTimeout(function(){
            feedbackMessage.setAttribute("class", "visible");
            feedbackMessage.textContent = "Correct!"},
            30);
        changeQuestion(1);
    }
}
function setTimerLocalStorage (){

}
function finishHighscores() {
    window.location.href = "./high-scores"
}

startBtn.addEventListener("click",startGame);
optionContainer.addEventListener("click",questionEvalution);




//start button functionality
//add in quiz questions layout to DOM with buttons and one p or div
//add in functionality for questions and answers to change with carosuel
//add in array for all questions
//use data properties to see if question is right
//if answer selected is correct move on
//if answer selected is wrong say that it's wrong
//if answer is wrong take a few seconds off the timer
//add timer functionality
//add functionality that you can go to the View Highscores page at any time during the quiz 

//high score page
//local storage use to get the timer/score
//at the end go to the scores page
//have an input for the initials
//when you submit the initials, the high scores (time left) will show up with the initials
//have a home button available
//clear scores button

//notes
//can use same CSS but separate JS
//index.html - start page - quiz - 
//set timeout for the correct/wrong feedback to disappear
//create one array of all questions - object
//increment index var by one in array (see navigate) - see carosuel
//see if we have time left or are at the end of the quiz
//questions in array each question itself would be an object - array contains objects (questions)
//for loop for each option/choice - create button - give button attributes - value - choice - if value matches 
//value attribute = choice/option - setAttribute() data properties in HTML
//start quiz function - hide start screen, show question screen, kick off timer
//inside of condition to see if answer is right or wrong then subtract time 
// -= subtract this many += add this many - decrement and increment - use for timer if answer is wrong
//set var at top called timeLeft - set at the beginning what the timer should start at
//checking to see if answer is right or wrong - see if they clicked on the right element (box)
//display feedback if right and wrong
//if timer goes to 0 end the quiz
//increment index variable - out of time or out of questions
//have it all in HTML but use JS to make it hidden or visible by switching the classes
//high score separate page is preferred/easier


// questionText.textContent= allQuestions[i].text;
//             option1.textContent=allQuestions[i].option1;
//             option2.textContent=allQuestions[i].option2;
//             option3.textContent=allQuestions[i].option3;
//             option4.textContent=allQuestions[i].option4;