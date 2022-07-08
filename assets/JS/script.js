var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var introBox = document.querySelector("#introBox");

var questionBox = document.querySelector("#questionBox");
var question = document.querySelector('#question');
var correct = document.querySelector('#correct')
var wrong0 = document.querySelector('#wrong0')
var wrong1 = document.querySelector('#wrong1')
var wrong2 = document.querySelector('#wrong2')
var questionsArr = ["First", "Second", "Third", "Fourth", "Fifth"];
var correctArr = ["First Correct", "Second Correct", "Third Correct", "Fourth Correct", "Fifth Correct"];
var wrongArr = ["Wrong 0", "Wrong 1", "Wrong 2"];

var enterInitialsBox = document.querySelector("#enterInitialsBox");
var scoreEl = document.querySelector("#score");
var initialsInputEl = document.querySelector("#initialsInput");
var submitBtn = document.querySelector("#submitBtn");
var msgEl = document.querySelector("#msg");

var yourScoreBox = document.querySelector("#yourScoreBox");
var yourScoreEl = document.querySelector("#yourScore");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");

//Click Start to start timer & start quiz
startBtn.addEventListener("click", startQuiz);

//Starts Quiz
function startQuiz() {
var quizScore = 0;

    //Timer
    function countDown() {
        var timeLeft = 10;
        var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;

        //Takes time off the clock for the wrong answer FIX THISSSSSSSSSSSSS
        wrong0.addEventListener("click", function () {
            timerEl.textContent = timeLeft - 10; //time goes back up on the next question or -= takes more time off than needed
        });

        // Stops timer after question 5 is answered FIX THISSSSSSSSSSSSS
        correct.addEventListener("click", function () {
            clearInterval(timeInterval);
            timerEl.textContent = 0;
        });

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            enterInitials (); 
        };

        }, 1000);
    }
    countDown();

    //Show Question 1
    function question1() {
        introBox.setAttribute("style", "display: none");
        questionBox.setAttribute("style", "display: flex"); 
        
        question.textContent = questionsArr[0];
        correct.textContent = correctArr[0];
        wrong0.textContent = wrongArr[0];
        wrong1.textContent = wrongArr[1];
        wrong2.textContent = wrongArr[2];

        correct.addEventListener("click", question2, quizScore++); //Select Correct Answer 
        wrong0.addEventListener("click", question2, quizScore--); //Select Wrong Answer 
        wrong1.addEventListener("click", question2, quizScore--); //Select Wrong Answer 
        wrong2.addEventListener("click", question2, quizScore--); //Select Wrong Answer 
    }
    question1();
    
    //Show Question 2
    function question2() {
        question.textContent = questionsArr[1];
        correct.textContent = correctArr[1];
        wrong0.textContent = wrongArr[0]
        wrong1.textContent = wrongArr[1];
        wrong2.textContent = wrongArr[2];

        correct.addEventListener("click", question3, quizScore++); //Select Correct Answer
        wrong0.addEventListener("click", question3, quizScore--); //Select Wrong Answer 
        wrong1.addEventListener("click", question3, quizScore--); //Select Wrong Answer 
        wrong2.addEventListener("click", question3, quizScore--); //Select Wrong Answer
    }
    question2();
    
    //Show Question 3
    function question3() {
        question.textContent = questionsArr[2];
        correct.textContent = correctArr[2];
        wrong0.textContent = wrongArr[0]
        wrong1.textContent = wrongArr[1];
        wrong2.textContent = wrongArr[2];

        correct.addEventListener("click", question4, quizScore++); //Select Correct Answer
        wrong0.addEventListener("click", question4, quizScore--); //Select Wrong Answer 
        wrong1.addEventListener("click", question4, quizScore--); //Select Wrong Answer 
        wrong2.addEventListener("click", question4, quizScore--); //Select Wrong Answer
    }
    question3();

    //Show Question 4
    function question4() {
        question.textContent = questionsArr[3];
        correct.textContent = correctArr[3];
        wrong0.textContent = wrongArr[0]
        wrong1.textContent = wrongArr[1];
        wrong2.textContent = wrongArr[2];

        correct.addEventListener("click", question5, quizScore++); //Select Correct Answer
        wrong0.addEventListener("click", question5, quizScore--); //Select Wrong Answer 
        wrong1.addEventListener("click", question5, quizScore--); //Select Wrong Answer 
        wrong2.addEventListener("click", question5, quizScore--); //Select Wrong Answer
    }
    question4();

    //Show Question 5
    function question5() {
        question.textContent = questionsArr[4];
        correct.textContent = correctArr[4];
        wrong0.textContent = wrongArr[0]
        wrong1.textContent = wrongArr[1];
        wrong2.textContent = wrongArr[2];

        correct.addEventListener("click", enterInitials, quizScore++); //Select Correct Answer
        wrong0.addEventListener("click", enterInitials, quizScore--); //Select Wrong Answer 
        wrong1.addEventListener("click", enterInitials, quizScore--); //Select Wrong Answer 
        wrong2.addEventListener("click", enterInitials, quizScore--); //Select Wrong Answer
        correct.addEventListener("click", enterInitials, quizScore++); //Select Correct Answer 5
    }
    question5();

    //Show Score & Enter Initials
    function enterInitials () {
        questionBox.setAttribute("style", "display: none");
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
    });


    //Show Your Stored Score with Initials
    function showYourScore () {
        enterInitialsBox.setAttribute("style", "display: none");
        yourScoreBox.setAttribute("style", "display: flex");
        yourScoreEl.textContent = initialsInputEl.value + " - " + quizScore;
    }
}

//Back Button To Intro Page (keeps score)
backBtn.addEventListener("click", startQuiz);

//Clears All Stored Scores
clearBtn.addEventListener("click", clearScores);

function clearScores () {
    yourScoreEl.textContent = "";
    localStorage.clear();
    quizScore = 0;
}





