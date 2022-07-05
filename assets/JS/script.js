// addEventListener to start button that will begin timer & displays question
//answered correctly.. add bottom box border with "Correct!" move on
//answered incorrectly.. add bottom box border with "Wrong!" & subtract time from timer
//all questions answered or timer reaches 0.. game over
//save initials and score 

var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var introTextEl = document.querySelector("#introText");

var questionBox1 = document.querySelector("#questionBox1");
var questionBox2 = document.querySelector("#questionBox2");
var questionBox3 = document.querySelector("#questionBox3");
var questionBox4 = document.querySelector("#questionBox4");
var questionBox5 = document.querySelector("#questionBox5");

var correct1 = document.querySelector("#correct1");
var correct2 = document.querySelector("#correct2");
var correct3 = document.querySelector("#correct3");
var correct4 = document.querySelector("#correct4");
var correct5 = document.querySelector("#correct5");

var quizScore = 0;
var scoreEl = document.querySelector("#score");

var recordInitialsBox = document.querySelector("#recordInitials");
var submitBtn =document.querySelector("#submitBtn");

var highScoresBox = document.querySelector("#highScoresBox");
var highestScore = document.querySelector("#highestScore")
var backBtn = document.querySelector("#backBtn")
var clearBtn = document.querySelector("#clearBtn");


//Click Start to start timer & start quiz
startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", startQuiz);

//Timer
function countDown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

//Show Question 1
function startQuiz() {
    introTextEl.setAttribute("style", "display: none");
    questionBox1.setAttribute("style", "display: flex"); 
}

//Select Correct Answer 1 
correct1.addEventListener("click", question2, quizScore++);

//Show Question 2
function question2() {
    questionBox1.setAttribute("style", "display: none");
    questionBox2.setAttribute("style", "display: flex");
}

//Select Correct Answer 2
correct2.addEventListener("click", question3, quizScore++);

//Show Question 3
function question3() {
    questionBox2.setAttribute("style", "display: none");
    questionBox3.setAttribute("style", "display: flex");
}

//Select Correct Answer 3
correct3.addEventListener("click", question4, quizScore++);

//Show Question 4
function question4() {
    questionBox3.setAttribute("style", "display: none");
    questionBox4.setAttribute("style", "display: flex");
}

//Select Correct Answer 4
correct4.addEventListener("click", question5, quizScore++);

//Show Question 5
function question5() {
    questionBox4.setAttribute("style", "display: none");
    questionBox5.setAttribute("style", "display: flex");
}

//Select Correct Answer 5
correct5.addEventListener("click", recordInitials, quizScore++);

//Recorded Player Score

//Show Score & Record Initials
function recordInitials () {
    questionBox5.setAttribute("style", "display: none");
    recordInitialsBox.setAttribute("style", "display: flex");
    scoreEl.textContent = "Your Final Score: " + quizScore; 
}

//Stores Score and Initials 
submitBtn.addEventListener("click", showHighScores);

//Show High Scores
function showHighScores () {
    recordInitialsBox.setAttribute("style", "display: none");
    highScoresBox.setAttribute("style", "display: flex");
    highestScore.textContent = "Enter Highest Stored Score Function Here";
}

//Go Back Button
backBtn.addEventListener("click", startBeginning);

//Starts Back at Intro Page
function startBeginning () {
    highScoresBox.setAttribute("style", "display: none");
    introTextEl.setAttribute("style", "display: flex");
}

//Clear Button
clearBtn.addEventListener("click",  );

//Clears All Stored Scores
function clearScores () {
    highestScore.textContent = "Clear All Stored Scores Function Here"
}






