//variables declared
//Query selectors
var navBar = document.querySelector("nav");
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
//timeLeft is getting the time-left value stored in localStorage set from script.js
var timeLeft = localStorage.getItem("time-left")


//length + 1
//go to high scores page
//loop through what is in highscores array

//display high scores only
function goToHighScores(event){
    event.preventDefault();
    var initials = inputTextArea.value.trim();
    if(initials !== ''){
        //template - set final score initials to input initials and score to timeLeft
        var finalScore = {
            initials: initials,
            score: timeLeft
        }
        //already an array - gets what is in local storage or sets it to an empty array
        var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
        //pushing the template into the existing array (highscores), so we are adding the new finalScore to the highscores array
        highscores.push(finalScore);
        //now we are updating the high scores in localStorage
        localStorage.setItem("highscores", JSON.stringify(highscores))
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
        for (var i=0; i<highscores[i].length;i++){
            //creates the li element
            var newListItem = document.createElement("li");
            console.log(newListItem);
            //adds the high score text to the li
            newListItem.textContent = highscores[i].length + ". " + highscores.initials[i] + " " + "-" + " " + highscores.score[i];
            //give the newly created li a class of high-score-li so it can be styled in the CSS
            newListItem.setAttribute("class", "high-score-li")
            //add new element to the DOM
            listHighScores.appendChild(newListItem);
        }

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
