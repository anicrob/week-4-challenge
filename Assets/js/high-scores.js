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
//undefined initials variable
var timeLeft = localStorage.getItem("time-left")


function saveHighScore () {
   
    }
//length + 1
//go to high scores page
//loop through what is in highscores array

//display high scores only
function goToHighScores(event){
    event.preventDefault();
    var initials = inputTextArea.value.trim();
    if(initials !== ''){
        //template
        var finalScore = {
            initials: initials,
            score: timeLeft
        }
        //already an array
        var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
        //pushing the template into existing array (highscores) 
        highscores.push(finalScore);
        localStorage.setItem("highscores", JSON.stringify(highscores))
        console.log(highscores);

    for (var i=0; i<finishedGamePage.length; i++){
        finishedGamePage[i].classList.add("hidden");
        finishedGamePage[i].classList.remove("visible", "timer", "time", "final-score-message", "submit-final-score", "initials", "submitBtn");

    }
    //this makes the high scores page visible
    for (var i=0; i<highScoresPage.length; i++){
        highScoresPage[i].classList.add("visible");
        highScoresPage[i].classList.remove("hidden");
}         
        for (var i=0; i<highscores[i].length;i++)
            //creates the li element
            var newListItem = document.createElement("li");
            console.log(newListItem);
            //adds the high score text to the li
            newListItem.textContent = highscores.initials.length + ". " + highscores.initials[i] + " " + "-" + " " + highscores.score[i];
            //give the newly created li a class of high-score-li so it can be styled in the CSS
            newListItem.setAttribute("class", "high-score-li")
            //add new element to the DOM
            listHighScores.appendChild(newListItem);
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
//save the high score
saveHighScore();
//put timeLeft value in finalScoreMessage and timer
timeDisplayed.textContent = timeLeft;
finalScoreDisplayed.textContent = timeLeft;
//Event Listeners
submitBtn.addEventListener("click",goToHighScores);
goBackBtn.addEventListener("click", goHome);
clearHsBtn.addEventListener("click", clearHighScores);
