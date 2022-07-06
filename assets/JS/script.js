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
var wrong1 = document.querySelector("#wrong1");

var quizScore = 0;
var scoreEl = document.querySelector("#score");

var enterInitialsBox = document.querySelector("#enterInitialsBox");
var initialsInputEl = document.querySelector("#initialsInput");
var submitBtn = document.querySelector("#submitBtn");
var msgEl = document.querySelector("#msg");

var yourScoreBox = document.querySelector("#yourScoreBox");
var yourScoreEl = document.querySelector("#yourScore");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");

//Timer

function countDown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;

        //Takes time off the clock for the wrong answer
        wrong1.addEventListener("click", function () {
            timerEl.textContent = timeLeft -= 5; 
        });

        //Stops timer after question 5 is answered 
        correct5.addEventListener("click", function () {
            clearInterval(timeInterval);
            timerEl.textContent = 0;
        });

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            skiptoEnter(); 
            enterInitials (); 
        };

    }, 1000);
}

//Click Start to start timer & start quiz
startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", startQuiz);

//Used in Timer for when time runs out, the page skips to --> Show Score & Enter Initials 
function skiptoEnter() {
    questionBox1.setAttribute("style", "display: none");
    questionBox2.setAttribute("style", "display: none");
    questionBox3.setAttribute("style", "display: none");
    questionBox4.setAttribute("style", "display: none");
    questionBox5.setAttribute("style", "display: none");
    enterInitialsBox.setAttribute("style", "display: none");
    yourScoreBox.setAttribute("style", "display: none");
}

//Show Question 1
function startQuiz() {
    introTextEl.setAttribute("style", "display: none");
    questionBox1.setAttribute("style", "display: flex"); 
    correct1.addEventListener("click", question2, quizScore++); //Select Correct Answer 1
    wrong1.addEventListener("click", question2, quizScore--); //Select Wrong Answer 1
}

//Show Question 2
function question2() {
    questionBox1.setAttribute("style", "display: none");
    questionBox2.setAttribute("style", "display: flex");
    correct2.addEventListener("click", question3, quizScore++); //Select Correct Answer 2
}

//Show Question 3
function question3() {
    questionBox2.setAttribute("style", "display: none");
    questionBox3.setAttribute("style", "display: flex");
    correct3.addEventListener("click", question4, quizScore++); //Select Correct Answer 3
}

//Show Question 4
function question4() {
    questionBox3.setAttribute("style", "display: none");
    questionBox4.setAttribute("style", "display: flex");
    correct4.addEventListener("click", question5, quizScore++); //Select Correct Answer 4
}

//Show Question 5
function question5() {
    questionBox4.setAttribute("style", "display: none");
    questionBox5.setAttribute("style", "display: flex");
    correct5.addEventListener("click", enterInitials, quizScore++); //Select Correct Answer 5
}

//Show Score & Enter Initials
function enterInitials () {
    questionBox5.setAttribute("style", "display: none");
    enterInitialsBox.setAttribute("style", "display: flex");
    scoreEl.textContent = "Your Final Score: " + quizScore;   
}

//Submits Initials & Score to Local Storage
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var records = {
        initials: initialsInputEl.value,
        score: quizScore,
    };

    if (records.initials === "") {
        msgEl.textContent = "Initials cannot be blank";
        return;
    };

    localStorage.setItem("records", JSON.stringify(records));
    showYourScore();
}) 


//Show Your Stored Score with Initials
function showYourScore () {
    enterInitialsBox.setAttribute("style", "display: none");
    yourScoreBox.setAttribute("style", "display: flex");
    yourScoreEl.textContent = initialsInputEl.value + " - " + quizScore;
}

//Back Button To Intro Page, Resets Score, Restarts Timer??
backBtn.addEventListener("click", startBeginning);

function startBeginning () {
    yourScoreBox.setAttribute("style", "display: none");
    introTextEl.setAttribute("style", "display: flex");   
}

//Clears All Stored Scores
clearBtn.addEventListener("click", clearScores);

function clearScores () {
    yourScoreEl.textContent = ""
    localStorage.clear()
    quizScore = 0;
}






