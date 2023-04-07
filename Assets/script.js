//declare any variables
var question1 = {
    description: "question name",
    option1: "option",
    option2: "option",
    option3: "option",
    option4: "option"
};
var question2 = {
    description: "question name",
    option1: "option",
    option2: "option",
    option3: "option",
    option4: "option"
};
var question3 = {
    description: "question name",
    option1: "option",
    option2: "option",
    option3: "option",
    option4: "option"
};
var question4 = {
    description: "question name",
    option1: "option",
    option2: "option",
    option3: "option",
    option4: "option"
};
var allQuestions = [question1, question2, question3, question4];

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


