var fromHomeToHighscores = document.querySelector("#Hs-page");
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
    event.preventDefault();
    //already an array - gets what is in local storage already (from past games) or sets it to an empty array
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    //console.log to see all high scores
    console.log(highscores);
    //sort array from high score to lowest score
    highscores.sort((a, b) => b.score - a.score);
    //this makes the finishedGamepage hidden
    for (var i=0; i<finishedGamePage.length; i++){
        finishedGamePage[i].classList.add("hidden");
        finishedGamePage[i].classList.remove("visible", "timer", "time", "final-score-message", "submit-final-score", "initials", "submitBtn");

    }
    //this makes the high scores page visible
    for (var i=0; i<highScoresPage.length; i++){
        highScoresPage[i].classList.add("visible");
        highScoresPage[i].classList.remove("hidden");
    }         
    for (var i=0; i<highscores.length;i++){
        //creates the li element
        var newListItem = document.createElement("li");
        console.log(newListItem);
        //adds the high score text to the li
        newListItem.textContent = (i + 1) + ". " + highscores[i].initials + " " + "-" + " " + highscores[i].score;
        //give the newly created li a class of high-score-li so it can be styled in the CSS
        newListItem.setAttribute("class", "high-score-li")
        //add new element to the DOM
        listHighScores.appendChild(newListItem);
    }
}
fromHomeToHighscores.addEventListener("click",navigateHighscores);