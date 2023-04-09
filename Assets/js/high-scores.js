//variables declared
var navBar = document.querySelector("nav");
var timer = document.querySelector(".timer");
var timeDisplayed = document.querySelector(".time")
//Query selectors
var doneMessage = document.querySelector("#doneMessage");
var finalScoreMessage = document.querySelector(".final-score-message")
var finalScoreDisplayed = document.querySelector("#final-score");
var submissionForm = document.querySelector(".submit-final-score");
var inputTextArea = document.querySelector(".initials");
var submitBtn = document.querySelector(".submitBtn")
//all finish game page elements in an array
var finishedGamePage = [navBar, timer, timeDisplayed, doneMessage, finalScoreMessage,finalScoreDisplayed,submissionForm,inputTextArea,submitBtn];
//more query selectors
var viewHighscores = document.querySelector(".view-high-scores");
var listHighScores = document.querySelector(".list-of-highscores");
var goBackBtn = document.querySelector(".back-to-home");
var clearHsBtn = document.querySelector(".clear-highscores");
//all high score page elements in an array
var highScoresPage = [viewHighscores, listHighScores, goBackBtn, clearHsBtn];
//undefined initials variable
var initials;
//getting the time-left local storage item and assigning it to the timeLeft variable
var timeLeft= localStorage.getItem("time-left");

function goToHighScores(event){
    //prevent default as the form will clear and render undefined without this
    event.preventDefault();
    //set the initials variable to what was inputted into the input box
    initials = inputTextArea.value.trim();
    //console.log to help debug/see in console what the initials are being rendered as
    console.log(initials);
        //if the initial input is not a number and is 3 characters or less
        if (isNaN(initials) && initials.length <= 3){
            //this makes the finished game page hidden
            for (var i=0; i<finishedGamePage.length; i++){
                finishedGamePage[i].classList.add("hidden");
                finishedGamePage[i].classList.remove("visible", "timer", "time", "final-score-message", "submit-final-score", "initials", "submitBtn");
        
            }
            //this makes the high scores page visible
            for (var i=0; i<highScoresPage.length; i++){
                highScoresPage[i].classList.add("visible");
                highScoresPage[i].classList.remove("hidden");
        } 
            //creates the li element
            var newListItem = document.createElement("li");
            //adds the high score text to the li
            newListItem.textContent = initials + " " + "-" + " " + timeLeft;
            //give the newly created li a class of high-score-li so it can be styled in the CSS
            newListItem.setAttribute("class", "high-score-li")
            //add new element to the DOM
            listHighScores.appendChild(newListItem);
    } //if the initial input is a number or is more than 3 characters, display error
        else {
            alert("initials must be less than 3 characters and cannot be numbers")
        }
    }
function goHome(){
    //takes the user to the home page
    window.location.href = "./index.html";
}
function clearHighScores(){
    //removes all highscore lis
    document.querySelector(".high-score-li").remove();
}

//put timeLeft value in finalScoreMessage and timer
timeDisplayed.textContent = timeLeft;
finalScoreDisplayed.textContent = timeLeft;
//Event Listeners
submitBtn.addEventListener("click",goToHighScores);
goBackBtn.addEventListener("click", goHome);
clearHsBtn.addEventListener("click", clearHighScores);
