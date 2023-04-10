var goToHsPage = document.querySelector("#HS-page");
var navBar = document.querySelector("#home");
var timer = document.querySelector(".timer");
var timeDisplayed = document.querySelector(".time")
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

function navigateHighscores (event){
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
}
goToHsPage.addEventListener("click", navigateHighscores);